// Register `hlNewsletterCta` component, along with its associated controller and template
angular
    .module('hlNewsletterCta')
    .component('hlNewsletterCta', NewsletterCallToActionComponent());

function NewsletterCallToActionComponent() {
    return {
        templateUrl: 'core/modules/call_to_action/newsletter/template.html',
        controller: 'NewsletterCallToActionController'
    };
}
