(function($) {
    "use strict";

    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $(document).on('click', 'a.page-scroll-top', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    var navHeight = $('.navbar').outerHeight(true) + 10
    if ( $('#page-navbar').length) {
        $('body').scrollspy({
          offset: navHeight
        });
    }

    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip({container: 'body'});

        // Add nested dropdown menus
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent().addClass('open');
            $(this).parent().find("ul").parent().find("li.dropdown").addClass('open');
        });
    });

})(jQuery);