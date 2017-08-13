angular
    .module('hlJobList')
    .controller('JobListController', JobListController);

JobListController.$inject = [
    '$scope',
    'JobsService',
    'JobFiltersService'
];

// TODO: Paginate the hlJobList
function JobListController($scope, JobsService, JobFiltersService) {
    $scope.listItems = []; //declare an empty array

    JobFiltersService.query(function(data){
        var localData = data[0];

        // Default list of employment types for jobs
        $scope.employmentTypes = localData.employment_types;

        // Default list of job categories for jobs
        $scope.categories = localData.categories;
    });

    this.employmentTypeFilter = function(job) {
        for (type in $scope.employmentTypes) {
            var employmentType = $scope.employmentTypes[type];
            if (employmentType.toggle && job.type === employmentType.name) {
                return true;
            }
        }
    };

    this.categoryFilter = function(job) {
        for (category in $scope.categories) {
            var jobCategory = $scope.categories[category];

            if (jobCategory.toggle && job.category === jobCategory.name) {
                return true;
            }
        }
    };

    // Default Sorting Order
    this.orderProp = 'id';

    JobsService.query().$promise.then(function successCallback(response) {
        angular.forEach(response, function (data) {
            $scope.listItems.push(data);
        });
    });
}
