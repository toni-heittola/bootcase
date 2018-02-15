(function($) {
    "use strict";

    $(document).ready(function() {
        var timeagoInstance = timeago();
        var nodes = document.querySelectorAll('.article-datetime');
        // use render method to render nodes in real time
        timeagoInstance.render(nodes);
        // cancel real-time render for every node
        timeago.cancel()
    });
})(jQuery);