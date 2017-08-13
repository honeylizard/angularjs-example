angular
    .module('hlErrorPage')
    .controller('ErrorPageController', ErrorPageController);

ErrorPageController.$inject = [
    '$scope',
    '$sce',
    '$translate',
    'ErrorPageService'
];

function ErrorPageController($scope, $sce, $translate, ErrorPageService) {
    // Assumption: these long passages of content come from an internal CMS system.
    // Content is written by an employee and sanitized before it gets to this point.
    ErrorPageService.query(function(data){
        var localData = data[0];

        $scope.hero_message = $sce.trustAsHtml(localData.hero_message);
        $scope.description = $sce.trustAsHtml(localData.description);
    });
}
