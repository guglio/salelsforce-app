Ext.define('CIAM_app.view.Contact', {
	extend: 'Ext.form.Panel',
	xtype: 'contactpanel',
	id:'contact_panel',
	fullscreen: true,
	requires: ['Ext.form.FieldSet', 'Ext.field.Email', 'Ext.field.Select', 'Ext.field.Number', 'Ext.field.Radio', 'Ext.field.Toggle', 'Ext.field.Url', 'Ext.data.Store', 'Ext.device.Camera', 'Ext.Img', 'Ext.device.Camera', 'Ext.device.Connection', 'Ext.device.Notification', 'Ext.device.Orientation','Ext.util.DelayedTask'],
	config: {
		title: 'Contatto',
		iconCls: 'compose',
		items: [{
			xtype: 'toolbar',
			docked: 'top',
			title: 'Contatto',
			ui: 'light',
			items: [{
				xtype: 'spacer'
			}, {
				ui: 'normal',
				xtype: 'button',
				iconAlign: 'center',
				iconCls: 'photo',
				iconMask: true,
				handler: function() {
					navigator.camera.getPicture(onSuccess, onFail, {
						quality: 35,
						correctOrientation:true,
						sourceType : Camera.PictureSourceType.CAMERA,
						destinationType: Camera.DestinationType.DATA_URL
					});
					function onSuccess(image) {
						var imageData = Ext.getCmp('url_img');
						var biglietto_visita = Ext.getCmp('biglietto_visita');						
						var img_tmp = new Image(),w_tmp, h_tmp,h,w;
						imageData.setValue(image);					
						img_tmp.onload = function() {
							h = this.height;
							w = this.width;
						    if(w > h){
							    h_tmp = h*(200/w);
							    w_tmp = 200;
						    }
						    else{
						    	w_tmp = w*(200/h);
						    	h_tmp = 200;
						    }
						    biglietto_visita.setWidth(w_tmp);
							biglietto_visita.setHeight(h_tmp);
							biglietto_visita.setSrc('data:image/jpeg;base64,' + image);
							biglietto_visita.setHidden(false);
							Ext.getCmp('bottone_x').setHidden(false);
						}
						img_tmp.src = 'data:image/jpeg;base64,' + image;	
					}
					function onFail(message) {
					    alert('Failed because: ' + message);
					}
				}
			}]
		}, {
			xtype: 'panel',
			height: 20,
			html: 'Lascia un contatto / Leave your contact',
			margin: 20
		}, {
			layout: 'hbox',
			items: [{
				xtype: 'fieldset',
				flex: 1,
				items: [{
					xtype: 'textfield',
					label: 'Nome',
					name: 'fname',
					required: true,
					placeholder: 'Nome'
				}, {
					xtype: 'textfield',
					label: 'Cognome',
					name: 'lname',
					required: true,
					placeholder: 'Cognome'
				}, {
					xtype: 'emailfield',
					label: 'Email',
					name: 'email',
					required: true,
					id: 'email',
					placeholder: 'Indirizzo email'
				}, {
					xtype: 'selectfield',
					label: 'Nazione',
					required: true,
					//store: 'nazioniStore',
					name: 'nazione',
					//itemTpl: '{text},{value}',
					options:[{value:'',
			text:''
		},{
			value: 'IT',
			text: 'Italia'
		}, {
			value: 'FR',
			text: 'Francia'
		}, {
			value: 'AF',
			text: 'Afghanistan'
		}, {
			value: 'AL',
			text: 'Albania'
		}, {
			value: 'DZ',
			text: 'Algeria'
		}, {
			value: 'AD',
			text: 'Andorra'
		}, {
			value: 'AO',
			text: 'Angola'
		}, {
			value: 'AI',
			text: 'Anguilla'
		}, {
			value: 'AQ',
			text: 'Antartide'
		}, {
			value: 'AG',
			text: 'Antigua e Barbuda'
		}, {
			value: 'AN',
			text: 'Antille Olandesi'
		}, {
			value: 'SA',
			text: 'Arabia Saudita'
		}, {
			value: 'AR',
			text: 'Argentina'
		}, {
			value: 'AM',
			text: 'Armenia'
		}, {
			value: 'AW',
			text: 'Aruba'
		}, {
			value: 'AU',
			text: 'Australia'
		}, {
			value: 'AT',
			text: 'Austria'
		}, {
			value: 'AZ',
			text: 'Azerbaigian'
		}, {
			value: 'BS',
			text: 'Bahamas'
		}, {
			value: 'BH',
			text: 'Bahrein'
		}, {
			value: 'BD',
			text: 'Bangladesh'
		}, {
			value: 'BB',
			text: 'Barbados'
		}, {
			value: 'BE',
			text: 'Belgio'
		}, {
			value: 'BZ',
			text: 'Belize'
		}, {
			value: 'BJ',
			text: 'Benin'
		}, {
			value: 'BM',
			text: 'Bermuda'
		}, {
			value: 'BT',
			text: 'Bhutan'
		}, {
			value: 'BY',
			text: 'Bielorussia'
		}, {
			value: 'BO',
			text: 'Bolivia'
		}, {
			value: 'BA',
			text: 'Bosnia-Erzegovina'
		}, {
			value: 'BW',
			text: 'Botswana'
		}, {
			value: 'BR',
			text: 'Brasile'
		}, {
			value: 'BN',
			text: 'Brunei'
		}, {
			value: 'BG',
			text: 'Bulgaria'
		}, {
			value: 'BF',
			text: 'Burkina Faso'
		}, {
			value: 'BI',
			text: 'Burundi'
		}, {
			value: 'KH',
			text: 'Cambogia'
		}, {
			value: 'CM',
			text: 'Camerun'
		}, {
			value: 'CA',
			text: 'Canada'
		}, {
			value: 'CV',
			text: 'Capo Verde'
		}, {
			value: 'TD',
			text: 'Ciad'
		}, {
			value: 'CL',
			text: 'Cile'
		}, {
			value: 'CN',
			text: 'Cina'
		}, {
			value: 'CY',
			text: 'Cipro'
		}, {
			value: 'VA',
			text: 'Città del Vaticano'
		}, {
			value: 'CO',
			text: 'Colombia'
		}, {
			value: 'KM',
			text: 'Comore'
		}, {
			value: 'CG',
			text: 'Congo'
		}, {
			value: 'CD',
			text: 'Congo - Repubblica Dem. del'
		}, {
			value: 'KR',
			text: 'Corea'
		}, {
			value: 'KP',
			text: 'Corea del Nord'
		}, {
			value: 'CI',
			text: 'Costa di Avorio'
		}, {
			value: 'CR',
			text: 'Costa Rica'
		}, {
			value: 'HR',
			text: 'Croazia'
		}, {
			value: 'CU',
			text: 'Cuba'
		}, {
			value: 'DK',
			text: 'Danimarca'
		}, {
			value: 'DM',
			text: 'Dominica'
		}, {
			value: 'EC',
			text: 'Ecuador'
		}, {
			value: 'EG',
			text: 'Egitto'
		}, {
			value: 'SV',
			text: 'El Salvador'
		}, {
			value: 'AE',
			text: 'Emirati Arabi'
		}, {
			value: 'ER',
			text: 'Eritrea'
		}, {
			value: 'EE',
			text: 'Estonia'
		}, {
			value: 'ET',
			text: 'Etiopia'
		}, {
			value: 'FJ',
			text: 'Fiji'
		}, {
			value: 'PH',
			text: 'Filippine'
		}, {
			value: 'FI',
			text: 'Finlandia'
		}, {
			value: 'GA',
			text: 'Gabon'
		}, {
			value: 'GM',
			text: 'Gambia'
		}, {
			value: 'GE',
			text: 'Georgia'
		}, {
			value: 'GS',
			text: 'Georgia del Sud e Isole Sandwich Meridionali'
		}, {
			value: 'DE',
			text: 'Germania'
		}, {
			value: 'GH',
			text: 'Ghana'
		}, {
			value: 'JM',
			text: 'Giamaica'
		}, {
			value: 'JP',
			text: 'Giappone'
		}, {
			value: 'GI',
			text: 'Gibilterra'
		}, {
			value: 'DJ',
			text: 'Gibuti'
		}, {
			value: 'JO',
			text: 'Giordania'
		}, {
			value: 'UK',
			text: 'Gran Bretagna'
		}, {
			value: 'GR',
			text: 'Grecia'
		}, {
			value: 'GD',
			text: 'Grenada'
		}, {
			value: 'GL',
			text: 'Groenlandia'
		}, {
			value: 'GP',
			text: 'Guadalupe'
		}, {
			value: 'GU',
			text: 'Guam'
		}, {
			value: 'GT',
			text: 'Guatemala'
		}, {
			value: 'GF',
			text: 'Guiana francese'
		}, {
			value: 'GN',
			text: 'Guinea'
		}, {
			value: 'GQ',
			text: 'Guinea equatoriale'
		}, {
			value: 'GW',
			text: 'Guinea-Bissau'
		}, {
			value: 'GY',
			text: 'Guyana'
		}, {
			value: 'HT',
			text: 'Haiti'
		}, {
			value: 'HN',
			text: 'Honduras'
		}, {
			value: 'HK',
			text: 'Hong Kong SAR'
		}, {
			value: 'IN',
			text: 'India'
		}, {
			value: 'ID',
			text: 'Indonesia'
		}, {
			value: 'IR',
			text: 'Iran'
		}, {
			value: 'IQ',
			text: 'Iraq'
		}, {
			value: 'IE',
			text: 'Irlanda'
		}, {
			value: 'IS',
			text: 'Islanda'
		}, {
			value: 'BV',
			text: 'Isola Bouvet'
		}, {
			value: 'KY',
			text: 'Isole Cayman'
		}, {
			value: 'CX',
			text: 'Isole Christmas'
		}, {
			value: 'CC',
			text: 'Isole Cocos (Keeling)'
		}, {
			value: 'CK',
			text: 'Isole Cook'
		}, {
			value: 'FK',
			text: 'Isole Falkland (Islas Malvinas)'
		}, {
			value: 'FO',
			text: 'Isole Faroe'
		}, {
			value: 'HM',
			text: 'Isole Heard e Mcdonald'
		}, {
			value: 'MP',
			text: 'Isole Marianne Settentrionali'
		}, {
			value: 'MH',
			text: 'Isole Marshall'
		}, {
			value: 'UM',
			text: 'Isole minori degli Stati Uniti'
		}, {
			value: 'NF',
			text: 'Isole Norfolk'
		}, {
			value: 'SB',
			text: 'Isole Salomone'
		}, {
			value: 'SJ',
			text: 'Isole Svalbard e Jan Mayen'
		}, {
			value: 'TC',
			text: 'Isole Turks e Caicos'
		}, {
			value: 'VG',
			text: 'Isole Vergini (GB)'
		}, {
			value: 'VI',
			text: 'Isole Vergini (USA)'
		}, {
			value: 'WF',
			text: 'Isole Wallis e Futuna'
		}, {
			value: 'IL',
			text: 'Israele'
		}, {
			value: 'YU',
			text: 'Iugoslavia'
		}, {
			value: 'KZ',
			text: 'Kazakistan'
		}, {
			value: 'KE',
			text: 'Kenya'
		}, {
			value: 'KG',
			text: 'Kirghizistan'
		}, {
			value: 'KI',
			text: 'Kiribati'
		}, {
			value: 'KW',
			text: 'Kuwait'
		}, {
			value: 'LA',
			text: 'Laos'
		}, {
			value: 'LS',
			text: 'Lesotho'
		}, {
			value: 'LV',
			text: 'Lettonia'
		}, {
			value: 'LB',
			text: 'Libano'
		}, {
			value: 'LR',
			text: 'Liberia'
		}, {
			value: 'LY',
			text: 'Libia'
		}, {
			value: 'LI',
			text: 'Liechtenstein'
		}, {
			value: 'LT',
			text: 'Lituania'
		}, {
			value: 'LU',
			text: 'Lussemburgo'
		}, {
			value: 'MO',
			text: 'Macao'
		}, {
			value: 'MK',
			text: 'Macedonia - Ex Repubblica Iugoslava di'
		}, {
			value: 'MG',
			text: 'Madagascar'
		}, {
			value: 'MW',
			text: 'Malawi'
		}, {
			value: 'MV',
			text: 'Maldive'
		}, {
			value: 'MY',
			text: 'Malesia'
		}, {
			value: 'ML',
			text: 'Mali'
		}, {
			value: 'MT',
			text: 'Malta'
		}, {
			value: 'MA',
			text: 'Marocco'
		}, {
			value: 'MQ',
			text: 'Martinica'
		}, {
			value: 'MR',
			text: 'Mauritania'
		}, {
			value: 'MU',
			text: 'Mauritius'
		}, {
			value: 'YT',
			text: 'Mayotte'
		}, {
			value: 'MX',
			text: 'Messico'
		}, {
			value: 'FM',
			text: 'Micronesia'
		}, {
			value: 'MD',
			text: 'Moldavia'
		}, {
			value: 'MC',
			text: 'Monaco'
		}, {
			value: 'MN',
			text: 'Mongolia'
		}, {
			value: 'MS',
			text: 'Montserrat'
		}, {
			value: 'MZ',
			text: 'Mozambico'
		}, {
			value: 'MM',
			text: 'Myanmar'
		}, {
			value: 'NA',
			text: 'Namibia'
		}, {
			value: 'NR',
			text: 'Nauru'
		}, {
			value: 'NP',
			text: 'Nepal'
		}, {
			value: 'NI',
			text: 'Nicaragua'
		}, {
			value: 'NE',
			text: 'Niger'
		}, {
			value: 'NG',
			text: 'Nigeria'
		}, {
			value: 'NU',
			text: 'Niue'
		}, {
			value: 'NO',
			text: 'Norvegia'
		}, {
			value: 'NC',
			text: 'Nuova Caledonia'
		}, {
			value: 'NZ',
			text: 'Nuova Zelanda'
		}, {
			value: 'OM',
			text: 'Oman'
		}, {
			value: 'NL',
			text: 'Paesi Bassi'
		}, {
			value: 'PK',
			text: 'Pakistan'
		}, {
			value: 'PW',
			text: 'Palau'
		}, {
			value: 'PA',
			text: 'Panama'
		}, {
			value: 'PG',
			text: 'Papua Nuova Guinea'
		}, {
			value: 'PY',
			text: 'Paraguay'
		}, {
			value: 'PE',
			text: 'Perù'
		}, {
			value: 'PN',
			text: 'Pitcairn'
		}, {
			value: 'PF',
			text: 'Polinesia francese'
		}, {
			value: 'PL',
			text: 'Polonia'
		}, {
			value: 'PT',
			text: 'Portogallo'
		}, {
			value: 'PR',
			text: 'Puerto Rico'
		}, {
			value: 'QA',
			text: 'Qatar'
		}, {
			value: 'CZ',
			text: 'Repubblica Ceca'
		}, {
			value: 'CF',
			text: 'Repubblica Centrafricana'
		}, {
			value: 'DO',
			text: 'Repubblica Dominicana'
		}, {
			value: 'RE',
			text: 'Reunion'
		}, {
			value: 'RO',
			text: 'Romania'
		}, {
			value: 'RW',
			text: 'Ruanda'
		}, {
			value: 'RU',
			text: 'Russia'
		}, {
			value: 'KN',
			text: 'Saint Kitts e Nevis'
		}, {
			value: 'LC',
			text: 'Saint Lucia'
		}, {
			value: 'PM',
			text: 'Saint Pierre et Miquelon'
		}, {
			value: 'VC',
			text: 'Saint Vincent e Grenadine'
		}, {
			value: 'WS',
			text: 'Samoa'
		}, {
			value: 'AS',
			text: 'Samoa Americane'
		}, {
			value: 'SM',
			text: 'San Marino'
		}, {
			value: 'SH',
			text: 'Sant Elena'
		}, {
			value: 'ST',
			text: 'Sao Tome e Principe'
		}, {
			value: 'SN',
			text: 'Senegal'
		}, {
			value: 'SC',
			text: 'Seychelles'
		}, {
			value: 'SL',
			text: 'Sierra Leone'
		}, {
			value: 'SG',
			text: 'Singapore'
		}, {
			value: 'SY',
			text: 'Siria'
		}, {
			value: 'SK',
			text: 'Slovacchia'
		}, {
			value: 'SI',
			text: 'Slovenia'
		}, {
			value: 'SO',
			text: 'Somalia'
		}, {
			value: 'ES',
			text: 'Spagna'
		}, {
			value: 'LK',
			text: 'Sri Lanka'
		}, {
			value: 'US',
			text: 'Stati Uniti'
		}, {
			value: 'ZA',
			text: 'Sudafrica'
		}, {
			value: 'SD',
			text: 'Sudan'
		}, {
			value: 'SR',
			text: 'Suriname'
		}, {
			value: 'SE',
			text: 'Svezia'
		}, {
			value: 'CH',
			text: 'Svizzera'
		}, {
			value: 'SZ',
			text: 'Swaziland'
		}, {
			value: 'TJ',
			text: 'Tagikistan'
		}, {
			value: 'TH',
			text: 'Tailandia'
		}, {
			value: 'TW',
			text: 'Taiwan'
		}, {
			value: 'TZ',
			text: 'Tanzania'
		}, {
			value: 'TF',
			text: 'Territori australi francesi'
		}, {
			value: 'IO',
			text: 'Territori inglesi dell Oceano Indiano'
		}, {
			value: 'TP',
			text: 'Timor Est'
		}, {
			value: 'TG',
			text: 'Togo'
		}, {
			value: 'TK',
			text: 'Tokelau'
		}, {
			value: 'TO',
			text: 'Tonga'
		}, {
			value: 'TT',
			text: 'Trinidad e Tobago'
		}, {
			value: 'TN',
			text: 'Tunisia'
		}, {
			value: 'TR',
			text: 'Turchia'
		}, {
			value: 'TM',
			text: 'Turkmenistan'
		}, {
			value: 'TV',
			text: 'Tuvalu'
		}, {
			value: 'UA',
			text: 'Ucraina'
		}, {
			value: 'UG',
			text: 'Uganda'
		}, {
			value: 'HU',
			text: 'Ungheria'
		}, {
			value: 'UY',
			text: 'Uruguay'
		}, {
			value: 'UZ',
			text: 'Uzbekistan'
		}, {
			value: 'VU',
			text: 'Vanuatu'
		}, {
			value: 'VE',
			text: 'Venezuela'
		}, {
			value: 'VN',
			text: 'Vietnam'
		}, {
			value: 'YE',
			text: 'Yemen'
		}, {
			value: 'ZM',
			text: 'Zambia'
		}, {
			value: 'ZW',
			text: 'Zimbabwe'
		}],
					listeners: {
						change: function(field) {
							if (field.getValue() == 'IT') {
								Ext.getCmp('provincia').setDisabled(false);
								Ext.getCmp('provincia').setRequired(true);
							} else {
								Ext.getCmp('provincia').setDisabled(true);
								Ext.getCmp('provincia').setRequired(false);
								Ext.getCmp('provincia').setValue(null);
							}
						}
					}
				}, {
					xtype: 'selectfield',
					label: 'Provincia',
					name: 'provincia',
					id: 'provincia',
					disabled: true,
					options:[{value: '',
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
				}, {
					xtype: 'numberfield',
					name: 'CAP',
					label: 'CAP'
				}, {
					xtype: 'textfield',
					name: 'cellulare',
					label: 'Cellulare'
				}, {
					xtype: 'selectfield',
					label: 'Riferimento',
					name: 'persona',
					options: [{
						text: '',
						value: ''
					}, {
						text: 'Giulia',
						value: 'Giulia'
					}, {
						text: 'Melania',
						value: 'Melania'
					}, {
						text: 'Maurizio',
						value: 'Maurizio'
					}, {
						text: 'Carlo',
						value: 'Carlo'
					}, {
						text: 'Altro',
						value: 'Altro'
					}]
				}]
			}, {
				xtype: 'fieldset',
				flex: 1,
				items: [{
					xtype: 'selectfield',
					name: 'professione',
					id: 'professione',
					required: true,
					label: 'Field',
					options: [{
						text: '',
						value: ''
					}, {
						text: 'Azienda',
						value: 'azienda'
					}, {
						text: 'Studio Tecnico',
						value: 'studio_tecnico'
					}, {
						text: 'Fornitore',
						value: 'fornitore'
					}, {
						text: 'Press',
						value: 'press'
					}, {
						text: 'Ente / Istituzione',
						value: 'ente'
					}, {
						text: 'Altro',
						value: 'altro'
					}]
				}, {
					xtype: 'textfield',
					name: 'Nome_azienda',
					label: 'Nome Azienda / Ente',
					id: 'nome_azienda',
					disabled: false
				}, {
					xtype: 'checkboxfield',
					name: 'privato',
					label: 'Privato',
					labelWidth: '75%',
					listeners: {
						change: function(field) {
							if (field.getChecked()) {
								Ext.getCmp('nome_azienda').setDisabled(true);
								Ext.getCmp('nome_azienda').setValue('');
								Ext.getCmp('professione').setDisabled(true);
								Ext.getCmp('professione').setRequired(false);
							} else {
								Ext.getCmp('nome_azienda').setDisabled(false);
								Ext.getCmp('professione').setDisabled(false);
								Ext.getCmp('professione').setRequired(true);
							}
						}
					}
				}, {
					xtype: 'textfield',
					name: 'indirizzo',
					label: 'Indirizzo'
				}, {
					xtype: 'textfield',
					name: 'citta',
					label: 'Città',
					placeholder: 'Città'
				}, {
					xtype: 'textfield',
					name: 'telefono',
					label: 'Telefono'
				}, {
					xtype: 'urlfield',
					label: 'Website',
					name: 'website'
				}, {
					xtype: 'textfield',
					name: 'altro',
					label: 'Altro'
				}]
			}]
		}, {
			layout: 'hbox',
			items: [{
				flex: 1,
				xtype: 'fieldset',
				title: 'Richiesta *',
				items: [{
					xtype: 'checkboxfield',
					labelWidth: '75%',
					labelWrap: true,
					labelAlign: 'right',
					label: 'Invio informazioni',
					name: 'richiesta',
					value: 'info'
				}, {
					xtype: 'checkboxfield',
					labelWidth: '75%',
					labelWrap: true,
					labelAlign: 'right',
					label: 'Invio cataloghi',
					name: 'richiesta',
					value: 'cataloghi'
				}, {
					xtype: 'checkboxfield',
					labelWidth: '75%',
					labelWrap: true,
					labelAlign: 'right',
					label: 'Iscrizione newsletter',
					name: 'richiesta',
					value: 'newsletter'
				}, {
					xtype: 'checkboxfield',
					labelWidth: '75%',
					labelWrap: true,
					labelAlign: 'right',
					label: 'Appuntamento con responsabile tecnico',
					name: 'richiesta',
					value: 'appuntamento'
				}, {
					xtype: 'checkboxfield',
					labelWidth: '75%',
					labelWrap: true,
					labelAlign: 'right',
					label: 'Richiesta preventivo',
					name: 'richiesta',
					value: 'preventivo'
				}, {
					xtype: 'checkboxfield',
					labelWidth: '75%',
					labelWrap: true,
					labelAlign: 'right',
					label: 'Proposta nuovo fornitore',
					name: 'richiesta',
					value: 'fornitore'
				}, {
					xtype: 'checkboxfield',
					labelWidth: '75%',
					labelWrap: true,
					labelAlign: 'right',
					label: 'Intervista',
					name: 'richiesta',
					value: 'intervista'
				}, {
					xtype: 'checkboxfield',
					labelWidth: '75%',
					labelWrap: true,
					labelAlign: 'right',
					label: 'Invio listini',
					name: 'richiesta',
					value: 'listini'
				}]
			}, {
				flex: 1,
				xtype: 'fieldset',
				title: 'Interesse',
				items: [{
					xtype: 'checkboxfield',
					labelWidth: '75%',
					labelWrap: true,
					labelAlign: 'right',
					label: 'Strutture in Legno e Bioedilizia',
					name: 'interessi',
					value: 'legno_bio'
				}, {
					xtype: 'checkboxfield',
					labelWidth: '75%',
					labelWrap: true,
					labelAlign: 'right',
					label: 'Strutture in XLAM',
					name: 'interessi',
					value: 'XLAM'
				}, {
					xtype: 'checkboxfield',
					labelWidth: '75%',
					labelWrap: true,
					labelAlign: 'right',
					label: 'Servizio di Progettazione',
					name: 'interessi',
					value: 'progettazione'
				}, {
					xtype: 'checkboxfield',
					labelWidth: '75%',
					labelWrap: true,
					labelAlign: 'right',
					label: 'Arredo e Design',
					name: 'interessi',
					value: 'design'
				}, {
					xtype: 'checkboxfield',
					labelWidth: '75%',
					labelWrap: true,
					labelAlign: 'right',
					label: 'Isolamento e cappotti',
					name: 'interessi',
					value: 'isolamento'
				}, {
					xtype: 'checkboxfield',
					labelWidth: '75%',
					labelWrap: true,
					labelAlign: 'right',
					label: 'Serramenti',
					name: 'interessi',
					value: 'serramenti'
				}, {
					xtype: 'checkboxfield',
					labelWidth: '75%',
					labelWrap: true,
					labelAlign: 'right',
					label: 'Materiali',
					name: 'interessi',
					value: 'materiali'
				}, {
					xtype: 'checkboxfield',
					labelWidth: '75%',
					labelWrap: true,
					labelAlign: 'right',
					label: 'Generale',
					name: 'interessi',
					value: 'generale'
				}]
			}]
		}, {
			xtype: 'fieldset',
			title: 'altro / feedback:',
			items: [{
				xtype: 'textareafield',
				name: 'feedback'
			}]
		}, {
			xtype: 'fieldset',
			title: 'Normativa sulla Privacy',
			items: [{
				xtype: 'textareafield',
				readOnly: true,
				maxRows: 3,
				placeHolder: "Il sottoscritto dichiara di avere ricevuto completa informativa ai sensi dell'art. 13 del D.Lgs. 196/2003, ed esprime il proprio consenso al trattamento ed alla comunicazione dei dati personali ad opera dei soggetti indicati nella predetta informativa e nei limiti della stessa."
			}, {
				xtype: 'checkboxfield',
				labelAlign: 'right',
				labelWidth: '75%',
				label: 'Accetto la Politica relativa alla Privacy',
				name: 'privacy'
			}]
		}, {
			xtype: 'button',
			iconAlign: 'center',
			iconCls: 'photo',
			iconMask: true,
			ui: 'action',
			width: '10%',
			margin: 10,
			handler: function() {
					navigator.camera.getPicture(onSuccess, onFail, {
						quality: 35,
						correctOrientation:true,
						sourceType : Camera.PictureSourceType.CAMERA,
						destinationType: Camera.DestinationType.DATA_URL
					});
					function onSuccess(image) {
						var imageData = Ext.getCmp('url_img');
						var biglietto_visita = Ext.getCmp('biglietto_visita');						
						var img_tmp = new Image(),w_tmp, h_tmp,h,w;
						imageData.setValue(image);					
						img_tmp.onload = function() {
							h = this.height;
							w = this.width;
						    if(w > h){
							    h_tmp = h*(200/w);
							    w_tmp = 200;
						    }
						    else{
						    	w_tmp = w*(200/h);
						    	h_tmp = 200;
						    }
						    biglietto_visita.setWidth(w_tmp);
							biglietto_visita.setHeight(h_tmp);
							biglietto_visita.setSrc('data:image/jpeg;base64,' + image);
							biglietto_visita.setHidden(false);
							Ext.getCmp('bottone_x').setHidden(false);
						}
						img_tmp.src = 'data:image/jpeg;base64,' + image;	
					}
					function onFail(message) {
					    alert('Failed because: ' + message);
					}
				}
		},{
			layout: 'hbox',
			items: [{
				xtype: 'spacer'
			}, {
				xtype: 'image',
				mode: 'image',
				id: 'biglietto_visita',
				src: '',
				margin:'0 0 0 18',
				height:0,
				width:0,
				listeners: {
					tap: function() {
						Ext.Viewport.add({
							xtype: 'panel',
							centered: true,
							hideOnMaskTap: true,
							modal: true,
							items: [{
								xtype: 'image',
								mode: 'image',
								id: 'fullscreen_img',
								src: ''
							}],
							listeners: {
								initialize: function() {
									var imag_biglietto_visita = Ext.getCmp('biglietto_visita');
									var imag_full = Ext.getCmp('fullscreen_img');
									w = imag_biglietto_visita.getWidth()*3;
									h = imag_biglietto_visita.getHeight()*3;
									this.setWidth(w+12);
									this.setHeight(h+12);
									img_src = imag_biglietto_visita.getSrc();
									imag_full.setSrc(img_src);
									imag_full.setWidth(w);
									imag_full.setHeight(h);
								},
								hide: function(panel, eOpt) {
									panel.destroy();
								}
							}
						});
					}
				}
			}, {
				layout: {
					type: 'vbox',
					align: 'center'
				},
				items: [{
					xtype: 'button',
					text: 'X',
					ui: 'round',
					id:'bottone_x',
					hidden:true,
					margin:'-18 0 0 -18',
					handler: function(button) {
						Ext.getCmp('biglietto_visita').setHidden(true);
						Ext.getCmp('biglietto_visita').setSrc('');
						button.setHidden(true);
					}
				}]
			}, {
				xtype: 'spacer'
			}]
		}, {
			xtype: 'textareafield',
			hidden: true,
			name: 'img',
			id: 'url_img'
		}, {
			xtype: 'textfield',
			hidden: true,
			name: 'app_name',
			value: 'contact_app'
		}, {
			layout: 'hbox',
			items: [{
				xtype: 'spacer'
			}, {
				margin: 10,
				padding: '10 30',
				xtype: 'button',
				text: 'Reset',
				ui: 'decline',
				handler: function(button) {
					button.up('formpanel').reset();					
					Ext.getCmp('biglietto_visita').setHidden(true);
					Ext.getCmp('biglietto_visita').setSrc('');
					Ext.getCmp('url_img').setValue('');
					Ext.getCmp('bottone_x').setHidden(true);
				}
			}, {
				xtype: 'button',
				text: 'Invia',
				ui: 'confirm',
				padding: '10 30',
				margin: 10,
				handler: function(button) {
					var form = button.up('formpanel');
					values = form.getValues();
					Ext.Ajax.request({
						url: 'http://192.168.1.1/digital_card.php',
						useDefaultXhrHeader: true,
						method: 'POST',
						params: {
							data: Ext.encode(values)
						},
						callback: function(options, success, response) {
							message_server = Ext.decode(response.responseText);
							if (message_server.success === false) Ext.Msg.alert('Errori riscontrati:', message_server.message);
							else {
								form.reset();
								Ext.getCmp('biglietto_visita').setHidden(true);
								Ext.getCmp('biglietto_visita').setSrc('');
								Ext.getCmp('url_img').setValue('');
								Ext.getCmp('bottone_x').setHidden(true);
								Ext.Msg.alert('Form compilato correttamente', 'Grazie per esser passati a trovarci');
							}
						}
					});
				}
			}, {
				xtype: 'spacer'
			}]
		}]
	},
	initialize: function () {
        this.element.on('tap', function(){
            this.tap();
        }, this); 
    },
	tap: function() {
		task.cancel();
        task.delay(delay);
       }
});