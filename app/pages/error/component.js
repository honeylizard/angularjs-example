// Register `error page` component, along with its associated controller and template
angular
    .module('hlErrorPage')
    .component('hlErrorPage', ErrorPageController());

function ErrorPageController() {
    return {
        templateUrl: 'pages/error/template.html',
        controller: 'ErrorPageController'
    };
}
