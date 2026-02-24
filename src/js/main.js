// ===== INICIALIZAÇÃO =====
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 DOM Carregado - Iniciando Nexus Universe 13/10");

  new QuantumPreloader();

  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  document.documentElement.classList.add("js-enabled");

  console.log("✅ Sistema 13/10 inicializado com sucesso");
});

if ("serviceWorker" in navigator && window.location.protocol === "https:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}

window.addEventListener("beforeunload", () => {
  if (window.gallery) {
    window.gallery.cleanup();
  }
});

window.gallery = null;
window.CONFIG = CONFIG;
