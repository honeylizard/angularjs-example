// Define the `hlProductDetail` module
angular
    .module('hlProductDetail', [
        'ngRoute',
        'product.services', // Product Service
        'core.services',
        'detail.services'
    ]);
