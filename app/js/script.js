"use strict";

$(function() {
    $('.nav-menu [href]').each(function() {
        if (this.href === window.location.href) {
            $(this).addClass('active');
        }
    });
});


