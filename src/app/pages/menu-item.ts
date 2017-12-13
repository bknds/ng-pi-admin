export let MENU_ITEM = [
    {
        path: 'index',
        title: '首页',
        icon: 'home'
    },
    {
        path: 'form',
        title: '表单',
        icon: 'edit',
        children: [
            {
                path: 'inputs',
                title: 'Inputs'
            },
            {
                path: 'trees',
                title: '树形图'
            },
            {
                path: 'area',
                title: '区域图'
            }
        ]
    },
    {
        path: 'charts',
        title: '图表',
        icon: 'bar-chart-o',
        children: [
            {
                path: 'default-charts',
                title: '基础图表'
            }
        ]
    },
    {
        path: 'ui',
        title: '样式',
        icon: 'heart',
        children: [
            {
                path: 'buttons',
                title: '按钮'
            },
            {
                path: 'tabs',
                title: '选项卡'
            }
        ]
    },
    {
        path: 'table',
        title: '表格',
        icon: 'table',
        children: [
            {
                path: 'default-tables',
                title: '基础表格'
            }
        ]
    }
]