const menuBtn = document.getElementById("menu-btn");
const exitBtn = document.getElementById("exit-btn");
const menu = document.getElementById("menu");
const middleChild = document.querySelector("#menu-btn :nth-child(2");
const logo = document.getElementById("logo");
menu.firstChild;

// menuBtn.addEventListener("click", () => {
//   if (menu.classList.contains("hidden")) {
//     // menu.classList.remove("hidden");
//     menuToggle();
//     logo.src = "assets/logo-white.png";
//     menuBtn.firstElementChild.classList.add("rotate-45");
//     middleChild.classList.add("hidden");
//     menuBtn.lastElementChild.classList.add("-rotate-45");
//   } else {
//     // menu.classList.add("hidden");
//     menuToggle();
//     logo.src = "assets/logo.png";
//     menuBtn.firstElementChild.classList.remove("rotate-45");
//     middleChild.classList.remove("hidden");
//     menuBtn.lastElementChild.classList.remove("-rotate-45");
//   }
// });

menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("-top-[900px]")) {
    // menu.classList.remove("hidden");
    menu.classList.remove("-top-[900px]");
    menu.classList.add("top-0");
    logo.src = "assets/logo-white.png";
    menuBtn.firstElementChild.classList.add("rotate-45");
    middleChild.classList.add("hidden");
    menuBtn.lastElementChild.classList.add("-rotate-45");
  } else {
    // menu.classList.add("hidden");
    // menuToggle();
    menu.classList.remove("top-0");
    menu.classList.add("-top-[900px]");
    logo.src = "assets/logo.png";
    menuBtn.firstElementChild.classList.remove("rotate-45");
    middleChild.classList.remove("hidden");
    menuBtn.lastElementChild.classList.remove("-rotate-45");
  }
});

function menuToggle() {
  menu.classList.toggle("hidden");
}
