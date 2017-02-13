Ext.define('CIAM_app.model.lista_cataloghiModel', {
	extend: 'Ext.data.Model',
	config: {
		fields: [{
			name: 'text',
			type: 'string'
		}, {
			name: 'immagini_catalogo',
			type: 'string'
		}, {
			name: 'icon',
			type: 'string'
		}, {
			name: 'pagine_catalogo',
			type: 'int'
		}]
	}
});