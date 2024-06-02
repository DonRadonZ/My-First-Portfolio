/*========================== toggle icon navbar =============================== */

let menuIcon = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("close-outline");
    navbar.classList.toggle("active");
}