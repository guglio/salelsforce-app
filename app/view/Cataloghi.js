Ext.define('CIAM_app.view.Cataloghi', {
	extend: 'Ext.NestedList',
	xtype: 'cataloghi',
	requires: ['Ext.data.TreeStore', 'Ext.carousel.Carousel', 'Ext.util.DelayedTask'],
	fullscreen: true,
	config: {
		iconCls: 'books',
		iconMask: true,
		title: 'Cataloghi',
		styleHtmlContent: true,
		store: 'lista_cataloghiStore',
		variableHeights: true,
		listConfig: {
			itemTpl: '<img src="{icon}" alt="{text}" class="cataloghi_img" /><span class="titolo_catalogo">{text}</span>'
		},
		listeners: {
			leafitemtap: function(nestedList, list, index, target, record) {
				var detailCard = nestedList.getDetailCard();
				var pagina = record.get('immagini_catalogo');
				var n = record.get('pagine_catalogo');
				items = [];
				if (detailCard.getData() !== null) {
					detailCard.getStore().removeAll(true, true);
				}
				for (i = 1; i <= n; i++) {
					items.push({
						src: 'gallery/' + pagina + '/' + i + '.jpg'
					});
				}
				detailCard.setData(items);
				detailCard.refresh();
			}
		},
		detailCard: {
			xtype: 'dataview',
			itemTpl: '<img src="{src}">',
			cls: 'immagine_catalogo',
			listeners: {
				itemtap: function(dataView, index, target, record, e, eOpts) {
					var docked_bar = Ext.getCmp('mainview').getDockedItems()[0];
					var n = dataView.getData().length;
					Ext.getCmp('mainview').setActiveItem(3);
					docked_bar.setHidden(true);
					items = [];
					for (i = 0; i < n; i++) {
						var img_src = dataView.getData()[i]['src'];
						items.push({
							xtype: 'image',
							src: img_src
						});
					}
					Ext.getCmp('catalogues_carousel').setItems(items);
					Ext.getCmp('catalogues_carousel').setActiveItem(index);
				}
			}
		}
	},
	initialize: function() {
		this.element.on('tap', function() {
			this.tap();
		}, this);
	},
	tap: function() {
		task.cancel();
		task.delay(delay);
	}
});