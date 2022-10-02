import { products } from "./products.js";
/* Handles */

const arrowMenu = document.querySelector(".navbar-arrow");
const handleMenu = document.querySelector(".menu-navbar");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const modalSection = document.querySelector(".darken");
const shoppingArrow = document.querySelector(".shopping-arrow");
const cardsContainer = document.querySelector(".cards-container");
const closeProductDetail = document.querySelector(".product-detail-close");

/*  Inactives class */

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".menu-mobile ");
const shoppingCartContainer = document.querySelector(".shopping");
const productDetailContainer = document.querySelector(".product-detail");


const toggleMenu = () => {
    desktopMenu.classList.toggle("inactive");
    const isMenuOpen = desktopMenu.classList.contains("inactive");

    if (!isMenuOpen) {
        modalSection.classList.remove("inactive");
        shoppingCartContainer.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
    } else {
        modalSection.classList.add("inactive");
    }
};

const toggleMenuMobile = () => {
    mobileMenu.classList.toggle("inactive");
    const isMobileMenu = mobileMenu.classList.contains("inactive");

    if (!isMobileMenu) {
        shoppingCartContainer.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
        modalSection.classList.remove("inactive");
    } else {
        modalSection.classList.add("inactive");
    }
};

function toggleCarritoAside() {
    shoppingCartContainer.classList.toggle("inactive");
    const isShoppingClosed =
        shoppingCartContainer.classList.contains("inactive");

    if (!isShoppingClosed) {
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
        modalSection.classList.remove("inactive");
    } else {
        modalSection.classList.add("inactive");
    }
}

function toggleProductDetail() {
    productDetailContainer.classList.toggle("inactive");
    const isProductClosed =
        productDetailContainer.classList.contains("inactive");

    if (!isProductClosed) {
        modalSection.classList.remove("inactive");
    } else {
        modalSection.classList.add("inactive");
    }
}

function closeAllMenus() {
    /* Tener en cuenta el scope */
    const isSectionClosed =
        shoppingCartContainer.classList.contains("inactive");
    const isMenuMobileClosed = mobileMenu.classList.contains("inactive");
    const isProductClosed =
        productDetailContainer.classList.contains("inactive");

    if (!desktopMenu.classList.contains("inactive")) {
        desktopMenu.classList.add("inactive");
    }
    if (!isSectionClosed) {
        shoppingCartContainer.classList.add("inactive");
    }
    if (!isMenuMobileClosed) {
        mobileMenu.classList.add("inactive");
    }
    if (!isProductClosed) {
        productDetailContainer.classList.add("inactive");
    }

    modalSection.classList.toggle("inactive");
}

function productCard(name, src, price) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const productImg = document.createElement("img");
    productImg.setAttribute("alt", name);
    productImg.setAttribute("src", src);
    productImg.classList.add("product-img");
    productImg.addEventListener("click", toggleProductDetail);
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = `$ ${price}`;
    const productName = document.createElement("p");
    productName.innerText = name;
    productInfoDiv.append(productPrice, productName);
    const productFigure = document.createElement("figure");
    const productIcon = document.createElement("img");
    productIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productIcon.setAttribute("alt", "cart icon");
    productFigure.appendChild(productIcon);
    productInfo.append(productInfoDiv, productFigure);
    productCard.append(productImg, productInfo);

    return productCard;
}

const paintProducts = [];

products.map(({ name, src, price }) => {
    paintProducts.push(productCard(name, src, price));
});

cardsContainer.append(...paintProducts);

arrowMenu.addEventListener("click", toggleMenu);
handleMenu.addEventListener("click", toggleMenuMobile);
shoppingCart.addEventListener("click", toggleCarritoAside);
shoppingArrow.addEventListener("click", toggleCarritoAside);
closeProductDetail.addEventListener("click", toggleProductDetail);
modalSection.addEventListener("click", closeAllMenus);

const body = document.getElementsByTagName("body")[0];

// Initialize resize observer object
let resizeObserver = new ResizeObserver(() => {
    const isMobileMenu = mobileMenu.classList.contains("inactive");

    if( window.innerWidth >= 851 &&  !isMobileMenu){
        mobileMenu.classList.add('inactive');
        modalSection.classList.add('inactive');
    }
});

// Add a listener to body
resizeObserver.observe(body);
