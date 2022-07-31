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