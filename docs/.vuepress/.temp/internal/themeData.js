export const themeData = JSON.parse("{\"encrypt\":{},\"base\":\"/\",\"author\":{\"name\":\"lucky\"},\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}]],\"darkmode\":\"toggle\",\"home\":\"/\",\"title\":\"自由英雄坛说\",\"lang\":\"zh-CN\",\"logo\":\"/logo.jpg\",\"docsDir\":\"docs\",\"navbarLayout\":{\"start\":[\"Brand\"],\"center\":[\"Links\"],\"end\":[\"Language\",\"Repo\",\"Search\",\"Outlook\"]},\"lastUpdated\":true,\"locales\":{\"/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page\",\"print\":\"Print\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\",\"icon\":\"fa-solid fa-house\"},{\"text\":\"公告\",\"link\":\"/公告/README.md\",\"icon\":\"fa-solid fa-bullhorn\"},{\"text\":\"门派\",\"icon\":\"fa-solid fa-dungeon\",\"prefix\":\"/门派/\",\"children\":[\"梨园/\",\"丐帮/\",\"五毒教/\",\"伊贺谷/\",\"唐门/\",\"太极门/\",\"少林/\",\"峨眉/\",\"茅山/\",\"雪山/\",\"百兽门/\"]},{\"text\":\"势力\",\"icon\":\"fa-solid fa-handshake\",\"prefix\":\"/势力/\",\"children\":[\"商家堡/\",\"江南霹雳门/\",\"逍遥派/\"]},{\"text\":\"其他\",\"icon\":\"fa-solid fa-ellipsis\",\"link\":\"/其它/README.md\"}]}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
