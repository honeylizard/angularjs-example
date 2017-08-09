angular
    .module('hlTestimonialList')
    .controller('TestimonialListController', TestimonialListController);

TestimonialListController.$inject = [
    '$translate',
    'TestimonialsService'
];

function TestimonialListController($translate, TestimonialsService) {
    this.testimonials = TestimonialsService.query();
}
