const translate = document.querySelector(".translate");
const big_title = document.querySelector(".big-title");
const small_title = document.querySelector(".small-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
// const opacity = document.querySelector(".opacity");
const border = document.querySelector(".border");

const down = document.querySelector(".down");
var nav = document.querySelector(".nav-float3");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

new Splide("#splide").mount();

nav.style.opacity = 0;

function y() {
  let scroll = window.pageYOffset;
  let sectionY = section.getBoundingClientRect();

  nav.style.opacity = scroll / section_height;
  console.log("nav");

  let speed = translate.dataset.speed;
  translate.style.transform = `translateY(${scroll * speed}px)`;

  // opacity.style.opacity = scroll / (sectionY.top + section_height);

  down.style.opacity = -scroll / (header_height / 2) + 1;

  big_title.style.opacity = -scroll / (header_height / 2) + 1;
  // small_title.style.opacity = -scroll / (header_height / 2) + 1;
  shadow.style.height = `${scroll * 0.5 + 300}px`;

  content.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * 50 - 50
  }px)`;
  image_container.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * -50 + 50
  }px)`;

  border.style.width = `${(scroll / (sectionY.top + section_height)) * 30}%`;
}

window.addEventListener("scroll", y);

window.removeEventListener("beforeunload", x);
