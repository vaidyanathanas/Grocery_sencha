Ext.define('Grocery.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'  
    ],
    config: {
     
        items: [
            {    

                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'GROCERY'
                },
                { layout:'hbox',
                   margin:'100px 0px 0px 0px',
                    items:[{
                     xtype: 'button',
                     text: 'FRUITS',
                     ui:'round',
                     id:'btnfruits',
                     width:'50%'

                },{
                     xtype: 'button',
                     text: 'VEGETABLES',
                     ui:'round',
                     width:'50%'

                }]}
        
        ]
        

    }
});
