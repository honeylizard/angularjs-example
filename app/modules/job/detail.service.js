angular
    .module('job.services')
    .factory('JobService', JobService);

JobService.$inject = [
    '$resource'
];

function JobService($resource) {
    return $resource('../assets/mock-data/job/:id.json', {}, {
        query: {
            method: 'GET',
            params: {id: 'default'},
            isArray: true
        }
    });
}
