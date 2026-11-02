import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import type { Plugin } from 'vite'
import { zhTheme } from './locales/zh.ts'
import { enTheme } from './locales/en.ts'

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

  lastUpdated: true,

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '蔚蓝咖啡厅文档',
      description: '蔚蓝咖啡厅汉化客户端与 Cafe Launcher 的安装、使用和故障排查文档。',
      themeConfig: zhTheme
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'BlueArchive.Cafe Docs',
      description: 'Installation, configuration, and troubleshooting for the Chinese localization client and Cafe Launcher.',
      themeConfig: enTheme
    }
  },

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
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
        }
      }
    }
  }
})
