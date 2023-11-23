var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 34,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 44,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 44,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 44,
    },
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 34,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 44,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 44,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 44,
    },
  },
});

const btn = document.getElementById("btn");
const side = document.getElementById("side");
btn.addEventListener("click", () => {
  if (side.style.left === "-105%") {
    side.style.left = "0";
  } else {
    side.style.left = "-105%";
  }
});
