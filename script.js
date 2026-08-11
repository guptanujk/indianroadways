/* =================================
   DELUXE ROADWAYS
   MUSIC PLAYER
================================= */


/* =================================
   PLAYER STATE
================================= */

let player = null;

let currentIndex = 0;

let currentVideoIndex = 0;

let progressTimer = null;

let ready = false;


/* =================================
   SONGS
================================= */

const songs = [

    // {
    //     title: "Achchha Sil A Diya Toone Mere Pyar Ka",
    //     artist: "Sonu Nigam",

    //     videos: [
    //         "O6MmErUtO9s"
    //     ]
    // },


    {
        title: "Jeeta Tha Jiske Liye",
        artist: "Kumar Sanu, Alka Yagnik",

        videos: [
            "fa5Yzxdh8e4"
        ]
    },


    // {
    //     title: "Mujhse Mohabbat Ka",
    //     artist: "Kumar Sanu, Alka Yagnik",

    //     videos: [
    //         "5MIGQBpVeqs",
    //         "2sebRYy5VSw"
    //     ]
    // },


    // {
    //     title: "Tumsa Koi Pyaara",
    //     artist: "Kumar Sanu, Alka Yagnik",

    //     videos: [
    //         "fXzm9F4S3d0"
    //     ]
    // },


    // {
    //     title: "Woh Meri Neend Mera Chain",
    //     artist: "Sadhana Sargam, Kumar Sanu",

    //     videos: [
    //         "qEzlKXHy-8g"
    //     ]
    // },


    // {
    //     title: "Saaton Janam Main Tere",
    //     artist: "Kumar Sanu, Alka Yagnik",

    //     videos: [
    //         "DvJFq1FUb4Q"
    //     ]
    // },


    // {
    //     title: "Oye Raju",
    //     artist: "Anand Raj Anand",

    //     videos: [
    //         "9aAsKB5cu9s"
    //     ]
    // },


    // {
    //     title: "Bahut Pyar Karte Hai",
    //     artist: "S. P. Balasubrahmanyam",

    //     videos: [
    //         "XEggdtDp_4c"
    //     ]
    // },


    // {
    //     title: "Ehsaas Ka Sangeet Sunayee Nahi Deta",
    //     artist: "Altaf Raja, Kumar Sanu",

    //     videos: [
    //         "YCEyTTg16Os"
    //     ]
    // },


    // {
    //     title: "Teri Umeed Tera Intezaar",
    //     artist: "Kumar Sanu, Sadhana Sargam",

    //     videos: [
    //         "i1IsLVz6T9Q"
    //     ]
    // },


    // {
    //     title: "Tumse Milne Ko Dil",
    //     artist: "Alka Yagnik, Kumar Sanu",

    //     videos: [
    //         "Q97LLDLxE98"
    //     ]
    // },


    // {
    //     title: "Ek Sanam Chahiye Aashiqui Ke Liye",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "eY34Z5OHUFI",
    //         "5EZagydXjNU"
    //     ]
    // },


    // {
    //     title: "Tu Pyar Hai Kisi Aur Ka",
    //     artist: "Babla Mehta, Anuradha Paudwal",

    //     videos: [
    //         "CTNgz5gb3D8"
    //     ]
    // },


    // {
    //     title: "Sochenge Tumhe Pyar",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "eC5riDNidOg"
    //     ]
    // },


    // {
    //     title: "Raah Mein Unse Mulaqat",
    //     artist: "Kumar Sanu, Alka Yagnik",

    //     videos: [
    //         "hyFDEoFEPWY"
    //     ]
    // },


    // {
    //     title: "Main Duniya Bhula Doonga",
    //     artist: "Anuradha Paudwal, Kumar Sanu",

    //     videos: [
    //         "jLOlqkKxhnI"
    //     ]
    // },


    // {
    //     title: "Tumhein Apna Banane Ki Kasam Khai Hai",
    //     artist: "Anuradha Paudwal, Kumar Sanu",

    //     videos: [
    //         "SR-5gXqfihc",
    //         "LMpSZWT1O78"
    //     ]
    // },


    // {
    //     title: "Dulhe Ka Sehra",
    //     artist: "Nusrat Fateh Ali Khan",

    //     videos: [
    //         "8uUhxTs3UUQ"
    //     ]
    // },


    // {
    //     title: "Maine Pyar Tumhi Se Kiya Hai",
    //     artist: "Kumar Sanu, Alka Yagnik",

    //     videos: [
    //         "pjdm51BWahI"
    //     ]
    // },


    // {
    //     title: "Ab Tere Bin",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "rXHY4Cv9cA8"
    //     ]
    // },


    // {
    //     title: "Kitna Haseen Chehra",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "8hy7pg8wB-c",
    //         "qGOTe3KmCdY"
    //     ]
    // },


    // {
    //     title: "Tujhko Na Dekhun",
    //     artist: "Udit Narayan, Shailendra Singh",

    //     videos: [
    //         "ggxJLf_alRk"
    //     ]
    // },


    // {
    //     title: "Tum Se Achcha Kaun Hai",
    //     artist: "Tauseef Akhtar",

    //     videos: [
    //         "4BFUDVL2FVE"
    //     ]
    // },


    // {
    //     title: "Tum Dil Ki Dhadkan Mein",
    //     artist: "Kumar Sanu, Alka Yagnik",

    //     videos: [
    //         "voxzKOoudpc"
    //     ]
    // },


    // {
    //     title: "Sab Kuchh Bhula Diya",
    //     artist: "Sonu Nigam",

    //     videos: [
    //         "414Y6ISZHmU"
    //     ]
    // },


    // {
    //     title: "Dheere Dheere Pyar Ko",
    //     artist: "Alka Yagnik, Kumar Sanu",

    //     videos: [
    //         "pY12jrcJisA"
    //     ]
    // },


    // {
    //     title: "Jeeye To Jeeye Kaise",
    //     artist: "Pankaj Udhas",

    //     videos: [
    //         "_Aj1CVyMWn0",
    //         "wFYj1XpqlmE"
    //     ]
    // },


    // {
    //     title: "Hum Lakh Chupaye Pyar Magar",
    //     artist: "Kumar Sanu, Asha Bhosle",

    //     videos: [
    //         "wuLJtA0uJro"
    //     ]
    // },


    // {
    //     title: "Nahin Yeh Ho Nahin Sakta",
    //     artist: "Kumar Sanu, Alka Yagnik",

    //     videos: [
    //         "ooGFsfsSiYo"
    //     ]
    // },


    // {
    //     title: "Kitna Pyaara Tujhe Rabne Banaya",
    //     artist: "Alka Yagnik, Udit Narayan",

    //     videos: [
    //         "xl3udO2Zo4Y"
    //     ]
    // },


    // {
    //     title: "Hum Pyaar Hai Tumhare",
    //     artist: "Kumar Sanu, Alka Yagnik",

    //     videos: [
    //         "4ImdbyqnH8w"
    //     ]
    // },


    // {
    //     title: "Ek Ladki Ko Dekha",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "Gm6djUDVqf8"
    //     ]
    // },


    // {
    //     title: "Tere Dar Par Sanam",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "5dWbn_qER3s"
    //     ]
    // },


    // {
    //     title: "Chura Ke Dil Mera",
    //     artist: "Alka Yagnik, Kumar Sanu",

    //     videos: [
    //         "kMQsJyd11YM",
    //         "Yqj1_V90KJo"
    //     ]
    // },


    // {
    //     title: "Tu Meri Zindagi Hai",
    //     artist: "Kumar Sanu, Anuradha Paudwal",

    //     videos: [
    //         "oEg_iXEWlt4"
    //     ]
    // },


    // {
    //     title: "Tere Dard Se Dil",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "TgHYW8ubFko"
    //     ]
    // },


    // {
    //     title: "Hum Yaar Hai Tumhare",
    //     artist: "Udit Narayan",

    //     videos: [
    //         "7Ny77gTsWGk"
    //     ]
    // },


    // {
    //     title: "Aitbaar Nahi Karna",
    //     artist: "Abhijeet Bhattacharya",

    //     videos: [
    //         "HoMSu1iw0Zw"
    //     ]
    // },


    // {
    //     title: "Dekha Hai Pehli Baar",
    //     artist: "Alka Yagnik",

    //     videos: [
    //         "WAgJ8KM5AVQ",
    //         "FGUzNoJok_g"
    //     ]
    // },


    // {
    //     title: "Aankh Hai Bhari Bhari",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "oU7kpTgrUlE"
    //     ]
    // },


    // {
    //     title: "Kya Karte They Sajna",
    //     artist: "Udit Narayan",

    //     videos: [
    //         "Zi9UBJQMz3I",
    //         "R4xhEUMQiQk"
    //     ]
    // },


    // {
    //     title: "Tum To Thehre Pardesi",
    //     artist: "Altaf Raja",

    //     videos: [
    //         "lRBIcaSV-Ns"
    //     ]
    // },


    // {
    //     title: "Chehra Kya Dekhte Ho",
    //     artist: "Kumar Sanu, Asha Bhosle",

    //     videos: [
    //         "9v2bq2JHt4I"
    //     ]
    // },


    // {
    //     title: "Tu Shayar Hai Main Teri Shayari",
    //     artist: "Alka Yagnik, Kumar Sanu",

    //     videos: [
    //         "e0b8UD-DBQ8"
    //     ]
    // },


    // {
    //     title: "Paas Woh Aane Lage",
    //     artist: "Kumar Sanu, Alka Yagnik",

    //     videos: [
    //         "HOAF8vcxXe4"
    //     ]
    // },


    // {
    //     title: "Chhupana Bhi Nahin Aata",
    //     artist: "Vinod Rathod",

    //     videos: [
    //         "fg9G1dacXjk"
    //     ]
    // },


    // {
    //     title: "Is Tarah Aashiqui Ka",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "cVT3BKkPCc4"
    //     ]
    // },


    // {
    //     title: "Tumse Milna",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "ar_m3IbjS4c"
    //     ]
    // },


    // {
    //     title: "Kyo Kisi Ko",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "MgkfGGNbkAU"
    //     ]
    // },


    // {
    //     title: "Dil Ka Aalam",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "BaAoZA0fup0"
    //     ]
    // },


    // {
    //     title: "Pehli Pehli Baar Mohabbat Ki Hai",
    //     artist: "Kumar Sanu, Alka Yagnik",

    //     videos: [
    //         "LMrgv7bRLQM"
    //     ]
    // },


    // {
    //     title: "Sanam Bewafa",
    //     artist: "Lata Mangeshkar, Vipin Sachdeva",

    //     videos: [
    //         "PuGs5Ve1gjo"
    //     ]
    // },


    // {
    //     title: "Kaash Kahin Aisa Hota",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "Enn1j99vEWo"
    //     ]
    // },


    // {
    //     title: "Aawara Hawa Ka Jhonka Hoon",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "8l0f5Pdo17A"
    //     ]
    // },


    // {
    //     title: "Love Tujhe Love Main Karta Hoon",
    //     artist: "Kumar Sanu, Alka Yagnik",

    //     videos: [
    //         "GxaTSDnI71w"
    //     ]
    // },


    // {
    //     title: "Tere Dard Se Dil Aabad Raha",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "XWKazQwFFdY"
    //     ]
    // },


    // {
    //     title: "Dil Cheer Ke Dekh",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "wJTFYAsaLr8"
    //     ]
    // },


    // {
    //     title: "Premi Aashiq Aawara",
    //     artist: "Kumar Sanu",

    //     videos: [
    //         "juOcTzePoa4"
    //     ]
    // },


    // {
    //     title: "Dil Diwana",
    //     artist: "Kumar Sanu, Alka Yagnik",

    //     videos: [
    //         "Mfeg92XPXik"
    //     ]
    // }

];


