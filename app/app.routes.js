// Configure our routes
angular
    .module('exampleApp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$translateProvider',
    function config($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {

        // Route for the home page
        var baseState = {
            name: 'base',
            url: '/',
            component: 'hlHomePage',
            data : { pageTitle: 'Example - Home' }
        };

        // Route for the about page
        var aboutState = {
            name: 'about',
            url: '/about',
            component: 'hlAboutPage',
            data : { pageTitle: 'Example - About Us' }
        };

        // Route for the contact page
        var contactState = {
            name: 'contact',
            url: '/contact',
            component: 'hlContactPage',
            data : { pageTitle: 'Example - Contact' }
        };

        // Route for the career page
        var careersState = {
            name: 'careers',
            url: '/careers',
            component: 'hlCareerPage',
            data : { pageTitle: 'Example - Careers' }
        };

        // Route for the job details page
        var careerDetailState = {
            name: 'job-posting',
            url: '/careers/jobs/{jobSlug}',
            component: 'hlJobDetail',
            data : { pageTitle: 'Example - Careers - Job Details' }
        };

        // Route for the products & services page
        var productsState = {
            name: 'products',
            url: '/products',
            component: 'hlProductsPage',
            data : { pageTitle: 'Home' }
        };

        // Route for the product details page
        var productDetailState = {
            name: 'product',
            url: '/products/{productSlug}',
            component: 'hlProductDetail',
            data : { pageTitle: 'Example - Products - Product Details' }
        };

        $stateProvider.state(baseState);
        $stateProvider.state(productsState);
        $stateProvider.state(productDetailState);
        $stateProvider.state(aboutState);
        $stateProvider.state(careersState);
        $stateProvider.state(careerDetailState);
        $stateProvider.state(contactState);

        // Route for the terms & conditions page
        var termsState = {
            name: 'terms-conditions',
            url: '/terms-conditions',
            component: 'hlTermsPage',
            data : { pageTitle: 'Example - Terms & Conditions' }
        };

        // Route for the privacy policy page
        var privacyState = {
            name: 'privacy-policy',
            url: '/privacy-policy',
            component: 'hlPrivacyPage',
            data : { pageTitle: 'Example - Privacy Policy' }
        };

        $stateProvider.state(termsState);
        $stateProvider.state(privacyState);

        // Route for the error page
        var errorState = {
            name: 'error',
            url: '/error',
            component: 'hlErrorPage',
            data : { pageTitle: 'Example - Error' }
        };

        $stateProvider.state(errorState);

        // Route for the example pages
        var exampleWizardState = {
            name: 'wizard-example',
            url: '/example/wizard',
            templateUrl: 'examples/wizard.template.html',
            controller: 'BasicPageController',
            data : { pageTitle: 'Example - Wizard' }
        };

        var examplePricingState = {
            name: 'pricing-example',
            url: '/example/pricing',
            templateUrl: 'examples/pricing.template.html',
            controller: 'BasicPageController',
            data : { pageTitle: 'Example - Pricing Table' }
        };

        var exampleBlogState = {
            name: 'blog-example',
            url: '/example/blog',
            templateUrl: 'examples/blog.template.html',
            controller: 'BasicPageController',
            data : { pageTitle: 'Example - Blog' }
        };

        $stateProvider.state(exampleWizardState);
        $stateProvider.state(examplePricingState);
        $stateProvider.state(exampleBlogState);

        $urlRouterProvider.otherwise('error');

        // Set up the localizations
        $translateProvider.fallbackLanguage('en');
        $translateProvider.registerAvailableLanguageKeys(['en'], {
            'en_*': 'en'
        });

        $translateProvider.useStaticFilesLoader({
            prefix: '../assets/lang/locale-',
            suffix: '.json'
        });

        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.preferredLanguage('en');

        // TODO: Remove the hash and exclamation mark from URLs
        //$locationProvider.hashPrefix('');
        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requireBase: false
        //});
    }
]);

// Set the HTML title of the page based on the routing
angular
    .module('exampleApp')
    .run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);

// Register `basic page` component, along with its associated controller
angular
    .module('exampleApp')
    .controller('BasicPageController', function($scope, $sce, $route, $translate) {

});
