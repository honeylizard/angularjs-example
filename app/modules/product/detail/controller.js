angular
    .module('hlProductDetail')
    .controller('ProductDetailController', ProductDetailController);

ProductDetailController.$inject = [
    '$scope',
    'CommonService',
    'DetailCommonService',
    'ProductService'
];

function ProductDetailController($scope, CommonService, DetailCommonService, ProductService) {
    // Get the URL parameter
    $scope.productSlug = DetailCommonService.stateParams.productSlug;

    $scope.product = ProductService.query({id: $scope.productSlug}, function(data) {
        $scope.product = data[0];

        // Assumption: these long passages of content come from an internal CMS system.
        // Content is written by an employee and sanitized before it gets to this point.
        $scope.description = CommonService.sce.trustAsHtml($scope.product.description);

        // Update the HTML title to reflect the details
        DetailCommonService.state.current.data.pageTitle = 'Example - Products - ' + $scope.product.title;
    });
}
