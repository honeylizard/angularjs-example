// Register `hlTeamList` component, along with its associated controller and template
angular
    .module('hlTeamList')
    .component('hlTeamList', TeamListComponent());

function TeamListComponent() {
    return {
        templateUrl: 'modules/team/list/template.html',
        controller: 'TeamListController'
    };
}
