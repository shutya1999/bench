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

    $('#btn').on('click', function () {
    //
    //     let priceString = [];
    //     $('.price span').each(function () {
    //         let test = $(this).text();
    //         priceString.push(test);
    //     });
    //
    //     let priceNumber = [];
    //     for (let i=0; i<priceString.length; i++){
    //         priceNumber.push(Number(priceString[i]));
    //     }
    //     let test1 = priceNumber.sort();
    //     let test2 = priceNumber.reverse();
    //     // console.log(test2);
    //
    //     let typeSort = ($('#sort').val());
    //     if (typeSort == 'low-hight'){
    //         alert('Зростання');
    //
    //     }if (typeSort == 'hight-low'){
    //         alert('Спадання');
    //     }
    //
    //     for (let i=0; i<priceString.length; i++){
    //
    //     }
    //
    //     let items = $('#good .cart-product');
    //     let arItems = $.makeArray(items);
    //     console.log(arItems);
    //     arItems .sort(function(a, b) {
    //         return $(a).data("sort") - $(b).data("sort")
    //     });
    //     $(arItems).appendTo("#list");
    })



});

window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
};

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






