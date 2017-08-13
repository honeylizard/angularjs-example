// Define the `services careers` module
angular
    .module('careers.services', [
        'ngResource'
    ]);

angular
    .module('careers.services')
    .factory('CareersPageService', CareersPageService);

CareersPageService.$inject = [
    '$resource'
];

function CareersPageService($resource) {
    return $resource('../assets/mock-data/page/careers.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
