// ==========================================
// Smooth Scroll
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});


// ==========================================
// Navbar Shadow
// ==========================================

/*const menu = document.querySelector(".menu-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        menu.style.boxShadow =
            "0 15px 40px rgba(0,0,0,.18)";

    } else {

        menu.style.boxShadow =
            "0 8px 25px rgba(0,0,0,.12)";
    }

});*/


// ==========================================
// Mouse Parallax
// ==========================================

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 15;

    const y = (e.clientY / window.innerHeight - 0.5) * 15;

    document.querySelector(".top-flowers").style.transform =
        `translateX(-50%) translate(${x}px,${y}px)`;

    document.querySelector(".left-leaf").style.transform =
        `translate(${x * -.8}px,${y}px)`;

    document.querySelector(".right-decoration").style.transform =
        `translate(${x * .8}px,${y * -.8}px)`;

});


// ==========================================
// Hero Fade while Scrolling
// ==========================================

window.addEventListener("scroll", () => {

    const scrolled = window.scrollY;

    hero.style.opacity = 1 - scrolled / 700;

    hero.style.transform =
        `translateY(${scrolled * .2}px)`;

});


// ==========================================
// Floating Particles
// ==========================================
/*
const particleContainer = document.querySelector(".particles");

for (let i = 0; i < 30; i++) {

    const dot = document.createElement("span");

    dot.classList.add("particle");

    dot.style.left = Math.random() * 100 + "%";

    dot.style.animationDelay =
        Math.random() * 8 + "s";

    dot.style.animationDuration =
        8 + Math.random() * 10 + "s";

    dot.style.opacity =
        Math.random();

    dot.style.width =
        dot.style.height =
        Math.random() * 6 + 3 + "px";

    particleContainer.appendChild(dot);

}
*/

// ==========================================
// Cursor Glow
// ==========================================

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

window.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});


// ==========================================
// Lazy Image Fade
// ==========================================

document.querySelectorAll("img").forEach(img => {

    img.onload = () => {

        img.style.opacity = "1";

    };

});


// ==========================================
// Hero Entrance
// ==========================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ==========================================
// Optional Menu
// ==========================================

// ==========================================
// MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");

const infoPanel = document.getElementById("infoPanel");
const panelClose = document.getElementById("panelClose");

const menuItems = document.querySelectorAll(".menu-item");

const infoContents =
    document.querySelectorAll(".info-content");


// Open menu

menuBtn.addEventListener("click", () => {

    menuOverlay.classList.add("open");

    document.body.style.overflow = "hidden";

});


// Close menu

menuClose.addEventListener("click", () => {

    menuOverlay.classList.remove("open");

    document.body.style.overflow = "";

});


// Open selected panel

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        const panelName =
            item.dataset.panel;

        const target =
            document.getElementById(
                panelName + "Panel"
            );

        if (!target) return;


        // Close menu

        menuOverlay.classList.remove("open");


        // Hide all content

        infoContents.forEach(content => {

            content.classList.remove("active");

        });


        // Show selected content

        target.classList.add("active");


        // Open information panel

        infoPanel.classList.add("open");

        document.body.style.overflow = "hidden";

    });

});


// Close information panel

panelClose.addEventListener("click", () => {

    infoPanel.classList.remove("open");

    document.body.style.overflow = "";

});


// ESC key

document.addEventListener("keydown", event => {

    if (event.key !== "Escape") return;

    menuOverlay.classList.remove("open");

    infoPanel.classList.remove("open");

    document.body.style.overflow = "";

});

document.addEventListener("DOMContentLoaded", () => {
    
    //window.WeddingSite.countdown.init();
    window.WeddingSite.animations.initReveal();
    window.WeddingSite.animations.createParticles();
    window.WeddingSite.music.init();
  });

// ==========================================
// WEDDING LAUNCH SCREEN
// ==========================================

const launchScreen =
    document.getElementById("launchScreen");

if (launchScreen) {

    // Prevent scrolling while launch screen is visible
    document.body.style.overflow = "hidden";


    // Show homepage after 2.8 seconds
    setTimeout(() => {

        launchScreen.classList.add("hide");

        document.body.style.overflow = "";

    }, 2500);

}