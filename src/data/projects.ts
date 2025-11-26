// Fuente única de datos de proyectos
export interface Project {
  slug: string;
  title: string;
  description: string;
  year: number;
  client?: string;
  tags: string[];
  heroImage: string;
  accent: string;
  links: { label: string; url: string }[];
  technologies: string[];
  sections: { heading: string; body: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'viadca',
    title: 'Viadca - Aplicación web de viajes',
    description:
      'Landing y dashboard para crear y gestionar paquetes de viaje, optimizando planificación y operación en una plataforma moderna y escalable.',
    year: 2025,
    client: 'Viadca',
    tags: ['Dashboard', 'Gestión de viajes', 'Plataforma SaaS', 'E-commerce'],
    heroImage: '/Proyectos/card-proyect1.avif',
    accent: '#2563eb',
    featured: true,
    links: [
      { label: 'Ver sitio', url: 'https://www.viadca.app/' },
      { label: 'Repositorio Backend', url: 'https://github.com/jscamposx/viadca-backv1' }
    ],
    technologies: ['React', 'NestJS', 'AWS', 'Tailwind CSS'],
    sections: [
      {
        heading: 'Reto',
        body: 'Las agencias de viajes necesitaban una plataforma integral que permitiera gestionar todo el ciclo de vida de los paquetes turísticos: desde la creación y cotización hasta la venta final, con múltiples niveles de usuarios (administradores, mayoristas, agentes) y una experiencia optimizada tanto para la operación interna como para la venta al cliente final.'
      },
      {
        heading: 'Dashboard Administrativo',
        body: 'Desarrollé un dashboard completo con módulos para control de usuarios con diferentes roles y permisos, creación y edición de paquetes de viaje con gestión de itinerarios, destinos, precios y disponibilidad. Incluye sistema de mayoristas para distribución B2B, papelera para recuperación de datos eliminados, monitor de actividad y métricas en tiempo real, y configuración completa del sitio con personalización de marca y SEO.'
      },
      {
        heading: 'Landing Page',
        body: 'Diseñé e implementé una landing page moderna y atractiva que sirve como punto de entrada para los clientes finales. La página incluye presentación de paquetes destacados, búsqueda y filtrado de viajes, integración con el sistema de reservas, optimización SEO para posicionamiento en buscadores, y diseño responsive que garantiza una experiencia óptima en todos los dispositivos.'
      },
      {
        heading: 'Arquitectura Técnica',
        body: 'Frontend construido con React y Tailwind CSS para una interfaz moderna y reactiva. Backend robusto desarrollado en NestJS con arquitectura modular y escalable. Infraestructura desplegada en AWS aprovechando servicios cloud para escalabilidad y rendimiento. Sistema de autenticación y autorización por roles, APIs RESTful documentadas, y base de datos optimizada para consultas complejas de paquetes y disponibilidad.'
      },
      {
        heading: 'Características Destacadas',
        body: 'Sistema completo de gestión de paquetes con itinerarios detallados, múltiples categorías de precios y control de disponibilidad. Panel de mayoristas para gestión B2B con precios diferenciados. Sistema de roles y permisos granular para diferentes tipos de usuarios. Dashboard de monitoreo con métricas de ventas, reservas y comportamiento de usuarios. Configuración flexible de SEO y metadata para cada página. Sistema de papelera con recuperación de datos. Diseño escalable preparado para crecimiento futuro.'
      },
      {
        heading: 'Impacto',
        body: 'La plataforma centraliza toda la operación de la agencia en un solo lugar, eliminando el uso de múltiples herramientas desconectadas. Reduce significativamente el tiempo de creación y publicación de nuevos paquetes turísticos. Facilita la distribución B2B a través del sistema de mayoristas. Mejora la experiencia del cliente final con una interfaz moderna y fácil de usar. Proporciona visibilidad completa del negocio mediante el dashboard de monitoreo.'
      }
    ]
  },
  {
    slug: 'foodtech',
    title: 'FoodTech - Aplicación web de comida',
    description:
      'Plataforma de comercio electrónico para restaurante con gestión de platillos, usuarios, eventos y sistema de pagos.',
    year: 2024,
    client: 'FoodTech',
    tags: ['E-commerce', 'Restaurante', 'Gestión de contenido', 'Pagos'],
    heroImage: '/Proyectos/card-proyect2.avif',
    accent: '#f97316',
    featured: true,
    links: [{ label: 'Repositorio', url: 'https://github.com/jscamposx/FoodTech' }],
    technologies: ['PHP', 'Sass', 'AWS', 'HTML'],
    sections: [
      {
        heading: 'Reto',
        body: 'FoodTech necesitaba una plataforma integral para digitalizar sus operaciones, permitiendo la gestión eficiente de su menú, la organización de eventos y un sistema de pedidos en línea con pasarelas de pago seguras, buscando aumentar las ventas digitales.'
      },
      {
        heading: 'Enfoque',
        body: 'Desarrollé una aplicación e-commerce completa con React y Tailwind CSS para el frontend, y Node.js con PostgreSQL para el backend. Integré Stripe y MercadoPago para procesamiento de pagos seguros. Implementé gestión de platillos, usuarios con diferentes roles, calendario de eventos y sistema de pedidos en tiempo real. Desplegado en AWS con arquitectura escalable.'
      },
      {
        heading: 'Impacto',
        body: 'La plataforma logró un aumento del 35% en ventas digitales durante el primer año. Optimizó la experiencia de compra de los clientes y centralizó la gestión de operaciones del restaurante, reduciendo significativamente el tiempo de administración del menú y mejorando el control de inventarios y eventos.'
      }
    ]
  },
  {
    slug: 'sitio-marca-lumen',
    title: 'Arauco - Portal de egresados',
    description:
      'Portal de egresados que redujo la carga administrativa en 50% mediante automatización de procesos y gestión de datos.',
    year: 2023,
    tags: ['Portal web', 'Automatización', 'Gestión de datos'],
    heroImage:
      '/Proyectos/card-proyect3.avif',
    accent: '#0b7e91',
    featured: true,
    links: [{ label: 'Repositorio', url: 'https://github.com/jscamposx/lumen' }],
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'AWS'],
    sections: [
      {
        heading: 'Reto',
        body: 'Arauco necesitaba un portal de egresados que automatizara procesos administrativos manuales, reduciendo tiempos de gestión y mejorando la comunicación con ex-alumnos.'
      },
      {
        heading: 'Enfoque',
        body: 'Desarrollé una arquitectura escalable con Vue.js en el frontend y Node.js en el backend, utilizando MongoDB para el almacenamiento de datos. Implementé el despliegue en AWS con CI/CD automatizado.'
      },
      {
        heading: 'Impacto',
        body: 'Reducción del 50% en tareas administrativas mediante automatización de flujos de trabajo, mejorando significativamente la eficiencia operativa del departamento.'
      }
    ]
  },
  {
    slug: 'one-code-landing',
    title: 'One Code - Landing page',
    description:
      'Landing page moderna y minimalista para empresa tech, con diseño limpio y enfoque en conversión.',
    year: 2025,
    client: 'One Code',
    tags: ['Landing page', 'Diseño web', 'Tech'],
    heroImage:
      '/Proyectos/card-proyect4.avif',
    accent: '#06b6d4',
    links: [{ label: 'Repositorio', url: 'https://github.com/jscamposx/onecode-landing' }],
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    sections: [
      {
        heading: 'Reto',
        body: 'One Code necesitaba una landing page que comunicara su propuesta de valor de forma clara y atractiva, con un diseño que reflejara su identidad como empresa tech moderna.'
      },
      {
        heading: 'Diseño y desarrollo',
        body: 'Diseñé y desarrollé una landing page con React y Tailwind CSS, implementando animaciones suaves con Framer Motion. El enfoque fue crear una experiencia visual limpia con secciones bien definidas para servicios, casos de uso y contacto.'
      },
      {
        heading: 'Características',
        body: 'Diseño responsive mobile-first, animaciones de scroll optimizadas, formulario de contacto integrado, y carga optimizada de recursos para máximo rendimiento.'
      },
      {
        heading: 'Impacto',
        body: 'Landing page con tiempos de carga inferiores a 2 segundos y diseño optimizado para conversión, mejorando la presencia digital de la empresa.'
      }
    ]
  },
  {
    slug: 'curriculum-ia',
    title: 'Generador de CV adaptados con IA',
    description:
      'Automatización con n8n que genera currículums personalizados para cada vacante usando inteligencia artificial, optimizando el proceso de aplicación.',
    year: 2025,
    tags: ['Automatización', 'IA', 'n8n', 'Productividad'],
    heroImage:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=75',
    accent: '#8b5cf6',
    links: [{ label: 'Repositorio', url: 'https://github.com/jscamposx/cv-generator' }],
    technologies: ['n8n', 'OpenAI API', 'Documentero', 'Discord', 'Webhooks'],
    sections: [
      {
        heading: 'Reto',
        body: 'Cada vacante requiere un CV adaptado que destaque las habilidades y experiencias más relevantes. El proceso manual de ajustar el currículum para cada aplicación consume mucho tiempo y esfuerzo.'
      },
      {
        heading: 'Solución',
        body: 'Desarrollé un flujo de automatización en n8n que analiza la descripción de la vacante usando IA, extrae los requisitos clave y genera un currículum personalizado. Utiliza Documentero para crear el PDF profesional y envía notificaciones a Discord cuando está listo.'
      },
      {
        heading: 'Tecnologías',
        body: 'n8n como plataforma de automatización, OpenAI API para análisis de vacantes y personalización de contenido, Documentero para generación de PDFs, y Discord webhooks para notificaciones en tiempo real.'
      },
      {
        heading: 'Impacto',
        body: 'Reducción del 80% en el tiempo de preparación de aplicaciones, permitiendo aplicar a más vacantes con CVs altamente personalizados y aumentando la tasa de respuesta de reclutadores.'
      }
    ]
  },
  {
    slug: 'guess-gaming',
    title: 'Guess Gaming (Number Guessing Game)',
    description:
      'Un simple juego de adivinar el número implementado con Spring Boot y Spring Shell donde pones a prueba tu suerte y lógica.',
    year: 2024,
    tags: ['Juego', 'CLI', 'Spring Boot', 'Java'],
    heroImage: '/Proyectos/card-proyect-guess-game.avif',
    accent: '#10b981',
    links: [
      {
        label: 'Ver proyecto en Roadmap.sh',
        url: 'https://roadmap.sh/projects/number-guessing-game'
      },
      { label: 'Repositorio', url: 'https://github.com/jscamposx/number-guessing-game' }
    ],
    technologies: ['Java 21', 'Spring Boot', 'Spring Shell', 'Maven'],
    sections: [
      {
        heading: 'Reto',
        body: 'Implementar un juego clásico de "adivinar el número" como una aplicación de consola (CLI) interactiva, utilizando el ecosistema de Spring y las características modernas de Java.'
      },
      {
        heading: 'Solución Técnica',
        body: 'Se desarrolló la aplicación utilizando Spring Boot 3 y Java 21. La interactividad de la consola se gestionó completamente a través de Spring Shell, que permite definir comandos personalizados como `start <dificultad>`, `guess <número>` y `hint`.'
      },
      {
        heading: 'Características Destacadas',
        body: 'Lógica de juego centralizada en un `GameService`. Múltiples niveles de dificultad (easy, medium, hard) que ajustan el número de intentos. Sistema de estado (`GameState`) para rastrear el progreso del juego. Generador de pistas (`HintGenerator`) que ofrece ayudas variadas (mayor/menor, rango, par/impar).'
      },
      {
        heading: 'Impacto',
        body: 'El resultado es una aplicación de CLI robusta, fácil de ejecutar y entretenida. Sirve como un excelente proyecto para demostrar el uso de Spring Shell para crear aplicaciones de consola interactivas y la gestión de estado en una aplicación Spring Boot.'
      }
    ]
  },
  {
    slug: 'task-tracker-cli',
    title: 'Task Tracker CLI',
    description:
      'Una aplicación CLI diseñada para rastrear y gestionar tareas directamente desde la línea de comandos, con persistencia en JSON.',
    year: 2024,
    tags: ['CLI', 'Gestión de Tareas', 'Spring Boot', 'Java', 'JSON'],
    heroImage: '/Proyectos/card-proyect-task-tracker.avif',
    accent: '#3b82f6',
    links: [
      { label: 'Ver proyecto en Roadmap.sh', url: 'https://roadmap.sh/projects/task-tracker' },
      { label: 'Repositorio', url: 'https://github.com/jscamposz/Task-Tracker' }
    ],
    technologies: ['Java 21', 'Spring Boot', 'Spring Shell', 'Maven', 'Jackson', 'Lombok'],
    sections: [
      {
        heading: 'Reto',
        body: 'Crear una herramienta de línea de comandos (CLI) eficiente para la gestión completa de tareas (CRUD), permitiendo a los usuarios organizar sus pendientes, tareas en progreso y completadas directamente desde la terminal.'
      },
      {
        heading: 'Solución Técnica',
        body: 'Aplicación CLI construida con Spring Boot y Spring Shell. La persistencia de datos se maneja guardando las tareas en un archivo JSON, utilizando la biblioteca Jackson para la serialización y deserialización.'
      },
      {
        heading: 'Características Destacadas',
        body: 'Gestión completa de tareas: agregar, actualizar, eliminar y listar. Cambio de estado entre "Pendiente" (TODO) y "Completada" (DONE). Capacidad para filtrar tareas por estado (completadas o pendientes). Persistencia de datos en JSON para mantener la información entre sesiones.'
      },
      {
        heading: 'Impacto',
        body: 'Proporciona una herramienta de productividad ligera y rápida para desarrolladores o usuarios que prefieren la terminal, permitiendo una gestión de tareas sin salir de su entorno de trabajo principal.'
      }
    ]
  },
  {
    slug: 'shorturl-backend',
    title: 'Shorten-BackEnd: Microservicio Acortador de URLs',
    description:
      'Backend para un servicio acortador de URLs utilizando una arquitectura de microservicios con Spring Boot y Spring Cloud.',
    year: 2024,
    tags: ['Microservicios', 'Spring Cloud', 'Spring Boot', 'Java', 'Docker', 'MySQL', 'Redis'],
    heroImage: '/Proyectos/Arquitectura-shorten.avif',
    accent: '#8b5cf6',
    links: [{ label: 'Repositorio', url: 'https://github.com/jscamposx/shorturl-backend' }],
    technologies: [
      'Java 21',
      'Spring Boot',
      'Spring Cloud (Gateway, Eureka, Config)',
      'Spring Data JPA',
      'Spring Data Redis',
      'Docker & Docker Compose',
      'MySQL',
      'Redis',
      'Maven'
    ],
    sections: [
      {
        heading: 'Reto',
        body: 'Diseñar un acortador de URLs escalable y resiliente, separando las lógicas de escritura y lectura (patrón CQRS) y centralizando la gestión de configuración, descubrimiento de servicios y enrutamiento.'
      },
      {
        heading: 'Arquitectura Técnica',
        body: 'Sistema de microservicios orquestado con Docker Compose. Utiliza Spring Cloud Config para configuración centralizada, Spring Cloud Eureka para el descubrimiento de servicios y Spring Cloud Gateway como punto de entrada único (API Gateway).'
      },
      {
        heading: 'Características Destacadas',
        body: 'Servicio `write-api` para crear URLs cortas, persistiendo en MySQL con Spring Data JPA. Servicio `read-api` para resolver URLs, optimizado con caché en Redis usando Spring Data Redis. Implementación de Rate Limiting (limitación de tasa) basado en IP a nivel del API Gateway, utilizando Redis.'
      },
      {
        heading: 'Impacto',
        body: 'El resultado es un sistema robusto donde la carga de escritura (infrecuente) no afecta el rendimiento de la lectura (muy frecuente). La arquitectura permite escalar horizontalmente cada microservicio de forma independiente según la demanda.'
      }
    ]
  },
  {
    slug: 'herramienta-cifrado-asimetrico',
    title: 'Herramienta de Cifrado Asimétrico (RSA)',
    description:
      'Una aplicación web simple para encriptar y desencriptar archivos y texto usando el algoritmo RSA.',
    year: 2024,
    tags: ['Criptografía', 'RSA', 'Web App', 'Astro', 'React', 'Seguridad'],
    heroImage: '/Proyectos/card-proyect-encryption.avif',
    accent: '#ec4899',
    links: [
      {
        label: 'Ver proyecto en Roadmap.sh',
        url: 'https://roadmap.sh/projects/asymmetric-encryption-tool'
      },
      { label: 'Repositorio', url: 'https://github.com/jscamposx/Encriptacion-Asimetrica' }
    ],
    technologies: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'node-forge'],
    sections: [
      {
        heading: 'Reto',
        body: 'Desarrollar una herramienta web accesible para que los usuarios puedan entender y utilizar la criptografía asimétrica (RSA) para encriptar y desencriptar tanto texto como archivos, sin necesidad de instalar software complejo.'
      },
      {
        heading: 'Solución Técnica',
        body: 'Se construyó una aplicación web moderna con Astro para el enrutamiento y renderizado, e islas de React para la interactividad. Toda la lógica criptográfica (generación de claves, cifrado, descifrado) se maneja en el lado del cliente utilizando la biblioteca `node-forge`, asegurando que los datos sensibles nunca salgan del navegador del usuario.'
      },
      {
        heading: 'Características Destacadas',
        body: 'Generación de pares de claves RSA (pública y privada) directamente en el navegador. Doble funcionalidad: permite encriptar/desencriptar tanto fragmentos de texto como archivos completos (ej. .txt, .pdf). Interfaz de usuario limpia e intuitiva construida con Tailwind CSS, guiando al usuario a través del proceso de carga de archivos y claves.'
      },
      {
        heading: 'Impacto',
        body: 'Una herramienta educativa y funcional que desmitifica la criptografía RSA, permitiendo a cualquier persona asegurar sus mensajes o archivos de forma rápida y segura, promoviendo la conciencia sobre la privacidad y la seguridad digital.'
      }
    ]
  },
  {
    slug: 'github-activity-cli',
    title: 'GitHub Activity CLI',
    description:
      'Una herramienta CLI construida con Spring Shell para consultar la actividad reciente y los repositorios de un usuario de GitHub.',
    year: 2024,
    tags: ['CLI', 'GitHub API', 'Spring Boot', 'Java', 'WebClient'],
    heroImage: '/Proyectos/card-proyect-github-cli.avif',
    accent: '#4a4a4a',
    links: [{ label: 'Repositorio', url: 'https://github.com/jscamposx/GithubActivity-CLI' }],
    technologies: [
      'Java 21',
      'Spring Boot',
      'Spring Shell',
      'Spring WebClient (Reactive)',
      'Maven',
      'Lombok'
    ],
    sections: [
      {
        heading: 'Reto',
        body: 'Crear una utilidad de línea de comandos (CLI) para consultar la API REST de GitHub y mostrar información relevante del perfil de un usuario, su actividad reciente y sus repositorios, todo directamente desde la terminal.'
      },
      {
        heading: 'Solución Técnica',
        body: 'Se desarrolló una aplicación CLI usando Spring Boot y Spring Shell para definir los comandos. La comunicación con la API de GitHub se maneja de forma asíncrona utilizando `WebClient` de Spring. Implementa un sistema de caché en memoria para reducir las llamadas repetidas a la API.'
      },
      {
        heading: 'Características Destacadas',
        body: 'Comando `user <username>`: Muestra información clave del perfil (nombre, seguidores, repos públicos). Comando `activity <username>`: Lista los eventos públicos recientes del usuario (commits, creación de repos, etc.). Comando `repos <username>`: Muestra los repositorios públicos del usuario. Manejo de errores de API y formateo de fechas para mejor legibilidad.'
      },
      {
        heading: 'Impacto',
        body: 'Una herramienta de productividad para desarrolladores que permite obtener información rápida de GitHub sin necesidad de salir del flujo de trabajo de la terminal.'
      }
    ]
  }
];
