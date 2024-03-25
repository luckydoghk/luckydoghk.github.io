export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/index.html.js"), meta: {"y":"h","t":"自由英雄坛说"} }],
  ["/%E5%85%AC%E5%91%8A/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/公告/index.html.js"), meta: {"y":"h","t":"公告"} }],
  ["/%E5%85%B6%E5%AE%83/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/其它/index.html.js"), meta: {"y":"h","t":"其它"} }],
  ["/%E5%8A%BF%E5%8A%9B/%E5%95%86%E5%AE%B6%E5%A0%A1/%E5%95%86%E5%AE%B6%E5%A0%A1.html", { loader: () => import(/* webpackChunkName: "商家堡.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/商家堡/商家堡.html.js"), meta: {"y":"a","t":"商家堡"} }],
  ["/%E5%8A%BF%E5%8A%9B/%E6%B1%9F%E5%8D%97%E9%9C%B9%E9%9B%B3%E9%97%A8/%E6%B1%9F%E5%8D%97%E9%9C%B9%E9%9B%B3%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "江南霹雳门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/江南霹雳门/江南霹雳门.html.js"), meta: {"y":"a","t":"江南霹雳门"} }],
  ["/%E5%8A%BF%E5%8A%9B/%E9%80%8D%E9%81%A5%E6%B4%BE/%E9%80%8D%E9%81%A5%E6%B4%BE.html", { loader: () => import(/* webpackChunkName: "逍遥派.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/逍遥派/逍遥派.html.js"), meta: {"y":"a","t":"逍遥派"} }],
  ["/%E9%97%A8%E6%B4%BE/%E4%B8%90%E5%B8%AE/%E4%B8%90%E5%B8%AE.html", { loader: () => import(/* webpackChunkName: "丐帮.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/丐帮/丐帮.html.js"), meta: {"y":"a","t":"丐帮"} }],
  ["/%E9%97%A8%E6%B4%BE/%E4%BA%94%E6%AF%92%E6%95%99/%E4%BA%94%E6%AF%92%E6%95%99.html", { loader: () => import(/* webpackChunkName: "五毒教.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/五毒教/五毒教.html.js"), meta: {"y":"a","t":"五毒教"} }],
  ["/%E9%97%A8%E6%B4%BE/%E4%BC%8A%E8%B4%BA%E8%B0%B7/%E4%BC%8A%E8%B4%BA%E8%B0%B7.html", { loader: () => import(/* webpackChunkName: "伊贺谷.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/伊贺谷/伊贺谷.html.js"), meta: {"y":"a","t":"伊贺谷"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%94%90%E9%97%A8/%E5%94%90%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "唐门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/唐门/唐门.html.js"), meta: {"y":"a","t":"唐门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%A4%AA%E6%9E%81%E9%97%A8/%E5%A4%AA%E6%9E%81%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "太极门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/太极门/太极门.html.js"), meta: {"y":"a","t":"太极门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%B0%91%E6%9E%97/%E5%B0%91%E6%9E%97.html", { loader: () => import(/* webpackChunkName: "少林.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/少林/少林.html.js"), meta: {"y":"a","t":"少林"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%B3%A8%E7%9C%89/%E5%B3%A8%E7%9C%89.html", { loader: () => import(/* webpackChunkName: "峨眉.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/峨眉/峨眉.html.js"), meta: {"y":"a","t":"峨眉"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%B3%A8%E7%9C%89/%E5%B3%A8%E7%9C%89%E5%85%A5%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "峨眉入门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/峨眉/峨眉入门.html.js"), meta: {"y":"a","t":"峨眉入门攻略"} }],
  ["/%E9%97%A8%E6%B4%BE/%E6%A2%A8%E5%9B%AD/%E6%A2%A8%E5%9B%AD.html", { loader: () => import(/* webpackChunkName: "梨园.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/梨园/梨园.html.js"), meta: {"y":"a","t":"梨园"} }],
  ["/%E9%97%A8%E6%B4%BE/%E7%99%BE%E5%85%BD%E9%97%A8/%E7%99%BE%E5%85%BD%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "百兽门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/百兽门/百兽门.html.js"), meta: {"y":"a","t":"百兽门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E8%8C%85%E5%B1%B1/%E8%8C%85%E5%B1%B1.html", { loader: () => import(/* webpackChunkName: "茅山.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/茅山/茅山.html.js"), meta: {"y":"a","t":"茅山"} }],
  ["/%E9%97%A8%E6%B4%BE/%E9%9B%AA%E5%B1%B1/%E9%9B%AA%E5%B1%B1.html", { loader: () => import(/* webpackChunkName: "雪山.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/雪山/雪山.html.js"), meta: {"y":"a","t":"雪山"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/404.html.js"), meta: {"y":"p","t":""} }],
  ["/%E5%8A%BF%E5%8A%9B/%E5%95%86%E5%AE%B6%E5%A0%A1/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/商家堡/index.html.js"), meta: {"y":"p","t":"商家堡"} }],
  ["/%E5%8A%BF%E5%8A%9B/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/index.html.js"), meta: {"y":"p","t":"势力"} }],
  ["/%E5%8A%BF%E5%8A%9B/%E6%B1%9F%E5%8D%97%E9%9C%B9%E9%9B%B3%E9%97%A8/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/江南霹雳门/index.html.js"), meta: {"y":"p","t":"江南霹雳门"} }],
  ["/%E5%8A%BF%E5%8A%9B/%E9%80%8D%E9%81%A5%E6%B4%BE/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/逍遥派/index.html.js"), meta: {"y":"p","t":"逍遥派"} }],
  ["/%E9%97%A8%E6%B4%BE/%E4%B8%90%E5%B8%AE/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/丐帮/index.html.js"), meta: {"y":"p","t":"丐帮"} }],
  ["/%E9%97%A8%E6%B4%BE/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/index.html.js"), meta: {"y":"p","t":"门派"} }],
  ["/%E9%97%A8%E6%B4%BE/%E4%BA%94%E6%AF%92%E6%95%99/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/五毒教/index.html.js"), meta: {"y":"p","t":"五毒教"} }],
  ["/%E9%97%A8%E6%B4%BE/%E4%BC%8A%E8%B4%BA%E8%B0%B7/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/伊贺谷/index.html.js"), meta: {"y":"p","t":"伊贺谷"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%94%90%E9%97%A8/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/唐门/index.html.js"), meta: {"y":"p","t":"唐门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%A4%AA%E6%9E%81%E9%97%A8/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/太极门/index.html.js"), meta: {"y":"p","t":"太极门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%B0%91%E6%9E%97/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/少林/index.html.js"), meta: {"y":"p","t":"少林"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%B3%A8%E7%9C%89/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/峨眉/index.html.js"), meta: {"y":"p","t":"峨眉"} }],
  ["/%E9%97%A8%E6%B4%BE/%E6%A2%A8%E5%9B%AD/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/梨园/index.html.js"), meta: {"y":"p","t":"梨园"} }],
  ["/%E9%97%A8%E6%B4%BE/%E7%99%BE%E5%85%BD%E9%97%A8/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/百兽门/index.html.js"), meta: {"y":"p","t":"百兽门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E8%8C%85%E5%B1%B1/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/茅山/index.html.js"), meta: {"y":"p","t":"茅山"} }],
  ["/%E9%97%A8%E6%B4%BE/%E9%9B%AA%E5%B1%B1/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/雪山/index.html.js"), meta: {"y":"p","t":"雪山"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
