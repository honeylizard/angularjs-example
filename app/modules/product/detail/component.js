// Register `hlProductDetail` component, along with its associated controller and template
angular
    .module('hlProductDetail')
    .component('hlProductDetail', ProductDetailComponent());

function ProductDetailComponent() {
    return {
        templateUrl: 'modules/product/detail/template.html',
        controller: 'ProductDetailController'
    };
}
