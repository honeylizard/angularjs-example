angular
    .module('hlFooter')
    .controller('FooterController', FooterController);

FooterController.$inject = [
    '$scope',
    '$sce',
    '$translate',
    'FooterService'
];

function FooterController($scope, $sce, $translate, FooterService) {
    FooterService.query(function(data){
        var localData = data[0];

        $scope.short_description = $sce.trustAsHtml(localData.company_summary);
    });
}
