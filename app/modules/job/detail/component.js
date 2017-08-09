// Register `hlJobDetail` component, along with its associated controller and template
angular
    .module('hlJobDetail')
    .component('hlJobDetail', JobDetailComponent());

function JobDetailComponent() {
    return {
        templateUrl: 'modules/job/detail/template.html',
        controller: 'JobDetailController'
    };
}
