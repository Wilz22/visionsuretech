# Cómo completar Projects / Case Studies

La sección está preparada con tres **ejemplos de referencia autorizados por el usuario**. No representan instalaciones realizadas. Los textos están en inglés para mantener el idioma del sitio.

## Dónde editar

- `src/content/projects/crane-boom-visibility.md`: ejemplo de grúas.
- `src/content/projects/mining-equipment-awareness.md`: ejemplo de minería.
- `src/content/projects/fleet-video-monitoring.md`: ejemplo de flotas.
- Para agregar otro caso, copiar uno de estos archivos y asignar un `slug` y un `order` únicos.

El listado `/projects`, las fichas `/projects/<slug>` y las tres tarjetas de Home usan la misma colección. No es necesario editar componentes para reemplazar el contenido.

## Información para solicitar al cliente

1. Título y resumen del proyecto; nombre del cliente autorizado para mostrar (o una descripción anónima acordada).
2. Sector, ubicación, equipo/modelo y fecha de finalización.
3. Reto inicial y condiciones de operación.
4. Códigos de sistemas realmente instalados, configuración, montaje, alimentación y conectividad.
5. Fotografías autorizadas: vista general, montaje y pantalla/controles. Añadir descripción y pie de foto.
6. Resultados verificables y observaciones aprobadas. Las cifras deben incluir fuente, período y contexto. No hace falta inventar métricas para completar el caso.

## Campos del archivo Markdown

Todo el contenido se edita dentro del bloque YAML entre `---`. El cuerpo Markdown no se muestra.

| Campo | Uso |
| --- | --- |
| `title`, `summary` | Título y resumen compartidos por tarjeta y ficha |
| `slug`, `order` | URL y orden; ambos deben ser únicos |
| `status` | `reference` mantiene los avisos y `noindex`; `published` muestra el caso como real |
| `draft: true` | Oculta el caso de Home, listado y rutas generadas |
| `industry` | `cranes`, `mining`, `construction`, `ports`, `heavy-equipment` o `fleets` |
| `client`, `location`, `equipment`, `completed` | Datos del proyecto, opcionales; escribir fechas entre comillas |
| `challenge`, `approach` | Reto y solución confirmada |
| `installation`, `results` | Listas de párrafos sobre instalación y resultados |
| `systems` | Lista de `code` y `note`; el código debe existir en el catálogo publicado |
| `photos` | Lista de imágenes; la primera se usa en tarjeta y cabecera, las restantes en galería |

Ejemplo de estructura para fotografías (reemplazar los valores y crear los archivos antes de compilar):

```yaml
photos:
  - src: /images/projects/nombre-del-proyecto/vista-general.webp
    alt: "Descripción concreta del equipo y sistema que aparecen en la foto"
    width: 1600
    height: 1000
    caption: "Pie de foto aprobado por el cliente."
  - src: /images/projects/nombre-del-proyecto/montaje.webp
    alt: "Descripción de la cámara o sensor y su ubicación"
    width: 1600
    height: 1000
    caption: "Detalle del montaje real."
```

Guardar las imágenes en `public/images/projects/`. Usar sus dimensiones reales; las tarjetas recortan a una proporción de 16:10. Sin imágenes, el diseño muestra un espacio gráfico con el texto de fotografía pendiente. Un caso publicado con una sola imagen no muestra una galería vacía.

## Pasar de referencia a caso real

Reemplazar todo el texto de referencia, completar los sistemas y fotos reales, revisar los datos con el cliente y cambiar `status: reference` a `status: published`. El sitio retirará automáticamente el distintivo y los avisos de referencia de ese caso. Los campos opcionales sin valor se ocultarán. La Home y el listado conservarán su aviso mientras incluyan otros ejemplos.

Las fichas de referencia llevan `noindex`; el listado también mientras no haya ningún caso publicado. El sitemap general de Astro puede incluir esas rutas, pero su instrucción de no indexar permanece en el HTML.

Ejecutar `npm run build` y revisar Home, listado, ficha, fotos y enlaces en escritorio y móvil antes de publicar. El esquema valida campos y relaciones del catálogo; no verifica que las afirmaciones hayan sido aprobadas ni que las fotografías existan.
