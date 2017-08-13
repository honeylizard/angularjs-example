// Define the `services footer` module
angular
    .module('footer.services', [
        'ngResource'
    ]);

angular
    .module('footer.services')
    .factory('FooterService', FooterService);

FooterService.$inject = [
    '$resource'
];

function FooterService($resource) {
    return $resource('../assets/mock-data/template/footer.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
