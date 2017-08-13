// Define the `home page` module
angular
    .module('hlHomePage', [
        'hlCompanyStatistics', // Company Statistics Component
        'hlTestimonialList', // Testimonial List Component
        'home.services'
    ]);
