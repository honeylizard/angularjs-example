angular
    .module('hlTeamItem')
    .controller('TeamItemController', TeamItemController);

TeamItemController.$inject = [
    '$sce',
    '$translate'
];

function TeamItemController($sce, $translate) {
    this.$onInit = function() {
        if (this.employeeData) {
            var employee = JSON.parse(this.employeeData);

            if (employee) {
                this.photo = employee.photo;
                this.name = employee.name;
                this.jobTitle = employee.title;
                this.description = $sce.trustAsHtml(employee.description);
                this.socialMedia = employee.socialMedia;
            }
        }
    };
}
