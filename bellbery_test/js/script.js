
$( document ).ready(function() {
    $('.main-slider').slick();
    let brgBtn = document.querySelector('.burger-icon')
    let mobileMenu = document.querySelector('.header__menu')
    let deep1 = document.querySelectorAll('.menu__list-item-deep-1')
    let deep2Container = document.querySelectorAll('.submenu-container')
    let arrow = document.querySelectorAll('.arrow')


    for (let i = 0, length = deep2Container.length; i < length; i++) {
        deep2Container[i].parentNode.classList.add("arrow");
        }

        for (let i = 0, length = arrow.length; i < length; i++) {
            arrow[i].addEventListener('click', function() {
                deep2Container.classList.toggle('submenu-container--active')
            })
            }


    brgBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('header__menu--active')
        brgBtn.classList.toggle('burger-icon--close')
    })
});

