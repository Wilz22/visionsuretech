# Textos legales y 404

Actualizado: 2026-09-29.

## Implementado

`/privacy-policy` y `/terms` comparten `src/components/legal/LegalDocument.astro`. El contenido editable está en `src/data/legal.ts`: título, descripción, estado, fecha y secciones con párrafos y campos pendientes.

Ambos documentos tienen `status: 'reference'`, fecha pendiente, aviso visible de borrador y `noindex`. Son textos de referencia autorizados por el usuario, no condiciones legales aprobadas. El dominio `.ca` no se ha usado para inventar jurisdicción, domicilio o razón social. Los enlaces ya funcionan desde el footer y Contact.

La página `src/pages/404.astro` se compila a `dist/404.html`, con enlaces a Home, Solutions, Industries, FAQ y Contact. El hosting está pendiente: configurar su respuesta 404 para servir este archivo con código HTTP 404, sin redirigir todas las rutas desconocidas a Home con HTTP 200.

## Información que debe completar el cliente

- Razón social, domicilio, canales de contacto y responsable de privacidad.
- Finalidades y personas que acceden a solicitudes; proveedores de formulario, hosting y correo; países de procesamiento y transferencias.
- Retención, eliminación, copias de seguridad, medidas reales y canal para consultas/incidentes.
- Derechos y procedimiento aplicables, jurisdicción y canal de reclamación.
- Cookies, registros del hosting y servicios externos de producción. El código actual usa Google Fonts; no incorpora analítica ni publicidad. Revisar de nuevo si cambia el despliegue.
- Condiciones de cotización/venta, instalación, garantías y soporte; derechos sobre fotografías y textos; responsabilidad y resolución de disputas aprobadas para la empresa.
- Fecha de vigencia y procedimiento de cambios.

## Cómo publicar la versión definitiva

1. Reemplazar todos los textos entre corchetes y los párrafos que explican el estado de borrador. Actualizar las descripciones SEO y las menciones a integración pendiente según el funcionamiento real.
2. Convertir los puntos de cada `pending` en contenido definitivo dentro de `paragraphs` y eliminar esas listas. Cambiar solo el estado no elimina los campos pendientes.
3. Obtener la revisión del cliente sobre los textos y prácticas reales; completar `effectiveDate` y cambiar `status` a `published` en cada documento aprobado. Esto retira el aviso y `noindex`.
4. Revisar enlaces, índice de secciones y visualización móvil, y compilar. Alinear el consentimiento y los mensajes de Contact con la política final antes de activar la recepción.

El sitemap aún puede incluir rutas con `noindex`; su revisión está en `PENDING_WORK.md`. No retirar los avisos para simular que la información ya está confirmada.

## Referencias de estructura

Se consultaron las guías de la autoridad canadiense sobre [consentimiento](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/p_principle/principles/p_consent/) y [prácticas de privacidad para empresas](https://www.priv.gc.ca/media/2038/guide_org_e.pdf) como referencia para los temas a completar. Esto no determina qué legislación aplica al cliente ni certifica el cumplimiento del borrador.
