const toggle = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-list");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");

    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");

    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></li>";
  }
}

toggle.addEventListener("click", toggleMenu, false);
