module.exports = {
    'zh': {
        "/docs/report/": ["01", "02"],
        "/docs/javascript/": ["01", "02", "03", "04", "05"],
        "/docs/data-structure/": ["01", "02", "03", "04", "05", "06"],
        "/docs/learn-vue-source-code/": [
            {
                title: '写在最前面',
                collapsable: true,
                path: "start/home"
            },
            {
                title: '变化侦测篇',
                collapsable: true,
                children: [
                    "reactive/home",
                    "reactive/object",
                    "reactive/array"
                ]
            },
            {
                title: '虚拟DOM篇',
                collapsable: true,
                children: [
                    "virtualDOM/home",
                    "virtualDOM/patch",
                    "virtualDOM/updataChildren",
                    "virtualDOM/optimizeUpdataChildren"
                ]
            },
            {
                title: '模板编译篇',
                collapsable: true,
                children: [
                    "complie/home",
                    "complie/parse",
                    "complie/HTMLParse",
                    "complie/textParse",
                    "complie/optimize",
                    "complie/codegen",
                    "complie/summary"
                ]
            },
            {
                title: '生命周期篇综述',
                collapsable: true,
                children: [
                    "lifecycle/home",
                    "lifecycle/newVue",
                    "lifecycle/initLifecycle",
                    "lifecycle/initEvents",
                    "lifecycle/initInjections",
                    "lifecycle/initState",
                    "lifecycle/templateComplie",
                    "lifecycle/mount",
                    "lifecycle/destory"
                ]
            },
            {
                title: '实例方法篇',
                collapsable: true,
                children: [
                    "instanceMethods/data",
                    "instanceMethods/event",
                    "instanceMethods/lifecycle"
                ]
            },
            {
                title: '全局API篇',
                collapsable: true,
                path: "globalAPI/home"
            },
            {
                title: '过滤器篇',
                collapsable: true,
                children: [
                    "filter/home",
                    "filter/filterPrinciple",
                    "filter/parseFilters"
                ]
            },
            {
                title: '指令篇',
                collapsable: true,
                path: "directives/customDirectives"
            },
            {
                title: '内置组件篇',
                collapsable: true,
                path: 'BuiltInComponents/keep-alive'
            }
        ]
    }
}
