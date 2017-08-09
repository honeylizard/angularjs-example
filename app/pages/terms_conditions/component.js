// Register `terms & conditions page` component, along with its associated controller and template
angular
    .module('hlTermsPage')
    .component('hlTermsPage', TermsConditionsPageComponent());

function TermsConditionsPageComponent() {
    return {
        templateUrl: 'pages/terms_conditions/template.html',
        controller: 'TermsConditionsPageController'
    };
}
