angular
    .module('hlAboutPage')
    .controller('AboutPageController', AboutPageController);

AboutPageController.$inject = [
    '$scope',
    '$sce',
    'AboutPageService'
];

function AboutPageController($scope, $sce, AboutPageService) {
    // Assumption: these long passages of content come from an internal CMS system.
    // Content is written by an employee and sanitized before it gets to this point.
    AboutPageService.query(function(data){
        var localData = data[0];

        $scope.company_description = $sce.trustAsHtml(localData.company_description);
        $scope.company_mission = $sce.trustAsHtml(localData.company_mission);
        $scope.company_passion = $sce.trustAsHtml(localData.company_passion);
    });
}
