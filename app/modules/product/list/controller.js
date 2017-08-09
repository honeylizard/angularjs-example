angular
    .module('hlProductList')
    .controller('ProductListController', ProductListController);

ProductListController.$inject = [
    '$translate',
    'ProductsService'
];

function ProductListController($translate, ProductsService) {
    this.products = ProductsService.query();
    this.itemClass = 'product';
}