/* =================================
   ELEMENTS
================================= */

const elements = {

    songName:
        document.getElementById("songName"),

    artist:
        document.getElementById("artist"),

    albumArt:
        document.getElementById("albumArt"),

    progress:
        document.getElementById("progress"),

    progressBar:
        document.getElementById("progressBar"),

    currentTime:
        document.getElementById("currentTime"),

    duration:
        document.getElementById("duration"),

    playBtn:
        document.getElementById("playBtn"),

    previousBtn:
        document.getElementById("previousBtn"),

    nextBtn:
        document.getElementById("nextBtn"),

    time:
        document.getElementById("time"),

    listeners:
        document.getElementById("listeners")

};


/* =================================
   INITIAL VALIDATION
================================= */

if (!songs.length) {

    elements.songName.textContent =
        "No songs available";

    elements.artist.textContent =
        "—";

}


/* =================================
   YOUTUBE API
================================= */

function onYouTubeIframeAPIReady() {

    if (!songs.length) {
        return;
    }


    player = new YT.Player(
        "youtube-player",
        {

            width: "1",
            height: "1",

            videoId:
                songs[0].videos[0],

            playerVars: {

                autoplay: 0,

                controls: 0,

                playsinline: 1,

                rel: 0,

                origin:
                    window.location.origin

            },

            events: {

                onReady:
                    onPlayerReady,

                onStateChange:
                    onPlayerStateChange,

                onError:
                    onPlayerError

            }

        }
    );

}


