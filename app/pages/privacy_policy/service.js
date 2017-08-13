// Define the `services privacy policy` module
angular
    .module('privacy.services', [
        'ngResource'
    ]);

angular
    .module('privacy.services')
    .factory('PrivacyPolicyPageService', PrivacyPolicyPageService);

PrivacyPolicyPageService.$inject = [
    '$resource'
];

function PrivacyPolicyPageService($resource) {
    return $resource('../assets/mock-data/page/privacy-policy.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
