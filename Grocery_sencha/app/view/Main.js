Ext.define('Grocery.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar' ,'Ext.ux.RatingField' 
    ],
   config: {    
        items:[
            {    
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'GROCERY'
                },
                { 
                   layout:'hbox',
                   margin:'50px 15px 0px 10px',
           items:[{
                     xtype: 'button',
                     text: 'FRUITS',
                     ui:'round',
                     id:'btnfruits',
                },
                {
                     xtype: 'button',
                     text: 'VEGETABLES',
                     ui:'round',
                     id:'btnvegetable',
                }]
                },
                {                
                   xtype:'ratingfield',
                   label:'Rate me now',
                   value:2,
                   name:'userrating'                   
                }   
            ]       
           }
});