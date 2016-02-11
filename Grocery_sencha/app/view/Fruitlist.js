Ext.define('Grocery.view.Fruitlist', {
    extend: 'Ext.List',
    xtype: 'fruitlist',
  requires: ['Grocery.store.Fruitstore',  'Ext.TitleBar'],
 
   config: {
       
        title: 'Fruit List',
        grouped: true,
        itemTpl: '{fruitName}',
        store: 'Fruitstore',
        onItemDisclosure: true,

         items: [
            {    

                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Fruit List',
                    items:[
                    {
                    	 xtype: 'button',
     					 ui: 'back',
     					 text: 'Back',
     					 id:'flistback'
                    }]

                }

                	]
                

               }
});

 