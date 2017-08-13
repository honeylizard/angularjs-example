// Define the `services error` module
angular
    .module('error.services', [
        'ngResource'
    ]);

angular
    .module('error.services')
    .factory('ErrorPageService', ErrorPageService);

ErrorPageService.$inject = [
    '$resource'
];

function ErrorPageService($resource) {
    return $resource('../assets/mock-data/page/error.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
