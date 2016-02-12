Ext.define('Grocery.controller.Mainfruits', {
    extend: 'Ext.app.Controller',
    config: {
        views: [
            'Main',
            'Fruitlist',
            'Vegetablelist'
        ],
        refs: {
            main: 'main',
            Fruitlist: 'fruitlist',
            Vegetablelist: 'vegetablelist',
            Fruitdetailsview: 'fruitdetailsview',
            Vegetabledetailsview: 'vegetabledetailsview'
        },
        control: {
            'main #btnfruits': {
                tap: 'showfruitDetails'
            },
            'main #btnvegetable': {
                tap: 'showvegetableDetails'
            },
            'fruitlist': {
                disclose: 'showfullFruitDetail'
            },
            'vegetablelist': {
                disclose: 'showfullVegetableDetail'
            },
            'fruitlist #flistback': {
                tap: 'goflistback'
            },
            'fruitdetailsview #fdetailsback': {
                tap: 'gofdetailsback'
            },
            'vegetablelist #vlistback': {
                tap: 'govlistback'
            },
            'vegetabledetailsview #vdetailsback': {
                tap: 'govdetailsback'
            }

        }
    },


    govdetailsback: function() {
        Ext.Viewport.animateActiveItem({
            xtype: 'vegetablelist'
        }, {
            type: "slide",
            direction: "right"
        });
    },
    govlistback: function() {
        Ext.Viewport.animateActiveItem({
            xtype: 'main'
        }, {
            type: "slide",
            direction: "right"
        });
    },
    gofdetailsback: function() {
        Ext.Viewport.animateActiveItem({
            xtype: 'fruitlist'
        }, {
            type: "slide",
            direction: "right"
        });
    },
    goflistback: function() {
        Ext.Viewport.animateActiveItem({
            xtype: 'main'
        }, {
            type: "slide",
            direction: "right"
        });
    },
    showfruitDetails: function() {
        Ext.Viewport.animateActiveItem({
            xtype: 'fruitlist'
        }, {
            type: "slide",
            direction: "left"
        });
    },
    showvegetableDetails: function() {
        Ext.Viewport.animateActiveItem({
            xtype: 'vegetablelist'
        }, {
            type: "slide",
            direction: "right"
        });
    },
    showfullFruitDetail: function(list, record) {
        Ext.Viewport.animateActiveItem({
            xtype: 'fruitdetailsview',
            data: record.getData()
        }, {
            type: "slide",
            direction: "right"
        });
    },
    showfullVegetableDetail: function(list, record) {
        Ext.Viewport.animateActiveItem({
            xtype: 'vegetabledetailsview',
            data: record.getData()
        }, {
            type: "slide",
            direction: "right"
        });
    }

});