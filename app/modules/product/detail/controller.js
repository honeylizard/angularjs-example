angular
    .module('hlProductDetail')
    .controller('ProductDetailController', ProductDetailController);

ProductDetailController.$inject = [
    '$scope',
    '$sce',
    '$routeParams',
    '$translate',
    '$state',
    '$stateParams',
    'ProductService'
];

function ProductDetailController($scope, $sce, $routeParams, $translate, $state, $stateParams, ProductService) {
    // Get the URL parameter
    $scope.productSlug = $stateParams.productSlug;

    $scope.product = ProductService.query({id: $scope.productSlug}, function(data) {
        $scope.product = data[0];

        // Assumption: these long passages of content come from an internal CMS system.
        // Content is written by an employee and sanitized before it gets to this point.
        $scope.description = $sce.trustAsHtml($scope.product.description);

        // Update the HTML title to reflect the details
        $state.current.data.pageTitle = 'Example - Products - ' + $scope.product.title;
    });
}
