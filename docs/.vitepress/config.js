export default {
    title: '一些东西', //站点标题
    description: '这就是一些东西', //mate标签description，多用于搜索引擎抓取摘要
    themeConfig: {
        siteTitle: '',
        logo: '/miao.jpg',
        nav: [
            { text: '前端', link: '/javascript/typescript/ts基础' },
            { text: 'gitee', link: 'https://gitee.com/half_past_life' }
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/halfpastlife' }],
        sidebar: {
            '/javascript/': [
                {
                    text: 'typescript',
                    collapsible: true,
                    collapsed: true,
                    items: [{ text: 'ts基础', link: '/javascript/typescript/ts基础' }]
                },
                { text: 'vue2', items: [] },
                { text: 'vue3', items: [] },
                { text: 'react', items: [] }
            ]
        }
    }
};
