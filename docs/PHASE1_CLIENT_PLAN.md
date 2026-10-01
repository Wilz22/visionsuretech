# VisionSure Revisión del alcance y plan de ejecución

Fecha de revisión: 2026-09-30.

Fuente: `C:/Users/santi/Downloads/VisionSure_Phase1_Work_Order_Santiago (1).pdf`, seis páginas, fechado el 27 de septiembre de 2026, remitido por Jacob Seutter. Se revisaron el texto completo, las tablas y todas las páginas renderizadas, y se contrastaron con el código actual. La versión Word revisada previamente presenta el mismo alcance sustancial.

Este documento propone cómo adaptar el sitio nuevo que ya estamos desarrollando. El Work Order es una referencia de requisitos, no una autorización para eliminar el sitio publicado, contratar servicios, enviar mensajes o declarar aprobaciones. No se modificó el website durante esta revisión; los trabajos siguientes siguen pendientes. Jacob y Maria deben aprobar la estructura para cerrar la Fase 1.

## 1 Conclusión y límites de las fases

La base visual, ocho sistemas y parte de las interacciones son reutilizables, pero la arquitectura actual no satisface el Work Order. El catálogo debe pasar de `/solutions/` a `/products/`; `/solutions/` se destina a industrias con URLs independientes. Se añade una línea minorista de seis dash cams, servicios, recursos, garantía y evaluación gratuita.

Fase 1: estructura, rutas, seis plantillas y funcionamiento de navegación/formularios. Los borradores y espacios de referencia son aceptables. La recepción real de cotizaciones y aprobación de Jacob/Maria son condiciones de cierre, aunque falte contenido definitivo.

Fase 2: cargar información desde el Product Master Sheet verificado, fotografías, PDFs, FAQ finales, testimonios y datos de la empresa hermana. El contenido extraído previamente del catálogo se conserva como material de trabajo, pendiente de contraste con la hoja maestra; no afirmar que ya está verificado ni inventar números de parte.

La referencia a eliminar el sitio actual al lanzamiento se interpreta como reemplazar el sitio antiguo publicado. No implica desechar automáticamente el nuevo código en desarrollo. La retirada del sitio antiguo corresponde a un plan posterior de despliegue, respaldo y reversión.

## 2 Información que ya proporciona el cliente

- Idioma inicial: inglés. Español y punjabi son futuras ampliaciones; no crear selector ni versiones traducidas ahora.
- Marca pública de los productos: VisionSure; identificadores VisionSure/VST. No publicar nombres de proveedores o fabricantes, tampoco dentro de imágenes o PDFs.
- Teléfono visible: `(604) 710-4450`; enlace técnico propuesto `tel:+16047104450`.
- WhatsApp: `https://wa.me/16047104450`.
- Correo de notificaciones de cotización: `info@visionsuretech.ca`. Esto identifica el destinatario, pero no configura el servicio ni demuestra recepción.
- Ubicación: Langley. Faltan dirección completa, pin del mapa y horarios.
- Ocho sistemas industriales, seis modelos provisionales de dash cams y árbol de URLs definidos en el addendum.
- Aprobadores: Jacob y Maria. No consta su aprobación del nuevo sitio.

## 3 Matriz de cambios respecto del código actual

