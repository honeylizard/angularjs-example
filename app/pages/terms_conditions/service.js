// Define the `services terms & conditions` module
angular
    .module('terms.services', [
        'ngResource'
    ]);

angular
    .module('terms.services')
    .factory('TermsConditionsPageService', TermsConditionsPageService);

TermsConditionsPageService.$inject = [
    '$resource'
];

function TermsConditionsPageService($resource) {
    return $resource('../assets/mock-data/page/terms-conditions.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
