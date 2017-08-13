angular
    .module('job.services')
    .factory('JobFiltersService', JobFiltersService);

JobFiltersService.$inject = [
    '$resource'
];

function JobFiltersService($resource) {
    return $resource('../assets/mock-data/jobs/filters.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
