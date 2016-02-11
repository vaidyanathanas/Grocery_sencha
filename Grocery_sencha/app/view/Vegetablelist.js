Ext.define('Grocery.view.Vegetablelist', {
       extend: 'Ext.List',
    xtype: 'vegetablelist',

    requires: ['Grocery.store.Vegetablestore',  'Ext.TitleBar'],

   config: {
       
        title: 'Vegetable List',
        grouped: true,
        itemTpl: '{vegetableName}',
        store: 'Vegetablestore',
        onItemDisclosure: true,
         items: [
            {    

                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Vegetable List',
                    items:[
                    {
                         xtype: 'button',
                         ui: 'back',
                         text: 'Back',
                         id:'vlistback'
                    }]
                }]

               }
});

 