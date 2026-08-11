/* =========================================================
   ENVELOPE OPENING + MUSIC
========================================================= */

const envelopeScreen = document.getElementById("envelope-screen");

const openInvitation = document.getElementById("open-invite");

const bgMusic = document.getElementById("bg-music");

document.documentElement.classList.add("envelope-active");
document.body.classList.add("envelope-active");

const musicBtn = document.createElement("button");
musicBtn.className = "music-btn";
musicBtn.innerHTML = "♪";
document.body.appendChild(musicBtn);

let playing = false;

function fadeInMusic() {
    bgMusic.play();
    let volume = 0;
    const fade = setInterval(() => {
        volume += 0.05;
        if (volume >= 0.5) {
            volume = 0.5;
            clearInterval(fade);
        }
        bgMusic.volume = volume;
    }, 120);
}

function fadeOutMusic() {
    bgMusic.pause();
    /*let volume = audio.volume;
    const fade = setInterval(() => {
        volume -= 0.05;
        if (volume <= 0) {
            audio.pause();
            audio.currentTime = 0;
            clearInterval(fade);
            volume = 0;
        }
        audio.volume = volume;
    }, 100);*/
}

musicBtn.addEventListener("click", () => {
    if (playing) {
        fadeOutMusic();
        musicBtn.classList.remove("playing");
        localStorage.setItem("music", "off");
        playing = false;
    } else {
        fadeInMusic();
        musicBtn.classList.add("playing");
        localStorage.setItem("music", "on");
        playing = true;
    }
});


openInvitation.addEventListener("click", function () {
    /* ---------------------------------------------
       Start music from the button interaction
    --------------------------------------------- */
    if (bgMusic) {
        bgMusic.volume = 0.5;
        musicBtn.classList.add("playing");
        localStorage.setItem("music", "on");
        playing = true;
        bgMusic.play().catch(function (error) {
            musicBtn.classList.remove("playing");
            localStorage.setItem("music", "off");
            playing = false;
            console.log(
                "Music playback blocked:",
                error
            );
        });
    }


    /* ---------------------------------------------
       Start envelope opening
    --------------------------------------------- */

    envelopeScreen.classList.add("opening");


    /* ---------------------------------------------
       Remove launch screen
    --------------------------------------------- */
    setTimeout(function () {
        envelopeScreen.classList.add("hide");
        document.body.classList.add("invitation-opened");

        document.documentElement.classList.remove("envelope-active");
        document.body.classList.remove("envelope-active");
    }, 1800);

});