# Plant shop landing page
## :open_file_folder: Проект: 
Лэндинг магазина расстений Plant
## :computer: Технологии: 
**HTML5, SCSS, JS**
## :package: Сборка: 
<img src="https://github.com/Viktoria-W/plant/blob/main/src/files/gulp-min.png" width="20px" alt="Gulp">Gulp


Файлы исходники находятся на основной ветке *main*, 
дополнительная ветка *page-git* содержит в себе конечные файлы папки *dist/* 
и опубликованный сайт через Git Page.
Ссылка на готовый проект: https://viktoria-w.github.io/plant/
## :star: Особенности: 
* Разметка страницы сделана с использованием display:grid и display:flex.
* Шрифты подключенны локально.
* Папка dist/ не находится на главной ветке, посредством включения ее в файл .gitignore.
* SCSS файлы разбиты на блоки, и импортированы в общий файл *style.scss*.
* Подключена библиотека SLIC-SLIDER(работает слайдер отзывов).
* Меню ассортимента продуктов переключается между собой по клику на элемент списка ссылок, посредством функций JS.
Функция проверяет наличие у ссылки класса .product__link-item-selected, и добавляет выбранному списку класс .product-active,
удаляя у других списков этот класс. Связывая между собой определенную ссылку и определенный список товаров.
**Пример кода(списка растений):**  
```
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

```
* Сайт адаптивен, основные используемые точки вьюпорта: 
  * laptop: 1024px;
  * laptop-m: 1280px;
  * tablet: 768px;
  * mobile-l: 425px;
  * mobile-m: 375px;
  * mobile-s: 320px;
* Максимальная ширина страницы: 1440px;
* Тестировался с помощью сайта iloveadaptive.com 
<img src="https://github.com/Viktoria-W/plant/blob/main/src/files/adaptive-min.jpg" width="850px" alt="Адаптивность сайта">

* Проверка на PageSpeed Insights:
<img src="https://github.com/Viktoria-W/plant/blob/main/src/files/speed.jpg" width="850px" alt="Скорость сайта">

* Архитектура исходных файлов проекта:
![alt text](https://github.com/Viktoria-W/plant/blob/main/src/files/dependencies-min.jpg "Архитектура исходных файлов")

***
## :open_file_folder: Project: 
Plant shop landing page
## :computer: Technologies: 
**HTML5, SCSS, JS**
## :package: Assembly: 
<img src="https://github.com/Viktoria-W/plant/blob/main/src/files/gulp-min.png" width="20px" alt="Gulp">Gulp

The source files are on the *main* branch,
additional branch *page-git* contains the final files of the *dist/* folder
and published site via Git Page.
Link: https://viktoria-w.github.io/plant/
## :star: Peculiarities: 
* The page layout is done using display:grid and display:flex.
* The fonts are connected locally.
* The dist/ folder is not on the master branch by including it in the .gitignore file.
* SCSS files are divided into blocks and imported into a common *style.scss* file.
* The SLICK-SLIDER library is connected (the review slider works).
* The product assortment menu is switched between each other by clicking on the link list item, using JS functions.
The function checks if the link has the .product__link-item-selected class, and adds the .product-active class to the selected list,
removing this class from other lists. Linking a specific link and a specific list of products.
**Example of code (list of plants):**
```
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

```
* The site is responsive, the main viewport points used:
  * laptop: 1024px;
  * laptop-m: 1280px;
  * tablet: 768px;
  * mobile-l: 425px;
  * mobile-m: 375px;
  * mobile-s: 320px;
* Maximum page width: 1440px;
* Tested with iloveadaptive.com:
<img src="https://github.com/Viktoria-W/plant/blob/main/src/files/adaptive-min.jpg" width="850px" alt="Адаптивность сайта">

* Checking for PageSpeed Insights:
<img src="https://github.com/Viktoria-W/plant/blob/main/src/files/speed.jpg" width="850px" alt="Скорость сайта">

* Architecture of project source files:
![alt text](https://github.com/Viktoria-W/plant/blob/main/src/files/dependencies-min.jpg "Архитектура исходных файлов")
