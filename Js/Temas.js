class QuantumThemeSystem {
  constructor() {
    this.currentTheme = "quantum";
    this.customThemes = [];
    this.themes = {
      quantum: {
        name: "QUÂNTICO",
        colors: {
          primary: "#00ffea",
          secondary: "#ff00ff",
          accent: "#ffff00",
          danger: "#ff2a6d",
          success: "#00ff9d",
          warning: "#ffaa00",
          textPrimary: "#ffffff",
          textSecondary: "#b8b8ff",
          textAccent: "#00ffea",
          backgroundPrimary: "#0a0a0f",
          backgroundSecondary: "#141425",
        },
      },
      cyberpunk: {
        name: "CYBERPUNK",
        colors: {
          primary: "#ff00ff",
          secondary: "#00ffea",
          accent: "#ff2a6d",
          danger: "#ff0000",
          success: "#00ff9d",
          warning: "#ffff00",
          textPrimary: "#ffffff",
          textSecondary: "#b8b8ff",
          textAccent: "#ff00ff",
          backgroundPrimary: "#0a0a0a",
          backgroundSecondary: "#1a1a2e",
        },
      },
      matrix: {
        name: "MATRIX",
        colors: {
          primary: "#00ff41",
          secondary: "#008f11",
          accent: "#00ff9d",
          danger: "#ff2a6d",
          success: "#00ff41",
          warning: "#ffaa00",
          textPrimary: "#ffffff",
          textSecondary: "#00ff41",
          textAccent: "#00ff41",
          backgroundPrimary: "#000000",
          backgroundSecondary: "#0a0a0f",
        },
      },
      sunset: {
        name: "PÔR DO SOL",
        colors: {
          primary: "#ff6b6b",
          secondary: "#ffaa00",
          accent: "#ffd93d",
          danger: "#ff2a6d",
          success: "#6bcf7f",
          warning: "#ffaa00",
          textPrimary: "#ffffff",
          textSecondary: "#ffd1d1",
          textAccent: "#ff6b6b",
          backgroundPrimary: "#1a0a2a",
          backgroundSecondary: "#2a1a3a",
        },
      },
      ocean: {
        name: "OCEANO",
        colors: {
          primary: "#00b4d8",
          secondary: "#0077b6",
          accent: "#90e0ef",
          danger: "#ff2a6d",
          success: "#00ff9d",
          warning: "#ffaa00",
          textPrimary: "#ffffff",
          textSecondary: "#90e0ef",
          textAccent: "#00b4d8",
          backgroundPrimary: "#03045e",
          backgroundSecondary: "#0077b6",
        },
      },
      fire: {
        name: "INFERNO",
        colors: {
          primary: "#ff2a00",
          secondary: "#ffaa00",
          accent: "#ffff00",
          danger: "#ff0000",
          success: "#00ff9d",
          warning: "#ffaa00",
          textPrimary: "#ffffff",
          textSecondary: "#ffd1d1",
          textAccent: "#ff2a00",
          backgroundPrimary: "#0a0a0f",
          backgroundSecondary: "#2a0a0a",
        },
      },
      light: {
        name: "MODO CLARO",
        colors: {
          primary: "#0077b6",
          secondary: "#ff6b6b",
          accent: "#ffaa00",
          danger: "#ff2a6d",
          success: "#00a86b",
          warning: "#ffaa00",
          textPrimary: "#0a0a0f",
          textSecondary: "#333333",
          textAccent: "#0077b6",
          backgroundPrimary: "#f8f9fa",
          backgroundSecondary: "#ffffff",
        },
      },
      neon: {
        name: "NEON",
        colors: {
          primary: "#00ff9d",
          secondary: "#ff00ff",
          accent: "#00ffff",
          danger: "#ff2a6d",
          success: "#00ff9d",
          warning: "#ffff00",
          textPrimary: "#ffffff",
          textSecondary: "#b8b8ff",
          textAccent: "#00ff9d",
          backgroundPrimary: "#0a0a0f",
          backgroundSecondary: "#1a0a2a",
        },
      },
      galactic: {
        name: "GALÁCTICO",
        colors: {
          primary: "#9d00ff",
          secondary: "#00ffea",
          accent: "#ffaa00",
          danger: "#ff2a6d",
          success: "#00ff9d",
          warning: "#ffaa00",
          textPrimary: "#ffffff",
          textSecondary: "#b8b8ff",
          textAccent: "#9d00ff",
          backgroundPrimary: "#0a0a0f",
          backgroundSecondary: "#1a1a2e",
        },
      },
      retro: {
        name: "RETRO",
        colors: {
          primary: "#ff00ff",
          secondary: "#00ff00",
          accent: "#ffff00",
          danger: "#ff0000",
          success: "#00ff00",
          warning: "#ffff00",
          textPrimary: "#ffffff",
          textSecondary: "#00ff00",
          textAccent: "#ff00ff",
          backgroundPrimary: "#000000",
          backgroundSecondary: "#2a0a5e",
        },
      },
      ice: {
        name: "GELO",
        colors: {
          primary: "#00ffff",
          secondary: "#0080ff",
          accent: "#ffffff",
          danger: "#ff2a6d",
          success: "#00ff9d",
          warning: "#00ffff",
          textPrimary: "#ffffff",
          textSecondary: "#b8ffff",
          textAccent: "#00ffff",
          backgroundPrimary: "#0a1a2a",
          backgroundSecondary: "#1a3a5a",
        },
      },
      midnight: {
        name: "MEIA-NOITE",
        colors: {
          primary: "#8a2be2",
          secondary: "#00ffff",
          accent: "#ff00ff",
          danger: "#ff2a6d",
          success: "#00ff9d",
          warning: "#ffaa00",
          textPrimary: "#ffffff",
          textSecondary: "#b8b8ff",
          textAccent: "#8a2be2",
          backgroundPrimary: "#0a0a1a",
          backgroundSecondary: "#1a1a3a",
        },
      },
      aurora: {
        name: "AURORA",
        colors: {
          primary: "#00ff9d",
          secondary: "#ff0080",
          accent: "#ffaa00",
          danger: "#ff2a6d",
          success: "#00ff9d",
          warning: "#ffaa00",
          textPrimary: "#ffffff",
          textSecondary: "#b8ffff",
          textAccent: "#00ff9d",
          backgroundPrimary: "#0a1a2a",
          backgroundSecondary: "#1a0a3a",
        },
      },
      lava: {
        name: "LAVA",
        colors: {
          primary: "#ff5500",
          secondary: "#ffaa00",
          accent: "#ffff00",
          danger: "#ff0000",
          success: "#00ff9d",
          warning: "#ffaa00",
          textPrimary: "#ffffff",
          textSecondary: "#ffd1d1",
          textAccent: "#ff5500",
          backgroundPrimary: "#0a0a0f",
          backgroundSecondary: "#2a0a0a",
        },
      },
      highContrast: {
        name: "ALTO CONTRASTE",
        colors: {
          primary: "#ffffff",
          secondary: "#ffff00",
          accent: "#00ffff",
          danger: "#ff0000",
          success: "#00ff00",
          warning: "#ffff00",
          textPrimary: "#ffffff",
          textSecondary: "#cccccc",
          textAccent: "#00ffff",
          backgroundPrimary: "#000000",
          backgroundSecondary: "#111111",
        },
      },
    };

    this.defaultColors = {
      primary: "#00ffea",
      secondary: "#ff00ff",
      accent: "#ffff00",
    };

    this.init();
  }

  init() {
    this.loadTheme();
    this.setupEventListeners();
    this.renderThemePresets();
  }

  loadTheme() {
    const savedTheme = localStorage.getItem("nexus_theme_13");
    if (savedTheme) {
      try {
        const themeData = JSON.parse(savedTheme);
        this.applyTheme(themeData);
        this.currentTheme = themeData.name || "custom";
      } catch (e) {
        console.warn("Erro ao carregar tema:", e);
        this.applyTheme(this.themes.quantum);
      }
    } else {
      this.applyTheme(this.themes.quantum);
    }

    const savedCustomThemes = localStorage.getItem("nexus_custom_themes_13");
    if (savedCustomThemes) {
      try {
        this.customThemes = JSON.parse(savedCustomThemes);
        this.removeDuplicateThemes();
      } catch (e) {
        this.customThemes = [];
      }
    }
  }

  removeDuplicateThemes() {
    const uniqueThemes = [];
    const seen = new Set();

    this.customThemes.forEach((theme) => {
      const key = this.getThemeKey(theme);
      if (!seen.has(key)) {
        seen.add(key);
        uniqueThemes.push(theme);
      }
    });

    this.customThemes = uniqueThemes;
    localStorage.setItem(
      "nexus_custom_themes_13",
      JSON.stringify(this.customThemes),
    );
  }

  getThemeKey(theme) {
    return JSON.stringify(theme.colors);
  }

  saveTheme() {
    const currentColors = this.getCurrentColors();

    const isPreset = Object.values(this.themes).some((presetTheme) =>
      this.areColorsEqual(presetTheme.colors, currentColors),
    );

    if (isPreset) {
      const presetName = Object.keys(this.themes).find((key) =>
        this.areColorsEqual(this.themes[key].colors, currentColors),
      );

      const themeData = {
        name: this.themes[presetName].name,
        colors: currentColors,
        timestamp: new Date().toISOString(),
      };

      localStorage.setItem("nexus_theme_13", JSON.stringify(themeData));
      this.showToast("TEMA PRÉ-DEFINIDO ATIVADO!");
    } else {
      const existingIndex = this.customThemes.findIndex((theme) =>
        this.areColorsEqual(theme.colors, currentColors),
      );

      if (existingIndex === -1) {
        const themeData = {
          name: `Personalizado ${this.customThemes.length + 1}`,
          colors: currentColors,
          timestamp: new Date().toISOString(),
          isCustom: true,
        };

        this.customThemes.push(themeData);
        localStorage.setItem(
          "nexus_custom_themes_13",
          JSON.stringify(this.customThemes.slice(-10)),
        );
      }

      const themeData = {
        name: "custom",
        colors: currentColors,
        timestamp: new Date().toISOString(),
      };

      localStorage.setItem("nexus_theme_13", JSON.stringify(themeData));
      this.showToast("TEMA PERSONALIZADO SALVO!");
    }

    this.renderThemePresets();
  }

  removeCustomTheme(index) {
    if (index >= 0 && index < this.customThemes.length) {
      this.customThemes.splice(index, 1);
      localStorage.setItem(
        "nexus_custom_themes_13",
        JSON.stringify(this.customThemes),
      );
      this.renderThemePresets();
      this.showToast("TEMA PERSONALIZADO REMOVIDO!");
    }
  }

  areColorsEqual(colors1, colors2) {
    const keys = [
      "primary",
      "secondary",
      "accent",
      "danger",
      "success",
      "warning",
      "textPrimary",
      "textSecondary",
      "textAccent",
      "backgroundPrimary",
      "backgroundSecondary",
    ];

    return keys.every((key) => colors1[key] === colors2[key]);
  }

  applyTheme(theme) {
    const root = document.documentElement;

    Object.entries(theme.colors).forEach(([key, value]) => {
      const cssVar = this.getCssVariableName(key);
      if (cssVar) {
        root.style.setProperty(cssVar, value);
      }
    });

    if (theme.name === "MODO CLARO") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    this.updateGradients(theme.colors);
    this.updateThemeStatus(theme.name);
    this.currentTheme = theme.name;

    document.dispatchEvent(new CustomEvent("themeChanged", { detail: theme }));
  }

  getCssVariableName(colorKey) {
    const map = {
      primary: "--quantum-primary",
      secondary: "--quantum-secondary",
      accent: "--quantum-accent",
      danger: "--quantum-danger",
      success: "--quantum-success",
      warning: "--quantum-warning",
      textPrimary: "--text-primary",
      textSecondary: "--text-secondary",
      textAccent: "--text-accent",
      backgroundPrimary: "--background-primary",
      backgroundSecondary: "--background-secondary",
    };
    return map[colorKey];
  }

  updateGradients(colors) {
    const root = document.documentElement;

    const quantumGradient = `linear-gradient(135deg, ${colors.primary} 0%, ${this.mixColors(colors.primary, colors.secondary, 25)} 25%, ${colors.secondary} 50%, ${colors.danger} 75%, ${colors.accent} 100%)`;
    root.style.setProperty("--quantum-gradient", quantumGradient);

    const darkGradient = `linear-gradient(135deg, ${colors.backgroundPrimary} 0%, ${this.mixColors(colors.backgroundPrimary, colors.backgroundSecondary, 25)} 25%, ${colors.backgroundSecondary} 50%, ${this.mixColors(colors.backgroundSecondary, colors.backgroundPrimary, 75)} 75%, ${this.mixColors(colors.backgroundPrimary, colors.backgroundSecondary, 100)} 100%)`;
    root.style.setProperty("--dark-gradient", darkGradient);

    const cardGradient = `linear-gradient(145deg, rgba(${this.hexToRgb(colors.backgroundSecondary)}, 0.95) 0%, rgba(${this.hexToRgb(this.mixColors(colors.backgroundSecondary, colors.backgroundPrimary, 50))}, 0.9) 50%, rgba(${this.hexToRgb(this.mixColors(colors.backgroundPrimary, colors.backgroundSecondary, 100))}, 0.85) 100%)`;
    root.style.setProperty("--card-gradient", cardGradient);

    const glow = `0 0 40px rgba(${this.hexToRgb(colors.primary)}, 0.7), 0 0 80px rgba(${this.hexToRgb(colors.secondary)}, 0.5), 0 0 120px rgba(${this.hexToRgb(colors.danger)}, 0.3)`;
    root.style.setProperty("--quantum-glow", glow);

    const glassBg = `rgba(${this.hexToRgb(colors.backgroundSecondary)}, 0.7)`;
    root.style.setProperty("--glass-bg", glassBg);
  }

  mixColors(color1, color2, percentage) {
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);

    const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * (percentage / 100));
    const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * (percentage / 100));
    const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * (percentage / 100));

    return this.rgbToHex(r, g, b);
  }

  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  }

  rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  getCurrentColors() {
    const root = document.documentElement;
    return {
      primary: getComputedStyle(root)
        .getPropertyValue("--quantum-primary")
        .trim(),
      secondary: getComputedStyle(root)
        .getPropertyValue("--quantum-secondary")
        .trim(),
      accent: getComputedStyle(root)
        .getPropertyValue("--quantum-accent")
        .trim(),
      danger: getComputedStyle(root)
        .getPropertyValue("--quantum-danger")
        .trim(),
      success: getComputedStyle(root)
        .getPropertyValue("--quantum-success")
        .trim(),
      warning: getComputedStyle(root)
        .getPropertyValue("--quantum-warning")
        .trim(),
      textPrimary: getComputedStyle(root)
        .getPropertyValue("--text-primary")
        .trim(),
      textSecondary: getComputedStyle(root)
        .getPropertyValue("--text-secondary")
        .trim(),
      textAccent: getComputedStyle(root)
        .getPropertyValue("--text-accent")
        .trim(),
      backgroundPrimary: getComputedStyle(root)
        .getPropertyValue("--background-primary")
        .trim(),
      backgroundSecondary: getComputedStyle(root)
        .getPropertyValue("--background-secondary")
        .trim(),
    };
  }

  createCustomTheme() {
    const primary = document.getElementById("colorPrimary").value;
    const secondary = document.getElementById("colorSecondary").value;
    const accent = document.getElementById("colorAccent").value;

    const colors = {
      primary,
      secondary,
      accent,
      danger: this.adjustColor(primary, -30),
      success: this.adjustColor(accent, 60),
      warning: this.adjustColor(accent, 30),
      textPrimary: "#ffffff",
      textSecondary: this.adjustColor(primary, 40),
      textAccent: primary,
      backgroundPrimary: "#0a0a0f",
      backgroundSecondary: "#141425",
    };

    return {
      name: "Personalizado",
      colors,
    };
  }

  adjustColor(color, hueShift) {
    return color;
  }

  updateThemeStatus(themeName) {
    const statusElement = document.getElementById("themeStatus");
    if (statusElement) {
      statusElement.textContent = themeName.toUpperCase();
    }
  }

  setupEventListeners() {
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        this.openThemeModal();
      });
    }

    const themeClose = document.getElementById("themeClose");
    if (themeClose) {
      themeClose.addEventListener("click", () => {
        this.closeThemeModal();
      });
    }

    const applyTheme = document.getElementById("applyTheme");
    if (applyTheme) {
      applyTheme.addEventListener("click", () => {
        const customTheme = this.createCustomTheme();
        this.applyTheme(customTheme);
        this.showToast("TEMA PERSONALIZADO APLICADO!");
        this.updateThemePreview();
      });
    }

    const resetTheme = document.getElementById("resetTheme");
    if (resetTheme) {
      resetTheme.addEventListener("click", () => {
        this.applyTheme(this.themes.quantum);
        document.getElementById("colorPrimary").value =
          this.defaultColors.primary;
        document.getElementById("colorSecondary").value =
          this.defaultColors.secondary;
        document.getElementById("colorAccent").value =
          this.defaultColors.accent;
        this.showToast("TEMA PADRÃO RESTAURADO!");
        this.updateThemePreview();
      });
    }

    const saveTheme = document.getElementById("saveTheme");
    if (saveTheme) {
      saveTheme.addEventListener("click", () => {
        this.saveTheme();
        this.updateThemePreview();
      });
    }

    const toggleDarkMode = document.getElementById("toggleDarkMode");
    const toggleLightMode = document.getElementById("toggleLightMode");

    if (toggleDarkMode) {
      toggleDarkMode.addEventListener("click", () => {
        this.setDarkMode();
      });
    }

    if (toggleLightMode) {
      toggleLightMode.addEventListener("click", () => {
        this.setLightMode();
      });
    }

    const colorPickers = ["colorPrimary", "colorSecondary", "colorAccent"];
    colorPickers.forEach((id) => {
      const picker = document.getElementById(id);
      if (picker) {
        picker.addEventListener("input", () => {
          this.updateThemePreview();
        });
      }
    });
  }

  openThemeModal() {
    const modal = document.getElementById("themeModal");
    if (modal) {
      modal.classList.add("show");
      modal.removeAttribute("hidden");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      const container = modal.querySelector(".modal-content-scroll");
      if (container) {
        container.scrollTop = 0;
      }
      this.updateThemePreview();
    }
  }

  closeThemeModal() {
    const modal = document.getElementById("themeModal");
    if (modal) {
      modal.classList.remove("show");
      modal.setAttribute("hidden", "");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }
  }

  renderThemePresets() {
    const container = document.getElementById("themePresets");
    if (!container) return;

    container.innerHTML = "";

    Object.entries(this.themes).forEach(([key, theme]) => {
      const preset = document.createElement("div");
      preset.className = "theme-preview";
      preset.style.background = `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`;
      preset.title = theme.name;
      preset.dataset.theme = key;

      if (this.currentTheme === key) {
        preset.classList.add("active");
      }

      preset.addEventListener("click", () => {
        this.applyTheme(theme);
        this.showToast(`TEMA ${theme.name} ATIVADO!`);
        document
          .querySelectorAll(".theme-preview")
          .forEach((p) => p.classList.remove("active"));
        preset.classList.add("active");
        this.updateThemePreview();
      });

      container.appendChild(preset);
    });

    this.customThemes.forEach((theme, index) => {
      const preset = document.createElement("div");
      preset.className = "theme-preview custom-theme";
      preset.style.background = `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`;
      preset.title = theme.name;
      preset.dataset.theme = `custom_${index}`;

      const removeBtn = document.createElement("button");
      removeBtn.className = "theme-remove-btn";
      removeBtn.innerHTML = '<i class="fas fa-times"></i>';
      removeBtn.title = "Remover tema";
      removeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.removeCustomTheme(index);
      });

      preset.appendChild(removeBtn);

      preset.addEventListener("click", () => {
        this.applyTheme(theme);
        this.showToast(`TEMA ${theme.name} ATIVADO!`);
        document
          .querySelectorAll(".theme-preview")
          .forEach((p) => p.classList.remove("active"));
        preset.classList.add("active");
        this.updateThemePreview();
      });

      container.appendChild(preset);
    });
  }

  updateThemePreview() {
    const preview = document.getElementById("themePreview");
    if (!preview) return;

    const primary = document.getElementById("colorPrimary")?.value || "#00ffea";
    const secondary =
      document.getElementById("colorSecondary")?.value || "#ff00ff";
    const accent = document.getElementById("colorAccent")?.value || "#ffff00";

    preview.style.background = `linear-gradient(135deg, ${primary}, ${secondary}, ${accent})`;
  }

  setDarkMode() {
    document.documentElement.removeAttribute("data-theme");
    this.applyTheme(this.themes.quantum);
    this.showToast("MODO ESCURO ATIVADO!");
  }

  setLightMode() {
    this.applyTheme(this.themes.light);
    this.showToast("MODO CLARO ATIVADO!");
  }

  showToast(message) {
    const toast = document.getElementById("quantumToast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");
    toast.removeAttribute("hidden");

    if (typeof gsap !== "undefined" && !CONFIG.REDUCE_MOTION) {
      gsap.fromTo(
        toast,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      );
    }

    setTimeout(() => {
      if (typeof gsap !== "undefined" && !CONFIG.REDUCE_MOTION) {
        gsap.to(toast, {
          y: 100,
          opacity: 0,
          duration: 0.6,
          ease: "power2.in",
          onComplete: () => {
            toast.classList.remove("show");
            toast.setAttribute("hidden", "");
          },
        });
      } else {
        toast.classList.remove("show");
        toast.setAttribute("hidden", "");
      }
    }, 3000);
  }
}
