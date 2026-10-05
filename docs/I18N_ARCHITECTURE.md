# Arquitectura de datos e internacionalización

Fecha: 2026-10-01. Objetivo: separar presentación, reglas de dominio y contenido para reutilizar los mismos componentes en varios idiomas. Formspree sigue pendiente por instrucción del usuario; este trabajo no activa recepción ni traducciones públicas.

## Base implementada y alcance

`src/i18n/config.ts`: idioma predeterminado y estado de los idiomas previstos. Solo inglés habilitado; español y punjabi pendientes.

`src/i18n/types.ts`: contrato explícito de mensajes; los valores son strings traducibles, no tipos literales del inglés.

`src/i18n/locales/en.ts`: textos de ProductCard y DecisionHelp. Diccionario por idioma y, al crecer, por dominio (navigation, forms, products, home).

`src/i18n/index.ts`: resolución central y parámetros nombrados. Un diccionario ausente produce error, evitando publicar una página supuestamente traducida con contenido inglés silenciosamente. No se activa detección automática del navegador ni redirects.

DecisionHelp recibe `content` y `resourceHref`, sin decisiones de categoría, textos o URLs dentro de la vista. La página resuelve qué datos debe mostrar. ProductCard permite recibir `copy`, `href` y datos del producto; conserva valores ingleses por defecto para migrar sus consumidores de forma gradual. Sus títulos, resúmenes y etiquetas aún proceden del contenido inglés existente.

Segunda integración (2026-10-01): Header, Footer, QuoteLink, QuoteCta y WhatsAppButton consumen mensajes externos y permiten recibir props. `data/navigation.ts` conserva IDs/destinos; `lib/navigation.ts` resuelve labels y acepta un generador de URLs. Header/Footer reciben el modelo resuelto y sus textos; los labels de abrir/cerrar se pasan al script mediante atributos de datos. El Footer identifica Quote por `id`, sin comparar texto traducido. El selector usa la configuración de idiomas; inglés continúa como único activo.

No es la internacionalización completa del sitio. Páginas, formularios, filtros y contenido editorial siguen pendientes de migración. La resolución de rutas localizadas aún no está activada. Pruebas: 11 casos, incluyendo diccionarios, parámetros y traducción de navegación sin mutar IDs/destinos.

Tercera integración (2026-10-01): QuoteForm recibe textos, opciones, endpoint y enlaces por props; `/quote/` carga y compone esos datos. Diccionario de formulario separado en `locales/en-quote.ts` y contrato en `quote-types.ts`. `quote-options.ts` y `quote-summary.ts` resuelven opciones/resumen sin DOM. `quote-delivery.ts` devuelve códigos de resultado, sin frases de UI. El script recibe únicamente los mensajes de runtime serializados en el atributo `data-copy`, escapado por Astro; usa textContent/value, sin insertar HTML ni importar diccionarios al navegador. FormLayout también consume textos externos. InlineMessage permite ordenar enlaces legales mediante parámetros, sin concatenar fragmentos traducidos ni usar HTML de traducciones.

Estado actual: 13 pruebas. Navegador: preselección VST-S6301, resumen local, foco en resultado, limpieza al editar y reset conservando el modelo; 375 px sin desbordamiento horizontal. Formspree continúa apagado. Contact/Assessment, filtros y contenido editorial de páginas siguen pendientes; no se habilitaron traducciones ni rutas nuevas.

Cuarta integración (2026-10-01): ProductGrid, ProductGallery, DashCamCard y DashCamOverview consumen props/diccionarios externos; la página Dash Cams compone datos y vista. `catalog-filters.ts` contiene reglas de búsqueda/clase y canales; scripts independientes se encargan del DOM. `formatCount` usa Intl.PluralRules/NumberFormat y mensajes por categoría plural, compartidos entre render inicial y cambios del filtro. Los scripts reciben solo count/locale por atributos, sin cargar diccionarios completos. Canales y contador inicial se derivan de los modelos, sin asumir seis entradas ni cuatro opciones fijas. Las galerías conservan el comportamiento de imagen, alt, dimensiones y aria-pressed; sus avisos y nombres accesibles son configurables.

