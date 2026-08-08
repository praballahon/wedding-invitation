/* ==========================================
   WEDDING COUNTDOWN
========================================== */

const weddingDate =
    new Date(
        "2026-12-04T15:00:00+05:30"
    ).getTime();

const countdown = document.getElementById(
    "countdown"
);


const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        weddingDate - now;


    /*
     * Wedding has arrived
     */

    if (difference <= 0) {

        countdown.innerHTML = `
            <div class="countdown-complete">
                Today, our forever begins. ♥
            </div>
        `;

        clearInterval(countdownInterval);

        return;

    }


    /*
     * Calculate time
     */

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60)) /
            1000
        );


    /*
     * Update UI
     */

    daysElement.textContent =
        String(days).padStart(3, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");

}


/*
 * Update immediately
 */

updateCountdown();


/*
 * Update every second
 */

const countdownInterval =
    setInterval(
        updateCountdown,
        1000
    );