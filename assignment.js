(function () {
    'use strict';

    angular.module('Assignment1', [])
        .controller('MessageController', MessageController);

    MessageController.$inject = ['$scope', '$filter'];
    function MessageController($scope, $filter) {

        $scope.checkTooMuch = function () {
            var food = $scope.food;
            if (food === undefined || food === '') {
                $scope.result = "Please enter data first";
            }
            else if (food.split(',').length > 3) {
                $scope.result = "Too Much!";
            }
            else {
                $scope.result = "Enjoy!";
            }
        }
    }
})();