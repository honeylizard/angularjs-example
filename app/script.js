//Set the carousel options
$('#quote-carousel').carousel({
    pause: true,
    interval: 4000
});

//Set the Prev/Next Step buttons for Wizard
function nextWizardStep() {
    console.log('Next was clicked!');
    var $active = $('.wizard .wizard-nav-row li.active');
    $active.next().removeClass('disabled');
    $active.next().find('a[data-toggle="tab"]').click();
}
function prevWizardStep() {
    console.log('Prev was clicked!');
    var $active = $('.wizard .wizard-nav-row li.active');
    $active.prev().find('a[data-toggle="tab"]').click();
}
