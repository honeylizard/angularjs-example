angular
    .module('hlProductsPage')
    .controller('ProductsPageController', ProductsPageController);

ProductsPageController.$inject = [
    '$scope',
    '$sce',
    '$route'
];

function ProductsPageController($scope, $sce, $route) {
    // Assumption: these long passages of content come from an internal CMS system.
    // Content is written by an employee and sanitized before it gets to this point.
    // TODO: Convert to mock data

    //$scope.hero_message = $sce.trustAsHtml('<p>I am a products page!</p>');

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
