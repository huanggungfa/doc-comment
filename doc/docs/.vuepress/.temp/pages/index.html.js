export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "https://artice-code-1258339218.cos.ap-beijing.myqcloud.com/vuepress/element-index.png",
    "heroText": "跨框架企业级UI库",
    "features": [
      {
        "title": "一致性 Consistency",
        "details": "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念"
      },
      {
        "title": "反馈 Feedback",
        "details": "通过界面样式和交互动效让用户可以清晰的感知自己的操作"
      },
      {
        "title": "效率 Efficiency",
        "details": "界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。"
      }
    ],
    "footer": "gf-ui"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
