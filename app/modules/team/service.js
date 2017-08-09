// Define the `services team` module
angular
    .module('team.services', [
        'ngResource'
    ]);

angular
    .module('team.services')
    .factory('TeamService', TeamService);

TeamService.$inject = [
    '$resource'
];

function TeamService($resource) {
    return $resource('../assets/mock-data/team.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
