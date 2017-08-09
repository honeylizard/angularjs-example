angular
    .module('hlHomePage')
    .controller('HomePageController', HomePageController);

HomePageController.$inject = [
    '$scope',
    '$sce',
    '$route'
];

function HomePageController($scope, $sce, $route) {
    // TODO: Convert to mock data

    $scope.hero_message = $sce.trustAsHtml('<p>Everyone come and see how good I look!</p>');

    $scope.sections = [
        {
            thumbnail: "../assets/stock-photos/people-coffee-tea-meeting_350x250.jpg",
            title: 'Section Title',
            snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime.'
        },
        {
            thumbnail: "../assets/stock-photos/people-woman-coffee-meeting_350x250.jpg",
            title: 'Section Title',
            snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime.'
        },
        {
            thumbnail: "../assets/stock-photos/writing-notes-idea-conference_350x250.jpg",
            title: 'Section Title',
            snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime.'
        }
    ];

    $scope.qualities = [
        {
            iconName: "glyphicon-cloud",
            glyphicon: "true",
            title: 'Quality A'
        },
        {
            iconName: "glyphicon-lock",
            glyphicon: "true",
            title: 'Quality B'
        },
        {
            iconName: "glyphicon-briefcase",
            glyphicon: "true",
            title: 'Quality C'
        },
        {
            iconName: "glyphicon-globe",
            glyphicon: "true",
            title: 'Quality D'
        },
        {
            iconName: "glyphicon-leaf",
            glyphicon: "true",
            title: 'Quality E'
        },
        {
            iconName: "glyphicon-bullhorn",
            glyphicon: "true",
            title: 'Quality F'
        },
        {
            iconName: "glyphicon-send",
            glyphicon: "true",
            title: 'Quality G'
        },
        {
            iconName: "glyphicon-headphones",
            glyphicon: "true",
            title: 'Quality H'
        }
    ];

    $scope.features = [
        {
            iconName: "glyphicon-bullhorn",
            glyphicon: "true",
            title: 'Feature A',
            snippet: 'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Quisq leo ligula, porttitor consequat eu.'
        },
        {
            iconName: "fa-area-chart",
            fontAwesome: "true",
            title: 'Feature B',
            snippet: 'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Quisq leo ligula, porttitor consequat eu.'
        },
        {
            iconName: "fa-shield",
            fontAwesome: "true",
            title: 'Feature C',
            snippet: 'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Quisq leo ligula, porttitor consequat eu.'
        },
        {
            iconName: "fa-user",
            fontAwesome: "true",
            title: 'Feature D',
            snippet: 'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Quisq leo ligula, porttitor consequat eu.'
        },
        {
            iconName: "fa-database",
            fontAwesome: "true",
            title: 'Feature E',
            snippet: 'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Quisq leo ligula, porttitor consequat eu.'
        },
        {
            iconName: "fa-gavel",
            fontAwesome: "true",
            title: 'Feature F',
            snippet: 'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Quisq leo ligula, porttitor consequat eu.'
        },
        {
            iconName: "fa-coffee",
            fontAwesome: "true",
            title: 'Feature G',
            snippet: 'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Quisq leo ligula, porttitor consequat eu.'
        },
        {
            iconName: "fa-cubes",
            fontAwesome: "true",
            title: 'Feature H',
            snippet: 'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Quisq leo ligula, porttitor consequat eu.'
        }
    ];

    $scope.latestNews = [
        {
            thumbnail: "../assets/stock-photos/pexels-photo-515169_300x250.jpg",
            title: 'Assumenda repud eum veniam',
            date: 'Oct 25, 2016',
            url: '/',
            snippet: 'Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.'
        },
        {
            thumbnail: "../assets/stock-photos/pexels-photo-269633_300x250.jpg",
            title: 'Explicabo magnam quibusdam.',
            date: 'Mar 5, 2016',
            url: '/',
            snippet: 'Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.'
        },
        {
            thumbnail: "../assets/stock-photos/pexels-photo-414551_300x250.jpg",
            title: 'Lorem ipsum dolor sit amet',
            date: 'Mar 5, 2016',
            url: '/',
            snippet: 'Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.'
        }
    ];

    $scope.product_title = "MAECENAS ODIO ANTE TINCIDUNT";

    $scope.product_description = $sce.trustAsHtml('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
        + 'Sed voluptate nihil eum consectetur similique? '
        + 'Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. '
        + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
        + 'Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. '
        + 'Odit, temporibus reprehenderit dolorum! '
        + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
        + 'Et, consequuntur, modi mollitia corporias ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? '
        + 'Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>');

    $scope.product_image = '../assets/stock-photos/pexels-photo-429248_600x400.jpg';

    $scope.service_title = "MAECENAS ODIO ANTE TINCIDUNT";

    $scope.service_description = $sce.trustAsHtml('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
        + 'Sed voluptate nihil eum consectetur similique? '
        + 'Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. '
        + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
        + 'Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. '
        + 'Odit, temporibus reprehenderit dolorum! '
        + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
        + 'Et, consequuntur, modi mollitia corporias ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? '
        + 'Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>');

    $scope.service_image = '../assets/stock-photos/pexels-photo-541525_600x400.jpg';

    $scope.trustSource = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
}
