// Register `hlContactCta` component, along with its associated controller and template
angular
    .module('hlContactCta')
    .component('hlContactCta', ContactCallToActionComponent());

function ContactCallToActionComponent() {
    return {
        templateUrl: 'core/modules/call_to_action/contact/template.html',
        controller: 'ContactCallToActionController'
    };
}
