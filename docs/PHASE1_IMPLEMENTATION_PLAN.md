# VisionSure Technologies — Plan Maestro de Implementación Phase 1 + Refactor Flowbite

> **Documento de ejecución para Codex**
>
> **Proyecto:** VisionSure Technologies (`visionsuretech.ca`)  
> **Repositorio:** `Wilz22/visionsuretech`  
> **Branch base:** `master`  
> **Fecha del plan:** 2026-09-30  
> **Fuente funcional principal:** *VisionSure — Phase 1 Work Order: Site Structure & Interaction*, Jacob Seutter, 27-Sep-2026  
> **Objetivo:** completar rigurosamente Phase 1, alinear el repositorio actual con el Work Order, refactorizar la arquitectura de información y adoptar Flowbite como base UI para patrones estándar sin perder el Design System de VisionSure.

---

## 0. Cómo debe usar Codex este documento

Este archivo es el **plan de implementación y la fuente de ejecución técnica** para completar Phase 1.

### Orden de autoridad

Codex debe resolver contradicciones usando este orden:

1. **Work Order Phase 1 del cliente** — define alcance, URLs, templates, interacciones y aceptación.
2. **Este plan** — traduce el Work Order a acciones concretas sobre el repositorio.
3. **Código actual del repositorio** — debe reutilizarse siempre que sea compatible con 1 y 2.
4. **Documentación interna existente** (`docs/*.md`) — útil como contexto, pero puede haber quedado desactualizada respecto al Work Order.
5. **Preferencias de implementación** — solo aplican si no contradicen lo anterior.

### Regla de ejecución

- No reescribir todo desde cero.
- Reutilizar código actual que ya sea correcto.
- Refactorizar solo lo necesario para alinear arquitectura, rutas, UI y requisitos.
- Hacer cambios incrementales y verificables.
- Ejecutar `npm test` y `npm run build` después de bloques importantes.
- No introducir React, Vue, Svelte, Material UI, Shadcn, Bootstrap ni otra UI framework adicional.
- Flowbite será la **fuente UI prioritaria para patrones estándar**.
- Astro + TypeScript + Tailwind CSS 4 siguen siendo la base.
- JavaScript de Flowbite solo debe cargarse donde aporte interacción real.
- Mantener el sitio **English-only** durante Phase 1.
- No implementar selector de idioma todavía.

---

# 1. Objetivo funcional de Phase 1

Phase 1 consiste en construir y aprobar el **esqueleto completo del nuevo sitio** antes de cargar el contenido definitivo de Phase 2.

Debe quedar terminado:

- menú principal;
- jerarquía completa de páginas;
- URLs limpias;
- seis templates reutilizables;
- navegación desktop/mobile;
- formulario de cotización funcional;
- interacciones globales;
- relaciones Products ↔ Industries;
- estructura Dash Cams;
- SEO técnico base;
- responsive;
- accesibilidad razonable;
- aprobación estructural de Jacob y Maria.

Phase 1 **no requiere todavía** contenido definitivo de producto, fotografías definitivas, spec sheets, FAQ final, testimonios finales ni datos de la empresa hermana.

---

# 2. Restricciones no negociables del cliente

## REQ-001 — Sitio nuevo

El nuevo sitio es una construcción nueva. No se debe preservar la arquitectura del sitio anterior por compatibilidad.

## REQ-002 — English-only

Todo el sitio público de Phase 1 debe estar en inglés.

La arquitectura debe permitir en el futuro:

```text
/es/...
/pa/...
```

pero Phase 1 NO debe incluir:

- language switcher;
- páginas duplicadas;
- traducciones;
- redirects de idioma.

## REQ-003 — Sin nombres de fabricantes

No publicar nombres de proveedores/fabricantes en:

- headings;
- specs;
- alt text;
- metadata;
- PDFs;
- nombres de imagen;
- structured data;
- breadcrumbs;
- componentes;
- comentarios visibles;
- contenido importado.

Los productos se presentan únicamente como VisionSure / VST.

## REQ-004 — Dos audiencias

El sitio atiende:

1. Commercial / fleet buyers → quote-driven.
2. Personal vehicle dash-cam buyers → retail-driven.

Por ello **Dash Cams debe ser top-level** y no una subcategoría de Products.

## REQ-005 — No usar anchors como sustituto de páginas

Cada entidad indicada por el Work Order debe tener URL real.

Patrón prohibido como arquitectura final:

```text
/industries#cranes
/solutions#radar
```

Debe migrarse a URLs independientes.

---

# 3. Estado actual del repositorio que debe preservarse cuando sea compatible

El repositorio actual ya aporta una base útil.

## 3.1 Stack existente

```text
Astro 7
TypeScript
Tailwind CSS 4
@astrojs/sitemap
Static output
Node 24
```

No hay React ni UI framework adicional.

## 3.2 Elementos ya implementados y reutilizables

- `src/layouts/BaseLayout.astro`
- `src/components/layout/Header.astro`
- `src/components/layout/Footer.astro`
- `src/components/seo/SEO.astro`
- Design tokens en `src/styles/global.css`
- Home modular
- ocho sistemas VisionSure en Content Collections
- seis industrias en datos estructurados
- Projects
- FAQ
- About
- Contact
- `QuoteForm.astro`
- lógica `quote-form.ts`
- transporte configurable Formspree
- Privacy Policy draft
- Terms draft
- 404
- sitemap
- responsive base
- semántica HTML razonable
- tests del quote transport

## 3.3 Problemas actuales conocidos

### GAP-001 — `solutions` significa productos en el código actual

Actualmente:

```text
src/content/solutions/
src/pages/solutions/index.astro
src/pages/solutions/[slug].astro
```

representan sistemas/productos.

En el Work Order:

```text
/products/... = productos
/solutions/... = industries
```

Este conflicto debe resolverse.

### GAP-002 — Industries usa anchors

Actualmente existen enlaces como:

```text
/industries#cranes
```

Debe cambiar a:

```text
/solutions/cranes/
```

### GAP-003 — Navegación desactualizada

Actual:

```text
Solutions
Industries
Projects
About
FAQ
```

Objetivo:

```text
Home
Products
Industries
Dash Cams
Services
Resources
About
[Request a Quote]
Phone
```

### GAP-004 — Dash Cams no existe

Debe crearse el árbol completo.

### GAP-005 — Services / Resources / Quote URL / Warranty faltan o no están alineados

### GAP-006 — WhatsApp global falta

### GAP-007 — Form real no está activado

La implementación actual puede preparar/resumir la solicitud y tiene transporte configurable, pero Phase 1 exige entrega real a:

```text
info@visionsuretech.ca
```

### GAP-008 — fallback Open Graph inexistente

`SEO.astro` referencia:

```text
/images/og/visionsure-default.jpg
```

y el asset no existe.

### GAP-009 — navegación y contenido duplicados

Actualmente hay información repetida entre:

```text
src/data/navigation.ts
Header.astro
Footer.astro
```

y entre:

```text
src/data/home.ts
Hero.astro
```

Debe existir una fuente única de verdad.

### GAP-010 — algunos schemas SEO están vacíos

Revisar/eliminar/completar:

```text
BreadcrumbSchema.astro
OrganizationSchema.astro
ProductSchema.astro
```

No dejar componentes vacíos sin uso.

---

# 4. Decisión de arquitectura UI — Flowbite

