const toggleBtnForest = document.querySelector(".sun-moon-forest");
const bacForest = document.querySelector(".s-m_bac__forest");
const forestSwitch = document.querySelector(".forest__switch");

let isDark = localStorage.getItem("isDarkForestBTN") === "true" || false;
let heightToggleF;
function functionStart() {
  toggleBtnForest.style.height = toggleBtnForest.offsetWidth * 0.45 + "px";
  forestSwitch.style.height = toggleBtnForest.offsetHeight * 0.9 + "px";
  forestSwitch.style.width = toggleBtnForest.offsetHeight * 0.9 + "px";
  toggleBtnForest.style.borderRadius = toggleBtnForest.offsetWidth / 2 + "px";
  forestSwitch.style.transition = "none";
  bacForest.style.transition = "none";
  ifIsDark();
  setTimeout(() => {
    forestSwitch.style.transition = "transform 1s linear";
    bacForest.style.transition = "opacity 1s linear";
  }, 500);
}
function forestOnClick() {
  isDark = !isDark;
  localStorage.setItem("isDarkForestBTN", isDark);
  ifIsDark();
}
function ifIsDark() {
  if (isDark) {
    bacForest.style.opacity = "1";
    forestSwitch.style.transform = "translate(0, -50%)";
  } else {
    bacForest.style.opacity = "0";
    forestSwitch.style.transform = "translate(100%, -50%)";
  }
}
toggleBtnForest.addEventListener("click", forestOnClick);
document.addEventListener("DOMContentLoaded", functionStart);
