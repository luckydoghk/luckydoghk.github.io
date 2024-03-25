import { defineClientConfig } from "vuepress/client";
import { useHint } from "E:/Azy/zy-vue-press/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "E:/Azy/zy-vue-press/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {

  },
  setup: () => {
useHint();
  }
});
