Ext.define("PR.view.PrzedmiotyGrid", {
	extend: "Ext.grid.Panel",
	alias: 'widget.przedmiotyGrid',
	title: "Lista przedmiotow",
	store: 'PR.store.Przedmioty',

	initComponent: function() {

		this.columns = [
		{header: "Nazwa przedmiotu", dataIndex: "przedmiot", flex: 3},
		{header: "Typ przedmiotu", dataIndex: "typPrzedmiotu", flex: 2},
		{header: "Liczba godzin", dataIndex: "liczbaGodzin", flex: 1}
		];
		this.callParent();
	}
});