import {products} from './products.js'
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
    console.log(isSectionOpen)
    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add("inactive");
    }
    if(!isSectionOpen){
        console.log(isSectionOpen)
        shoppingSection.classList.add('inactive')
    }
}

arrowMenu.addEventListener("click", toggleMenu);
handleMenu.addEventListener("click", toggleMenuMobile);
shoppingCart.addEventListener("click", toggleCarritoAside);
shoppingArrow.addEventListener("click", toggleCarritoAside);
mainSection.addEventListener("click", closeAllMenus);

function productCard( 
    name,
    src,
    price

){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')
    const productImg = document.createElement('img');
    productImg.setAttribute('alt', name);
    productImg.setAttribute('src', src);
    productImg.classList.add('product-img');
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = `$ ${price}`
    const productName = document.createElement('p');
    productName.innerText = name;
    productInfoDiv.append(productPrice, productName);
    const productFigure = document.createElement('figure');
    const productIcon = document.createElement('img');
    productIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    productIcon.setAttribute('alt', 'cart icon');
    productFigure.appendChild(productIcon);
    productInfo.append(productInfoDiv, productFigure)
    productCard.append(productImg,productInfo)

    return productCard
}

const paintProducts = []

products.map(( { name, src, price}) => {
    paintProducts.push(productCard(name, src, price))
})

console.log(paintProducts)
const cardsContainer = document.querySelector('.cards-container');
cardsContainer.append(...paintProducts)