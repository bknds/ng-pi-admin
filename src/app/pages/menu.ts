export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Dashboard',
        icon: 'dashboard'
    },
    {
        path: 'mailbox',
        title: 'Mailbox',
        icon: 'envelope-o'
    },
    {
        path: 'editor',
        title: 'Pell Editor',
        icon: 'pencil'
    },
    {
        path: 'icon',
        title: 'Icon',
        icon: 'diamond'
    },
    {
        path: 'ui',
        title: 'UI Element',
        icon: 'paint-brush',
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
                path: 'notification',
                title: 'Notification'
            },
            {
                path: 'tabs',
                title: 'Tabs'
            },
            {
                path: 'file-tree',
                title: 'File Tree'
            },
            {
                path: 'modals',
                title: 'Modals'
            },
            {
                path: 'progress-bar',
                title: 'ProgressBar'
            },
            /*  {
                 path: 'loading',
                 title: 'Loading'
             }, */
        ]
    },
    {
        path: 'form',
        title: 'Forms',
        icon: 'check-square-o',
        children: [
            {
                path: 'form-inputs',
                title: 'Form Inputs'
            },
            {
                path: 'form-layouts',
                title: 'Form Layouts'
            },
            {
                path: 'file-upload',
                title: 'File Upload'
            }
        ]
    },
    {
        path: 'charts',
        title: 'Charts',
        icon: 'bar-chart',
        children: [
            {
                path: 'echarts',
                title: 'Echarts'
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
    },
    {
        path: '123',
        title: 'Menu Levels',
        icon: 'sitemap',
        children: [
            {
                path: '111',
                title: 'Menu Level1',
                children: [
                    {
                        path: '1111',
                        title: 'Menu Level1-1'
                    }
                ]
            },
            {
                path: '222',
                title: 'Menu Level2'
            }
        ]
    },
]