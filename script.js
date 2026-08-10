/* =========================================
   INDIAN ROADWAYS
   Spotify iFrame Embed
========================================= */


/* =========================================
   PLAYLIST
========================================= */

const PLAYLIST_ID =
    "0rmIgHUJdj45xxIl9zPd2I";


const PLAYLIST_URI =
    `spotify:playlist:${PLAYLIST_ID}`;



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


    document.getElementById(
        "time"
    ).textContent =
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

    const listeners =
        Math.floor(
            Math.random() * 15
        ) + 25;


    document.getElementById(
        "listeners"
    ).textContent =
        listeners;

}


updateListeners();


setInterval(
    updateListeners,
    30000
);



/* =========================================
   SPOTIFY IFRAME API
========================================= */

window.onSpotifyIframeApiReady =
    (IFrameAPI) => {


        console.log(
            "Spotify iFrame API ready"
        );


        const element =
            document.getElementById(
                "spotify-embed"
            );


        const options = {

            width: "100%",

            height: 152,

            uri: PLAYLIST_URI

        };


        const callback =
            (EmbedController) => {


                console.log(
                    "Spotify player ready"
                );


                /*
                 * Keep the controller available.
                 *
                 * Later we can use it to:
                 *
                 * - load another track
                 * - play
                 * - pause
                 * - react to playback events
                 */

                window.spotifyController =
                    EmbedController;



                /* =========================
                   PLAYBACK STARTED
                ========================== */

                EmbedController.addListener(
                    "playback_started",
                    (event) => {

                        console.log(
                            "Now playing:",
                            event.data.playingURI
                        );

                    }
                );

            };


        IFrameAPI.createController(
            element,
            options,
            callback
        );

    };