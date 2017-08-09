// Register `home page` component, along with its associated controller and template
angular
    .module('hlHomePage')
    .component('hlHomePage', HomePageComponent());

function HomePageComponent() {
    return {
        templateUrl: 'pages/home/template.html',
        controller: 'HomePageController'
    };
}
