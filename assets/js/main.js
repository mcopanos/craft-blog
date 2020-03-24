const hambugerMenu = document.querySelector('#js-mobile-nav');
const mobileNav = document.querySelector('.collapse');

function openMenu() {
   mobileNav.classList.toggle('collapse');
}

hambugerMenu.addEventListener('click', openMenu);

