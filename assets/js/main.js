/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHead() {
  const header = document.querySelector(".header");
  //jab scroll 58VH se jaada hoga to change color
  if (this.scrollY >= 58) {
    header.classList.add("scroll-header");
  } else if (this.scrollY <= 58) {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHead);

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== VALUE ACCORDION ===============*/
let expand = document.querySelectorAll(".value__accordion-item");

expand.forEach((item) => {
  let expandHead = item.querySelector(".value__accordion-header");

  expandHead.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const expandContent = item.querySelector(".value__accordion-content");

  if (item.classList.contains("accordion-open")) {
    expandContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    expandContent.style.height = expandContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
//wahi select krega jisme section ke pass ID ho

function scrollActive() {
  const scrollY = window.pageYOffset;
  //this will tell me how far maine scroll kiya hai

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      //height of current element
      sectionTop = current.offsetTop - 58,
      //distance between the top of the current section
      // element and the top of the document, minus 58 pixels
      sectionId = current.getAttribute("id");

    //scroll document ke ander hai check krna
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  //jab scroll is higher than 350vh then add scrollup open
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

//Previously select huve hai
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//we obtain current theme jo interface ke pass hai

const getCurrentTheme = () =>
  document.body.classList.list.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.list.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

//we validate if user selected or not

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

//Activate or de theme manaually

themeButton.addEventListener("click", () => {
  //add or remove
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //we save the theme n current icon
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(".home__title, .popular__container , .subs__container");
sr.reveal(".home__description , .footer__info", { delay: 500 });
sr.reveal(".home__search", { delay: 600 });
sr.reveal(".home__value", { delay: 700 });
sr.reveal(".home__images", { delay: 800, origin: "bottom" });

sr.reveal(".logos__img", { interval: 100 });
sr.reveal(".value__images , .contact__content", { origin: "left" });
sr.reveal(".value__content ,.contact__images", { origin: "right" });
sr.reveal(".footer__container", { origin: "bottom" });
