(function () {
  "use strict";

  function initReveal() {
    
    const nodes = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    nodes.forEach((node) => observer.observe(node));
  }

  function createParticles() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    
    const layer = document.createElement("div");
    layer.className = "particle-layer";
    layer.setAttribute("aria-hidden", "true");
    document.body.appendChild(layer);

    for (let index = 0; index < 22; index += 1) {
      const particle = document.createElement("span");
      const isPetal = index % 5 === 0;
      particle.className = isPetal ? "flower-petal" : "gold-particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${10 + Math.random() * 14}s`;
      particle.style.animationDelay = `${Math.random() * -18}s`;
      particle.style.setProperty("--drift", `${Math.random() * 80 - 40}px`);
      layer.appendChild(particle);
    }

    /*for (let index = 0; index < 7; index += 1) {
      const leaf = document.createElement("span");
      leaf.className = "banana-leaf-drift";
      leaf.style.left = `${8 + Math.random() * 84}%`;
      leaf.style.animationDuration = `${18 + Math.random() * 12}s`;
      leaf.style.animationDelay = `${Math.random() * -24}s`;
      leaf.style.setProperty("--drift", `${Math.random() * 160 - 80}px`);
      layer.appendChild(leaf);
    }*/
  }

  window.WeddingSite = window.WeddingSite || {};
  window.WeddingSite.animations = { initReveal, createParticles };
})();
