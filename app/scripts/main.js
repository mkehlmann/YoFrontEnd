require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        Backbone: '../bower_components/backbone-amd/backbone-min',
        underscore: '../bower_components/underscore/underscore-min',
        socketio: './vendor/socket.io'
    },
    shim: {
        underscore: {
            deps: ['jquery'],
            exports: '_'
        },
        socketio: {
            exports: 'io'
        }
    }
});

require(['app', 'jquery', 'underscore', 'Backbone', 'socketio'], function (app, $, _, Backbone, io) {
    'use strict';
    // use app here
    console.log(app);

    var socket = io.connect('http://localhost:8080/');
    socket.on('broadcasting', function (data) {
        console.log(data);
    });
    console.log('Running jQuery %s', $().jquery);
});
