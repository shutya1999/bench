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

    $('.filter').change(function() {
        const values = $('input:checked', this).get().map(n => n.dataset.filter);
        // console.log(values);
        $('.cart-product').each((i, n) => $(n).toggle(!values.length || values.includes(n.dataset.category)));
    }).change();


});

window.onload = function () {
    // let preloader = document.getElementById('preloader');
    // preloader.style.display = 'none';


    let pathname = window.location.pathname;
    let title = pathname.split(/[/.html]+/)[1];
    document.title = title.charAt(0).toUpperCase() + title.substr(1);


    document.querySelector('#btn').onclick = typeSort;

    function typeSort() {
        let typeSort = document.querySelector('#sort-price').value;

        if (typeSort === 'up'){
            mySortUp();
        } else {
            mySortDown();
        }
    }

    function mySortUp() {
        let sort = document.querySelector('#good');
        // console.log(sort);

        for (let i = 0; i < sort.children.length; i++){
            for (let j = i; j < sort.children.length; j++){
                if (+sort.children[i].getAttribute('data-price') > +sort.children[j].getAttribute('data-price')){
                    let replaceNode = sort.replaceChild(sort.children[j], sort.children[i]);
                    insertAfter(replaceNode, sort.children[i]);
                }
            }
        }
    }

    function mySortDown() {
        let sort = document.querySelector('#good');
        // console.log(sort);

        for (let i = 0; i < sort.children.length; i++){
            for (let j = i; j < sort.children.length; j++){
                if (+sort.children[i].getAttribute('data-price') < +sort.children[j].getAttribute('data-price')){
                    let replaceNode = sort.replaceChild(sort.children[j], sort.children[i]);
                    insertAfter(replaceNode, sort.children[i]);
                }
            }
        }
    }

    function insertAfter(elem, refElem) {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }
};





