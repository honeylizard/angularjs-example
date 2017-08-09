angular
    .module('hlSocialMediaList')
    .controller('SocialMediaListController', SocialMediaListController);

SocialMediaListController.$inject = [
    '$sce',
    '$translate'
];

function SocialMediaListController($sce, $translate) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    this.$onInit = function() {
        if (this.socialMediaData) {
            var socialMediaData = JSON.parse(this.socialMediaData);

            var socialMediaList = [];
            angular.forEach(socialMediaData, function(value, key) {
                var linkData = {
                    class: key,
                    site: capitalizeFirstLetter(key),
                    icon: $sce.trustAsHtml('<i class="fa fa-2x fa-' + key + '-square"></i>'),
                    url: value
                };
                switch (key) {
                    case 'linkedin':
                        linkData['site'] = 'LinkedIn';
                        break;
                    case 'github':
                        linkData['site'] = 'GitHub';
                        break;
                    case 'google-plus':
                        linkData['site'] = 'Google Plus';
                        break;
                    case 'youtube':
                        linkData['site'] = 'YouTube';
                        linkData['icon'] = $sce.trustAsHtml('<i class="fa fa-2x fa-' + key + '-play"></i>');
                        break;
                    case 'twitch':
                    case 'instagram':
                    case 'skype':
                    case 'slack':
                    case 'flickr':
                        linkData['icon'] = $sce.trustAsHtml('<i class="fa fa-2x fa-' + key + '"></i>');
                        break;
                }
                socialMediaList.push(linkData);
            });

            this.socialMediaList = socialMediaList;
        }
    };
}
