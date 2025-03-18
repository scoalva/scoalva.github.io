document.addEventListener("DOMContentLoaded", () => {
    // Cargar configuración de Particles.js dentro del contenedor #particles-js
    particlesJS.load('particles-js', 'particlesjs-config.json', function() {
      console.log('Particles.js config loaded');
    });
  
    // Smooth scrolling para navegación
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Animación de entrada para el contenido del Hero
    const heroContent = document.querySelector(".hero-content");
    setTimeout(() => {
      heroContent.style.opacity = 1;
      heroContent.style.transform = "translateY(0)";
    }, 500);
  
    // Animación de fade-in para los íconos de contacto
    const contactIcons = document.querySelectorAll(".contact-icons a");
    contactIcons.forEach((icon, index) => {
      icon.style.opacity = 0;
      icon.style.transform = "translateY(20px)";
      icon.style.transition = `opacity 0.5s ${index * 0.2}s ease, transform 0.5s ${index * 0.2}s ease`;
      setTimeout(() => {
        icon.style.opacity = 1;
        icon.style.transform = "translateY(0)";
      }, 100);
    });
  });
  