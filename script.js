document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");
  
    function toggleMenu() {
      navLinks.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    }
  
    burger.addEventListener("click", toggleMenu);
  
    const navItems = document.querySelectorAll(".nav-links li");
    navItems.forEach((item) => {
      item.addEventListener("click", toggleMenu);
    });
  });