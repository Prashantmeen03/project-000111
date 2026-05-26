const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {

  drawer.classList.add("active");
  overlay.classList.add("active");

});

closeBtn.addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);

function closeDrawer(){

  drawer.classList.remove("active");
  overlay.classList.remove("active");

}