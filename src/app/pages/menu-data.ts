export let MENU_DATA = [
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
                title: 'Buttons'
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
                title: 'Default Tables'
            }
        ]
    }
]