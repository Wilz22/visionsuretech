# Pendientes VisionSure

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

- [ ] Hosting, dominio, HTTPS, configuración del proveedor y verificación de HTTP 404.
- [ ] Decidir redirecciones desde /industries/ y antiguas fichas /solutions/<slug>/.
- [ ] Sustituir referencias y actualizar noindex/sitemap únicamente tras aprobación del contenido.
- [ ] QA final en entorno publicado, rendimiento y comprobación de recepción real.


Estado de arquitectura actualizado (2026-10-01): 25 pruebas aprobadas; 48 páginas compiladas y auditoría de 42 rutas. Servicios, recursos y About reciben copy/datos/enlaces externos; se conserva el contenido referencial y sus pendientes. Próximo bloque: FAQ, Projects, legales y separación editorial por ID/idioma. Los overviews y categorías ya reciben modelos/mensajes externos; las piezas se clasifican por código, no por palabras inglesas. Contact/Assessment y las páginas auxiliares ya reciben datos y textos externos. Inglés sigue como único idioma público y Formspree continúa pendiente.
