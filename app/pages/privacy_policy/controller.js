angular
    .module('hlPrivacyPage')
    .controller('PrivacyPolicyPageController', PrivacyPolicyPageController);

PrivacyPolicyPageController.$inject = [
    '$scope',
    '$sce',
    '$translate',
    'PrivacyPolicyPageService'
];

function PrivacyPolicyPageController($scope, $sce, $translate, PrivacyPolicyPageService) {
    // Assumption: these long passages of content come from an internal CMS system.
    // Content is written by an employee and sanitized before it gets to this point.
    PrivacyPolicyPageService.query(function(data){
        var localData = data[0];

        $scope.content = $sce.trustAsHtml(localData.body);
    });
}
