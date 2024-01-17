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
    avatar: './public/logo.jpeg',
    name: '小宇',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/dayney' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      关于小宇
    </template>
    <template #lead>
      多年前端开发经验，目前已经拥有PMP证书，有2年的前端管理经验，主要是用VUE全家桶技术栈。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>