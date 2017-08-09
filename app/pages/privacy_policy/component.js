// Register `privacy policy page` component, along with its associated controller and template
angular
    .module('hlPrivacyPage')
    .component('hlPrivacyPage', PrivacyPolicyPageComponent());

function PrivacyPolicyPageComponent() {
    return {
        templateUrl: 'pages/privacy_policy/template.html',
        controller: 'PrivacyPolicyPageController'
    };
}
