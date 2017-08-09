angular
    .module('hlCompanyItem')
    .controller('CompanyItemController', CompanyItemController);

CompanyItemController.$inject = [
    '$translate'
];

function CompanyItemController($translate) {
    this.$onInit = function() {
        if (this.companyLogo) {
            this.logo = this.companyLogo;
        }

        if (this.companyName) {
            this.name = this.companyName;
        }
    };
}
