const CACHE_NAME = 'marccalc-v1';
const urlsToCache = [
  '/',
  '/marccalc-pwa/',
  '/marccalc-pwa/index.html',
  '/marccalc-pwa/manifest.json',
  '/marccalc-pwa/icon-192.png',
  '/marccalc-pwa/icon-512.png'
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
