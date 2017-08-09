// Define the `services testimonial` module
angular
    .module('testimonial.services', [
        'ngResource'
    ]);

angular
    .module('testimonial.services')
    .factory('TestimonialsService', TestimonialsService);

TestimonialsService.$inject = [
    '$resource'
];

function TestimonialsService($resource) {
    return $resource('../assets/mock-data/testimonials.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}

