// Define the generic `core services` module
angular
    .module('core.services', [

    ]);

angular
    .module('core.services')
    .factory('CommonService', CommonService);

CommonService.$inject = [
    '$sce',
    '$routeParams',
    '$translate'
];

function CommonService($sce, $routeParams, $translate) {
    return {
        sce: $sce,
        routeParams: $routeParams,
        translate: $translate
    };
}

