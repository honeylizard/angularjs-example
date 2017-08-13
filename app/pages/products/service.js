// Define the `services products` module
angular
    .module('products.services', [
        'ngResource'
    ]);

angular
    .module('products.services')
    .factory('ProductsPageService', ProductsPageService);

ProductsPageService.$inject = [
    '$resource'
];

function ProductsPageService($resource) {
    return $resource('../assets/mock-data/page/products.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
