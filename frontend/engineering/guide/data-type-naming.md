---
title: 数据类型命名约定
description: 数据类型命名约定规范指南
---

# 数据类型命名约定与使用场景
::: tip
这里只是作为参考，知道后端命名，后续看到XXXVO、XXXDTO、XXXDO / XXXEntity，知道是什么意思，方便快速排查问题。
::: 

> 适用范围：`endiop-process-web` 全工程（前端 / BFF / 后端），覆盖 BPM、CRM、ERP 等业务模块。

## 1. 为什么需要区分？

- **语义清晰**：看到类型名即可判断所处层次（请求参数 / 展示数据 / 存储实体）。
- **隔离变化**：UI 变更改 VO、接口校验改 DTO、表结构调整改 DO，不互相影响。
- **安全合规**：避免直接把数据库敏感字段暴露给前端；DTO 只暴露白名单字段。
- **协作效率**：多人协同或新人接入时，减少“字段到底来自哪里”的沟通成本。

## 2. 快速对照表

| 类型后缀 | 全称 | 主要作用 | 常见场景 | 命名示例 |
| --- | --- | --- | --- | --- |
| `VO` | View Object | 提供给前端 / 视图层的数据 | Controller 响应、列表/详情展示、导出 | `ProcessDefinitionVO`、`UserProfileVO` |
| `DTO` | Data Transfer Object | 接收外部入参、服务之间的数据交换 | Controller 入参、RPC/Service 调用参数 | `ProcessModelCreateDTO`、`UserQueryDTO` |
| `DO` / `Entity` | Data Object / Entity | 数据库存储实体、领域模型 | ORM 映射、领域层聚合根 | `SysUserDO`、`ProcessInstanceEntity` |

> 约定：如无特殊说明，后端 REST 接口 **输入 DTO，输出 VO**；DAO 层仅操作 DO。

## 3. 各类型使用指南

### 3.1 VO（View Object）
- **位置**：`controller` 响应体、`/src/api/**` 中的响应类型。
- **职责**：
  - 聚合/裁剪后端数据，贴合前端视图需要；
  - 可包含格式化字段，如 `statusLabel`、`processVersionLabel`；
  - 不承载业务逻辑，保持轻量。
- **命名**：`<Domain><用途>VO`，例如 `ProcessModelDetailVO`。
- **反例**：直接把 DO 返回给前端，暴露内部字段或缺少 UI 需要的文案。

### 3.2 DTO（Data Transfer Object）
- **位置**：`controller` 入参模型、`service`/RPC 之间的调用参数。
- **职责**：
  - 封装请求参数，配合校验注解（如 `@IsString`）；
  - 过滤多余字段，避免直接绑定前端对象；
  - 记录分页、排序、过滤等“请求意图”。
- **命名**：`<Domain><行为>DTO`，如 `ProcessModelCreateDTO`、`ProcessModelQueryDTO`。
- **反例**：使用 DO 作为接口入参，导致持久化字段被前端修改。

### 3.3 DO / Entity（Data Object / Entity）
- **位置**：`repository`/`mapper` 层，或 DDD 领域实体。
- **职责**：
  - 与数据库表一一对应，包含 ID、创建时间、逻辑删除标记等；
  - 可包含领域逻辑（若遵循 DDD），也可以是纯数据结构（如 MyBatis DO）。
- **命名**：`<Domain>DO`（面向存储）或 `<Domain>Entity`（面向领域）。
- **反例**：将 VO/DTO 直接持久化，增加耦合且难以追踪字段来源。

## 4. 典型数据流 & 命名切换

```
前端表单 -> DTO -> Service -> DO -> 数据库
                                ↓
                             (查询)
                                ↓
                          DO -> VO -> 前端展示
```

1. **前端提交表单**：发送 `ProcessModelCreateDTO`。
2. **Controller 接收 DTO**：校验后交给 Service，转换成 `ProcessModelDO`。
3. **Service/DAO 写库**：`ProcessModelDO` -> DB。
4. **查询详情**：DAO 返回 `ProcessModelDO`。
5. **转换为 VO**：Service 组装并返回 `ProcessModelDetailVO` 给前端。

## 5. 编写建议与 checklist

- **保持单向转换**：DTO -> DO -> VO，避免 VO 再写回数据库。
- **字段命名一致**：除非前端需要重命名，优先复用原字段名。
- **必要注释**：关键字段（如状态值、类型枚举）必须在类型定义上加注释。
- **新增接口时先定义 DTO/VO**：明确出入参，避免临时拼接 `Record<string, any>`。
- **提交流程**：新增类型的同时在接口文档或 README 中补充用途说明。

## 6. 模板示例

```ts
// DTO：Controller 入参
export interface ProcessModelCreateDTO {
  /** 流程编码 */
  key: string;
  /** 流程名称 */
  name: string;
  /** 分类字典值 */
  category: string;
}

// DO：数据库实体
export interface ProcessModelDO {
  id: number;
  key: string;
  name: string;
  category: string;
  createTime: string;
}

// VO：返回给前端
export interface ProcessModelDetailVO {
  id: number;
  key: string;
  name: string;
  categoryLabel: string;
  statusLabel: string;
  processVersionLabel: string;
}
```

## 7. 常见问题 FAQ

- **Q：一定要定义三套吗？**  
  A：视复杂度而定，轻量 CRUD 可复用 DTO/VO，但 DO 仍需独立保持与数据库一致。

- **Q：前端直接用 DO 会怎样？**  
  A：容易暴露内部字段、出现耦合，尤其是包含权限字段、密钥等敏感信息时很危险。

- **Q：字段很多维护成本高怎么办？**  
  A：利用 TypeScript 的 `Pick`/`Omit` 或工具函数生成，仍保持命名后缀区分角色。

---

> 建议：所有新增模块在立项时先套用本指南，明确 DTO/VO/DO，并在代码审查中检查命名后缀是否与用途匹配。

