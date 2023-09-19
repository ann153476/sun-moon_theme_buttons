const toggleButton = document.querySelector(".sun-moon__theme");
const btnBac = document.querySelector(".s-m_bac__l");
const sun = document.querySelector(".switch__s");
const moon = document.querySelector(".switch__m");
const mySwitch = document.querySelector(".switch");
const smStars = document.querySelector(".s-m_stars");
const smClouds = document.querySelector(".s-m_clouds");

const body = document.body;

let heightToggle = toggleButton.offsetWidth * 0.45;
toggleButton.style.height = heightToggle + "px";
toggleButton.style.borderRadius = heightToggle / 2 + "px";
btnBac.style.borderRadius = heightToggle / 2 + "px";
mySwitch.style.transition = "none";
sun.style.transition = "none";
moon.style.transition = "none";
btnBac.style.transition = "none";
smStars.style.transition = "none";
smClouds.style.transition = "none";

let isDarkMode = localStorage.getItem("isDarkMode") === "true" || false;

function ifisDarkMode() {
  if (isDarkMode) {
    btnBac.style.opacity = "1";
    sun.style.opacity = "0";
    moon.style.opacity = "1";
    mySwitch.style.transform = "translateX(100%)";
    text.style.color = "white";
    body.style.backgroundColor = "black";
    smStars.style.transform = "translateY(0%)";
    smClouds.style.transform = "translateY(100%)";
  } else {
    btnBac.style.opacity = "0";
    sun.style.opacity = "1";
    moon.style.opacity = "0";
    mySwitch.style.transform = "translateX(0%)";
    text.style.color = "black";
    body.style.backgroundColor = "white";
    smStars.style.transform = "translateY(100%)";
    smClouds.style.transform = "translateY(0%)";
  }
}
ifisDarkMode();

function functionClick() {
  isDarkMode = !isDarkMode;
  localStorage.setItem("isDarkMode", isDarkMode);
  mySwitch.style.transition = "transform 1s linear";
  sun.style.transition = "opacity 0.5s linear";
  moon.style.transition = "opacity 0.5s linear";
  btnBac.style.transition = "opacity 1s linear";
  smStars.style.transition = "transform 1s linear";
  smClouds.style.transition = "transform 1s linear";
  console.log(toggleButton.style.transition);
  ifisDarkMode();
}

toggleButton.addEventListener("click", functionClick);
//
//
//
//

// const text = document.querySelector("#text");
//
// //
// let windowWidth = window.innerWidth;
// // Оголосіть isDarkMode як true або false, в залежності від значення в localStorage
// let isDarkMode = localStorage.getItem("isDarkMode") === "true" || false;

// function myFunction(chek) {
//   if (chek) {
//     // Перевіряємо, яку тему включити, і змінюємо значення isDarkMode
//     isDarkMode = !isDarkMode;
//     // Зберігаємо значення isDarkMode в localStorage
//     localStorage.setItem("isDarkMode", isDarkMode);
//   }
//   console.log(body.classList, "myFunction");
// if (isDarkMode) {
//   btnBac.style.opacity = "1";
//   sun.style.opacity = "0";
//   moon.style.opacity = "1";
//   mySwitch.style.transform = "translateX(100%)";
//   text.style.color = "white";
//   body.style.backgroundColor = "black";
// } else {
//   btnBac.style.opacity = "0";
//   sun.style.opacity = "1";
//   moon.style.opacity = "0";
//   mySwitch.style.transform = "translateX(0%)";
//   text.style.color = "black";
//   body.style.backgroundColor = "white";
// }
// }

// let heightToggle;
// function functionStart() {
//   console.log(body.classList, "functionStart");

// heightToggle = toggleButton.offsetWidth * 0.45;
// toggleButton.style.height = heightToggle + "px";
// toggleButton.style.borderRadius = heightToggle / 2 + "px";
// btnBac.style.borderRadius = heightToggle / 2 + "px";
//   myFunction(false);
// }

// //

// // Функція для оновлення розміру кнопки
// function updateButtonSize() {
//   const toggleButton = document.querySelector(".sun-moon__theme");
//   const heightToggle = toggleButton.offsetWidth * 0.45;
//   toggleButton.style.height = heightToggle + "px";
//   toggleButton.style.borderRadius = heightToggle / 2 + "px";
// }

// // Функція, яка буде викликатися при зміні розміру вікна
// function handleWindowResize() {
//   const newWindowWidth = window.innerWidth;

//   // Перевіряємо, чи змінився розмір вікна
//   if (newWindowWidth !== windowWidth) {
//     // Оновлюємо розмір кнопки
//     updateButtonSize();

//     // Оновлюємо змінну з розміром вікна
//     windowWidth = newWindowWidth;
//   }
// }
// //

// toggleButton.addEventListener("click", () => {
//   body.classList.add("transition");
//   myFunction(true);
// });
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("load", updateButtonSize);
// document.addEventListener("DOMContentLoaded", () => {
//   body.classList.remove("transition");
//   functionStart();
// });
