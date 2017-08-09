// Register `hlHeader` component, along with its associated controller and template
angular
    .module('hlHeader')
    .component('hlHeader', HeaderComponent());

function HeaderComponent() {
    return {
        templateUrl: 'core/template/header/template.html',
        controller: 'HeaderController'
    };
}
