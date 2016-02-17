Ext.application({
    launch:function(){
		var form = Ext.create('Ext.form.Panel', {
			fullscreen: true,
			labelWidth:150,			
			items: [{
					xtype:'toolbar',
					dockec:'top',
					title:'Rating Field'
				},{
					xtype: 'ratingfield',
					name : 'usefull',
					label: 'Is it usefull?',
					value: 5
				},{
					xtype: 'ratingfield',
					name : 'rating',
					label: 'Display only',
					editable:false
				},{
					xtype: 'toolbar',
					docked: 'bottom',
					items: [
						{ xtype: 'spacer' },
						{
							text: 'Get Values',
							handler: function() {
								var form = Ext.ComponentQuery.query('formpanel')[0],
								values = form.getValues();
								Ext.Msg.alert(null,
									"Usefull: " + values.usefull +
									"<br />Rating: " + values.rating
								);
							}
						},{
							text: 'Togle Editable',
							handler: function() {
								var form = Ext.ComponentQuery.query('formpanel')[0],
								ratingfield = form.query('ratingfield')[1];
								ratingfield.setEditable(!ratingfield.getEditable());
								Ext.Msg.alert(null,'Now you can '+(ratingfield.getEditable()?'':' not')+' edit the all the ratings' );
							}
						},
						{ xtype: 'spacer' }
					]
				}
			]
		});

	}
});