| Área | Estado encontrado | Cambio necesario |
| --- | --- | --- |
| Header y footer | Solutions, Industries, Projects, About, FAQ y Contact; CTA de cotización | Menú Home, Products, Industries, Dash Cams, Services, Resources, About y CTA; submenús accesibles; teléfono y navegación completa en footer |
| Productos | Ocho fichas en `/solutions/<slug>`; seis clases SEE/RECORD/etc. | Quince URLs `/products/`; clasificación por tipo de cámara; conservar clase como badge independiente |
| Categorías | Secciones por anclas dentro del catálogo | Seis listados con URL propia; grid filtrable, ayuda para decidir, industrias relacionadas y CTA |
| Industrias | Una página `/industries` con seis anclas | Overview `/solutions/` y seis fichas; incorporar Agriculture & Forestry; adaptar Heavy Equipment a Construction/aplicaciones en lugar de asumir una séptima industria |
| Dash Cams | No hay páginas ni datos | Diez páginas: overview/comparación, seis fichas, Why Buy Local, Member Offers y Book Assessment |
| Home | Hero actual, TrustBar, About, catálogo, ventajas, industrias, proyectos y FAQ | Reordenar según cliente, nuevo hero, selector de equipo en segundo lugar, tira minorista y enfoque local; conservar bloques reutilizables |
| Ficha de producto | Imagen única salvo esquema CONNECT, specs en lista descriptiva, componentes en tarjetas, enlaces de industria y algunos relacionados | Galería, tablas de componentes/specs, chips Ideal For, descarga, glosario, teléfono/WhatsApp, relaciones de accesorios y nuevos enlaces |
| Relaciones | Datos de industrias compartidos; modelos viven una vez | Mantener fuente única, actualizar URLs y validar relaciones; separar recomendación editorial de compatibilidad confirmada |
| Quote | `/contact#quote`, preselección y resumen local; transporte Formspree configurable apagado | `/quote/`, formulario corto y selección de modelo; entrega real a info@visionsuretech.ca; revisar obligatoriedad de campos |
| Evaluación gratuita | No existe | Formulario `/dash-cams/book-assessment/`, con flujo de solicitud o reserva por definir |
| Contacto | Correo/teléfono/dirección nulos en `company.ts` | Cargar datos aportados; preparar mapa/horarios referenciales hasta contar con datos; decidir URL Contact dentro de la navegación nueva |
| Services | No existe | Instalación, soporte, consulta gratuita, financiación OAC y Related Services externo |
| Resources | FAQ y tres proyectos de referencia separados | Hub de recursos, `/glossary/`, normativa, guía de selección, proyectos BC, FAQ y descargas; concretar URLs que el documento no fija |
| About | Presentación general existente | Historia, Langley, contacto y aclaración sobre Brands We Carry |
| Utilidades | Privacy, Terms de referencia y 404 | Añadir Warranty Policy; revisar contenido final y configuración 404 en hosting |
| SEO | Metadatos y schemas presentes; sitemap sin filtro específico; OG por defecto ausente | Actualizar canonicals, breadcrumbs y URLs de schemas; resolver imagen OG; impedir indexar borradores y excluirlos del sitemap |
| Cierre | Compilación anterior de 21 páginas y seis pruebas simuladas | Nuevo inventario, QA de seis plantillas, pruebas de recepción reales y aprobación registrada |

Las seis clases del catálogo NO son las seis categorías de navegación nuevas. Por ejemplo, Multi-camera systems agrupa SEE, RECORD y CONNECT. Mantener ambos ejes separados en los datos evita duplicar productos.

## 4 Inventario de rutas

### Products Quince páginas exactas del addendum

| Ruta | Modelo o función | Badge |
| --- | --- | --- |
| `/products/` | Overview | — |
| `/products/multi-camera-systems/` | Categoría | — |
| `/products/multi-camera-systems/vst-s4101/` | Wireless 4CH | SEE |
| `/products/multi-camera-systems/vst-s4102/` | Wired 4CH | SEE |
| `/products/multi-camera-systems/vst-s4201/` | DVR 9 pulgadas / 2TB | RECORD |
| `/products/multi-camera-systems/vst-s4202/` | DVR 7 pulgadas / 1TB | RECORD |
| `/products/multi-camera-systems/vst-s8401/` | 8CH AI MDVR | CONNECT |
| `/products/360-camera-systems/` | Categoría | — |
| `/products/360-camera-systems/vst-s6301/` | 6CH 360 AVM | SURROUND |
| `/products/radar-detection/` | Categoría | — |
| `/products/radar-detection/vst-s8501/` | Radar Obstacle Detection | SENSE |
| `/products/crane-cameras/` | Categoría | — |
| `/products/crane-cameras/vst-s4901/` | Boom-Tip Zoom | SPECIALTY |
| `/products/cameras-monitors/` | Tabla/listado | — |
| `/products/accessories/` | Tabla/listado | — |

No crear páginas individuales para componentes en Fase 1. Cámaras, monitores y controles van como filas en los listados y en Included Components. Cables/baterías/accesorios solo con datos verificados; campos referenciales mientras tanto.

### Dash Cams Diez páginas exactas del addendum

