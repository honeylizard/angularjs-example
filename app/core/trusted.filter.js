angular
    .module('exampleApp')
    .filter('trusted', TrustedSourceFilter);

TrustedSourceFilter.$inject = [
    '$sce'
];

function TrustedSourceFilter($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}
