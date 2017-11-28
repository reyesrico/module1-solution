(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$filter'];
    function LunchCheckController($scope, $filter) {

        $scope.checkTooMuch = function () {
            var food = $scope.food;
            if (food === undefined || food === '') {
                $scope.result = "Please enter data first";
                $scope.class = "text-danger";
                $scope.fclass = "red";
            }
            else if (food.split(',').length > 3) {
                $scope.result = "Too Much!";
                $scope.class = "text-success";
                $scope.fclass = "green";
            }
            else {
                $scope.result = "Enjoy!";
                $scope.class = "text-success";
                $scope.fclass = "green";
            }
        }
    }
})();