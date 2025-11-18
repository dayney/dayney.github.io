---
outline: deep
editLink: false
---

# 官方风格指南摘录：优先级 A（必要，规避错误）与优先级 B（强烈推荐，增强可读性）

依据：
- UnoCSS 文档：https://uno.antfu.me/guide/

说明：本文档以 A/B 结构为主，将原有项目级约定融合为“项目强化（PJ）”条目，统一正例/反例与检查清单。并补充可复制配置/用法片段，便于自动化对齐。

---

## 优先级 A：必要（规避错误）

### A-1 使用场景边界（PJ）
- 规则：原子类用于布局与简单样式（间距、对齐、尺寸、颜色），复杂样式由 SCSS 承担；避免模板中堆叠超多原子类（>8 需评估）。
- 模板：
  ```vue
  <div class="flex items-center gap-3 text-sm text-gray-600">
    <img class="w-6 h-6 rounded-full" />
    <span>{{ name }}</span>
  </div>
  ```
- 反例：
  - 在单元素上叠加十余个类导致可读性极差。

### A-2 设计 Token 化（PJ）
- 规则：设计系统颜色/间距应在 UnoCSS 配置中定义 token/规则，禁止裸色值与随机尺寸。
- 配置：
  ```ts
  // uno.config.ts
  import { defineConfig, presetUno, presetIcons } from 'unocss'
  export default defineConfig({
    presets: [presetUno(), presetIcons()],
    theme: {
      colors: { brand: '#409eff', primary: '#409eff' },
      spacing: { sm: '8px', md: '16px', lg: '24px' }
    },
    shortcuts: {
      'btn-base': 'px-3 py-1 rounded text-white bg-brand hover:bg-brand/90'
    }
  })
  ```
- 反例：`text-[#409eff]`、`px-[13px]`（随意值）

### A-3 与组件库协同（PJ）
- 规则：与 Element Plus 冲突时以组件库为准；必要时通过 SCSS 覆盖并最小范围生效。

---

## 优先级 B：强烈推荐（增强可读性）

### B-1 shortcuts 与复用（PJ）
- 规则：将常用组合抽为 `shortcuts`，统一复用（如按钮内边距/圆角/字体）。
- 模板：
  ```vue
  <button class="btn-base">{{ t('common.save') }}</button>
  ```

### B-2 variants 使用（官方/通用实践）
- 模板：
  ```vue
  <div class="p-4 md:p-6 hover:bg-gray-50">
    <span class="text-gray-600 dark:text-gray-300">{{ title }}</span>
  </div>
  ```

### B-3 一致性的 class 组合（PJ）
- 规则：同一语义在不同页面使用一致的原子类组合；在组件级封装公共组合。

---

## 附录 A：统一检查清单（合并版）
- [ ] 是否可抽成 `shortcuts`？
- [ ] 是否重复定义了设计系统已有 token？
- [ ] 是否在模板中堆叠了过多原子类（>8）？

## 附录 B：项目内示例
- `src/plugins/unocss` 与 `uno.config.ts` 的配置；视图中的常用布局类 `flex`, `w-1/3`, `ml-3`。

## 官方链接
- UnoCSS Guide: https://uno.antfu.me/guide/
