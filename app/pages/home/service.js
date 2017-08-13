// Define the `services home` module
angular
    .module('home.services', [
        'ngResource'
    ]);

angular
    .module('home.services')
    .factory('HomePageService', HomePageService);

HomePageService.$inject = [
    '$resource'
];

function HomePageService($resource) {
    return $resource('../assets/mock-data/page/home.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
