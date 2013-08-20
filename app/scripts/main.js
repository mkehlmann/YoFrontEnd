require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        Backbone: '../bower_components/backbone-amd/backbone-min',
        underscore: '../bower_components/underscore/underscore-min',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        underscore: {
            deps: ['jquery'],
            exports: '_'
        }
    }
});

require(['app', 'jquery', 'underscore', 'Backbone', 'bootstrap'], function (app, $, _,Backbone) {
    'use strict';
    // use app here
    console.log(app);
    console.log(Backbone);
    console.log('Running jQuery %s', $().jquery);
});