/* =================================
   PLAYER READY
================================= */

function onPlayerReady() {

    ready = true;

    loadSong(
        currentIndex,
        false
    );

}


/* =================================
   LOAD SONG
================================= */

function loadSong(
    index,
    autoplay = true,
    videoIndex = 0
) {

    if (
        !player ||
        !ready ||
        !songs.length
    ) {

        return;

    }


    if (
        index < 0 ||
        index >= songs.length
    ) {

        index = 0;

    }


    const song =
        songs[index];


    if (
        !song ||
        !Array.isArray(song.videos) ||
        !song.videos.length
    ) {

        console.error(
            "Invalid song:",
            song
        );

        return;

    }


    currentIndex = index;

    currentVideoIndex = videoIndex;


    const videoId =
        song.videos[currentVideoIndex];


    if (!videoId) {

        console.error(
            "Invalid YouTube video ID"
        );

        return;

    }


    /* =================================
       UPDATE SONG INFORMATION
    ================================== */

    elements.songName.textContent =
        song.title || "Unknown Song";


    elements.artist.textContent =
        song.artist || "Unknown Artist";


    /* =================================
       UPDATE ALBUM ART
    ================================== */

    elements.albumArt.src =
        `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;


    elements.albumArt.onerror =
        function () {

            this.src =
                "assets/songs/Hindi/song-image/gmo.svg";

        };


    /* =================================
       RESET PROGRESS
    ================================== */

    elements.progress.style.width =
        "0%";


    elements.progressBar.setAttribute(
        "aria-valuenow",
        "0"
    );


    elements.currentTime.textContent =
        "0:00";


    elements.duration.textContent =
        "0:00";


    stopProgress();


    /* =================================
       RESET PLAY BUTTON
    ================================== */

    elements.playBtn.textContent =
        "▶";

    elements.playBtn.setAttribute(
        "aria-label",
        "Play"
    );


    /* =================================
       LOAD YOUTUBE VIDEO
    ================================== */

    if (autoplay) {

        player.loadVideoById(
            videoId
        );

    }

    else {

        player.cueVideoById(
            videoId
        );

    }

}


/* =================================
   PLAY / PAUSE
================================= */

function togglePlay() {

    if (
        !player ||
        !ready
    ) {

        return;

    }


    const state =
        player.getPlayerState();


    if (
        state ===
        YT.PlayerState.PLAYING
    ) {

        player.pauseVideo();

    }

    else {

        player.playVideo();

    }

}


/* =================================
   YOUTUBE STATE
================================= */

function onPlayerStateChange(
    event
) {

    if (!elements.playBtn) {
        return;
    }


    /* =================================
       PLAYING
    ================================== */

    if (
        event.data ===
        YT.PlayerState.PLAYING
    ) {

        elements.playBtn.textContent =
            "Ⅱ";

        elements.playBtn.setAttribute(
            "aria-label",
            "Pause"
        );

        startProgress();

    }


    /* =================================
       PAUSED
    ================================== */

    else if (
        event.data ===
        YT.PlayerState.PAUSED
    ) {

        elements.playBtn.textContent =
            "▶";

        elements.playBtn.setAttribute(
            "aria-label",
            "Play"
        );

        stopProgress();

        updateProgress();

    }


    /* =================================
       VIDEO ENDED
    ================================== */

    else if (
        event.data ===
        YT.PlayerState.ENDED
    ) {

        elements.playBtn.textContent =
            "▶";

        elements.playBtn.setAttribute(
            "aria-label",
            "Play"
        );

        stopProgress();

        nextSong();

    }

}


/* =================================
   NEXT SONG
================================= */

function nextSong() {

    if (
        !songs.length
    ) {

        return;

    }


    currentIndex =
        (
            currentIndex + 1
        ) %
        songs.length;


    currentVideoIndex = 0;


    loadSong(
        currentIndex,
        true
    );

}


/* =================================
   PREVIOUS SONG
================================= */

function previousSong() {

    if (
        !player ||
        !ready ||
        !songs.length
    ) {

        return;

    }


    /*
     * If we're more than 5 seconds
     * into the song, restart it.
     */

    if (
        player.getCurrentTime() > 5
    ) {

        player.seekTo(
            0,
            true
        );

        return;

    }


    currentIndex =
        (
            currentIndex -
            1 +
            songs.length
        ) %
        songs.length;


    currentVideoIndex = 0;


    loadSong(
        currentIndex,
        true
    );

}


/* =================================
   START PROGRESS
================================= */

function startProgress() {

    stopProgress();


    progressTimer =
        setInterval(
            updateProgress,
            500
        );

}


/* =================================
   STOP PROGRESS
================================= */

function stopProgress() {

    if (
        progressTimer !== null
    ) {

        clearInterval(
            progressTimer
        );

        progressTimer = null;

    }

}


/* =================================
   UPDATE PROGRESS
================================= */

function updateProgress() {

    if (
        !player ||
        !ready
    ) {

        return;

    }


    const current =
        player.getCurrentTime();


    const total =
        player.getDuration();


    if (
        !total ||
        total <= 0
    ) {

        return;

    }


    let percentage =
        (
            current /
            total
        ) * 100;


    percentage =
        Math.max(
            0,
            Math.min(
                100,
                percentage
            )
        );


    elements.progress.style.width =
        `${percentage}%`;


    elements.progressBar.setAttribute(
        "aria-valuenow",
        Math.round(percentage)
    );


    elements.currentTime.textContent =
        formatTime(current);


    elements.duration.textContent =
        formatTime(total);

}


/* =================================
   FORMAT TIME
================================= */

function formatTime(seconds) {

    if (
        !Number.isFinite(seconds) ||
        seconds < 0
    ) {

        return "0:00";

    }


    seconds =
        Math.floor(seconds);


    const minutes =
        Math.floor(
            seconds / 60
        );


    const remaining =
        seconds % 60;


    return (
        minutes +
        ":" +
        String(
            remaining
        ).padStart(
            2,
            "0"
        )
    );

}


/* =================================
   SEEK
================================= */

function seekToPosition(
    clientX
) {

    if (
        !player ||
        !ready
    ) {

        return;

    }


    const rect =
        elements.progressBar
            .getBoundingClientRect();


    if (!rect.width) {
        return;
    }


    let percentage =
        (
            clientX -
            rect.left
        ) /
        rect.width;


    percentage =
        Math.max(
            0,
            Math.min(
                1,
                percentage
            )
        );


    const duration =
        player.getDuration();


    if (
        duration &&
        duration > 0
    ) {

        player.seekTo(
            duration *
            percentage,
            true
        );

        updateProgress();

    }

}


/* =================================
   PROGRESS BAR CLICK
================================= */

elements.progressBar.addEventListener(
    "click",
    function (event) {

        seekToPosition(
            event.clientX
        );

    }
);


/* =================================
   PROGRESS BAR KEYBOARD
================================= */

elements.progressBar.addEventListener(
    "keydown",
    function (event) {

        if (
            !player ||
            !ready
        ) {

            return;

        }


        const duration =
            player.getDuration();


        if (
            !duration ||
            duration <= 0
        ) {

            return;

        }


        const current =
            player.getCurrentTime();


        const jump =
            5;


        if (
            event.key ===
            "ArrowRight"
        ) {

            event.preventDefault();

            player.seekTo(
                Math.min(
                    duration,
                    current + jump
                ),
                true
            );

        }


        else if (
            event.key ===
            "ArrowLeft"
        ) {

            event.preventDefault();

            player.seekTo(
                Math.max(
                    0,
                    current - jump
                ),
                true
            );

        }

    }
);


/* =================================
   YOUTUBE ERROR
================================= */

function onPlayerError(
    event
) {

    console.error(
        "YouTube error:",
        event.data
    );


    const song =
        songs[currentIndex];


    /*
     * Try another YouTube ID
     * if the current song has
     * multiple video options.
     */

    if (
        song &&
        Array.isArray(song.videos) &&
        currentVideoIndex <
            song.videos.length - 1
    ) {

        currentVideoIndex++;

        loadSong(
            currentIndex,
            true,
            currentVideoIndex
        );

        return;

    }


    /* =================================
       DISPLAY ERROR
    ================================== */

    if (
        event.data === 101 ||
        event.data === 150
    ) {

        elements.artist.textContent =
            "This video cannot be played here";

    }

    else if (
        event.data === 100
    ) {

        elements.artist.textContent =
            "Video unavailable";

    }

    else if (
        event.data === 153
    ) {

        elements.artist.textContent =
            "YouTube requires a valid page referrer";

    }

    else {

        elements.artist.textContent =
            `YouTube playback error (${event.data})`;

    }


    stopProgress();


    elements.playBtn.textContent =
        "▶";

    elements.playBtn.setAttribute(
        "aria-label",
        "Play"
    );

}


/* =================================
   CLOCK
================================= */

function updateClock() {

    const now =
        new Date();


    let hours =
        now.getHours();


    const minutes =
        String(
            now.getMinutes()
        ).padStart(
            2,
            "0"
        );


    const period =
        hours >= 12
            ? "pm"
            : "am";


    hours =
        hours % 12 ||
        12;


    elements.time.textContent =
        `${hours}:${minutes} ${period}`;

}


updateClock();


setInterval(
    updateClock,
    1000
);


/* =================================
   LISTENER COUNT
================================= */

function updateListeners() {

    /*
     * Decorative listener count.
     * This is intentionally not real-time.
     */

    const base =
        34;


    const variation =
        Math.floor(
            Math.random() * 7
        ) - 3;


    elements.listeners.textContent =
        Math.max(
            1,
            base + variation
        );

}


updateListeners();


setInterval(
    updateListeners,
    30000
);


/* =================================
   BUTTON EVENTS
================================= */

elements.playBtn.addEventListener(
    "click",
    togglePlay
);


elements.nextBtn.addEventListener(
    "click",
    nextSong
);


elements.previousBtn.addEventListener(
    "click",
    previousSong
);


/* =================================
   KEYBOARD SHORTCUTS
================================= */

document.addEventListener(
    "keydown",
    function (event) {

        /*
         * Don't interfere with typing
         * into inputs or other controls.
         */

        const tag =
            document.activeElement.tagName;


        if (
            tag === "INPUT" ||
            tag === "TEXTAREA" ||
            tag === "SELECT"
        ) {

            return;

        }


        if (
            event.code === "Space"
        ) {

            event.preventDefault();

            togglePlay();

        }


        else if (
            event.code === "ArrowRight"
        ) {

            nextSong();

        }


        else if (
            event.code === "ArrowLeft"
        ) {

            previousSong();

        }

    }
);


/* =================================
   CLEANUP
================================= */

window.addEventListener(
    "beforeunload",
    function () {

        stopProgress();

    }
);