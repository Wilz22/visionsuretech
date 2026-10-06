# Pendientes VisionSure

## Actualización del cliente — 2026-10-05

- Vantrue está autorizado para venta y promoción. Sus Dash Cams mantienen la marca del fabricante; no se presentan como fabricación VisionSure. La restricción previa de fabricantes no aplica a esta línea por instrucción del usuario.
- Excel actualizado: cinco SKU con rutas por categoría y modelo, registradas en `vantrueDashCamDefinitions.ts`. Las cinco páginas son vistas iniciales con imagen, nombre y configuración; falta completar sus fichas una por una.
- Nueva categoría `/dash-cams/front-2.5K/` para VST-S1-Pro. Front-only 4K se conserva con estado pendiente de reposición, sin fecha inventada.
- Home muestra la marca Vantrue y la autorización de venta. No se afirma patrocinio, exclusividad ni garantía del fabricante sobre VisionSure.
- N5S implementado: seis párrafos y 14 características del Excel, diez imágenes, cuatro bloques alternados, 15 especificaciones, 12 elementos del paquete y cuatro accesorios opcionales. Registro verificado por Jacob el 2026-10-03; rutas/cotización por SKU. Las fichas S1 Pro Max, P2, E360 y S1 Pro siguen como vistas iniciales. PDFs/enlaces de proveedor continúan sin publicarse. La ficha permanece noindex hasta aprobación para lanzamiento.
- Siguen pendientes las diferencias técnicas Excel/PDF (S1 Pro canales/capacidad, E360 resolución trasera, P2 variantes/ángulos/estacionamiento, S1 Pro Max funciones opcionales) y `LTE_5G-2.jpg`. Las URLs nuevas no resuelven estas diferencias.
- Los enlaces de la columna “NOT PUT THE ON WEBSITE” permanecen como referencias internas, sin enlaces públicos al proveedor ni descargas automáticas.
- Respuesta del cliente: revisar alcance y obligatoriedad de los nuevos campos del formulario; preparar Assessment para Google Calendar cuando entregue enlace y disponibilidad; CRM se configurará posteriormente.

Actualizado: 2026-10-01. Estado detallado: [PHASE1_ACCEPTANCE.md](PHASE1_ACCEPTANCE.md).

## Implementado para revisión

48 páginas: Products y ocho sistemas completos, seis industrias, diez páginas Dash Cams, Services, Resources, Glossary, About, Quote, Contact, FAQ, Projects, legales y 404. Seis plantillas, menú Flowbite, Home en el orden del cliente, teléfono/WhatsApp, filtros, galerías preparadas y referencias visibles. SEO/sitemap y pruebas técnicas incluidos.

## Pendientes para cerrar Fase 1

Revisión de cierre contra el PDF: [PHASE1_CLOSURE_AUDIT.md](PHASE1_CLOSURE_AUDIT.md). Implementación local lista para revisión; 96 comprobaciones estructurales en navegador aprobadas. No hay entrega real de cotización ni aprobación del cliente.

Arquitectura: industrias y Dash Cams separadas en definiciones y contenido inglés. Los ocho productos tienen datos técnicos en `productDefinitions.ts` y textos/Markdown en `content/products/en/`. Datos y cuerpos originales conservados. Las seis plantillas propagan locale; BaseLayout prepara mensajes, navegación y metadatos del idioma. Validación más reciente: 37 pruebas, 48 páginas y auditoría de 42 rutas aprobadas.

- [x] Separación de lógica, datos y textos de las vistas actuales: catálogo, industrias, Dash Cams y proyectos tienen definiciones/editorial independientes; layouts y wrappers principales propagan locale. 39 pruebas, 48 páginas y auditoría aprobados. Componentes antiguos no utilizados requieren migración antes de reutilizarlos. Ver [I18N_ARCHITECTURE.md](I18N_ARCHITECTURE.md).
- [ ] Internacionalización pública futura: traducciones aprobadas, revisión técnica de valores narrativos, wrappers de rutas y SEO localizado. Mantener inglés solamente hasta recibirlas. No forma parte de habilitar idiomas en esta Fase 1.

- [ ] Confirmar Formspree (propuesto) o proveedor alternativo, crear/verificar formulario hacia info@visionsuretech.ca y entregar su ID público. Envío actualmente desactivado.

  El usuario pidió expresamente dejar este punto pendiente el 2026-10-01; no crear cuentas ni volver a solicitar configuración durante la migración de datos.
- [ ] Activar y comprobar una cotización real en dashboard y correo, con spam/CAPTCHA de la cuenta elegida. Las pruebas actuales son simuladas.
- [ ] Decidir Assessment entre agenda externa y solicitud de contacto. El usuario pidió dejarlo pendiente para consultar al cliente. No hay reserva activa.
- [ ] Confirmar compra/checkout de Dash Cams; hoy hay cotización y Assessment, sin carrito ni precios ficticios.
- [ ] Confirmar campos obligatorios y si Contact requiere otro formulario. Quote queda limitado por indicación del usuario al punto 4 del Work Order: nombre, empresa, teléfono, tipo de equipo y producto de interés. Nombre y empresa siguen obligatorios; teléfono y equipo opcionales; producto admite ayuda para elegir.
- [ ] Revisar con Jacob/Maria las seis plantillas y registrar aprobación escrita. No marcar la fase como cerrada antes de esto.

