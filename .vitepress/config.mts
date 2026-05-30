import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  lang: 'zh-CN',
  title: "蔚蓝咖啡厅 文档站",
  description: "在这里查看 蔚蓝咖啡厅 汉化包的使用文档。",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '平台教程', link: '/platform' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '使用配置', link: '/guide/index' },
          { text: '常见问题', link: '/guide/qa' },
        ]
      },
      {
        text: '平台教程',
        items: [
          { text: 'Android', link: '/platform/android' },
          { text: 'Windows', link: '/platform/windows' },
          { text: 'iOS', link: '/platform/ios' },
          { text: 'macOS', link: '/platform/macos' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bluearchive-cafe', ariaLabel: 'GitHub 组织'}
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 蔚蓝咖啡厅. All rights reserved.'
    }
  }
})
