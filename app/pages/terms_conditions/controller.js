angular
    .module('hlTermsPage')
    .controller('TermsConditionsPageController', TermsConditionsPageController);

TermsConditionsPageController.$inject = [
    '$scope',
    '$sce',
    '$translate',
    'TermsConditionsPageService'
];

function TermsConditionsPageController($scope, $sce, $translate, TermsConditionsPageService) {
    // Assumption: these long passages of content come from an internal CMS system.
    // Content is written by an employee and sanitized before it gets to this point.
    TermsConditionsPageService.query(function(data){
        var localData = data[0];

        $scope.content = $sce.trustAsHtml(localData.body);
    });
}
