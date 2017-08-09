angular
    .module('hlCareerPage')
    .controller('CareerPageController', CareerPageController);

CareerPageController.$inject = [
    '$scope',
    '$sce',
    '$route'
];

function CareerPageController($scope, $sce, $route) {
    // Assumption: these long passages of content come from an internal CMS system.
    // Content is written by an employee and sanitized before it gets to this point.
    // TODO: Convert to mock data

    $scope.hero_message = $sce.trustAsHtml('<p>Think you\'re good enough? Do you like our projects and want to be the part of our team?'
        + '<br/>'
        + 'If you can handle this, just apply for the right position!</p>');

    $scope.description = $sce.trustAsHtml('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
        + 'Sed voluptate nihil eum consectetur similique? '
        + 'Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. '
        + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>'
        + '<p>Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. '
        + 'Odit, temporibus reprehenderit dolorum! '
        + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
        + 'Et, consequuntur, modi mollitia corporias ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? '
        + 'Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>');
}