## 4.1 Regla acordada

Antes de crear manualmente un patrón UI estándar, Codex debe revisar si Flowbite ya ofrece una base equivalente.

### Flowbite debe priorizarse para

- navbar;
- mobile navbar;
- dropdown;
- mega menu si se requiere;
- buttons;
- badges;
- breadcrumbs;
- form fields;
- select;
- textarea;
- validation / alert states;
- accordion;
- modal;
- tabs;
- carousel;
- gallery;
- tooltip;
- responsive tables;
- CTA blocks;
- footer patterns;
- FAQ blocks;
- product overview patterns;
- product specifications;
- product cards cuando sirvan como base;
- contact forms;
- 404 layout;
- marketing sections reutilizables.

## 4.2 Qué NO significa adoptar Flowbite

No significa:

- sustituir Astro;
- introducir React;
- usar Flowbite React;
- borrar el Design System existente;
- usar colores/defaults de Flowbite sin adaptar;
- copiar bloques sin revisar semántica;
- duplicar JavaScript si HTML nativo ya resuelve el caso;
- instalar varias UI libraries paralelas.

## 4.3 VisionSure sigue controlando el diseño

Conservar:

- `Onest`;
- `brand-*`;
- `page`;
- `surface`;
- `ink`;
- `copy`;
- `muted`;
- `line-*`;
- `rounded-*`;
- `shadow-*`;
- container actual;
- fondo claro/off-white;
- identidad del logo.

Todo snippet Flowbite debe adaptarse a estos tokens.

## 4.4 Regla de JavaScript

### Estático

Si el componente Flowbite es solo markup + Tailwind:

- copiar/adaptar markup;
- NO cargar JS de Flowbite innecesariamente.

### Interactivo

Para:

- dropdowns;
- collapse;
- carousel;
- modal;
- tabs;
- tooltip;

usar la implementación Flowbite compatible con Astro/Tailwind v4 cuando reduzca lógica personalizada.

### Revisión obligatoria

Antes de sustituir un componente custom actual:

1. comparar funcionalidad;
2. comparar accesibilidad;
3. comparar peso JS;
4. verificar SSR/static output;
5. verificar responsive;
6. migrar solo si hay beneficio real.

---

# 5. Dependencias — integración Flowbite

## FLOW-001 — Añadir Flowbite de manera compatible con Tailwind v4

Codex debe:

1. revisar la documentación de la versión de Flowbite que se vaya a instalar;
2. instalar la versión compatible con el Tailwind v4 existente;
3. integrar sus fuentes/plugin según la guía vigente de esa versión;
4. no sustituir la integración actual `@tailwindcss/vite`;
5. mantener `global.css` como fuente principal de tokens VisionSure;
6. comprobar `npm run build`.

## FLOW-002 — No migración masiva ciega

No reemplazar automáticamente todos los componentes actuales.

### Candidatos prioritarios

```text
Header.astro
QuoteForm.astro
FaqAccordion.astro
Breadcrumbs
form alerts
gallery/carousel
dropdowns
mobile navigation
badges
```

### Componentes de dominio que deben permanecer propios

```text
ProductCard
IndustryCard
EquipmentSelector
ProductSpecs
IncludedComponents
RecommendedProducts
DashCamStrip
ProjectCard
```

Pueden usar patrones Flowbite internamente.

---

# 6. Arquitectura objetivo

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── MobileNavigation.astro       # si mejora separación
│   │
│   ├── ui/
│   │   ├── Breadcrumbs.astro
│   │   ├── CatalogBadge.astro
│   │   ├── SectionHeader.astro
│   │   ├── CallLink.astro
│   │   └── WhatsAppButton.astro
│   │
│   ├── home/
│   │   ├── Hero.astro
│   │   ├── EquipmentSelector.astro
│   │   ├── ProductCategories.astro
│   │   ├── DashCamStrip.astro
│   │   ├── WhyVisionSure.astro
│   │   ├── ProjectsPreview.astro
│   │   └── FaqPreview.astro
│   │
│   ├── products/
│   │   ├── ProductCard.astro
│   │   ├── ProductGrid.astro
│   │   ├── ProductGallery.astro
│   │   ├── ProductSpecs.astro
│   │   ├── IncludedComponents.astro
│   │   ├── RelatedProducts.astro
│   │   ├── IndustryChips.astro
│   │   └── DecisionHelp.astro
│   │
│   ├── industries/
│   │   ├── IndustryCard.astro
│   │   ├── IndustryGrid.astro
│   │   ├── IndustryIcon.astro
│   │   ├── RecommendedProducts.astro
│   │   └── InstallationGallery.astro
│   │
│   ├── dash-cams/
│   │   ├── DashCamCard.astro
│   │   ├── DashCamComparison.astro
│   │   └── DashCamStrip.astro
│   │
│   ├── forms/
│   │   ├── QuoteForm.astro
│   │   ├── AssessmentForm.astro
│   │   └── ContactForm.astro            # solo si realmente se requiere separado
│   │
│   ├── faq/
│   │   └── FaqAccordion.astro
│   │
│   ├── projects/
│   │   ├── ProjectCard.astro
│   │   └── ProjectImage.astro
│   │
│   └── seo/
│       ├── SEO.astro
│       ├── BreadcrumbSchema.astro
│       ├── OrganizationSchema.astro
│       └── ProductSchema.astro
│
├── content/
│   ├── products/
│   ├── projects/
│   └── dash-cams/                       # placeholders Phase 1; real data Phase 2
│
├── data/
│   ├── company.ts
│   ├── navigation.ts
│   ├── home.ts
│   ├── productCategories.ts
│   ├── industries.ts
│   ├── dashCams.ts                      # puede ser TS o collection
│   ├── resources.ts
│   ├── faq.ts
│   ├── legal.ts
│   └── quote.ts
│
├── lib/
│   ├── products.ts
│   ├── industries.ts
│   ├── projects.ts
│   ├── faq.ts
│   └── quote-delivery.ts
│
├── layouts/
│   └── BaseLayout.astro
│
└── pages/
    ├── index.astro
    ├── products/
    ├── solutions/
    ├── dash-cams/
    ├── services/
    ├── resources/
    ├── about/
    ├── quote/
    ├── contact/
    ├── glossary/
    ├── privacy-policy/
    ├── terms/
    ├── warranty-policy/
    └── 404.astro
