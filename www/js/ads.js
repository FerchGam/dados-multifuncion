// Publicidad con Google AdMob. Solo actúa dentro de la app instalada (Android/iOS);
// en el navegador (GitHub Pages) no hace nada.
(function () {
  const cfg = (window.APP_CONFIG && window.APP_CONFIG.ads) || {};
  // IDs de prueba oficiales de Google.
  const TEST = {
    android: { banner: "ca-app-pub-3940256099942544/9214589741", interstitial: "ca-app-pub-3940256099942544/1033173712" },
    ios: { banner: "ca-app-pub-3940256099942544/2435281174", interstitial: "ca-app-pub-3940256099942544/4411468910" },
  };
  const Cap = window.Capacitor;
  const native = !!(Cap && Cap.isNativePlatform && Cap.isNativePlatform());
  const AdMob = native && Cap.Plugins && Cap.Plugins.AdMob;
  const platform = native ? Cap.getPlatform() : "web";
  let ready = false, rolls = 0, interstitialReady = false;

  function ids() {
    const src = cfg.testing ? TEST[platform] : cfg[platform];
    return src || {};
  }

  async function init() {
    if (!AdMob || !cfg.enabled) return;
    try {
      await AdMob.initialize({ initializeForTesting: !!cfg.testing });
      // Consentimiento (obligatorio en Europa y otros países).
      try {
        const info = await AdMob.requestConsentInfo();
        if (info && info.isConsentFormAvailable && info.status === "REQUIRED") await AdMob.showConsentForm();
      } catch (e) {}
      // iPhone: permiso de seguimiento (App Tracking Transparency).
      if (platform === "ios") {
        try {
          const t = await AdMob.trackingAuthorizationStatus();
          if (t && t.status === "notDetermined") await AdMob.requestTrackingAuthorization();
        } catch (e) {}
      }
      AdMob.addListener("bannerAdSizeChanged", (size) => {
        document.documentElement.style.setProperty("--ad-h", ((size && size.height) || 0) + "px");
      });
      ready = true;
      showBanner();
      loadInterstitial();
    } catch (e) {
      console.warn("AdMob no se pudo iniciar", e);
    }
  }

  async function showBanner() {
    const id = ids().banner;
    if (!id) return;
    try {
      await AdMob.showBanner({ adId: id, adSize: "ADAPTIVE_BANNER", position: "BOTTOM_CENTER", margin: 0, isTesting: !!cfg.testing });
    } catch (e) {}
  }

  async function loadInterstitial() {
    const id = ids().interstitial;
    if (!id) return;
    try {
      await AdMob.prepareInterstitial({ adId: id, isTesting: !!cfg.testing });
      interstitialReady = true;
    } catch (e) {
      interstitialReady = false;
    }
  }

  // La app llama a esto después de cada tirada.
  async function afterRoll() {
    if (!ready || !cfg.interstitialEvery) return;
    rolls++;
    if (rolls % cfg.interstitialEvery !== 0 || !interstitialReady) return;
    interstitialReady = false;
    try { await AdMob.showInterstitial(); } catch (e) {}
    loadInterstitial();
  }

  window.Ads = { afterRoll };
  init();
})();
