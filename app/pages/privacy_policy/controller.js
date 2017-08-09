angular
    .module('hlPrivacyPage')
    .controller('PrivacyPolicyPageController', PrivacyPolicyPageController);

PrivacyPolicyPageController.$inject = [
    '$scope',
    '$sce',
    '$route',
    '$translate'
];

function PrivacyPolicyPageController($scope, $sce, $route, $translate) {
    // Assumption: these long passages of content come from an internal CMS system.
    // Content is written by an employee and sanitized before it gets to this point.
}
