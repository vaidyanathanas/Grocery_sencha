Ext.define('Grocery.controller.Mainfruits', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'main'
        },
        control: {
            'main #btnfruits': {
                tap: 'showDetails'
            }
        }
    },

showDetails:function(){

	 alert('i am clicked');

 
}


});