const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
});

const navMenuLinks = document.querySelectorAll(".nav-menu-link");
navMenuLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible");
  });
});
