angular
    .module('hlProductItem')
    .controller('ProductItemController', ProductItemController);

ProductItemController.$inject = [
    '$translate'
];

function ProductItemController($translate) {
    var localData = this;
    this.$onInit = function() {
        if (localData.productData) {
            var product = JSON.parse(localData.productData);

            if (product) {
                this.image = product.image;
                this.title = product.title;
                this.slug = product.slug;
                this.snippet = product.snippet;
            }
        }
    };
}
