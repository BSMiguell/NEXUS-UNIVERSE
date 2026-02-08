class QuantumBattleSystem {
  constructor(gallery) {
    this.gallery = gallery;
    this.selectedCharacters = {
      player1: null,
      player2: null,
    };
    this.battleLog = [];
    this.history = [];
    this.animationActive = false;
    this.init();
  }

  init() {
    this.cacheElements();
    this.setupEventListeners();
    this.loadHistory();
  }

  cacheElements() {
    this.elements = {
      battlePage: document.getElementById("quantumBattlePage"),
      player1Selection: document.getElementById("player1Selection"),
      player2Selection: document.getElementById("player2Selection"),
      player1Display: document.getElementById("player1Display"),
      player2Display: document.getElementById("player2Display"),
      startBattleBtn: document.getElementById("startBattleBtn"),
      resetBattleBtn: document.getElementById("resetBattleBtn"),
      battleResults: document.getElementById("battleResults"),
      resultsContent: document.getElementById("resultsContent"),
      battleLog: document.getElementById("battleLog"),
      characterSelectorModal: document.getElementById("characterSelectorModal"),
      characterSelectorGrid: document.getElementById("characterSelectorGrid"),
      selectorTitle: document.getElementById("selectorTitle"),
      selectorClose: document.getElementById("selectorClose"),
      backToGalleryFromBattle: document.getElementById(
        "backToGalleryFromBattle",
      ),
      viewBattleBtn: document.getElementById("viewBattleBtn"),
      battleToggle: document.getElementById("battleToggle"),
      battleAnimationContainer: document.getElementById(
        "battleAnimationContainer",
      ),
      skipAnimationBtn: document.getElementById("skipAnimationBtn"),
      animationChar1: document.getElementById("animationChar1"),
      animationChar2: document.getElementById("animationChar2"),
      animationImg1: document.getElementById("animationImg1"),
      animationImg2: document.getElementById("animationImg2"),
      hpBar1: document.getElementById("hpBar1"),
      hpBar2: document.getElementById("hpBar2"),
      hpText1: document.getElementById("hpText1"),
      hpText2: document.getElementById("hpText2"),
      animationText: document.getElementById("animationText"),
      animationEffects: document.getElementById("animationEffects"),
      animationProgressBar: document.getElementById("animationProgressBar"),
      battleResultModal: document.getElementById("battleResultModal"),
      resultModalTitle: document.getElementById("resultModalTitle"),
      resultModalWinner: document.getElementById("resultModalWinner"),
      resultModalStats: document.getElementById("resultModalStats"),
      resultModalClose: document.getElementById("resultModalClose"),
      resultModalRematch: document.getElementById("resultModalRematch"),
      battleHistoryList: document.getElementById("battleHistoryList"),
      clearHistoryBtn: document.getElementById("clearHistoryBtn"),
      emptyHistory: document.getElementById("emptyHistory"),
      historyDetailModal: document.getElementById("historyDetailModal"),
      historyDetailClose: document.getElementById("historyDetailClose"),
      historyDetailBody: document.getElementById("historyDetailBody"),
    };
  }

  setupEventListeners() {
    // Botões de seleção de personagens
    document.querySelectorAll(".character-select-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const player = parseInt(e.currentTarget.dataset.player);
        this.openCharacterSelector(player);
        this.gallery.audio.play("click");
      });
    });

    // Botão iniciar batalha
    if (this.elements.startBattleBtn) {
      this.elements.startBattleBtn.addEventListener("click", () => {
        this.startBattle();
        this.gallery.audio.play("click");
      });
    }

    // Botão resetar batalha
    if (this.elements.resetBattleBtn) {
      this.elements.resetBattleBtn.addEventListener("click", () => {
        this.resetBattle();
        this.gallery.audio.play("click");
      });
    }

    // Botão fechar seletor
    if (this.elements.selectorClose) {
      this.elements.selectorClose.addEventListener("click", () => {
        this.closeCharacterSelector();
        this.gallery.audio.play("click");
      });
    }

    // Botão voltar à galeria
    if (this.elements.backToGalleryFromBattle) {
      this.elements.backToGalleryFromBattle.addEventListener("click", () => {
        this.gallery.showGalleryPage();
        this.gallery.audio.play("click");
      });
    }

    // Botão acessar batalha
    if (this.elements.viewBattleBtn) {
      this.elements.viewBattleBtn.addEventListener("click", () => {
        this.showBattlePage();
        this.gallery.audio.play("click");
      });
    }

    // Botão toggle batalha
    if (this.elements.battleToggle) {
      this.elements.battleToggle.addEventListener("click", () => {
        this.showBattlePage();
        this.gallery.audio.play("click");
      });
    }

    // Botão pular animação
    if (this.elements.skipAnimationBtn) {
      this.elements.skipAnimationBtn.addEventListener("click", () => {
        this.skipAnimation();
        this.gallery.audio.play("click");
      });
    }

    // Botão fechar modal de resultados
    if (this.elements.resultModalClose) {
      this.elements.resultModalClose.addEventListener("click", () => {
        this.closeResultModal();
        this.gallery.audio.play("click");
      });
    }

    // Botão revanche
    if (this.elements.resultModalRematch) {
      this.elements.resultModalRematch.addEventListener("click", () => {
        this.rematch();
        this.gallery.audio.play("click");
      });
    }

    // Botão limpar histórico
    if (this.elements.clearHistoryBtn) {
      this.elements.clearHistoryBtn.addEventListener("click", () => {
        this.clearHistory();
        this.gallery.audio.play("click");
      });
    }

    // Botão fechar modal de detalhes
    if (this.elements.historyDetailClose) {
      this.elements.historyDetailClose.addEventListener("click", () => {
        this.closeHistoryDetail();
        this.gallery.audio.play("click");
      });
    }

    // Fechar modais ao clicar fora
    if (this.elements.characterSelectorModal) {
      this.elements.characterSelectorModal.addEventListener("click", (e) => {
        if (e.target === this.elements.characterSelectorModal) {
          this.closeCharacterSelector();
        }
      });
    }

    if (this.elements.battleResultModal) {
      this.elements.battleResultModal.addEventListener("click", (e) => {
        if (e.target === this.elements.battleResultModal) {
          this.closeResultModal();
        }
      });
    }

    if (this.elements.historyDetailModal) {
      this.elements.historyDetailModal.addEventListener("click", (e) => {
        if (e.target === this.elements.historyDetailModal) {
          this.closeHistoryDetail();
        }
      });
    }
  }

  openCharacterSelector(player) {
    this.currentPlayer = player;
    this.elements.selectorTitle.textContent = `SELECIONE PERSONAGEM ${player}`;

    this.renderCharacterSelector();
    this.elements.characterSelectorModal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  closeCharacterSelector() {
    this.elements.characterSelectorModal.classList.remove("show");
    document.body.style.overflow = "";
  }

  renderCharacterSelector() {
    const grid = this.elements.characterSelectorGrid;
    if (!grid) return;

    grid.innerHTML = "";

    charactersData.forEach((character) => {
      const normalizedPath = this.gallery.cache.normalizePath(character.image);
      const cachedImg = this.gallery.cache.imageCache.get(normalizedPath);
      const imgSrc = cachedImg ? cachedImg.src : character.image;
      const isSelected =
        (this.currentPlayer === 1 &&
          this.selectedCharacters.player1?.id === character.id) ||
        (this.currentPlayer === 2 &&
          this.selectedCharacters.player2?.id === character.id);

      // Calcular saúde baseada nas estatísticas
      const health = this.calculateHealth(character.stats);

      const characterEl = document.createElement("div");
      characterEl.className = `selector-character ${isSelected ? "selected" : ""}`;
      characterEl.dataset.id = character.id;
      characterEl.innerHTML = `
              <img src="${imgSrc}" 
                   alt="${character.name}" 
                   class="selector-character-image"
                   onerror="this.onerror=null; this.src='${this.gallery.generatePlaceholderSVG(character, true)}';">
              <h4 class="selector-character-name">${character.name}</h4>
              <div class="selector-character-category">
                ${categoryNames[character.category] || character.category}
              </div>
              <div class="character-health-container" style="margin-top: 10px;">
                <div class="health-bar" style="width: ${health}%"></div>
                <div class="health-text">${Math.round(health)}% SAÚDE</div>
              </div>
              <div class="selector-character-stats" style="margin-top: 10px;">
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
              </div>
            `;

      characterEl.addEventListener("click", () => {
        this.selectCharacter(character);
        this.closeCharacterSelector();
        this.gallery.audio.play("click");
      });

      grid.appendChild(characterEl);
    });
  }

  calculateHealth(stats) {
    // Fórmula melhorada para calcular saúde
    const baseHealth = 50;
    const strengthBonus = stats.forca * 2;
    const defenseBonus = stats.defesa * 1.5;
    const speedBonus = stats.velocidade * 0.5;
    const energyBonus = stats.energia * 1;
    const skillBonus = stats.habilidade * 0.8;

    const totalHealth =
      baseHealth +
      strengthBonus +
      defenseBonus +
      speedBonus +
      energyBonus +
      skillBonus;

    // Normalizar para máximo 100%
    return Math.min(100, Math.max(20, totalHealth));
  }

  selectCharacter(character) {
    if (this.currentPlayer === 1) {
      this.selectedCharacters.player1 = character;
      this.renderCharacterDisplay(character, 1);
    } else {
      this.selectedCharacters.player2 = character;
      this.renderCharacterDisplay(character, 2);
    }

    // Habilitar botão de iniciar batalha se ambos estiverem selecionados
    if (this.selectedCharacters.player1 && this.selectedCharacters.player2) {
      this.elements.startBattleBtn.disabled = false;
      this.elements.startBattleBtn.innerHTML = `
              <i class="fas fa-play"></i>
              INICIAR BATALHA QUÂNTICA
            `;
    }
  }

  renderCharacterDisplay(character, player) {
    const display =
      player === 1
        ? this.elements.player1Display
        : this.elements.player2Display;
    if (!display) return;

    const normalizedPath = this.gallery.cache.normalizePath(character.image);
    const cachedImg = this.gallery.cache.imageCache.get(normalizedPath);
    const imgSrc = cachedImg ? cachedImg.src : character.image;

    // Calcular saúde
    const health = this.calculateHealth(character.stats);

    display.innerHTML = `
            <img src="${imgSrc}" 
                 alt="${character.name}" 
                 class="selected-character-image"
                 onerror="this.onerror=null; this.src='${this.gallery.generatePlaceholderSVG(character, true)}';">
            <h3 class="selected-character-name">${character.name}</h3>
            <div class="selected-character-category">
              ${categoryNames[character.category] || character.category}
            </div>
            
            <!-- Barra de Saúde -->
            <div class="character-health-container">
              <div class="health-bar player-${player}" style="width: ${health}%"></div>
              <div class="health-text">SAÚDE: ${Math.round(health)}%</div>
              <div class="health-stats">
                <div class="health-stat">
                  <i class="fas fa-heart"></i>
                  <span>${Math.round(health)}%</span>
                </div>
                <div class="health-stat">
                  <i class="fas fa-fist-raised"></i>
                  <span>${character.stats.forca}</span>
                </div>
                <div class="health-stat">
                  <i class="fas fa-shield-alt"></i>
                  <span>${character.stats.defesa}</span>
                </div>
              </div>
            </div>
            
            <div class="selected-character-stats" style="margin-top: 15px;">
              <div class="stat-badge stat-strong">
                <i class="fas fa-fist-raised"></i>
                <span>${character.stats.forca}</span>
              </div>
              <div class="stat-badge stat-ray">
                <i class="fas fa-bolt"></i>
                <span>${character.stats.velocidade}</span>
              </div>
              <div class="stat-badge stat-shield">
                <i class="fas fa-shield-alt"></i>
                <span>${character.stats.defesa}</span>
              </div>
              <div class="stat-badge stat-fire">
                <i class="fas fa-fire"></i>
                <span>${character.stats.energia}</span>
              </div>
              <div class="stat-badge stat-brain">
                <i class="fas fa-brain"></i>
                <span>${character.stats.habilidade}</span>
              </div>
            </div>
          `;
  }

  async startBattle() {
    if (!this.selectedCharacters.player1 || !this.selectedCharacters.player2) {
      this.gallery.showToast("❌ SELECIONE AMBOS OS PERSONAGENS!");
      return;
    }

    if (
      this.selectedCharacters.player1.id === this.selectedCharacters.player2.id
    ) {
      this.gallery.showToast("❌ SELECIONE PERSONAGENS DIFERENTES!");
      return;
    }

    // Desativar botão durante animação
    this.elements.startBattleBtn.disabled = true;
    this.elements.startBattleBtn.innerHTML = `
            <i class="fas fa-spinner fa-spin"></i>
            BATALHA EM ANDAMENTO...
          `;

    this.animationActive = true;

    // Iniciar animação
    await this.startBattleAnimation();

    // Calcular estatísticas dos personagens baseado nos atributos
    const stats1 = this.calculateCharacterStats(
      this.selectedCharacters.player1,
    );
    const stats2 = this.calculateCharacterStats(
      this.selectedCharacters.player2,
    );

    // Simular batalha
    const result = this.simulateBattle(stats1, stats2);

    // Salvar no histórico
    this.saveToHistory(result);

    // Mostrar resultados no modal
    this.showResultModal(result, stats1, stats2);

    // Reativar botão
    this.elements.startBattleBtn.disabled = false;
    this.elements.startBattleBtn.innerHTML = `
            <i class="fas fa-play"></i>
            INICIAR BATALHA QUÂNTICA
          `;
    this.animationActive = false;

    // Tocar som de vitória
    this.gallery.audio.play("favorite");
  }

  async startBattleAnimation() {
    return new Promise((resolve) => {
      // Preparar animação
      const char1 = this.selectedCharacters.player1;
      const char2 = this.selectedCharacters.player2;

      // Carregar imagens na animação
      const img1Src = this.gallery.cache.imageCache.has(
        this.gallery.cache.normalizePath(char1.image),
      )
        ? this.gallery.cache.imageCache.get(
            this.gallery.cache.normalizePath(char1.image),
          ).src
        : char1.image;

      const img2Src = this.gallery.cache.imageCache.has(
        this.gallery.cache.normalizePath(char2.image),
      )
        ? this.gallery.cache.imageCache.get(
            this.gallery.cache.normalizePath(char2.image),
          ).src
        : char2.image;

      this.elements.animationImg1.src = img1Src;
      this.elements.animationImg2.src = img2Src;

      // Resetar barras de HP
      this.elements.hpBar1.style.width = "100%";
      this.elements.hpBar2.style.width = "100%";
      this.elements.hpText1.textContent = "100%";
      this.elements.hpText2.textContent = "100%";

      // Mostrar container de animação
      this.elements.battleAnimationContainer.classList.add("active");
      document.body.style.overflow = "hidden";

      let progress = 0;
      const totalSteps = 12;
      let currentStep = 0;

      const animateStep = () => {
        if (!this.animationActive) {
          this.endAnimation();
          resolve();
          return;
        }

        currentStep++;
        progress = (currentStep / totalSteps) * 100;
        this.elements.animationProgressBar.style.width = `${progress}%`;

        // Atualizar texto da animação
        const texts = [
          "PREPARANDO BATALHA...",
          "CARREGANDO ENERGIA...",
          "CALCULANDO PODER...",
          "ANALISANDO HABILIDADES...",
          "INICIANDO COMBATE...",
          "ATAQUES CRÍTICOS!",
          "ESQUIVAS EPICAS!",
          "GOLPES DEFINITIVOS!",
          "PODER MÁXIMO!",
          "CONSULTANDO O QUÂNTUM...",
          "ULTIMATO...",
          "FINALIZANDO BATALHA...",
        ];

        if (currentStep <= totalSteps) {
          this.elements.animationText.textContent = texts[currentStep - 1];

          // Criar efeitos visuais baseados no passo
          if (currentStep >= 5 && currentStep <= 11) {
            this.createEnhancedAnimationEffect(currentStep);
          }

          // Simular dano nas barras de HP
          if (currentStep >= 6 && currentStep <= 10) {
            const damage1 = Math.random() * 12;
            const damage2 = Math.random() * 12;

            const currentHP1 = parseFloat(this.elements.hpBar1.style.width);
            const currentHP2 = parseFloat(this.elements.hpBar2.style.width);

            const newHP1 = Math.max(0, currentHP1 - damage1);
            const newHP2 = Math.max(0, currentHP2 - damage2);

            this.elements.hpBar1.style.width = `${newHP1}%`;
            this.elements.hpBar2.style.width = `${newHP2}%`;
            this.elements.hpText1.textContent = `${Math.round(newHP1)}%`;
            this.elements.hpText2.textContent = `${Math.round(newHP2)}%`;

            // Efeito visual de dano
            if (damage1 > 8 || damage2 > 8) {
              this.createCriticalEffect();
            }
          }

          setTimeout(animateStep, 500);
        } else {
          this.endAnimation();
          resolve();
        }
      };

      // Iniciar animação
      setTimeout(animateStep, 800);
    });
  }

  createEnhancedAnimationEffect(step) {
    const effectsContainer = this.elements.animationEffects;

    // Tipos de ataque diferentes
    const attackTypes = ["fire", "lightning", "quantum"];
    const attackType = attackTypes[step % 3];

    // Criar múltiplos efeitos de ataque
    for (let i = 0; i < 3; i++) {
      const attackEffect = document.createElement("div");
      attackEffect.className = `attack-effect ${attackType}`;
      attackEffect.style.top = `${Math.random() * 70 + 15}%`;
      attackEffect.style.left =
        step % 2 === 0 ? `${10 + i * 20}%` : `${70 - i * 20}%`;
      attackEffect.style.animationDelay = `${i * 0.2}s`;
      attackEffect.style.animationDuration = `${0.8 + Math.random() * 0.4}s`;

      // Criar efeito de dano
      const damageEffect = document.createElement("div");
      damageEffect.className = "damage-effect";
      damageEffect.style.top = `${Math.random() * 60 + 20}%`;
      damageEffect.style.left = step % 2 === 0 ? "70%" : "10%";
      damageEffect.style.animationDelay = `${0.4 + i * 0.1}s`;

      effectsContainer.appendChild(attackEffect);
      effectsContainer.appendChild(damageEffect);

      // Remover efeitos após animação
      setTimeout(() => {
        if (attackEffect.parentNode) {
          attackEffect.remove();
        }
        if (damageEffect.parentNode) {
          damageEffect.remove();
        }
      }, 2000);
    }

    // Efeito de esquiva ocasional
    if (Math.random() > 0.7) {
      const dodgeEffect = document.createElement("div");
      dodgeEffect.className = "dodge-effect";
      dodgeEffect.style.top = `${Math.random() * 60 + 20}%`;
      dodgeEffect.style.left = step % 2 === 0 ? "30%" : "60%";

      effectsContainer.appendChild(dodgeEffect);
      setTimeout(() => {
        if (dodgeEffect.parentNode) {
          dodgeEffect.remove();
        }
      }, 1000);
    }
  }

  createCriticalEffect() {
    const effectsContainer = this.elements.animationEffects;

    // Flash vermelho para efeito crítico
    const flash = document.createElement("div");
    flash.style.position = "absolute";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.background = "rgba(255, 42, 109, 0.3)";
    flash.style.animation = "criticalFlash 0.3s ease-out";

    effectsContainer.appendChild(flash);
    setTimeout(() => {
      if (flash.parentNode) {
        flash.remove();
      }
    }, 300);
  }

  endAnimation() {
    this.elements.battleAnimationContainer.classList.remove("active");
    document.body.style.overflow = "";
    this.elements.animationEffects.innerHTML = "";
  }

  skipAnimation() {
    this.animationActive = false;
    this.endAnimation();
  }

  calculateCharacterStats(character) {
    const stats = character.stats;

    // Calcular atributos baseados nos status
    const health = Math.floor(
      stats.forca * 20 + stats.defesa * 15 + stats.energia * 8,
    );

    const attack = Math.floor(
      stats.forca * 4 + stats.velocidade * 2.5 + stats.habilidade * 2.5,
    );

    const defense = Math.floor(
      stats.defesa * 4 + stats.forca * 2 + stats.habilidade * 1.5,
    );

    const speed = Math.floor(stats.velocidade * 4 + stats.habilidade * 2.5);

    const criticalChance =
      Math.floor((stats.velocidade * 0.5 + stats.habilidade * 0.3) * 10) / 10;

    const dodgeChance =
      Math.floor((stats.velocidade * 0.8 + stats.habilidade * 0.4) * 10) / 10;

    // Calcular poder total
    const totalPower = Math.floor(
      health * 0.25 +
        attack * 0.25 +
        defense * 0.2 +
        speed * 0.15 +
        (criticalChance + dodgeChance) * 0.15,
    );

    return {
      character,
      health,
      attack,
      defense,
      speed,
      criticalChance,
      dodgeChance,
      totalPower,
      currentHealth: health,
      baseStats: stats,
    };
  }

  simulateBattle(stats1, stats2) {
    this.battleLog = [];
    this.elements.battleLog.innerHTML =
      "<h4 class='log-title'>REGISTRO DA BATALHA</h4>";

    this.addToLog(
      `🏁 BATALHA INICIADA: ${stats1.character.name} vs ${stats2.character.name}`,
      "start",
    );

    let round = 1;
    const maxRounds = 10;
    let criticalHits1 = 0;
    let criticalHits2 = 0;
    let dodges1 = 0;
    let dodges2 = 0;
    let totalDamage1 = 0;
    let totalDamage2 = 0;

    // Sistema de vantagem baseada em atributos
    const advantage1 = this.calculateAdvantage(stats1, stats2);
    const advantage2 = this.calculateAdvantage(stats2, stats1);

    if (advantage1 > advantage2) {
      this.addToLog(`⭐ ${stats1.character.name} tem vantagem tática!`, "info");
      stats1.attack *= 1.1;
      stats1.criticalChance += 5;
    } else if (advantage2 > advantage1) {
      this.addToLog(`⭐ ${stats2.character.name} tem vantagem tática!`, "info");
      stats2.attack *= 1.1;
      stats2.criticalChance += 5;
    }

    while (
      round <= maxRounds &&
      stats1.currentHealth > 0 &&
      stats2.currentHealth > 0
    ) {
      this.addToLog(`\n🔴 ROUND ${round}:`, "round");

      // Personagem 1 ataca
      const attackResult1 = this.calculateEnhancedAttack(stats1, stats2, round);
      stats2.currentHealth -= attackResult1.damage;
      totalDamage2 += attackResult1.damage;

      if (attackResult1.critical) criticalHits1++;
      if (attackResult1.dodged) dodges2++;

      this.addToLog(
        `🎯 ${stats1.character.name} ataca! ${attackResult1.message} ${stats2.character.name}: ${Math.max(0, Math.round(stats2.currentHealth))}/${stats2.health} HP`,
        attackResult1.critical ? "critical" : "damage",
      );

      if (stats2.currentHealth <= 0) {
        this.addToLog(`💀 ${stats2.character.name} foi derrotado!`, "winner");
        this.addToLog(
          `🏆 ${stats1.character.name} VENCEU APÓS ${round} ROUNDS!`,
          "winner",
        );
        return {
          winner: stats1,
          loser: stats2,
          rounds: round,
          criticalHits: {
            player1: criticalHits1,
            player2: criticalHits2,
          },
          dodges: { player1: dodges1, player2: dodges2 },
          totalDamage: { player1: totalDamage1, player2: totalDamage2 },
          winnerName: stats1.character.name,
          loserName: stats2.character.name,
          type: "win",
          timestamp: new Date().toISOString(),
          battleLog: [...this.battleLog],
        };
      }

      // Personagem 2 ataca
      const attackResult2 = this.calculateEnhancedAttack(stats2, stats1, round);
      stats1.currentHealth -= attackResult2.damage;
      totalDamage1 += attackResult2.damage;

      if (attackResult2.critical) criticalHits2++;
      if (attackResult2.dodged) dodges1++;

      this.addToLog(
        `🎯 ${stats2.character.name} contra-ataca! ${attackResult2.message} ${stats1.character.name}: ${Math.max(0, Math.round(stats1.currentHealth))}/${stats1.health} HP`,
        attackResult2.critical ? "critical" : "damage",
      );

      if (stats1.currentHealth <= 0) {
        this.addToLog(`💀 ${stats1.character.name} foi derrotado!`, "winner");
        this.addToLog(
          `🏆 ${stats2.character.name} VENCEU APÓS ${round} ROUNDS!`,
          "winner",
        );
        return {
          winner: stats2,
          loser: stats1,
          rounds: round,
          criticalHits: {
            player1: criticalHits1,
            player2: criticalHits2,
          },
          dodges: { player1: dodges1, player2: dodges2 },
          totalDamage: { player1: totalDamage1, player2: totalDamage2 },
          winnerName: stats2.character.name,
          loserName: stats1.character.name,
          type: "win",
          timestamp: new Date().toISOString(),
          battleLog: [...this.battleLog],
        };
      }

      round++;
    }

    // Decidir vencedor por pontos se a saúde de ambos > 0
    if (stats1.currentHealth > 0 && stats2.currentHealth > 0) {
      const score1 =
        (stats1.currentHealth / stats1.health) * 100 +
        criticalHits1 * 8 +
        dodges1 * 5 -
        totalDamage2 * 0.1;

      const score2 =
        (stats2.currentHealth / stats2.health) * 100 +
        criticalHits2 * 8 +
        dodges2 * 5 -
        totalDamage1 * 0.1;

      this.addToLog("\n⏰ TEMPO ESGOTADO! Decisão por pontos:", "info");
      this.addToLog(
        `${stats1.character.name}: ${score1.toFixed(1)} pontos`,
        "info",
      );
      this.addToLog(
        `${stats2.character.name}: ${score2.toFixed(1)} pontos`,
        "info",
      );

      if (Math.abs(score1 - score2) < 10) {
        // Empate técnico
        this.addToLog(
          "🤝 EMPATE TÉCNICO! Ambos são igualmente poderosos!",
          "info",
        );
        return {
          winner: null,
          loser: null,
          rounds: maxRounds,
          draw: true,
          criticalHits: {
            player1: criticalHits1,
            player2: criticalHits2,
          },
          dodges: { player1: dodges1, player2: dodges2 },
          totalDamage: { player1: totalDamage1, player2: totalDamage2 },
          winnerName: null,
          loserName: null,
          type: "draw",
          timestamp: new Date().toISOString(),
          battleLog: [...this.battleLog],
        };
      } else if (score1 > score2) {
        this.addToLog(
          `🏆 ${stats1.character.name} vence por pontos!`,
          "winner",
        );
        return {
          winner: stats1,
          loser: stats2,
          rounds: maxRounds,
          winByPoints: true,
          criticalHits: {
            player1: criticalHits1,
            player2: criticalHits2,
          },
          dodges: { player1: dodges1, player2: dodges2 },
          totalDamage: { player1: totalDamage1, player2: totalDamage2 },
          winnerName: stats1.character.name,
          loserName: stats2.character.name,
          type: "win",
          timestamp: new Date().toISOString(),
          battleLog: [...this.battleLog],
        };
      } else {
        this.addToLog(
          `🏆 ${stats2.character.name} vence por pontos!`,
          "winner",
        );
        return {
          winner: stats2,
          loser: stats1,
          rounds: maxRounds,
          winByPoints: true,
          criticalHits: {
            player1: criticalHits1,
            player2: criticalHits2,
          },
          dodges: { player1: dodges1, player2: dodges2 },
          totalDamage: { player1: totalDamage1, player2: totalDamage2 },
          winnerName: stats2.character.name,
          loserName: stats1.character.name,
          type: "win",
          timestamp: new Date().toISOString(),
          battleLog: [...this.battleLog],
        };
      }
    }

    const finalResult = {
      winner: stats1.currentHealth > 0 ? stats1 : stats2,
      loser: stats1.currentHealth > 0 ? stats2 : stats1,
      rounds: round - 1,
      criticalHits: { player1: criticalHits1, player2: criticalHits2 },
      dodges: { player1: dodges1, player2: dodges2 },
      totalDamage: { player1: totalDamage1, player2: totalDamage2 },
      winnerName:
        stats1.currentHealth > 0
          ? stats1.character.name
          : stats2.character.name,
      loserName:
        stats1.currentHealth > 0
          ? stats2.character.name
          : stats1.character.name,
      type: "win",
      timestamp: new Date().toISOString(),
      battleLog: [...this.battleLog],
    };

    this.addToLog(
      `🏆 ${finalResult.winnerName} VENCEU APÓS ${finalResult.rounds} ROUNDS!`,
      "winner",
    );

    return finalResult;
  }

  calculateAdvantage(attacker, defender) {
    let advantage = 0;

    // Vantagem baseada em atributos
    if (attacker.speed > defender.speed * 1.5) advantage += 20;
    if (attacker.attack > defender.defense * 2) advantage += 15;
    if (attacker.criticalChance > defender.dodgeChance) advantage += 10;

    // Vantagem baseada em tipo (simples)
    const types = {
      forca: ["defesa"],
      velocidade: ["forca"],
      defesa: ["velocidade"],
    };

    // Verificar vantagem de tipo baseado nos atributos mais altos
    const attackerBest = this.getBestAttribute(attacker.baseStats);
    const defenderBest = this.getBestAttribute(defender.baseStats);

    if (types[attackerBest]?.includes(defenderBest)) {
      advantage += 25;
    }

    return advantage;
  }

  getBestAttribute(stats) {
    const attributes = [
      { name: "forca", value: stats.forca },
      { name: "velocidade", value: stats.velocidade },
      { name: "defesa", value: stats.defesa },
      { name: "energia", value: stats.energia },
      { name: "habilidade", value: stats.habilidade },
    ];

    return attributes.reduce((best, current) =>
      current.value > best.value ? current : best,
    ).name;
  }

  calculateEnhancedAttack(attacker, defender, round) {
    const isCritical = Math.random() * 100 < attacker.criticalChance;
    const isDodged = Math.random() * 100 < defender.dodgeChance;

    if (isDodged) {
      return {
        damage: 0,
        critical: false,
        dodged: true,
        message: "ATAQUE ESQUIVADO PERFEITAMENTE! ⚡",
      };
    }

    let damage = Math.max(1, attacker.attack - defender.defense / 2.5);

    // Bônus de round final
    if (round >= 8) {
      damage *= 1.4;
    }

    // Variação aleatória
    const randomFactor = 0.8 + Math.random() * 0.4;
    damage *= randomFactor;

    if (isCritical) {
      damage *= 2.2;
      return {
        damage: Math.floor(damage),
        critical: true,
        dodged: false,
        message: `GOLPE CRÍTICO DEVASTADOR! 💥 Causa ${Math.floor(damage)} de dano.`,
      };
    }

    // Ataque especial baseado no atributo mais forte
    const bestAttr = this.getBestAttribute(attacker.baseStats);
    let specialMessage = "";

    switch (bestAttr) {
      case "forca":
        damage *= 1.2;
        specialMessage = "ATAQUE PODEROSO! 💪 ";
        break;
      case "velocidade":
        damage *= 1.15;
        specialMessage = "ATAQUE RÁPIDO! ⚡ ";
        break;
      case "defesa":
        damage *= 1.1;
        specialMessage = "ATAQUE DEFENSIVO! 🛡️ ";
        break;
      case "energia":
        damage *= 1.25;
        specialMessage = "ATAQUE ENERGÉTICO! 🔥 ";
        break;
      case "habilidade":
        damage *= 1.3;
        specialMessage = "ATAQUE HÁBIL! 🧠 ";
        break;
    }

    return {
      damage: Math.floor(damage),
      critical: false,
      dodged: false,
      message: `${specialMessage}Causa ${Math.floor(damage)} de dano.`,
    };
  }

  addToLog(message, type = "info") {
    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const logEntry = document.createElement("div");
    logEntry.className = `log-entry ${type}`;
    logEntry.innerHTML = `<strong>[${timestamp}]</strong> ${message}`;

    this.elements.battleLog.appendChild(logEntry);
    this.battleLog.push({ timestamp, message, type });

    // Rolar para o final do log
    this.elements.battleLog.scrollTop = this.elements.battleLog.scrollHeight;
  }

  showResultModal(result, stats1, stats2) {
    if (result.draw) {
      this.elements.resultModalTitle.textContent = "EMPATE QUÂNTICO!";
      this.elements.resultModalWinner.innerHTML = "🤝 <br> AMBOS VENCERAM!";
    } else {
      this.elements.resultModalTitle.textContent = "VITÓRIA QUÂNTICA!";
      this.elements.resultModalWinner.innerHTML = `🏆 <br> ${result.winnerName} VENCEU!`;
    }

    // Criar estatísticas detalhadas
    let statsHTML = "";
    if (result.draw) {
      statsHTML = `
              <div class="result-stat">
                <div class="result-stat-label">ROUNDS</div>
                <div class="result-stat-value">${result.rounds}</div>
              </div>
              <div class="result-stat">
                <div class="result-stat-label">CRÍTICOS</div>
                <div class="result-stat-value">${result.criticalHits.player1 + result.criticalHits.player2}</div>
              </div>
              <div class="result-stat">
                <div class="result-stat-label">ESQUIVAS</div>
                <div class="result-stat-value">${result.dodges.player1 + result.dodges.player2}</div>
              </div>
              <div class="result-stat">
                <div class="result-stat-label">DANO TOTAL</div>
                <div class="result-stat-value">${Math.round(result.totalDamage.player1 + result.totalDamage.player2)}</div>
              </div>
            `;
    } else {
      const winnerHealth = Math.round(
        (result.winner.currentHealth / result.winner.health) * 100,
      );
      const loserHealth = Math.round(
        (result.loser.currentHealth / result.loser.health) * 100,
      );

      statsHTML = `
              <div class="result-stat">
                <div class="result-stat-label">ROUNDS</div>
                <div class="result-stat-value">${result.rounds}</div>
              </div>
              <div class="result-stat">
                <div class="result-stat-label">SAÚDE RESTANTE</div>
                <div class="result-stat-value">${winnerHealth}%</div>
              </div>
              <div class="result-stat">
                <div class="result-stat-label">CRÍTICOS</div>
                <div class="result-stat-value">${result.criticalHits.player1 + result.criticalHits.player2}</div>
              </div>
              <div class="result-stat">
                <div class="result-stat-label">DANO CAUSADO</div>
                <div class="result-stat-value">${Math.round(result.winner === stats1 ? result.totalDamage.player1 : result.totalDamage.player2)}</div>
              </div>
            `;
    }

    this.elements.resultModalStats.innerHTML = statsHTML;

    // Mostrar modal
    this.elements.battleResultModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  closeResultModal() {
    this.elements.battleResultModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  rematch() {
    this.closeResultModal();
    this.resetBattle();
  }

  resetBattle() {
    this.selectedCharacters.player1 = null;
    this.selectedCharacters.player2 = null;
    this.battleLog = [];

    // Resetar displays
    this.elements.player1Display.innerHTML = `
            <div class="empty-selection">
              <i class="fas fa-user-circle" style="font-size: 100px; color: var(--text-secondary); margin-bottom: 20px;"></i>
              <p style="font-size: 1.2rem; color: var(--text-secondary);">
                SELECIONE UM PERSONAGEM
              </p>
            </div>
          `;

    this.elements.player2Display.innerHTML = `
            <div class="empty-selection">
              <i class="fas fa-user-circle" style="font-size: 100px; color: var(--text-secondary); margin-bottom: 20px;"></i>
              <p style="font-size: 1.2rem; color: var(--text-secondary);">
                SELECIONE UM PERSONAGEM
              </p>
            </div>
          `;

    // Resetar botão e resultados
    this.elements.startBattleBtn.disabled = true;
    this.elements.battleResults.classList.remove("show");
    this.elements.battleLog.innerHTML =
      "<h4 class='log-title'>REGISTRO DA BATALHA</h4>";

    this.gallery.showToast(
      "🔄 BATALHA REINICIADA • SELECIONE NOVOS PERSONAGENS",
    );
  }

  // ===== HISTÓRICO DE BATALHAS CLICÁVEL =====
  loadHistory() {
    const savedHistory = localStorage.getItem("nexus_battle_history_13");
    if (savedHistory) {
      try {
        const historyData = JSON.parse(savedHistory);
        this.history = historyData.map((entry) => ({
          ...entry,
          battleLog: entry.battleLog || [],
        }));
        this.renderHistory();
      } catch (e) {
        console.error("Erro ao carregar histórico:", e);
        this.history = [];
      }
    }
  }

  saveHistory() {
    try {
      localStorage.setItem(
        "nexus_battle_history_13",
        JSON.stringify(this.history),
      );
    } catch (e) {
      console.error("Erro ao salvar histórico:", e);
    }
  }

  saveToHistory(result) {
    const historyEntry = {
      id: Date.now(),
      winner: result.winnerName,
      loser: result.loserName,
      winnerStats: result.winner,
      loserStats: result.loser,
      type: result.type,
      rounds: result.rounds,
      criticalHits: result.criticalHits,
      dodges: result.dodges,
      totalDamage: result.totalDamage,
      timestamp: result.timestamp,
      date: new Date().toLocaleDateString("pt-BR"),
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      battleLog: result.battleLog || [],
    };

    this.history.unshift(historyEntry);
    if (this.history.length > 20) {
      this.history = this.history.slice(0, 20);
    }

    this.saveHistory();
    this.renderHistory();
  }

  renderHistory() {
    const historyList = this.elements.battleHistoryList;
    const emptyHistory = this.elements.emptyHistory;

    if (this.history.length === 0) {
      emptyHistory.style.display = "block";
      return;
    }

    emptyHistory.style.display = "none";

    let historyHTML = "";
    this.history.forEach((entry, index) => {
      let resultClass = "";
      let resultText = "";
      let resultIcon = "";

      if (entry.type === "draw") {
        resultClass = "draw";
        resultText = "Empate";
        resultIcon = "🤝";
      } else if (entry.type === "win") {
        resultClass = "win";
        resultText = `${entry.winner} venceu`;
        resultIcon = "🏆";
      }

      historyHTML += `
              <div class="history-item ${resultClass}" data-index="${index}">
                <div class="history-info">
                  <div class="history-characters">
                    ${resultIcon} ${entry.winner || "?"} vs ${entry.loser || "?"}
                  </div>
                  <div class="history-result">
                    ${resultText} • ${entry.rounds} rounds • ${entry.date}
                  </div>
                </div>
                <div class="history-expand">
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            `;
    });

    historyList.innerHTML = historyHTML;

    // Adicionar eventos de clique nos itens do histórico
    document.querySelectorAll(".history-item").forEach((item, index) => {
      item.addEventListener("click", () => {
        this.showHistoryDetail(this.history[index]);
      });
    });
  }

  showHistoryDetail(entry) {
    const body = this.elements.historyDetailBody;

    let detailHTML = `
            <div class="history-detail-summary ${entry.type}">
              <h3 style="margin-bottom: 10px;">${entry.type === "draw" ? "EMPATE" : "VITÓRIA DE " + entry.winner}</h3>
              <p>${entry.winner || "?"} vs ${entry.loser || "?"}</p>
              <p>${entry.rounds} rounds • ${entry.date} ${entry.time}</p>
            </div>

            <div class="history-detail-stats-grid">
              <div class="history-detail-stat winner">
                <div class="history-detail-stat-value">${entry.winner || "N/A"}</div>
                <div class="history-detail-stat-label">VENCEDOR</div>
              </div>
              <div class="history-detail-stat loser">
                <div class="history-detail-stat-value">${entry.loser || "N/A"}</div>
                <div class="history-detail-stat-label">PERDEDOR</div>
              </div>
              <div class="history-detail-stat">
                <div class="history-detail-stat-value">${entry.rounds}</div>
                <div class="history-detail-stat-label">ROUNDS</div>
              </div>
              <div class="history-detail-stat">
                <div class="history-detail-stat-value">${entry.criticalHits ? entry.criticalHits.player1 + entry.criticalHits.player2 : 0}</div>
                <div class="history-detail-stat-label">CRÍTICOS</div>
              </div>
            </div>
          `;

    // Adicionar log da batalha se disponível
    if (entry.battleLog && entry.battleLog.length > 0) {
      detailHTML += `
              <div class="history-log" style="margin-top: 20px;">
                <h4 class="history-log-title">REGISTRO DA BATALHA</h4>
                ${entry.battleLog
                  .map((log) => {
                    let logClass = "";
                    if (log.type === "winner") logClass = "winner";
                    if (log.type === "critical") logClass = "critical";
                    if (log.type === "damage") logClass = "damage";
                    if (log.type === "dodge") logClass = "dodge";

                    return `<div class="history-log-entry ${logClass}">${log.timestamp} - ${log.message}</div>`;
                  })
                  .join("")}
              </div>
            `;
    }

    body.innerHTML = detailHTML;
    this.elements.historyDetailModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  closeHistoryDetail() {
    this.elements.historyDetailModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  clearHistory() {
    if (
      confirm("Tem certeza que deseja limpar todo o histórico de batalhas?")
    ) {
      this.history = [];
      this.saveHistory();
      this.renderHistory();
      this.gallery.showToast("🗑️ HISTÓRICO DE BATALHAS LIMPO");
    }
  }

  showBattlePage() {
    this.gallery.state.showFavoritesPage = false;

    // Ocultar outras páginas
    if (this.gallery.elements.quantumUniverse) {
      this.gallery.elements.quantumUniverse.style.display = "none";
    }

    if (this.gallery.elements.quantumFavoritesPage) {
      this.gallery.elements.quantumFavoritesPage.style.display = "none";
      this.gallery.elements.quantumFavoritesPage.classList.remove("active");
      this.gallery.elements.quantumFavoritesPage.setAttribute("hidden", "");
    }

    // Mostrar página de batalha
    if (this.elements.battlePage) {
      this.elements.battlePage.style.display = "block";
      this.elements.battlePage.classList.add("active");
      this.elements.battlePage.removeAttribute("hidden");

      // Animação de entrada
      setTimeout(() => {
        this.elements.battlePage.style.opacity = "1";
        this.elements.battlePage.style.transform = "translateY(0)";
      }, 50);
    }

    // Atualizar ícone do botão de favoritos
    const favoritesIcon = document.getElementById("favoritesIcon");
    if (favoritesIcon) {
      favoritesIcon.className = "fas fa-heart";
    }

    // Atualizar título da página
    document.title = "⚔️ SISTEMA DE BATALHA | NEXUS UNIVERSE 13/10";

    // Rolar para o topo
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Tocar som
    this.gallery.audio.play("click");

    this.gallery.showToast("⚔️ ACESSANDO SISTEMA DE BATALHA QUÂNTICA 13/10");

    // Atualizar histórico
    this.renderHistory();
  }
}
