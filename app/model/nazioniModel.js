Ext.define('CIAM_app.model.nazioniModel', {
	extend: 'Ext.data.Model',
	config: {
		fields: [{
			name: 'text',
			type: 'string'
		}, {
			name: 'value',
			type: 'string'
		}]
	}
});