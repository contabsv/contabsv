var settings = {

    banner: {

        // Indicators (= the clickable dots at the bottom).
        indicators: true,

        // Transition speed (in ms)
        // For timing purposes only. It *must* match the transition speed of "#banner > article".
        speed: 1500,

        // Transition delay (in ms)
        delay: 5000,

        // Parallax intensity (between 0 and 1; higher = more intense, lower = less intense; 0 = off)
        parallax: 0.25

    }

};

(function($) {

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    /**
     * Aplica desplazamiento de paralaje a la imagen de fondo de un elemento.
     * @return {jQuery} jQuery object.
     */
    $.fn._parallax = (skel.vars.browser == 'ie' || skel.vars.mobile) ? function() { return $(this) } : function(intensity) {

        var $window = $(window),
            $this = $(this);

        if (this.length == 0 || intensity === 0)
            return $this;

        if (this.length > 1) {

            for (var i = 0; i < this.length; i++)
                $(this[i])._parallax(intensity);

            return $this;

        }

        if (!intensity)
            intensity = 0.25;

        $this.each(function() {

            var $t = $(this),
                on, off;

            on = function() {

                $t.css('background-position', 'center 100%, center 100%, center 0px');

                $window
                    .on('scroll._parallax', function() {

                        var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

                        $t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');

                    });

            };

            off = function() {

                $t
                    .css('background-position', '');

                $window
                    .off('scroll._parallax');

            };

            skel.on('change', function() {

                if (skel.breakpoint('medium').active)
                    (off)();
                else
                    (on)();

            });

        });

        $window
            .off('load._parallax resize._parallax')
            .on('load._parallax resize._parallax', function() {
                $window.trigger('scroll');
            });

        return $(this);

    };

    /**
     * Custom banner slider for Slate.
     * @return {jQuery} jQuery object.
     */
    $.fn._slider = function(options) {

        var $window = $(window),
            $this = $(this);

        if (this.length == 0)
            return $this;

        if (this.length > 1) {

            for (var i = 0; i < this.length; i++)
                $(this[i])._slider(options);

            return $this;

        }

        // Vars.
        var current = 0,
            slides = [],
            intervalId,
            i = 0;



        // Bucle principal.
        intervalId = window.setInterval(function() {

            current++;

            if (current >= slides.length)
                current = 0;

            $this._switchTo(current);

        }, options.delay);

    };

    $(function() {

        var $window = $(window),
            $body = $('body'),
            $header = $('#header'),
            $banner = $('.banner');

        // Deshabilitar animaciones/transiciones hasta que la página se haya cargado.
        $body.addClass('is-loading');

        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function() {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Banner.
        $banner._slider(settings.banner);

        // Menu.
        $('#menu')
            .append('<a href="#menu" class="close"></a>')
            .appendTo($body)
            .panel({
                delay: 500,
                hideOnClick: true,
                hideOnSwipe: true,
                resetScroll: true,
                resetForms: true,
                side: 'right'
            });

        // Header.
        if (skel.vars.IEVersion < 9)
            $header.removeClass('alt');

        if ($banner.length > 0 &&
            $header.hasClass('alt')) {

            $window.on('resize', function() { $window.trigger('scroll'); });

            $banner.scrollex({
                bottom: $header.outerHeight(),
                terminate: function() { $header.removeClass('alt'); },
                enter: function() { $header.addClass('alt'); },
                leave: function() {
                    $header.removeClass('alt');
                    $header.addClass('reveal');
                }
            });

        }

    });

})(jQuery);