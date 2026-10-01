# Contact / Request a Quote

Actualizado: 2026-09-30.

## Estado actual

`/quote/` contiene el formulario dedicado. Las fichas enlazan a `/quote/?product=vst-s6301`; se admiten los ocho slugs industriales y seis configuraciones de dash cams. `?system=VST-S6301` sigue resolviendo códigos antiguos. Valores desconocidos muestran un aviso y nunca se usan como HTML ni como URL. `/contact/` mantiene los canales directos y un enlace al formulario.

La integración con **Formspree está implementada pero desactivada** porque no hay formulario ni destinatario reales. El modo predeterminado valida los campos y prepara un resumen copiable, marcado como **NOT SENT**. No transmite entradas ni las guarda en localStorage. Una edición oculta el resumen anterior.

Al configurar el envío, se muestran consentimiento de uso de datos, espera, errores y confirmación de aceptación por el proveedor. Los datos se conservan ante errores. No hay reintentos automáticos y se bloquean duplicados mientras se envía o hasta editar/restablecer una solicitud aceptada. La aceptación no acredita recepción en la bandeja de correo ni confirma un pedido.

Los controles se habilitan después de instalar el manejador de envío local. Sin JavaScript, permanecen deshabilitados y se muestra una explicación. Esto evita que el navegador envíe accidentalmente los datos a una ruta estática.

## Archivos

- `src/pages/quote/index.astro`: formulario; `src/pages/contact.astro`: canales directos; FormLayout: datos, mapa y horarios pendientes.
- `src/components/contact/QuoteForm.astro`: campos cortos, detalles adicionales opcionales, catorce opciones de producto y panel de resumen.
- `src/scripts/quote-form.ts`: preselección, validación, resumen, copia con alternativa manual y limpieza.
- `src/data/company.ts`: correo, teléfono y dirección reales. Los valores nulos no generan enlaces ficticios. Completar estos datos no activa el envío del formulario.
- `src/data/quote.ts`, `src/lib/quote-delivery.ts`: configuración y transporte POST a Formspree, tiempo límite y clasificación de respuestas.
- `.env.example`: plantilla pública; nunca incluir contraseñas ni claves privadas en variables `PUBLIC_`.
- `tests/quote-delivery.test.mjs`: pruebas con transporte simulado; no envían solicitudes reales.

## Para activar la recepción real

1. Confirmar con el cliente Formspree como proveedor, cuenta/formulario y destinatario. No se ha creado una cuenta ni contratado un plan. Si elige otro proveedor, adaptar el transporte y sus pruebas.
2. Crear/verificar el formulario y destinatario en su cuenta. Configurar validación del receptor, protección contra spam y restricciones de dominio según las funciones disponibles. El campo `_gotcha` ya está incluido; la validación del navegador no sustituye la del servidor.
3. Comprobar las exigencias de CAPTCHA de esa cuenta. Esta implementación no muestra un desafío interactivo. Si el proveedor lo exige, integrar su flujo compatible antes de activar; no deshabilitar protecciones para ocultar un rechazo.
4. Completar los datos corporativos y textos legales siguiendo `LEGAL_CONTENT_GUIDE.md`; ajustar el aviso a proveedores y tratamiento reales.
5. Copiar `.env.example` a `.env` local (ignorado por Git) y completar:

   ```dotenv
   PUBLIC_QUOTE_SEND_ENABLED=true
   PUBLIC_FORMSPREE_FORM_ID=ID_REAL_DEL_FORMULARIO
   ```

   Usar solo el identificador, no una URL. El ejemplo anterior es un marcador, no un ID válido. Las variables se leen al compilar: configurarlas también en el hosting y volver a compilar. En desarrollo reiniciar con `astro dev stop` y `astro dev --background`. Habilitar con un ID vacío o inválido detiene la compilación.

6. Ejecutar `npm test` y `npm run build`. En un entorno autorizado, enviar una solicitud de prueba e inspeccionar tanto el dashboard como el correo real. Verificar móvil, consentimiento, errores, límites, spam y que todos los campos lleguen. Esto está **pendiente**: las pruebas actuales usan respuestas simuladas.

Para volver al resumen local, establecer `PUBLIC_QUOTE_SEND_ENABLED=false` y recompilar. No hay carga de fotografías ni backend propio. Los errores de red/tiempo límite advierten que no se pudo confirmar la recepción: comprobar antes de reenviar evita duplicados.

## Contrato consultado

El transporte envía `FormData` con `Accept: application/json`, no sigue redirecciones y acepta una respuesta HTTP exitosa con `next` de tipo texto, sin campos de error. No navega al destino devuelto. Referencias oficiales: [envío AJAX](https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax), [contrato del cliente Formspree](https://github.com/formspree/formspree-js/blob/main/packages/formspree-core/src/submission.ts).

## Assessment

La modalidad está pendiente de decisión del cliente (última instrucción del usuario). No hay reserva activa. Si aprueba agenda externa, configurar `PUBLIC_ASSESSMENT_BOOKING_URL` con el enlace HTTPS público, confirmar ubicación/zona horaria/duración/disponibilidad y recompilar. No se cargan iframes ni se simulan horarios. Si aprueba solicitud de contacto, adaptar la página y su tratamiento de datos al proveedor elegido.

Formspree es una recomendación, no una contratación. Es apropiado para este sitio estático y permite entrega con notificaciones; revisar requisitos de la cuenta antes de activar. [Referencia oficial](https://formspree.io/blog/ajax-contact-forms/).
