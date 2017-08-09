// Define the `services company statistics` module
angular
    .module('statistics.services', [
        'ngResource'
    ]);

angular
    .module('statistics.services')
    .factory('CompanyStatisticsService', CompanyStatisticsService);

CompanyStatisticsService.$inject = [
    '$resource'
];

function CompanyStatisticsService($resource) {
    return $resource('../assets/mock-data/company-stats.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
