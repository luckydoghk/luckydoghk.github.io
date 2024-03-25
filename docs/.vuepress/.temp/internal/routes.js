export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/index.html.js"), meta: {"y":"h","t":"自由英雄坛说"} }],
  ["/%E5%85%AC%E5%91%8A/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/公告/index.html.js"), meta: {"y":"h","t":"公告"} }],
  ["/%E5%85%B6%E5%AE%83/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/其它/index.html.js"), meta: {"y":"h","t":"其它"} }],
  ["/%E9%97%A8%E6%B4%BE/%E4%B8%90%E5%B8%AE/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/丐帮/index.html.js"), meta: {"y":"a","t":"丐帮"} }],
  ["/%E9%97%A8%E6%B4%BE/%E4%B8%90%E5%B8%AE/%E4%B8%90%E5%B8%AE-%E5%85%A5%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "丐帮-入门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/丐帮/丐帮-入门.html.js"), meta: {"y":"a","t":"丐帮-入门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E4%B8%90%E5%B8%AE/%E4%B8%90%E5%B8%AE-%E8%BF%9B%E9%98%B6.html", { loader: () => import(/* webpackChunkName: "丐帮-进阶.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/丐帮/丐帮-进阶.html.js"), meta: {"y":"a","t":"丐帮-进阶"} }],
  ["/%E9%97%A8%E6%B4%BE/%E4%BA%94%E6%AF%92%E6%95%99/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/五毒教/index.html.js"), meta: {"y":"a","t":"五毒教"} }],
  ["/%E9%97%A8%E6%B4%BE/%E4%BA%94%E6%AF%92%E6%95%99/%E4%BA%94%E6%AF%92%E6%95%99-%E5%85%A5%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "五毒教-入门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/五毒教/五毒教-入门.html.js"), meta: {"y":"a","t":"五毒教-入门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E4%BA%94%E6%AF%92%E6%95%99/%E4%BA%94%E6%AF%92%E6%95%99-%E8%BF%9B%E9%98%B6.html", { loader: () => import(/* webpackChunkName: "五毒教-进阶.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/五毒教/五毒教-进阶.html.js"), meta: {"y":"a","t":"五毒教-进阶"} }],
  ["/%E9%97%A8%E6%B4%BE/%E4%BC%8A%E8%B4%BA%E8%B0%B7/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/伊贺谷/index.html.js"), meta: {"y":"a","t":"伊贺谷"} }],
  ["/%E9%97%A8%E6%B4%BE/%E4%BC%8A%E8%B4%BA%E8%B0%B7/%E4%BC%8A%E8%B4%BA%E8%B0%B7-%E5%85%A5%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "伊贺谷-入门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/伊贺谷/伊贺谷-入门.html.js"), meta: {"y":"a","t":"伊贺谷-入门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E4%BC%8A%E8%B4%BA%E8%B0%B7/%E4%BC%8A%E8%B4%BA%E8%B0%B7-%E8%BF%9B%E9%98%B6.html", { loader: () => import(/* webpackChunkName: "伊贺谷-进阶.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/伊贺谷/伊贺谷-进阶.html.js"), meta: {"y":"a","t":"伊贺谷-进阶"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%A4%AA%E6%9E%81%E9%97%A8/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/太极门/index.html.js"), meta: {"y":"a","t":"太极门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%A4%AA%E6%9E%81%E9%97%A8/%E5%A4%AA%E6%9E%81%E9%97%A8-%E5%85%A5%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "太极门-入门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/太极门/太极门-入门.html.js"), meta: {"y":"a","t":"太极门-入门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%A4%AA%E6%9E%81%E9%97%A8/%E5%A4%AA%E6%9E%81%E9%97%A8-%E8%BF%9B%E9%98%B6.html", { loader: () => import(/* webpackChunkName: "太极门-进阶.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/太极门/太极门-进阶.html.js"), meta: {"y":"a","t":"太极门-进阶"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%94%90%E9%97%A8/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/唐门/index.html.js"), meta: {"y":"a","t":"唐门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%94%90%E9%97%A8/%E5%94%90%E9%97%A8-%E5%85%A5%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "唐门-入门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/唐门/唐门-入门.html.js"), meta: {"y":"a","t":"唐门-入门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%94%90%E9%97%A8/%E5%94%90%E9%97%A8-%E8%BF%9B%E9%98%B6.html", { loader: () => import(/* webpackChunkName: "唐门-进阶.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/唐门/唐门-进阶.html.js"), meta: {"y":"a","t":"唐门-进阶"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%B0%91%E6%9E%97/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/少林/index.html.js"), meta: {"y":"a","t":"少林"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%B0%91%E6%9E%97/%E5%B0%91%E6%9E%97-%E5%85%A5%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "少林-入门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/少林/少林-入门.html.js"), meta: {"y":"a","t":"少林-入门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%B0%91%E6%9E%97/%E5%B0%91%E6%9E%97-%E8%BF%9B%E9%98%B6.html", { loader: () => import(/* webpackChunkName: "少林-进阶.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/少林/少林-进阶.html.js"), meta: {"y":"a","t":"少林-进阶"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%B3%A8%E7%9C%89/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/峨眉/index.html.js"), meta: {"y":"a","t":"峨眉"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%B3%A8%E7%9C%89/%E5%B3%A8%E7%9C%89-%E5%85%A5%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "峨眉-入门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/峨眉/峨眉-入门.html.js"), meta: {"y":"a","t":"峨眉-入门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E5%B3%A8%E7%9C%89/%E5%B3%A8%E7%9C%89-%E8%BF%9B%E9%98%B6.html", { loader: () => import(/* webpackChunkName: "峨眉-进阶.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/峨眉/峨眉-进阶.html.js"), meta: {"y":"a","t":"峨眉-进阶"} }],
  ["/%E9%97%A8%E6%B4%BE/%E6%A2%A8%E5%9B%AD/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/梨园/index.html.js"), meta: {"y":"a","t":"梨园"} }],
  ["/%E9%97%A8%E6%B4%BE/%E6%A2%A8%E5%9B%AD/%E6%A2%A8%E5%9B%AD-%E5%85%A5%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "梨园-入门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/梨园/梨园-入门.html.js"), meta: {"y":"a","t":"梨园-入门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E6%A2%A8%E5%9B%AD/%E6%A2%A8%E5%9B%AD-%E8%BF%9B%E9%98%B6.html", { loader: () => import(/* webpackChunkName: "梨园-进阶.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/梨园/梨园-进阶.html.js"), meta: {"y":"a","t":"梨园-进阶"} }],
  ["/%E9%97%A8%E6%B4%BE/%E7%99%BE%E5%85%BD%E9%97%A8/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/百兽门/index.html.js"), meta: {"y":"a","t":"百兽门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E7%99%BE%E5%85%BD%E9%97%A8/%E7%99%BE%E5%85%BD%E9%97%A8-%E5%85%A5%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "百兽门-入门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/百兽门/百兽门-入门.html.js"), meta: {"y":"a","t":"百兽门-入门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E7%99%BE%E5%85%BD%E9%97%A8/%E7%99%BE%E5%85%BD%E9%97%A8-%E8%BF%9B%E9%98%B6.html", { loader: () => import(/* webpackChunkName: "百兽门-进阶.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/百兽门/百兽门-进阶.html.js"), meta: {"y":"a","t":"百兽门-进阶"} }],
  ["/%E9%97%A8%E6%B4%BE/%E9%9B%AA%E5%B1%B1/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/雪山/index.html.js"), meta: {"y":"a","t":"雪山"} }],
  ["/%E9%97%A8%E6%B4%BE/%E9%9B%AA%E5%B1%B1/%E9%9B%AA%E5%B1%B1-%E5%85%A5%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "雪山-入门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/雪山/雪山-入门.html.js"), meta: {"y":"a","t":"雪山-入门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E9%9B%AA%E5%B1%B1/%E9%9B%AA%E5%B1%B1-%E8%BF%9B%E9%98%B6.html", { loader: () => import(/* webpackChunkName: "雪山-进阶.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/雪山/雪山-进阶.html.js"), meta: {"y":"a","t":"雪山-进阶"} }],
  ["/%E5%8A%BF%E5%8A%9B/%E5%95%86%E5%AE%B6%E5%A0%A1/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/商家堡/index.html.js"), meta: {"y":"a","t":"商家堡"} }],
  ["/%E5%8A%BF%E5%8A%9B/%E5%95%86%E5%AE%B6%E5%A0%A1/%E5%95%86%E5%AE%B6%E5%A0%A1-%E5%85%A5%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "商家堡-入门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/商家堡/商家堡-入门.html.js"), meta: {"y":"a","t":"商家堡-入门"} }],
  ["/%E5%8A%BF%E5%8A%9B/%E5%95%86%E5%AE%B6%E5%A0%A1/%E5%95%86%E5%AE%B6%E5%A0%A1-%E8%BF%9B%E9%98%B6.html", { loader: () => import(/* webpackChunkName: "商家堡-进阶.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/商家堡/商家堡-进阶.html.js"), meta: {"y":"a","t":"商家堡-进阶"} }],
  ["/%E5%8A%BF%E5%8A%9B/%E6%B1%9F%E5%8D%97%E9%9C%B9%E9%9B%B3%E9%97%A8/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/江南霹雳门/index.html.js"), meta: {"y":"a","t":"江南霹雳门"} }],
  ["/%E5%8A%BF%E5%8A%9B/%E6%B1%9F%E5%8D%97%E9%9C%B9%E9%9B%B3%E9%97%A8/%E6%B1%9F%E5%8D%97%E9%9C%B9%E9%9B%B3%E9%97%A8-%E5%85%A5%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "江南霹雳门-入门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/江南霹雳门/江南霹雳门-入门.html.js"), meta: {"y":"a","t":"江南霹雳门-入门"} }],
  ["/%E5%8A%BF%E5%8A%9B/%E6%B1%9F%E5%8D%97%E9%9C%B9%E9%9B%B3%E9%97%A8/%E6%B1%9F%E5%8D%97%E9%9C%B9%E9%9B%B3%E9%97%A8-%E8%BF%9B%E9%98%B6.html", { loader: () => import(/* webpackChunkName: "江南霹雳门-进阶.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/江南霹雳门/江南霹雳门-进阶.html.js"), meta: {"y":"a","t":"江南霹雳门-进阶"} }],
  ["/%E5%8A%BF%E5%8A%9B/%E9%80%8D%E9%81%A5%E6%B4%BE/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/逍遥派/index.html.js"), meta: {"y":"a","t":"逍遥派"} }],
  ["/%E5%8A%BF%E5%8A%9B/%E9%80%8D%E9%81%A5%E6%B4%BE/%E9%80%8D%E9%81%A5%E6%B4%BE-%E5%85%A5%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "逍遥派-入门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/逍遥派/逍遥派-入门.html.js"), meta: {"y":"a","t":"逍遥派-入门"} }],
  ["/%E5%8A%BF%E5%8A%9B/%E9%80%8D%E9%81%A5%E6%B4%BE/%E9%80%8D%E9%81%A5%E6%B4%BE-%E8%BF%9B%E9%98%B6.html", { loader: () => import(/* webpackChunkName: "逍遥派-进阶.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/逍遥派/逍遥派-进阶.html.js"), meta: {"y":"a","t":"逍遥派-进阶"} }],
  ["/%E9%97%A8%E6%B4%BE/%E8%8C%85%E5%B1%B1/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/茅山/index.html.js"), meta: {"y":"a","t":"茅山"} }],
  ["/%E9%97%A8%E6%B4%BE/%E8%8C%85%E5%B1%B1/%E8%8C%85%E5%B1%B1-%E5%85%A5%E9%97%A8.html", { loader: () => import(/* webpackChunkName: "茅山-入门.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/茅山/茅山-入门.html.js"), meta: {"y":"a","t":"茅山-入门"} }],
  ["/%E9%97%A8%E6%B4%BE/%E8%8C%85%E5%B1%B1/%E8%8C%85%E5%B1%B1-%E8%BF%9B%E9%98%B6.html", { loader: () => import(/* webpackChunkName: "茅山-进阶.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/茅山/茅山-进阶.html.js"), meta: {"y":"a","t":"茅山-进阶"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/404.html.js"), meta: {"y":"p","t":""} }],
  ["/%E9%97%A8%E6%B4%BE/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/门派/index.html.js"), meta: {"y":"p","t":"门派"} }],
  ["/%E5%8A%BF%E5%8A%9B/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Azy/zy-vue-press/docs/.vuepress/.temp/pages/势力/index.html.js"), meta: {"y":"p","t":"势力"} }],
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
