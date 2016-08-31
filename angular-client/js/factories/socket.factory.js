(function() {
'use strict';

    angular
        .module('app')
        .factory('chatFactory', chatFactory);

    chatFactory.$inject = ['socketFactory'];

    function chatFactory(socketFactory) {
        var socket = socketFactory();
        socket.forward('broadcast');
        return socket;
    }
})();