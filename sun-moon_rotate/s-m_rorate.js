const smBTN = document.querySelector(".sun-moon_rotate");
const smSwitch = document.querySelector(".s-m-r_switch");
const moonDots = document.querySelector(".moon__dots");
const Starssm = document.querySelector(".sm-stars");
const smCloud1 = document.querySelector(".s-m_cloud1");
const smCloud2 = document.querySelector(".s-m_cloud2");

let isDarkTheme = localStorage.getItem("isDarkTheme") === "true" || false;

smBTN.style.height = smBTN.offsetWidth * 0.45 + "px";
smSwitch.style.height = smBTN.offsetHeight * 0.9 + "px";
smSwitch.style.width = smBTN.offsetHeight * 0.9 + "px";

smBTN.style.transition = "none";
smSwitch.style.transition = "none";
moonDots.style.transition = "none";
Starssm.style.transition = "none";
smCloud1.style.transition = "none";
smCloud2.style.transition = "none";

function ifDark() {
  if (isDarkTheme) {
    smBTN.style.backgroundColor = "#0F405B";
    smSwitch.style.backgroundColor = "#DDDDDD";
    moonDots.style.opacity = "1";
    smSwitch.style.transform = "rotate(0deg) translateX(0%)";
    Starssm.style.transform = "translateX(0%)";
    Starssm.style.scale = "1";
    smCloud1.style.transform = "translate(30%,100%)";
    smCloud2.style.transform = "translate(-100%,50%)";
  } else {
    smBTN.style.backgroundColor = "#5BA9D3";
    smSwitch.style.backgroundColor = "#f6d35a";
    moonDots.style.opacity = "0";
    smSwitch.style.transform = "rotate(360deg) translateX(100%)";
    Starssm.style.transform = "translateX(100%)";
    Starssm.style.scale = "0";
    smCloud1.style.transform = "translate(0%,0%)";
    smCloud2.style.transform = "translate(0%,0%)";
  }
}

ifDark();

function clickF() {
  isDarkTheme = !isDarkTheme;
  localStorage.setItem("isDarkTheme", isDarkTheme);

  smBTN.style.transition = "background-color 1s linear";
  smSwitch.style.transition = "all 1s linear";
  moonDots.style.transition = "opacity 1s linear";
  Starssm.style.transition = "all 1s linear";
  smCloud1.style.transition = "all 1s linear";
  smCloud2.style.transition = "all 1s linear";

  ifDark();
}

smBTN.addEventListener("click", clickF);
