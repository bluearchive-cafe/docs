import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: process.env.BASE_PATH ?? '/',

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
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除搜索',
            backButtonTitle: '返回',
            noResultsText: '没有找到相关结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车键',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上方向键',
              navigateDownKeyAriaLabel: '下方向键',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc 键'
            }
          }
        }
      }
    },

    outline: {
      label: '本页目录'
    },

    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
        forceLocale: true
      }
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言',
    skipToContentLabel: '跳转到内容',

    notFound: {
      title: '页面未找到',
      quote: '您访问的页面不存在，或已经被移动。',
      linkText: '返回首页',
      linkLabel: '返回首页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bluearchive-cafe', ariaLabel: 'GitHub 组织'}
    ],

    footer: {
      message: '基于 MIT 许可证发布。',
      copyright: '版权所有 © 2026 蔚蓝咖啡厅。保留所有权利。'
    }
  }
})
