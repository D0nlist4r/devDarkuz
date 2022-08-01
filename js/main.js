const navEmail = document.querySelector('.nav-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamburgesa = document.querySelector('.menu');
const movileMenu = document.querySelector('.mobile-menu');

const Carrito = document.querySelector('.img-shopping');
const Myordercard = document.querySelector('.container-order');


function openmenu(){

    const isOrderCardOpen = Myordercard.classList.contains('inactive');

    if (!isOrderCardOpen){
        Myordercard.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function openMenuMobile(){
    const isOrderCardOpen = Myordercard.classList.contains('inactive');
    if (!isOrderCardOpen){
        Myordercard.classList.add('inactive');
    }

    movileMenu.classList.toggle('inactive');
}

function OpenOrder(){
    const isOrderCardOpen = movileMenu.classList.contains('inactive');
    const isOrderCardOpen2 = desktopMenu.classList.contains('inactive');
    
    if (!isOrderCardOpen){
        movileMenu.classList.add('inactive');
    }else  if(!isOrderCardOpen2){
        desktopMenu.classList.add('inactive');
    }

    Myordercard.classList.toggle('inactive');
}

Carrito.addEventListener('click',OpenOrder);
navEmail.addEventListener('click',openmenu);
menuHamburgesa.addEventListener('click',openMenuMobile);

const Products = [];
Products.push({nombre:'Bike',costo:200,imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'});
Products.push({nombre:'Gorra',costo:30,imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'});
Products.push({nombre:'Bike',costo:200,imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'});

function arrayProduct(arr){
for (product of arr){

    const divCardcontainer = document.querySelector('.card-container');
    
    const divProductcontainer = document.createElement('div');
    divProductcontainer.classList.add('product-container');

    const imagencard = document.createElement('img');
    imagencard.setAttribute('src',product.imagen);

    const divProductInfo = document.createElement('div');
    divProductInfo.classList.add('product-info');

    const divcontainerElement = document.createElement('div');

    const p_nombre = document.createElement('p');
    p_nombre.innerText = product.nombre;

    const p_costo = document.createElement('p');
    p_costo.innerText = '$' + product.costo;

    const divcontainerelement2 = document.createElement('div');

    const figure = document.createElement('figure');

    const imagecard = document.createElement('img');
    imagecard.setAttribute('src','https://raw.githubusercontent.com/platzi/curso-frontend-developer-practico/4774124de4c723d46d6a22da4c93c03f7be9e7bd/icons/bt_add_to_cart.svg');

    figure.appendChild(imagecard);
    divcontainerelement2.appendChild(figure);

    divcontainerElement.appendChild(p_nombre);
    divcontainerElement.appendChild(p_costo);
    divProductInfo.appendChild(divcontainerElement);
    divProductInfo.appendChild(divcontainerelement2);

    divProductcontainer.appendChild(imagencard);
    divProductcontainer.appendChild(divProductInfo);

    divCardcontainer.appendChild(divProductcontainer);
}
}
arrayProduct(Products);
