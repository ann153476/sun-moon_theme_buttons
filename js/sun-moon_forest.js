const toggleBtnForest = document.querySelector(".sun-moon-forest");
const bacForest = document.querySelector(".s-m_bac__forest");

function forestOnFunc() {
  //   isDarkMode = !isDarkMode;
  //   if (isDarkMode) {
  //     bacForest.style.opacity = "0";
  //   } else {
  bacForest.style.opacity = "0";
}
toggleBtnForest.addEventListener("click", forestOnFunc);