Verificación actual: 16 pruebas y build/auditoría de 48 páginas. Navegador confirmó catálogo: búsqueda de VST-S4101 = “1 system”, combinación con RECORD = “0 systems” y estado vacío, RECORD sin búsqueda = “2 systems”. Dash Cams: filtro de dos canales = dos modelos y filtro de uno = “1 configuration”; 375 px sin desbordamiento. No se añadieron fotografías o traducciones públicas. Queda migrar Home, contenido de páginas y plantillas de detalle, además de separar contenido editorial/técnico por ID cuando corresponda. No afirmar que todo el proyecto está desacoplado todavía.

## Quinta integración: Home

Home compone siete vistas con props: Hero, EquipmentSelector, ProductCategories, DashCamStrip, WhyVisionSure, ProjectsPreview y FaqPreview. `locales/en-home.ts` contiene sus textos, SEO, avisos de referencia y alt del hero; `home-types.ts` define contratos sin literales ingleses. `lib/home.ts` resuelve etiquetas/destinos por IDs estables, permite un resolver de URL futuro y rechaza textos ausentes. La página carga proyectos/FAQ y pasa los resultados a sus vistas; estas no consultan colecciones ni eligen idioma. Hero recibe también el recurso visual y los destinos; no asume dos viñetas o tres etiquetas.

`data/home.ts` queda como adaptador transitorio para About y los enlaces de Home: reutiliza el diccionario y añade enlaces, evitando duplicar el contenido editorial. Las fichas de proyectos, respuestas FAQ y datos técnicos siguen siendo contenido inglés existente; no afirmar que Home completa o todo el sitio dispone ya de versiones traducidas.

Validación: 17 pruebas, build de 48 páginas y auditoría de 42 rutas obligatorias. La prueba del resolver cambia etiquetas y prefijos conservando IDs, relaciones y datos originales, y verifica el rechazo de claves ausentes. Navegador: contenido actual conservado, seis enlaces de equipos, ningún Request a Quote en header y sin desbordamiento horizontal con viewport móvil de 375 px. Formspree y traducciones públicas siguen pendientes.

## Sexta integración: plantillas de detalle

IndustrialProductDetail, IndustryDetail y la nueva PersonalProductDetail reciben modelos preparados, mensajes y enlaces por props. Las páginas resuelven colecciones, render de Markdown y datos de empresa; las vistas no consultan el catálogo ni deciden recomendaciones. `lib/detail-models.ts` prepara imágenes, opcionales, relaciones, breadcrumbs, enlaces de glosario/cotización/assessment y Product JSON-LD; acepta un resolver de URL. Los estados técnicos permanecen `included/choice/optional`, con etiquetas externas en `en-detail.ts` y contrato `detail-types.ts`. Los componentes compartidos de breadcrumbs y ListingLayout también permiten etiquetas externas. InlineMessage conserva enlaces de glosario con parámetros ordenables por traducción.

La selección relacionada conserva su regla actual: hasta tres sistemas de la misma categoría; si no existen, sistemas que comparten aplicaciones industriales. No se infiere compatibilidad verificada. Las vistas muestran todas las aplicaciones del catálogo, que antes no aparecían junto a Ideal for. La ficha Boom-Tip conserva la batería opcional y el control a elegir; no se cambian valores técnicos ni se agregan prestaciones.

Verificación: 20 pruebas aprobadas, 48 páginas compiladas y auditoría de 42 rutas obligatorias. Comparación directa de las ocho fuentes Markdown con el HTML compilado: 37 características, 57 especificaciones, 34 componentes con sus estados, cuatro notas y 16 aplicaciones presentes; las filas de tablas coinciden con las fuentes. Revisión en navegador de Boom-Tip, Front-only 4K y Cranes; las recomendaciones y enlaces conservan sus IDs. Cranes y Boom-Tip sin desbordamiento horizontal con viewport de 375 px. Los datos editoriales de modelos/industrias todavía son inglés; esta integración prepara las vistas, no publica traducciones.

