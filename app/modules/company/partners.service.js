angular
    .module('company.services')
    .factory('PartnersService', PartnersService);

PartnersService.$inject = [
    '$resource'
];

function PartnersService($resource) {
    return $resource('../assets/mock-data/partners.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
