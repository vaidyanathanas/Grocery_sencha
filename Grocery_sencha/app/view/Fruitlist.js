Ext.define('Grocery.view.Fruitlist', {
    extend: 'Ext.Panel',
    xtype: 'HomeView',
    refs: {
        HomeView: {
            autoCreate: true,
            selector: 'HomeView',
            xtype: 'HomeView'
        },
    },
    requires: [
        'Ext.TitleBar'  
    ],
    config: {
     
        items: [
            {    

                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Fruit Lists'
                }
        
        ]
        

    }
});