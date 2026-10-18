import type { DefaultTheme } from 'vitepress'

export const enTheme: DefaultTheme.Config = {
  nav: [
    { text: 'Home', link: '/en/' },
    { text: 'Chinese Localization', link: '/en/guide/' },
    { text: 'Cafe Launcher', link: '/en/cafe-launcher/' },
    { text: 'Download', link: 'https://bluearchive.cafe/download' }
  ],
  sidebar: [
    {
      text: 'Chinese Localization',
      items: [
        { text: 'Usage and Configuration', link: '/en/guide/' },
        { text: 'FAQ', link: '/en/guide/qa' },
        {
          text: 'Install by Platform',
          collapsed: false,
          items: [
            { text: 'Platform Overview', link: '/en/platform/' },
            { text: 'Android', link: '/en/platform/android' },
            { text: 'iOS', link: '/en/platform/ios' },
            { text: 'Windows', link: '/en/platform/windows' },
            { text: 'macOS', link: '/en/platform/macos' }
          ]
        }
      ]
    },
    {
      text: 'Cafe Launcher',
      items: [
        { text: 'Overview', link: '/en/cafe-launcher/' },
        { text: 'Installation and First Run', link: '/en/cafe-launcher/installation' },
        { text: 'Settings Reference', link: '/en/cafe-launcher/settings' },
        { text: 'Game Operations', link: '/en/cafe-launcher/operations' },
        { text: 'Resource Panel', link: '/en/cafe-launcher/resource-panel' },
        { text: 'Uninstall and Data', link: '/en/cafe-launcher/uninstall' },
        { text: 'FAQ', link: '/en/cafe-launcher/faq' },
        { text: 'Feedback Guide', link: '/en/cafe-launcher/feedback' }
      ]
    }
  ],
  editLink: {
    pattern: 'https://github.com/bluearchive-cafe/docs/edit/main/docs/:path',
    text: 'Edit this page on GitHub'
  },
  outline: { level: [2, 3], label: 'On this page' },
  lastUpdated: {
    text: 'Last updated',
    formatOptions: { dateStyle: 'short', timeStyle: 'short', forceLocale: true }
  },
  docFooter: { prev: 'Previous page', next: 'Next page' },
  darkModeSwitchLabel: 'Appearance',
  lightModeSwitchTitle: 'Switch to light theme',
  darkModeSwitchTitle: 'Switch to dark theme',
  sidebarMenuLabel: 'Menu',
  returnToTopLabel: 'Return to top',
  langMenuLabel: 'Change language',
  skipToContentLabel: 'Skip to content',
  notFound: {
    title: 'Page not found',
    quote: 'This page does not exist or has moved.',
    linkText: 'Return home',
    linkLabel: 'Return home'
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/bluearchive-cafe', ariaLabel: 'BlueArchive.Cafe on GitHub' }
  ],
  footer: {
    message: 'Documentation source released under the MIT License.',
    copyright: 'Copyright © 2026 BlueArchive.Cafe.'
  }
}
