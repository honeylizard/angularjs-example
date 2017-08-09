// Register `products page` component, along with its associated controller and template
angular
    .module('hlProductsPage')
    .component('hlProductsPage', ProductsPageComponent());

function ProductsPageComponent() {
    return {
        templateUrl: 'pages/products/template.html',
        controller: 'ProductsPageController'
    };
}
