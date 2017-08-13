angular
    .module('hlContactPage')
    .controller('ContactPageController', ContactPageController);

ContactPageController.$inject = [
    '$scope',
    '$sce',
    '$translate',
    'ContactPageService'
];

function ContactPageController($scope, $sce, $translate, ContactPageService) {
    // Assumption: these long passages of content come from an internal CMS system.
    // Content is written by an employee and sanitized before it gets to this point.
    ContactPageService.query(function(data){
        var localData = data[0];

        $scope.hero_message = $sce.trustAsHtml(localData.hero_message);
        $scope.description = $sce.trustAsHtml(localData.description);

        // We have a button on the jumbotron that allows users to access the product support site.
        // This is the URL to that site.
        $scope.productSupportURL = localData.support_url;
    });
}
