angular
    .module('hlHomePage')
    .controller('HomePageController', HomePageController);

HomePageController.$inject = [
    '$scope',
    '$sce',
    'HomePageService'
];

function HomePageController($scope, $sce, HomePageService) {
    HomePageService.query(function(data){
        var localData = data[0];

        $scope.hero_message = $sce.trustAsHtml(localData.hero_message);
        $scope.sections = localData.sections;
        $scope.qualities = localData.qualities;
        $scope.features = localData.features;
        $scope.latestNews = localData.latestNews;

        $scope.product_title = localData.product_preview.title;
        $scope.product_description = $sce.trustAsHtml(localData.product_preview.description);
        $scope.product_image = localData.product_preview.image;

        $scope.service_title = localData.service_preview.title;
        $scope.service_description = $sce.trustAsHtml(localData.service_preview.description);
        $scope.service_image = localData.service_preview.image;
    });

    $scope.trustSource = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
}
