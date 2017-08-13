// Define the `products page` module
angular
    .module('hlProductsPage', [
        'hlProductList', // Products List Component
        'hlProductItem', // Products List Item Component
        'products.services'
    ]);
