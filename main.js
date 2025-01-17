const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
  
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });
  
  navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });

const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Inicialize o ScrollReveal

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOptions,
});

ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOptions,
    delay: 500,
});

ScrollReveal().reveal(".header_container form", {
    ...scrollRevealOptions,
    delay: 1000,
});

ScrollReveal().reveal(".header_container a", {
    ...scrollRevealOptions,
    delay: 1500,
});

const swiper = new Swiper('.swiper', {
    loop: true, // Ativa o loop
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Permite clicar nos indicadores
    },
  });

  