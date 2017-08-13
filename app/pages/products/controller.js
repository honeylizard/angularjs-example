angular
    .module('hlProductsPage')
    .controller('ProductsPageController', ProductsPageController);

ProductsPageController.$inject = [
    '$scope',
    '$sce',
    'ProductsPageService'
];

function ProductsPageController($scope, $sce, ProductsPageService) {
    // Assumption: these long passages of content come from an internal CMS system.
    // Content is written by an employee and sanitized before it gets to this point.
    ProductsPageService.query(function(data){
        var localData = data[0];

        $scope.description = $sce.trustAsHtml(localData.description);
    });
}
