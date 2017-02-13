Ext.define('CIAM_app.store.lista_cataloghiStore', {
	extend: 'Ext.data.TreeStore',
	config: {
		model: 'CIAM_app.model.lista_cataloghiModel',
		data: [{
			text: 'Catalogo C.I.A.M. - Edilizia Ecosostenibile',
			icon:'icons/ciam_catalogo.png',
			immagini_catalogo: 'CIAM_Bio_2012',
			pagine_catalogo: 40,
			leaf: true
			}, {
				text: 'Scuole in Edilizia Sostenibile',
				icon:'icons/school.png',
				immagini_catalogo: 'asili_bio',
				pagine_catalogo: 16,
				leaf: true
			}, {
				text: 'Press Kit',
				icon:'icons/press.png',
				immagini_catalogo: 'press_kit',
				pagine_catalogo: 6,
				leaf: true
			},{
				text:'Diario Tecnico',
				icon:'icons/diario_tecnico.png',
				immagini_catalogo: 'diario_tecnico',
				pagine_catalogo:50,
				leaf:true
			}]
	}
});