Pendientes inmediatos: páginas auxiliares, plantillas de contenido y contenido editorial de catálogo/FAQ/proyectos. Formspree, la decisión Assessment y aprobación del cliente permanecen pendientes.

## Séptima integración: Services, Resources y About

Textos de estas tres páginas y del aviso común de ContentLayout trasladados a `locales/en-pages.ts`, con contratos `page-types.ts`. Las páginas componen SEO, breadcrumbs, configuración y modelos; ServicesContent, ResourcesContent y AboutContent reciben datos y enlaces por propiedades. About reutiliza los párrafos externos de Home y las categorías resueltas por ID. `lib/page-links.ts` resuelve las tarjetas de Resources, mantiene IDs/destinos y rechaza traducciones ausentes; no construye rutas a partir del texto mostrado. Se conservan las anclas regulations/system-guide/downloads y planning-your-project.

No se cambió el contenido aprobado/provisional: financiación, proveedores externos, dirección/horarios y descargas siguen pendientes; no se agregaron ofertas, documentos, certificaciones ni enlaces de proveedores. ContentLayout conserva defaults en inglés para los consumidores aún en migración, pero permite copy/breadcrumbs externos.

Verificación: 21 pruebas aprobadas, build de 48 páginas y auditoría de 42 rutas obligatorias. Navegador confirmó las tres páginas, enlaces de assessment/productos y seis categorías de About; ninguna presentó desbordamiento horizontal con viewport de 375 px. Restan Contact/Assessment, otras páginas auxiliares y contenido editorial de FAQ/proyectos/modelos/industrias. Formspree permanece pendiente y no se publicaron traducciones.

## Octava integración: Contact, Assessment y páginas auxiliares

ContactContent y AssessmentContent reciben mensajes y destinos por props. FormLayout recibe email/teléfono configurados desde Contact, Quote y Assessment, más breadcrumbs/mensajes; CallLink permite teléfono externo y mantiene un default compatible. Los contactos ausentes se omiten en el panel lateral. La validación del booking URL permanece en la página, fuera de la vista. Formspree sigue desactivado y Assessment sin calendario por instrucción del usuario.

Glossary, Warranty, Member Offers, Why Buy Local y 404 usan copy externo (`en-support.ts`) con contratos tipados. ReferenceContent comparte la presentación de páginas provisionales; GlossaryContent y NotFoundContent reciben los modelos resueltos. `data/glossary.ts` es la fuente única de IDs adas/dms/fcw; tanto las fichas como el glosario derivan sus enlaces/anclas de ella. Sus títulos pueden traducirse sin modificar los fragmentos. `en-contact.ts` agrupa los textos de Contact y Assessment; FormLayout conserva defaults para migración gradual.

Verificación: 22 pruebas aprobadas, build de 48 páginas y auditoría de 42 rutas. Navegador confirmó Assessment pendiente y sin enlace activo de calendario; Contact conserva `/contact/#quote`, CTA, email y teléfono; click ADAS conserva `#adas`; Quote preselecciona VST-S6301. Contact, Assessment y 404 sin desbordamiento horizontal con viewport de 375 px. La ruta 404 compilada no prueba la configuración HTTP de un hosting todavía no elegido.

Pendientes de arquitectura: overview de Products/categorías/Industries, FAQ, Projects y los mensajes de sus componentes, legales y separación editorial/técnica por idioma/ID para catálogo/industrias. Las traducciones y rutas localizadas públicas no se han activado. Los requisitos externos de aceptación contractual siguen pendientes.

## Novena integración: Products, categorías e Industries

