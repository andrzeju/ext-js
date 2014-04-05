Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'PR',
    controllers : ['Przedmioty'],

    appFolder: 'js/app',

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'przedmiotyGrid'
                }
            ]
        });
    }
});