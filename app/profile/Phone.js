Ext.define('CIAM_app.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
    	name:'Phone',
        views: ['Main']
    },
    isActive: function() {
        return Ext.os.is.Phone;
    },
    launch: function() {
       Ext.Viewport.add(Ext.create('CIAM_app.view.phone.Main'));
       this.callParent(arguments);
   }
});