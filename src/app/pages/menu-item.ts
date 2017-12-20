export let MENU_ITEM = [
    {
        path: 'index',
        title: 'HOME',
        icon: 'home'
    },
    {
        path: 'form',
        title: 'FORM',
        icon: 'edit',
        children: [
            {
                path: 'inputs',
                title: 'INPUTS'
            },
            {
                path: 'trees',
                title: 'TREES'
            },
            {
                path: 'area',
                title: 'AREA'
            }
        ]
    },
    {
        path: 'charts',
        title: 'CHARTS',
        icon: 'bar-chart-o',
        children: [
            {
                path: 'default-charts',
                title: 'DEFAULT'
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
                title: 'BUTTONS'
            },
            {
                path: 'tabs',
                title: 'TABS'
            }
        ]
    },
    {
        path: 'table',
        title: 'TABLE',
        icon: 'table',
        children: [
            {
                path: 'default-tables',
                title: 'DEFAULT'
            }
        ]
    }
]