const CACHE_NAME = "mowi-marinade-v1";

const FILES_TO_CACHE = [

    "./",
    "./index.html",

    "./css/style.css",
    "./css/mobile.css",

    "./js/app.js",
    "./js/calculator.js",
    "./js/history.js",
    "./js/language.js",
    "./js/settings.js",

    "./data/recipes.js",
    "./data/translations.js",

    "./manifest.json",

    "./assets/logo.svg"

];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(cache => cache.addAll(FILES_TO_CACHE))

    );

    self.skipWaiting();

});

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys =>

            Promise.all(

                keys.map(key => {

                    if(key !== CACHE_NAME){

                        return caches.delete(key);

                    }

                })

            )

        )

    );

    self.clients.claim();

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

            .then(response => {

                return response || fetch(event.request);

            })

    );

});