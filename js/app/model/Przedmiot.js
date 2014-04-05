Ext.define('PR.model.Przedmiot', {
	extend: 'Ext.data.Model',
	fields : ['przedmiot', 'typPrzedmiotu', {name: 'liczbaGodzin', type: 'int'}],
});