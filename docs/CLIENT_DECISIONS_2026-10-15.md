# Decisiones del cliente y aplicación al lanzamiento

## Regulaciones y páginas legales

El archivo `BCM217 Commercial Dash Camera Law-Status.docx` es un resumen regulatorio con fuentes gubernamentales. No contiene textos finales de Privacy Policy, Warranty Policy ni Terms of Use y no resuelve sus pendientes comerciales o de tratamiento de datos.

Se implementa un bloque M217 en `/resources/#regulations`, con resumen, detalle desplegable, fuentes oficiales y fechas de revisión y vigencia de la consolidación consultada. Datos de fuentes/fechas separados en `src/data/regulatory-sources.ts`; contenido inglés en `src/i18n/locales/en-regulations.ts`; presentación en `RegulationBrief.astro`.

Verificación realizada el 2026-10-15:

- BC Laws muestra las secciones 1–5 como no vigentes en su consolidación a 2026-09-22; la sección 6 dispone entrada en vigor mediante reglamento. Se muestra ese límite temporal, no una promesa de que la web conoce futuras modificaciones.
- Texto de tercera lectura y enmiendas consultados para requisitos. No se usa el plazo antiguo de seis meses ni el umbral anterior de 8.200 kg. GVWR no se confunde con peso real del vehículo.
- No se anuncia certificación M217 de ningún producto. Las 72 horas de retención requieren verificar configuración y funcionamiento; una capacidad de tarjeta no las demuestra por sí sola.
- No se publica la predicción electoral del documento ni se afirma haber visto la comunicación privada de CVSE del 14 de octubre: el documento la menciona, pero el correo no está entre los archivos localizados.

Fuentes:

- https://free.bcpublications.ca/civix/document/id/complete/statreg/26017
- https://lims.leg.bc.ca/pdms/ldp/43rd2nd/3rd_read/m217-3.htm
- https://lims.leg.bc.ca/pdms/ldp/43rd2nd/amend/m217-2.htm

## Alcance de Services y promociones

Financiación, promociones, Crane/Joystick Repair y OptiNect se posponen. Se ocultan sus bloques en Services y el enlace Member offers en navegación/footer. La página de referencia de ofertas se conserva sin indexar para trabajo posterior; no representa una oferta activa.

La autorización Vantrue ya confirmada permanece como identificación del distribuidor en las fichas y Home. No se amplía a un catálogo de marcas asociadas ni se retira una autorización de venta que el cliente ya aprobó.

Configuración de alcance: `src/data/release-scope.ts`. No activar estas secciones sin contenido y condiciones aprobados.

## About

Nombre corregido literalmente según el cliente: **Quality Crane and Electronic repairs**. La fecha 2014 sigue perteneciendo a esa empresa, no a VisionSure.

## Testimonios e industrias

| Material indicado por el cliente | Destino |
| --- | --- |
| Video de Jacob | Trucks & Commercial Fleets (`trucks-fleets`) |
| Kenneth | Agriculture & Forestry (`agriculture`) |
| James (nombre confirmado 2026-10-17) | Construction (`construction`) |

No se inventarán citas, apellidos, empresas ni proyectos a partir de esta asignación. Estos testimonios tampoco completan automáticamente tres casos de instalación: ubicación, equipos instalados, fotos y resultados siguen pendientes si se desea publicar estudios de caso.

Decisión actualizada 2026-10-17: los videos están editados y aprobados, y se alojan directamente en WHC. Los tres enlaces MP4 ya están integrados con controles nativos y portadas, sin YouTube. Jacob se identifica como fundador de VisionSure, Kenneth corresponde a un tractor y James a una CAT 335F. Configuración: `src/data/testimonials.ts`. Detalles de reproducción y conservación durante despliegues: [WHC_DEPLOYMENT.md](WHC_DEPLOYMENT.md).

## Fuente definitiva del catálogo industrial

La instrucción de Jacob establece **VisionSure Product Master** como fuente exclusiva para el catálogo industrial. El PDF `VisionSure Systems.pdf` pasa a ser referencia histórica, no autoridad definitiva para publicar especificaciones.

El usuario confirmó `Santiago Phase 2.2/VisionSure_Products_Sent.xlsx` como el Master definitivo. Se revisó su inventario en modo lectura, sin modificarlo. La aprobación de la fuente no equivale a verificar que todos los valores actuales coincidan con ella.

Próximo bloque industrial: conciliar todos sus modelos, conciliar filas/componentes/accesorios/imágenes contra cada ficha, registrar discrepancias y actualizar avisos/estado por producto después de validarlo. No retirar los avisos pendientes globalmente antes de esa comparación.

Inventario inicial: Camera Systems tiene siete sistemas (filas 2, 9, 15, 22, 31, 38 y 46): S4201, S4202, S4203, S4901, S8501, S6301 y S8401. S4101 y S4102 del catálogo antiguo no aparecen como sistemas en este archivo. S4203 es una incorporación respecto al catálogo original: no asumir equivalencia ni redirigir/eliminar modelos automáticamente. Desde la fila 54 también hay componentes, algunos sin nombre completo.

La hoja Dash Cams contiene N4ProS además de los cinco modelos trabajados. No se sustituyen las fichas Vantrue ya verificadas con el otro Excel sin comparar versiones; la confirmación solicitada en este turno era del Master industrial.

## Orden de cierre

1. Cambios disponibles ahora: corrección About, alcance Services/promociones y recurso regulatorio.
2. Master ya confirmado; completar los tres enlaces YouTube cuando el usuario suba los videos.
3. Conciliar catálogo industrial por ficha y completar las políticas con decisiones comerciales/privacidad.
4. Revisar contenido final, entrega de formularios/agenda y aprobación de lanzamiento. Financiación y servicios complementarios no bloquean esta entrega.
