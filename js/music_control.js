(function () {
  "use strict";

  function initMusic() {
    const musicBtn = document.createElement("button");
    musicBtn.className = "music-btn";
    musicBtn.innerHTML = "♪";
    document.body.appendChild(musicBtn);

    let playing = false;

    const audio = new Audio("assets/audio/theme2_alokhua.mp3");
    audio.loop = true;

    function fadeInMusic() {
        audio.play();
        let volume = 0;
        const fade = setInterval(() => {
            volume += 0.05;
            if (volume >= 0.5) {
                volume = 0.5;
                clearInterval(fade);
            }
            audio.volume = volume;
        }, 120);
    }

    function fadeOutMusic() {
        audio.pause();
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
    function isPlaying(audio) {
      return (
          audio.currentTime > 0 &&
          !audio.paused &&
          !audio.ended &&
          audio.readyState > 2
      );
    }

    function playMusic() {
        if(!playing) {
            audio.load();
            audio.oncanplaythrough = () => {
                audio.volume = 0.5;

                audio.play().then(() => {
                    playing = true;
                    musicBtn.classList.add("playing");
                    localStorage.setItem("music", "on");
                }).catch(() => {
                    //alert("could not play audio");
                });
            }

            /*setTimeout(() => {
            audio.play().catch(console.error);
            }, 3000);
            button.textContent = "Ⅱ";
            button.setAttribute("aria-label", "Pause music");*/
        }
    }

    function startMusic() {
        playMusic();
        document.removeEventListener("pointerdown", startMusic);
        document.removeEventListener("touchstart", startMusic);
    }

    document.addEventListener("pointerdown", startMusic);
    document.addEventListener("touchstart", startMusic);
  }

  window.WeddingSite = window.WeddingSite || {};
  window.WeddingSite.music = { init: initMusic };

})();
