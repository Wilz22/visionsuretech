# Pendientes para publicar VisionSure

Actualizado: 2026-09-29.

## Implementado

Home, catálogo de ocho sistemas con sus características, seis sectores, tres proyectos de referencia, About Us, doce FAQ y Contact con resumen local e integración configurable con Formspree. Privacy Policy y Terms of Use ya existen como borradores de referencia, junto con una 404 personalizada. Se conservan los enlaces entre páginas y la selección del sistema desde sus fichas.

## Próximo bloque de desarrollo

- Corregir la imagen social predeterminada: `SEO.astro` todavía apunta a `/images/og/visionsure-default.jpg`, que no existe. Las páginas que pasan una imagen propia no usan ese archivo.
- Revisar SEO y sitemap para excluir rutas de referencia con `noindex`, y comprobar navegación, responsive y accesibilidad del conjunto.
- Activar Contact cuando se confirme proveedor, formulario y destinatario. Por defecto **no se envía**: falta configurar y verificar recepción real, CAPTCHA y reglas del proveedor. Ver `CONTACT_SETUP.md`.
- Completar `/privacy-policy` y `/terms`, revisar los textos con el cliente y publicar sus versiones definitivas. Ver `LEGAL_CONTENT_GUIDE.md`.

## Información del cliente

- Correo de cotizaciones, teléfono, dirección que se publicará y enlace de LinkedIn si corresponde.
- Hosting o servicio de formularios, destinatario y acceso de configuración necesarios para recibir solicitudes.
- Razón social, responsable de privacidad, jurisdicción, retención y condiciones reales para completar los borradores legales.
- Fotografías y datos de instalaciones para sustituir los tres casos de referencia: equipo, configuración, cliente autorizado, fechas y resultados verificados. Ver `PROJECTS_CONTENT_GUIDE.md`.
- Historia/equipo de la empresa y cualquier certificación que se quiera mostrar.
- Cobertura de instalación, entrega, garantías y soporte. Las FAQ actuales indican que estas condiciones deben confirmarse.
- Estadísticas y testimonios verificables previstos para Home. Si no hay material, acordar su omisión; no inventarlos.
- Confirmar que las imágenes actuales de Home, los textos y los recursos de marca están aprobados para publicación.

## Cierre técnico y publicación

- Definir hosting, conectar dominio y configurar HTTPS.
- Validar formulario completo, recepción y protección contra spam con la cuenta real. Las pruebas de transporte cubren aceptación, rechazo, fallos, límite y tiempo de espera mediante respuestas simuladas.
- Revisar navegación completa, enlaces, accesibilidad, responsive, rendimiento, metadatos, imágenes sociales y sitemap.
- Decidir si los ejemplos de Projects deben ocultarse antes de publicar. Actualmente están marcados como referencia y llevan `noindex`; las rutas pueden estar presentes en el sitemap.
- Configurar `404.html` en el hosting y comprobar el código HTTP 404 para rutas desconocidas.
- Retirar avisos provisionales solo cuando se complete la función o el contenido correspondiente.
- Compilar y hacer una revisión final del sitio publicado. El servidor de desarrollo local no equivale a un despliegue de producción.
