const CACHE_NAME = 'streetwearx-v1';
const PRECACHE_URLS = [
  '/Street-Wear-X/',
  '/Street-Wear-X/index.html',
  '/Street-Wear-X/manifest.json',
  '/Street-Wear-X/icon-192.png',
  '/Street-Wear-X/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => key !== CACHE_NAME && caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});

        return new Response('Offline', { status: 503 });
      })
    )
  );
});
