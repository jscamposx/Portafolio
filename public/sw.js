// Service Worker para caché agresivo de sitio estático
const CACHE_NAME = 'portafolio-v1';
const STATIC_CACHE = 'static-v1';
const IMAGE_CACHE = 'images-v1';

// Recursos críticos para cachear inmediatamente (solo en producción)
const CRITICAL_ASSETS = [
  '/',
  '/proyectos/'
];

// Instalar el service worker y cachear recursos críticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      // Cachear solo si los recursos existen (catch errors en dev)
      return cache.addAll(CRITICAL_ASSETS).catch((err) => {
        console.log('[SW] Error cacheando recursos (normal en dev):', err);
      });
    })
  );
  self.skipWaiting();
});

// Activar y limpiar cachés antiguos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE && cacheName !== IMAGE_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia de caché: Cache First con Network Fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo cachear requests del mismo origen
  if (url.origin !== location.origin) {
    // Para imágenes externas (Unsplash), usar caché con revalidación
    if (request.destination === 'image') {
      event.respondWith(
        caches.open(IMAGE_CACHE).then((cache) => {
          return cache.match(request).then((cachedResponse) => {
            const fetchPromise = fetch(request).then((networkResponse) => {
              cache.put(request, networkResponse.clone());
              return networkResponse;
            });
            return cachedResponse || fetchPromise;
          });
        })
      );
    }
    return;
  }

  // Para páginas HTML y assets estáticos: Cache First
  if (request.method === 'GET') {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request).then((networkResponse) => {
          // Solo cachear respuestas exitosas
          if (networkResponse.ok) {
            const cacheName = request.destination === 'image' ? IMAGE_CACHE : STATIC_CACHE;
            caches.open(cacheName).then((cache) => {
              cache.put(request, networkResponse.clone());
            });
          }
          return networkResponse;
        });
      })
    );
  }
});
