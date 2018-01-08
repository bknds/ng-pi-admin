export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Home',
        icon: 'dashboard'
    },
    {
        path: 'editor',
        title: 'CKEditor',
        icon: 'pencil-square-o'
    },
    {
        path: 'charts',
        title: 'Charts',
        icon: 'line-chart',
        children: [
            {
                path: 'default-charts',
                title: 'Default'
            }
        ]
    },
    {
        path: 'form',
        title: 'Form',
        icon: 'pencil',
        children: [
            {
                path: 'inputs',
                title: 'Form Inputs'
            },
            {
                path: 'trees',
                title: 'File Trees'
            }
        ]
    },
    {
        path: 'ui',
        title: 'UI',
        icon: 'laptop',
        children: [
            {
                path: 'grid',
                title: 'Grid'
            },
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
                path: 'basic-tables',
                title: 'Basic Tables'
            },
            {
                path: 'smart-tables',
                title: 'Smart Tables'
            }
        ]
    }
]