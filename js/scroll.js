/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(`
    .event-card,
    .hero-content,
    .timeline div,
    footer,
    .hero-info div
`);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(el => {

    revealObserver.observe(el);

});


/* ==========================================
   PARALLAX BACKGROUND
========================================== */

const flowers = document.querySelector(".top-flowers");
const leftLeaf = document.querySelector(".left-leaf");
const rightLeaf = document.querySelector(".right-decoration");

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    if (flowers)
        flowers.style.transform =
            `translateX(-50%) translateY(${scroll * 0.18}px)`;

    if (leftLeaf)
        leftLeaf.style.transform =
            `translateY(${scroll * 0.12}px)`;

    if (rightLeaf)
        rightLeaf.style.transform =
            `translateY(${scroll * 0.08}px)`;

});


/* ==========================================
   ACTIVE EVENT CARD
========================================== */

const eventCards = document.querySelectorAll(".event-card");

const activeObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                eventCards.forEach(card =>
                    card.classList.remove("focused"));

                entry.target.classList.add("focused");

            }

        });

    },

    {
        threshold: 0.55
    }

);

eventCards.forEach(card =>
    activeObserver.observe(card)
);


/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progress = document.createElement("div");

progress.className = "scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percentage =
        (window.scrollY / height) * 100;

    progress.style.width = percentage + "%";

});


/* ==========================================
   BACK TO TOP
========================================== */

const topBtn = document.createElement("button");

topBtn.className = "back-top";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        topBtn.classList.add("visible");

    } else {

        topBtn.classList.remove("visible");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};