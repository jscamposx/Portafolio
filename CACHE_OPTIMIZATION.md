# 🚀 Optimizaciones de Caché y Performance

Este documento explica las optimizaciones implementadas para hacer tu portafolio **súper rápido** después de la primera carga.

## 📦 Estrategias Implementadas

### 1. **Service Worker (Caché Offline)** 🔄
**Archivo:** `public/sw.js`

El Service Worker cachea automáticamente:
- ✅ Todas las páginas visitadas
- ✅ Todas las imágenes (locales y de Unsplash)
- ✅ CSS y JavaScript
- ✅ Recursos estáticos

**Resultado:** Después de la primera visita, **todo se carga desde caché** (instantáneo, incluso sin internet).

### 2. **Prefetch Inteligente** ⚡
**Archivo:** `src/layouts/Layout.astro` (script al final)

Después de que el usuario carga la página principal:
- Automáticamente **precarga todas las páginas de proyectos** en segundo plano
- Usa `requestIdleCallback` para no bloquear el navegador
- Escalonado para no saturar la red

**Resultado:** Al hacer click en cualquier proyecto, **la página ya está cargada**.

### 3. **Headers de Caché HTTP** 📡
**Archivo:** `public/_headers`

Configuración para Render:
```
- HTML: Sin caché (siempre revalidar)
- Imágenes: 1 año de caché
- CSS/JS: 1 año de caché (tienen hash en el nombre)
- Service Worker: Sin caché (debe actualizarse)
```

### 4. **Preload de Imágenes Críticas** 🖼️
**Archivo:** `src/pages/index.astro`

Las primeras 2 imágenes de proyectos se precargan con:
```html
<link rel="preload" as="image" href="..." fetchpriority="high">
```

**Resultado:** Las imágenes del "above the fold" aparecen **instantáneamente**.

### 5. **Lazy Loading Inteligente** 💤
**Archivo:** `src/components/sections/Projects.astro`

- Primera imagen: `loading="eager"` (carga inmediata)
- Resto de imágenes: `loading="lazy"` (solo cuando se ven)

**Resultado:** Ahorra ancho de banda, carga más rápido.

## 🎯 Resultado Final

### Primera Visita:
1. Usuario carga la página principal
2. Service Worker se registra
3. Imágenes críticas se precargan
4. En segundo plano: prefetch de todas las páginas de proyectos

### Segunda Visita (o navegación):
1. **TODO se carga desde caché** (instantáneo)
2. No hay requests de red (excepto revalidación en background)
3. Funciona **offline**

## 📊 Cómo Verificar que Funciona

### En Chrome DevTools:

1. **Service Worker:**
   - Abrir DevTools → Application → Service Workers
   - Deberías ver "sw.js" registrado y activo

2. **Caché:**
   - Application → Cache Storage
   - Verás: "static-v1", "images-v1"
   - Dentro hay todas las páginas e imágenes visitadas

3. **Network:**
   - Recargar la página
   - Verás "from ServiceWorker" o "from disk cache"
   - Sin requests HTTP reales

4. **Prefetch:**
   - Network → Filter por "Prefetch"
   - Verás los links precargados después de ~2 segundos

## 🔧 Mantenimiento

### Actualizar la Caché:
Si haces cambios importantes, actualiza la versión en `public/sw.js`:
```javascript
const CACHE_NAME = 'portafolio-v2'; // Cambiar versión
const STATIC_CACHE = 'static-v2';
const IMAGE_CACHE = 'images-v2';
```

### Deshabilitar Service Worker (desarrollo):
En DevTools → Application → Service Workers → "Bypass for network"

## 🌐 Deploy en Render

Render automáticamente:
1. Leerá `public/_headers` para configurar caché HTTP
2. Servirá `public/sw.js` como archivo estático
3. El Service Worker se registrará en el navegador del usuario

## 🚫 Mobile: View Transitions Deshabilitadas

En mobile (≤768px):
- View Transitions **deshabilitadas** (navegación instantánea)
- Service Worker + Prefetch hacen que sea **súper rápido**
- Sin lag, sin animaciones costosas

En desktop:
- View Transitions **habilitadas** (bonitas animaciones)
- Caché hace que las transiciones sean fluidas

## 💡 Tips Adicionales

1. **Optimiza tus imágenes locales:**
   - Usa formato WebP o AVIF
   - Máximo 800px de ancho para cards
   - Compresión 75-80%

2. **Añade más recursos al prefetch:**
   En `sw.js`, añade a `CRITICAL_ASSETS`:
   ```javascript
   const CRITICAL_ASSETS = [
     '/',
     '/proyectos/',
     '/tu-nueva-pagina/',
     '/styles/global.css'
   ];
   ```

3. **Monitorea el tamaño de caché:**
   - En DevTools → Application → Storage
   - Si crece mucho, el navegador puede limpiarla

## 📈 Métricas Esperadas

- **Primera carga:** 1-2 segundos
- **Segunda carga:** < 100ms (desde caché)
- **Navegación entre páginas:** Instantánea
- **Offline:** Todo funciona

---

¡Tu portafolio ahora es una PWA con caché agresivo! 🎉
