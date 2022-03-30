import * as flsFunctions from "./modules/functions.js";
import $ from "jquery";
import "slick-carousel";


flsFunctions.isWebp();


//Открытие и закрытие кнопки меню,блокировка скрола содержимого
const burger = document.querySelector('.header__burger');

document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__nav-block').classList.toggle('nav-block__open');
    document.querySelector('.body').classList.toggle('lock');
    if (burger.classList.contains('header__burger')) {
        burger.classList.remove('header__burger');
        burger.classList.toggle('open-burger');
    } else if (burger.classList.contains('open-burger')) {
        burger.classList.remove('open-burger');
        burger.classList.toggle('header__burger');
    }
});



//Блок Product выбор меню расстений

/*Объявляем в константы ссылки из списка продуктов*/ 
const linkItem = document.querySelector('.product__link-item');
const linkListPlants = document.querySelector('.product__link-list-plants');
const linkArriwals = document.querySelector('.product__link-arriwals');
const linkSale = document.querySelector('.product__link-sale');

/*Объявляем в константы пункты списка(карточки)*/
const listPlants = document.querySelectorAll('.list-plants__item');
const arriwals = document.querySelectorAll('.arriwals__item');
const sale = document.querySelectorAll('.sale__item');


/*При клике навешиваем на ссылки класс *-seklected(добавляет зеленый цвет)*/ 

linkArriwals.addEventListener('click', function () {
    linkArriwals.classList.add('product__link-item-selected');
    linkListPlants.classList.remove('product__link-item-selected');
    linkSale.classList.remove('product__link-item-selected');
});

linkSale.addEventListener('click', function () {
    linkSale.classList.add('product__link-item-selected');
    linkListPlants.classList.remove('product__link-item-selected');
    linkArriwals.classList.remove('product__link-item-selected');
});

linkListPlants.addEventListener('click', function () {
    linkListPlants.classList.add('product__link-item-selected');
    linkArriwals.classList.remove('product__link-item-selected');
    linkSale.classList.remove('product__link-item-selected');
});

/*При клике находим у ссылоки класс *-selected, и навешиваем нужному списку активный класс*/

//Список растений
linkListPlants.addEventListener('click', function () {
    if (linkListPlants.classList.contains('product__link-item-selected')) {
        for (let plants of listPlants) {
            plants.classList.add('product-active');
        }
        for (let ariwalItem of arriwals) {
            ariwalItem.classList.remove('product-active');
        }
        for (let saleItem of sale) {
            saleItem.classList.remove('product-active');
        }
    } else {
        for (let plants of listPlants) {
            plants.classList.remove('product-active');
        }
    }
});

//Список новых поступлений
linkArriwals.addEventListener('click', function () {
    if (linkArriwals.classList.contains('product__link-item-selected')) {
        for (let ariwalItem of arriwals) {
            ariwalItem.classList.add('product-active');
        }
        for (let plants of listPlants) {
            plants.classList.remove('product-active');
        }
        for (let saleItem of sale) {
            saleItem.classList.remove('product-active');
        }
    } else {
        for (let ariwalItem of arriwals) {
            ariwalItem.classList.remove('product-active');
        }
    }
});

//Список скидок
linkSale.addEventListener('click', function () {
    if(linkSale.classList.contains('product__link-item-selected')) {
        for (let saleItem of sale) {
            saleItem.classList.add('product-active');
        }
        for (let plants of listPlants) {
            plants.classList.remove('product-active');
        }
        for (let ariwalItem of arriwals) {
            ariwalItem.classList.remove('product-active');
        }
    } else {
        for (let saleItem of sale) {
            saleItem.classList.remove('product-active');
        }
    }
});

//Слайдер отзывов
    $('.slider').slick({
    arrow: true,
    dots: false,
    prevArrow: '<button type="button" class="arrow-block__arrow arrow-prew"></button>',
    nextArrow: '<button type="button" class="arrow-block__arrow arrow-next"></button>'
});
