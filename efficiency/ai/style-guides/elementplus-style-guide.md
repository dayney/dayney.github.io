---
outline: deep
editLink: false
---

# 官方风格指南摘录：优先级 A（必要，规避错误）与优先级 B（强烈推荐，增强可读性）

依据：
- Element Plus 文档：https://element-plus.org/zh-CN/

说明：本文档以 A/B 结构为主，将原有项目级约定融合为“项目强化（PJ）”条目，统一正例/反例与检查清单，避免重复口径。并补充可复制代码模板/片段与 ESLint/Volar 相关规则标注，便于自动化对齐。

---

## 优先级 A：必要（规避错误）

### A-1 统一初始化与按需导入（PJ）
- 规则：使用项目已配置的插件初始化（`src/plugins/elementPlus`）；仅使用按需自动导入（unplugin-vue-components/auto-import），禁止手动全量引入。
- 模板：
  ```ts
  // src/plugins/elementPlus.ts
  import type { App } from 'vue'
  import 'element-plus/dist/index.css'
  export function setupElementPlus(app: App) {
    // 组件与指令按需由 unplugin-vue-components/auto-import 注入
    // 这里仅进行全局配置（如国际化）
  }
  // main.ts
  import { setupElementPlus } from '@/plugins/elementPlus'
  setupElementPlus(app)
  ```
- 反例：
  ```ts
  import ElementPlus from 'element-plus';
  app.use(ElementPlus) // 全量引入
  ```
- 规则映射：
  - ESLint：避免未使用导入 `no-unused-vars`，按需导入由插件完成

### A-2 表单体系与校验（PJ）
- 规则：表单/校验优先使用 `<el-form>` 体系，或项目统一 `<Form>` 封装；规则集中管理。
- 模板：
  ```vue
  <template>
    <el-form :model="model" :rules="rules" ref="formRef" label-width="120px">
      <el-form-item :label="t('form.name')" prop="name">
        <el-input v-model="model.name" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{ t('common.save') }}</el-button>
      </el-form-item>
    </el-form>
  </template>
  <script setup lang="ts">
  import type { FormInstance, FormRules } from 'element-plus'
  const { t } = useI18n()
  const formRef = ref<FormInstance>()
  const model = reactive({ name: '' })
  const rules: FormRules = { name: [{ required: true, message: t('form.rules.nameRequired') }] }
  const onSubmit = () => formRef.value?.validate()
  </script>
  ```
- 规则映射：
  - ESLint：`vue/valid-v-model`
  - Volar：对 v-model、props/emit 类型进行诊断

### A-3 统一交互反馈（PJ）
- 规则：成功 `message.success`，失败 `message.error`；对话框确认使用 `ElMessageBox.confirm`；禁止 `alert`。
- 模板：
  ```ts
  import { ElMessage, ElMessageBox } from 'element-plus'
  ElMessage.success(t('common.saved'))
  await ElMessageBox.confirm(t('common.confirmDelete'))
  ```

### A-4 类型安全（PJ）
- 规则：组件 props 与事件需类型化；对 `ElForm` 的 model/rules 定义明确的 TS 类型。
- 模板：见 A-2 示例中的 FormRules、FormInstance。

---

## 优先级 B：强烈推荐（增强可读性）

### B-1 表单可读性与可维护性（PJ）
- 模板：
  ```vue
  <el-card>
    <el-tabs v-model="active">
      <el-tab-pane :label="t('profile.base')" name="base">...</el-tab-pane>
      <el-tab-pane :label="t('profile.security')" name="security">...</el-tab-pane>
    </el-tabs>
  </el-card>
  ```

### B-2 命名模型 v-model:xxx（官方/通用实践）
- 模板：
  ```vue
  <el-dialog v-model:visible="visible" :title="t('dialog.title')" />
  ```
- 规则映射：
  - ESLint：`vue/valid-v-model`

### B-3 统一按钮与布局风格（PJ）
- 模板：
  ```vue
  <el-space>
    <el-button type="primary">{{ t('common.submit') }}</el-button>
    <el-button>{{ t('common.cancel') }}</el-button>
  </el-space>
  ```

### B-4 列表/表格最佳实践（PJ）
- 模板：
  ```vue
  <el-table :data="list" v-loading="loading" :empty-text="t('common.empty')">
    <el-table-column prop="name" :label="t('user.name')" />
    <el-table-column :label="t('common.actions')">
      <template #default="{ row }">
        <RowActions :row="row" @edit="onEdit(row)" />
      </template>
    </el-table-column>
  </el-table>
  ```
  ```vue
  <!-- RowActions.vue -->
  <template>
    <el-button link type="primary" @click="$emit('edit')">{{ t('common.edit') }}</el-button>
  </template>
  <script setup lang="ts">
  defineEmits<{ (e:'edit'): void }>()
  const { t } = useI18n()
  </script>
  ```

### B-5 无障碍与可用性（通用实践）
- 规则：确保交互元素有可访问名称；表单项提供 label 与校验信息；键盘操作支持。

---

## 附录 A：统一检查清单（合并版）
- [ ] 是否通过插件初始化并使用按需导入？
- [ ] 表单是否使用 `<el-form>`/统一 `<Form>` 封装且校验规范？
- [ ] 成功/失败反馈是否统一使用 `message.*` 与 `MessageBox`？
- [ ] 复杂表单是否分组/组件化，表格复杂单元是否抽离？
- [ ] 重要 props/事件是否具备 TS 类型？

## 附录 B：工具与规则映射
- ESLint：`vue/valid-v-model`、`@typescript-eslint/no-explicit-any`
- Volar：对 v-model 与组件 props/emit 类型进行诊断
- Style/格式：Prettier/Stylelint 统一格式
- .cursorrules：固化“Element Plus 统一、按需导入、表单封装、反馈统一”

## 附录 C：项目内示例
- `src/plugins/elementPlus` 插件初始化。
- `src/views/Profile/components/BasicInfo.vue` 表单与提交按钮风格一致。
