import comp from "E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E9%97%A8%E6%B4%BE/\",\"title\":\"门派\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"门派\",\"article\":false,\"feed\":false,\"sitemap\":false},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
