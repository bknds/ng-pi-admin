export let MENU_DATA = [
    {
        path: 'index',
        title: 'index',
        icon: 'desktop'
    },
    {
        path: 'form',
        title: 'form',
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
        title: 'table',
        icon: 'edit',
        children: [
            {
                path: 'default-tables',
                title: 'default tables'
            }
        ]
    }
]