// Register `hlCompanyItem` component, along with its associated controller and template
angular
    .module('hlCompanyItem')
    .component('hlCompanyItem', CompanyItemComponent());

// The component takes in the following parameters:
// * company-logo - Populates the image source for the company logo
// * company-name - Populates the alternative attribute for the company logo for Web Accessibility purposes.
function CompanyItemComponent() {
    return {
        templateUrl: 'modules/company/item/template.html',
        controller: 'CompanyItemController',
        bindings: {
            companyLogo: '<',
            companyName: '<'
        }
    };
}
