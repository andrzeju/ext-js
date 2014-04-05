Ext.define('PR.store.Przedmioty', {
	extend: 'Ext.data.Store',
	model: 'PR.model.Przedmiot',
	data: [{
				przedmiot: "Matematyka", typPrzedmiotu: "Wyklad", liczbaGodzin: 20
			}, {
				przedmiot: "Informatyka", typPrzedmiotu: "Cwiczenia", liczbaGodzin: 15
			}, {
				przedmiot: "Ekonomia", typPrzedmiotu: "Projekt", liczbaGodzin: 10
			}]
});