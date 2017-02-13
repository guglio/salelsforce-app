var task = Ext.create('Ext.util.DelayedTask', function() {
	var docked_bar = Ext.getCmp('mainview').getDockedItems()[0];
	Ext.getCmp('mainview').setActiveItem(2);
	docked_bar.setHidden(true);Ext.getCmp('contact_panel').reset();
	Ext.getCmp('biglietto_visita').setHidden(true);
								Ext.getCmp('biglietto_visita').setSrc('');
								Ext.getCmp('url_img').setValue('');
								Ext.getCmp('bottone_x').setHidden(true);
});
var delay = 150000;

Ext.define('CIAM_app.view.Main', {
	extend: 'Ext.TabPanel',
	requires: ['Ext.TitleBar', 'Ext.util.DelayedTask'],
	fullscreen: true,
	id:'mainview',
	config: {
		tabBarPosition: 'bottom',
		items: [{
			xtype: 'cataloghi'
		}, {
			xtype: 'contactpanel'
		},{
			xtype:'screensaver'
		},{xtype:'catalogues_carousel'}],
		listeners: {
			activate: function() {
				task.delay(delay);
			},
			activeitemchange: function(tabPanel, tab, oldTab) {
				task.cancel();
				task.delay(delay);
			}
		}
	}
});