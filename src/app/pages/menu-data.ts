export let MENU_DATA = [
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
                title: 'inputs'
            },
            {
                path: 'trees',
                title: '树形图'
            }
        ]
    },
    {
        path: 'ui',
        title: 'UI',
        icon: 'edit',
        children: [
            {
                path: 'buttons',
                title: 'BUTTONS'
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