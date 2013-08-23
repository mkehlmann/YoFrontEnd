require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        Backbone: '../bower_components/backbone-amd/backbone-min',
        underscore: '../bower_components/underscore/underscore-min',
        bootstrap: 'vendor/bootstrap',
        socketio: '/socket.io/socket.io.js'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        underscore: {
            deps: ['jquery'],
            exports: '_'
        },
        socketio: {
            exports: 'io'
        }
    }
});

require(['app', 'jquery', 'underscore', 'Backbone', 'socketio', 'bootstrap'], function (app, $, _, Backbone, io) {
    'use strict';
    // use app here
    console.log(app);
    console.log(Backbone);
    var socket = io.connect('http://localhost:8080/');
    socket.on('broadcasting', function (data) {
        console.log(data);
    });
    console.log('Running jQuery %s', $().jquery);
});
