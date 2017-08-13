// Define the `hlJobDetail` module
angular
    .module('hlJobDetail', [
        'ngRoute',
        'job.services', // Job Service
        'core.services',
        'detail.services'
    ]);
