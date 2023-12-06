// slider js
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

// locomotive scroll js
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("body"),
//   smooth: true,
// });
// sidebar js

const btn = document.getElementById("btn");
const side = document.getElementById("side");
btn.addEventListener("click", () => {
  if (side.style.left === "-105%") {
    side.style.left = "0";
  } else {
    side.style.left = "-105%";
  }
});
// gsap js
gsap.from("#mainimg", {
  y: 400,
  x: 300,
  duration: 2,
  scale: 0.5,
});

gsap.from("#our", {
  scrollTrigger: {
    trigger: "#ourmain",
    start: "top 90%",
    end: "botoom 30%",
    // markers: true,
    scrub: 1,
    scroller: "body",
  },
  x: -500,
  duration: 1,
  color: "red",
  scale: 0.5,
});
gsap.from("#team", {
  scrollTrigger: {
    trigger: "#team-main",
    start: "top 90%",
    end: "botoom 30%",

    // markers: true,
    scrub: 1,
    scroller: "body",
  },
  opacity: 0,
  x: -500,
  duration: 1,

  scale: 0.5,
});
gsap.from("#work", {
  scrollTrigger: {
    trigger: "#work-main",
    start: "top 90%",
    end: "botoom 30%",

    // markers: true,
    scrub: 1,
    scroller: "body",
  },

  duration: 1,

  scale: 0.2,
});
gsap.from("#every", {
  scrollTrigger: {
    trigger: "#every-main",
    start: "top 90%",
    end: "botoom 30%",

    // markers: true,
    scrub: 1,
    scroller: "body",
  },

  duration: 1,
  rotate: 360,
  scale: 0.2,
});
gsap.from("#getin", {
  scrollTrigger: {
    trigger: "#getin-main",
    start: "top 90%",
    end: "botoom 30%",

    // markers: true,
    scrub: 1,
    scroller: "body",
  },

  duration: 1,
  y: 500,
  x: -200,
  scale: 0.2,
});
// navbar sticky js
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (nav.classList.toggle("sticky", window.scrollY)) {
    nav.classList.toggle("relative", window.scrollY);
  } else {
    nav.classList.toggle("sticky", window.scrollY);
  }
});
// shery js effect

Shery.textAnimate("h1", {
  style: 1,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.imageEffect("#work", {
  style: 2,
  debug: true,
  config: "",
});
Shery.mouseFollower();
Shery.makeMagnet("#logo");
