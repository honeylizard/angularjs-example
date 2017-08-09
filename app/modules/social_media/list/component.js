// Register `hlSocialMediaList` component, along with its associated controller and template
angular
    .module('hlSocialMediaList')
    .component('hlSocialMediaList', SocialMediaListComponent());

// TODO: Convert the JSON binding
function SocialMediaListComponent() {
    return {
        templateUrl: 'modules/social_media/list/template.html',
        controller: 'SocialMediaListController',
        bindings: {
            socialMediaData: '@'

        }
    };
}
