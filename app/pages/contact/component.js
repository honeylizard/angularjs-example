// Register `contact page` component, along with its associated controller and template
angular
    .module('hlContactPage')
    .component('hlContactPage', ContactPageComponent());

function ContactPageComponent() {
    return {
        templateUrl: 'pages/contact/template.html',
        controller: 'ContactPageController'
    };
}
