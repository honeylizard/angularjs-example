angular
    .module('product.services')
    .factory('ProductsService', ProductsService);

ProductsService.$inject = [
    '$resource'
];

function ProductsService($resource) {
    return $resource('../assets/mock-data/products/all.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
