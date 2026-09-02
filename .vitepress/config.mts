import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import type { Plugin } from 'vite'

const configDir = dirname(fileURLToPath(import.meta.url))

// VitePress 默认主题会把 Inter 字体文件复制进站点构建产物
// (node_modules/vitepress/dist/client/theme-default/fonts) 并随页面加载下载。
// 与官网前端一致,这里将主题 fonts.css 中的本地字体引用改写为公共 CDN
// (jsDelivr @fontsource-variable/inter) 地址,构建产物不再携带字体文件,
// 浏览器按 unicode-range 分片从 CDN 按需下载。
const FONT_CDN = 'https://cdn.jsdelivr.net/npm/@fontsource-variable/inter@5.3.0/files'

// inter-roman-*.woff2 / inter-italic-*.woff2 映射为 @fontsource-variable 的
// inter-<subset>-wght-<normal|italic>.woff2 命名
function fontSourceUrl(file: string): string {
  const match = /^inter-(roman|italic)-(.+)\.woff2$/.exec(file)
  if (!match) {
    throw new Error(`无法识别 VitePress 主题字体文件: ${file}`)
  }
  const [, style, subset] = match
  const weight = style === 'roman' ? 'normal' : 'italic'
  return `${FONT_CDN}/inter-${subset}-wght-${weight}.woff2`
}

function fontsCdnPlugin(): Plugin {
  const themeFontsPath = resolve(configDir, '../node_modules/vitepress/dist/client/theme-default/styles/fonts.css')
  const replacement = readFileSync(themeFontsPath, 'utf-8')
    // 移除默认主题内置的 Google Fonts @import(仅 useWebFonts: true 时启用)
    .replace(/\n?\/\* webfont-marker-begin \*\/[\s\S]*?\/\* webfont-marker-end \*\/\n?/, '')
    .replace(/url\('\.\.\/fonts\/[^']+\.woff2'\)/g, (url) => {
      const file = url.match(/fonts\/([^']+\.woff2)/)?.[1]
      if (!file) {
        throw new Error(`无法解析主题字体引用: ${url}`)
      }
      return `url('${fontSourceUrl(file)}')`
    })

  return {
    name: 'docs:fonts-cdn',
    enforce: 'pre',
    transform(_code, id) {
      if (/vitepress[\\/].*fonts\.s?css/.test(id)) {
        return replacement
      }
    }
  }
}

export default defineConfig({
  srcDir: 'docs',
  base: process.env.BASE_PATH ?? '/',

  vite: {
    plugins: [fontsCdnPlugin()]
  },

  lang: 'zh-CN',
  title: '蔚蓝咖啡厅文档',
  description: '蔚蓝咖啡厅汉化客户端与 Cafe Launcher 的安装、使用和故障排查文档。',
  lastUpdated: true,

  themeConfig: {
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
          { text: '卸载与数据', link: '/cafe-launcher/uninstall' },
          { text: '常见问题', link: '/cafe-launcher/faq' },
          { text: '反馈指南', link: '/cafe-launcher/feedback' }
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
})
