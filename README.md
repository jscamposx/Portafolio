# Portafolio de Jesús Campos

Sitio personal desarrollado con [Astro](https://astro.build) para presentar experiencia profesional, proyectos destacados y canales de contacto.

## ✨ Características

- Hero modular con métricas, perfil y enlaces sociales.
- Sección de experiencia laboral y stack tecnológico administrado desde `siteConfig`.
- Listado de proyectos con rutas dinámicas (`/proyectos/[slug]`).
- Transiciones fluidas gracias a `ClientRouter` de Astro.

## 🗂️ Estructura principal

```text
.
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/
│   │   ├── ProjectCard.astro
│   │   └── sections/
│   │       ├── Contact.astro
│   │       ├── Experience.astro
│   │       ├── Hero.astro
│   │       ├── Projects.astro
│   │       └── Technologies.astro
│   ├── data/
│   │   ├── projects.ts            # Data de proyectos (cards / páginas dinámicas)
│   │   └── site/                  # Config (todas las secciones consolidadas en index.ts)
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       └── proyectos/
│           ├── [slug].astro
│           └── index.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando         | Acción                                                    |
| :-------------- | :-------------------------------------------------------- |
| `npm install`   | Instala las dependencias                                  |
| `npm run dev`   | Inicia el servidor de desarrollo en `http://localhost:4321` |
| `npm run build` | Genera la versión de producción en `./dist/`              |
| `npm run preview` | Previsualiza la build de producción                       |

## � Recursos

- [Documentación de Astro](https://docs.astro.build)
- [Guía de diseño de transiciones](https://docs.astro.build/en/guides/view-transitions/)
