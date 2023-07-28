document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");
  
    // Function to toggle the mobile menu
    function toggleMenu() {
      navLinks.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    }
  
    // Event listener for the burger menu button click
    burger.addEventListener("click", toggleMenu);
  
    // Event listeners for menu item clicks to close the menu
    const navItems = document.querySelectorAll(".nav-links li");
    navItems.forEach((item) => {
      item.addEventListener("click", toggleMenu);
    });
  });
  