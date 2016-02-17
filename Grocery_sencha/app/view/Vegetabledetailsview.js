Ext.define('Grocery.view.Vegetabledetailsview', {
    extend: 'Ext.Panel',
    xtype: 'vegetabledetailsview',
requires: [  'Ext.TitleBar'],
    config: {
        title: 'Details',
        styleHtmlContent: true,
        scrollable: 'vertical',
        tpl: [
            '{vegetableName} .................................................... {vegetablePrice} Rs/kg'
        ], items: [
            {    

                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Vegetable Details',
                    items:[
                    {
                         xtype: 'button',
                         ui: 'back',
                         text: 'Back',
                         id:'vdetailsback'
                    }
                           ]

              }
                   ]
              }
});