ProductOverview, CategoryListing e IndustryOverview reciben modelos/mensajes por props. Las páginas cargan colecciones y componen ListingLayout con SEO/breadcrumbs. `en-listings.ts` y `listing-types.ts` contienen textos de listados y categorías; `catalogCategories.ts` conserva IDs, medios y modo de presentación, sin etiquetas editoriales. Content schema, navegación y validación de fichas usan directamente este registro técnico. `productCategories.ts` queda como adaptador inglés para consumidores anteriores. Home/About y Products comparten descripciones del mismo diccionario de categorías.

`listing-models.ts` prepara categorías, componentes, decisiones y enlaces. Cameras & Monitors ya no clasifica componentes buscando palabras inglesas en su descripción: `componentKinds.ts` define camera/monitor/other por código para las 22 identidades del catálogo actual. Un código nuevo sin clasificar causa error explícito; traducir la descripción no altera la selección. Accessories conserva choice/optional y el sistema de origen, sin deduplicar componentes compartidos entre configuraciones ni convertirlos en ofertas independientes. Las industrias relacionadas conservan el orden de primera aparición por configuración.

Verificación: 25 pruebas aprobadas, build de 48 páginas y auditoría de 42 rutas obligatorias. Comparación de las tablas compiladas con la selección original del catálogo: 25 filas de Cameras & Monitors y dos de Accessories, con descripciones y sistema de origen idénticos. Navegador: búsqueda VST-S4101 = 1 system; combinar RECORD = 0 systems/estado vacío; limpiar = 8 systems. Products, Cameras & Monitors, Accessories e Industries sin desbordamiento horizontal con viewport de 375 px; seis enlaces de industrias correctos.

Pendientes: FAQ/Projects, legales y contenido editorial/técnico por ID/idioma para modelos e industrias, además de revisar consumidores antiguos antes de reutilizarlos. Formspree, decisión Assessment y aceptación del cliente continúan pendientes. No se habilitaron traducciones ni rutas de idiomas.

## Décima integración: FAQ, Projects y legales

FAQ separa IDs y relaciones de sistemas (`data/faq.ts`) de preguntas/respuestas (`en-faq-content.ts`) y textos de interfaz (`en-faq.ts`). El resolver prepara los grupos y genera el JSON-LD desde las mismas respuestas visibles. La vista recibe el contenido por props.

Projects conserva sus registros y estados de referencia; `project-models.ts` prepara hechos, enlaces, sistemas y campos pendientes. Los textos de interfaz están en `en-projects.ts`; las vistas de listado y detalle reciben modelos resueltos. El contenido editorial de los casos sigue en Markdown inglés y requiere resolución por idioma en un bloque posterior.

Privacy y Terms usan IDs, estado y fecha desde `data/legal.ts`, contenido editorial de `en-legal-content.ts` y etiquetas de `en-legal.ts`. Las traducciones no pueden cambiar el estado de referencia ni aprobar una fecha de publicación. El componente LegalDocument recibe el documento ya resuelto.

Verificación: 29 pruebas aprobadas. Build de 48 páginas y auditoría de 42 rutas obligatorias aprobados durante esta integración. Comparación del contenido compilado: 12 respuestas FAQ, 16 secciones legales con campos pendientes y los tres proyectos de referencia conservados.

Pendientes de arquitectura: separar el contenido técnico/editorial del catálogo y de industrias por ID e idioma, resolver Markdown localizado y revisar consumidores antiguos y propagación del locale. Inglés continúa como único idioma habilitado. Formspree, Assessment y aceptación del cliente siguen pendientes.

## Undécima integración: contenido de industrias

`industryDefinitions.ts` conserva los seis IDs, su orden, presentación y 18 relaciones por código de sistema. `en-industries.ts` contiene títulos, descripciones, necesidades y razones de recomendación por industria/código; `industry-types.ts` define el contrato. `resolveIndustries` une ambas fuentes y falla si falta una industria o una razón, sin permitir que un texto traducido cambie identidades o relaciones.

Las páginas de categorías, modelos y overview resuelven desde sus mensajes. Los loaders de industrias y proyectos aceptan locale. Quote usa directamente las definiciones para IDs de opciones; `data/industries.ts` queda como adaptador inglés para consumidores antiguos. El contenido sigue siendo orientación de aplicación, no una matriz de compatibilidad o certificación.

