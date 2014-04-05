Ext.define('PR.view.PrzedmiotyEdit',{
	extend: 'Ext.window.Window',
	alias: 'widget.przedmiotyEdit',
	title: "Edycja przedmiotu",
	layout: 'fit',
	autoShow: true,

	initComponent : function() {
		var typyComboStore = Ext.create('Ext.data.Store', {
			fields: [{name: "id"}, 'typ'],
			data: [
			{
				id: "Wyklad", typ: "Wyklad"
			},
			{
				id: "Cwiczenia", typ: "Cwiczenia"
			},
			{
				id: "Projekt", typ: "Projekt"
			},
			{
				id: "Laboratoria", typ: "Laboratoria"
			}]
		});
		this.items = [
			{
				xtype: "form",
				items: [
					{
						fieldLabel: "Przedmiot",
						xtype: "textfield",
						name: "przedmiot"
					},
					{
						fieldLabel: "Typ przedmiotu",
						xtype: "combobox",
						store: typyComboStore,
						displayField: "typ",
						valueField: 'id',
						name: "Typ przedmiotu"

					},
					{
						fieldLabel: "Liczba godzin",
						xtype: 'textfield',
						name: 'liczbaGodzin'
					}			
				]
			}
		];
		this.buttons = [
			{
				text: "Zapisz",
				action: 'savePrzedmiot'
			},
			{
				text: "Anuluj",
				scope: this,
				handler: this.close
			}
		];
		this.callParent(arguments);
	},



});