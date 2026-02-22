// ============================================
// SISTEMA DE BATALHA 2D -

class QuantumBattle2DSystem {
  constructor(gallery) {
    this.gallery = gallery;
    this.canvas = null;
    this.ctx = null;
    this.player = null;
    this.bot = null;
    this.keys = {};
    this.gameLoopId = null;
    this.lastAttackTime = 0;
    this.attackCooldown = 500;
    this.battleEnded = false;
    this.battleEndTimer = null;

    // Parâmetros físicos MELHORADOS
    this.gravity = 0.6; // Queda mais natural
    this.groundY = 340;
    this.canvasWidth = 800;
    this.canvasHeight = 400;
    this.airResistance = 0.98;

    // Efeitos visuais
    this.effects = [];
    this.particles = [];
    this.backgroundParticles = []; // Novo: Partículas de ambiente
    this.combatLog = []; // Rastreia eventos de combate
    this.comboTracker = {}; // Rastreia combos por jogador

    // Estado da seleção
    this.currentPlayer = 1;
    this.selectedCharacters = {
      player: null,
      bot: null,
    };

    // Imagens carregadas
    this.playerImage = null;
    this.botImage = null;
    this.imagesLoaded = false;

    // Para controle de shake de tela
    this.shakeIntensity = 0;
    this.shakeDecay = 0.9;

    this.init();
  }

  init() {
    this.cacheElements();
    this.setupEventListeners();
    this.setupKeyboard();
  }

  cacheElements() {
    this.elements = {
      page: document.getElementById("quantumBattle2dPage"),
      canvas: document.getElementById("battleCanvas"),
      playerHealthFill: document.getElementById("playerHealthFill"),
      botHealthFill: document.getElementById("botHealthFill"),
      playerHealthLabel: document.getElementById("playerHealthLabel"),
      botHealthLabel: document.getElementById("botHealthLabel"),
      resetBtn: document.getElementById("resetBattle2dBtn"),
      backBtn: document.getElementById("backToGalleryFromBattle2d"),
      backToSelectionBtn: document.getElementById("backToSelectionBtn"),
      battle2dToggle: document.getElementById("battle2dToggle"),
      selectPlayerBtn: document.getElementById("selectPlayerBtn"),
      selectBotBtn: document.getElementById("selectBotBtn"),
      playerSelectedDisplay: document.getElementById("playerSelectedDisplay"),
      botSelectedDisplay: document.getElementById("botSelectedDisplay"),
      startBattle2dBtn: document.getElementById("startBattle2dBtn"),
      battle2dControls: document.getElementById("battle2dControls"),
      battle2dArena: document.getElementById("battle2dArena"),
    };
  }

  setupEventListeners() {
    if (this.elements.backBtn) {
      this.elements.backBtn.addEventListener("click", () => {
        this.stopGame();
        this.gallery.showGalleryPage();
        this.gallery.audio?.play("click");
      });
    }

    if (this.elements.backToSelectionBtn) {
      this.elements.backToSelectionBtn.addEventListener("click", () => {
        this.showSelectionScreen();
        this.gallery.audio?.play("click");
      });
    }

    if (this.elements.resetBtn) {
      this.elements.resetBtn.addEventListener("click", () => {
        this.resetBattle();
        this.gallery.audio?.play("click");
      });
    }

    if (this.elements.battle2dToggle) {
      this.elements.battle2dToggle.addEventListener("click", (e) => {
        e.preventDefault();
        this.showBattlePage();
      });
    }

    if (this.elements.selectPlayerBtn) {
      this.elements.selectPlayerBtn.addEventListener("click", () => {
        this.currentPlayer = 1;
        this.openCharacterSelector("SELECIONE SEU PERSONAGEM");
        this.gallery.audio?.play("click");
      });
    }

    if (this.elements.selectBotBtn) {
      this.elements.selectBotBtn.addEventListener("click", () => {
        this.currentPlayer = 2;
        this.openCharacterSelector("SELECIONE PERSONAGEM DO BOT");
        this.gallery.audio?.play("click");
      });
    }

    if (this.elements.startBattle2dBtn) {
      this.elements.startBattle2dBtn.addEventListener("click", () => {
        this.startBattle();
        this.gallery.audio?.play("click");
      });
    }

    // Prevenir rolagem com teclas de controle
    window.addEventListener("keydown", (e) => {
      if (
        this.elements.page &&
        this.elements.page.style.display === "block" &&
        this.elements.battle2dArena &&
        this.elements.battle2dArena.style.display === "block"
      ) {
        if (
          [
            "Space",
            "ArrowUp",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "KeyW",
            "KeyA",
            "KeyS",
            "KeyD",
            "KeyF",
          ].includes(e.code)
        ) {
          e.preventDefault();
        }
      }
    });

    window.addEventListener("blur", () => {
      this.keys = {};
    });
  }

  setupKeyboard() {
    window.addEventListener("keydown", (e) => {
      this.keys[e.code] = true;
    });

    window.addEventListener("keyup", (e) => {
      this.keys[e.code] = false;
      if (e.code === "KeyF" && this.player) {
        this.player.attacking = false;
      }
    });
  }

