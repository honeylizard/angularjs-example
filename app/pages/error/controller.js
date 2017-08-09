angular
    .module('hlErrorPage')
    .controller('ErrorPageController', ErrorPageController);

ErrorPageController.$inject = [
    '$scope',
    '$sce',
    '$route',
    '$translate'
];

function ErrorPageController($scope, $sce, $route, $translate) {
    // Assumption: these long passages of content come from an internal CMS system.
    // Content is written by an employee and sanitized before it gets to this point.
    // TODO: Convert to mock data

    $scope.hero_message = $sce.trustAsHtml(
        '<p>We can\'t seem to find the page you are looking for.</p>'
    );

    $scope.description = $sce.trustAsHtml(
        '<p>The page that you are looking for does not exist on this website. '
        + 'You may have accidentally mistype the page address, or followed an expired link.</p>'
    );
}
