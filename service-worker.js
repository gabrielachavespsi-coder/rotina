const CACHE_NAME = "jardim-da-rotina-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./gabriela-menu.html",
  "./maya-menu.html",
  "./manifest.json",
  "./icon-512.png",
  "./margaridas.jpg.jpeg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});