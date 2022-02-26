var upSwiper = new Swiper('.swiper-container.main__swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
/*   autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  }, */
});

/* var upSwiper = new Swiper('.swiper-container.offers__swiper', {

  loop: true,


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
}); */

var bottomSwiper = new Swiper('.swiper-container.pictures__swiper', {
  // Optional parameters
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

let menuBtn = document.querySelector(".burger-button");
let menu = document.querySelector(".menu");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("burger-button--active");
  menu.classList.toggle("menu--active");
  document.body.classList.toggle("lock");
});


menu.addEventListener("click", function () {
  menu.classList.remove("menu--active");
  menuBtn.classList.remove("burger-button--active");
  document.body.classList.remove("lock");
});
