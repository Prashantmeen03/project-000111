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

function updateScale() {
  const canvas = document.getElementById("desktop-wrapper");
  if (!canvas) return;

  const viewportWidth = window.innerWidth;
  const DESIGN_WIDTH = 1440;

  if (viewportWidth >= 1200) {
    const scale = Math.min(viewportWidth / DESIGN_WIDTH, 1);
    canvas.style.transform = `scale(${scale})`;
    
    // Fix empty space at the bottom caused by transform: scale
    const scaledHeightDiff = canvas.offsetHeight * (1 - scale);
    canvas.style.marginBottom = `-${scaledHeightDiff}px`;
  } else {
    canvas.style.transform = "none";
    canvas.style.marginBottom = "0px";
  }
}

window.addEventListener("resize", updateScale);
window.addEventListener("orientationchange", updateScale);
updateScale();
