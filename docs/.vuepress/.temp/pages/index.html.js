import comp from "E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"自由英雄坛说\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"自由英雄坛说\",\"heroImage\":\"/logo.jpg\",\"heroText\":\"自由英雄坛说\",\"heroAlt\":\"/qrcode.jpg\",\"tagline\":\"这里是自由英雄坛说\",\"heroFullScreen\":true,\"actions\":[{\"text\":\"下载游戏\",\"icon\":\"download\",\"link\":\"https://fir.xcxwo.com/ucfe\",\"type\":\"primary\"},{\"text\":\"查看公告\",\"icon\":\"book\",\"link\":\"./公告/\"},{\"text\":\"加入我们\",\"icon\":\"fa-solid fa-handshake\",\"link\":\"./其它/\"}],\"features\":[{\"title\":\"自由\",\"details\":\"XXX\"},{\"title\":\"内容丰富\",\"details\":\"XXX\"},{\"title\":\"不断更新\",\"details\":\"XXX\"}],\"copyright\":false,\"footer\":\"<a href=\\\"https://theme-hope.vuejs.press/\\\" target=\\\"_blank\\\">自由英雄坛说</a> | MIT Licensed, Copyright © 2024-present lucky\"},\"headers\":[],\"readingTime\":{\"minutes\":0.38,\"words\":115},\"filePathRelative\":\"README.md\"}")
export { comp, data }

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
