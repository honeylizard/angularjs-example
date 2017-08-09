// Register `career page` component, along with its associated controller and template
angular
    .module('hlCareerPage')
    .component('hlCareerPage', CareerPageComponent());

function CareerPageComponent() {
    return {
        templateUrl: 'pages/careers/template.html',
        controller: 'CareerPageController'
    };
}
