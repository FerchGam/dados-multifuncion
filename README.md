# Dados Multifunción

App web de dos dados 3D totalmente configurables.

**Jugar ahora:** https://ferchgam.github.io/dados-multifuncion/

El código de la app está en `www/`. Es una app web que también se empaqueta como app de **Android** (`android/`) y de **iPhone** (`ios/`) con Capacitor.

**Publicar en Play Store / App Store y monetizar con anuncios:** mira [PUBLICAR.md](PUBLICAR.md).

## Cómo se usa
- Al abrir la app aparece una intro animada con los dos dados (toca para saltarla).
- Luego sale la pantalla **Hagan sus apuestas**, con los dos dados girando de referencia.
  Marca **Ya realizamos las apuestas** y pulsa **Continuar** para ir a los dados.
  El botón **Nuevas apuestas** vuelve a esa pantalla para otra ronda.
- Pulsa **Lanzar** (o toca la mesa, o la barra espaciadora): los dados giran y caen uno a cada lado.
- Debajo aparece el resultado de cada dado (y la suma si ambos son números), con las últimas 10 tiradas.

## Configuración (botón "Configurar dados")
Cada dado se configura por separado, en su pestaña **Dado 1** / **Dado 2**:
- **Caras:** escribe lo que quieras en cada una de las 6 caras (números, palabras, nombres...).
  Atajos: Números 1 a 6, Palabras de ejemplo, Colores, Vaciar caras. Opción para mostrar 1–6 como puntos.
- **Tapiz:** un tapiz para todas las caras, o uno distinto para cada cara (6).
  13 tapices incluidos (marfil, rubí, madera, mármol, fieltro, noche, oro, grafito, menta, cielo, rayas, lunares, arcoíris)
  o tus propias imágenes.
- Color del texto, copiar un dado al otro y restablecer.

La configuración se guarda en el navegador.
