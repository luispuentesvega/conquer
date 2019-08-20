const imgTop = document.querySelector('#img-top');
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        imgTop.style.bottom = '5rem';
    } else {
        imgTop.style.bottom = '1rem';
    }
};


imgTop.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

const menuBurger = document.querySelector('.menu-burger');
const mobileNav = document.querySelector('.mobile-nav');
 
menuBurger.addEventListener('click', function () {
    openCloseMenu();
   });

mobileNav.addEventListener('onclick', function() {
    openCloseMenu();
});

var menuOptions = document.querySelectorAll('.mobile-nav__item a');
for (var i = 0; i < menuOptions.length; i++) {
    menuOptions[i].addEventListener('click', function() {
       openCloseMenu();
    });
}

function openCloseMenu() {
     if (mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
    } else {
        mobileNav.classList.add('open');
    }
}