angular
    .module('hlTermsPage')
    .controller('TermsPageController', TermsConditionsPageController);

TermsConditionsPageController.$inject = [
    '$scope',
    '$sce',
    '$route',
    '$translate'
];

function TermsConditionsPageController($scope, $sce, $route, $translate) {
    // Assumption: these long passages of content come from an internal CMS system.
    // Content is written by an employee and sanitized before it gets to this point.
}