`/dash-cams/`, `/dash-cams/front-4k/`, `/dash-cams/dual-4k/`, `/dash-cams/2ch-compact/`, `/dash-cams/3ch-pro/`, `/dash-cams/4ch-360/`, `/dash-cams/thermal/`, `/dash-cams/why-buy-local/`, `/dash-cams/member-offers/`, `/dash-cams/book-assessment/`.

Los slugs son provisionales por configuración. No asignarles códigos VST inventados. Una dash cam personal 4CH 360 no es el sistema industrial SURROUND 6CH. Si cambian slugs al recibir los nombres definitivos, actualizar enlaces y redirecciones.

### Industrias Siete páginas

`/solutions/`, `/solutions/cranes/`, `/solutions/construction/`, `/solutions/trucks-fleets/`, `/solutions/mining/`, `/solutions/ports/`, `/solutions/agriculture/`.

El selector Home muestra crane, excavator, truck, mining, port y agriculture; Excavator apunta a Construction. Mining incluye quarries; Agriculture incluye forestry; Ports incluye logistics.

### Otras páginas y decisiones de URL

El documento pide Home, `/services/`, `/resources/`, `/glossary`, `/about/`, `/quote/`, privacidad, términos, garantía y 404. Con las 25 de Products/Dash Cams y las siete de industrias, son **42 páginas o destinos nombrados**, contando 404 y las cuatro utilidades, antes de Contact y posibles subpáginas de Resources. El total de 25 del cliente es un subtotal, no el sitio completo.

Propuesta para utilidades: conservar `/privacy-policy/` y `/terms/`, añadir `/warranty-policy/`, y servir `404.html` ante rutas inexistentes. El documento no fija las URLs legales.

Propuesta pendiente de decisión para Resources: conservar `/faq/` y `/projects/` con sus fichas existentes; crear `/resources/regulations/`, `/resources/system-selection-guide/` y `/resources/downloads/`. También se puede hacer el hub con secciones y enlazar FAQ/Projects/Glossary existentes. Resolver esta decisión antes de cerrar inventario y estimación; no asumir que esos slugs fueron exigidos por el cliente.

Conservar `/contact/` como contacto general es una propuesta útil, ya que el cliente menciona la plantilla Contact pero no define su ruta. Quote y Assessment deben tener rutas propias.

## 5 Vacíos y aclaraciones al cliente

