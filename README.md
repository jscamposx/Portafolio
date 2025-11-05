# 📌 Portafolio – Jesús Campos

Portafolio personal diseñado para mostrar experiencia profesional, proyectos y habilidades en el desarrollo web. Construido con un stack moderno, optimizado para alto rendimiento y una experiencia fluida para el usuario.

## ✨ Funcionalidades Principales

**Diseño Moderno y Responsivo**

* Interfaz minimalista y elegante con Tailwind CSS.
* Modo Oscuro/Claro/Sistema con persistencia en localStorage.
* Totalmente adaptado a móviles, tablets y pantallas grandes.

**Alto Rendimiento**

* Construido con Astro (SSG) para cargas rápidas.
* Transiciones fluidas entre páginas usando Astro View Transitions.
* Service Worker (sw.js) con caché para navegación rápida.
* Optimización de imágenes y precarga del elemento principal.

**Arquitectura de Contenido**

* Datos centralizados en `src/data/projects.ts`.
* Rutas dinámicas para páginas de detalles.

**Funcionalidad Completa**

* Formulario de contacto funcional integrado con Formspree.
* SEO avanzado: sitemap.xml y metadata para redes sociales.
* Lightbox para ver imágenes de proyectos.

## 🛠️ Tecnologías Utilizadas

| Tecnología   | Descripción                                   |
| ------------ | --------------------------------------------- |
| Astro        | Framework principal para SSG                  |
| Tailwind CSS | Estilos basados en utilidades                 |
| TypeScript   | Tipado estático para componentes y datos      |
| Formspree    | Backend del formulario de contacto            |
| Render.com   | Hosting y despliegue estático                 |
| Vite         | Herramienta de desarrollo utilizada por Astro |

### Dependencias Clave (NPM)

* astro
* @astrojs/sitemap
* @tailwindcss/vite
* tailwindcss
* zod

## 📂 Estructura del Proyecto

```
📦 portafolio
├── dist/
├── public/
│   ├── icons/
│   ├── Proyectos/
│   └── ...
├── src/
│   ├── components/
│   │   ├── sections/
│   │   ├── NavBar.astro
│   │   └── TechChip.astro
│   ├── data/
│   │   └── projects.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── proyectos/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .gitignore
├── astro.config.mjs
├── package.json
├── render.yaml
└── tsconfig.json
```

## 🚀 Cómo Ejecutar el Proyecto

### Desde el código fuente

```bash
git clone https://github.com/jscamposx/portafolio.git
cd portafolio
```

```bash
npm install
```

```bash
npm run dev
```

Abrir en el navegador: `http://localhost:4321`

## ⌨️ Scripts Disponibles

| Comando         | Acción                          |
| --------------- | ------------------------------- |
| npm run dev     | Inicia modo desarrollo          |
| npm run build   | Genera la versión de producción |
| npm run preview | Previsualiza el build generado  |

## 📜 Licencia

Este proyecto está bajo la licencia MIT.
