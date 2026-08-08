const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");

function openMenu() {
  drawer.classList.add("open");
  overlay.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  menuButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  drawer.classList.remove("open");
  overlay.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

drawer.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});
