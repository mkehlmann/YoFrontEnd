require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        Backbone: '../bower_components/backbone-amd/backbone-min',
        underscore: '../bower_components/underscore/underscore-min',
        socketio: './vendor/socket.io'
    },
    shim: {
        Backbone: {
            deps: ['underscore']
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

require(['socketio', 'PostFeed'], function ($, Feed) {
    'use strict';
    // use app here
    var posts = new Feed.Posts();
    var feed = new Feed.PostFeed({collection: posts});

    posts.fetch({reset: true});

    var socket = io.connect('http://localhost:8080/');
    socket.on('broadcasting', function (data) {
        console.log(data);
    });
});
