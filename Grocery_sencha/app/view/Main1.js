Ext.define('Grocery.view.Main1', {
    extend: 'Ext.Panel',
    xtype: 'main',
    
    config: {
     
        items: [
           
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
                     id:'btnvegetable',
                     width:'50%'

                }]}
        
        ]
        

    }
});
