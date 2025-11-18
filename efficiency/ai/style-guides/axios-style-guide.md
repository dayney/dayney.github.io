---
outline: deep
editLink: false
---

# 官方风格指南摘录：优先级 A（必要，规避错误）与优先级 B（强烈推荐，增强可读性）

依据：
- Axios 文档：https://axios-http.com/docs/intro

说明：本文档以 A/B 结构为主，将原有项目级约定融合为“项目强化（PJ）”条目，统一正例/反例与检查清单，避免重复口径。并在规则下补充可复制代码模板/片段与 ESLint/TS 规则标注，便于自动化对齐。

---

## 优先级 A：必要（规避错误）

### A-1 API 必须经封装层调用（PJ）
- 规则：组件内禁止直接使用 `axios`；统一通过 `src/config/axios` 封装实例与 `src/api/**` 暴露的函数访问后端。
- 模板：
  ```ts
  // 组件内
  import { getUserProfile } from '@/api/system/user/profile'
  const profile = await getUserProfile(userId)
  ```
  ```ts
  // src/api/system/user/profile.ts
  import { http } from '@/config/axios'
  export function getUserProfile(id: number) { return http.get(`/system/user/${id}`) }
  ```
- 反例：
  ```ts
  // 组件中
  const res = await axios.get('/system/user/' + id)
  ```
- 规则映射：
  - ESLint：可通过 `no-restricted-imports` 限制组件中直接导入 `axios`
  - .cursorrules：强制 API 分层

### A-2 模块组织与命名（PJ）
- 规则：API 按业务域分文件（如 `src/api/system/user/profile.ts`），导出函数名用动宾短语（`getUserProfile`/`updateUserProfile`）。
- 模板：
  ```ts
  // src/api/system/user/profile.ts
  export function updateUserProfile(data: UpdateUserReq) { return http.post('/system/user', data) }
  ```

### A-3 类型安全（请求/响应建模）（PJ）
- 规则：为每个请求的入参与返回值提供 TS 类型；公共类型集中在 `src/types/**`。
- 模板：
  ```ts
  // src/types/user.ts
  export interface UpdateUserReq { id: number; name: string }
  export interface User { id: number; name: string }
  ```
- 反例：
  ```ts
  export async function updateUserProfile(data: any): Promise<any> { /* ... */ }
  ```
- 规则映射：
  - ESLint: `@typescript-eslint/no-explicit-any`, `no-unsafe-assignment`
  - TSConfig: `strict: true`, `noImplicitAny: true`

### A-4 统一错误处理与登录态拦截（PJ）
- 规则：拦截器统一处理通用错误码（如 401/403/5xx）与登录态；业务异常由调用方按返回结构处理并统一 `message.error` 展示。
- 模板：
  ```ts
  // src/config/axios.ts
  http.interceptors.response.use(
    (resp) => resp,
    (err) => {
      const { response } = err
      if (response?.status === 401) {
        // redirect to login
      }
      return Promise.reject(err)
    }
  )
  ```

### A-5 基础配置集中（PJ）
- 规则：`baseURL`、`timeout`、默认 `headers`、重试（如有）在封装层集中配置；禁止业务分散硬编码。
- 模板：
  ```ts
  import axios from 'axios'
  export const http = axios.create({ baseURL: import.meta.env.VITE_API_BASE, timeout: 15000 })
  ```

### A-6 请求去抖/取消（必要场景）（通用实践）
- 模板：
  ```ts
  const c = new AbortController()
  const p = http.get('/search', { signal: c.signal, params: { q } })
  // 新请求到来时：c.abort()
  ```

---

## 优先级 B：强烈推荐（增强可读性）

### B-1 序列化与参数规范（PJ）
- 规则：GET 查询参数统一使用 `qs` 序列化策略；数组、嵌套对象有一致 encode 规则。
- 模板：
  ```ts
  import qs from 'qs'
  http.defaults.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: 'brackets' })
  ```

### B-2 响应结构约定与解包（PJ）
- 规则：约定响应结构（如 `{ code, data, msg }`），在拦截器/封装层一次性解包，业务侧直接拿到 `data`。
- 模板：
  ```ts
  http.interceptors.response.use((resp) => {
    const r = resp.data as { code: number; data: unknown; msg?: string }
    if (r && typeof r === 'object' && 'code' in r) {
      if (r.code === 0) return r.data
      return Promise.reject(new Error(r.msg || 'Error'))
    }
    return resp.data
  })
  ```

### B-3 大文件与进度回调（PJ）
- 模板：
  ```ts
  export function upload(file: File, onProgress?: (p: number) => void) {
    const form = new FormData(); form.append('file', file)
    return http.post('/upload', form, { onUploadProgress: (e) => onProgress?.(e.progress || 0) })
  }
  ```

### B-4 幂等与重试（可选）
- 模板：
  ```ts
  // 简易退避重试（示意）
  async function retry<T>(fn: () => Promise<T>, times = 2) {
    let lastErr: unknown
    for (let i = 0; i <= times; i++) {
      try { return await fn() } catch (e) { lastErr = e; await new Promise(r => setTimeout(r, 2 ** i * 300)) }
    }
    throw lastErr
  }
  ```

### B-5 日志与可观测性（可选）
- 模板：
  ```ts
  http.interceptors.request.use((cfg) => { /* 上报时间/标签 */ return cfg })
  http.interceptors.response.use((resp) => { /* 记录耗时/错误 */ return resp })
  ```

---

## 附录 A：统一检查清单（合并版）
- [ ] 是否通过封装层发起请求（组件内无直接 axios）？
- [ ] 是否为入参/返回值定义了 TS 类型？
- [ ] 错误处理是否走统一拦截器，业务异常是否统一展示？
- [ ] 是否有统一的 `baseURL/timeout` 等基础配置？
- [ ] GET 参数序列化是否一致（qs）？
- [ ] 响应是否在封装层解包成 `data`？

## 附录 B：工具与规则映射
- ESLint：`@typescript-eslint/no-explicit-any`、`no-unsafe-assignment`、`no-restricted-imports`
- TypeScript：在 `src/types/**` 维护请求/响应类型；`strict: true`、`noImplicitAny: true`
- .cursorrules：固化“组件禁用 axios、API 必须经封装、响应解包与错误拦截”条目。

## 附录 C：项目内示例
- `src/api/system/user/profile.ts`：`getUserProfile` / `updateUserProfile` 类型与封装。
- `src/config/axios`：统一实例、拦截器与错误处理配置。
