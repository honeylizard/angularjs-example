// Register `hlProduct` component, along with its associated controller and template
angular
    .module('hlProductItem')
    .component('hlProductItem', ProductItemComponent());

// TODO: Convert the JSON binding
function ProductItemComponent() {
    return {
        templateUrl: 'modules/product/item/template.html',
        controller: 'ProductItemController',
        bindings: {
            productData: '@'
        }
    };
}