| Prioridad | Pregunta o insumo específico | Motivo y efecto |
| --- | --- | --- |
| Antes de fijar alcance | ¿Dash Cams incluye compra/pago online ahora, o solo asesoría y solicitud? Si compra: ¿precios, moneda, impuestos, stock, envío, devoluciones y plataforma? | Retail-driven/Buy CTA no define checkout. No incluir carrito o cobros en la estimación sin concretarlo |
| Antes de fijar alcance | ¿Book Assessment solicita una devolución de llamada o reserva fecha/hora real? ¿Destinatario, duración, ubicación, disponibilidad y confirmación? | Determina formulario simple frente a integración con agenda |
| Antes de cerrar rutas | ¿Resources requiere subpáginas para normativa, guía, proyectos, FAQ y descargas? ¿Se mantienen Contact/FAQ/Projects actuales? | El árbol de productos es definitivo, el de recursos no |
| Antes de revisar About | ¿Qué significa Brands We Carry si se prohíben nombres de fabricantes? ¿Se sustituye por familias VisionSure? | Contradicción explícita; propuesta provisional: solo VisionSure |
| Antes de cerrar formulario | ¿Qué campos son obligatorios en Quote y Assessment? ¿Se mantiene email? ¿Company es opcional para particulares? | Work Order muestra campos diferentes en plantilla y lista de interacciones; el formulario actual exige nombre, empresa, email y descripción |
| Para envío real | ¿Quién administra info@visionsuretech.ca y comprobará recepción? ¿Autorizan Formspree u otro receptor? ¿Cuenta/form ID, límites, spam/CAPTCHA y coste aceptado? | Saber el correo no activa la entrega. Usar invitaciones/accesos del proyecto, sin pedir contraseñas por mensajes |
| Para hosting y preview | ¿Quién administra dominio/DNS y hosting? ¿Dónde revisarán la Fase 1? ¿Preview privado? ¿Quién opera la publicación y aprueba el cambio? | Dependencia para recepción, protección de borradores y posterior despliegue |
| Para datos locales | Dirección completa de Langley, pin/mapa, horarios, atención por cita y cobertura de instalación/soporte | No basta con el nombre de la ciudad |
| Para WhatsApp | Confirmar que el número indicado recibe WhatsApp y quién atiende Quote/Assessment; horario esperado | Se puede implementar el enlace ya definido, pero falta verificar el canal real |
| Para diseño y aceptación | ¿Se aprueba la dirección visual actual? ¿Guía de marca/logo oficial? ¿Plazo de revisión y cómo entregan Jacob/Maria feedback consolidado? | Evita diseñar todas las páginas y después cambiar la dirección visual |
| Para alcance comercial | Fechas objetivo por fase, presupuesto, revisiones incluidas, responsables de contenido, cambios de alcance y mantenimiento posterior | El documento no establece compromisos de calendario/coste |
| Para aceptación técnica | ¿Qué navegadores/dispositivos son prioritarios y qué objetivos de accesibilidad/rendimiento se usarán? ¿Quién comprueba entrega y aprueba cada plantilla? | Responsive está exigido, pero no hay umbrales medibles ni protocolo detallado; proponer revisión con teclado y tamaños 320/390/768/1440 px y acordar métricas antes de convertirlas en compromisos |
| Fase 2 | Product Master Sheet aprobado con versión/fecha/responsable y acceso al formato original | Fuente única para datos, modelos y componentes finales |
| Fase 2 | Nombres/códigos VisionSure definitivos de seis dash cams y comparación validada | No inferir funciones completas de los nombres provisionales |
| Fase 2 | Fotos reales por kit/modelo e instalación, derechos de uso, PDFs públicos sin nombres/logos de proveedores | Galerías y descargas finales; CONNECT carece de foto propia en la fuente anterior |
| Fase 2 | Compatibilidad por equipo y accesorios, cantidades incluidas/opcionales/alternativas, restricciones y especificaciones confirmadas | No convertir recomendaciones editoriales actuales en compatibilidad certificada |
| Fase 2 | Referencias concretas y redacción aprobada sobre CSA, WorkSafeBC e ISO; explicar si se habla de producto, instalación o empresa | Las menciones del plan no demuestran certificación ni cumplimiento universal |
| Fase 2 | Condiciones de financiación OAC y proveedor; elegibilidad, términos y texto autorizado | No inventar tasas, plazos ni financiación garantizada |
| Fase 2 | Definición de Member Offers: miembros elegibles, beneficio, vigencia, proceso y condiciones | La página existe en alcance, la oferta no está especificada |
| Fase 2 | Empresa hermana, URL, textos aprobados para crane repair, joystick repair y OptiNect | Solo bloque con enlaces externos; no páginas adicionales de estos servicios |
| Antes de producción | Razón social, contacto de privacidad, prácticas/retención y políticas de privacidad, términos, garantía y devoluciones según flujo real | Borradores permitidos para Fase 1; aprobación final necesaria para el lanzamiento |
| Fase 2 | Historia, FAQ, testimonios autorizados con nombre/empresa/ciudad y proyectos en BC con fotos/datos/resultados | Sustituir referencias sin inventar clientes o resultados |
| Antes del lanzamiento | Inventario del sitio antiguo, URLs importantes, respaldo, accesos, fecha de cambio y plan de reversión | Eliminar contenido antiguo no justifica perder datos ni enlaces útiles sin preparación |

No es necesario recibir fotos, PDFs, FAQ o testimonios para comenzar la estructura. Sí es necesario cerrar el flujo minorista y de evaluación antes de comprometer ese trabajo, y tener acceso al receptor para cumplir la condición de envío al final de Fase 1.

## 6 Arquitectura propuesta para aplicar el plan

Mantener Astro/TypeScript/Tailwind y la identidad existente para este sitio nuevo. Las rutas estáticas y plantillas compartidas permiten el alcance editorial de Fase 1; la solución de checkout o agenda se decide según las respuestas del cliente. No imponer un CMS ni cambiar de plataforma solo por el nuevo menú.

