const CACHE_NAME = "wedding-invitation-v43";
const CORE_ASSETS = [
  "index.html",

  "css/style.css",
  "css/responsive.css",
  "css/animations.css",
  "css/countdown.css",
  "css/hero.css",
  "css/cards.css",
  "css/colors.css",
  "css/envelope.css",
  "css/envelope-background..css",

  "js/main.js",
  "js/countdown.js",
  "js/accordion.js",
  "js/animations.js",
  "js/music_control.js",
  "js/scroll.js",
  "js/envelope.js",

  "assets/audio/theme2_alokhua.mp3",

  "assets/images/launch-image.png",
  "assets/images/left-leaf.png",
  "assets/images/right-decoration.png",
  "assets/images/top-flowers.png"
  "assets/images/wedding_mondop.png"
  "assets/images/reception_mondop.png"
  "assets/images/duo_cover_image_squire.png"

  "assets/images/first_connection.png"
  "assets/images/getting_to_know.png"
  "assets/images/first_meet.png"
  "assets/images/love_begin.png"
  "assets/images/proposal.png"
  "assets/images/infinite.png"
  "assets/images/gamusa_fold.png"
  "assets/images/leaf_left.png"
  "assets/images/leaf_right.png"
  "assets/images/pink_flower.png"
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