```

La estructura exacta puede simplificarse cuando un directorio contenga una sola página, pero las URLs públicas sí son obligatorias.

---

# 7. Refactor de modelo de datos

## DATA-001 — Renombrar catálogo actual de `solutions` a `products`

Migrar conceptualmente:

```text
src/content/solutions/
```

a:

```text
src/content/products/
```

Y:

```ts
CollectionEntry<'solutions'>
```

a:

```ts
CollectionEntry<'products'>
```

Actualizar:

- imports;
- helper `getPublishedSolutions`;
- nombres de tipos;
- referencias internas;
- tests;
- URLs.

### No perder datos existentes

Conservar para cada producto actual:

- title;
- systemCode;
- summary;
- features;
- specifications;
- components;
- applications;
- notes;
- image;
- SEO;
- draft.

## DATA-002 — Añadir `catalogClass`

Schema requerido:

```ts
catalogClass: z.enum([
  'SEE',
  'RECORD',
  'SURROUND',
  'SENSE',
  'CONNECT',
  'SPECIALTY',
])
```

Asignación:

```text
VST-S4101 → SEE
VST-S4102 → SEE
VST-S4201 → RECORD
VST-S4202 → RECORD
VST-S8401 → CONNECT
VST-S6301 → SURROUND
VST-S8501 → SENSE
VST-S4901 → SPECIALTY
```

## DATA-003 — Categorías de productos

Reemplazar el significado de `solutionCategories.ts` con `productCategories.ts`.

IDs:

```text
multi-camera-systems
360-camera-systems
radar-detection
crane-cameras
cameras-monitors
accessories
```

Los últimos dos son listing-only en Phase 1.

## DATA-004 — Relación Product ↔ Industry

Cada producto debe poder declarar industrias compatibles.

Modelo recomendado:

```ts
industries: z.array(
  z.enum([
    'cranes',
    'construction',
    'trucks-fleets',
    'mining',
    'ports',
    'agriculture',
  ])
).default([])
```

La relación inversa de Industry → Products debe derivarse de los productos, o usar una estructura central validada.

### Regla

No mantener dos relaciones manuales independientes que puedan divergir.

Preferencia:

```text
Product.industries = fuente canónica
Industry recommended products = derivado
```

Si los datos actuales de `industries.ts` contienen “reason per relationship”, conservar esa metadata en una estructura validada, pero verificar que cada `systemCode` exista.

## DATA-005 — Componentes incluidos y accesorios

El schema debe permitir:

```text
included
choice
optional
```

ya existente.

Mapear `optional` a accesorios opcionales en Product Detail.

## DATA-006 — Product gallery preparada para Phase 2

Agregar soporte de múltiples imágenes sin exigirlas ahora.

Ejemplo conceptual:

```ts
gallery: z.array(
  z.object({
    src: z.string(),
    alt: z.string(),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
  })
).default([])
```

No inventar fotos para rellenarla.

## DATA-007 — Spec sheet preparada

Soporte opcional:

```ts
specSheet?: {
  href: string;
  label?: string;
}
```

Phase 1 puede mostrar placeholder/no renderizar CTA si no hay PDF.

## DATA-008 — Dash Cams

Crear estructura para seis modelos placeholder.

No inventar nombres comerciales definitivos.

Slugs temporales:

```text
front-4k
dual-4k
2ch-compact
3ch-pro
4ch-360
thermal
```

Marcar claramente en datos/comentarios de desarrollo:

```text
Temporary configuration-based slug.
Final VisionSure product name TBD.
```

## DATA-009 — Product Master Sheet

Phase 2 deberá cargar datos únicamente desde Product Master Sheet verificado.

Phase 1 NO debe:

- inventar nuevos part numbers;
- corregir VST codes por intuición;
- importar manufacturer names;
- generar specs no verificadas.

---

# 8. Árbol completo de rutas obligatorio

## ROUTE-001 — Products

```text
/products/
/products/multi-camera-systems/
/products/multi-camera-systems/vst-s4101/
/products/multi-camera-systems/vst-s4102/
/products/multi-camera-systems/vst-s4201/
/products/multi-camera-systems/vst-s4202/
/products/multi-camera-systems/vst-s8401/

/products/360-camera-systems/
/products/360-camera-systems/vst-s6301/

/products/radar-detection/
/products/radar-detection/vst-s8501/

/products/crane-cameras/
/products/crane-cameras/vst-s4901/

