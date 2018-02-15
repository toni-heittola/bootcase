(function($) {
    "use strict";

    $(document).ready(function() {
        audiojs.events.ready(function() {
            var ajso = audiojs.createAll();
             $('.audiojs .play-pause').on('click', function(){
                var thisIndex = $(this).parents('.audiojs').index('.audiojs');
                $.each(ajso, function(index,val){
                    if ( index != thisIndex && ajso[index].playing ) ajso[index].pause();
                });
            });
        });
    });
})(jQuery);