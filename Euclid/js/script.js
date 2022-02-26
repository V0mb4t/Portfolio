document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    a11y: {
      paginationBulletMessage: "перейти к слайду {{index}}",
    },
  });

  document.querySelectorAll(".tabs__btn").forEach(function (whatWeDoUlBtn) {
    whatWeDoUlBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;

      document
        .querySelectorAll(".what-we-do__main-content")
        .forEach(function (whatWeDoMainContent) {
          whatWeDoMainContent.classList.remove(
            "what-we-do__main-content--active"
          );
        });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("what-we-do__main-content--active");
    });
  });

  $(".accordion").accordion({
    heightStyle: "content",
    header: "> .accordion-item > .accordion-header",
    collapsible: true,
    active: false,
    heightStyle: "content",
  });

  let menuBtn = document.querySelector(".burger-button");
  let menu = document.querySelector(".menu");
  let container = document.querySelector(".container-slider");

  menuBtn.addEventListener("click", function () {
    document.body.classList.toggle("lock");
    menuBtn.classList.toggle("burger-button--active");
    menu.classList.toggle("menu--active");
    container.classList.add("container--active");
  });

  menu.addEventListener("click", function () {
    menu.classList.remove("menu--active");
    document.body.classList.remove("lock");
    menuBtn.classList.remove("burger-button--active");
  });

  let searchBtn = document.querySelector(".search-button");
  let search = document.querySelector(".search");
  let closeBtn = document.querySelector(".close-button");
  let nav = document.querySelector(".navigation");

  searchBtn.addEventListener("click", function () {
    search.classList.add("search--active");
    searchBtn.classList.add("search-button--active");
    nav.classList.add("navigation--active");
  });

  closeBtn.addEventListener("click", function () {
    search.classList.remove("search--active");
    searchBtn.classList.remove("search-button--active");
    nav.classList.remove("navigation--active");
  });
});

let checkBox = document.querySelector(".visually-hidden");
let offer = document.querySelector(".check-span");

checkBox.addEventListener("focus", function () {
  offer.classList.add("check-span--focus");
});

checkBox.addEventListener("blur", function () {
  offer.classList.remove("check-span--focus");
});
