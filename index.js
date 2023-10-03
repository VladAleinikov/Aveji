const burger = document.getElementById("header__burger");
const nav = document.getElementById("header__nav");
const tel = document.getElementById("header__tel");
const header__bg = document.getElementById("header__modal-bg");
const body = document.body;

const toggleHeader = (e) => {
      burger.classList.toggle("active");
      nav.classList.toggle("active");
      tel.classList.toggle("active");
      header__bg.classList.toggle("active");
      body.classList.toggle("hide")
}
burger.addEventListener("click",  toggleHeader)
header__bg.addEventListener("click",  toggleHeader)