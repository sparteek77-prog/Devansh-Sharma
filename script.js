/* =========================
   EDIT.8.7 — INTERACTIONS
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SMOOTH NAVIGATION
     ========================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* =========================
     SCROLL REVEAL
     ========================= */

  const revealElements = document.querySelectorAll(
    ".section-heading, .work-card, .service, .about-grid, .process-item, .contact-content"
  );

  revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(35px)";
    element.style.transition =
      "opacity 0.8s ease, transform 0.8s ease";
  });


  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        observer.unobserve(entry.target);

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  /* =========================
     NAVBAR SCROLL EFFECT
     ========================= */

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
      navbar.style.background = "rgba(5,5,5,0.94)";
      navbar.style.borderBottomColor = "rgba(255,255,255,0.12)";
    } else {
      navbar.style.background = "rgba(8,8,8,0.82)";
      navbar.style.borderBottomColor = "rgba(255,255,255,0.08)";
    }

  });


  /* =========================
     ACTIVE NAVIGATION
     ========================= */

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

      const sectionTop = section.offsetTop - 180;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }

    });


    navLinks.forEach(link => {

      link.style.color = "#aaa";

      if (link.getAttribute("href") === `#${currentSection}`) {
        link.style.color = "#fff";
      }

    });

  });


  /* =========================
     MOUSE PARALLAX
     ========================= */

  const hero = document.querySelector(".hero");
  const heroContent = document.querySelector(".hero-content");

  if (hero && heroContent && window.innerWidth > 800) {

    hero.addEventListener("mousemove", event => {

      const x = (window.innerWidth / 2 - event.clientX) / 80;
      const y = (window.innerHeight / 2 - event.clientY) / 80;

      heroContent.style.transform =
        `translate(${x}px, ${y}px)`;

    });


    hero.addEventListener("mouseleave", () => {

      heroContent.style.transform =
        "translate(0, 0)";

    });

  }


  /* =========================
     CURRENT YEAR
     ========================= */

  const copyright = document.querySelector(".copyright");

  if (copyright) {

    const currentYear = new Date().getFullYear();

    copyright.textContent =
      `© ${currentYear} edit.8.7 — All rights reserved.`;

  }


});