  openCharacterSelector(title) {
    const modal = document.getElementById("characterSelectorModal");
    const titleElement = document.getElementById("selectorTitle");
    const grid = document.getElementById("characterSelectorGrid");

    if (!modal || !grid) return;

    titleElement.textContent = title;

    // Passa o modal como referência para o renderizador
    this.renderCharacterSelector(grid, modal);

    modal.classList.add("show");
    document.body.style.overflow = "hidden";

    const closeBtn = document.getElementById("selectorClose");
    if (closeBtn) {
      closeBtn.onclick = () => {
        modal.classList.remove("show");
        document.body.style.overflow = "";
      };
    }

    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
        document.body.style.overflow = "";
      }
    };
  }

  renderCharacterSelector(grid, modal) {
    grid.innerHTML = "";

    this.gallery.charactersData.forEach((character) => {
      const normalizedPath =
        this.gallery.cache?.normalizePath(character.image) || character.image;
      const cachedImg = this.gallery.cache?.imageCache?.get(normalizedPath);
      const imgSrc = cachedImg ? cachedImg.src : character.image;

      const isSelected =
        (this.currentPlayer === 1 &&
          this.selectedCharacters.player?.id === character.id) ||
        (this.currentPlayer === 2 &&
          this.selectedCharacters.bot?.id === character.id);

      const characterEl = document.createElement("div");
      characterEl.className = `selector-character ${isSelected ? "selected" : ""}`;
      characterEl.dataset.id = character.id;

      const categoryDisplay = window.categoryNames
        ? window.categoryNames[character.category] || character.category
        : character.category;

      characterEl.innerHTML = `
                <img src="${imgSrc}" 
                     alt="${character.name}" 
                     class="selector-character-image"
                     onerror="this.onerror=null; this.src='${this.gallery.generatePlaceholderSVG ? this.gallery.generatePlaceholderSVG(character, true) : ""}';">
                <h4 class="selector-character-name">${character.name}</h4>
                <div class="selector-character-category">
                    ${categoryDisplay}
                </div>
                <div class="selector-character-stats">
                    <div class="stat-item">
                        <span class="stat-label">FOR:</span>
                        <span class="stat-value">${character.stats.forca}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">VEL:</span>
                        <span class="stat-value">${character.stats.velocidade}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">DEF:</span>
                        <span class="stat-value">${character.stats.defesa}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">HAB:</span>
                        <span class="stat-value">${character.stats.habilidade || 50}</span>
                    </div>
                </div>
            `;

      // CORREÇÃO: Usar closure para capturar o modal corretamente
      characterEl.addEventListener(
        "click",
        function (selectedModal) {
          return function () {
            this.selectCharacter(character);
            // FECHA O MODAL CORRETAMENTE
            selectedModal.classList.remove("show");
            document.body.style.overflow = "";
            this.gallery.audio?.play("click");
          }.bind(this);
        }.call(this, modal),
      );

      grid.appendChild(characterEl);
    });
  }

  selectCharacter(character) {
    if (this.currentPlayer === 1) {
      this.selectedCharacters.player = character;
      this.updateSelectedDisplay(1, character);
    } else {
      this.selectedCharacters.bot = character;
      this.updateSelectedDisplay(2, character);
    }

    if (this.elements.startBattle2dBtn) {
      this.elements.startBattle2dBtn.disabled = !(
        this.selectedCharacters.player && this.selectedCharacters.bot
      );
    }
  }

  updateSelectedDisplay(player, character) {
    const display =
      player === 1
        ? this.elements.playerSelectedDisplay
        : this.elements.botSelectedDisplay;
    if (!display) return;

    const normalizedPath =
      this.gallery.cache?.normalizePath(character.image) || character.image;
    const cachedImg = this.gallery.cache?.imageCache?.get(normalizedPath);
    const imgSrc = cachedImg ? cachedImg.src : character.image;

    const categoryDisplay = window.categoryNames
      ? window.categoryNames[character.category] || character.category
      : character.category;

    display.innerHTML = `
            <div class="selected-mini-card">
                <img src="${imgSrc}" alt="${character.name}" class="selected-mini-image">
                <div class="selected-mini-info">
                    <strong>${character.name}</strong>
                    <small>${categoryDisplay}</small>
                    <div class="selected-mini-stats">
                        <span>FOR ${character.stats.forca}</span>
                        <span>VEL ${character.stats.velocidade}</span>
                        <span>DEF ${character.stats.defesa}</span>
                        <span>HAB ${character.stats.habilidade || 50}</span>
                    </div>
                </div>
            </div>
        `;
  }

  showSelectionScreen() {
    this.stopGame();
    if (this.elements.battle2dControls)
      this.elements.battle2dControls.style.display = "block";
    if (this.elements.battle2dArena)
      this.elements.battle2dArena.style.display = "none";
    this.gallery.showToast("🔙 VOLTANDO À SELEÇÃO");
  }

  showBattlePage() {
    this.gallery.preparePageTransition?.();
    this.gallery.state.showFavoritesPage = false;
    this.gallery.state.showBattlePage = false;
    this.gallery.state.showBattle2dPage = true;

    if (this.gallery.setSectionVisibility) {
      this.gallery.setSectionVisibility(
        this.gallery.elements?.quantumUniverse,
        false,
      );
    } else if (this.gallery.elements?.quantumUniverse) {
      this.gallery.elements.quantumUniverse.style.display = "none";
    }
    const favoritesPage = document.getElementById("quantumFavoritesPage");
    if (this.gallery.setSectionVisibility) {
      this.gallery.setSectionVisibility(favoritesPage, false, {
        activeClass: true,
      });
    } else if (favoritesPage) {
      favoritesPage.style.display = "none";
      favoritesPage.classList.remove("active");
      favoritesPage.setAttribute("hidden", "");
      favoritesPage.setAttribute("aria-hidden", "true");
    }
    const battlePage = document.getElementById("quantumBattlePage");
    if (this.gallery.setSectionVisibility) {
      this.gallery.setSectionVisibility(battlePage, false, { activeClass: true });
    } else if (battlePage) {
      battlePage.style.display = "none";
      battlePage.classList.remove("active");
      battlePage.setAttribute("hidden", "");
      battlePage.setAttribute("aria-hidden", "true");
    }

    if (this.elements.page) {
      if (this.gallery.setSectionVisibility) {
        this.gallery.setSectionVisibility(this.elements.page, true, {
          activeClass: true,
        });
      } else {
        this.elements.page.style.display = "block";
        this.elements.page.classList.add("active");
        this.elements.page.removeAttribute("hidden");
        this.elements.page.setAttribute("aria-hidden", "false");
      }
      this.selectedCharacters = { player: null, bot: null };

      // Resetar os displays
      if (this.elements.playerSelectedDisplay) {
        this.elements.playerSelectedDisplay.innerHTML = `
                    <div class="selected-mini-card empty">
                        <i class="fas fa-user-circle"></i>
                        <span>Nenhum personagem selecionado</span>
                    </div>
                `;
      }
      if (this.elements.botSelectedDisplay) {
        this.elements.botSelectedDisplay.innerHTML = `
                    <div class="selected-mini-card empty">
                        <i class="fas fa-robot"></i>
                        <span>Nenhum personagem selecionado</span>
                    </div>
                `;
      }

      this.showSelectionScreen();
      setTimeout(() => {
        this.elements.page.style.opacity = "1";
        this.elements.page.style.transform = "translateY(0)";
      }, 50);
    }

    document.title = "⚔️ BATALHA 2D | NEXUS UNIVERSE";
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.gallery.audio?.play("click");
    this.gallery.showToast("⚔️ ARENA QUÂNTICA CARREGADA");
  }

  startBattle() {
    if (!this.selectedCharacters.player || !this.selectedCharacters.bot) {
      this.gallery.showToast("❌ SELECIONE AMBOS OS PERSONAGENS!");
      return;
    }

    this.loadCharacterImages().then(() => {
      if (this.elements.battle2dControls)
        this.elements.battle2dControls.style.display = "none";
      if (this.elements.battle2dArena)
        this.elements.battle2dArena.style.display = "block";
      this.startGame();
      this.gallery.showToast("⚔️ BATALHA INICIADA!");
    });
  }

  async loadCharacterImages() {
    this.imagesLoaded = false;
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    };

    try {
      const playerSrc = this.gallery.cache?.imageCache?.has(
        this.gallery.cache.normalizePath(this.selectedCharacters.player.image),
      )
        ? this.gallery.cache.imageCache.get(
            this.gallery.cache.normalizePath(
              this.selectedCharacters.player.image,
            ),
          ).src
        : this.selectedCharacters.player.image;

      const botSrc = this.gallery.cache?.imageCache?.has(
        this.gallery.cache.normalizePath(this.selectedCharacters.bot.image),
      )
        ? this.gallery.cache.imageCache.get(
            this.gallery.cache.normalizePath(this.selectedCharacters.bot.image),
          ).src
        : this.selectedCharacters.bot.image;

      [this.playerImage, this.botImage] = await Promise.all([
        loadImage(playerSrc),
        loadImage(botSrc),
      ]);

      this.imagesLoaded = true;
    } catch (error) {
      console.error("Erro ao carregar imagens:", error);
      this.gallery.showToast("❌ ERRO AO CARREGAR IMAGENS");
    }
  }

  startGame() {
    this.stopGame();
    this.battleEnded = false;
    this.shakeIntensity = 0;

    // Cria os personagens com stats
    this.player = new BattleCharacter(
      this.selectedCharacters.player,
      100,
      this.groundY,
      60,
      100,
      true,
    );
    this.bot = new BattleCharacter(
      this.selectedCharacters.bot,
      600,
      this.groundY,
      60,
      100,
      false,
    );

    this.applyStatsFromCharacter(
      this.player,
      this.selectedCharacters.player.stats,
    );
    this.applyStatsFromCharacter(this.bot, this.selectedCharacters.bot.stats);

    // Ajuste de dificuldade dinâmica do bot
    this.adjustBotDifficulty();

    this.canvas = this.elements.canvas;
    this.ctx = this.canvas.getContext("2d");

    this.keys = {};

    if (this.elements.playerHealthLabel) {
      this.elements.playerHealthLabel.textContent =
        this.selectedCharacters.player.name;
    }
    if (this.elements.botHealthLabel) {
      this.elements.botHealthLabel.textContent =
        this.selectedCharacters.bot.name;
    }

    // Novo: Gerar partículas de fundo para ambiente
    this.generateBackgroundParticles();

    this.gameLoop();
  }

  // Novo: Gera partículas de fundo/estrelas
  generateBackgroundParticles() {
    this.backgroundParticles = [];
    for (let i = 0; i < 30; i++) {
      this.backgroundParticles.push({
        x: Math.random() * this.canvasWidth,
        y: Math.random() * this.canvasHeight,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.3 + 0.1,
        color: Math.random() > 0.5 ? "#00ffea" : "#ff2a6d",
      });
    }
  }

  adjustBotDifficulty() {
    // Comparar stats e ajustar IA do bot se necessário
    const playerStats = this.selectedCharacters.player.stats;
    const botStats = this.selectedCharacters.bot.stats;

    const playerTotal =
      (playerStats.forca || 50) +
      (playerStats.velocidade || 50) +
      (playerStats.defesa || 50) +
      (playerStats.habilidade || 50);
    const botTotal =
      (botStats.forca || 50) +
      (botStats.velocidade || 50) +
      (botStats.defesa || 50) +
      (botStats.habilidade || 50);

    // Se o bot é muito mais fraco, aumentar stamina e critchance
    if (botTotal < playerTotal * 0.8) {
      this.bot.maxStamina *= 1.2;
      this.bot.stamina = this.bot.maxStamina;
      this.bot.staminaRegen *= 1.15;
      this.bot.critChance *= 1.3;
      this.gallery.showToast("⚠️ IA AUMENTOU DE DIFICULDADE");
    } else if (botTotal > playerTotal * 1.2) {
      // Se o bot é muito mais forte, reduzir um pouco
      this.bot.maxStamina *= 0.85;
      this.bot.stamina = this.bot.maxStamina;
      this.bot.staminaRegen *= 0.9;
    }
  }

  applyStatsFromCharacter(char, stats) {
    if (!stats) return;

    // Velocidade melhorada (sistema mais responsivo)
    const velocidade = stats.velocidade || 50;
    char.speed = 4 + (velocidade / 100) * 3; // 4-7 px/frame
    char.accel = 0.8 + (velocidade / 100) * 0.4; // 0.8-1.2

    // Pulo melhorado (maior controle)
    const forca = stats.forca || 50;
    char.jumpForce = -8.5 - (forca / 100) * 1.5; // -8.5 a -10
    char.jumpHeight = Math.abs(char.jumpForce); // Altura máxima do pulo

    // Ataque melhorado
    char.attackDamage = 10 + (forca / 100) * 5; // 10-15 dano base

    // Habilidade afeta velocidade de ataque e crítico
    const hab = stats.habilidade || 50;
    char.attackCooldown = Math.max(250, 600 - hab * 4); // 250-600ms
    char.critChance = 0.05 + (hab / 100) * 0.25; // 5%-30% crítico
    char.critMultiplier = 1.8 + (hab / 100) * 0.4; // 1.8-2.2x dano crítico

    // Alcance de ataque com habilidade
    const defesa = stats.defesa || 50;
    char.attackRange = 70 + (hab / 100) * 20; // 70-90 px
    char.defense = (defesa / 100) * 40; // 0-40% redução de dano

    // Stamina system (novo!)
    char.maxStamina = 100 + (velocidade / 100) * 50;
    char.stamina = char.maxStamina;
    char.staminaRegen = 0.8 + (velocidade / 100) * 0.4;
    char.staminaCost = 20 + 10 * (1 - velocidade / 100);

    // Atributos básicos
    char.friction = 0.82;
    char.maxHealth = 100;
    char.health = 100;

    // Combo system
    char.comboCount = 0;
    char.lastComboTime = 0;
    char.comboTimeout = 800; // ms
    char.comboMultiplier = 1;
  }

  stopGame() {
    if (this.gameLoopId) {
      cancelAnimationFrame(this.gameLoopId);
      this.gameLoopId = null;
    }
    if (this.battleEndTimer) {
      clearTimeout(this.battleEndTimer);
      this.battleEndTimer = null;
    }
    this.effects = [];
    this.particles = [];
    this.backgroundParticles = [];
  }

  resetBattle() {
    this.stopGame();
    this.startGame();
    this.gallery.showToast("🔄 BATALHA REINICIADA");
  }

  gameLoop() {
    if (!this.battleEnded) {
      this.update();
    }
    this.draw();
    this.gameLoopId = requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    this.applyPhysics(this.player);
    this.applyPhysics(this.bot);

    this.handlePlayerControls();
    this.botAI();
    this.checkAttacks();
    this.updateEffects();

    // Atualiza cooldown timers
    if (this.player.cooldownTimer > 0) this.player.cooldownTimer -= 16;
    if (this.bot.cooldownTimer > 0) this.bot.cooldownTimer -= 16;

    // Resetar combos se expirados
    if (
      this.player.comboCount > 0 &&
      Date.now() - this.player.lastComboTime > this.player.comboTimeout
    ) {
      this.player.comboCount = 0;
      this.player.comboMultiplier = 1;
    }
    if (
      this.bot.comboCount > 0 &&
      Date.now() - this.bot.lastComboTime > this.bot.comboTimeout
    ) {
      this.bot.comboCount = 0;
      this.bot.comboMultiplier = 1;
    }

    // Verificar fim de batalha
    if (this.player.health <= 0 || this.bot.health <= 0) {
      this.endBattle();
    }

    this.updateHealthBars();

    // Shake decai
    this.shakeIntensity *= this.shakeDecay;
  }

  applyPhysics(char) {
    // Aplicar gravidade
    char.vy += this.gravity;

    // Aplicar resistência do ar quando em ar
    if (char.isJumping) {
      char.vy *= this.airResistance;
    }

    // Atualizar posição vertical
    char.y += char.vy;

    // Colisão com o chão
    if (char.y >= this.groundY) {
      char.y = this.groundY;
      char.vy = 0;
      char.isJumping = false;
    }

    // Movimento horizontal com fricção
    char.x += char.vx;
    char.vx *= char.friction;

    // Limites do mapa (com um pouco mais de espaço)
    char.x = Math.max(15, Math.min(this.canvasWidth - 15 - char.width, char.x));
  }

  handlePlayerControls() {
    if (this.player.health <= 0) return;

    const accel = this.player.accel || 0.8;
    const maxSpeed = this.player.speed || 4;

    // Movimento com aceleração (mais responsivo)
    if (this.keys["ArrowLeft"] || this.keys["KeyA"]) {
      this.player.vx = Math.max(this.player.vx - accel, -maxSpeed);
      this.player.direction = -1;
    } else if (this.keys["ArrowRight"] || this.keys["KeyD"]) {
      this.player.vx = Math.min(this.player.vx + accel, maxSpeed);
      this.player.direction = 1;
    } else {
      this.player.vx *= this.player.friction || 0.82;
    }

    // Pulo com altura controlada (melhorado)
    if (
      (this.keys["Space"] || this.keys["ArrowUp"] || this.keys["KeyW"]) &&
      !this.player.isJumping
    ) {
      this.player.vy = this.player.jumpForce || -8.5;
      this.player.isJumping = true;
      this.createDustEffect(this.player.x + 30, this.groundY);
      this.gallery.audio?.play("jump");
    }

    // Regeneração de stamina
    if (this.player.stamina < this.player.maxStamina) {
      this.player.stamina = Math.min(
        this.player.maxStamina,
        this.player.stamina + this.player.staminaRegen,
      );
    }

    // Ataque com cooldown e stamina (melhorado)
    if (
      this.keys["KeyF"] &&
      !this.player.attackPressed &&
      Date.now() - this.player.lastAttack >
        (this.player.attackCooldown || 250) &&
      this.player.stamina >= this.player.staminaCost
    ) {
      this.player.attacking = true;
      this.player.attackPressed = true;
      this.player.lastAttack = Date.now();
      this.player.cooldownTimer = this.player.attackCooldown || 250;
      this.player.stamina -= this.player.staminaCost;

      // Adiciona combo
      const now = Date.now();
      if (now - this.player.lastComboTime < this.player.comboTimeout) {
        this.player.comboCount++;
      } else {
        this.player.comboCount = 1;
      }
      this.player.lastComboTime = now;
      this.player.comboMultiplier = 1 + (this.player.comboCount - 1) * 0.15; // +15% por hit

      this.createAttackEffect(this.player);
      this.gallery.audio?.play("attack");

      if (this.player.comboCount > 1) {
        this.createFloatingText(
          this.player.x + 30,
          this.player.y - 100,
          `COMBO x${this.player.comboCount}`,
          "#ffdd00",
        );
      }
    } else if (!this.keys["KeyF"]) {
      this.player.attackPressed = false;
    }

    if (this.player.attacking && Date.now() - this.player.lastAttack > 150) {
      this.player.attacking = false;
    }
  }

  botAI() {
    if (this.bot.health <= 0) return;

    const distance = this.player.x - this.bot.x;
    const absDist = Math.abs(distance);
    const heightDiff = this.player.y - this.bot.y;
    const botHealthPercent = this.bot.health / this.bot.maxHealth;

    // IA inteligente e dinâmica

    // 1. Regeneração de stamina
    if (this.bot.stamina < this.bot.maxStamina) {
      this.bot.stamina = Math.min(
        this.bot.maxStamina,
        this.bot.stamina + this.bot.staminaRegen,
      );
    }

    // 2. Comportamento defensivo quando com pouca vida
    if (botHealthPercent < 0.25) {
      // Foge agressivamente
      if (distance > 0) {
        this.bot.vx = Math.max(
          this.bot.vx - (this.bot.accel || 0.8) * 1.8,
          -(this.bot.speed || 4),
        );
      } else {
        this.bot.vx = Math.min(
          this.bot.vx + (this.bot.accel || 0.8) * 1.8,
          this.bot.speed || 4,
        );
      }
      // Tenta pular para escapar
      if (!this.bot.isJumping && Math.random() < 0.1) {
        this.bot.vy = this.bot.jumpForce || -8.5;
        this.bot.isJumping = true;
      }
    }
    // 3. Nível médio de vida - atitute balanceada
    else if (botHealthPercent > 0.5) {
      if (absDist > 120) {
        // Perseguição agressiva
        if (distance > 0) {
          this.bot.vx = Math.min(
            this.bot.vx + (this.bot.accel || 0.8) * 1.2,
            this.bot.speed || 4,
          );
          this.bot.direction = 1;
        } else {
          this.bot.vx = Math.max(
            this.bot.vx - (this.bot.accel || 0.8) * 1.2,
            -(this.bot.speed || 4),
          );
          this.bot.direction = -1;
        }
      } else if (absDist > 80) {
        // Aproximação estratégica
        if (distance > 0) {
          this.bot.vx = Math.min(
            this.bot.vx + (this.bot.accel || 0.8),
            this.bot.speed || 4,
          );
          this.bot.direction = 1;
        } else {
          this.bot.vx = Math.max(
            this.bot.vx - (this.bot.accel || 0.8),
            -(this.bot.speed || 4),
          );
          this.bot.direction = -1;
        }
      } else {
        // Mantém posição
        this.bot.vx *= 0.9;
      }
    }
    // 4. Vida crítica - movimento mais lento
    else {
      if (absDist > 100) {
        // Perseguição lenta
        if (distance > 0) {
          this.bot.vx = Math.min(
            this.bot.vx + (this.bot.accel || 0.8) * 0.8,
            this.bot.speed || 4,
          );
        } else {
          this.bot.vx = Math.max(
            this.bot.vx - (this.bot.accel || 0.8) * 0.8,
            -(this.bot.speed || 4),
          );
        }
      }
    }

    // 5. Saltos estratégicos (evita ataques/sobe para ataque)
    if (heightDiff < -40 && !this.bot.isJumping && Math.random() < 0.12) {
      this.bot.vy = this.bot.jumpForce || -8.5;
      this.bot.isJumping = true;
    } else if (heightDiff > 30 && !this.bot.isJumping && Math.random() < 0.06) {
      // Pula para atacar de cima
      this.bot.vy = this.bot.jumpForce || -8.5;
      this.bot.isJumping = true;
    }

    // 6. Sistema de ataque melhorado com defesa adaptatória
    const canAttack =
      absDist < (this.bot.attackRange || 90) &&
      Date.now() - this.bot.lastAttack > (this.bot.attackCooldown || 250) &&
      this.bot.stamina >= this.bot.staminaCost &&
      !this.bot.attacking;

    if (canAttack) {
      // Probabilidade de ataque baseada na situação
      let attackChance = 0.4;

      if (botHealthPercent > 0.7) attackChance = 0.6; // Mais agressivo com vida alta
      if (botHealthPercent < 0.3) attackChance = 0.25; // Mais cauteloso com vida baixa

      // Reação ao combo do jogador - defende contra sequências
      if (this.player.comboCount > 2) {
        attackChance *= 0.6; // Reduz chance de atacar se o jogador está em combo

        // Ocasionalmente tenta pular para escapar
        if (Math.random() < 0.3 && !this.bot.isJumping) {
          this.bot.vy = this.bot.jumpForce || -8.5;
          this.bot.isJumping = true;
        }
      }

      if (Math.random() < attackChance) {
        this.bot.attacking = true;
        this.bot.lastAttack = Date.now();
        this.bot.cooldownTimer = this.bot.attackCooldown || 250;
        this.bot.stamina -= this.bot.staminaCost;

        // Combo do bot
        const now = Date.now();
        if (now - this.bot.lastComboTime < this.bot.comboTimeout) {
          this.bot.comboCount++;
        } else {
          this.bot.comboCount = 1;
        }
        this.bot.lastComboTime = now;
        this.bot.comboMultiplier = 1 + (this.bot.comboCount - 1) * 0.15;

        this.createAttackEffect(this.bot);

        // Efeito visual especial baseado em situação
        if (this.bot.comboCount > 2) {
          this.createSparkEffect(
            this.bot.x + 30,
            this.bot.y - 40,
            15,
            "#ff2a6d",
          );
        }

        this.gallery.audio?.play("attack");

        setTimeout(() => {
          if (this.bot) this.bot.attacking = false;
        }, 150);
      }
    }

    // 7. Efeito de impacto quando toma dano
    if (
      this.bot.invincibilityFrames > 0 &&
      this.bot.invincibilityFrames % 5 === 0
    ) {
      // Reage visualmente ao dano
      this.createBloodEffect(this.bot.x + 30, this.bot.y - 20, 0.6);
    }
  }

  checkAttacks() {
    // Ataque do jogador
    if (
      this.player.attacking &&
      this.bot.health > 0 &&
      this.bot.invincibilityFrames <= 0
    ) {
      const distance = Math.abs(this.player.x - this.bot.x);
      const heightDiff = Math.abs(this.player.y - this.bot.y);

      if (distance < (this.player.attackRange || 90) && heightDiff < 70) {
        // Novo: Tenta bloquear o ataque
        if (this.attemptBlock(this.bot, this.player)) {
          this.player.attacking = false;
          return; // Ataque bloqueado!
        }

        // Calcula dano com sistema de defesa e combo
        let damage = this.player.attackDamage || 10;
        damage *= this.player.comboMultiplier || 1; // Bônus de combo
        damage *= 1 - (this.bot.defense || 0) / 100; // Redução por defesa

        // Sistema de crítico melhorado
        const isCrit = Math.random() < (this.player.critChance || 0.1);
        if (isCrit) {
          damage *= this.player.critMultiplier || 1.8;
          this.createFloatingText(
            this.bot.x + 30,
            this.bot.y - 80,
            "⚡ CRÍTICO!",
            "#ffff00",
          );
          // Novo: Efeito de eletricidade para crítico
          this.createElectricEffect(
            this.player.x + 30,
            this.player.y - 40,
            this.bot.x + 30,
            this.bot.y - 40,
          );
          // Novo: Sparks explosivos no crítico
          this.createSparkEffect(
            this.bot.x + 30,
            this.bot.y - 40,
            20,
            "#ffff00",
          );
        }

        damage = Math.max(1, Math.floor(damage));

        this.bot.health -= damage;
        this.createHitEffect(this.bot, true, damage, isCrit);

        // Sparkles normais no impacto
        this.createSparkEffect(
          this.bot.x + 30,
          this.bot.y - 40,
          12,
          isCrit ? "#ffdd00" : "#00ffea",
        );

        // Knockback melhorado baseado no dano
        const knockbackForce = 10 + (damage / this.bot.maxHealth) * 15;
        if (this.player.x < this.bot.x) {
          this.bot.vx += knockbackForce * (this.player.comboMultiplier || 1);
        } else {
          this.bot.vx -= knockbackForce * (this.player.comboMultiplier || 1);
        }

        this.shakeScreen(6 + (damage / this.bot.maxHealth) * 4);
        this.bot.invincibilityFrames = 20;
        this.player.attacking = false;
        this.gallery.audio?.play("hit");
      }
    }

    // Ataque do bot
    if (
      this.bot.attacking &&
      this.player.health > 0 &&
      this.player.invincibilityFrames <= 0
    ) {
      const distance = Math.abs(this.player.x - this.bot.x);
      const heightDiff = Math.abs(this.player.y - this.bot.y);

      if (distance < (this.bot.attackRange || 90) && heightDiff < 70) {
        // Novo: Tenta bloquear o ataque do bot
        if (this.attemptBlock(this.player, this.bot)) {
          this.bot.attacking = false;
          return; // Ataque bloqueado!
        }

        // Calcula dano com sistema de defesa e combo
        let damage = this.bot.attackDamage || 10;
        damage *= this.bot.comboMultiplier || 1; // Bônus de combo
        damage *= 1 - (this.player.defense || 0) / 100; // Redução por defesa

        // Sistema de crítico melhorado
        const isCrit = Math.random() < (this.bot.critChance || 0.1);
        if (isCrit) {
          damage *= this.bot.critMultiplier || 1.8;
          this.createFloatingText(
            this.player.x + 30,
            this.player.y - 80,
            "⚡ CRÍTICO!",
            "#ffff00",
          );
          // Novo: Efeito de eletricidade para crítico do bot
          this.createElectricEffect(
            this.bot.x + 30,
            this.bot.y - 40,
            this.player.x + 30,
            this.player.y - 40,
          );
          // Novo: Sparks explosivos no crítico
          this.createSparkEffect(
            this.player.x + 30,
            this.player.y - 40,
            20,
            "#ff2a6d",
          );
        }

        damage = Math.max(1, Math.floor(damage));

        this.player.health -= damage;
        this.createHitEffect(this.player, false, damage, isCrit);

        // Sparkles normais no impacto (vermelho para bot)
        this.createSparkEffect(
          this.player.x + 30,
          this.player.y - 40,
          12,
          isCrit ? "#ff5588" : "#ff2a6d",
        );

        // Knockback melhorado baseado no dano
        const knockbackForce = 10 + (damage / this.player.maxHealth) * 15;
        if (this.bot.x < this.player.x) {
          this.player.vx += knockbackForce * (this.bot.comboMultiplier || 1);
        } else {
          this.player.vx -= knockbackForce * (this.bot.comboMultiplier || 1);
        }

        this.shakeScreen(6 + (damage / this.player.maxHealth) * 4);
        this.player.invincibilityFrames = 20;
        this.bot.attacking = false;
        this.gallery.audio?.play("hit");
      }
    }

    this.player.health = Math.max(0, this.player.health);
    this.bot.health = Math.max(0, this.bot.health);
  }

  createDustEffect(x, y) {
    for (let i = 0; i < 12; i++) {
      this.particles.push({
        x: x + (Math.random() - 0.5) * 30,
        y: y,
        vx: (Math.random() - 0.5) * 6,
        vy: -Math.random() * 4 - 1.5,
        life: 0.8 + Math.random() * 0.5,
        maxLife: 1.3,
        size: 3 + Math.random() * 8,
        color: "rgba(100, 200, 255, 0.7)",
        rotation: Math.random() * Math.PI * 2,
      });
    }
  }

  createSparkEffect(x, y, count = 15, color = "#00ffea") {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = 3 + Math.random() * 5;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - Math.random() * 2,
        life: 0.6,
        maxLife: 0.6,
        size: 2 + Math.random() * 4,
        color: color,
        isSparkle: true,
      });
    }
  }

  createElectricEffect(fromX, fromY, toX, toY) {
    const steps = 5 + Math.floor(Math.random() * 5);
    for (let i = 0; i < steps; i++) {
      const t = i / steps;
      const x = fromX + (toX - fromX) * t + (Math.random() - 0.5) * 20;
      const y = fromY + (toY - fromY) * t + (Math.random() - 0.5) * 20;
      this.effects.push({
        x: x,
        y: y,
        type: "electric",
        life: 0.3,
        maxLife: 0.3,
        size: 5,
      });
    }
  }

  // Novo: Efeito de explosão com partículas de onda de choque
  createExplosionEffect(x, y, intensity = 1) {
    const count = Math.floor(20 * intensity);
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const speed = 4 + Math.random() * 8;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        life: 0.8,
        maxLife: 0.8,
        size: 3 + Math.random() * 6,
        color: `rgba(255, ${150 + Math.random() * 100}, 0, ${0.6 + Math.random() * 0.3})`,
        isSparkle: true,
      });
    }

    // Efeito de onda de choque
    this.effects.push({
      x: x,
      y: y,
      type: "shockwave",
      life: 0.4,
      maxLife: 0.4,
      size: 20,
    });
  }

  // Novo: Efeito de cura com partículas luminosas
  createHealEffect(x, y, healAmount = 10) {
    const count = 15 + Math.floor(healAmount / 5);
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = 2 + Math.random() * 4;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1 - Math.random() * 2,
        life: 1.2,
        maxLife: 1.2,
        size: 2 + Math.random() * 3,
        color: `rgba(100, 255, 150, ${0.7 + Math.random() * 0.2})`,
        isSparkle: true,
      });
    }

    // Efeito de brilho de cura
    this.effects.push({
      x: x,
      y: y,
      type: "heal",
      life: 0.6,
      maxLife: 0.6,
      size: 30,
    });
  }

  // Novo: Efeito de sangue com splatters
  createBloodEffect(x, y, intensity = 1) {
    const count = 8 + Math.floor(intensity * 5);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 6;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - Math.random() * 3,
        life: 1.5,
        maxLife: 1.5,
        size: 2 + Math.random() * 5,
        color: `rgba(${180 + Math.random() * 75}, ${Math.random() * 50}, ${Math.random() * 50}, ${0.6 + Math.random() * 0.3})`,
      });
    }
  }

  createAttackEffect(char) {
    const offset = char.direction === 1 ? 50 : -30;
    // Efeito principal
    this.effects.push({
      x: char.x + 30 + offset,
      y: char.y - 40,
      type: "attack",
      life: 0.25,
      maxLife: 0.25,
      size: 50,
    });

    // Efeito secundário de energia
    for (let i = 0; i < 3; i++) {
      this.particles.push({
        x: char.x + 30,
        y: char.y - 30,
        vx: offset > 0 ? 6 + Math.random() * 4 : -6 - Math.random() * 4,
        vy: (Math.random() - 0.5) * 4,
        life: 0.4,
        maxLife: 0.4,
        size: 2 + Math.random() * 4,
        color: char.isPlayer
          ? "rgba(0, 255, 200, 0.8)"
          : "rgba(255, 100, 150, 0.8)",
      });
    }
  }

  createHitEffect(char, isPlayerHit, damage, isCrit) {
    const particleCount = isCrit ? 20 : 15;
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: char.x + 30 + (Math.random() - 0.5) * 50,
        y: char.y - 40 + (Math.random() - 0.5) * 50,
        vx: (Math.random() - 0.5) * 12,
        vy: -Math.random() * 10 - 2,
        life: 1,
        maxLife: 1,
        size: 4 + Math.random() * 10,
        color: isCrit
          ? `rgba(255, 200, 50, ${0.8 + Math.random() * 0.2})`
          : isPlayerHit
            ? `rgba(100, 255, 200, ${0.7 + Math.random() * 0.2})`
            : `rgba(255, 80, 80, ${0.7 + Math.random() * 0.2})`,
      });
    }

    this.createDamageNumber(
      char.x + 30,
      char.y - 70,
      damage,
      isPlayerHit,
      isCrit,
    );

    // Efeito de impacto
    this.effects.push({
      x: char.x + 30,
      y: char.y - 40,
      type: "hit",
      life: 0.25,
      maxLife: 0.25,
      size: 60,
      isPlayer: isPlayerHit,
    });
  }

  createDamageNumber(x, y, damage, isPlayerTaking, isCrit) {
    this.effects.push({
      x: x,
      y: y,
      type: "damage",
      value: damage,
      life: 1.2,
      maxLife: 1.2,
      isPlayer: isPlayerTaking,
      isCrit: isCrit,
      vx: (Math.random() - 0.5) * 3,
    });
  }

  createFloatingText(x, y, text, color) {
    this.effects.push({
      x: x,
      y: y,
      type: "floatingText",
      text: text,
      color: color,
      life: 1.2,
      maxLife: 1.2,
      vx: (Math.random() - 0.5) * 2,
    });
  }

  createStaminaWarning(char) {
    this.createFloatingText(
      char.x + 30,
      char.y - 110,
      "⚠ SEM STAMINA",
      "#ff5555",
    );
  }

  // Novo: Tenta bloquear um ataque
  attemptBlock(char, attacker) {
    // Chance de bloquear baseada em stamina
    if (char.stamina < 15) return false; // Precisa de stamina para bloquear

    // Chance de bloqueio: 20-30% se tiver stamina
    if (Math.random() > 0.25) return false;

    // Bloqueio bem-sucedido
    char.stamina -= 15; // Custa stamina
    this.createFloatingText(
      char.x + 30,
      char.y - 80,
      "🛡 BLOQUEIO!",
      "#00aaff",
    );
    this.createSparkEffect(char.x + 30, char.y - 20, 10, "#00aaff");
    this.shakeScreen(2); // Pequeno shake

    return true;
  }

  shakeScreen(intensity) {
    this.shakeIntensity = Math.min(15, this.shakeIntensity + intensity);
  }

  updateEffects() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.2; // Gravidade nas partículas
      p.vx *= 0.98; // Fricção de ar
      p.life -= 0.012;

      if (p.life <= 0 || p.y > this.canvasHeight + 50) {
        this.particles.splice(i, 1);
      }
    }

    for (let i = this.effects.length - 1; i >= 0; i--) {
      const e = this.effects[i];
      e.life -= 0.015;

      if (e.type === "damage" || e.type === "floatingText") {
        e.y -= 1; // Movimento vertical
        if (e.vx !== undefined) e.x += e.vx; // Movimento horizontal opcional
      }

      if (e.life <= 0) {
        this.effects.splice(i, 1);
      }
    }

    if (this.player.invincibilityFrames > 0) this.player.invincibilityFrames--;
    if (this.bot.invincibilityFrames > 0) this.bot.invincibilityFrames--;
  }

  endBattle() {
    if (this.battleEnded) return;
    this.battleEnded = true;

    if (this.player.health <= 0) {
      this.createScreenMessage("DERROTA", "#ff2a6d");
      this.gallery.showToast("💀 VOCÊ PERDEU!");
      this.gallery.audio?.play("defeat");
    } else if (this.bot.health <= 0) {
      this.createScreenMessage("VITÓRIA", "#00ff9d");
      this.gallery.showToast("🏆 VOCÊ VENCEU!");
      this.gallery.audio?.play("victory");
    }

    this.battleEndTimer = setTimeout(() => {
      this.showSelectionScreen();
    }, 3000);
  }

  createScreenMessage(text, color) {
    this.effects.push({
      type: "message",
      text: text,
      color: color,
      life: 2.5,
      maxLife: 2.5,
    });
  }

  updateHealthBars() {
    if (!this.player || !this.bot) return;
    const playerPercent = (this.player.health / this.player.maxHealth) * 100;
    const botPercent = (this.bot.health / this.bot.maxHealth) * 100;
    if (this.elements.playerHealthFill) {
      this.elements.playerHealthFill.style.width =
        Math.max(0, playerPercent) + "%";
    }
    if (this.elements.botHealthFill) {
      this.elements.botHealthFill.style.width = Math.max(0, botPercent) + "%";
    }
  }

  draw() {
    if (!this.ctx) return;

    // Efeito de shake de tela
    let shakeX = 0,
      shakeY = 0;
    if (this.shakeIntensity > 0.1) {
      shakeX = (Math.random() * 2 - 1) * this.shakeIntensity;
      shakeY = (Math.random() * 2 - 1) * this.shakeIntensity;
    }

    this.ctx.save();
    this.ctx.translate(shakeX, shakeY);

    // Fundo com gradiente melhorado
    const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvasHeight);
    gradient.addColorStop(0, "#0a0a1a");
    gradient.addColorStop(0.5, "#1a1a3a");
    gradient.addColorStop(1, "#0f0f2a");
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    // Novo: Renderizar partículas de fundo (estrelas/ambiente)
    this.drawBackgroundParticles();

    // Novo: Grid de fundo dinâmico
    this.drawArenaGrid();

    // Novo: Brilho radial no centro
    this.drawArenaGlow();

    // Chão/Arena melhorado com mais detalhes
    this.ctx.fillStyle = "#2a2a4a";
    this.ctx.fillRect(0, this.groundY + 10, this.canvasWidth, 50);

    // Novo: Padrão no chão
    this.ctx.strokeStyle = "rgba(0, 255, 200, 0.1)";
    this.ctx.lineWidth = 1;
    for (let i = 0; i < this.canvasWidth; i += 40) {
      this.ctx.beginPath();
      this.ctx.moveTo(i, this.groundY + 10);
      this.ctx.lineTo(i, this.groundY + 50);
      this.ctx.stroke();
    }

    // Efeito de luz no chão (mais intenso)
    this.ctx.fillStyle = "#00ffea";
    this.ctx.shadowColor = "#00ffea";
    this.ctx.shadowBlur = 20;
    this.ctx.fillRect(0, this.groundY + 10, this.canvasWidth, 3);

    // Linha de sombra inferior
    this.ctx.fillStyle = "rgba(255, 42, 109, 0.3)";
    this.ctx.shadowBlur = 0;
    this.ctx.fillRect(0, this.groundY + 55, this.canvasWidth, 5);
    this.ctx.shadowBlur = 0;

    // Renderiza partículas
    for (const p of this.particles) {
      this.ctx.globalAlpha = p.life / p.maxLife;
      this.ctx.fillStyle = p.color;

      // Rotação opcional para partículas
      if (p.rotation) {
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rotation);
        p.rotation += 0.1;
      }

      this.ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);

      if (p.rotation) {
        this.ctx.restore();
      }
    }
    this.ctx.globalAlpha = 1;

    // Renderiza personagens
    this.drawCharacter(this.player, true);
    this.drawCharacter(this.bot, false);

    // Novo: Linhas de energia entre personagens
    if (this.player.health > 0 && this.bot.health > 0) {
      this.drawEnergyLines();
    }

    // Renderiza efeitos
    this.drawEffects();

    // Mensagem de fim de batalha
    const messageEffect = this.effects.find((e) => e.type === "message");
    if (messageEffect) {
      this.ctx.font = "bold 60px 'Orbitron', monospace";
      this.ctx.textAlign = "center";
      this.ctx.shadowColor = messageEffect.color;
      this.ctx.shadowBlur = 40;
      this.ctx.fillStyle = messageEffect.color;
      this.ctx.globalAlpha = messageEffect.life / messageEffect.maxLife;
      this.ctx.fillText(messageEffect.text, this.canvasWidth / 2, 150);
      this.ctx.globalAlpha = 1;
      this.ctx.shadowBlur = 0;
    }

    this.ctx.restore();
  }

  // Novo: Renderiza partículas de fundo (ambiente/estrelas)
  drawBackgroundParticles() {
    for (const particle of this.backgroundParticles) {
      // Atualizar posição
      particle.y += particle.speed;
      if (particle.y > this.canvasHeight) {
        particle.y = 0;
      }

      // Renderizar
      this.ctx.globalAlpha = particle.opacity;
      this.ctx.fillStyle = particle.color;
      this.ctx.shadowColor = particle.color;
      this.ctx.shadowBlur = 8;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fill();

      // Pulso de brilho
      const pulse = Math.sin(Date.now() * 0.005 + particle.x) * 0.5 + 0.5;
      this.ctx.globalAlpha = particle.opacity * pulse * 0.5;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2);
      this.ctx.fill();
    }
    this.ctx.globalAlpha = 1;
    this.ctx.shadowBlur = 0;
  }

  // Novo: Desenha grid de fundo da arena
  drawArenaGrid() {
    const gridSize = 40;
    const time = Date.now() * 0.001; // Animação baseada em tempo

    this.ctx.strokeStyle = `rgba(0, 255, 200, ${0.08 + Math.sin(time) * 0.02})`;
    this.ctx.lineWidth = 1;

    // Grid vertical
    for (let x = 0; x < this.canvasWidth; x += gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.canvasHeight);
      this.ctx.stroke();
    }

    // Grid horizontal
    for (let y = 0; y < this.canvasHeight; y += gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.canvasWidth, y);
      this.ctx.stroke();
    }
  }

  // Novo: Desenha brilho radiante na arena
  drawArenaGlow() {
    const centerX = this.canvasWidth / 2;
    const centerY = this.canvasHeight / 1.5;

    const radialGradient = this.ctx.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      400,
    );
    radialGradient.addColorStop(0, "rgba(0, 255, 200, 0.15)");
    radialGradient.addColorStop(0.5, "rgba(0, 255, 200, 0.05)");
    radialGradient.addColorStop(1, "rgba(0, 255, 200, 0)");

    this.ctx.fillStyle = radialGradient;
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, 400, 0, Math.PI * 2);
    this.ctx.fill();
  }

  // Novo: Desenha linhas de energia entre os personagens
  drawEnergyLines() {
    const distance = Math.abs(this.player.x - this.bot.x);

    // Só desenha se estão em combate próximos
    if (distance > 500) return;

    const p1X = this.player.x + 30;
    const p1Y = this.player.y - 40;
    const p2X = this.bot.x + 30;
    const p2Y = this.bot.y - 40;

    // Linha de energia principal
    this.ctx.strokeStyle = "rgba(0, 255, 200, 0.3)";
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([5, 5]);
    this.ctx.beginPath();
    this.ctx.moveTo(p1X, p1Y);
    this.ctx.lineTo(p2X, p2Y);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Pulsos de energia
    const time = Date.now() * 0.003;
    for (let i = 0; i < 3; i++) {
      const offset = (time + i * 0.3) % 1;
      const x = p1X + (p2X - p1X) * offset;
      const y = p1Y + (p2Y - p1Y) * offset;

      this.ctx.fillStyle = `rgba(0, 255, 200, ${0.6 - offset * 0.6})`;
      this.ctx.beginPath();
      this.ctx.arc(x, y, 4 - offset * 2, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  drawCharacter(char, isPlayer) {
    if (!char || !this.ctx) return;

    const x = char.x;
    const y = char.y - 80;
    const width = 60;
    const height = 80;

    const image = isPlayer ? this.playerImage : this.botImage;

    // Novo: Aura de brilho ao redor do personagem
    this.ctx.shadowColor = isPlayer
      ? "rgba(0, 255, 200, 0.4)"
      : "rgba(255, 42, 109, 0.4)";
    this.ctx.shadowBlur = 25;
    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 0;

    // Sombra
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    this.ctx.beginPath();
    this.ctx.ellipse(x + 30, this.groundY + 15, 35, 12, 0, 0, Math.PI * 2);
    this.ctx.fill();

    if (image && this.imagesLoaded) {
      this.ctx.save();

      // Glow quando atacando (mais intenso)
      if (char.attacking) {
        this.ctx.shadowColor = isPlayer ? "#00ffea" : "#ff5588";
        this.ctx.shadowBlur = 40;
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;
      }

      // Flip para direção
      if (char.direction === -1) {
        this.ctx.translate(x + width, y);
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(image, 0, 0, width, height);
      } else {
        this.ctx.drawImage(image, x, y, width, height);
      }

      this.ctx.restore();

      // Novo: Efeito de brilho no personagem ao atacar
      if (char.attacking) {
        this.ctx.save();
        this.ctx.globalAlpha = 0.2;
        this.ctx.fillStyle = isPlayer ? "#00ffea" : "#ff5588";
        this.ctx.fillRect(x, y, width, height);
        this.ctx.restore();
      }

      // Efeito de dano (piscar vermelho)
      if (char.invincibilityFrames > 0) {
        this.ctx.save();
        this.ctx.globalAlpha = 0.3 * (char.invincibilityFrames / 20);
        this.ctx.fillStyle = "#ff3366";
        this.ctx.fillRect(x, y, width, height);
        this.ctx.restore();
      }
    } else {
      // Placeholder se imagem não carregou
      this.ctx.fillStyle = isPlayer ? "#00ffea" : "#ff5588";
      this.ctx.fillRect(x, y, width, height);
      this.ctx.beginPath();
      this.ctx.arc(x + 30, y - 10, 15, 0, Math.PI * 2);
      this.ctx.fillStyle = isPlayer ? "#ffff00" : "#ffaa00";
      this.ctx.fill();
    }

    this.ctx.shadowBlur = 0;

    // Novo: Nome do personagem com glow melhorado
    this.ctx.font = "bold 14px 'Rajdhani', sans-serif";
    this.ctx.fillStyle = isPlayer ? "#00ffea" : "#ff5588";
    this.ctx.shadowColor = isPlayer ? "#00ffea" : "#ff5588";
    this.ctx.shadowBlur = 12;
    this.ctx.textAlign = "center";
    this.ctx.fillText(char.name, x + 30, y - 28);
    this.ctx.shadowBlur = 0;

    // Barra de vida
    const healthPercent = char.health / char.maxHealth;
    const healthBarWidth = 80;
    const healthBarX = x - 10;
    const healthBarY = y - 22;

    this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    this.ctx.fillRect(healthBarX, healthBarY, healthBarWidth, 7);
    this.ctx.fillStyle =
      healthPercent > 0.5
        ? "#00ff9d"
        : healthPercent > 0.25
          ? "#ffaa00"
          : "#ff3366";
    this.ctx.fillRect(
      healthBarX,
      healthBarY,
      healthBarWidth * healthPercent,
      7,
    );

    // Border da barra de vida
    this.ctx.strokeStyle = "#ffffff";
    this.ctx.lineWidth = 1;
    this.ctx.strokeRect(healthBarX, healthBarY, healthBarWidth, 7);

    // Mostrar vida numérica
    this.ctx.font = "bold 10px 'Rajdhani', sans-serif";
    this.ctx.fillStyle = "#ffffff";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      Math.round(char.health) + "/" + char.maxHealth,
      x + 30,
      y - 10,
    );

    // Barra de stamina/energia
    if (char.stamina !== undefined) {
      const staminaPercent = char.stamina / char.maxStamina;
      const staminaBarY = y - 4;

      this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      this.ctx.fillRect(healthBarX, staminaBarY, healthBarWidth, 4);
      this.ctx.fillStyle = "#00aaff";
      this.ctx.fillRect(
        healthBarX,
        staminaBarY,
        healthBarWidth * staminaPercent,
        4,
      );
    }

    // Cooldown do ataque
    if (char.cooldownTimer > 0) {
      const cooldownPercent = char.cooldownTimer / (char.attackCooldown || 250);
      this.ctx.fillStyle = "rgba(255, 100, 50, 0.6)";
      this.ctx.fillRect(x, y - 30, 60 * cooldownPercent, 3);
    }

    // Novo: Indicador de combo melhorado
    if (char.comboCount > 1) {
      this.ctx.font = "bold 16px 'Orbitron', monospace";
      this.ctx.fillStyle = "#ffdd00";
      this.ctx.shadowColor = "#ffdd00";
      this.ctx.shadowBlur = 12;
      this.ctx.textAlign = "center";

      // Efeito de brilho cascata
      const pulse = Math.sin(Date.now() * 0.01 * char.comboCount) * 0.3 + 0.7;
      this.ctx.globalAlpha = pulse;
      this.ctx.fillText("✦ x" + char.comboCount + " ✦", x + 30, y - 55);
      this.ctx.globalAlpha = 1;

      this.ctx.shadowBlur = 0;
    }
  }

  drawEffects() {
    for (const e of this.effects) {
      if (e.type === "attack") {
        this.ctx.globalAlpha = e.life / e.maxLife;
        this.ctx.strokeStyle = "#00ffff";
        this.ctx.lineWidth = 5;
        this.ctx.shadowColor = "#00ffff";
        this.ctx.shadowBlur = 15;
        this.ctx.beginPath();
        this.ctx.moveTo(e.x - 25, e.y - 25);
        this.ctx.lineTo(e.x + 25, e.y + 25);
        this.ctx.moveTo(e.x + 25, e.y - 25);
        this.ctx.lineTo(e.x - 25, e.y + 25);
        this.ctx.stroke();
        this.ctx.shadowBlur = 0;
      } else if (e.type === "hit") {
        this.ctx.globalAlpha = (e.life / e.maxLife) * 0.6;
        const pulse = 1 - e.life / e.maxLife;
        const color = e.isPlayer ? "#00ffff" : "#ff0088";
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 4;
        this.ctx.shadowColor = color;
        this.ctx.shadowBlur = 20;
        this.ctx.beginPath();
        this.ctx.arc(e.x, e.y, e.size * pulse, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.shadowBlur = 0;
      } else if (e.type === "damage") {
        this.ctx.globalAlpha = e.life / e.maxLife;
        const scale = 1 + (1 - e.life / e.maxLife) * 0.5;
        this.ctx.font = `bold ${Math.floor(20 * scale + (1 - e.life) * 15)}px 'Orbitron', monospace`;
        this.ctx.textAlign = "center";

        if (e.isCrit) {
          this.ctx.fillStyle = "#ff00ff";
          this.ctx.shadowColor = "#ff00ff";
          this.ctx.shadowBlur = 20;
          this.ctx.fillText("⚡ -" + e.value, e.x, e.y);
        } else {
          this.ctx.fillStyle = e.isPlayer ? "#ff2a6d" : "#ffaa00";
          this.ctx.shadowColor = e.isPlayer ? "#ff2a6d" : "#ffaa00";
          this.ctx.shadowBlur = 12;
          this.ctx.fillText("-" + e.value, e.x, e.y);
        }
      } else if (e.type === "floatingText") {
        this.ctx.globalAlpha = e.life / e.maxLife;
        this.ctx.font = "bold 20px 'Orbitron', monospace";
        this.ctx.fillStyle = e.color;
        this.ctx.shadowColor = e.color;
        this.ctx.shadowBlur = 15;
        this.ctx.textAlign = "center";
        this.ctx.fillText(e.text, e.x, e.y);
      } else if (e.type === "electric") {
        // Novo: Renderizar arco elétrico
        this.ctx.globalAlpha = e.life / e.maxLife;
        const radius = e.size + (1 - e.life / e.maxLife) * 3;
        this.ctx.fillStyle = "#00ffff";
        this.ctx.shadowColor = "#00ffff";
        this.ctx.shadowBlur = 20;
        this.ctx.beginPath();
        this.ctx.arc(e.x, e.y, radius, 0, Math.PI * 2);
        this.ctx.fill();

        // Segundo arco brilhante
        this.ctx.globalAlpha = (e.life / e.maxLife) * 0.4;
        this.ctx.fillStyle = "#88ffff";
        this.ctx.beginPath();
        this.ctx.arc(e.x, e.y, radius * 0.7, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (e.type === "shockwave") {
        // Novo: Renderizar onda de choque
        this.ctx.globalAlpha = (e.life / e.maxLife) * 0.7;
        const expandedRadius = e.size + (1 - e.life / e.maxLife) * 50;
        this.ctx.strokeStyle = `rgba(255, 200, 0, ${0.6 * (e.life / e.maxLife)})`;
        this.ctx.lineWidth = 3;
        this.ctx.shadowColor = "rgba(255, 200, 0, 0.8)";
        this.ctx.shadowBlur = 15;
        this.ctx.beginPath();
        this.ctx.arc(e.x, e.y, expandedRadius, 0, Math.PI * 2);
        this.ctx.stroke();
      } else if (e.type === "heal") {
        // Novo: Renderizar efeito de cura
        this.ctx.globalAlpha = e.life / e.maxLife;
        const radius = e.size * (1 - e.life / e.maxLife);
        this.ctx.fillStyle = `rgba(100, 255, 150, ${0.3 * (e.life / e.maxLife)})`;
        this.ctx.shadowColor = "#64ff96";
        this.ctx.shadowBlur = 20;
        this.ctx.beginPath();
        this.ctx.arc(e.x, e.y, radius, 0, Math.PI * 2);
        this.ctx.fill();

        // Anel externo de cura
        this.ctx.globalAlpha = (e.life / e.maxLife) * 0.6;
        this.ctx.strokeStyle = "#64ff96";
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(e.x, e.y, radius * 1.4, 0, Math.PI * 2);
        this.ctx.stroke();
      }
    }

    // Renderizar particles com suporte a sparkles
    for (const p of this.particles) {
      if (p.isSparkle) {
        // Novo: Renderizar sparkles
        this.ctx.globalAlpha = p.life / p.maxLife;
        this.ctx.fillStyle = p.color;
        this.ctx.shadowColor = p.color;
        this.ctx.shadowBlur = 10;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();

        // Leve brilho extra
        this.ctx.globalAlpha = (p.life / p.maxLife) * 0.5;
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        // Renderização padrão de partículas
        this.ctx.globalAlpha = Math.max(0, (p.life / p.maxLife) * 0.8);
        this.ctx.fillStyle = p.color;
        this.ctx.shadowColor = p.color;
        this.ctx.shadowBlur = 8;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }

    this.ctx.globalAlpha = 1;
    this.ctx.shadowBlur = 0;
  }
}

// ============================================
// CLASSE BATTLE CHARACTER - VERSÃO MELHORADA
// ============================================
class BattleCharacter {
  constructor(charData, x, groundY, width, maxHealth, isPlayer) {
    this.data = charData;
    this.name = charData.name || "Personagem";
    this.x = x;
    this.y = groundY;
    this.width = width;
    this.height = 80;
    this.vy = 0;
    this.vx = 0;
    this.accel = 0.8;
    this.friction = 0.82;
    this.isJumping = false;
    this.jumpTimer = 0;
    this.health = maxHealth;
    this.maxHealth = maxHealth;
    this.attacking = false;
    this.attackPressed = false;
    this.lastAttack = 0;
    this.cooldownTimer = 0;
    this.isPlayer = isPlayer;
    this.direction = 1;
    this.invincibilityFrames = 0;

    // Atributos base
    this.speed = 4;
    this.jumpForce = -8.5;
    this.jumpHeight = 8.5;
    this.attackDamage = 10;
    this.attackRange = 90;
    this.attackCooldown = 250;
    this.defense = 0;
    this.critChance = 0.1;
    this.critMultiplier = 1.8;

    // Sistema de stamina (NOVO!)
    this.maxStamina = 100;
    this.stamina = 100;
    this.staminaRegen = 0.8;
    this.staminaCost = 20;

    // Sistema de combo (NOVO!)
    this.comboCount = 0;
    this.lastComboTime = 0;
    this.comboTimeout = 800;
    this.comboMultiplier = 1;
  }
}
