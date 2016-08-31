(function() {
'use strict';

    angular
        .module('app')
        .controller('SocketController', SocketController);

    SocketController.$inject = ['$log', 'user', 'chatFactory', 'messageFormatter', '$scope'];
    function SocketController($log, user, chatFactory, messageFormatter, $scope) {
        $scope.user = user;
        $scope.messageLog = 'Chat Enabled!';

        $scope.sendMessage = function () {
            var match = $scope.message.match('^\/user (.*)');
            if(angular.isDefined(match) && angular.isArray(match) && match.length === 2) {
                var oldUser = user;
                user = match[1];
                $scope.message = '';
                $scope.messageLog = messageFormatter(new Date(), user, 'user changed - from ' + oldUser + ' to ' + user + '!') + $scope.messageLog;
                $scope.user = user;
            }
            $log.debug('sending message', $scope.message);
            chatFactory.emit('message', user, $scope.message);
            $scope.message = '';
        };

        $scope.$on('socket:broadcast', function (event, data) {
            $log.debug('got a message', event.name);
            if(!data.payload) {
                $log.error('invalid message', 'event', event, 'data', JSON.stringify(data));
                return;
            }
            $scope.$apply(function() {
                $scope.messageLog = $scope.messageLog + messageFormatter(new Date(), data.source, data.payload);
                // console.log(vm.messageLog);
            });
        });
    }
})();