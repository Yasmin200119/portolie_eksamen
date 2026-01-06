/* BURGER MENU */
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

/* SLÅ LYD TIL/FRA PÅ VIDEO */
const video = document.getElementById("video");
const knap = document.getElementById("knap");

knap.addEventListener("click", () => {
  video.muted = !video.muted;
  knap.textContent = video.muted ? "Slå lyd til" : "Slå lyd fra";
});
