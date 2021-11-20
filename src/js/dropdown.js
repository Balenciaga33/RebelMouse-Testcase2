/*==================== MOBILE MENU & SEARCH DROPDOWN ====================*/
const menuIcon = document.querySelector('.nav__bars');
const dropDownMenu = document.querySelector('.nav__dropdown');
const searchIcon = document.querySelector('.nav__search-icon');
const dropDownSearch = document.querySelector('.nav__search-dropdown');
menuIcon.addEventListener("click", function () {
    dropDownMenu.classList.toggle("visible");
    if (dropDownMenu.classList.contains('visible')) {
        dropDownSearch.classList.remove("visible");
    }
});

searchIcon.addEventListener("click", function () {
    dropDownSearch.classList.toggle("visible");
    if (dropDownSearch.classList.contains('visible')) {
        dropDownMenu.classList.remove("visible");
    }
});

    /*==================== DESKTOP MENU DROPDOWN ====================*/
    const menuDropdown = document.querySelector('.explore');
    const dropDownMenuDesktop = document.querySelector('.nav__dropdown-desktop');

    menuDropdown.addEventListener("click", function () {
    menuDropdown.classList.toggle("rotate");
    dropDownMenuDesktop.classList.toggle("visible");
});



