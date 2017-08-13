angular
    .module('hlJobDetail')
    .controller('JobDetailController', JobDetailController);

JobDetailController.$inject = [
    '$scope',
    'CommonService',
    'DetailCommonService',
    'JobService'
];


function JobDetailController($scope, CommonService, DetailCommonService, JobService) {
    // Get the URL parameter
    $scope.jobSlug = DetailCommonService.stateParams.jobSlug;

    $scope.job = JobService.query({id: $scope.jobSlug}, function(data) {
        $scope.job = data[0];

        // Assumption: these long passages of content come from an internal CMS system.
        // Content is written by an employee and sanitized before it gets to this point.
        $scope.description = CommonService.sce.trustAsHtml($scope.job.description);

        // Update the HTML title to reflect the details
        DetailCommonService.state.current.data.pageTitle = 'Example - Careers - ' + $scope.job.title;
    });
}
