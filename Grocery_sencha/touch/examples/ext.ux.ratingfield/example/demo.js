var toolBarItems = appDemo.getPanelDockedItems('home', '');
toolBarItems.push({
	xtype:'panel',
	cls:'footerExtensionName',
	html:'Rating star field v0.1',
	docked:'bottom'
});
var pageItems = [{
	xtype:'formpanel',
	itemId:'myForm',
	scrollable:false,
	items:[{
		xtype:'textfield',
		name:'name',
		label:'Name',
		value:'Surinder Singh'
	},{
		xtype:'ratingfield',
		label:'Rating',
		value:2,
		name:'userrating'
	}]
}];
toolBarItems[0].items.push({
	text:'Form values',
	handler:function(){
		Ext.Msg.alert('Values', '<pre>'+Ext.encode(this.up().up().down('formpanel').getValues())+'</pre>');	
	}
});
this.tabs = Ext.Viewport.add({
	xtype:'panel',
	layout:'card',
	items:[{
		cls:'pageBody',
		name:'home',
		layout:'fit',
		items:toolBarItems.concat(pageItems),
	}]
});
