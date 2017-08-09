// Register `about page` component, along with its associated controller and template
angular
    .module('hlAboutPage')
    .component('hlAboutPage', AboutPageComponent());

function AboutPageComponent() {
    return {
        templateUrl: 'pages/about/template.html',
        controller: 'AboutPageController'
    };
}
