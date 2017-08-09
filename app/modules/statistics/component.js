// Register `hlCompanyStatistics` component, along with its associated controller and template
angular
    .module('hlCompanyStatistics')
    .component('hlCompanyStatistics', CompanyStatisticsComponent());

function CompanyStatisticsComponent() {
    return {
        templateUrl: 'modules/statistics/template.html',
            controller: 'CompanyStatisticsController'
    };
}
