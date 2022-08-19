/* Handles */

const arrowMenu = document.querySelector(".navbar-arrow");
const handleMenu = document.querySelector(".menu-navbar");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const mainSection = document.querySelector(".main")
const shoppingArrow = document.querySelector(".shopping-arrow");

/*  Inactives class */

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".menu-mobile ");
const shoppingSection = document.querySelector(".product-detail");

/* Valid is Open*/

const toggleMenu = () => {
    shoppingSection.classList.add('inactive')
    desktopMenu.classList.toggle("inactive");
};

const toggleMenuMobile = () => {
    mobileMenu.classList.toggle("inactive");
    shoppingSection.classList.add('inactive')
};

function toggleCarritoAside() {
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    shoppingSection.classList.toggle("inactive");
}

function closeAllMenus(){
    /* Tener en cuenta el scope */
    const isSectionOpen =  shoppingSection.classList.contains('inactive');

    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add("inactive");
    }
    if(!isSectionOpen){
        shoppingSection.classList.add('inactive')
    }
}

arrowMenu.addEventListener("click", toggleMenu);
handleMenu.addEventListener("click", toggleMenuMobile);
shoppingCart.addEventListener("click", toggleCarritoAside);
shoppingArrow.addEventListener("click", toggleCarritoAside);
mainSection.addEventListener("click", closeAllMenus);
