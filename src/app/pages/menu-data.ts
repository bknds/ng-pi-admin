export let MENU_DATA = [
    {
        path: 'index',
        title: '仪表盘',
        icon: 'dashboard'
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