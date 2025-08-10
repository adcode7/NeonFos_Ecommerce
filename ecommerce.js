const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});

function home() {
    window.location.href = 'index.html'; }
    function Page() {
        window.location.href = 'contact.html'; }
        a