import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

(function () {
  if (window.localStorage.getItem("darkMode")) {
    document.body.classList.add("dark-mode");
  }
})();

// Progress bar start

[...document.querySelectorAll("div.progress__indicator")].forEach((e) => {
  e.animate(
    [
      { transform: "0" },
      { width: `calc(${e.getAttribute("data-value")}% - 4px)` },
    ],
    {
      duration: 1100,
      iterations: 1,
      fill: "forwards",
    }
  );
});

// Mobile menu start
window.addEventListener("DOMContentLoaded", (event) => {
  [...document.querySelectorAll(".burger__menu")].map((e) =>
    e.addEventListener("click", openMenu)
  );

  [...document.querySelectorAll(".close__menu")].map((e) =>
    e.addEventListener("click", closeMenu)
  );

  function openMenu(e) {
    e.preventDefault();
    let menu = document.querySelector(e.target.getAttribute("data-menu"));
    menu.classList.add("open");
  }

  function closeMenu(e) {
    e.preventDefault();
    e.target?.closest(".open").classList.remove("open");
  }

  /* Close menu */

  // Reviews Slider
  if (window.location.pathname == "/") {
    var swiper = new Swiper(".reviews__section--content", {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 27,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 1,
          spaceBetween: 27,
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 27,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 27,
        },
      },
    });
  }

  // Set active menu

  [...document.querySelectorAll(".main__menu a.menu__link")].map((elm) => {
    if (elm.classList.contains("active")) {
      elm.classList.remove("active");
    }

    if (elm.getAttribute("href") == window.location.pathname) {
      elm.classList.add("active");
    }
  });

  // Dark mode script
  const bodyTag = document.body;
  [...document.querySelectorAll(".bg_btn")].map((btn) => {
    btn.addEventListener("click", toggleDarkMode);
  });

  function toggleDarkMode() {
    console.log("a");

    if (bodyTag.classList.contains("dark-mode")) {
      bodyTag.classList.remove("dark-mode");
      window.localStorage.removeItem("darkMode");
    } else {
      bodyTag.classList.add("dark-mode");
      window.localStorage.setItem("darkMode", true);
    }
  }
});
