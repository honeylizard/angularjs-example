angular
    .module('hlJobDetail')
    .controller('JobDetailController', JobDetailController);

JobDetailController.$inject = [
    '$scope',
    '$sce',
    '$routeParams',
    '$translate',
    '$state',
    '$stateParams',
    'JobService'
];


function JobDetailController($scope, $sce, $routeParams, $translate, $state, $stateParams, JobService) {
    // Get the URL parameter
    $scope.jobSlug = $stateParams.jobSlug;

    $scope.job = JobService.query({id: $scope.jobSlug}, function(data) {
        $scope.job = data[0];

        // Assumption: these long passages of content come from an internal CMS system.
        // Content is written by an employee and sanitized before it gets to this point.
        $scope.description = $sce.trustAsHtml($scope.job.description);

        // Update the HTML title to reflect the details
        $state.current.data.pageTitle = 'Example - Careers - ' + $scope.job.title;
    });
}
