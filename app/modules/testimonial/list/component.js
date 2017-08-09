// Register `hlTestimonialList` component, along with its associated controller and template
angular
    .module('hlTestimonialList')
    .component('hlTestimonialList', TestimonialListComponent());

function TestimonialListComponent() {
    return {
        templateUrl: 'modules/testimonial/list/template.html',
        controller: 'TestimonialListController'
    };
}
