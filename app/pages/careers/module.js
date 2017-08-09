// Define the `career page` module
angular
    .module('hlCareerPage', [
        'hlJobList', // Jobs List Component
        'hlJobDetail' // Job Details Component - Accessed via link in list
    ]);
