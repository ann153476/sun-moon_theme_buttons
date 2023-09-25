var screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
var screenHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

// console.log("Ширина екрану: " + screenWidth + " пікселів");
// console.log("Висота екрану: " + screenHeight + " пікселів");

const themeBox = document.querySelector(".theme__box");

function setFlexDirection() {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  var screenHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  if (screenWidth < screenHeight) {
    themeBox.style.flexDirection = "column";
  } else {
    themeBox.style.flexDirection = "row";
  }
}

// Викликати функцію для встановлення початкового значення
setFlexDirection();

// Додати обробник події resize
window.addEventListener("resize", setFlexDirection);

// console.log(
//   window.innerWidth,
//   document.documentElement.clientWidth,
//   document.body.clientWidth
// );
// чим відрізняються ці варіанти?
// window.innerWidth,
// document.documentElement.clientWidth,
// document.body.clientWidth
//////////////////////////////
// window.innerWidth:

// Вимірює ширину вікна браузера, включаючи горизонтальну прокрутку, якщо вона є.
// Ця властивість повертає розмір вікна браузера у пікселях.

// document.documentElement.clientWidth:

// Вимірює ширину видимої частини документа, тобто ширину "клієнтської області" HTML-елемента.
// Враховує розміри браузерної панелі прокрутки (якщо вона є) і ігнорує інші візуальні елементи браузера, такі як панель інструментів або смугу закладок.
// Ця властивість також повертає розмір у пікселях.

// document.body.clientWidth:

// Вимірює ширину видимої частини сторінки, але враховує розміри всіх елементів включаючи тег <body>.
// Зазвичай використовується тоді, коли необхідно отримати ширину сторінки без врахування внутрішнього вмісту браузера (наприклад, без панелі прокрутки).
// Ця властивість також повертає розмір у пікселях.
