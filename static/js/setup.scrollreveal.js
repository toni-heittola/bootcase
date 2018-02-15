(function($) {
    "use strict";
    window.sr = new ScrollReveal();

    sr.reveal('.sr-header-overlay', {
        duration: 2000,
        delay: 0,
        opacity: 0.0,
        move: 0,
        scale: { direction: 'up', power: '100%' },
    });
    sr.reveal('.sr-header-text', {
        viewFactor: 0.9,
        duration: 700,
        delay: 0,
        origin: 'bottom',
        distance: '100px',
        scale: 1.0,
        opacity: 0,
    });

    sr.reveal('.sr-icons', {
        viewFactor: 0.2,
        delay: 200,
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);

    sr.reveal('.sr-button', {
        viewFactor: 0.9,
        duration: 1000,
        delay: 200
    });

    sr.reveal('.sr-contact', {
        viewFactor: 0.9,
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    sr.reveal('.sr-button-right', {
        viewFactor: 0.9,
        duration: 1000,
        delay: 200,
        origin: 'right',
        distance: '100px'
    });

    sr.reveal('.sr-photo', {
        viewFactor: 0.9,
        duration: 2000,
        delay: 500,
        opacity: 0,
        distance: '0px',
        scale: 1.0,
    });
    sr.reveal('.sr-fade-logo', {
        viewFactor: 0.9,
        duration: 2000,
        delay: 100,
        opacity: 0.0,
        distance: '0px',
        scale: 1.0,
    });
    sr.reveal('.sr-photo-left', {
        viewFactor: 0.9,
        duration: 2000,
        delay: 1000,
        origin: 'left',
        distance: '100px',
        scale: 1.0,
    });

    sr.reveal('.sr-left', {
        viewFactor: 0.9,
        duration: 1000,
        delay: 200,
        origin: 'left',
        distance: '100px',
        scale: 1.0,
    });

    sr.reveal('.sr-right', {
        viewFactor: 0.9,
        duration: 1000,
        delay: 200,
        origin: 'right',
        distance: '100px',
        scale: 1.0,
    });
})(jQuery);