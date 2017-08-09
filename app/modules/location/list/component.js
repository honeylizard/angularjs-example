// Register `hlLocationList` component, along with its associated controller and template
angular
    .module('hlLocationList')
    .component('hlLocationList', LocationListComponent());

function LocationListComponent() {
    return {
        templateUrl: 'modules/location/list/template.html',
        controller: 'LocationListController'
    };
}
