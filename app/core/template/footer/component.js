// Register `hlFooter` component, along with its associated controller and template
angular
    .module('hlFooter')
    .component('hlFooter', FooterComponent());

function FooterComponent() {
    return {
        templateUrl: 'core/template/footer/template.html',
        controller: 'FooterController'
    };
}
