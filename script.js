const mainWrapper = document.querySelector(".main-wrapper");
const menu = document.querySelector(".menu");
const btnMenu = document.querySelector(".menu-icon");
btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  menu.classList.toggle("hidden");
});

let copy = document.querySelector(".scroller").cloneNode(true);
document.querySelector(".mask").appendChild(copy);


