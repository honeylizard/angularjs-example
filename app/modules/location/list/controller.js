angular
    .module('hlLocationList')
    .controller('LocationListController', LocationListController);

LocationListController.$inject = [
    '$translate',
    'LocationsService'
];

function LocationListController($translate, LocationsService) {
    this.locations = LocationsService.query();
}
