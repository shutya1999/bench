"use strict";

$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger,.nav').toggleClass('active');
        $('body').toggleClass('lock');
        $('.main,.logo').toggleClass('blur');

    });

    $(function() {
        $('.nav-menu [href]').each(function() {
            if (this.href === window.location.href) {
                $(this).addClass('active-menu');
            }
        });
    });

});

window.onload = function () {
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
};
