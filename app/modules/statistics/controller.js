angular
    .module('hlCompanyStatistics')
    .controller('CompanyStatisticsController', CompanyStatisticsController);

CompanyStatisticsController.$inject = [
    '$translate',
    'CompanyStatisticsService'
];

function CompanyStatisticsController($translate, CompanyStatisticsService) {
    this.statistics = CompanyStatisticsService.query();
}
