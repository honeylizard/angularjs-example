// Register `hlJobList` component, along with its associated controller and template
angular
    .module('hlJobList')
    .component('hlJobList', JobListComponent());

function JobListComponent() {
    return {
        templateUrl: 'modules/job/list/template.html',
        controller: 'JobListController'
    };
}
