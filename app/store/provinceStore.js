Ext.define('CIAM_app.store.provinceStore', {
	extend: 'Ext.data.Store',
	config: {
		model: 'CIAM_app.model.nazioniModel',
		data: [
		{value: '',
			text: ''
},{
			value: 'Alessandria',
			text: 'Alessandria'
		}, {
			value: 'Ancona',
			text: 'Ancona'
		}, {
			value: 'Aosta',
			text: 'Aosta'
		}, {
			value: 'Aquila',
			text: 'Aquila'
		}, {
			value: 'Arezzo',
			text: 'Arezzo'
		}, {
			value: 'Ascoli Piceno',
			text: 'Ascoli Piceno'
		}, {
			value: 'Asti',
			text: 'Asti'
		}, {
			value: 'Avellino',
			text: 'Avellino'
		}, {
			value: 'Bari',
			text: 'Bari'
		}, {
			value: 'Belluno',
			text: 'Belluno'
		}, {
			value: 'Benevento',
			text: 'Benevento'
		}, {
			value: 'Bergamo',
			text: 'Bergamo'
		}, {
			value: 'Biella',
			text: 'Biella'
		}, {
			value: 'Bologna',
			text: 'Bologna'
		}, {
			value: 'Bolzano',
			text: 'Bolzano'
		}, {
			value: 'Brescia',
			text: 'Brescia'
		}, {
			value: 'Brindisi',
			text: 'Brindisi'
		}, {
			value: 'Cagliari',
			text: 'Cagliari'
		}, {
			value: 'Caltanissetta',
			text: 'Caltanissetta'
		}, {
			value: 'Campobasso',
			text: 'Campobasso'
		}, {
			value: 'Caserta',
			text: 'Caserta'
		}, {
			value: 'Catania',
			text: 'Catania'
		}, {
			value: 'Catanzaro',
			text: 'Catanzaro'
		}, {
			value: 'Chieti',
			text: 'Chieti'
		}, {
			value: 'Como',
			text: 'Como'
		}, {
			value: 'Cosenza',
			text: 'Cosenza'
		}, {
			value: 'Cremona',
			text: 'Cremona'
		}, {
			value: 'Crotone',
			text: 'Crotone'
		}, {
			value: 'Cuneo',
			text: 'Cuneo'
		}, {
			value: 'Enna',
			text: 'Enna'
		}, {
			value: 'Ferrara',
			text: 'Ferrara'
		}, {
			value: 'Firenze',
			text: 'Firenze'
		}, {
			value: 'Foggia',
			text: 'Foggia'
		}, {
			value: 'Forlì e Cesena',
			text: 'Forlì e Cesena'
		}, {
			value: 'Frosinone',
			text: 'Frosinone'
		}, {
			value: 'Genova',
			text: 'Genova'
		}, {
			value: 'Gorizia',
			text: 'Gorizia'
		}, {
			value: 'Grosseto',
			text: 'Grosseto'
		}, {
			value: 'Imperia',
			text: 'Imperia'
		}, {
			value: 'Isernia',
			text: 'Isernia'
		}, {
			value: 'La Spezia',
			text: 'La Spezia'
		}, {
			value: 'Latina',
			text: 'Latina'
		}, {
			value: 'Lecce',
			text: 'Lecce'
		}, {
			value: 'Lecco',
			text: 'Lecco'
		}, {
			value: 'Livorno',
			text: 'Livorno'
		}, {
			value: 'Lodi',
			text: 'Lodi'
		}, {
			value: 'Lucca',
			text: 'Lucca'
		}, {
			value: 'Macerata',
			text: 'Macerata'
		}, {
			value: 'Mantova',
			text: 'Mantova'
		}, {
			value: 'Massa-Carrara',
			text: 'Massa-Carrara'
		}, {
			value: 'Matera',
			text: 'Matera'
		}, {
			value: 'Messina',
			text: 'Messina'
		}, {
			value: 'Milano',
			text: 'Milano'
		}, {
			value: 'Modena',
			text: 'Modena'
		}, {
			value: 'Napoli',
			text: 'Napoli'
		}, {
			value: 'Novara',
			text: 'Novara'
		}, {
			value: 'Nuoro',
			text: 'Nuoro'
		}, {
			value: 'Oristano',
			text: 'Oristano'
		}, {
			value: 'Padova',
			text: 'Padova'
		}, {
			value: 'Palermo',
			text: 'Palermo'
		}, {
			value: 'Parma',
			text: 'Parma'
		}, {
			value: 'Pavia',
			text: 'Pavia'
		}, {
			value: 'Perugia',
			text: 'Perugia'
		}, {
			value: 'Pesaro e Urbino',
			text: 'Pesaro e Urbino'
		}, {
			value: 'Pescara',
			text: 'Pescara'
		}, {
			value: 'Piacenza',
			text: 'Piacenza'
		}, {
			value: 'Pisa',
			text: 'Pisa'
		}, {
			value: 'Pistoia',
			text: 'Pistoia'
		}, {
			value: 'Pordenone',
			text: 'Pordenone'
		}, {
			value: 'Potenza',
			text: 'Potenza'
		}, {
			value: 'Prato',
			text: 'Prato'
		}, {
			value: 'Ragusa',
			text: 'Ragusa'
		}, {
			value: 'Ravenna',
			text: 'Ravenna'
		}, {
			value: 'Reggio Calabria',
			text: 'Reggio Calabria'
		}, {
			value: 'Reggio Emilia',
			text: 'Reggio Emilia'
		}, {
			value: 'Rieti',
			text: 'Rieti'
		}, {
			value: 'Rimini',
			text: 'Rimini'
		}, {
			value: 'Roma',
			text: 'Roma'
		}, {
			value: 'Rovigo',
			text: 'Rovigo'
		}, {
			value: 'Salerno',
			text: 'Salerno'
		}, {
			value: 'Sassari',
			text: 'Sassari'
		}, {
			value: 'Savona',
			text: 'Savona'
		}, {
			value: 'Siena',
			text: 'Siena'
		}, {
			value: 'Siracusa',
			text: 'Siracusa'
		}, {
			value: 'Sondrio',
			text: 'Sondrio'
		}, {
			value: 'Taranto',
			text: 'Taranto'
		}, {
			value: 'Teramo',
			text: 'Teramo'
		}, {
			value: 'Terni',
			text: 'Terni'
		}, {
			value: 'Torino',
			text: 'Torino'
		}, {
			value: 'Trapani',
			text: 'Trapani'
		}, {
			value: 'Trento',
			text: 'Trento'
		}, {
			value: 'Treviso',
			text: 'Treviso'
		}, {
			value: 'Trieste',
			text: 'Trieste'
		}, {
			value: 'Udine',
			text: 'Udine'
		}, {
			value: 'Varese',
			text: 'Varese'
		}, {
			value: 'Venezia',
			text: 'Venezia'
		}, {
			value: 'Verbano-Cusio-Ossola',
			text: 'Verbano-Cusio-Ossola'
		}, {
			value: 'Vercelli',
			text: 'Vercelli'
		}, {
			value: 'Verona',
			text: 'Verona'
		}, {
			value: 'Vibo Valentia',
			text: 'Vibo Valentia'
		}, {
			value: 'Vicenza',
			text: 'Vicenza'
		}, {
			value: 'Viterbo',
			text: 'Viterbo'
		}]
	}
});