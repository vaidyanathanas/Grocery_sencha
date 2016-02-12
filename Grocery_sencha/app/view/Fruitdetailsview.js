Ext.define('Grocery.view.Fruitdetailsview', {
    extend: 'Ext.Panel',
    xtype: 'fruitdetailsview',
requires: [  'Ext.TitleBar'],
    config: {
        title: 'Details',
        styleHtmlContent: true,
        scrollable: 'vertical',
        tpl: [
            '{fruitName} .................................................... {fruitPrice} Rs/kg'
        ], items: [
            {    

                    docked: 'top',
                    xtype: 'titlebar',
                    id:'myfTitle',
                    title: 'Fruit Details',
                    items:[
                    {
                         xtype: 'button',
                         ui: 'back',
                         text: 'Back',
                         id:'fdetailsback'
                    }]


                }]
    }
});