(function () {
    'use strict';
    angular
        .module('app')
        .value('messageFormatter', messageFormatter);

        function messageFormatter(date, user, message) {
            return date.toLocaleTimeString() + ' - ' + user + ' - ' + message + '\n';
        }
})();