- Centralizar rutas y contactos en `src/data/company.ts` y la navegación/submenús en `src/data/navigation.ts`; revisar también valores duplicados/hardcodeados en Header, Footer, Hero y About.
- Separar `productCategory` (tipo de cámara) de `catalogClass` (SEE, RECORD, etc.). Conservar una única identidad por modelo y relaciones por ID, no duplicar registros entre industrias.
- Crear registro de las rutas de Fase 1. Generar modelos/categorías desde datos, con plantillas en `src/components/templates/` o layouts equivalentes y rutas en `src/pages/products/`, `src/pages/solutions/` y `src/pages/dash-cams/`.
- Separar el estado de contenido de su existencia: `reference/verified` o equivalente permite una página de revisión sin inventar especificaciones. El `draft` actual excluye páginas del generador: no reutilizarlo para borrar rutas que el cliente exige revisar.
- Adaptar `src/content.config.ts` para los modelos de dash cams aún sin códigos, galería múltiple, PDF opcional, accesorios relacionados y procedencia/verificación. No forzar códigos industriales VST-S a productos de nombre pendiente.
- Preparar una importación/validación de la hoja maestra cuando llegue. Columnas propuestas: ID estable, modelo público, título, categoría, clase, resumen, características, specs con unidades/condiciones, componentes/cantidad/disponibilidad, industrias, accesorios, fotos/alt/dimensiones, PDF, estado y aprobación. Relacionar tablas por ID y detectar duplicados/códigos desconocidos.
- Extraer QuoteForm como formulario reutilizable con modo Quote/Assessment y distinto destinatario/asunto si corresponde. Los IDs reconocidos deben abarcar ambos catálogos; preselección por URL con lista permitida. Mantener estados de espera/error y prevenir duplicados.
- Mantener inglés sin nuevas rutas traducidas. Centralizar textos y slugs para facilitar futuras traducciones; no construir todavía selector, `/es/` o `/pa/`. Astro contempla enrutamiento por idioma cuando se habilite.
- Plan de migración: actualizar todos los href, canonicals, breadcrumbs, schemas y sitemap. Crear mapa de fichas actuales a nuevas URLs. `/solutions/` cambia de función y no puede redirigirse globalmente a Products. Las anclas antiguas no se envían al servidor: actualizar enlaces internos; decidir compatibilidad adicional según enlaces realmente compartidos.
- Preview con referencias visibles, sin descargas vacías, enlaces `#` como CTA ni correos/teléfonos inventados. Marcar Pending Content cuando falte un recurso. Proteger staging y noindex de borradores; comprobar robots/sitemap antes de producción.

