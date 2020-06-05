"use strict";

$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger,.nav').toggleClass('active');
        $('body').toggleClass('lock');
        $('.main,.logo').toggleClass('blur');

    });

    $(function () {
        $('.nav-menu [href]').each(function () {
            if (this.href === window.location.href) {
                $(this).addClass('active-menu');
            }
        });
    });

    // $('#btn').on('click', function () {
        $('.filter').change(function() {
            const values = $('input:checked', this).get().map(n => n.dataset.filter);
            // console.log(values);
            $('.cart-product').each((i, n) => $(n).toggle(!values.length || values.includes(n.dataset.category)));
        }).change();
    // })

});

window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
};




