Ext.define('Grocery.store.Vegetablestore', {
    extend: 'Ext.data.Store',    
    config: {
        model: 'Grocery.model.Vegetablemodel',
        sorters: 'vegetableName',
        grouper : function(record) {
            return record.get('vegetableName')[0];
        },
        data: [
            { vegetableName: "Thenga", vegetablePrice: 20.00},
            { vegetableName: "Vellarikka", vegetablePrice: 13.00 },
            { vegetableName: "Padavalanga", vegetablePrice: 34.00 },
            { vegetableName: "Vendakka", vegetablePrice: 23.50 },
            { vegetableName: "Paavakka", vegetablePrice: 12.00}
        ]
    }
});