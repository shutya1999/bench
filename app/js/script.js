"use strict";

$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger,.nav').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $(function() {
        $('.nav-menu [href]').each(function() {
            if (this.href === window.location.href) {
                $(this).addClass('active-menu');
            }
        });
    });
});
