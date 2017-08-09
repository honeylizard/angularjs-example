// Register `hlCompanyList` component, along with its associated controller and template
angular
    .module('hlCompanyList')
    .component('hlCompanyList', CompanyListComponent());

// The component takes in the following parameters:
// * list-type - Determines which service is executed (e.g. which list of companies does it use).
function CompanyListComponent() {
    return {
        templateUrl: 'modules/company/list/template.html',
        controller: 'CompanyListController',
        bindings: {
            listType: '@'
        }
    };
}