Verificación: comparación profunda con la fuente anterior confirma los seis registros y las 18 recomendaciones sin cambios; 31 pruebas aprobadas y build de 48 páginas aprobado. Pendiente separar el catálogo técnico/editorial de productos y Dash Cams y completar la propagación del idioma antes de habilitar traducciones.

## Duodécima integración: configuraciones Dash Cams

`dashCamDefinitions.ts` contiene los seis slugs temporales y sus canales; `en-dash-cams.ts` contiene títulos y descripciones tipados por esos IDs. `resolveDashCams` une ambas fuentes, conserva identidad/canales y rechaza contenido ausente. No se añadieron modelos comerciales, especificaciones ni precios sin información verificada.

Las rutas estáticas se generan desde las definiciones; overview, fichas y opciones Quote resuelven sus textos desde los mensajes de la página. `data/dashCams.ts` queda como adaptador inglés para consumidores previos. Cambiar una etiqueta no altera el valor enviado ni el enlace del modelo.

Verificación: 33 pruebas aprobadas, build de 48 páginas y auditoría de 42 rutas aprobados. Pendientes: separación técnica/editorial de los ocho productos industriales, Markdown localizado, consumidores antiguos y propagación del locale. Formspree y Assessment siguen pendientes.

## Decimotercera integración: catálogo técnico y Markdown por idioma

`productDefinitions.ts` contiene identidades, clasificación, estado de referencia/draft, medios, componentes y disponibilidad, y las 57 especificaciones como valores literales de origen. Cada especificación tiene un ID estable. `content/products/en/*.md` contiene título, resumen, etiquetas, características, aplicaciones, notas, SEO, alt y labels/descripciones por ID; el cuerpo Markdown se conserva.

El esquema de la colección valida estrictamente el frontmatter editorial, lo une con el catálogo mediante `resolveProductData` y valida el resultado completo. Los componentes siguen recibiendo el mismo modelo. La traducción no puede sustituir slugs, valores técnicos, categorías, medios, disponibilidad o estado de publicación. Se rechazan IDs desconocidos, duplicados o faltantes. `getPublishedProducts(locale)` filtra por idioma y detecta productos sin contenido; los loaders de industrias/proyectos propagan locale al catálogo.

Los valores originales combinan medidas y frases técnicas inglesas. Se conservaron literalmente sin inferir unidades ni convertir texto en números. Traducir esos valores narrativos requiere un contrato explícito y revisión técnica; no se ha declarado que estén localizados. Las etiquetas y descripciones sí están separadas para traducción. Los directorios de español/punjabi y sus rutas siguen deshabilitados.

Verificación profunda con la fuente previa: ocho registros completos y cuerpos Markdown idénticos tras resolver (37 características, 57 especificaciones, 34 componentes, 16 aplicaciones y cuatro notas). 35 pruebas aprobadas, build de 48 páginas y auditoría de 42 rutas aprobados. Pendientes: propagación completa de locale en layouts/rutas, contenido de proyectos por idioma, revisión de consumidores antiguos y traducciones aprobadas. Los gates externos de Fase 1 permanecen pendientes.

Referencia utilizada para la colección y validación: [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/).

## Decimocuarta integración: idioma compartido en layouts

`buildPageShell` resuelve mensajes, navegación, enlace/label de Home y metadatos del idioma desde una fuente común. BaseLayout entrega ese modelo a Header, Footer y WhatsApp; `html lang` y `og:locale` derivan del mismo idioma. El enlace del logo de Header recibe props. Las seis plantillas reciben locale y estrategia de enlaces y los propagan a BaseLayout; sus defaults traducibles consultan ese locale.

Solo inglés tiene diccionario/metadatos aprobados (`en`, `en_CA`). Un idioma sin diccionario falla; no se publica una página española con texto inglés por fallback. Rutas localizadas, hreflang y alternates requieren contenido aprobado y no se habilitaron. Los wrappers de vistas y las páginas deben recibir explícitamente el locale cuando se creen esas rutas.

