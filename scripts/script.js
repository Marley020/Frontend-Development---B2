// JavaScript Document
let hamburgerIcon = document.querySelector('.menuIcon');
let hamburgerNav = document.querySelector('header > nav:first-of-type');

let searchIcon = document.querySelector('.searchBar');
let searchField = document.querySelector('header > form');
let exitSearch = document.querySelector('header > form > img');

let shopIcon = document.querySelector('.shopCart');
let shopForm = document.querySelector('header > fieldset');
let exitBag = document.querySelector('header > fieldset > img');


hamburgerIcon.addEventListener('click', function() {
    hamburgerNav.classList.add('viewmenu');
});

hamburgerNav.addEventListener('click', function() {
    hamburgerNav.classList.remove('viewmenu');
});

searchIcon.addEventListener('click', function() {
    searchField.classList.add('viewsearch');
});

exitSearch.addEventListener('click', function() {
    searchField.classList.remove('viewsearch');
});

shopIcon.addEventListener('click', function() {
    shopForm.classList.add('viewbag');
});

exitBag.addEventListener('click', function() {
    shopForm.classList.remove('viewbag');
});
