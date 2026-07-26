---
# https://vitepress.dev/reference/default-theme-home-page
layout: page

title: 关于作者
sidebar: false
lastUpdated: false
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/logo.jpeg',
    name: '张兵涛（小宇 / krui）',
    title: 'AI 驱动研发全栈工程师 / 前端技术负责人',
    links: [
      { icon: 'github', link: 'https://github.com/dayney' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      你好，我是张兵涛
    </template>
    <template #lead>
      12 年前端与跨端经验，持有 PMP 认证，拥有 3.5 年前端团队管理经验。当前专注于 AI 应用工程、AI 驱动研发与工程经验资产化。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

## 关于我

我长期从事前端、Hybrid 与跨端应用开发，经历过从业务工程师到前端技术负责人的完整成长路径。除了 Vue、React、Next.js 等 Web 技术栈，我也持续实践 Uni-App、Electron、音频可视化及复杂业务系统的工程化交付。

目前，我参与 AI 音乐创作、TTS 音频合成与智能客服等产品建设，关注的不只是如何接入模型，更包括流式交互、异步任务状态、音频处理和复杂前端状态治理等 AI 应用工程问题。

## 我关注的方向

### AI 应用工程

围绕 LLM、歌曲生成、TTS、SSE 流式通信、多轮会话、异步任务和浏览器端音频处理，探索 AI 能力如何稳定落地为可交付的产品体验。

### AI 驱动研发

我不把 AI 编码理解为简单地“生成代码”，而是把需求拆解、项目理解、架构分析、代码实现、变更审查、测试验证和交付复盘组织成可重复执行的人机协作流程。

### 工程经验资产化

在个人实践中，我将长期积累的业务规则、工程规范和问题处理方式沉淀为 SOP、Skill 与 Workflow，让 AI 能够读取项目上下文，在明确边界和质量标准下参与研发。

### 大前端与工程治理

我关注 Vue、React、Next.js、Hybrid、Uni-App 与 Electron 等技术在真实业务中的组合方式，也重视编码规范、Code Review、自动化测试、文档治理和团队交付质量。

## AI 研发实践

- [让 Cursor 熟悉项目的终极指南](/efficiency/ai/cursor-guide)：将黑盒项目转换为适合人机协作的白盒项目。
- [使用 Cursor MCP 调用 Chrome](/efficiency/ai/ai)：记录浏览器自动化工具链的配置、验证与排障过程。
- [前端工程化](/frontend/engineering/index)：持续整理研发规范、Code Review、测试与 CI/CD 实践。

## 联系我

- [GitHub](https://github.com/dayney)
- 邮箱：[krui0728@gmail.com](mailto:krui0728@gmail.com)
