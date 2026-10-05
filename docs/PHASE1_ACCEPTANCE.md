# Phase 1 — registro de implementación y aceptación

Actualizado: 2026-09-30. Rama: `codex/phase1-work-order`.

## Estado

Auditoría vigente de cierre: [PHASE1_CLOSURE_AUDIT.md](PHASE1_CLOSURE_AUDIT.md). Work Order leído nuevamente; 48 rutas comprobadas en navegador a 375 y 1440 px, menú móvil y preselección desde Boom-Tip confirmados. La evidencia no resuelve los gates externos.

La estructura del sitio está implementada para revisión. **La Fase 1 contractual aún no está cerrada:** faltan activar y comprobar la recepción de cotizaciones, resolver Assessment y registrar la aprobación de Jacob/Maria. No se ha desplegado ni enviado una solicitud real.

Fuente de alcance: el Work Order y los PDFs de referencia entregados por el usuario; las decisiones posteriores del usuario prevalecen.

## Entregado

| Bloque | Implementación |
| --- | --- |
| Productos | Overview, seis categorías, ocho fichas con características, especificaciones, componentes y opciones conservados. Clases SEE/RECORD/SURROUND/SENSE/CONNECT/SPECIALTY separadas de las categorías. |
| Industrias | `/solutions/` y seis páginas: Cranes, Construction, Trucks & Fleets, Mining, Ports, Agriculture & Forestry. Relaciones centralizadas, recomendaciones de referencia y espacio para fotos. |
| Dash Cams | Diez páginas: overview, seis configuraciones provisionales, Why Buy Local, Member Offers y Book Assessment. Filtro por canales, comparación y detalles pendientes explícitos. |
| Plantillas | Home, Listing, Industry Detail, Product Detail, Content y Form. La plantilla de producto se comparte entre industrial y dash cams. |
| Inicio | Hero solicitado → selector de seis equipos → categorías → Dash Cam strip → Why VisionSure → proyectos de referencia → FAQ y CTA final → Footer. |
| Navegación | Menú y Footer desde datos comunes; Flowbite Collapse/Dropdown con teclado, Escape, foco y `aria-expanded`. Teléfono y WhatsApp reales del Work Order. |
| Páginas de apoyo | Services, Resources, Glossary con anclas ADAS/DMS/FCW, About, Quote y Warranty. Conservadas Contact, FAQ, Projects, Privacy, Terms y 404. |
| Cotización | `/quote/?product=vst-s6301`, opciones industriales y dash cams, compatibilidad con `?system=VST-S6301`, parámetros validados. Solo los cinco campos del punto 4: nombre, empresa, teléfono, tipo de equipo y producto de interés. Resumen local con esos mismos campos si no hay proveedor activo. |
| SEO | Metadatos/canonical, imágenes sociales existentes, Organization/Breadcrumb/Product JSON-LD, noindex en referencias y sitemap que excluye esas páginas. Sitemap provisional limitado a Home, Products/Industries overview, Quote y Contact. |

## Decisiones del usuario

- Proveedor de cotizaciones no elegido. Se propone **Formspree**; integración preparada y desactivada. No hay cuenta ni ID real configurados.
- El usuario inicialmente eligió agenda externa y luego indicó que debe consultarlo con el cliente. **Decisión vigente: Assessment pendiente entre agenda externa y solicitud de contacto.** Se conserva un enlace externo opcional por configuración, sin calendario ficticio ni reserva simulada.
- Fotografías y datos reales de instalaciones no están disponibles. Mantener referencias visibles hasta recibir el material.
- Inglés solamente. No publicar proveedores/fabricantes, certificaciones, ofertas, precios, testimonios o resultados inventados.

## Verificación técnica

Actualización del 2026-10-01: 13 pruebas, incluyendo navegación con etiquetas alternativas, resumen configurable y opciones con IDs/rutas conservados. Cotización usa un modelo de datos externo y mensajes separados; transporte sin frases de UI. QA de 375 px: preselección, resumen local, foco, limpieza al editar y reset comprobados. Recibir una cotización real y aprobación del cliente siguen sin evidencia.

- `npm run build`: 48 páginas, incluyendo 42 rutas obligatorias y seis páginas existentes de apoyo.
- `npm test`: transporte con respuestas simuladas, preselección segura y validación del enlace de agenda. No comprueba entrega al correo real.
- `python scripts/audit-phase1.py`: revisa rutas requeridas, enlaces internos, anclas, imágenes, H1, metadatos, canonical y exclusión de noindex del sitemap.
- Navegador: Home, producto industrial y Quote en 320/375/480/640/768/1024/1440 px; menú móvil, desplegable con ArrowDown/Escape, búsqueda y estado sin resultados, filtros, resumen local y limpieza al editar. Revisión adicional de Dash Cams, industria, contenido y Assessment.
- No equivale a auditoría WCAG completa, medición Lighthouse en producción, prueba multidispositivo físico ni aceptación del cliente.

