# Instrucciones para Claude en este repositorio

- Proyecto: **Dados Multifunción**, creado por **FerchGam** (© 2026). Idioma de la app y de las respuestas: español.
- La app vive en `www/`; Android en `android/`, iPhone en `ios/` (Capacitor). ID: `com.ferchgam.dadosmultifuncion` (aprobado por el usuario).
- La intro y la pantalla "Hagan sus apuestas" usan dados decorativos al azar: **nunca** deben mostrar las caras ni tapices configurados por el usuario.
- Tras cada cambio: `npx cap sync`, probar en navegador, commit y push a `main` (GitHub compila el APK).

## Recordatorio obligatorio después de CADA cambio
El usuario pidió que, al terminar cualquier cambio, le recuerdes SIEMPRE esta lista, en este orden,
marcando lo que ya haya entregado (revisa `www/js/app-config.js`, `android/app/src/main/res/values/strings.xml`
y `www/privacidad.html` para saber qué sigue pendiente):

**Lo que necesito de ti, en este orden, cuando lo tengas:**
1. **Tu correo de contacto** para la política de privacidad.
2. Cuando crees tu cuenta de AdMob, el **código de tu app en AdMob para Android** (empieza con `ca-app-pub-…~`).
3. Los códigos de los dos anuncios, el **pequeño de abajo (Banner)** y el **de pantalla completa (Intersticial)** (empiezan con `ca-app-pub-…/`).
4. Cuando pagues la cuenta de Google Play (25 USD, pago único), te guío para crear la **llave de firma**. Se guarda como dato secreto en tu GitHub, nunca en el chat.
5. Ya publicada, el **enlace de la app en Play Store**, para el botón "Califica la app".
