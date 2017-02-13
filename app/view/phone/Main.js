Ext.define('CIAM_app.view.phone.Main', {
	/*
extend: 'Ext.tab.Panel',
	requires: ['Ext.TitleBar'],
	fullscreen: true,
	config: {
		tabBarPosition: 'bottom',
		items: [{
			xtype: 'contactpanel_iphone'
		}]
	}
*/extend: 'Ext.form.Panel',
	xtype: 'contactpanel_iphone',
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
						var imageData = Ext.getCmp('url_img_phone');
						var biglietto_visita = Ext.getCmp('biglietto_visita_phone');
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
			html: 'Lascia un contatto',
			margin:20
		}, {
			xtype: 'fieldset',
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
				placeholder: 'Indirizzo email'
			},
			{
				xtype: 'selectfield',
				label: 'Nazione',
				required: true,
				store: 'nazioniStore',
				name: 'nazione',
				itemTpl: '{text},{value}',
				listeners: {
					change: function(field) {
						console.log('change');
						if (field.getValue() == 'IT') {
							Ext.getCmp('provincia_phone').setDisabled(false);
							Ext.getCmp('provincia_phone').setRequired(true);
						} else {
							Ext.getCmp('provincia_phone').setDisabled(true);
							Ext.getCmp('provincia_phone').setRequired(false);
							Ext.getCmp('provincia_phone').setValue(null);
						}
					}
				}
			}, {
				xtype: 'selectfield',
				label: 'Provincia',
				name: 'provincia',
				id: 'provincia_phone',
				disabled: true,
				store: 'provinceStore',
				itemTpl: '{text},{value}'
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
		}
, {
			xtype: 'fieldset',
			items: [{
				xtype: 'selectfield',
				name: 'professione',
				id: 'professione_phone',
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
				id: 'nome_azienda_phone',
				disabled: false
			}, {
				xtype: 'checkboxfield',
				name: 'privato',
				label: 'Privato',
				labelWidth: '75%',
				listeners: {
					change: function(field) {
						if (field.getChecked()) {
							Ext.getCmp('nome_azienda_phone').setDisabled(true);
							Ext.getCmp('nome_azienda_phone').setValue('');
							Ext.getCmp('professione_phone').setDisabled(true);
							Ext.getCmp('professione_phone').setRequired(false);
						} else {
							Ext.getCmp('nome_azienda_phone').setDisabled(false);
							Ext.getCmp('professione_phone').setDisabled(false);
							Ext.getCmp('professione_phone').setRequired(true);
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
		}, {
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
				maxRows: 9,
				placeHolder: "Il sottoscritto dichiara di avere ricevuto completa informativa ai sensi dell'art. 13 del D.Lgs. 196/2003, ed esprime il proprio consenso al trattamento ed alla comunicazione dei dati personali ad opera dei soggetti indicati nella predetta informativa e nei limiti della stessa."
			}, {
				xtype: 'checkboxfield',
				labelAlign: 'right',
				labelWidth: '80%',
				labelWrap:true,
				label: 'Accetto la Politica relativa alla Privacy',
				name: 'privacy'
			}]
		}, {
			xtype: 'button',
			iconAlign: 'center',
			iconCls: 'photo',
			iconMask: true,
			ui: 'action',
			width: '15%',
			margin: 10,
			handler: function() {
				navigator.camera.getPicture(onSuccess, onFail, {
						quality: 35,
						correctOrientation:true,
						sourceType : Camera.PictureSourceType.CAMERA,
						destinationType: Camera.DestinationType.DATA_URL
					});
					function onSuccess(image) {
						var imageData = Ext.getCmp('url_img_phone');
						var biglietto_visita = Ext.getCmp('biglietto_visita_phone');
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
		}, {
			xtype: 'image',
			mode: 'image',
			id: 'biglietto_visita_phone',
			src: '',
			width: 200,
			height: 200,
			hidden: true,
			margin: '0 0 0 18'
		},
		{
				layout: {
					type: 'vbox',
					align: 'center'
				},
				items: [{
					xtype: 'button',
					text: 'X',
					ui: 'round',
					id:'bottone_x_phone',
					hidden:true,
					margin:'-18 0 0 -18',
					handler: function(button) {
						Ext.getCmp('biglietto_visita_phone').setHidden(true);
						Ext.getCmp('biglietto_visita_phone').setSrc('');
						button.setHidden(true);
					}
				}]
			}, {
				xtype: 'spacer'
			},

		 {
			xtype: 'textareafield',
			hidden: true,
			name: 'img',
			id: 'url_img_phone'
		}, {
			xtype: 'textfield',
			hidden: true,
			name: 'app_name',
			value: 'contact_app'
		}, {
			margin: 10,
			padding: '10 30',
			xtype: 'button',
			text: 'Reset',
			ui: 'decline',
			handler: function(button) {
				button.up('formpanel').reset();
				Ext.getCmp('biglietto_visita_phone').setHidden(true);
				Ext.getCmp('biglietto_visita_phone').setSrc('');
				Ext.getCmp('url_img_phone').setValue('');
				Ext.getCmp('bottone_x_phone').setHidden(true);
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
					useDefaultXhrHeader: false,
					method: 'POST',
					params: {
						data: Ext.encode(values)
					},
					callback: function(options, success, response) {
						message_server = Ext.decode(response.responseText);
						if (message_server.success === false) Ext.Msg.alert('Errori riscontrati:', message_server.message);
						else {
							form.reset();
							Ext.getCmp('biglietto_visita_phone').setHidden(true);
							Ext.getCmp('biglietto_visita_phone').setSrc('');
							Ext.getCmp('url_img_phone').setValue('');
							Ext.getCmp('bottone_x_phone').setHidden(true);
							Ext.Msg.alert('Form compilato correttamente', 'Grazie per esser passati a trovarci');
						}
					}
				});
			}
		}
]
	}
});
