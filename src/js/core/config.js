// ===== CONFIGURAÇÕES DE PERFORMANCE =====
const CONFIG = {
  USE_THREE_JS: true,
  USE_PARTICLES: true,
  SHOW_EFFECTS: localStorage.getItem("nexus_show_effects") !== "false",
  REDUCE_MOTION: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  IS_MOBILE: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
  IMAGE_LOAD_TIMEOUT: 10000,
  LAZY_LOAD_THRESHOLD: 100,
  USE_VOICE_COMMANDS: false,
};

const scheduleIdleTask = (callback, options = {}) => {
  if (typeof window.requestIdleCallback === "function") {
    return window.requestIdleCallback(callback, options);
  }
  const timeout = options.timeout ?? 1;
  return setTimeout(() => {
    callback({
      didTimeout: false,
      timeRemaining: () => 0,
    });
  }, timeout);
};

const categoryNames = {
  all: "TODO O MULTIVERSO",
  "One-Piece": "ONE PIECE",
  "Dragon-Ball": "DRAGON BALL",
  Naruto: "NARUTO",
  HXH: "HUNTER X HUNTER",
  kimetsu: "DEMON SLAYER",
  Berserk: "BERSERK",
  castlevania: "CASTLEVANIA",
  lol: "LEAGUE OF LEGENDS",
  Fullmetal: "FULLMETAL ALCHEMIST",
  Boku: "MY HERO ACADEMIA",
};
