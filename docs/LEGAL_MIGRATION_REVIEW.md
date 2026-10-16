# Revisión legal de la migración — 2026-10-15

Fuentes revisadas completas:

- https://visionsuretech.ca/legal-notice/
- https://visionsuretech.ca/privacy/
- https://www.oipc.bc.ca/for-private-organizations/
- https://policies.google.com/privacy?hl=en

## Conclusión

Las páginas anteriores aportan temas útiles, pero no son una política final reutilizable sin adaptación. Se actualizan los borradores del sitio nuevo; ambos mantienen estado `reference`, fecha pendiente y `noindex`. No se publicaron condiciones aprobadas ni se declaró cumplimiento legal.

## Material anterior

| Hallazgo | Decisión |
| --- | --- |
| Aviso de seguridad e instalación | Adaptar a la sección de equipos en Terms of Use: asistencia al operador, formación, instalación cualificada e instrucciones del fabricante. |
| `[Your Company Name]` y responsable de privacidad incompleto | Sustituir datos de contacto conocidos; mantener pendiente la razón social y la persona responsable. |
| Exclusión general de garantías y responsabilidad | No trasladar como condición aprobada. Solicitar redacción específica. |
| Matomo, Facebook Pixel, newsletter, pagos y carrito | No describirlos como activos en el nuevo sitio. |
| Referencias generales al GDPR europeo | No importar automáticamente; revisar jurisdicción y prácticas reales. |

## Implementado en la migración

- Datos de contacto enlazados a `company.ts`, incluida la dirección confirmada y el email con icono.
- Privacidad refleja los cinco campos visibles actuales: nombre, empresa, teléfono, equipo y producto. Distingue resumen local, copia al portapapeles y contacto directo por email/teléfono/WhatsApp. No atribuye al formulario campos eliminados.
- Formspree figura como integración preparada y pendiente, sin afirmar que ya recibe datos.
- Declaración de Google Maps, Google Fonts y enlaces a WhatsApp. Enlace a la política de Google. No se promete ausencia total de cookies ni ubicación de procesamiento no verificada.
- Condiciones de uso conservan la separación entre consulta, cotización y pedido; no inventan garantías, políticas comerciales ni aceptación contractual por navegar.
- Contenido y enlaces permanecen separados del componente reutilizable y preparados para traducciones.

## Solicitar al cliente para aprobar las páginas

1. Nombre legal registrado de quien opera VisionSure y relación con su nombre comercial.
2. Responsable de privacidad y confirmación de que `info@visionsuretech.ca` recibe y tramita estas solicitudes.
3. Hosting, correo y proveedor definitivo de formularios; país de procesamiento, destinatarios y acceso del equipo a consultas.
4. Plazos o criterios de conservación, borrado, copias de seguridad y medidas/proceso ante incidentes.
5. Procedimiento para acceso, corrección, retirada de consentimiento y otras solicitudes aplicables.
6. Condiciones de venta/instalación: validez de ofertas, aceptación de pedidos, pagos, entregas, devoluciones, cancelaciones, garantías y soporte. No se deducen del aviso anterior.
7. Redacción aprobada de responsabilidad, ley aplicable y resolución de controversias.
8. Confirmación de licencias de material industrial, imágenes y marcas; autorización Vantrue ya comunicada por el usuario.
9. Aprobación del texto final y fecha de entrada en vigor.

## Antes de publicar

- Contrastar obligaciones aplicables a la empresa y sus operaciones. La guía del OIPC es relevante para organizaciones privadas en BC; no determina por sí sola todo el alcance jurídico de esta empresa.
- Verificar cookies, logs y proveedores en el hosting definitivo; definir los controles necesarios para el mapa y cualquier integración que se active. No se añadió un banner ficticio sin conocer la configuración final.
- Preparar redirecciones permanentes en el alojamiento: `/privacy/` → `/privacy-policy/`; `/legal-notice/` → `/terms/`, cuando se aprueben los destinos y el despliegue. No se cambiaron rutas públicas ni se desplegaron redirecciones en este bloque.
- Mantener la aprobación y fecha pendientes hasta recibir confirmación; revisar también Warranty Policy con las condiciones comerciales reales.
