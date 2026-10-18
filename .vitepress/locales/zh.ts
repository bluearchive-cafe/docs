import type { DefaultTheme } from 'vitepress'

export const zhTheme: DefaultTheme.Config = {
  nav: [
    { text: '首页', link: '/' },
    { text: '汉化客户端', link: '/guide/' },
    { text: 'Cafe Launcher', link: '/cafe-launcher/' },
    { text: '下载', link: 'https://bluearchive.cafe/download' }
  ],

  sidebar: [
    {
      text: '汉化客户端',
      items: [
        { text: '使用与配置', link: '/guide/' },
        { text: '常见问题', link: '/guide/qa' },
        {
          text: '按平台安装',
          collapsed: false,
          items: [
            { text: '平台总览', link: '/platform/' },
            { text: 'Android', link: '/platform/android' },
            { text: 'iOS', link: '/platform/ios' },
            { text: 'Windows', link: '/platform/windows' },
            { text: 'macOS', link: '/platform/macos' }
          ]
        }
      ]
    },
    {
      text: 'Cafe Launcher',
      items: [
        { text: '项目介绍', link: '/cafe-launcher/' },
        { text: '安装与首次使用', link: '/cafe-launcher/installation' },
        { text: '设置参考', link: '/cafe-launcher/settings' },
        { text: '游戏操作', link: '/cafe-launcher/operations' },
        { text: '资源面板', link: '/cafe-launcher/resource-panel' },
        { text: '卸载与数据', link: '/cafe-launcher/uninstall' },
        { text: '常见问题', link: '/cafe-launcher/faq' },
        { text: '反馈指南', link: '/cafe-launcher/feedback' }
      ]
    }
  ],

  editLink: {
    pattern: 'https://github.com/bluearchive-cafe/docs/edit/main/docs/:path',
    text: '在 GitHub 上编辑此页'
  },

  outline: {
    level: [2, 3],
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
    quote: '你访问的页面不存在，或已经被移动。',
    linkText: '返回首页',
    linkLabel: '返回首页'
  },

  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/bluearchive-cafe',
      ariaLabel: '蔚蓝咖啡厅 GitHub'
    }
  ],

  footer: {
    message: '文档源代码基于 MIT License 发布。',
    copyright: '版权所有 © 2026 蔚蓝咖啡厅。'
  }
}
