(function() {
    'use strict';

    angular.module('app')
    .directive('chatSocket', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/chat.html',
            controller: function($scope, $element) {
                $scope.$watch('messageLog', function() {
                  var textArea = $element[0].children[0];
                  textArea.scrollTop = textArea.scrollHeight;
                });
            }
        };
    });

}());
