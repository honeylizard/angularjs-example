// Register `hlLocationItem` component, along with its associated controller and template
angular
    .module('hlLocationItem')
    .component('hlLocationItem', LocationItemComponent());

// TODO: Convert the JSON binding
function LocationItemComponent() {
    return {
        templateUrl: 'modules/location/item/template.html',
        controller: 'LocationItemController',
        bindings: {
            contactData: '@'
        }
    };
}
