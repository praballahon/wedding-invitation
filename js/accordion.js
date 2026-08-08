/* ==========================================
   ACCORDION
========================================== */

const cards = document.querySelectorAll(".event-card");

cards.forEach(card => {

    const button = card.querySelector(".expand-btn");
    const expandable = card.querySelector(".expandable");

    button.addEventListener("click", () => {

        const isOpen = card.classList.contains("active");

        // Close all other cards
        cards.forEach(otherCard => {

            if (otherCard !== card) {

                otherCard.classList.remove("active");

                const otherButton =
                    otherCard.querySelector(".expand-btn");

                otherButton.innerHTML = "View Details";

            }

        });

        if (isOpen) {

            card.classList.remove("active");

            button.innerHTML = "View Details";

            return;
        }

        card.classList.add("active");

        button.innerHTML = "Hide Details";

        // Smooth scroll after expansion
        setTimeout(() => {

            expandable.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }, 300);

    });

});


/* ==========================================
   ESC KEY CLOSES ALL
========================================== */

document.addEventListener("keydown", e => {

    if (e.key !== "Escape") return;

    cards.forEach(card => {

        card.classList.remove("active");

        card.querySelector(".expand-btn").innerHTML =
            "View Details";

    });

});


/* ==========================================
   CLOSE WHEN CLICKING OUTSIDE
========================================== */

document.addEventListener("click", e => {

    if (e.target.closest(".event-card")) return;

    cards.forEach(card => {

        card.classList.remove("active");

        card.querySelector(".expand-btn").innerHTML =
            "View Details";

    });

});


/* ==========================================
   OPTIONAL: OPEN FIRST CARD FROM URL
   Example:
   index.html#wedding
========================================== */

window.addEventListener("load", () => {

    const hash = location.hash.toLowerCase();

    if (hash === "#wedding") {

        cards[0].querySelector(".expand-btn").click();

    }

    if (hash === "#reception") {

        cards[1].querySelector(".expand-btn").click();

    }

});


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".expand-btn").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);

    });

});