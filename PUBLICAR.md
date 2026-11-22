# Publicar Dados Multifunción (Android y iPhone)

La app ya está preparada como app nativa con **Capacitor**: la misma app web (`www/`) se empaqueta para
Android (`android/`) y para iPhone (`ios/`). La publicidad usa **Google AdMob** y ahora está en **modo prueba**
(anuncios de prueba de Google, que no generan dinero).

## Lo que ya está hecho
- Proyecto Android e iOS con el ID de app `com.ferchgam.dadosmultifuncion`
  (en Play Store no se puede cambiar después de la primera subida).
- Ícono y pantalla de carga para Android e iPhone (`assets/`).
- AdMob integrado: banner abajo y un anuncio a pantalla completa cada 6 tiradas,
  con el aviso de consentimiento (Europa) y el permiso de seguimiento en iPhone.
- Política de privacidad pública: https://ferchgam.github.io/dados-multifuncion/www/privacidad.html
- GitHub compila el **APK de prueba** solo, en cada cambio (pestaña *Actions* > *Compilar Android* > *Artifacts*).
  Ese APK se puede instalar directamente en un teléfono Android para probar.

## Lo que me tienes que dar (cuando lo tengas)
Pásamelo por el chat y yo lo pongo en el código. **Nunca pegues contraseñas en el chat**: para la llave de firma te guío para guardarla como secreto en GitHub.

| # | Qué | Dónde se consigue | Dónde va en el código |
|---|-----|-------------------|-----------------------|
| 1 | Correo de contacto/soporte | El tuyo | Política de privacidad y ficha de la tienda |
| 2 | ID de app de AdMob para Android (`ca-app-pub-…~…`) | admob.google.com > Apps > Agregar app | `android/app/src/main/res/values/strings.xml` |
| 3 | ID del bloque **Banner** Android (`ca-app-pub-…/…`) | AdMob > tu app > Bloques de anuncios | `www/js/app-config.js` |
| 4 | ID del bloque **Intersticial** Android | AdMob > tu app > Bloques de anuncios | `www/js/app-config.js` |
| 5 | Enlace de la app en Google Play | Play Console, cuando esté publicada | `www/js/app-config.js` (botón "Califica la app") |
| 6 | (iPhone) ID de app AdMob iOS + bloques Banner e Intersticial | AdMob, agregando la versión iOS | `ios/App/App/Info.plist` y `www/js/app-config.js` |
| 7 | (iPhone) Enlace de App Store | App Store Connect | `www/js/app-config.js` |

Con los IDs reales cambio `testing: true` a `false` y la app empieza a generar ingresos.
AdMob también pedirá el archivo **app-ads.txt**: se publica gratis en este mismo GitHub Pages y yo lo preparo cuando tengas tu ID de editor.

## Pasos para Google Play
1. Crear la cuenta de desarrollador en https://play.google.com/console (pago único de 25 USD).
2. Crear la **llave de firma** (te guío; se guarda como secretos de GitHub:
   `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD`).
   Con eso GitHub genera también el archivo **.aab** firmado que se sube a Play Store.
3. En Play Console: crear la app, subir el .aab, rellenar la ficha (capturas, descripción),
   pegar el enlace de la política de privacidad, marcar que **contiene anuncios** y completar el cuestionario de contenido.
   La app no usa dinero real; dilo así en la ficha porque usa la palabra "apuestas".
4. Las cuentas personales nuevas deben hacer una **prueba cerrada** con al menos 12 personas durante 14 días antes de publicar.

## Pasos para iPhone (App Store)
- Hace falta una **Mac con Xcode** (o un servicio de compilación en la nube) y la cuenta de Apple Developer (99 USD al año).
- El proyecto ya está en `ios/`. En la Mac: `npm install`, `npx cap sync ios` y `npx cap open ios`, y desde Xcode se sube a App Store Connect.

## Cambiar algo de la app
Todo el código de la app está en `www/`. Después de cambiarlo, `npx cap sync` lo copia a Android e iOS
(el flujo de GitHub lo hace solo para Android).
