const btnBac = document.querySelector(".s-m_bac__l");
const toggleButton = document.querySelector(".sun-moon__theme");
const sun = document.querySelector(".switch__s");
const moon = document.querySelector(".switch__m");
const mySwitch = document.querySelector(".switch");

let isDarkMode = false;

// нижче це не треба
const text = document.querySelector("#text");
const body = document.body;
//
function myFunction() {
  if (isDarkMode) {
    btnBac.style.opacity = "1";
    sun.style.opacity = "0";
    moon.style.opacity = "1";
    mySwitch.style.transform = "translateX(100%)";
    // нижче це не треба
    text.style.color = "white";
    body.style.backgroundColor = "black";
    //
  } else {
    btnBac.style.opacity = "0";
    sun.style.opacity = "1";
    moon.style.opacity = "0";
    mySwitch.style.transform = "translateX(0%)";
    // нижче це не треба
    text.style.color = "black";
    body.style.backgroundColor = "white";
    //
  }
  isDarkMode = !isDarkMode;
}

let wightToggle;
function functionStart() {
  wightToggle = toggleButton.offsetWidth * 0.45;
  toggleButton.style.height = wightToggle + "px";
  toggleButton.style.borderRadius = wightToggle / 2 + "px";
  btnBac.style.borderRadius = wightToggle / 2 + "px";
  console.log(wightToggle);
  myFunction();
}
toggleButton.addEventListener("click", myFunction);
document.addEventListener("DOMContentLoaded", functionStart);
