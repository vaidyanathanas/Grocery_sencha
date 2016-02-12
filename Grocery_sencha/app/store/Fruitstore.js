Ext.define('Grocery.store.Fruitstore', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'Grocery.model.Fruitmodel',
        sorters: 'fruitName',
        grouper : function(record) {
            return record.get('fruitName')[0];
        },
        data: [
            { fruitName: "Thenga", fruitPrice: 20.00},
            { fruitName: "Chaka", fruitPrice: 23.00 },
            { fruitName: "Manga", fruitPrice: 34.00 },
            { fruitName: "Grape", fruitPrice: 23.50 },
            { fruitName: "Athika", fruitPrice: 12.00}
            
        ]
    }
});