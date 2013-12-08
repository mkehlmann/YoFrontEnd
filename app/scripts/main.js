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

require(['socketio', 'jquery', 'PostFeed', 'Users'], function (io, $, Feed, Users) {
    'use strict';
    // use app here
    var posts = new Feed.Posts();
    var feed = new Feed.PostFeed({collection: posts});
    var users = new Users.UserCount();

    posts.fetch({reset: true});

    var socket = io.connect('http://localhost:8080/');
    socket.on('usercount', function (data) {
        users.render(data);
    });

    $('#post').click(function(e) {
        e.preventDefault();
        socket.emit('post', {
            postedBy: $('#postedBy').val(),
            url: $('#url').val()
        });
    });

    socket.on('newPost', function (data) {
        posts.add(data);
    });
});
