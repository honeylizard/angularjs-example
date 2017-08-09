angular
    .module('hlCounter')
    .controller('CounterController', CounterController);

CounterController.$inject = [
    '$scope',
    '$element',
    '$timeout',
    '$http'
];

function CounterController($scope, $element, $timeout, $http) {
    var localData = this;
    this.$onInit = function() {
        $scope.countTotal = localData.countTotal;

        $scope.onTimeout = function(){

            var duration = $scope.countTotal / 1000;
            if (! localData.countValue || ! $scope.countTotal) {
                localData.countValue = 0;
            }

            if (localData.countValue < localData.countTotal) {
                localData.countValue++;
                $element.html(localData.countValue);
                $timeout($scope.onTimeout, duration);
            } else if (localData.countValue >= localData.countTotal) {
                localData.countValue = localData.countTotal;
                $element.html(localData.countValue);
            }
        };

        $scope.onTimeout();
    };
}
