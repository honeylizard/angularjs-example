angular
    .module('company.services')
    .factory('CustomersService', CustomersService);

CustomersService.$inject = [
    '$resource'
];

function CustomersService($resource) {
    return $resource('../assets/mock-data/customers.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
