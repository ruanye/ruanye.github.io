import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "阮野的个人博客",
  description: "前端开发",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'git',
        items: [
          { text: 'git 操作', link: '/git/1' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '软件安装破解',
        items: [
          { text: ' navcat 无限试用', link: '/software/1' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
