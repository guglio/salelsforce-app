Ext.define('CIAM_app.view.Cataloghi_carousel', {
	xtype: 'catalogues_carousel',
	extend: 'Ext.Carousel',
	id:'catalogues_carousel',
	requires: ['Ext.carousel.Carousel'],
	config: {
		title: 'Catalogues_carousel',
		iconCls: 'compose',
		hidden:true,
		indicator: false
	},
	initialize: function () {
        this.element.on('tap', function(){
            this.tap();
        }, this); 
    },
	tap: function() {
		task.cancel();
		var docked_bar = Ext.getCmp('mainview').getDockedItems()[0];
		Ext.getCmp('mainview').setActiveItem(0);
		docked_bar.setHidden(false);
        task.delay(delay);
    }
});