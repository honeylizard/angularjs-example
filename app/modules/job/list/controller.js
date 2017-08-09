angular
    .module('hlJobList')
    .controller('JobListController', JobListController);

JobListController.$inject = [
    '$scope',
    'JobsService'
];

// TODO: Paginate the hlJobList
function JobListController($scope, JobsService) {
    $scope.listItems = []; //declare an empty array

    // Default list of employment types for jobs
    $scope.employmentTypes = [
        {
            name:'Full-Time',
            slug: 'full-time',
            toggle: true
        },
        {
            name:'Part-Time',
            slug: 'part-time',
            toggle: true
        },
        {
            name:'Contract',
            slug: 'contract',
            toggle: true
        },
        {
            name:'Internship',
            slug: 'internship',
            toggle: true
        }
    ];

    // Default list of job categories for jobs
    $scope.categories = [
        {
            name: 'Information Technology',
            slug: 'information-technology',
            toggle: true
        },
        {
            name: 'Technology',
            slug: 'technology',
            toggle: true
        },
        {
            name: 'Support',
            slug: 'support',
            toggle: true
        },
        {
            name: 'Sales & Marketing',
            slug: 'sales-marketing',
            toggle: true
        },
        {
            name: 'Finance',
            slug: 'finance',
            toggle: true
        }
    ];

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