## Insumos y decisiones del cliente / Fase 2

- [ ] Product Master Sheet: códigos/nombres, especificaciones, componentes/accesorios, compatibilidad y datos finales de dash cams.
- [ ] Fotos de producto/instalaciones y PDFs aprobados. Los ocho sistemas mantienen contenido del PDF original pendiente de contraste.
- [ ] Casos reales, ubicaciones, permisos de clientes y resultados verificables para Projects. Ver PROJECTS_CONTENT_GUIDE.md.
- [ ] Dirección completa, mapa, horarios, cobertura de instalación y soporte; Langley, teléfono y correo ya cargados.
- [ ] Historia/equipo y decisión sobre Brands We Carry compatible con no publicar fabricantes.
- [ ] Servicios, financiación OAC, ofertas para miembros y condiciones de evaluación gratuita. Enlaces aprobados de Crane repair, Joystick repair y OptiNect.
- [ ] Contenido final para regulaciones, guía de selección, descargas y FAQ; su jerarquía futura de URLs. Hoy son bloques del hub Resources.
- [ ] Privacy, Terms y Warranty: responsable, tratamiento/retención de datos, condiciones comerciales, cobertura, duración, exclusiones y reclamaciones. Ver LEGAL_CONTENT_GUIDE.md.

## Lanzamiento

S1 Pro Max implementada: siete párrafos y 13 características del Excel, 13 imágenes disponibles, galería/zoom/acciones reutilizados de N5S, componentes y accesorios separados. Buffer de 15 segundos tomado de `Parking_Mode-1.jpg`; datos adicionales no contradictorios tomados del PDF. Las tres fichas siguientes siguen pendientes de revisión individual.

- [ ] S1 Pro Max: el Excel verificado incluye ADAS y BSD; el PDF marca BSD y DMS opcionales. Se conserva el Excel como fuente de verdad para ADAS/BSD y no se añade DMS a esta configuración. Confirmar/corregir el PDF antes de publicación.
- [ ] S1 Pro Max: el PDF menciona cuatro LEDs IR de cabina en una configuración frontal/trasera; no se publica esa afirmación. Solicitar ficha corregida.
- [ ] S1 Pro Max: las referencias del Excel `Night_Vision-01.jpg` y `Voice_Commands-1.jpg` se resuelven respectivamente a `Night_Vision-1.jpg` y `Voice_Commands-1.jpg.jpg` del ZIP. `LTE_5G-1.jpg` muestra Wi-Fi/GPS y se coloca en conectividad. `LTE_5G-2.jpg` no existe; solicitar imágenes LTE correctas. El texto LTE completo ya está implementado sin una imagen ficticia.
- [ ] S1 Pro Max: no se suministró imagen del paquete; se muestran únicamente los tres componentes del Excel (dash cam, cámara trasera y soporte GPS). Solicitar foto verificada y confirmar componentes adicionales, sin asumirlos incluidos.

- [ ] N5S: confirmar con el cliente la gráfica `Features-2.jpg`: indica “2.5K Rear Camera”, mientras que el Excel actualizado y la ficha técnica suministrada indican 1440P trasero. Se conservan las especificaciones del Excel; pedir una gráfica corregida o confirmación técnica antes de publicar.
- [ ] N5S: `Recording_Modes-1.jpg` muestra 165° para rear cabin y 160° para rear; el PDF especifica 160° y 165° respectivamente. La tabla conserva el orden del PDF. Pedir confirmación o gráfica corregida.

- [ ] Hosting, dominio, HTTPS, configuración del proveedor y verificación de HTTP 404.
- [ ] Decidir redirecciones desde /industries/ y antiguas fichas /solutions/<slug>/.
- [ ] Sustituir referencias y actualizar noindex/sitemap únicamente tras aprobación del contenido.
- [ ] QA final en entorno publicado, rendimiento y comprobación de recepción real.


Estado de arquitectura actualizado (2026-10-01): 25 pruebas aprobadas; 48 páginas compiladas y auditoría de 42 rutas. Servicios, recursos y About reciben copy/datos/enlaces externos; se conserva el contenido referencial y sus pendientes. Próximo bloque: FAQ, Projects, legales y separación editorial por ID/idioma. Los overviews y categorías ya reciben modelos/mensajes externos; las piezas se clasifican por código, no por palabras inglesas. Contact/Assessment y las páginas auxiliares ya reciben datos y textos externos. Inglés sigue como único idioma público y Formspree continúa pendiente.
