function animateBtnFill(btnFill, translateY, duration) {
  requestAnimationFrame(() => {
    btnFill.animate(
      {
        transform: `translate(-50%, ${translateY}%)`,
      },
      { duration, fill: "forwards", easing: "ease" }
    );
  });
}

const buttons = document.querySelectorAll(".btn1");

buttons.forEach((btn1) => {
  const btnFill = btn1.querySelector(".btn-fill");

  btn1.addEventListener("mouseenter", () => {
    // Mouse Enter Event
    animateBtnFill(btnFill, 50, 0);

    animateBtnFill(btnFill, -50, 850);
  });

  btn1.addEventListener("mouseleave", () => {
    // Mouse Leave Event
    animateBtnFill(btnFill, -150, 850);
  });
});

/* Created by Tivotal */

var swiper = new Swiper(".slider-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: "true",
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    dynamicBullets: "true",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
