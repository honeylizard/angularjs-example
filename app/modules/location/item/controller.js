angular
    .module('hlLocationItem')
    .controller('LocationItemController', LocationItemController);

LocationItemController.$inject = [
    '$sce',
    '$translate'
];

function LocationItemController($sce, $translate) {
    this.$onInit = function() {
        if (this.contactData) {
            var location = JSON.parse(this.contactData);

            if (location) {
                this.googleMapUrl = $sce.trustAsResourceUrl(location.googleMapUrl);

                this.image = location.image;
                this.name = location.name;
                this.streetAddress = location.streetNumber + ' ' + location.street;
                this.cityStatePostCode = location.city + ' ' + location.state + ' ' + location.postCode;
                this.phone = location.phone;
                this.fax = location.fax;
                this.email = location.email;
                this.hours = location.hours;

                this.socialMedia = location.socialMedia;
            }
        }
    };
}
