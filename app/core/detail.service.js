// Define the generic `detail services` module
angular
    .module('detail.services', [

    ]);

angular
    .module('detail.services')
    .factory('DetailCommonService', DetailCommonService);

DetailCommonService.$inject = [
    '$state',
    '$stateParams'
];

function DetailCommonService($state, $stateParams) {
    return {
        state: $state,
        stateParams: $stateParams
    };
}
