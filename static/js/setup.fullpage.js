(function($) {
    "use strict";

    $(document).ready(function() {
        $('#fullpage').fullpage({
            paddingTop: '45px',
            //scrollOverflow: true,
            scrollBar: true,
            navigation: true,
            navigationPosition: 'right',
            fitToSectionDelay: 100,
            animateAnchor: true,
        });
    });
})(jQuery);