Ext.define("PR.controller.Przedmioty", {
	extend: "Ext.app.Controller",
	views: ['PR.view.PrzedmiotyGrid', 'PR.view.PrzedmiotyEdit'],
	stores: ['PR.store.Przedmioty'],
	models: ['PR.model.Przedmiot'],

	init : function() {
		this.control({
			'viewport > panel' : {
				render: function() {
					console.log('Panel was rendered');
				}
			},
			'przedmiotyGrid' : {
				itemdblclick : function(grid, record) {
					var view = Ext.widget('przedmiotyEdit');
					view.down('form').loadRecord(record);
				}
			},
			'przedmiotyEdit button[action=savePrzedmiot]' : {
				click : function(button) {

					console.log('zapisz przedmiot click');
					var win = button.up('window');
					var form = win.down('form');
					var record = form.getRecord();
					var values = form.getValues();
					record.set(values);
					win.close();

				}
			}
		});

		console.log("Przedmioty controller initialized");
	}
});