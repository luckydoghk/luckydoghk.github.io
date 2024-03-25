import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import {hopeTheme} from "vuepress-theme-hope";
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {
        },
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索',
                },
            },
        }),

    ],
    theme: hopeTheme({
        base: '/',
        author:{
            name: 'lucky'
        },
        head:[
            [
                'link', { rel: 'icon', href: '/favicon.ico' }
            ]
        ],
        darkmode: 'toggle',
        // plugins: {
        //     // mdEnhance: {
        //     //     align: 'center',
        //     //     presentation: {
        //     //         plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
        //     //     },
        //     //     imgLazyload: true,
        //     //     imgSize: true,
        //     //     tab: true,
        //     //     vuePlayground: true,
        //     // },
        //     // searchPro: {
        //     //     indexContent: true,
        //     //     autoSuggestions: true,
        //     //     customFields: [
        //     //         {
        //     //             getter: (page) => page.frontmatter.author,
        //     //             formatter: "作者：$content",
        //     //         },
        //     //         {
        //     //             getter: (page) => page.frontmatter.tag,
        //     //             formatter: "标签：$content",
        //     //         },
        //     //         {
        //     //             getter: (page) => page.frontmatter.category,
        //     //             formatter: "分类：$content",
        //     //         },
        //     //     ],
        //     //     locales: {
        //     //         '/': {
        //     //             placeholder: '搜索',
        //     //         },
        //     //     },
        //     //     getExtraFields: (page) => page.frontmatter.category ?? [],
        //     //     // indexOptions: {
        //     //     //     tokenize: (text, fieldName) =>
        //     //     //         fieldName === "id" ? [text] : ""
        //     //     // },
        //     // }
        // },
        home: '/',
        title: '自由英雄坛说',
        lang: "zh-CN",
        iconAssets: "fontawesome-with-brands",
        logo: '/logo.jpg',
        docsDir: 'docs',
        navbarLayout: {
            start: ["Brand"],
            center: ["Links"],
            end: ["Language", "Repo","Search", "Outlook"],
        },
        navbar: [
            {
                text: '首页',
                link: '/',
                icon: 'fa-solid fa-house',
            },
            {
                text: '公告',
                link: '/公告/README.md',
                icon: 'fa-solid fa-bullhorn',
            },
            {
                text: '门派',
                icon: 'fa-solid fa-dungeon',
                prefix: '/门派/',
                children: [
                    // {
                    //     text: "梨园",
                    //     icon: 'fa-solid fa-leaf',
                    //     link: "/门派/梨园/",
                    // },
                    // {
                    //     text: "峨眉",
                    //     icon: 'fa-solid fa-people-group',
                    //     link: "/门派/峨眉/",
                    // },
                    '梨园/',
                    '丐帮/',
                    '五毒教/',
                    '伊贺谷/',
                    '唐门/',
                    '太极门/',
                    '少林/',
                    '峨眉/',
                    '茅山/',
                    '雪山/',
                    '百兽门/',
                ],
            },
            {
                text: '势力',
                icon: 'fa-solid fa-handshake',
                prefix: '/势力/',
                children: [
                    '商家堡/',
                    '江南霹雳门/',
                    '逍遥派/',
                ]
            },
            {
                text: '其他',
                icon: 'fa-solid fa-ellipsis',
                link: '/其它/README.md',
            },

        ],
        lastUpdated: true
    }),
})
