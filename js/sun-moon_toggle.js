const btnBac = document.querySelector(".s-m_bac__l");
const toggleButton = document.querySelector(".sun-moon__theme");
const sun = document.querySelector(".switch__s");
const moon = document.querySelector(".switch__m");
const mySwitch = document.querySelector(".switch");

const text = document.querySelector("#text");
const body = document.body;
//
let windowWidth = window.innerWidth;
// Оголосіть isDarkMode як true або false, в залежності від значення в localStorage
let isDarkMode = localStorage.getItem("isDarkMode") === "true" || false;

function myFunction(chek) {
  if (chek) {
    // Перевіряємо, яку тему включити, і змінюємо значення isDarkMode
    isDarkMode = !isDarkMode;
    // Зберігаємо значення isDarkMode в localStorage
    localStorage.setItem("isDarkMode", isDarkMode);
    //updateTransitionClass();
  }
  //body.classList.add("transition");
  //body.classList.remove("transition");
  console.log(body.classList, "myFunction");
  if (isDarkMode) {
    btnBac.style.opacity = "1";
    sun.style.opacity = "0";
    moon.style.opacity = "1";
    mySwitch.style.transform = "translateX(100%)";
    text.style.color = "white";
    body.style.backgroundColor = "black";
  } else {
    btnBac.style.opacity = "0";
    sun.style.opacity = "1";
    moon.style.opacity = "0";
    mySwitch.style.transform = "translateX(0%)";
    text.style.color = "black";
    body.style.backgroundColor = "white";
  }
}

let heightToggle;
function functionStart() {
  console.log(body.classList, "functionStart");

  heightToggle = toggleButton.offsetWidth * 0.45;
  toggleButton.style.height = heightToggle + "px";
  toggleButton.style.borderRadius = heightToggle / 2 + "px";
  btnBac.style.borderRadius = heightToggle / 2 + "px";
  myFunction(false);
}

//

// Функція для оновлення розміру кнопки
function updateButtonSize() {
  const toggleButton = document.querySelector(".sun-moon__theme");
  const heightToggle = toggleButton.offsetWidth * 0.45;
  toggleButton.style.height = heightToggle + "px";
  toggleButton.style.borderRadius = heightToggle / 2 + "px";
}

// Функція, яка буде викликатися при зміні розміру вікна
function handleWindowResize() {
  const newWindowWidth = window.innerWidth;

  // Перевіряємо, чи змінився розмір вікна
  if (newWindowWidth !== windowWidth) {
    // Оновлюємо розмір кнопки
    updateButtonSize();

    // Оновлюємо змінну з розміром вікна
    windowWidth = newWindowWidth;
  }
}
//

toggleButton.addEventListener("click", () => {
  body.classList.add("transition");
  myFunction(true);
});
window.addEventListener("resize", handleWindowResize);
window.addEventListener("load", updateButtonSize);
document.addEventListener("DOMContentLoaded", () => {
  body.classList.remove("transition");
  functionStart();
});

// Встановлюємо клас "transition" тільки для елементів, які змінюються залежно від теми
// function updateTransitionClass() {
//   const elementsWithTransition = [btnBac, sun, moon, mySwitch];
//   elementsWithTransition.forEach((element) => {
//     if (isDarkMode) {
//       element.classList.add("transition");
//     } else {
//       element.classList.remove("transition");
//     }
//   });
// }

// після оновлення щоб не було transition: all 1s ease;
// document.addEventListener("DOMContentLoaded", () => {
//   updateTransitionClass();
// });

// Встановлюємо початковий стан сторінки відповідно до значення в localStorage
