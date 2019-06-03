jQuery(document).ready(function($) {
    new WOW().init();
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
            // ... more custom settings?
    });
    var SPMaskBehavior = function(val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        spOptions = {
            onKeyPress: function(val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };

    $('.phone').mask(SPMaskBehavior, spOptions);
    $('.slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        lazyLoad: true,
        navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]
    })
    $('.parallax').paroller({
        factor: 0.5, // multiplier for scrolling speed and offset
        factorXs: 0.1, // multiplier for scrolling speed and offset
        type: 'background', // background, foreground
        direction: 'vertical', // vertical, horizontal
        transition: 'transform 0.2s ease-in' // CSS transition
    });
    $('.parallax-gallery').paroller({
        factor: 0.1,
        factorXs: 0,
        type: 'foreground',
        direction: 'vertical',
        transition: 'transform 0.2s ease-in'
    });
});