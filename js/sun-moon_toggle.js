const btnBac = document.querySelector(".s-m_bac__l");
const toggleButton = document.querySelector(".sun-moon__theme");
const sun = document.querySelector(".switch__s");
const moon = document.querySelector(".switch__m");
const mySwitch = document.querySelector(".switch");

const text = document.querySelector("#text");
const body = document.body;

// Оголосіть isDarkMode як true або false, в залежності від значення в localStorage
let isDarkMode = localStorage.getItem("isDarkMode") === "true" || false;

function myFunction(chek) {
  console.log(chek, "<<<,,,");
  if (chek) {
    // Перевіряємо, яку тему включити, і змінюємо значення isDarkMode
    isDarkMode = !isDarkMode;

    // Зберігаємо значення isDarkMode в localStorage
    localStorage.setItem("isDarkMode", isDarkMode);
  }

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
  heightToggle = toggleButton.offsetWidth * 0.45;
  toggleButton.style.height = heightToggle + "px";
  toggleButton.style.borderRadius = heightToggle / 2 + "px";
  btnBac.style.borderRadius = heightToggle / 2 + "px";
  myFunction(false);
}

toggleButton.addEventListener("click", myFunction);
document.addEventListener("DOMContentLoaded", functionStart);

// Встановлюємо початковий стан сторінки відповідно до значення в localStorage
