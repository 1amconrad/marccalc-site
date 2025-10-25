const CACHE_NAME = 'marccalc-v1';
const urlsToCache = [
  '/',
  '/marccalc-app/',
  '/marccalc-app/index.html',
  '/marccalc-app/manifest.json',
  '/marccalc-app/icon-192.png',
  '/marccalc-app/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