/products/cameras-monitors/
/products/accessories/
```

### Restricción

No crear páginas individuales para:

- monitors;
- individual cameras;
- controls;
- accessories.

En Phase 1 se muestran como:

- table/list rows;
- included components;
- optional accessories.

## ROUTE-002 — Industries

El label visual del menú es **Industries**.

La jerarquía URL es:

```text
/solutions/
/solutions/cranes/
/solutions/construction/
/solutions/trucks-fleets/
/solutions/mining/
/solutions/ports/
/solutions/agriculture/
```

Eliminar dependencia arquitectónica de:

```text
/industries#...
```

### Equipment selector

La card visual “Excavator” debe dirigir a:

```text
/solutions/construction/
```

salvo nueva instrucción del cliente.

No inventar:

```text
/solutions/excavator/
```

## ROUTE-003 — Dash Cams

```text
/dash-cams/
/dash-cams/front-4k/
/dash-cams/dual-4k/
/dash-cams/2ch-compact/
/dash-cams/3ch-pro/
/dash-cams/4ch-360/
/dash-cams/thermal/
/dash-cams/why-buy-local/
/dash-cams/member-offers/
/dash-cams/book-assessment/
```

## ROUTE-004 — Services

```text
/services/
```

Debe contener bloques para:

- Installation & Support;
- Free Assessment / Consultation;
- Financing (OAC);
- Related Services.

Related Services:

- crane repair;
- joystick repair;
- OptiNect.

No crear páginas internas individuales.

External URL pendiente → no inventarla.

## ROUTE-005 — Resources

Ruta segura explícita:

```text
/resources/
```

Contenido requerido:

- glossary;
- regulations;
- “Which system do I need?”;
- Projects in BC;
- FAQ;
- downloads.

Ruta explícitamente definida:

```text
/glossary/
```

### Importante

El Work Order no define URLs individuales para todos los demás recursos.

Codex NO debe inventar silenciosamente una arquitectura pública definitiva.

Hasta aprobación:

- `/resources/` puede actuar como hub;
- enlazar a rutas existentes como `/faq/` y `/projects/` si aplica;
- `/glossary/` sí debe existir;
- cualquier nueva subruta adicional debe quedar documentada como decisión pendiente.

## ROUTE-006 — About

```text
/about/
```

Debe estar preparado para:

- story;
- Langley location;
- brands we carry;
- contact.

### Conflicto pendiente

“Brands we carry” entra en tensión con “No manufacturer names anywhere”.

No publicar manufacturer names hasta aclaración explícita.

## ROUTE-007 — Forms

Obligatorio:

```text
/quote/
```

Mantener `/contact/` si aporta valor, pero Request a Quote principal debe usar `/quote/`.

Book Assessment:

```text
/dash-cams/book-assessment/
```

## ROUTE-008 — Utility

```text
/privacy-policy/
/terms/
/warranty-policy/
404
```

---

# 9. Main Navigation

## NAV-001 — Desktop

Orden obligatorio:

```text
Home
Products
Industries
Dash Cams
Services
Resources
About
[Request a Quote]
```

Mostrar además permanentemente:

```text
(604) 710-4450
```

con:

```text
tel:+16047104450
```

## NAV-002 — Mobile

Mismos destinos.

Debe incluir de forma visible:

- call action;
- Request a Quote.

## NAV-003 — Single source of truth

`src/data/navigation.ts` debe ser la fuente central.

Header y Footer deben consumirla.

Eliminar arrays duplicados hardcoded.

## NAV-004 — Flowbite

Evaluar Flowbite Navbar + Dropdown/Collapse como base.

Requisitos:

- preservar sticky header si sigue siendo útil;
- mantener logo;
- accesibilidad keyboard;
- `aria-expanded`;
- active state;
- responsive;
- mínimo JS necesario.

## NAV-005 — Products dropdown

Puede listar categorías.

## NAV-006 — Industries dropdown

Puede listar seis industries.

## NAV-007 — Resources dropdown

Puede listar únicamente rutas confirmadas.

No inventar URLs.

---

# 10. Footer

Debe incluir:

- navegación completa;
- Products;
- Industries;
- Dash Cams;
- Services;
- Resources;
- About;
- Quote;
- utility pages;
- contacto;
- click-to-call;
- WhatsApp accesible.

Flowbite Footer puede servir como base estructural.

Mantener apariencia VisionSure.

---

# 11. Componente global WhatsApp

## INT-001

Crear:

```text
src/components/ui/WhatsAppButton.astro
```

o equivalente.

Debe aparecer site-wide desde `BaseLayout`.

Destino:

```text
wa.me / +1 604 710 4450
```

El href final debe respetar el formato válido de wa.me para el número:

```text
16047104450
```

No incluir espacios ni símbolos en el número del enlace.

### Requisitos

- visible desktop/mobile;
- no tapar CTA/form fields;
- accessible label;
- focus state;
- fixed positioning;
- z-index controlado;
- no depender de manufacturer assets.

Mensaje prefilled: opcional y pendiente si no ha sido especificado.

---

# 12. Click-to-call

## INT-002

Todo número visible debe utilizar enlace `tel:`.

Número canónico:

```text
Display: (604) 710-4450
href: tel:+16047104450
```

Centralizarlo en `company.ts`.

No volver a escribir el número manualmente en múltiples componentes.

Opcional:

```text
CallLink.astro
```

para evitar inconsistencias.

---

# 13. Los seis templates obligatorios

## TEMPLATE-001 — Home

Ruta:

```text
/
```

Orden exacto:

1. Hero.
2. “What equipment do you operate?” selector.
3. Product category cards.
4. Dash cam strip.
5. Why VisionSure.
6. Testimonials / Projects.
7. Short FAQ + final quote CTA.
8. Footer.

### Hero

Headline:

```text
What you don’t see puts lives and projects at risk
```

CTA:

```text
Request a Quote
```

No mantener como headline principal final:

```text
See more. Operate safer.
```

si contradice el Work Order.

### Equipment selector

Título:

```text
What equipment do you operate?
```

Seis cards:

```text
Crane → /solutions/cranes/
Excavator → /solutions/construction/
Truck → /solutions/trucks-fleets/
Mining → /solutions/mining/
Port → /solutions/ports/
Agriculture → /solutions/agriculture/
```

Usar Flowbite card/feature patterns como base si aporta valor.

### Product categories

Cards con:

- photo/placeholder;
- title;
- one-line description;
- “View products”.

Categorías:

- Multi-camera systems;
- 360° Around View;
- Radar Detection;
- Crane Cameras;
- Cameras & Monitors;
- Accessories.

### Dash Cam strip

Debe diferenciar claramente audiencia personal vehicle / retail.

CTA:

```text
Book a free assessment
```

→

```text
/dash-cams/book-assessment/
```

### Why VisionSure

Preparar visualmente tres ejes:

- compliance: CSA / WorkSafeBC / ISO;
- local Langley support;
- technology: 360°, ADAS, DMS.

### Regla de claims

No afirmar certificaciones específicas no verificadas.

Hasta validación del cliente, redactar como contexto/regulatory awareness o placeholder claramente marcado si la evidencia no existe.

### Testimonials / projects

Phase 1 puede usar placeholders/reference projects.

No inventar:

- customer name;
- company;
- city;
- result;
- quote.

### FAQ

Usar el contenido actual solo como referencia si no es contenido final.

Flowbite Accordion puede ser base.

---

## TEMPLATE-002 — Category / Listing

Usado por:

- product categories;
- Industries overview;
- Dash Cams overview.

### Debe soportar

- intro;
- filterable product grid cuando aplique;
- cards;
- related industries;
- CTA.

### Product Category

Debe contener:

1. title;
2. 2–3 lines de explicación;
3. product grid;
4. cada card:
   - photo;
   - name;
   - model;
   - one-line benefit;
   - 2–3 key specs;
   - View details;
5. Decision Help block;
6. Quote CTA;
7. WhatsApp.

### Decision Help

Crear componente reutilizable:

```text
DecisionHelp.astro
```

Ejemplo:

```text
Wired or wireless?
```

No inventar comparaciones técnicas definitivas si no están verificadas.

---

## TEMPLATE-003 — Industry

Rutas `/solutions/<slug>/`.

Debe contener:

1. heading / intro;
2. blind-spot problem;
3. recommended products;
4. installation photos;
5. Request Quote CTA;
6. WhatsApp;
7. optional projects/case references.

### Relaciones

Recommended products deben derivarse del modelo de relaciones, no duplicarse manualmente.

### Installation photos

Phase 1 permite placeholder.

No publicar fotografías no autorizadas.

---

## TEMPLATE-004 — Product Detail

Es el template más importante.

Usado por:

- Products;
- Dash Cam models.

Debe contener:

1. gallery of real kit photos;
2. name + model;
3. 2-line summary;
4. “Ideal for” chips;
5. included-components table;
6. technical specs table;
7. glossary links;
8. Request Quote;
9. WhatsApp;
10. Phone;
11. related products;
12. optional accessories;
13. spec-sheet download cuando exista.

### Gallery

Flowbite Product Overview / Carousel / gallery pattern puede ser base.

Phase 1:

- soportar gallery;
- mostrar placeholder si aún no hay imágenes reales;
- nunca renderizar broken `<img>`.

### Ideal for

Cada chip enlaza a:

```text
/solutions/<industry>/
```

### Included Components

Responsive table/list.

Flowbite table puede servir como base.

### Specs

Campos esperados cuando existan:

- resolution;
- angle;
- range;
- IP rating;
- temperature;
- power.

No exigir que todos existan si el catálogo actual no los soporta.

### Glossary

ADAS / DMS / FCW deben enlazar a:

```text
/glossary/
```

Preferible deep link:

```text
/glossary/#adas
/glossary/#dms
/glossary/#fcw
```

El uso de anchors aquí sí es válido porque se trata de términos dentro de una página de glosario, no de sustituir páginas de entidades.

### Quote prefill

Ejemplo:

```text
/quote/?product=vst-s6301
```

La query param elegida debe ser única y consistente.

Migrar la implementación actual de `system=` si se decide `product=`.

Documentar compatibilidad.

---

## TEMPLATE-005 — Content

Usado por:

- Services;
- About;
- FAQ;
- guides;
- privacy;
- terms;
- warranty;
- why-buy-local;
- member-offers;
- resources content.

Debe soportar:

- headings;
- body text;
- images;
- callouts;
- FAQ accordion;
- CTA;
- optional noindex/draft state.

Usar Flowbite content/feature/FAQ blocks cuando acelere implementación.

---

## TEMPLATE-006 — Form

Usado por:

- Request Quote;
- Book Assessment;
- Contact.

Debe permitir:

- short form;
- map;
- hours;
- contextual intro.

Flowbite Contact Form / inputs / alerts como base.

---

# 14. Quote Form

## FORM-001 — Ruta

Principal:

```text
/quote/
```

Todos los CTA “Request a Quote” deben apuntar a esta ruta.

## FORM-002 — Campos mínimos del Work Order

Debe incluir explícitamente:

```text
Name
Company
Phone
Equipment type
Product of interest
```

Puede conservar campos adicionales útiles actuales:

- email;
- location;
- quantity;
- timeframe;
- message.

### Importante

No eliminar email si es necesario para respuesta.

## FORM-003 — Prefill

Desde Product Detail:

```text
/quote/?product=vst-s6301
```

o contrato equivalente documentado.

Validar el slug/model contra catálogo.

Nunca reflejar query arbitraria como HTML inseguro.

## FORM-004 — Entrega real

Phase 1 NO se considera terminada hasta demostrar entrega real a:

```text
info@visionsuretech.ca
```

La infraestructura actual de Formspree puede reutilizarse.

### Antes de activar

Confirmar:

- proveedor;
- form ID;
- destinatario;
- domain restrictions;
- spam protection;
- CAPTCHA si aplica;
- privacy disclosure.

### Prueba requerida

Realizar envío desde entorno autorizado y verificar:

1. UI success;
2. provider dashboard;
3. email en `info@visionsuretech.ca`;
4. todos los campos;
5. móvil;
6. manejo de error;
7. no duplicados.

## FORM-005 — Estados UI

Usar Flowbite alert/form validation patterns para:

- sending;
- success;
- error;
- timeout / uncertain delivery;
- required validation.

Mantener `aria-live`.

---

# 15. Book Assessment

Ruta:

```text
/dash-cams/book-assessment/
```

## Decision Gate

El Work Order no confirma si es:

1. lead form;
2. booking calendario real.

### Hasta confirmación

Construir el template/form visual de Phase 1 sin inventar disponibilidad.

Si el cliente confirma booking real, evaluar servicio externo:

- Calendly;
- Cal.com;
- Microsoft Bookings;
- proveedor existente del cliente.

No desarrollar un motor de calendario desde cero salvo requerimiento explícito.

---

# 16. Contact

El Work Order menciona Contact dentro de About y también dentro del Form template.

El repositorio ya tiene:

```text
/contact/
```

### Plan

No eliminar inmediatamente.

Reutilizar si aporta:

- company details;
- map;
- hours;
- general contact.

No confundir Contact con `/quote/`.

Pendiente de decisión cliente:

- mantener `/contact/` independiente;
- o integrar Contact principalmente dentro de About.

---

# 17. Glossary

Crear:

```text
/glossary/
```

Phase 1 debe soportar:

```text
ADAS
DMS
FCW
```

como mínimo por requirement de Product Detail.

No inventar definiciones propietarias; usar definiciones generales verificables o placeholders si falta aprobación editorial.

IDs:

```text
#adas
#dms
#fcw
```

SEO:

- unique title;
- description;
- canonical.

---

# 18. Services

Crear `/services/`.

Secciones:

1. Installation & Support.
2. Free Assessment / Consultation.
3. Financing (OAC).
4. Related Services.

Related Services:

```text
Crane repair
Joystick repair
OptiNect
```

No crear:

```text
/services/crane-repair/
/services/joystick-repair/
/services/optinect/
```

External link pendiente → no inventar.

---

# 19. Resources

Crear `/resources/` como hub.

Debe presentar:

- Glossary;
- Regulations;
- Which system do I need?;
- Projects in BC;
- FAQ;
- Downloads.

### Rutas conocidas reutilizables

```text
/glossary/
/faq/
/projects/
```

Si Projects se mantiene como ruta existente.

### No inventar

URLs definitivas de:

- regulations;
- system guide;
- downloads;

hasta decisión del cliente.

Pueden existir como bloques/placeholder dentro de `/resources/`.

---

# 20. About

Refactor de `/about/` para soportar:

- VisionSure story;
- Langley;
- Brands we carry;
- Contact.

No inventar:

- dirección;
- horarios;
- team;
- manufacturer names;
- certifications;
- legal entity.

---

# 21. Warranty Policy

Crear:

```text
/warranty-policy/
```

Phase 1 permite placeholder/draft.

Debe seguir el mismo patrón que Privacy/Terms:

- `noindex` mientras sea reference/draft;
- aviso visible de contenido pendiente;
- no afirmar términos de garantía no confirmados.

---

# 22. Privacy / Terms

Conservar implementación actual.

No bloquear el refactor por falta de contenido legal definitivo.

Antes de publicación:

- cliente revisa;
- effective date;
- legal details;
- privacy provider disclosures;
- form treatment;
- cambiar a published;
- retirar `noindex`.

---

# 23. 404

Conservar `404.astro`.

Mejorarlo con Flowbite 404 pattern solo si mejora UI sin perder branding.

Hosting final debe servir:

```text
dist/404.html
```

con status HTTP 404.

No redirigir todas las rutas desconocidas a Home con 200.

---

# 24. SEO técnico

## SEO-001 — Mantener

- unique title;
- meta description;
- canonical;
- Open Graph;
- Twitter card;
- sitemap;
- semantic headings;
- alt text;
- Product structured data;
- Breadcrumb structured data.

## SEO-002 — Corregir OG fallback

Crear asset real:

```text
/images/og/visionsure-default.*
```

o cambiar fallback a un asset existente apropiado.

No dejar referencias rotas.

## SEO-003 — Sitemap + noindex

Las rutas `noindex` no deberían aparecer como páginas indexables objetivo.

Revisar integración sitemap y excluir:

- reference projects si siguen `noindex`;
- legal drafts;
- placeholders que se decida no indexar.

## SEO-004 — Structured Data

Completar/reutilizar:

```text
Organization
BreadcrumbList
Product
FAQPage
ContactPage
```

No generar:

- fake price;
- fake availability;
- fake reviews;
- fake rating.

## SEO-005 — Redirects

El nuevo sitio todavía no debe preservar la arquitectura vieja solo por compatibilidad.

Sin embargo:

- documentar redirects necesarios desde el sitio público previo al lanzamiento;
- NO generar reglas arbitrarias sin inventario final.

### Dash Cam slugs

Los seis slugs son temporales.

Si cambian **después** de haber sido publicados/indexados:

```text
301 old → final
```

---

# 25. Images

## IMG-001

Nunca renderizar imagen vacía/rota.

Cada componente debe:

- usar imagen real cuando exista;
- fallback visual seguro cuando no exista;
- alt meaningful;
- width/height cuando se conozca;
- lazy loading salvo LCP/hero.

## IMG-002

Phase 2 requerirá:

- kit galleries;
- dash cam photos;
- installation photos;
- company/Langley imagery;
- approved testimonials/projects assets.

No bloquear Phase 1.

---

# 26. Home — refactor concreto

Actual:

```text
Hero
TrustBar
AboutIntro
SolutionsGrid
WhyVisionSure
IndustriesGrid
ProjectsPreview
FaqPreview
```

Objetivo:

```text
Hero
EquipmentSelector
ProductCategories
DashCamStrip
WhyVisionSure
ProjectsPreview
FaqPreview + final quote CTA
```

### Reutilización

- `Hero.astro` → refactor.
- `IndustriesGrid.astro` → base para `EquipmentSelector.astro`.
- `SolutionsGrid.astro` → base para `ProductCategories.astro`.
- `WhyVisionSure.astro` → conservar/refactor contenido.
- `ProjectsPreview.astro` → conservar.
- `FaqPreview.astro` → conservar/refactor.
- `TrustBar` y `AboutIntro` → retirar de Home si rompen el orden obligatorio; contenido útil puede reutilizarse en About/WhyVisionSure.

---

# 27. Refactor de componentes actuales hacia Flowbite

## CMP-001 — Header

Actual custom JS debe auditarse.

Evaluar Flowbite Navbar/Collapse/Dropdown.

Objetivo:

- menos lógica manual;
- same branding;
- accessible;
- phone;
- quote CTA;
- required menu;
- responsive.

## CMP-002 — Footer

Usar Flowbite footer structure como referencia si reduce markup repetitivo.

No sacrificar diseño VisionSure.

## CMP-003 — FAQ

`<details>/<summary>` actual es semánticamente bueno.

No reemplazar solo por usar Flowbite.

Opciones:

- conservar HTML nativo + adoptar estilo Flowbite;
- usar Flowbite accordion si aporta comportamiento requerido.

Preferir menor JS.

## CMP-004 — QuoteForm

Refactor visual hacia patrones Flowbite:

- labels;
- inputs;
- select;
- textarea;
- checkbox;
- alerts;
- buttons.

Conservar lógica segura actual.

## CMP-005 — Product Gallery

Flowbite product gallery/carousel es candidato fuerte.

## CMP-006 — Breadcrumbs

Usar patrón Flowbite.

Crear componente reutilizable.

## CMP-007 — Badges

Crear `CatalogBadge.astro` basado en badge pattern Flowbite.

Debe soportar exactamente:

```text
SEE
RECORD
SURROUND
SENSE
CONNECT
SPECIALTY
```

## CMP-008 — Tables

Product specs e included components pueden usar Flowbite responsive tables como base.

## CMP-009 — Product Cards

Usar Flowbite product card como base cuando encaje, pero `ProductCard.astro` sigue siendo componente de dominio propio.

## CMP-010 — Industry Cards

Componente propio; puede usar Flowbite card/feature visual.

---

# 28. Single Source of Truth

## SSOT-001 — Company data

`company.ts` debe contener:

- display phone;
- E.164 phone;
- WhatsApp number;
- email;
- address;
- hours;
- social URLs.

Campos desconocidos pueden ser `null`.

Nunca generar placeholders falsos como links reales.

## SSOT-002 — Navigation

Solo `navigation.ts`.

## SSOT-003 — Home copy

`home.ts` o equivalente debe ser fuente de copy que se comparte.

No duplicar mismo hero en componente y archivo de datos.

## SSOT-004 — Product routes

Generar con helpers.

Evitar concatenaciones duplicadas por todo el proyecto.

Ejemplo conceptual:

```ts
productUrl(product)
categoryUrl(category)
industryUrl(industry)
quoteUrl(product?)
```

---

# 29. Futura internacionalización

No implementar idiomas ahora.

Pero:

- no hardcodear lógica que dependa de path root imposible de prefijar;
- centralizar routes;
- separar datos/copy;
- evitar IDs basados en texto visible;
- dejar posible introducir locale routing después.

Objetivo futuro:

```text
/products/...
/es/products/...
/pa/products/...
```

sin reescribir todos los componentes.

---

# 30. Accesibilidad

Minimum acceptance:

- `lang="en"`;
- single logical `h1`;
- heading hierarchy;
- keyboard navigation;
- visible focus;
- alt;
- labels;
- fieldsets;
- aria-live;
- button vs link semantics;
- no clickable div;
- sufficient touch targets;
- responsive zoom;
- mobile menu keyboard;
- Flowbite component states revisados.

No asumir que copiar Flowbite garantiza automáticamente que nuestra adaptación siga siendo accesible.

---

# 31. Responsive

Breakpoints deben verificarse al menos en:

```text
320 px
375 px
390/393 px
768 px
1024 px
1280 px
1440 px
```

Prioridad móvil:

- Header;
- CTA;
- Product specs;
- included components;
- quote form;
- gallery;
- equipment selector;
- product grid;
- WhatsApp;
- Footer.

No horizontal overflow.

---

# 32. Performance

Mantener filosofía Astro:

- static HTML por defecto;
- JS solo cuando hace falta;
- no React hydration;
- lazy images;
- evitar cargar Flowbite JS global completo si se puede usar import selectivo/seguro compatible con la versión instalada;
- revisar bundle;
- no añadir librerías redundantes.

---

# 33. Security / forms

- no secrets `PUBLIC_*`;
- Formspree ID puede ser público si el proveedor lo diseña así;
- no insertar HTML desde query strings;
- server/provider-side spam controls;
- honeypot existente;
- CAPTCHA si requerido;
- no loguear PII innecesariamente;
- no guardar form content en localStorage por defecto;
- mantener timeout;
- no auto-retry para evitar duplicados.

---

# 34. Orden de implementación para Codex

## FASE A — Preparación y baseline

### A1
Crear branch de trabajo, por ejemplo:

```text
refactor/phase1-work-order
```

### A2
Ejecutar:

```bash
npm install
npm test
npm run build
```

Registrar baseline.

### A3
Inventariar rutas generadas actuales.

### A4
No borrar código hasta que exista reemplazo funcional.

---

## FASE B — Flowbite + Design System

### B1
Integrar Flowbite compatible con Tailwind v4.

### B2
Confirmar que `global.css` conserva todos los VisionSure tokens.

### B3
Crear/adaptar primitives necesarios:

```text
Breadcrumbs
CatalogBadge
CallLink
WhatsAppButton
SectionHeader
```

### B4
No crear primitives genéricos si no hay uso real.

---

## FASE C — Data refactor: Solutions → Products

### C1
Crear collection `products`.

### C2
Migrar ocho MD actuales.

### C3
Agregar `catalogClass`.

### C4
Crear `productCategories.ts`.

### C5
Renombrar helpers.

### C6
Actualizar relations y types.

### C7
Build/test.

---

## FASE D — Product routes

Crear todas las rutas Product requeridas.

### D1
`/products/`

### D2
seis categorías.

### D3
ocho product detail pages.

### D4
listing-only Cameras/Monitors + Accessories.

### D5
Product Detail template completo.

### D6
Category template completo.

### D7
Build/test.

---

## FASE E — Industries → `/solutions/`

### E1
Transformar datos actuales de industries en rutas reales.

### E2
Crear overview.

### E3
Crear seis detail pages.

### E4
Migrar cross-links.

### E5
Eliminar anchors usados como sustituto de páginas.

### E6
Build/test.

---

## FASE F — Dash Cams

### F1
Crear data/schema placeholder.

### F2
Crear overview/comparison.

### F3
Crear seis model routes.

### F4
Why Buy Local.

### F5
Member Offers.

### F6
Book Assessment.

### F7
Reutilizar Product Detail donde corresponda.

### F8
Build/test.

---

## FASE G — Global Navigation

### G1
Refactor `navigation.ts`.

### G2
Header Flowbite-based.

### G3
Mobile.

### G4
Phone.

### G5
Quote CTA.

### G6
Footer.

### G7
Global WhatsApp.

### G8
Build/test.

---

## FASE H — Home

Refactor al orden exacto del Work Order.

### H1 Hero
### H2 Equipment Selector
### H3 Product Categories
### H4 Dash Cam Strip
### H5 Why VisionSure
### H6 Projects/Testimonial placeholder
### H7 FAQ + CTA
### H8 Footer

Build/test.

---

## FASE I — Content / utility pages

### I1 `/services/`
### I2 `/resources/`
### I3 `/glossary/`
### I4 `/about/` alignment
### I5 `/warranty-policy/`
### I6 privacy/terms retain
### I7 404 review

Build/test.

---

## FASE J — Forms

### J1
Crear `/quote/` reutilizando/refactorizando `QuoteForm`.

### J2
Actualizar todos los CTA.

### J3
Implementar `?product=` prefill.

### J4
Book Assessment visual/form.

### J5
Contact separation.

### J6
Configurar delivery real cuando credenciales/proveedor estén disponibles.

### J7
Test envío real.

---

## FASE K — SEO + QA

### K1
OG fallback.

### K2
canonical.

### K3
unique metadata.

### K4
structured data.

### K5
sitemap/noindex.

### K6
broken link scan.

### K7
manufacturer name scan.

### K8
phone consistency scan.

### K9
typo scan.

### K10
responsive.

### K11
accessibility.

### K12
build.

---

## FASE L — Client review

Preparar preview de Phase 1.

Jacob y Maria deben revisar/aprobar:

- information architecture;
- navigation;
- templates;
- interactions;
- responsive;
- structure.

Registrar sign-off.

---

# 35. Checklist exacto de páginas

## Products — 15 indicadas por el addendum

- [ ] `/products/`
- [ ] `/products/multi-camera-systems/`
- [ ] `/products/multi-camera-systems/vst-s4101/`
- [ ] `/products/multi-camera-systems/vst-s4102/`
- [ ] `/products/multi-camera-systems/vst-s4201/`
- [ ] `/products/multi-camera-systems/vst-s4202/`
- [ ] `/products/multi-camera-systems/vst-s8401/`
- [ ] `/products/360-camera-systems/`
- [ ] `/products/360-camera-systems/vst-s6301/`
- [ ] `/products/radar-detection/`
- [ ] `/products/radar-detection/vst-s8501/`
- [ ] `/products/crane-cameras/`
- [ ] `/products/crane-cameras/vst-s4901/`
- [ ] `/products/cameras-monitors/`
- [ ] `/products/accessories/`

## Dash Cams — 10

- [ ] `/dash-cams/`
- [ ] `/dash-cams/front-4k/`
- [ ] `/dash-cams/dual-4k/`
- [ ] `/dash-cams/2ch-compact/`
- [ ] `/dash-cams/3ch-pro/`
- [ ] `/dash-cams/4ch-360/`
- [ ] `/dash-cams/thermal/`
- [ ] `/dash-cams/why-buy-local/`
- [ ] `/dash-cams/member-offers/`
- [ ] `/dash-cams/book-assessment/`

## Industries — 7

- [ ] `/solutions/`
- [ ] `/solutions/cranes/`
- [ ] `/solutions/construction/`
- [ ] `/solutions/trucks-fleets/`
- [ ] `/solutions/mining/`
- [ ] `/solutions/ports/`
- [ ] `/solutions/agriculture/`

## Other

- [ ] `/`
- [ ] `/services/`
- [ ] `/resources/`
- [ ] `/glossary/`
- [ ] `/about/`
- [ ] `/quote/`
- [ ] `/privacy-policy/`
- [ ] `/terms/`
- [ ] `/warranty-policy/`
- [ ] 404
- [ ] `/contact/` decision documented
- [ ] `/faq/` retained/integrated
- [ ] `/projects/` retained/integrated

---

# 36. Matriz de trazabilidad de requisitos

| ID | Requisito | Implementación esperada | Acceptance |
|---|---|---|---|
| REQ-001 | New site from scratch | nueva IA; no copiar legacy structure | rutas cumplen Work Order |
| REQ-002 | English only | `lang=en`, no language UI | ninguna mirror `/es`/`/pa` |
| REQ-003 | No manufacturer names | validation/search de contenido | scan limpio |
| REQ-004 | Two audiences | Products + Dash Cams top-level | navegación separada |
| NAV-001 | menú exacto | Header | desktop/mobile correcto |
| NAV-001 | phone in header | `CallLink` | click-to-call |
| INT-001 | WhatsApp global | BaseLayout | todas las páginas |
| ROUTE-001 | Products tree | product pages | 15 URLs |
| ROUTE-002 | Industries tree | `/solutions` | 7 URLs |
| ROUTE-003 | Dash Cams tree | dash pages | 10 URLs |
| ROUTE-004 | Services | content template | ruta navegable |
| ROUTE-005 | Resources | hub | ruta navegable |
| ROUTE-006 | About | content template | ruta navegable |
| FORM-001 | Quote | `/quote/` | ruta navegable |
| TEMPLATE-001 | Home | exact order | reviewed |
| TEMPLATE-002 | Category | reusable | products/industry/dash |
| TEMPLATE-003 | Industry | reusable | 6 industries |
| TEMPLATE-004 | Product Detail | reusable | 8 products + dash |
| TEMPLATE-005 | Content | reusable | pages content |
| TEMPLATE-006 | Form | reusable | quote/assessment/contact |
| FORM-002 | quote fields | minimum requested fields | visible/validated |
| FORM-003 | product prefill | query param | valid products preselect |
| FORM-004 | email delivery | Formspree/provider | received in inbox |
| INT-002 | click-to-call | phone helper | every phone |
| HOME-Selector | six equipment cards | EquipmentSelector | proper `/solutions` links |
| Crosslinks | Product ↔ Industry | derived relations | reciprocal navigation |
| MOBILE | all templates responsive | CSS/Flowbite | QA breakpoints |
| SEO | metadata | SEO component | unique/correct |
| OG | social fallback | valid image | no broken image |
| Utility | privacy/terms/warranty/404 | pages | all exist |
| Signoff | Jacob + Maria | client review | explicit approval |

---

# 37. Phase 1 Definition of Done

Phase 1 NO está terminada hasta cumplir TODO:

- [ ] Todas las páginas requeridas existen.
- [ ] Todas las rutas son limpias y navegables.
- [ ] No se usan anchors como reemplazo de Industry/Product pages.
- [ ] Los seis templates están implementados.
- [ ] Home sigue el orden solicitado.
- [ ] Header cumple menú exacto.
- [ ] Header muestra teléfono.
- [ ] Request a Quote está destacado.
- [ ] WhatsApp aparece site-wide.
- [ ] Todos los números visibles son click-to-call.
- [ ] Equipment selector funciona.
- [ ] Product → Industries funciona.
- [ ] Industry → Products funciona.
- [ ] Quote prefill funciona.
- [ ] Quote entrega realmente a `info@visionsuretech.ca`.
- [ ] Mobile funciona en todos los templates.
- [ ] SEO no contiene fallback roto.
- [ ] Sitemap/noindex fue revisado.
- [ ] No existen manufacturer names publicados.
- [ ] No existen teléfonos placeholder.
- [ ] No existen imágenes rotas.
- [ ] No existe typo `/glosary`.
- [ ] El teléfono usa formato consistente.
- [ ] `npm test` pasa.
- [ ] `npm run build` pasa.
- [ ] preview final fue revisado.
- [ ] Jacob aprobó estructura.
- [ ] Maria aprobó estructura.

---

# 38. Contenido explícitamente fuera de Phase 1

No bloquear la implementación esperando:

- Product Master Sheet final;
- product copy final;
- kit photos finales;
- spec-sheet PDFs;
- FAQ final;
- testimonials finales;
- sister company URL;
- final Dash Cam product names.

Placeholders son válidos.

### Pero

Los placeholders:

- no deben parecer datos reales inventados;
- pueden usar `noindex`;
- no deben generar claims falsos;
- no deben contener manufacturer names.

---

# 39. Client Decision Gates

## DG-001 — Resources URL hierarchy

Pendiente:

- Regulations URL;
- Which System Do I Need URL;
- Downloads URL;
- Projects under Resources vs existing `/projects/`.

No inventar rutas definitivas sin decisión.

## DG-002 — Book Assessment

¿Lead form o appointment scheduler?

Phase 1 puede construir estructura, pero integración depende de decisión.

## DG-003 — Contact

¿Ruta `/contact/` independiente o About?

Mantener actual hasta resolución.

## DG-004 — Brands we carry vs no manufacturer names

No publicar marcas/fabricantes hasta aclaración.

## DG-005 — Compliance claims

Confirmar qué significa mostrar:

```text
CSA
WorkSafeBC
ISO
```

No afirmar certificaciones sin evidencia.

## DG-006 — Company data

Pendiente confirmar:

- exact Langley address;
- hours;
- email(s);
- LinkedIn;
- legal identity.

## DG-007 — Quote provider

Formspree está preparado actualmente, pero requiere confirmación/configuración real.

## DG-008 — WhatsApp message

Prefilled text opcional.

## DG-009 — Final Dash Cam names

Antes de lanzamiento público/indexación final.

---

# 40. Reglas para no repetir errores del sitio anterior

Codex debe verificar automáticamente/manual:

## OLD-001
No existe:

```text
tel:+1-123-456-7890
```

## OLD-002
No hay `<img>` rotas o `src=""`.

## OLD-003
No existe:

```text
IIncluded Components
```

## OLD-004
No existe:

```text
/glosary
```

## OLD-005
No usar:

```text
(604) 710- 4450
```

Formato:

```text
(604) 710-4450
```

## OLD-006
No crear una mega página basada en hash navigation en vez de URLs.

## OLD-007
No usar generic title:

```text
visionsuretech.ca - Vancouver, BC
```

Cada página requiere metadata propia.

---

# 41. Pruebas recomendadas

## Automated

Mantener tests existentes.

Agregar tests para:

### Routes/data

- product slug uniqueness;
- product systemCode uniqueness;
- category exists;
- `catalogClass` valid;
- industry IDs valid;
- no unknown product relation;
- no manufacturer banned terms cuando exista lista;
- no duplicate canonical route.

### Quote

- valid query prefill;
- unknown query ignored safely;
- timeout;
- error;
- success;
- duplicate submit prevention.

### Build

```bash
npm test
npm run build
```

## Static checks

Crear script opcional:

```text
scripts/phase1-audit.mjs
```

que inspeccione `dist/` para:

- required routes;
- broken internal links;
- placeholder phone;
- `/glosary`;
- manufacturer banned terms;
- missing title;
- missing description;
- missing canonical;
- empty image src.

No convertirlo en scraper complejo innecesario.

---

# 42. Commit strategy recomendada

Commits pequeños, ejemplo:

```text
chore: integrate flowbite with visionSure tokens
refactor: migrate solutions content to products
feat: add product category routes
feat: add industry solution routes
feat: add dash cam phase1 routes
refactor: rebuild navigation for phase1 IA
feat: add global whatsapp and click-to-call
refactor: align homepage with work order
feat: add services resources glossary and warranty
refactor: move quote flow to /quote
fix: complete seo and sitemap phase1 checks
test: add phase1 route and content validation
docs: update project context and phase1 status
```

No mezclar todo en un único commit gigante.

---

# 43. Documentation updates required

Al completar bloques, actualizar:

```text
docs/PROJECT_CONTEXT.md
docs/PENDING_WORK.md
docs/CONTACT_SETUP.md
```

Crear si aporta valor:

```text
docs/PHASE1_IMPLEMENTATION_PLAN.md
docs/PHASE1_ACCEPTANCE.md
docs/FLOWBITE_USAGE.md
```

### `FLOWBITE_USAGE.md`

Debe explicar:

- versión;
- setup;
- cuándo usar snippets;
- cuándo cargar JS;
- cómo aplicar tokens VisionSure;
- qué componentes del proyecto usan Flowbite;
- que no se usa React.

---

# 44. Regla de actualización de `PENDING_WORK.md`

El archivo actual fue redactado antes del nuevo Work Order.

Debe ser reescrito para reflejar:

- Products;
- Industries `/solutions`;
- Dash Cams;
- Services;
- Resources;
- `/quote`;
- Flowbite;
- WhatsApp;
- acceptance actual.

No mantener “catálogo de ocho sistemas + industries anchors” como si fuera el objetivo final.

---

# 45. Riesgos principales

## RISK-001 — romper URLs mientras se migra

Mitigación:

- crear nuevas rutas antes de eliminar viejas;
- actualizar helpers centralizados;
- build por etapa.

## RISK-002 — duplicar relaciones Product/Industry

Mitigación:

- una fuente canónica;
- validación.

## RISK-003 — sobreusar Flowbite JS

Mitigación:

- static markup cuando baste;
- no cargar runtime para una card/button.

## RISK-004 — romper identidad visual

Mitigación:

- adaptar Flowbite a tokens existentes;
- no copiar colores default sin revisar.

## RISK-005 — inventar contenido para completar layouts

Mitigación:

- placeholders explícitos;
- no claims ni datos ficticios.

## RISK-006 — Phase 2 antes de terminar IA

Mitigación:

- no cargar Product Master Sheet definitivo hasta cerrar estructura Phase 1.

---

# 46. Handoff a Phase 2

Solo iniciar Phase 2 cuando Phase 1 DoD esté cumplido y exista sign-off.

Phase 2 deberá poder hacer:

```text
Verified Product Master Sheet
        ↓
