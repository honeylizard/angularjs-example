angular
    .module('hlCompanyList')
    .controller('CompanyListController', CompanyListController);

CompanyListController.$inject = [
    '$translate',
    'CustomersService',
    'PartnersService'
];

function CompanyListController($translate, CustomersService, PartnersService) {
    this.$onInit = function() {
        if (this.listType) {
            var companies = [];

            this.id = 'companies';
            this.itemClass = 'company';
            this.title = '';

            // Get the data based on the specific list type.
            if (this.listType === 'partners') {
                companies = PartnersService.query();

                this.id = 'partners';
                this.itemClass = 'partner';
                this.title = $translate.instant('OUR_PARTNERS');
            } else if (this.listType === 'customers') {
                companies = CustomersService.query();

                this.id = 'customers';
                this.itemClass = 'customer';
                this.title = $translate.instant('OUR_CUSTOMERS');
            }

            this.companies = companies;
        }
    };
}
