angular
    .module('hlCareerPage')
    .controller('CareerPageController', CareerPageController);

CareerPageController.$inject = [
    '$scope',
    '$sce',
    'CareersPageService'
];

function CareerPageController($scope, $sce, CareersPageService) {
    // Assumption: these long passages of content come from an internal CMS system.
    // Content is written by an employee and sanitized before it gets to this point.
    CareersPageService.query(function(data){
        var localData = data[0];

        $scope.hero_message = $sce.trustAsHtml(localData.hero_message);
        $scope.description = $sce.trustAsHtml(localData.description);
    });
}
