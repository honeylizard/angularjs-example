angular
    .module('hlContactPage')
    .controller('ContactPageController', ContactPageController);

ContactPageController.$inject = [
    '$scope',
    '$sce',
    '$route',
    '$translate'
];

function ContactPageController($scope, $sce, $route, $translate) {
    // Assumption: these long passages of content come from an internal CMS system.
    // Content is written by an employee and sanitized before it gets to this point.
    // TODO: Convert to mock data

    $scope.hero_message = $sce.trustAsHtml('<p>We\'re friendly and available to chat. '
        + 'Reach out to us anytime and we\'ll happily answer your questions</p>');

    $scope.description = $sce.trustAsHtml('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
        + 'Sed voluptate nihil eum consectetur similique? '
        + 'Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. '
        + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>'
        + '<p>Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. '
        + 'Odit, temporibus reprehenderit dolorum! '
        + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
        + 'Et, consequuntur, modi mollitia corporias ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? '
        + 'Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>');

    // We have a button on the jumbotron that allows users to access the product support site.
    // This is the URL to that site.
    $scope.productSupportURL = 'http://support.example.com';
}
