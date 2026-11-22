// =====================================================================
//  Dados Multifunción: configuración para publicar y monetizar.
//  Aquí se pegan los enlaces e IDs cuando los tengas. Todo lo marcado
//  como PENDIENTE está vacío o en modo prueba hasta entonces.
// =====================================================================
window.APP_CONFIG = {
  // Página de política de privacidad (Google Play y App Store la exigen).
  privacyUrl: "https://ferchgam.github.io/dados-multifuncion/www/privacidad.html",

  // PENDIENTE: enlace de la ficha en Google Play (cuando la app esté publicada).
  playStoreUrl: "",
  // PENDIENTE: enlace de la ficha en App Store (si se publica en iPhone).
  appStoreUrl: "",

  // ---------------- Publicidad (Google AdMob) ----------------
  ads: {
    enabled: true,
    // true = anuncios de PRUEBA de Google (no generan dinero, pero muestran que todo funciona).
    // Cambiar a false solo cuando estén puestos los IDs reales de abajo.
    testing: true,
    // Anuncio a pantalla completa cada N tiradas (0 = nunca).
    interstitialEvery: 6,
    // PENDIENTE: IDs de los bloques de anuncios reales (AdMob > Apps > Bloques de anuncios).
    android: { banner: "", interstitial: "" },
    ios: { banner: "", interstitial: "" },
  },
};