Verificación: 37 pruebas aprobadas y build de 48 páginas aprobado; las pruebas comprueban que header/footer comparten la estrategia de URLs y rechazan locales no aprobados. Pendientes: revisar consumidores antiguos, wrappers y contenido de proyectos por idioma; traducción técnica de valores narrativos con aprobación. Los pendientes externos del cliente se mantienen.

## Decimoquinta integración: proyectos localizables y wrappers

`projectDefinitions.ts` conserva IDs, orden, estado, industria, sistemas y medios; `content/projects/en/` conserva contenido editorial y Markdown por projectId. El esquema valida/resuelve ambas capas; una traducción no cambia publicación o relaciones. `getVisibleProjects(locale)` filtra por idioma y detecta contenido faltante. Comparación profunda: los tres registros y cuerpos previos permanecen idénticos tras resolver.

Wrappers industriales, personales y legales propagan locale/estrategia de enlaces a sus layouts; DashCamOverview propaga el locale recibido. SystemVisual recibe textos por props: la frase de AI MDVR y sus etiquetas pasan al diccionario por código de modelo. Un futuro producto sin foto usa un mensaje genérico, sin atribuirle canales/conectividad del AI MDVR. ProductCard/Grid y sus consumidores activos pasan esos mensajes.

Revisión de imports: los componentes anteriores que no son consumidores activos se retiraron del árbol para evitar duplicados. No se añadieron rutas traducidas ni contenido aprobado ficticio.

Verificación: 39 pruebas aprobadas, build de 48 páginas y auditoría de 42 rutas aprobados. La estructura actual tiene sus principales vistas/datos separados. Habilitar otro idioma requiere diccionario/editorial completo, revisión técnica de valores narrativos, wrappers de rutas y SEO localizado. Los gates externos de Fase 1 no están resueltos.

## Estructura final propuesta

```text
src/
  data/                         # Identidades y configuración sin idioma
    company.ts                  # Teléfono, correo, ubicación, enlaces
    navigation.ts               # IDs de entrada, IDs de ruta, relaciones
    catalog/                    # Modelos, componentes, relaciones, medidas
  i18n/
    config.ts                   # defaultLocale, idiomas aprobados
    types.ts                    # Contratos de mensajes
    index.ts                    # Resolución, parámetros, pluralización
    locales/
      en/                       # UI corta: nav, forms, products, common
      es/                       # Solo después de aprobación
      pa/
  content/
    products/<idioma>/           # Descripciones largas y SEO por modelo
    pages/<idioma>/              # Home, About, Services, legales
  lib/
    catalog.ts                  # Une datos técnicos y contenido del idioma
    navigation.ts               # Construye enlaces y labels localizados
    routes.ts                   # Genera URLs; ninguna vista concatena prefijos
    quote-delivery.ts           # Transporte, independiente de la UI
  components/                   # Props, HTML, estilos y accesibilidad
  pages/                        # Carga/resuelve datos y compone las vistas
```

Los directorios adicionales son destino de la migración, no archivos que ya existan. Para textos cortos recomiendo TypeScript tipado ahora: encaja con el proyecto y detecta claves ausentes. JSON es válido si facilita la edición por el cliente, siempre con validación de esquema y paridad de claves en build. Markdown/content collections sirve mejor para descripciones largas, políticas y contenido con estructura; evitar un JSON gigante para todo el sitio.

## Separación de datos

| Capa | Contiene | Regla |
| --- | --- | --- |
| Identidad/dominio | Modelo VST, IDs de componentes, categoría, relaciones, medios y medidas | Una fuente; no duplicar por idioma |
| UI traducible | Labels, botones, validaciones, estados vacíos, mensajes de entrega | Diccionarios tipados por idioma y dominio |
| Contenido editorial | Título, beneficio, descripción, alt, FAQ, SEO, políticas | Registro por `entityId + locale`, con aprobación |
| Rutas | Route ID y parámetros estables | El módulo central produce la URL localizada |
| Presentación | HTML, Tailwind, Flowbite, foco y estados visuales | Recibe un modelo ya resuelto |

