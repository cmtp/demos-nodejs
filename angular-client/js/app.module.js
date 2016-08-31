(function() {
    'use strict';

    angular.module('app', [
        'ngSanitize',
        'btford.socket-io'
    ])
    .value('user', 'Drupal');
})();