"use strict";

module.exports = (($) => {
    return {
        addActiveClass() {
            // Location hash ('#/authors', '#/about', '#/').
            const location = window.location.hash;

            $('#js-navMenu').find('ul.nav>li').each((index, listItem) => {
                const $listItem = $(listItem);
                const $anchor = $listItem.find('>a');

                if ($anchor.attr('href') === '#/' && location !== '#/') {
                    // Not the home page.
                    $listItem.removeClass('active');
                    return;
                }

                if (location.startsWith($anchor.attr('href'))) {
                    $listItem.addClass('active');
                } else {
                    $listItem.removeClass('active');
                }
            });
        }
    };
})(jQuery);
