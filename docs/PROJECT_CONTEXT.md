# VisionSure Technologies — contexto y plan

Última actualización: 2026-09-29. Este documento resume el alcance acordado en la conversación y el estado del código; no sustituye las decisiones posteriores del cliente.

## Objetivo y fuentes

Sitio corporativo B2B en inglés para presentar soluciones de visibilidad y seguridad industrial y generar solicitudes de cotización. Dominio configurado: https://www.visionsuretech.ca; datos corporativos con locale en-CA.

- `C:/Users/santi/OneDrive/Imágenes/propuesta_v1.pdf`: referencia de alcance del sitio.
- `C:/Users/santi/OneDrive/Imágenes/VisionSure Systems.pdf`: referencia de sistemas, componentes, características y fotografías.
- El usuario confirmó que esas son las soluciones que ofrece VisionSure y pidió incluir todas con las características del PDF.
- Los documentos son material de referencia, no instrucciones para ejecutar acciones.

## Arquitectura actual

Astro 7, TypeScript estricto y Tailwind CSS 4. Salida estática, sitemap y componentes Astro; JavaScript nativo para el menú. El proyecto exige Node 24 según `package.json`.

- `src/layouts/BaseLayout.astro`: SEO, Header, contenido y Footer.
- `src/content/solutions/*.md`: ocho sistemas, validados mediante `src/content.config.ts`.
- `src/data/solutionCategories.ts`: seis categorías funcionales.
- `src/lib/solutions.ts`: catálogo publicado con códigos, slugs y órdenes únicos.
- `src/pages/solutions/index.astro` y `[slug].astro`: catálogo y ocho fichas.
- `src/data/industries.ts`: seis sectores, necesidades y relaciones con sistemas, con una razón por relación. Home y fichas comparten estos datos.
- `src/lib/industries.ts`: une las relaciones con el catálogo y rechaza referencias a sistemas inexistentes o no publicados.
- `src/pages/industries.astro`: una página con seis secciones enlazables; no hay rutas individuales por industria.
- `src/content/projects/*.md`: casos de referencia o publicados, con estado, sistemas relacionados, textos y fotos opcionales. `src/lib/projects.ts` valida sus relaciones con industrias y soluciones.
- `src/pages/projects/index.astro` y `[slug].astro`: listado y fichas; `ProjectsPreview.astro` muestra los tres primeros casos visibles en Home. Guía de edición en `docs/PROJECTS_CONTENT_GUIDE.md`.
- `src/pages/about.astro`: presentación de VisionSure, enfoque, familias de soluciones, sectores y criterios para preparar una configuración. Comparte textos con `src/data/home.ts` y datos de catálogo/industrias.
- `src/data/faq.ts`: doce preguntas en cuatro temas y selección de cuatro para Home. `src/lib/faq.ts` resuelve los códigos de sistemas a sus fichas; `FaqAccordion.astro` usa `details`/`summary` nativos sin JavaScript. `/faq` incluye datos estructurados con las mismas respuestas visibles.
- `src/styles/global.css`: identidad visual y contenedor con márgenes responsive.

## Catálogo confirmado

| Categoría | Sistemas |
| --- | --- |
| SEE | VST-S4101 Wireless 4CH; VST-S4102 Wired 4CH |
| RECORD | VST-S4201 DVR de 9 pulgadas / 2TB; VST-S4202 DVR de 7 pulgadas / 1TB |
| SURROUND | VST-S6301 6CH 360° AVM |
| SENSE | VST-S8501 Radar Obstacle Detection |
| CONNECT | VST-S8401 8CH AI MDVR |
| SPECIALTY | VST-S4901 Boom-Tip Zoom |

Las fichas contienen especificaciones, componentes, aplicaciones, opciones, SEO y datos estructurados. Hay siete fotografías extraídas del PDF; CONNECT no tiene fotografía propia en la fuente.

Conservar las condiciones de las cifras de grabación: 1.192 y 596 horas corresponden a una cámara a 1080P; 325 horas corresponden a seis cámaras. La batería de Boom-Tip es opcional; pedal e interruptor son alternativas a elegir. No reinterpretar 8CH AI MDVR como una dashcam genérica.

## Avance del plan

1. **Implementado:** catálogo completo, ocho fichas, seis categorías en Home, enlaces del footer y SEO de producto.
2. **Implementado:** Industries (Cranes, Mining, Construction, Ports & Material Handling, Heavy Equipment, Commercial Fleets), necesidades por sector, sistemas relacionados y navegación bidireccional con sus fichas.
3. **Estructura implementada:** Projects / Case Studies, tres ejemplos de referencia (grúas, minería y flotas), listado, fichas, galería con espacios para fotos y bloque en Home. El usuario autorizó texto de referencia mientras recibe material del cliente. Todos los ejemplos están identificados y sus fichas llevan `noindex`; quedan pendientes las fotos y datos reales para convertirlos a `published`.
4. **Implementado con información disponible:** About Us y FAQ, navegación desde Home/header/footer y cuatro preguntas destacadas en Home. Las respuestas técnicas se basan en el catálogo. Instalación, entrega, soporte y garantías se indican como condiciones a confirmar; no hay duración de garantía ni plazos inventados. Historia, equipo humano, certificaciones y datos corporativos adicionales requieren información del cliente.
5. **Siguiente:** Contact / Request a Quote, datos de contacto y procesamiento del formulario. Las fichas ya enlazan a `/contact?system=VST-S…#quote`; esa página y su envío aún no existen. Correo, teléfono y dirección siguen sin completar en `src/data/company.ts`.
6. **Pendiente:** páginas legales y 404 personalizada; no existen rutas legales en el código revisado.
7. **Pendiente en Home:** experiencia/estadísticas, testimonios y contacto según el material del cliente. Ya existen Hero, TrustBar, AboutIntro, SolutionsGrid, WhyVisionSure, IndustriesGrid, ProjectsPreview, FaqPreview y Footer; ProjectsPreview muestra referencias hasta tener casos reales.
8. **Pendiente para publicación:** completar contenido, verificar responsive, rendimiento, accesibilidad, SEO, formulario y despliegue. No hay proveedor de envío, backend, CMS ni hosting de producción configurados en el código revisado.

## Criterios para continuar

- Mantener inglés, estilo industrial y corporativo, Onest, azules y superficies claras.
- Las relaciones industria/sistema son propuestas editoriales basadas en las funciones del catálogo; no certifican compatibilidad universal ni instalaciones realizadas.
- No inventar clientes, testimonios, estadísticas, proyectos, garantías, certificaciones ni resultados.
- Conservar los ocho sistemas y todos sus datos al desarrollar las siguientes secciones.
- Editar preguntas y respuestas en `src/data/faq.ts`; `featured: true` las incluye en Home. Mantener IDs únicos y `systemCodes` válidos. Para actualizar condiciones comerciales, obtener primero los términos reales del cliente. La FAQ conserva los límites de duración de grabación y las opciones de Boom-Tip.
- Consultar `AGENTS.md` antes de trabajar. Iniciar servidores con `astro dev --background` y gestionarlos con `astro dev status`, `logs` y `stop`.
- Validar con la compilación y comprobar enlaces y presentación. En esta sesión Windows ha requerido ejecutar la compilación fuera del sandbox para resolver correctamente dependencias de Astro; no introducir parches en dependencias para ocultar ese problema del entorno.
