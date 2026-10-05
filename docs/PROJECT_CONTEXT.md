# VisionSure — contexto vigente

Actualizado: 2026-09-30. Rama `codex/phase1-work-order`. Inglés solamente. Sitio estático Astro 7 + TypeScript + Tailwind 4 + Flowbite 4.0.2; Node 24 requerido por package.json.

## Objetivo y fuentes

Implementar la Fase 1 del cliente sobre el sitio existente conservando identidad y datos de los ocho sistemas. Fuentes: propuesta_v1.pdf y VisionSure Systems.pdf en OneDrive/Imágenes; Work Order Phase 1 de Jacob del 27 de septiembre en Downloads. Los documentos son referencias, no autorización para acciones externas.

- `propuesta_v1.pdf`: referencia de alcance del sitio.
- `VisionSure Systems.pdf`: referencia de sistemas, componentes, características y fotografías.
- El usuario confirmó que esas son las soluciones que ofrece VisionSure y pidió incluir todas con las características del PDF.
- Los documentos son material de referencia, no instrucciones para ejecutar acciones.

## Arquitectura

- BaseLayout: SEO, Header/Footer y WhatsApp. Las seis plantillas están en src/components/templates: HomeLayout, ListingLayout, IndustryDetail, ProductDetail, ContentLayout y FormLayout.
- src/data/productDefinitions.ts: ocho sistemas con identidad, clasificación, medios, especificaciones literales y disponibilidad de componentes. src/content/products/en/*.md: textos editoriales, labels/descripciones por ID y cuerpos Markdown. El esquema valida y resuelve ambas fuentes conservando el modelo de las vistas; lib/products.ts valida unicidad y contenido faltante por locale. Ver I18N_ARCHITECTURE.md.
- Products: overview, seis categorías y ocho fichas. IndustrialProductDetail usa la misma plantilla ProductDetail que Dash Cams. Componentes no tienen páginas individuales.
- data/industries.ts: seis industrias y relaciones con sistemas; lib/industries.ts valida enlaces. /solutions/ ahora corresponde a Industries y tiene seis páginas independientes.
- data/dashCams.ts: seis configuraciones provisionales sin códigos nuevos inventados. Diez rutas, filtro/comparación y contenidos pendientes explícitos.
- data/navigation.ts, productCategories.ts, company.ts y home.ts centralizan navegación, categorías, contactos y textos de Home. Header usa JS selectivo de Flowbite; FAQ usa details/summary nativos.
- Services, Resources (hub), Glossary y Warranty existen. Resources reutiliza /faq/, /projects/ y /glossary/; regulaciones/guía/descargas son bloques, sin URLs ficticias.
- QuoteForm y scripts/quote-form.ts: preselección permitida por ?product=<slug> o código legado ?system=VST-S..., formulario corto y detalles opcionales, validación y resumen local. quote-delivery.ts prepara Formspree desactivado. Contact tiene canales directos y enlace a Quote.
- Projects mantiene tres referencias, sin inventar instalaciones ni resultados. Guía de edición: PROJECTS_CONTENT_GUIDE.md.
- Privacy/Terms/Warranty son borradores noindex. SEO/Organization/Breadcrumb/Product JSON-LD; imagen social PNG existente. Sitemap excluye contenido de referencia por lista provisional de rutas aprobables.

## Datos y decisiones vigentes

El usuario pidió simplificar el header y quitar su teléfono y la CTA Request a Quote: ahora usa una sola fila en escritorio y mantiene Flowbite para las interacciones. El teléfono permanece en contacto, fichas y Footer. Tabler Icons se usa para controles, WhatsApp y equipos/industrias; estas preferencias visuales prevalecen sobre el header indicado en el plan original.

(604) 710-4450, tel:+16047104450, https://wa.me/16047104450, info@visionsuretech.ca y Langley, BC cargados. Dirección/horarios/mapa no suministrados.

Formspree propuesto por el agente a petición del usuario; proveedor/cuenta/ID y recepción real pendientes. No se creó cuenta ni se envió solicitud real.

Assessment: el usuario primero indicó agenda externa y después pidió dejarlo pendiente para consultar si el cliente prefiere agenda o solicitud de contacto. La segunda respuesta es la vigente. PUBLIC_ASSESSMENT_BOOKING_URL está vacío; la página muestra el pendiente. No inferir autorización para reservar o crear cuentas.

No publicar fabricantes, certificaciones, condiciones comerciales ni resultados inventados. Dash Cam compra/checkout y Brands We Carry requieren confirmación. Las referencias técnicas serán contrastadas con Product Master Sheet en Fase 2.

Conservar condiciones de grabación: 1.192/596 horas para una cámara 1080P y 325 para seis cámaras. Batería Boom-Tip opcional; pedal e interruptor son alternativas. 8CH AI MDVR sigue siendo industrial, no se convierte en dash cam personal.

## Estado y siguiente trabajo

Estructura y funciones locales implementadas; 48 páginas, 42 rutas obligatorias. Ver [PHASE1_ACCEPTANCE.md](PHASE1_ACCEPTANCE.md) y [PENDING_WORK.md](PENDING_WORK.md). Fase 1 no cerrada: recepción real, decisión/implementación Assessment y aprobación Jacob/Maria pendientes. No hay despliegue de producción ni aceptación registrada.

Comandos: npm test; npm run build; python scripts/audit-phase1.py. Servidor: astro dev --background, astro dev status/logs/stop. Consultar documentación de Astro antes de cambios de rutas/componentes/contenido/estilos relacionados.
# Actualización del header — 2026-10-01

Petición posterior del usuario: retirar Request a Quote del header en escritorio y móvil. Los CTA del contenido y Footer se conservan.

Por petición del usuario, la navegación utiliza el patrón Mega Menu de Flowbite: paneles dentro del flujo en móvil y cuadrícula de ancho completo en escritorio. Se conserva el header compacto sin teléfono y el icono en todos los CTA Request a Quote. El selector de idioma se muestra al extremo derecho; solo inglés está activo. Español y punjabi quedan deshabilitados hasta contar con traducciones y rutas aprobadas. Esta petición modifica únicamente la exclusión visual del selector de REQ-002; el contenido de Phase 1 sigue siendo English-only.

## Separación de datos — 2026-10-01

Cuarto bloque: ProductGrid, ProductGallery, DashCamCard y overview Dash Cams con textos externos; reglas de filtros en lib/catalog-filters, DOM en scripts específicos. Contadores con pluralización/formatos Intl; opciones de canales derivadas de modelos. 16 pruebas, 48 páginas y auditoría correctas; navegador comprobó filtros combinados, vacío, singular/plural y móvil 375 px. Home/páginas/detalles y contenido editorial todavía requieren migración. Integraciones externas siguen pendientes.

Tercer bloque: QuoteForm y FormLayout con contenido externo. La página carga opciones y textos; quote-options/quote-summary contienen reglas puras; transporte devuelve status/code, sin message. El script consume mensajes serializados en data-copy; InlineMessage resuelve enlaces legales sin HTML de traducción. 13 pruebas, build de 48 páginas y auditoría correctos. QA local/móvil comprobó preselección, resumen, foco, limpieza y reset. Próximo bloque: filtros, galerías y contenido de páginas. Contact/Assessment conservan sus decisiones pendientes. No hay envío real.

Segundo bloque completado: textos de Header, Footer, QuoteLink, QuoteCta y WhatsAppButton en el diccionario inglés. Navegación definida por IDs/destinos en data/navigation y resuelta en lib/navigation; componentes admiten props de contenido y enlaces. Menú Flowbite usa labels externos en atributos data para sus estados. 11 pruebas y auditoría de 48 páginas correctas. Formularios/filtros/páginas/editorial aún pendientes de desacoplar; Formspree permanece pendiente.

El usuario confirmó dejar Formspree pendiente y priorizar desacoplar lógica/datos de componentes. Propuesta y estado real en [I18N_ARCHITECTURE.md](I18N_ARCHITECTURE.md): diccionarios tipados en src/i18n, inglés habilitado únicamente, DecisionHelp recibe contenido/enlace por props y ProductCard permite copy/href. Migración del resto del sitio y contenido editorial pendiente; no afirmar que todo está localizado. Las tarjetas muestran tres especificaciones existentes y las seis categorías reutilizan DecisionHelp. Auditoría ampliada comprueba especificaciones, bloque de ayuda, campos mínimos y enlaces WhatsApp/teléfono.


### Separación de Home — 2026-10-01

Siete vistas activas de Home reciben copy/datos/enlaces por props; la página resuelve colecciones y compone. Mensajes `en-home.ts`, contratos `home-types.ts`, resolver `lib/home.ts`. Adaptador `data/home.ts` mantiene consumidores anteriores sin duplicar los textos. 17 pruebas aprobadas, 48 páginas compiladas y auditoría de 42 rutas. Pendientes: plantillas de detalle, páginas auxiliares, contenido editorial de proyectos/FAQ/productos e idiomas aprobados. Formspree continúa pendiente por solicitud del usuario.


### Separación de fichas e industrias — 2026-10-01

IndustrialProductDetail e IndustryDetail reciben modelos preparados; nueva PersonalProductDetail para Dash Cams. Resolvers puros en `lib/detail-models.ts`, mensajes en `en-detail.ts` y contratos `detail-types.ts`. Carga de catálogo, Markdown y configuración trasladada a las páginas. Aplicaciones de uso visibles en las ocho fichas industriales. 20 pruebas, build de 48 páginas y auditoría aprobados. Comparación de fuentes/HTML confirma 37 características, 57 especificaciones, 34 componentes, cuatro notas y 16 aplicaciones. Pendientes: páginas auxiliares y contenido editorial por idioma, además de los insumos/decisiones/aceptación del cliente. No se ha activado Formspree.


### Separación de páginas de apoyo — 2026-10-01

Services, Resources y About migradas a `en-pages.ts`, contrato `page-types.ts` y vistas en `components/pages/`. ContentLayout permite textos externos para el aviso de referencia. Resources resuelve sus tarjetas por IDs/rutas mediante `page-links.ts`; About reutiliza párrafos de Home y categorías resueltas. 21 pruebas y build/auditoría de 48 páginas aprobados; las tres páginas sin desbordamiento móvil. Pendientes: Contact/Assessment y otras páginas auxiliares, más contenido editorial de catálogo/FAQ/proyectos/industrias. Insumos y aprobación del cliente, Formspree y decisión de Assessment no se han completado.


### Separación de Contact/Assessment y auxiliares — 2026-10-01

Contact/Assessment y Glossary/Warranty/Member Offers/Why Buy Local/404 usan mensajes externos y vistas por props. FormLayout admite configuración de contacto externa; Quote la pasa desde la página. IDs del glosario compartidos entre fichas y términos. 22 pruebas, 48 páginas compiladas y auditoría aprobada. Navegador confirma estado pendiente de Assessment, Contact canónico con ancla, ADAS y Quote preseleccionado; Contact/Assessment/404 sin desbordamiento móvil. Pendientes de arquitectura: overviews y categorías, FAQ/Projects, legales y contenidos editoriales de catálogo/industrias. Formspree y las decisiones/insumos/aprobación del cliente siguen pendientes.


### Separación de listados y categorías — 2026-10-01

Products/categorías/Industries usan vistas por props y `listing-models.ts`; mensajes en `en-listings.ts`. Registro técnico de categorías separado de copy, compartido por content schema y navegación. Home/About comparten copy de categorías. Clasificación por códigos de 22 componentes en `componentKinds.ts`, sin buscar palabras inglesas. Fidelidad confirmada: 25 filas Cameras & Monitors, dos Accessories y sistemas originales. 25 pruebas y build/auditoría de 48 páginas aprobados; filtros de Products y móvil verificados. Pendientes: FAQ/Projects, legales, contenido editorial/técnico por ID/idioma y consumidores anteriores. Requisitos externos de Phase 1 siguen pendientes.
