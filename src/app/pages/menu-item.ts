export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Home',
        icon: 'home'
    },
    {
        path: 'form',
        title: 'Form',
        icon: 'edit',
        children: [
            {
                path: 'inputs',
                title: 'Inputs'
            },
            {
                path: 'trees',
                title: 'Trees'
            },
            {
                path: 'area',
                title: 'Area'
            }
        ]
    },
    {
        path: 'charts',
        title: 'Charts',
        icon: 'bar-chart-o',
        children: [
            {
                path: 'default-charts',
                title: 'Default'
            }
        ]
    },
    {
        path: 'ui',
        title: 'UI',
        icon: 'heart',
        children: [
            {
                path: 'buttons',
                title: 'Buttons'
            },
            {
                path: 'tabs',
                title: 'Tabs'
            }
        ]
    },
    {
        path: 'table',
        title: 'Tables',
        icon: 'table',
        children: [
            {
                path: 'default-tables',
                title: 'DEFAULT'
            }
        ]
    }
]