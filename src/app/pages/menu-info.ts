export let MENU_INFO = [
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
        icon: 'heart',
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