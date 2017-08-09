angular
    .module('hlTeamList')
    .controller('TeamListController', TeamListController);

TeamListController.$inject = [
    '$scope',
    '$translate',
    'TeamService'
];

function TeamListController($scope, $translate, TeamService) {
    $scope.team = TeamService.query();
}
