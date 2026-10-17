# Despliegue de Astro en WHC

El usuario pidió expresamente posponer este bloque; continuar con los componentes del sitio sin activar despliegues.

## Recomendación

Mantener GitHub como fuente y WHC como hosting. Ejecutar instalación con lockfile, pruebas y compilación con Node 24 en GitHub Actions; transferir únicamente el contenido de `dist/` al destino de staging o producción en WHC. Así el plan compartido no necesita compilar Astro ni tener Node 24 instalado.

La automatización no está activada. El usuario solicitó valorar la opción; no se configuraron credenciales, hooks, workflows con publicación ni se modificó producción.

## Qué hace Git Version Control de cPanel

- Es una opción válida si el plan ofrece Git y SSH habilitado. WHC documenta planes compatibles y exige shell access y una clave SSH autorizada.
- Un push directo al repositorio gestionado por cPanel puede disparar `.cpanel.yml` automáticamente.
- Clonar GitHub en cPanel no activa por sí solo un despliegue por cada push a GitHub. El flujo pull documentado usa Update from Remote y Deploy HEAD; hace falta automatización adicional para evitar esos pasos.
- Si se opta por compilar en cPanel, primero verificar Node 24, npm, recursos y acceso del plan. Tener Git no garantiza esas condiciones.
- Alternativa: GitHub Actions compila y hace push de los archivos generados a un repositorio de despliegue cPanel, cuya `.cpanel.yml` los publica. Es viable, pero añade un repositorio/etapa respecto a transferir directamente `dist/` por SSH.

## Antes de activar

1. Confirmar plan WHC, SSH, puerto, usuario, host y directorio raíz real del dominio; no deducirlo de una captura antigua.
2. Crear destino de staging para probar sin sustituir el sitio anterior.
3. Guardar credenciales exclusivamente como secretos del entorno de CI y verificar la clave del servidor SSH; no incluirlas en Git ni desactivar la verificación de host.
4. Separar repositorio y archivos internos de `public_html`; publicar solo el resultado estático. No publicar `.git`, `.env`, fuentes ni `node_modules`.
5. Copia recuperable del sitio anterior y su `.htaccess`; definir redirecciones, HTTPS y 404 antes de sustituirlo.
6. Compilar y auditar antes de transferir; impedir despliegues simultáneos. Registrar versión desplegada y definir restauración de una versión anterior.
7. Preservar `/media/`, en particular `/media/testimonials/`. Los tres MP4 ya están alojados allí y no forman parte de `dist/`. Si se usa sincronización con borrado, excluir/proteger esta carpeta en copia y eliminación; no usar opciones que eliminen excluidos. No conservar indiscriminadamente archivos antiguos del website: retirar rutas obsoletas mediante un plan revisado.
8. Confirmar rama/entorno que puede publicar y aprobación para la primera sustitución de producción.

## Videos industriales

Los tres enlaces suministrados respondieron el 2026-10-17 con HTTP 206 a una petición parcial y Content-Type video/mp4. La respuesta Content-Range confirma soporte real de rangos aunque no incluya Accept-Ranges.

| Archivo | Tamaño observado | Destino |
| --- | ---: | --- |
| jacob.mp4 | 70.716.340 bytes | trucks-fleets |
| kenneth.mp4 | 12.370.890 bytes | agriculture |
| james.mp4 | 40.618.796 bytes | construction |

Integrados con controles nativos, playsinline, preload none, sin autoplay y con portadas locales extraídas del video aprobado. Se mantiene la proporción sin recortar mediante object-contain. No se copiaron MP4 al repositorio ni se alteraron los originales del hosting.

Jacob es el fundador de VisionSure y se identifica como tal; no se presenta como recomendación de un cliente independiente. Kenneth corresponde a un tractor y James a una CAT 335F según la información del usuario. No se inventan SKU instalados ni resultados medidos. Subtítulos/transcripción pueden añadirse cuando se disponga del texto verificado; no se han generado citas.

## Fuentes

- https://help.whc.ca/en/articles/627296-using-git-version-control-in-cpanel
- https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/
