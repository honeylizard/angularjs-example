angular
    .module('hlFooter')
    .controller('FooterController', FooterController);

FooterController.$inject = [
    '$scope',
    '$sce',
    '$translate'
];

function FooterController($scope, $sce, $translate) {
    // TODO: Convert to mock data
    $scope.short_description = $sce.trustAsHtml(
        '<p><strong>We love who we are and we are very proud to be the part of your business</strong></p>'
        + '<p>Curabitur sit amet magna quam. Praesent in libero vel turpis pellentesque egestas sit amet vel nunc.</p>'
        + '<p>Curabitur sit amet magna quam. Praesent in libero vel turpis</p>'
    );
}
