// Register `hlCounter` component, along with its associated controller and template
angular
    .module('hlCounter')
    .component('hlCounter', CounterComponent());

function CounterComponent() {
    return {
        controller: 'CounterController',
        bindings: {
            countTotal: '@',
            countValue: '@'
        }
    };
}