Actualización de arquitectura (2026-10-01): 20 pruebas aprobadas y build/auditoría actuales de 48 páginas. Vistas de Home y detalle reciben contenido por props. Verificada la fidelidad de las ocho fichas industriales frente a las fuentes: características, especificaciones, componentes/estados, notas y aplicaciones. Esto no acredita entrega de email, traducciones públicas ni aceptación del cliente.

Páginas de apoyo (2026-10-01): Services, Resources y About separadas en diccionario/vistas por props, con 21 pruebas y build/auditoría aprobados. Contenido, anclas, categorías y enlaces conservados. Revisión móvil sin desbordamiento. Los pendientes externos de aceptación siguen vigentes.

Contact y auxiliares (2026-10-01): 22 pruebas aprobadas; Contact/Assessment y Glossary/Warranty/Member Offers/Why Buy Local/404 separados en datos/vistas. El estado de Assessment permanece pendiente; Quote conserva preselección y configuración del panel. No se envió información a proveedores ni se activó integración. Build/auditoría de 48 páginas aprobados. Recepción real, decisiones del cliente, hosting/HTTP 404 y aceptación siguen sin evidencia.

Listados (2026-10-01): 25 pruebas aprobadas; registro técnico de categorías independiente del idioma, selección de piezas por códigos y vistas por props. Se conservan 25 filas de cámaras/monitores, dos accesorios, ocho sistemas y seis industrias. Build/auditoría aprobados y filtros/móvil revisados. No se altera el estado pendiente de recepción de email ni de aprobación del cliente.

## Para cerrar Phase 1

Verificación vigente del 2026-10-01: 39 pruebas aprobadas, build de 48 páginas y auditoría de 42 rutas aprobados. Catálogo, industrias, Dash Cams y proyectos separan definiciones de contenido; layouts y wrappers principales propagan locale. Fidelidad comprobada de ocho sistemas y tres referencias. Inglés sigue como único idioma habilitado. Estas verificaciones no prueban recepción de correo ni aceptación del cliente.

1. Cliente confirma Formspree o alternativa y configura un formulario que entregue a `info@visionsuretech.ca`.
2. Activar en entorno autorizado y probar aceptación, recepción en dashboard y correo, todos los campos y protección contra spam. Registrar evidencia sin datos personales.
3. Cliente decide Assessment: agenda (enlace, ubicación, zona horaria, duración, horarios y confirmación) o solicitud de contacto (campos y destinatario). Implementar el flujo elegido y comprobarlo.
4. Confirmar obligatoriedad del teléfono/equipo y requisitos finales de Contact. Quote utiliza solo los cinco campos del punto 4 por indicación del usuario. Nombre y empresa son obligatorios; teléfono/equipo opcionales; producto permite pedir ayuda para elegir.
5. Confirmar compra/checkout de Dash Cams. Hoy se usan cotización y Assessment, sin pago ni carrito simulados.
6. Jacob/Maria revisan las seis plantillas, navegación, estructura y referencias y aprueban por escrito. No hay aprobación registrada.

## Para Phase 2 y lanzamiento

Product Master Sheet, códigos/nombres finales, componentes, accesorios, compatibilidad, especificaciones, PDFs, galerías; fotos/proyectos autorizados; historia y marcas aprobadas; dirección/mapa/horarios; contenido de servicios, financiación OAC, ofertas y enlaces externos; textos legales y garantías definitivos. Al verificar contenidos, actualizar `contentStatus`, avisos y la política del sitemap.

Hosting/dominio/HTTPS y respuesta HTTP 404 pendientes. Las rutas anteriores `/industries/` y `/solutions/<antiguo-slug>/` se retiraron del sitio nuevo; no hay redirecciones silenciosas. Revisar tráfico/enlaces y aprobar un mapa de redirecciones por hosting antes del lanzamiento. `/contact/#quote` conserva un bloque que lleva al formulario dedicado.

## Aprobación

| Responsable | Estado | Fecha / evidencia |
| --- | --- | --- |
| Jacob | Pendiente | — |
| Maria | Pendiente | — |
| Recepción de cotización real | Pendiente | — |
| Flujo Assessment | Pendiente de decisión | — |
