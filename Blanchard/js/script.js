let anchors = document.querySelectorAll('header a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth', block: 'start'
      })
    })
  }
}


var heroSlider = new Swiper('#hero-slider', {
  loop: true,

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 200,
    slideShadows : false,
  },
  fadeEffect: {
    crossfade: true
  },


  autoplay: {
    delay: 7800,
  }
});

const element = document.querySelector("#selectCustom");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  placeholder: false,
  placeholderValue: null,
  duplicateItemsAllowed: false,
});




document.querySelectorAll(".styles__content").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".dropdown-menu");

    document.querySelectorAll(".styles__content").forEach(el => {
      if (el != btn) {
        el.classList.remove("show");
        el.classList.add("hide");
      }
    });

    document.querySelectorAll(".dropdown-menu").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("dropdown-menu-active");
      }
    })
    dropdown.classList.toggle("dropdown-menu-active");
    btn.classList.toggle("show")
    btn.classList.toggle("hide")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".styles")) {
    document.querySelectorAll(".dropdown-menu").forEach(el => {
        el.classList.remove("dropdown-menu-active");
    })
     document.querySelectorAll(".styles__content").forEach(el => {
        el.classList.remove("show");
    });
  }
})

var gallerySlider = new Swiper('#gallery-slider', {
  // Optional parameters
  loop: false,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-gallery-button-next',
    prevEl: '.swiper-gallery-button-prev',
  },

  pagination: {
    el: '.swiper-gallery-pagination',
    type: 'fraction'
  },

  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,

  keyboard: {
    enabled: true,
  },

  grid: {
    rows: 2,
    fill: 'row',
  },

  breakpoints: {
    1: {
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
        fill: 'row',
      },
    },

    451: {
      loop: false,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      grid: {
        rows: 2,
        fill: 'row',
      },

    },
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },



});

let menuBtn = document.querySelector(".burger-button");
let popMenu = document.querySelector(".menu");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("burger-button--active");
  popMenu.classList.toggle("menu--open");
  popMenu.classList.toggle("menu--close");
  document.body.classList.toggle("lock")
});

popMenu.addEventListener("click", function () {
  popMenu.classList.remove("menu--open");
  popMenu.classList.add("menu--close");
  menuBtn.classList.remove("burger-button--active");
  document.body.classList.remove("lock")
});

let searchBtn = document.querySelector('.search__button')
let search = document.querySelector('.search-1024')
let input = document.querySelector('.search-1024__input')
let closeBtn = document.querySelector('.close-button')
const mediaQuery = window.matchMedia('(max-width: 768px)')

searchBtn.addEventListener('click', function(){
  search.classList.toggle('search-1024--active')
  input.classList.toggle('search-1024__input--active')
  closeBtn.classList.toggle('close-button--active')
})

closeBtn.addEventListener('click', function(){
  search.classList.remove('search-1024--active')
  input.classList.remove('search-1024__input--active')
  closeBtn.classList.remove('close-button--active')
})

const tabs = document.querySelector('.tabs');
const tabsBtn = document.querySelectorAll('.tabs__btn');
const tabsContent = document.querySelectorAll('.tabs-content');
const tabsPainter = document.querySelectorAll('.accordion__painter-list');
const painterLink = document.querySelectorAll('.accordion__painter-link');
const painter = document.querySelectorAll('.painter');

if (tabs) {
  tabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('tabs__btn')) {
      const tabsPath = e.target.dataset.tabsPath;
      tabsHandler(tabsPath);
    }
  })

  const tabsHandler = (path) => {
    tabsBtn.forEach(el => {el.classList.remove('tabs__btn-active')})
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__btn-active')

    tabsContent.forEach(el => {el.classList.remove('tabs-content-active')})
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs-content-active')
  }
}

// tabs painter

if (tabsPainter) {
  const tabsHandler = (tabLinks) => {
    tabLinks.forEach(el => {
      const path = el.dataset.tabsPath;
      el.addEventListener('click', (e) => {
        e.preventDefault();
        painterLink.forEach(el => {el.classList.remove('accordion__painter-link--active')});
        e.target.classList.add('accordion__painter-link--active');
        painter.forEach(el => {el.classList.remove('painter-content-active')});
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('painter-content-active');
      });
    });
  }

  tabsPainter.forEach(el => {
    const tabsLinks = el.querySelectorAll('.accordion__painter-link');
    tabsHandler(tabsLinks);
  });
}

/* document.body.addEventListener('click', function(){
  search.classList.remove('search-1024--active')
  input.classList.remove('search-1024__input--active')
  closeBtn.classList.remove('close-button--active')
}) */

/*
if (mediaQuery.matches) {

searchBtn.addEventListener('click', function(){
  search.classList.toggle('search-1024--active')
  input.classList.toggle('search-1024__input--active')
  closeBtn.classList.toggle('close-button--active')
})

closeBtn.addEventListener('click', function(){
  search.classList.remove('search-1024--active')
  input.classList.remove('search-1024__input--active')
  closeBtn.classList.remove('close-button--active')
})
} */

/* if (search.getAttribute('display:block').searchBtn.setAttribute('type', 'submit')) */


