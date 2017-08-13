// Define the `services contact` module
angular
    .module('contact.services', [
        'ngResource'
    ]);

angular
    .module('contact.services')
    .factory('ContactPageService', ContactPageService);

ContactPageService.$inject = [
    '$resource'
];

function ContactPageService($resource) {
    return $resource('../assets/mock-data/page/contact.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
