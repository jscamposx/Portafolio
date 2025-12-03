// Service Worker para caché agresivo de sitio estático
const CACHE_VERSION = 'v3';
const CACHE_NAME = `portafolio-${CACHE_VERSION}`;
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const IMAGE_CACHE = `images-${CACHE_VERSION}`;
const KNOWN_CACHES = [CACHE_NAME, STATIC_CACHE, IMAGE_CACHE];

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
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((cacheName) => {
          if (!KNOWN_CACHES.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );

      // Forzar que los clientes abiertos recarguen y tomen la nueva versión del SW
      const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      await Promise.all(
        clients.map((client) => {
          if ('navigate' in client) {
            return client.navigate(client.url);
          }
        })
      );
    })()
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
            if (cachedResponse) {
              return cachedResponse;
            }
            return fetch(request).then((networkResponse) => {
              // Clonar ANTES de guardar en caché y retornar
              if (networkResponse.ok) {
                const responseClone = networkResponse.clone();
                cache.put(request, responseClone);
              }
              return networkResponse;
            });
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
            // Clonar ANTES de guardar en caché para evitar que el body sea consumido
            const responseClone = networkResponse.clone();
            caches.open(cacheName).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        });
      })
    );
  }
});
