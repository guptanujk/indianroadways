/* =========================================
   DELUXE ROADWAYS
   CUSTOM MUSIC PLAYER
========================================= */


/* =========================================
   SONG LIBRARY
========================================= */

const songs = [

    {
        title:
            "Mujhse Mohabbat Ka Izhaar Karta",

        artist:
            "Kumar Sanu, Alka Yagnik",

        src:
            "assets/songs/Hindi/song1.mp3"
    },


    {
        title:
            "Tumsa Koi Pyaara",

        artist:
            "Kumar Sanu, Alka Yagnik",

        src:
            "assets/songs/Hindi/song2.mp3"
    }

];



/* =========================================
   CURRENT SONG
========================================= */

let currentSong = 0;



/* =========================================
   ELEMENTS
========================================= */

const audio =
    document.getElementById("audio");

const playBtn =
    document.getElementById("playBtn");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const songName =
    document.getElementById("songName");

const artist =
    document.getElementById("artist");

const progress =
    document.getElementById("progress");

const progressBar =
    document.getElementById("progressBar");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");

const time =
    document.getElementById("time");

const listeners =
    document.getElementById("listeners");



/* =========================================
   LOAD SONG
========================================= */

function loadSong(index) {

    currentSong = index;

    const song =
        songs[currentSong];


    songName.textContent =
        song.title;

    artist.textContent =
        song.artist;


    audio.src =
        song.src;

    audio.load();


    progress.style.width =
        "0%";

    currentTime.textContent =
        "0:00";

    duration.textContent =
        "0:00";

}



/* =========================================
   PLAY
========================================= */

async function playSong() {

    try {

        await audio.play();

        playBtn.textContent =
            "Ⅱ";

    }

    catch (error) {

        console.error(
            "Playback failed:",
            error
        );

    }

}



/* =========================================
   PAUSE
========================================= */

function pauseSong() {

    audio.pause();

    playBtn.textContent =
        "▶";

}



/* =========================================
   PLAY / PAUSE
========================================= */

playBtn.addEventListener(
    "click",
    () => {

        if (audio.paused) {

            playSong();

        } else {

            pauseSong();

        }

    }
);



/* =========================================
   NEXT
========================================= */

function nextSong() {

    currentSong++;

    if (
        currentSong >=
        songs.length
    ) {

        currentSong = 0;

    }


    loadSong(
        currentSong
    );

    playSong();

}


nextBtn.addEventListener(
    "click",
    nextSong
);



/* =========================================
   PREVIOUS
========================================= */

function previousSong() {

    currentSong--;

    if (
        currentSong < 0
    ) {

        currentSong =
            songs.length - 1;

    }


    loadSong(
        currentSong
    );

    playSong();

}


previousBtn.addEventListener(
    "click",
    previousSong
);



/* =========================================
   AUTO NEXT
========================================= */

audio.addEventListener(
    "ended",
    () => {

        nextSong();

    }
);



/* =========================================
   PROGRESS
========================================= */

audio.addEventListener(
    "timeupdate",
    () => {

        if (
            !audio.duration ||
            isNaN(audio.duration)
        ) {

            return;

        }


        const percentage =
            (
                audio.currentTime /
                audio.duration
            ) * 100;


        progress.style.width =
            `${percentage}%`;


        currentTime.textContent =
            formatTime(
                audio.currentTime
            );

    }
);



/* =========================================
   DURATION
========================================= */

audio.addEventListener(
    "loadedmetadata",
    () => {

        duration.textContent =
            formatTime(
                audio.duration
            );

    }
);



/* =========================================
   SEEK
========================================= */

progressBar.addEventListener(
    "click",
    (event) => {

        if (
            !audio.duration ||
            isNaN(audio.duration)
        ) {

            return;

        }


        const rect =
            progressBar.getBoundingClientRect();


        const percentage =
            (
                event.clientX -
                rect.left
            ) / rect.width;


        audio.currentTime =
            audio.duration *
            percentage;

    }
);



/* =========================================
   FORMAT TIME
========================================= */

function formatTime(seconds) {

    if (
        !seconds ||
        isNaN(seconds)
    ) {

        return "0:00";

    }


    const minutes =
        Math.floor(
            seconds / 60
        );


    const remainingSeconds =
        Math.floor(
            seconds % 60
        );


    return (
        `${minutes}:` +
        String(
            remainingSeconds
        ).padStart(2, "0")
    );

}



/* =========================================
   CLOCK
========================================= */

function updateClock() {

    const now =
        new Date();


    let hours =
        now.getHours();


    const minutes =
        String(
            now.getMinutes()
        ).padStart(2, "0");


    const period =
        hours >= 12
            ? "pm"
            : "am";


    hours =
        hours % 12 || 12;


    time.textContent =
        `${hours}:${minutes} ${period}`;

}


updateClock();


setInterval(
    updateClock,
    1000
);



/* =========================================
   ONLINE COUNT
========================================= */

function updateListeners() {

    const number =
        Math.floor(
            Math.random() * 15
        ) + 25;


    listeners.textContent =
        number;

}


updateListeners();


setInterval(
    updateListeners,
    30000
);



/* =========================================
   INITIAL SONG
========================================= */

loadSong(0);