angular
    .module('product.services')
    .factory('ProductService', ProductService);

ProductService.$inject = [
    '$resource'
];

function ProductService($resource) {
    return $resource('../assets/mock-data/product/:id.json', {}, {
        query: {
            method: 'GET',
            params: {id: 'default'},
            isArray: true
        }
    });
}
