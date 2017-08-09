angular
    .module('job.services')
    .factory('JobsService', JobsService);

JobsService.$inject = [
    '$resource'
];

function JobsService($resource) {
    return $resource('../assets/mock-data/jobs/all.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
