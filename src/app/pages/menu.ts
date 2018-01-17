export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Home',
        icon: 'dashboard'
    },
    {
        path: 'editor',
        title: 'CKEditor',
        icon: 'pencil'
    },
    {
        path: 'ui',
        title: 'UI Elements',
        icon: 'laptop',
        children: [
            {
                path: 'grid',
                title: 'Bootstrap Grid'
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
        path: 'form',
        title: 'Forms',
        icon: 'check-square-o',
        children: [
            {
                path: 'inputs',
                title: 'Form Inputs'
            },
            {
                path: 'trees',
                title: 'File Tree'
            }
        ]
    },
    {
        path: 'charts',
        title: 'Charts',
        icon: 'bar-chart',
        children: [
            {
                path: 'default-charts',
                title: 'Base Charts'
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