Referencias técnicas consultadas: [Astro Routing](https://docs.astro.build/en/guides/routing/), [Content Collections](https://docs.astro.build/en/guides/content-collections/) e [Internationalization](https://docs.astro.build/en/guides/internationalization/).

## 7 Plan por bloques con entregables y aceptación

| Bloque | Trabajo y entregable | Dependencia | Se acepta cuando |
| --- | --- | --- | --- |
| 0 Definición | Registro de decisiones abiertas, inventario final, responsables, alcance retail/agenda y reglas de borrador | Santiago + Jacob/Maria | Inventario y límites acordados; cada decisión abierta tiene responsable |
| 1 Datos y rutas | Separar tipos de cámara/clases, registrar 25 rutas Products/Dash Cams y siete industrias, migrar ocho sistemas, mapa de URLs | Bloque 0 para extras; addendum suficiente para rutas fijas | Cada ruta exigida tiene página propia, sin duplicación de modelo; enlaces internos consistentes |
| 2 Navegación y contacto global | Header/footer completos, submenús desktop/móvil, teléfono real, WhatsApp flotante, CTA `/quote/` | Bloque 1 | Teclado/touch funcionan, submenús son accesibles, tel/wa.me correctos y botón no tapa contenido |
| 3 Seis plantillas | Home, Category, Industry, Product, Content, Form; galería/tablas, estados sin foto/PDF, filtros y comparación provisional | Bloques 1–2 | Ejemplar de cada plantilla revisable en desktop/móvil, filtros y estados vacíos funcionan |
| 4 Home e industrias | Orden Home solicitado, selector seis equipos, tira Dash Cams, páginas por industria y enlaces bidireccionales | Bloque 3 | Cada selector abre su URL; productos e industrias comparten relaciones, sin referencias inválidas |
| 5 Páginas restantes | Dash Cams/Offers/Local/Assessment, Services/OAC/Related Services, Resources/Glossary, About y Warranty | Bloque 3; decisión Resources | Todas las rutas acordadas existen; placeholders claros y sin afirmaciones comerciales inventadas |
| 6 Formularios | Quote simplificado con modelo precargado, Assessment con flujo acordado, receptor y protección contra spam | Decisiones de campos/agenda, cuenta de envío y receptor | Solicitud recibida en info@visionsuretech.ca y en dashboard si aplica; campos/modelo correctos; error conserva datos; envío no se duplica |
| 7 QA y revisión | Auditoría de rutas/templates, responsive/teclado, links, imágenes, metadatos y estados; preview + checklist | Bloques 1–6 | Cero enlaces rotos/placeholders operativos; 404 correcto; prueba de recepción real; incidencias críticas cerradas |
| 8 Cierre Fase 1 | Feedback consolidado, ajustes y registro de aprobación | Jacob y Maria | Ambos aprueban estructura y seis templates; aceptación por escrito y pendientes de Fase 2 listados |
| 9 Fase 2 y lanzamiento | Importar Master Sheet, fotos/PDF/textos, validar comerciales/legales, reauditar, hosting/DNS y retirada controlada del antiguo | Contenido verificado + accesos + aprobación de lanzamiento | Información aprobada, recepción real, SSL/rutas/SEO comprobados, respaldo y reversión preparados |

Responsabilidades propuestas: Santiago implementa y verifica; Jacob/Maria resuelven contenido/negocio y aprueban; administrador designado configura dominio/correo/cuentas y confirma recepción. Nombrar quién cumple este último rol.

No se asignan fechas ni costes como si estuvieran acordados. Una vez cerrados retail, agenda, Resources y hosting, estimar cada bloque y reservar tiempo para revisión del cliente. No sumar una tienda o sistema de agenda al precio de una estructura editorial sin tratarlo como alcance adicional.

## 8 Checklist final de Fase 1

- [ ] Quince páginas Products y diez Dash Cams según addendum.
- [ ] Siete páginas Industries y demás destinos definidos del inventario.
- [ ] Seis plantillas revisadas; inglés únicamente.
- [ ] Home con orden solicitado y seis enlaces de selector independientes.
- [ ] Categorías por tipo de cámara y badges de clase correctos; filtros y ayudas.
- [ ] Productos con tablas, galería/espacios referenciales, enlaces a industrias y CTA con modelo correcto.
- [ ] Formulario Quote entrega a info@visionsuretech.ca; prueba con recepción comprobada, no solo HTTP de éxito.
- [ ] Assessment funciona según modalidad acordada.
- [ ] WhatsApp global y click-to-call en cada número público, incluido móvil.
- [ ] Services/Resources/Glossary/Warranty existentes con borradores donde corresponda.
- [ ] Sin fabricantes en contenido público, fotos, metadatos o descargables; Brands We Carry resuelto.
- [ ] Sin recursos rotos, enlaces ficticios, errores de slug, datos inventados ni requisitos de Fase 2 presentados como verificados.
- [ ] Metadatos propios, imágenes OG existentes y sitemap coherente con indexación.
- [ ] Jacob y Maria aprobaron la estructura; pendientes finales registrados.

## 9 Solicitud breve que Santiago puede enviar al cliente

Para alinear el desarrollo con el Work Order del 27 de septiembre, necesito confirmar: compra online o solo asesoría para Dash Cams; reserva de horario o solicitud de evaluación; campos obligatorios y destinatario de Assessment; URLs deseadas para Resources y Contact; interpretación de Brands We Carry; aprobación del diseño actual; proveedor/acceso de recepción para info@visionsuretech.ca; dirección, mapa y horarios de Langley; responsables de dominio/hosting y revisión de Jacob/Maria. El árbol de productos, idioma, teléfono, WhatsApp y destinatario de Quote ya están definidos y no hace falta volver a enviarlos. Podemos avanzar con contenido referencial en Fase 1. Para Fase 2 agradeceré fecha prevista de entrega del Product Master Sheet verificado, nombres de dash cams, imágenes/PDFs, contenidos y condiciones comerciales/legales.
