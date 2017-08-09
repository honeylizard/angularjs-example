// Register `hlTeamItem` component, along with its associated controller and template
angular
    .module('hlTeamItem')
    .component('hlTeamItem', TeamItemComponent());

// TODO: Convert the JSON binding
function TeamItemComponent() {
    return {
        templateUrl: 'modules/team/item/template.html',
        controller: 'TeamItemController',
        bindings: {
            employeeData: '@'
        }
    };
}
