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
}

export const projects: Project[] = [
  {
    slug: 'viadca',
    title: 'Viadca',
    description: 'Landing y dashboard para crear y gestionar paquetes de viaje, optimizando planificación y operación en una plataforma moderna y escalable.',
    year: 2025,
    client: 'Viadca',
    tags: ['Dashboard', 'Gestión de viajes', 'Plataforma SaaS', 'E-commerce'],
    heroImage: '/Proyectos/card-proyect1.PNG',
    accent: '#2563eb',
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
    slug: 'yola',
    title: 'Yola',
    description: 'Plataforma de comercio electrónico para restaurante con gestión de platillos, usuarios, eventos y sistema de pagos.',
    year: 2024,
    client: 'Yola',
    tags: ['E-commerce', 'Restaurante', 'Gestión de contenido', 'Pagos'],
    heroImage: '/Proyectos/card-proyect2.PNG',
    accent: '#f97316',
    links: [
      { label: 'Ver proyecto', url: 'https://ejemplo.com/yola' }
    ],
    technologies: ['PHP', 'Sass', 'AWS', 'HTML'],
    sections: [
      { heading: 'Reto', body: 'El restaurante Yola necesitaba una plataforma integral para digitalizar sus operaciones, permitiendo la gestión eficiente de su menú, la organización de eventos y un sistema de pedidos en línea con pasarelas de pago seguras.' },
      { heading: 'Enfoque', body: 'Desarrollé una aplicación web completa utilizando PHP para el backend, con una interfaz moderna usando SCSS y HTML. Implementé módulos para la gestión de platillos con imágenes y descripciones, sistema de usuarios con diferentes roles, calendario de eventos, y pasarelas de pago integradas. Todo desplegado en AWS para garantizar escalabilidad y rendimiento.' },
      { heading: 'Impacto', body: 'La plataforma optimizó la experiencia de compra de los clientes y centralizó la gestión de operaciones del restaurante, reduciendo significativamente el tiempo de administración del menú y mejorando el control de inventarios y eventos.' }
    ]
  },
  {
    slug: 'sitio-marca-lumen',
    title: 'Sitio de marca Lumen',
    description: 'Sitio corporativo con storytelling, secciones editables y animaciones sutiles para reforzar la identidad de marca.',
    year: 2023,
    tags: ['Identidad de marca', 'Animación', 'Gestor de contenidos'],
    heroImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
    accent: '#f97316',
    links: [{ label: 'Ver proyecto', url: 'https://ejemplo.com/lumen' }],
    technologies: ['Astro', 'Tailwind CSS', 'Headless CMS', 'Figma'],
    sections: [
      { heading: 'Reto', body: 'Lumen necesitaba reposicionar su presencia digital con una narrativa clara y actualizable, sin perder la personalidad vibrante de la marca.' },
      { heading: 'Enfoque', body: 'Prototipé flujos de navegación y animaciones en Figma, luego implementé componentes Astro con capas de transición suaves. Integré un CMS headless para que el equipo de marketing pudiera editar el contenido.' },
      { heading: 'Impacto', body: 'El nuevo sitio duplicó el tiempo promedio de permanencia y disparó en un 65 % las solicitudes de contacto durante los primeros tres meses.' }
    ]
  }
];