Hoy las especificaciones mezclan etiquetas y valores descriptivos ingleses dentro de Markdown. La migración debe extraer `specId`, valor/unidad cuando sea una medida, y textos por idioma para valores narrativos. No traducir números de modelo, inventar unidades ni parsear cadenas técnicas automáticamente. Mantener valores y condiciones originales hasta una revisión del Product Master Sheet.

## Flujo de una página

```text
Ruta + idioma
  → resolver de contenido
  → catálogo técnico + diccionario + contenido editorial
  → props de la vista
  → componente compartido
```

Ejemplo aplicado:

```astro
---
const messages = getMessages(locale);
const help = category.id === 'multi-camera-systems'
  ? messages.decisionHelp.multiCamera
  : messages.decisionHelp.general;
---
<DecisionHelp content={help} resourceHref={resourcesHref} />
<ProductCard product={product} copy={messages.productCard} href={productHref} />
```

Las reglas que eligen el contenido pueden extraerse a un resolver cuando crezcan. La vista no consulta proveedores, no elige un idioma y no contiene ramas `if (locale === 'es')`.

## Internacionalización futura en Astro

Al aprobar las traducciones, configurar `i18n` con `defaultLocale: 'en'`, locales aprobados y `routing.prefixDefaultLocale: false`. Inglés conserva `/products/...`; español y punjabi usarán `/es/...` y `/pa/...`. Astro genera/valida URLs localizadas; los diccionarios resuelven textos. Configurar rutas no traduce el contenido automáticamente.

Mantener IDs y slugs técnicos estables inicialmente. Los wrappers de ruta reutilizan las mismas vistas; no duplicar componentes por idioma. Si posteriormente se traducen slugs, mantener un mapa por ID estable y redirecciones explícitas.

Solo ofrecer el cambio de idioma cuando exista una traducción aprobada de la página actual. El fallback al inglés puede ayudar en preview; no activar un locale público incompleto ni asignarle un canonical/hreflang de traducción. Definir por página `html lang`, title, description, alt, canonical y alternates; sitemap incluye solo versiones aprobadas. Revisar tipografía para la escritura Gurmukhi y usar `Intl` para formatos/plurales, sin convertir valores técnicos arbitrariamente.

Los scripts de filtros/formularios reciben solo los mensajes necesarios desde props/atributos de datos serializados de forma segura; no importan todos los idiomas ni interpolan texto del usuario como HTML. Los resultados de transporte deben exponer códigos de estado/error estables; el diccionario produce el mensaje visible. Usar parámetros nombrados, no concatenaciones de fragmentos traducidos.

## Orden de implementación

1. Inventariar textos inline y separar datos técnicos de editoriales; mantener las URLs y contenido actuales.
2. Migrar configuración de idiomas, navegación, Footer y CTA compartidos. El selector toma sus opciones de una fuente única.
3. Migrar etiquetas, validación, filtros, galerías y estados de Quote. Conservar el envío desactivado.
4. Extraer contenido de Home, Services, Resources y About por dominio; preservar referencias y avisos.
5. Separar el catálogo técnico del contenido editorial por ID y validar relaciones/paridad, sin perder especificaciones del PDF.
6. Recibir traducciones aprobadas, implementar rutas/localized SEO, y habilitar un idioma solo después de QA de todas sus páginas.

## Comprobación

Build y auditoría de las rutas actuales; pruebas de parámetros/diccionarios; revisión responsive. En la migración completa añadir paridad de claves, integridad de IDs, detección de traducciones faltantes, links locales, SEO y regresiones de modelos/componentes/especificaciones. La auditoría de Phase 1 no acredita entrega de email ni aprobación del cliente.

Referencia oficial: [Astro Internationalization Routing](https://docs.astro.build/en/guides/internationalization/).
