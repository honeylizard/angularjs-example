// Define the `services location` module
angular
    .module('location.services', [
        'ngResource'
    ]);

angular
    .module('location.services')
    .factory('LocationsService', LocationsService);

LocationsService.$inject = [
    '$resource'
];

function LocationsService($resource) {
    return $resource('../assets/mock-data/locations.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
