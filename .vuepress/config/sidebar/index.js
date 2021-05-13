module.exports = {
    'zh': {
        "/docs/javascript/": ["01", "02", "03", "04", "05"],
        "/docs/data-structure/": ["01", "02", "03", "04", "05", "06"],
        "/docs/learn-vue-source-code/": [
            {
                title: "写在最前面",
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    'start/index'
                ]
            },
            {
                title: "模板编译篇",
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    'complie/index',
                    'complie/parse',
                ]
            },
        ]
        // [
        //     {
        //         title: "写在最前面",
        //         path: "/start",
        //         children: ["index.md"]
        //     },
        //     {
        //         title: "模板编译篇综述",
        //         path: "/complie",
        //         children: ["index.md", "parse.md"]
        //     },
        // ]
    }
}
