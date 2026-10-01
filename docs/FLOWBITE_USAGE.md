# Uso de Flowbite

Los enlaces “Request a Quote” usan `QuoteLink.astro` con la flecha de Tabler en Home, fichas industriales/dash cams, About, bloques CTA y Footer. Por petición del usuario del 2026-10-01, el header no incluye este CTA, ni en escritorio ni en el menú móvil. Mantener este componente compartido para conservar el icono en futuras páginas.

Actualización visual del 2026-09-30: header compacto en una fila de escritorio; teléfono retirado del header por petición del usuario. Tabler Icons 3.48.0 aporta SVG para menú, desplegables, WhatsApp, equipos e industrias mediante `TablerIcon.astro`, sin React ni JavaScript de iconos. Fuente: [Tabler Icons](https://tabler.io/icons).

Flowbite 4.0.2 y Tailwind CSS 4, sin React. Integración con `@plugin "flowbite/plugin"` y `@source "../../node_modules/flowbite"` en `global.css`. Se mantienen Onest, colores, radios, sombras y márgenes del sistema VisionSure; no se importa una apariencia global que los sustituya.

Actualización del 2026-10-01: `Header.astro` adapta el patrón [Mega menu navbar](https://flowbite.com/docs/components/navbar/#mega-menu-navbar) con imports selectivos de Collapse para la navegación y sus paneles. En móvil los paneles se expanden dentro de cada sección, sin Popper ni posicionamiento flotante; en escritorio presentan una cuadrícula de ancho completo. El menú móvil tiene altura máxima y desplazamiento propio. Solo una sección permanece abierta. Los controles tienen nombres accesibles, `aria-expanded`, navegación por flechas y retorno de foco con Escape. Navegación y Footer comparten `data/navigation.ts`. Sin JavaScript, los enlaces siguen disponibles.

Dropdown se utiliza únicamente para el selector de idioma al extremo derecho, siguiendo [Language dropdown](https://flowbite.com/docs/components/navbar/#language-dropdown). Inglés es el idioma activo. Español y punjabi están deshabilitados y marcados “Coming soon”; no existen rutas de traducción ni redirects. El usuario solicitó explícitamente esta preparación el 2026-10-01, modificando la exclusión visual del selector en REQ-002 del documento original. Para activarlos se necesitan traducciones aprobadas y la implementación futura de `/es/` y `/pa/`.

Validación responsive: 320, 375, 799 y 1280 px; sin desbordamiento horizontal. En 799 px el panel Dash Cams termina antes del inicio de Services. Compilación de las 48 páginas y auditoría de Phase 1 correctas. Capturas en `docs/qa/header-mega-mobile.png` y `docs/qa/header-language-mobile.png`.

Cards, breadcrumbs, tablas y campos usan HTML semántico y clases Tailwind adaptadas a VisionSure. Se conserva el acordeón nativo `details/summary` para FAQ, porque funciona con teclado y sin JavaScript. Las galerías usan botones nativos con `aria-pressed`: cambian imagen y texto alternativo sin introducir un carrusel automático. Los filtros nativos actualizan un estado accesible. Estos patrones no necesitan cargar todos los módulos interactivos de Flowbite.

Referencias oficiales consultadas: [Quickstart](https://flowbite.com/docs/getting-started/quickstart/), [fuente de documentación](https://github.com/themesberg/flowbite/blob/main/content/getting-started/quickstart.md), [Dropdown](https://flowbite.com/docs/components/dropdowns/), [Navbar](https://flowbite.com/docs/components/navbar/). Revisar la versión y estas adaptaciones antes de incorporar otro componente.
