// Define the `services about` module
angular
    .module('about.services', [
        'ngResource'
    ]);

angular
    .module('about.services')
    .factory('AboutPageService', AboutPageService);

AboutPageService.$inject = [
    '$resource'
];

function AboutPageService($resource) {
    return $resource('../assets/mock-data/page/about.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
