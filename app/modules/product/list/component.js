// Register `hlProductList` component, along with its associated controller and template
angular
    .module('hlProductList')
    .component('hlProductList', ProductListComponent());

function ProductListComponent() {
    return {
        templateUrl: 'modules/product/list/template.html',
        controller: 'ProductListController'
    };
}