structured product content
        ↓
products collection
        ↓
existing Product templates
```

sin cambiar de nuevo la jerarquía de URLs.

Además:

```text
photos
PDF spec sheets
FAQ copy
testimonials
sister-company URL
final dash-cam names
```

deben entrar como contenido, no como otra reescritura de arquitectura.

---

# 47. Criterio de éxito del refactor

El refactor es exitoso si al final:

1. la estructura interna refleja el dominio real;
2. `products` significa productos;
3. `/solutions` significa industries;
4. Dash Cams está desacoplado;
5. los componentes estándar aprovechan Flowbite;
6. VisionSure mantiene su identidad;
7. hay menos lógica UI repetida;
8. no se introduce React;
9. las relaciones son data-driven;
10. la transición a Phase 2 es principalmente carga de contenido, no otro refactor estructural.

---

# 48. Instrucción final para Codex

Antes de marcar una tarea como terminada:

1. verificar el requisito asociado en este documento;
2. comprobar que no contradice el Work Order;
3. reutilizar código actual siempre que sea razonable;
4. aplicar Flowbite para patrones estándar cuando reduzca trabajo/duplicación;
5. conservar VisionSure tokens;
6. comprobar desktop/mobile;
7. ejecutar tests/build;
8. documentar cualquier desviación;
9. no inventar datos del cliente;
10. no avanzar a Phase 2 hasta que el checklist Definition of Done esté completo.

**Phase 1 debe terminar como una arquitectura estable y aprobada sobre la cual Phase 2 solo necesite incorporar contenido verificado.**
