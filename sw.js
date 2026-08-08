const CACHE_NAME = "wedding-invitation-v1";
const CORE_ASSETS = [
  "index.html",

  "css/style.css",
  "css/responsive.css",
  "css/animations.css",
  "css/countdown.css",
  "css/hero.css",
  "css/cards.css",
  "css/colors.css",

  "js/main.js",
  "js/countdown.js",
  "js/accordion.js",
  "js/animations.js",
  "js/music_control.js",
  "js/scroll.js",

  "assets/audio/theme2_alokhua.mp3",

  "assets/images/launch-image.png",
  "assets/images/left-leaf.png",
  "assets/images/right-decoration.png",
  "assets/images/top-flowers.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match("index.html")))
  );
});

self.addEventListener("install", event => {
    self.skipWaiting();
});
