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
    this.battleResult = null; // NOVO: Armazenar resultado para animação
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

    // Botão limpar histórico - CORREÇÃO: Limpar imediatamente com confirmação
    if (this.elements.clearHistoryBtn) {
      this.elements.clearHistoryBtn.addEventListener("click", () => {
        this.clearHistoryWithConfirmation();
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
    this.battleResult = null; // Resetar resultado anterior

    // Calcular estatísticas dos personagens ANTES da animação
    const stats1 = this.calculateCharacterStats(
      this.selectedCharacters.player1,
    );
    const stats2 = this.calculateCharacterStats(
      this.selectedCharacters.player2,
    );

    // Simular batalha ANTES da animação
    this.battleResult = this.simulateBattle(stats1, stats2);

    // Iniciar animação COM base no resultado real
    await this.startBattleAnimationWithRealResult(this.battleResult);

    // Salvar no histórico
    this.saveToHistory(this.battleResult);

    // Mostrar resultados no modal
    this.showResultModalWithCharacterInfo(this.battleResult, stats1, stats2);

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

  // NOVA FUNÇÃO: Animar com base no resultado real
  async startBattleAnimationWithRealResult(result) {
    return new Promise((resolve) => {
      // Preparar animação
      const char1 =
        result.winner.character.id === this.selectedCharacters.player1.id
          ? result.winner
          : result.loser;
      const char2 =
        result.winner.character.id === this.selectedCharacters.player2.id
          ? result.winner
          : result.loser;

      // Determinar qual personagem é qual na animação
      const isWinnerPlayer1 =
        result.winner.character.id === this.selectedCharacters.player1.id;
      const winnerHealth = result.winner.currentHealth;
      const loserHealth = result.loser.currentHealth;
      const winnerTotalHealth = result.winner.health;
      const loserTotalHealth = result.loser.health;

      // Carregar imagens na animação
      const img1Src = this.gallery.cache.imageCache.has(
        this.gallery.cache.normalizePath(char1.character.image),
      )
        ? this.gallery.cache.imageCache.get(
            this.gallery.cache.normalizePath(char1.character.image),
          ).src
        : char1.character.image;

      const img2Src = this.gallery.cache.imageCache.has(
        this.gallery.cache.normalizePath(char2.character.image),
      )
        ? this.gallery.cache.imageCache.get(
            this.gallery.cache.normalizePath(char2.character.image),
          ).src
        : char2.character.image;

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

      // Calcular dano por step baseado no resultado real
      const winnerFinalHealthPercent = (winnerHealth / winnerTotalHealth) * 100;
      const loserFinalHealthPercent = (loserHealth / loserTotalHealth) * 100;

      // Calcular quanto HP perder por step (aproximação)
      const winnerDamagePerStep = (100 - winnerFinalHealthPercent) / 8; // 8 steps de dano
      const loserDamagePerStep = (100 - loserFinalHealthPercent) / 8;

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

          // Aplicar dano progressivo baseado no resultado REAL
          if (currentStep >= 6 && currentStep <= 10) {
            // Calcular HP atual baseado no progresso
            const stepIndex = currentStep - 5; // 1 a 6
            const winnerCurrentHP = Math.max(
              winnerFinalHealthPercent,
              100 - winnerDamagePerStep * stepIndex,
            );
            const loserCurrentHP = Math.max(
              loserFinalHealthPercent,
              100 - loserDamagePerStep * stepIndex,
            );

            // Determinar qual barra é qual personagem
            if (isWinnerPlayer1) {
              this.elements.hpBar1.style.width = `${winnerCurrentHP}%`;
              this.elements.hpBar2.style.width = `${loserCurrentHP}%`;
              this.elements.hpText1.textContent = `${Math.round(winnerCurrentHP)}%`;
              this.elements.hpText2.textContent = `${Math.round(loserCurrentHP)}%`;
            } else {
              this.elements.hpBar1.style.width = `${loserCurrentHP}%`;
              this.elements.hpBar2.style.width = `${winnerCurrentHP}%`;
              this.elements.hpText1.textContent = `${Math.round(loserCurrentHP)}%`;
              this.elements.hpText2.textContent = `${Math.round(winnerCurrentHP)}%`;
            }

            // Efeito visual de dano baseado na gravidade
            const maxDamage = Math.max(winnerDamagePerStep, loserDamagePerStep);
            if (maxDamage > 10) {
              this.createCriticalEffect();
            }
          }

          // No último step, garantir que as barras mostrem o resultado exato
          if (currentStep === totalSteps) {
            if (isWinnerPlayer1) {
              this.elements.hpBar1.style.width = `${winnerFinalHealthPercent}%`;
              this.elements.hpBar2.style.width = `${loserFinalHealthPercent}%`;
              this.elements.hpText1.textContent = `${Math.round(winnerFinalHealthPercent)}%`;
              this.elements.hpText2.textContent = `${Math.round(loserFinalHealthPercent)}%`;
            } else {
              this.elements.hpBar1.style.width = `${loserFinalHealthPercent}%`;
              this.elements.hpBar2.style.width = `${winnerFinalHealthPercent}%`;
              this.elements.hpText1.textContent = `${Math.round(loserFinalHealthPercent)}%`;
              this.elements.hpText2.textContent = `${Math.round(winnerFinalHealthPercent)}%`;
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

  // NOVA FUNÇÃO: Criar animações de ataque nas imagens dos personagens
  createEnhancedAnimationEffect(step) {
    const effectsContainer = this.elements.animationEffects;

    // Tipos de ataque diferentes
    const attackTypes = ["fire", "lightning", "quantum"];
    const attackType = attackTypes[step % 3];

    // Determinar quem ataca (alterna entre os personagens)
    const isPlayer1Attack = step % 2 === 1;
    const attacker = isPlayer1Attack
      ? this.elements.animationChar1
      : this.elements.animationChar2;
    const defender = isPlayer1Attack
      ? this.elements.animationChar2
      : this.elements.animationChar1;

    // Animar o atacante (move para frente)
    if (attacker) {
      attacker.style.transform = "translateX(0)";
      void attacker.offsetWidth; // Trigger reflow
      attacker.style.transition = "transform 0.3s ease-out";
      attacker.style.transform = isPlayer1Attack
        ? "translateX(50px)"
        : "translateX(-50px)";

      // Resetar posição
      setTimeout(() => {
        attacker.style.transform = "translateX(0)";
      }, 300);
    }

    // Animar o defensor (recebe impacto)
    if (defender) {
      defender.style.transform = "translateX(0) scale(1)";
      void defender.offsetWidth;
      defender.style.transition = "all 0.3s ease-out";
      defender.style.transform = isPlayer1Attack
        ? "translateX(-30px) scale(0.95)"
        : "translateX(30px) scale(0.95)";
      defender.style.filter = "brightness(1.2)";

      // Resetar
      setTimeout(() => {
        defender.style.transform = "translateX(0) scale(1)";
        defender.style.filter = "brightness(1)";
      }, 300);
    }

    // Criar múltiplos efeitos de ataque
    for (let i = 0; i < 3; i++) {
      const attackEffect = document.createElement("div");
      attackEffect.className = `attack-effect ${attackType}`;
      attackEffect.style.top = `${Math.random() * 70 + 15}%`;
      attackEffect.style.left = isPlayer1Attack
        ? `${10 + i * 20}%`
        : `${70 - i * 20}%`;
      attackEffect.style.animationDelay = `${i * 0.2}s`;
      attackEffect.style.animationDuration = `${0.8 + Math.random() * 0.4}s`;

      // Criar efeito de dano
      const damageEffect = document.createElement("div");
      damageEffect.className = "damage-effect";
      damageEffect.style.top = `${Math.random() * 60 + 20}%`;
      damageEffect.style.left = isPlayer1Attack ? "70%" : "10%";
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

    // Efeito de esquiva ocasional (baseado no resultado real)
    if (this.battleResult && Math.random() > 0.7) {
      const dodgeEffect = document.createElement("div");
      dodgeEffect.className = "dodge-effect";
      dodgeEffect.style.top = `${Math.random() * 60 + 20}%`;
      dodgeEffect.style.left = isPlayer1Attack ? "30%" : "60%";

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

    // CORREÇÃO: Mesmo pulando a animação, garantir que as barras mostrem o resultado correto
    if (this.battleResult) {
      const isWinnerPlayer1 =
        this.battleResult.winner.character.id ===
        this.selectedCharacters.player1.id;
      const winnerFinalHealthPercent =
        (this.battleResult.winner.currentHealth /
          this.battleResult.winner.health) *
        100;
      const loserFinalHealthPercent =
        (this.battleResult.loser.currentHealth /
          this.battleResult.loser.health) *
        100;

      if (isWinnerPlayer1) {
        this.elements.hpBar1.style.width = `${winnerFinalHealthPercent}%`;
        this.elements.hpBar2.style.width = `${loserFinalHealthPercent}%`;
        this.elements.hpText1.textContent = `${Math.round(winnerFinalHealthPercent)}%`;
        this.elements.hpText2.textContent = `${Math.round(loserFinalHealthPercent)}%`;
      } else {
        this.elements.hpBar1.style.width = `${loserFinalHealthPercent}%`;
        this.elements.hpBar2.style.width = `${winnerFinalHealthPercent}%`;
        this.elements.hpText1.textContent = `${Math.round(loserFinalHealthPercent)}%`;
        this.elements.hpText2.textContent = `${Math.round(winnerFinalHealthPercent)}%`;
      }
    }
  }

  calculateCharacterStats(character) {
    const stats = character.stats;

    // Calcular atributos baseados nos status
    const health = Math.floor(
      stats.forca * 25 + stats.defesa * 20 + stats.energia * 10,
    );

    const attack = Math.floor(
      stats.forca * 4 + stats.velocidade * 3 + stats.habilidade * 3,
    );

    const defense = Math.floor(
      stats.defesa * 5 + stats.forca * 2 + stats.habilidade * 2,
    );

    const speed = Math.floor(stats.velocidade * 5 + stats.habilidade * 3);

    // Novas chances de crítico e esquiva baseadas em atributos
    const criticalChance = Math.min(
      30,
      Math.floor((stats.velocidade * 0.8 + stats.habilidade * 0.6) * 10) / 10,
    );

    const dodgeChance = Math.min(
      25,
      Math.floor((stats.velocidade * 1.2 + stats.habilidade * 0.5) * 10) / 10,
    );

    // Calcular poder total
    const totalPower = Math.floor(
      health * 0.3 +
        attack * 0.25 +
        defense * 0.2 +
        speed * 0.15 +
        criticalChance * 0.05 +
        dodgeChance * 0.05,
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

  // FUNÇÃO CORRIGIDA: Simular batalha com sistema de azarão balanceado
  simulateBattle(stats1, stats2) {
    this.battleLog = [];
    this.elements.battleLog.innerHTML =
      "<h4 class='log-title'>REGISTRO DA BATALHA</h4>";

    this.addToLog(
      `🏁 BATALHA INICIADA: ${stats1.character.name} vs ${stats2.character.name}`,
      "start",
    );

    // Sistema de azarão (underdog) - PEQUENA chance para o mais fraco
    const powerDiff = Math.abs(stats1.totalPower - stats2.totalPower);
    let underdogBonus = 0;
    let underdogMessage = "";

    // Só ativa o bônus do azarão se a diferença for MUITO grande
    if (powerDiff > 80) {
      // Diferença muito grande
      // Bônus MUITO pequeno: apenas 3-8%
      underdogBonus = 0.03 + Math.random() * 0.05;

      // Só 30% de chance de ativar o bônus do azarão
      if (Math.random() < 0.3) {
        if (stats1.totalPower < stats2.totalPower) {
          // Bônus MÍNIMO para o azarão
          const originalAttack1 = stats1.attack;
          stats1.attack *= 1 + underdogBonus;
          stats1.criticalChance += 1; // Apenas +1% de crítico
          underdogMessage = `${stats1.character.name} é o azarão! Recebe +${Math.round(underdogBonus * 100)}% de ataque (apenas por sorte!).`;
        } else {
          const originalAttack2 = stats2.attack;
          stats2.attack *= 1 + underdogBonus;
          stats2.criticalChance += 1;
          underdogMessage = `${stats2.character.name} é o azarão! Recebe +${Math.round(underdogBonus * 100)}% de ataque (apenas por sorte!).`;
        }

        if (underdogMessage) {
          this.addToLog(`⭐ ${underdogMessage}`, "underdog");
        }
      }
    }

    let round = 1;
    let criticalHits1 = 0;
    let criticalHits2 = 0;
    let dodges1 = 0;
    let dodges2 = 0;
    let totalDamage1 = 0;
    let totalDamage2 = 0;

    // Sistema de vantagem baseada em atributos (peso principal)
    const advantage1 = this.calculateDynamicAdvantage(stats1, stats2);
    const advantage2 = this.calculateDynamicAdvantage(stats2, stats1);

    // Vantagem MAIOR para quem tem melhor atributos
    if (advantage1 > advantage2 + 15) {
      stats1.attack *= 1.12;
      stats1.defense *= 1.08;
      stats1.criticalChance += 3;
      this.addToLog(
        `📊 ${stats1.character.name} tem GRANDE vantagem tática!`,
        "info",
      );
    } else if (advantage2 > advantage1 + 15) {
      stats2.attack *= 1.12;
      stats2.defense *= 1.08;
      stats2.criticalChance += 3;
      this.addToLog(
        `📊 ${stats2.character.name} tem GRANDE vantagem tática!`,
        "info",
      );
    } else if (advantage1 > advantage2) {
      stats1.attack *= 1.05;
      this.addToLog(
        `📊 ${stats1.character.name} tem leve vantagem tática.`,
        "info",
      );
    } else if (advantage2 > advantage1) {
      stats2.attack *= 1.05;
      this.addToLog(
        `📊 ${stats2.character.name} tem leve vantagem tática.`,
        "info",
      );
    }

    // Sistema de rounds dinâmico
    const maxRounds = Math.min(
      25,
      Math.max(
        8,
        Math.floor((stats1.totalPower + stats2.totalPower) / 100) * 3,
      ),
    );

    this.addToLog(`⏱️ Máximo de ${maxRounds} rounds.`, "info");

    // Contadores para controlar quem deveria ganhar
    let expectedWinner =
      stats1.totalPower > stats2.totalPower ? stats1 : stats2;
    let underdog = stats1.totalPower < stats2.totalPower ? stats1 : stats2;
    let underdogWon = false;

    while (
      round <= maxRounds &&
      stats1.currentHealth > 0 &&
      stats2.currentHealth > 0
    ) {
      this.addToLog(`\n🔴 ROUND ${round}:`, "round");

      // Personagem 1 ataca
      const attackResult1 = this.calculateBalancedAttack(
        stats1,
        stats2,
        round,
        expectedWinner === stats1,
      );
      if (!attackResult1.dodged) {
        const actualDamage = Math.max(1, attackResult1.damage);
        stats2.currentHealth -= actualDamage;
        totalDamage2 += actualDamage;

        if (attackResult1.critical) criticalHits1++;
      } else {
        dodges2++;
      }

      this.addToLog(
        `🎯 ${stats1.character.name} ataca! ${attackResult1.message} ${stats2.character.name}: ${Math.max(0, Math.round(stats2.currentHealth))}/${stats2.health} HP`,
        attackResult1.critical
          ? "critical"
          : attackResult1.dodged
            ? "dodge"
            : "damage",
      );

      if (stats2.currentHealth <= 0) {
        underdogWon = stats1 === underdog;
        this.addToLog(`💀 ${stats2.character.name} foi derrotado!`, "winner");
        this.addToLog(
          `🏆 ${stats1.character.name} VENCEU APÓS ${round} ROUNDS!`,
          "winner",
        );

        if (underdogWon) {
          this.addToLog(
            `🎲 SURPRESA! O azarão venceu contra as probabilidades!`,
            "underdog",
          );
        }

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
          underdogWin: underdogWon,
          timestamp: new Date().toISOString(),
          battleLog: [...this.battleLog],
        };
      }

      // Personagem 2 ataca
      const attackResult2 = this.calculateBalancedAttack(
        stats2,
        stats1,
        round,
        expectedWinner === stats2,
      );
      if (!attackResult2.dodged) {
        const actualDamage = Math.max(1, attackResult2.damage);
        stats1.currentHealth -= actualDamage;
        totalDamage1 += actualDamage;

        if (attackResult2.critical) criticalHits2++;
      } else {
        dodges1++;
      }

      this.addToLog(
        `🎯 ${stats2.character.name} contra-ataca! ${attackResult2.message} ${stats1.character.name}: ${Math.max(0, Math.round(stats1.currentHealth))}/${stats1.health} HP`,
        attackResult2.critical
          ? "critical"
          : attackResult2.dodged
            ? "dodge"
            : "damage",
      );

      if (stats1.currentHealth <= 0) {
        underdogWon = stats2 === underdog;
        this.addToLog(`💀 ${stats1.character.name} foi derrotado!`, "winner");
        this.addToLog(
          `🏆 ${stats2.character.name} VENCEU APÓS ${round} ROUNDS!`,
          "winner",
        );

        if (underdogWon) {
          this.addToLog(
            `🎲 SURPRESA! O azarão venceu contra as probabilidades!`,
            "underdog",
          );
        }

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
          underdogWin: underdogWon,
          timestamp: new Date().toISOString(),
          battleLog: [...this.battleLog],
        };
      }

      round++;
    }

    // Decisão por pontos - FAVORECENDO quem tem melhor status
    const score1 = this.calculateBalancedScore(
      stats1,
      criticalHits1,
      dodges1,
      totalDamage2,
      round,
      expectedWinner === stats1,
    );
    const score2 = this.calculateBalancedScore(
      stats2,
      criticalHits2,
      dodges2,
      totalDamage1,
      round,
      expectedWinner === stats2,
    );

    this.addToLog("\n⏰ TEMPO ESGOTADO! Decisão por pontos:", "info");
    this.addToLog(
      `${stats1.character.name}: ${score1.toFixed(1)} pontos`,
      "info",
    );
    this.addToLog(
      `${stats2.character.name}: ${score2.toFixed(1)} pontos`,
      "info",
    );

    // Pequena chance para o azarão vencer por pontos (apenas 10%)
    let finalScore1 = score1;
    let finalScore2 = score2;

    if (stats1.totalPower < stats2.totalPower && Math.random() < 0.1) {
      // Azarão ganha pequeno bônus (5%) em apenas 10% das vezes
      finalScore1 = score1 * 1.05;
      this.addToLog(
        `⭐ ${stats1.character.name} (azarão) recebe pequeno bônus!`,
        "underdog",
      );
    } else if (stats2.totalPower < stats1.totalPower && Math.random() < 0.1) {
      finalScore2 = score2 * 1.05;
      this.addToLog(
        `⭐ ${stats2.character.name} (azarão) recebe pequeno bônus!`,
        "underdog",
      );
    }

    if (finalScore1 >= finalScore2) {
      underdogWon = stats1 === underdog;
      this.addToLog(`🏆 ${stats1.character.name} vence por pontos!`, "winner");

      if (underdogWon) {
        this.addToLog(`🎲 SURPRESA! O azarão venceu nos pontos!`, "underdog");
      }

      return {
        winner: stats1,
        loser: stats2,
        rounds: maxRounds,
        winByPoints: true,
        criticalHits: { player1: criticalHits1, player2: criticalHits2 },
        dodges: { player1: dodges1, player2: dodges2 },
        totalDamage: { player1: totalDamage1, player2: totalDamage2 },
        winnerName: stats1.character.name,
        loserName: stats2.character.name,
        type: "win",
        underdogWin: underdogWon,
        timestamp: new Date().toISOString(),
        battleLog: [...this.battleLog],
      };
    } else {
      underdogWon = stats2 === underdog;
      this.addToLog(`🏆 ${stats2.character.name} vence por pontos!`, "winner");

      if (underdogWon) {
        this.addToLog(`🎲 SURPRESA! O azarão venceu nos pontos!`, "underdog");
      }

      return {
        winner: stats2,
        loser: stats1,
        rounds: maxRounds,
        winByPoints: true,
        criticalHits: { player1: criticalHits1, player2: criticalHits2 },
        dodges: { player1: dodges1, player2: dodges2 },
        totalDamage: { player1: totalDamage1, player2: totalDamage2 },
        winnerName: stats2.character.name,
        loserName: stats1.character.name,
        type: "win",
        underdogWin: underdogWon,
        timestamp: new Date().toISOString(),
        battleLog: [...this.battleLog],
      };
    }
  }

  // NOVA FUNÇÃO: Ataque balanceado que favorece o favorito
  calculateBalancedAttack(attacker, defender, round, isFavorite) {
    // Verificar esquiva
    const dodgeRoll = Math.random() * 100;
    if (dodgeRoll < defender.dodgeChance) {
      return {
        damage: 0,
        critical: false,
        dodged: true,
        message: "ATAQUE ESQUIVADO! ⚡",
      };
    }

    // Calcular dano base
    let damage = attacker.attack;

    // Redução pela defesa
    const defenseReduction = Math.min(
      75,
      (defender.defense / (defender.defense + 120)) * 100,
    );
    damage *= 1 - defenseReduction / 100;

    // Verificar crítico
    const criticalRoll = Math.random() * 100;
    let isCritical = criticalRoll < attacker.criticalChance;

    // Favorito tem 20% mais chance de crítico
    if (isFavorite && !isCritical) {
      isCritical = criticalRoll < attacker.criticalChance * 1.2;
    }

    if (isCritical) {
      damage *= 1.8 + Math.random() * 0.4; // 1.8-2.2x
    }

    // Bônus de round
    if (round > 8) {
      // Favorito ganha mais bônus
      const roundBonus = isFavorite ? 0.025 : 0.015;
      damage *= 1 + (round - 8) * roundBonus;
    }

    // Variação aleatória - menos variação para favorecer consistência
    const randomFactor = isFavorite
      ? 0.9 + Math.random() * 0.2 // Favorito: 0.9-1.1
      : 0.85 + Math.random() * 0.3; // Azarão: 0.85-1.15

    damage *= randomFactor;

    // Garantir dano mínimo
    damage = Math.max(1, Math.floor(damage));

    // Ataque especial
    const bestAttr = this.getBestAttribute(attacker.baseStats);
    let specialMessage = "";

    switch (bestAttr) {
      case "forca":
        specialMessage = "ATAQUE FORTE! 💪 ";
        break;
      case "velocidade":
        specialMessage = "ATAQUE RÁPIDO! ⚡ ";
        break;
      case "defesa":
        specialMessage = "ATAQUE DEFENSIVO! 🛡️ ";
        break;
      case "energia":
        specialMessage = "ATAQUE ENERGÉTICO! 🔥 ";
        break;
      case "habilidade":
        specialMessage = "ATAQUE HÁBIL! 🧠 ";
        break;
    }

    if (isCritical) {
      return {
        damage,
        critical: true,
        dodged: false,
        message: `CRÍTICO! 💥 ${specialMessage}Causa ${damage} de dano.`,
      };
    }

    return {
      damage,
      critical: false,
      dodged: false,
      message: `${specialMessage}Causa ${damage} de dano.`,
    };
  }

  // NOVA FUNÇÃO: Pontuação balanceada que favorece o favorito
  calculateBalancedScore(
    stats,
    criticalHits,
    dodges,
    damageTaken,
    rounds,
    isFavorite,
  ) {
    const healthScore = (stats.currentHealth / stats.health) * 40;
    const powerScore = stats.totalPower * 0.35; // Mais peso no poder total

    // Favorito ganha bônus na pontuação
    const favoriteBonus = isFavorite ? 15 : 0;

    const criticalScore = criticalHits * 7;
    const dodgeScore = dodges * 4;
    const survivalScore = rounds * 1.5 - damageTaken * 0.03;

    return (
      healthScore +
      powerScore +
      criticalScore +
      dodgeScore +
      survivalScore +
      favoriteBonus
    );
  }

  calculateDynamicAdvantage(attacker, defender) {
    let advantage = 0;

    // Vantagem por atributo - mais peso nos atributos
    advantage += (attacker.speed - defender.speed) * 0.7;
    advantage += (attacker.attack - defender.defense) * 0.4;
    advantage += (attacker.defense - defender.attack) * 0.3;
    advantage += (attacker.criticalChance - defender.dodgeChance) * 0.5;

    // Vantagem por tipo de combate
    const attackerBest = this.getBestAttribute(attacker.baseStats);
    const defenderBest = this.getBestAttribute(defender.baseStats);

    const typeAdvantages = {
      forca: ["defesa", "energia"],
      velocidade: ["forca", "habilidade"],
      defesa: ["velocidade", "forca"],
      energia: ["defesa", "velocidade"],
      habilidade: ["energia", "forca"],
    };

    if (typeAdvantages[attackerBest]?.includes(defenderBest)) {
      advantage += 25;
    }

    return Math.max(0, advantage);
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

  // FUNÇÃO CORRIGIDA: Mostrar modal de resultados COM informações dos personagens
  showResultModalWithCharacterInfo(result, stats1, stats2) {
    this.elements.resultModalTitle.textContent = "VITÓRIA QUÂNTICA!";

    // Destacar se foi vitória do azarão
    if (result.underdogWin) {
      this.elements.resultModalWinner.innerHTML = `🎲 SURPRESA!<br>${result.winnerName} VENCEU!<br><small style="font-size: 0.8rem; color: #9b59b6;">(Vitória do Azarão!)</small>`;
    } else {
      this.elements.resultModalWinner.innerHTML = `🏆 <br> ${result.winnerName} VENCEU!`;
    }

    // Obter imagens dos personagens
    const winnerImg = this.gallery.cache.imageCache.has(
      this.gallery.cache.normalizePath(result.winner.character.image),
    )
      ? this.gallery.cache.imageCache.get(
          this.gallery.cache.normalizePath(result.winner.character.image),
        ).src
      : result.winner.character.image;

    const loserImg = this.gallery.cache.imageCache.has(
      this.gallery.cache.normalizePath(result.loser.character.image),
    )
      ? this.gallery.cache.imageCache.get(
          this.gallery.cache.normalizePath(result.loser.character.image),
        ).src
      : result.loser.character.image;

    const winnerHealth = Math.round(
      (result.winner.currentHealth / result.winner.health) * 100,
    );
    const loserHealth = Math.round(
      (result.loser.currentHealth / result.loser.health) * 100,
    );

    // Criar estatísticas
    const statsHTML = `
            <div class="result-stat">
                <div class="result-stat-label">VENCEDOR</div>
                <div class="result-stat-value" style="display: flex; align-items: center; gap: 10px;">
                    <img src="${winnerImg}" alt="${result.winnerName}" style="height: 170px; border-radius: 8px; border: 2px solid ${result.underdogWin ? "#9b59b6" : "var(--quantum-success)"};">
                    <div class="result-stat-div">
                        <strong>${result.winnerName}</strong><br>
                        <small>${categoryNames[result.winner.character.category] || result.winner.character.category}</small>
                        ${result.underdogWin ? '<br><small style="color: #9b59b6;">🎲 Azarão Vitorioso!</small>' : ""}
                    </div>
                </div>
            </div>
            <div class="result-stat">
                <div class="result-stat-label">PERDEDOR</div>
                <div class="result-stat-value" style="display: flex; align-items: center; gap: 10px;">
                    <img src="${loserImg}" alt="${result.loserName}" style="height: 170px; border-radius: 8px; border: 2px solid var(--quantum-danger);">
                    <div class="result-stat-div">
                        <strong>${result.loserName}</strong><br>
                        <small>${categoryNames[result.loser.character.category] || result.loser.character.category}</small>
                    </div>
                </div>
            </div>
            <div class="result-stat">
                <div class="result-stat-label">ROUNDS</div>
                <div class="result-stat-value">${result.rounds}</div>
            </div>
            <div class="result-stat">
                <div class="result-stat-label">SAÚDE RESTANTE</div>
                <div class="result-stat-value">${winnerHealth}% vs ${loserHealth}%</div>
            </div>
            <div class="result-stat">
                <div class="result-stat-label">CRÍTICOS</div>
                <div class="result-stat-value">${result.criticalHits.player1 + result.criticalHits.player2}</div>
            </div>
            <div class="result-stat">
                <div class="result-stat-label">ESQUIVAS</div>
                <div class="result-stat-value">${result.dodges.player1 + result.dodges.player2}</div>
            </div>
            ${result.winByPoints ? '<div class="result-stat"><div class="result-stat-label">VITÓRIA POR</div><div class="result-stat-value">PONTOS</div></div>' : ""}
        `;

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
    this.battleResult = null;

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
      winnerCharacter: result.winner.character,
      loserCharacter: result.loser.character,
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
      underdogWin: result.underdogWin || false,
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
      let resultClass = entry.underdogWin ? "underdog" : "win";
      let resultText = `${entry.winner} venceu`;
      let resultIcon = entry.underdogWin ? "🎲" : "🏆";

      if (entry.underdogWin) {
        resultText = `${entry.winner} venceu (azarão!)`;
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

    // Obter imagens dos personagens
    const winnerImg = this.gallery.cache.imageCache.has(
      this.gallery.cache.normalizePath(entry.winnerCharacter.image),
    )
      ? this.gallery.cache.imageCache.get(
          this.gallery.cache.normalizePath(entry.winnerCharacter.image),
        ).src
      : entry.winnerCharacter.image;

    const loserImg = this.gallery.cache.imageCache.has(
      this.gallery.cache.normalizePath(entry.loserCharacter.image),
    )
      ? this.gallery.cache.imageCache.get(
          this.gallery.cache.normalizePath(entry.loserCharacter.image),
        ).src
      : entry.loserCharacter.image;

    const winnerBorder = entry.underdogWin
      ? "3px solid #9b59b6"
      : "3px solid var(--quantum-success)";
    const winnerBadgeColor = entry.underdogWin
      ? "rgba(155, 89, 182, 0.1)"
      : "rgba(0, 255, 157, 0.1)";
    const winnerTextColor = entry.underdogWin
      ? "#9b59b6"
      : "var(--quantum-success)";

    let detailHTML = `
            <div class="history-detail-summary ${entry.underdogWin ? "underdog" : "win"}">
                <h3 style="margin-bottom: 10px;">${entry.underdogWin ? "🎲 SURPRESA! " : ""}VITÓRIA DE ${entry.winner}</h3>
                <p>${entry.winner || "?"} vs ${entry.loser || "?"}</p>
                <p>${entry.rounds} rounds • ${entry.date} ${entry.time}</p>
                ${entry.underdogWin ? '<p style="color: #9b59b6; margin-top: 10px;"><strong>🎲 Vitória do Azarão!</strong></p>' : ""}
            </div>

            <div class="history-detail-body" style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 30px;">
                <!-- Vencedor -->
                <div class="history-character-info">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                        <img src="${winnerImg}" alt="${entry.winner}" 
                             style="width: 100px; height: 135px; border-radius: 10px; border: ${winnerBorder};">
                        <div>
                            <h4 class="history-character-name">${entry.winner}</h4>
                            <div style="background: ${winnerBadgeColor}; color: ${winnerTextColor}; padding: 5px 10px; border-radius: 20px; font-size: 0.9rem;">
                                ${categoryNames[entry.winnerCharacter.category] || entry.winnerCharacter.category}
                                ${entry.underdogWin ? "<br><small>🎲 Azarão Vitorioso</small>" : ""}
                            </div>
                        </div>
                    </div>
                    
                    <div class="history-detail-stats-grid">
                        <div class="history-detail-stat ${entry.underdogWin ? "underdog" : "winner"}">
                            <div class="history-detail-stat-value">${Math.round((entry.winnerStats.currentHealth / entry.winnerStats.health) * 100)}%</div>
                            <div class="history-detail-stat-label">SAÚDE FINAL</div>
                        </div>
                        <div class="history-detail-stat ${entry.underdogWin ? "underdog" : "winner"}">
                            <div class="history-detail-stat-value">${entry.winnerStats.totalPower}</div>
                            <div class="history-detail-stat-label">PODER</div>
                        </div>
                        <div class="history-detail-stat ${entry.underdogWin ? "underdog" : "winner"}">
                            <div class="history-detail-stat-value">${entry.criticalHits.player1}</div>
                            <div class="history-detail-stat-label">CRÍTICOS</div>
                        </div>
                        <div class="history-detail-stat ${entry.underdogWin ? "underdog" : "winner"}">
                            <div class="history-detail-stat-value">${Math.round(entry.totalDamage.player1)}</div>
                            <div class="history-detail-stat-label">DANO</div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px;">
                        <h5 style="color: var(--quantum-primary); margin-bottom: 10px;">ATRIBUTOS:</h5>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                            <div style="background: rgba(0, 0, 0, 0.3); padding: 10px; border-radius: 8px;">
                                <div style="font-size: 0.8rem; color: var(--text-secondary);">FORÇA</div>
                                <div style="font-weight: bold; color: var(--quantum-primary);">${entry.winnerStats.baseStats.forca}</div>
                            </div>
                            <div style="background: rgba(0, 0, 0, 0.3); padding: 10px; border-radius: 8px;">
                                <div style="font-size: 0.8rem; color: var(--text-secondary);">VELOCIDADE</div>
                                <div style="font-weight: bold; color: var(--quantum-primary);">${entry.winnerStats.baseStats.velocidade}</div>
                            </div>
                            <div style="background: rgba(0, 0, 0, 0.3); padding: 10px; border-radius: 8px;">
                                <div style="font-size: 0.8rem; color: var(--text-secondary);">DEFESA</div>
                                <div style="font-weight: bold; color: var(--quantum-primary);">${entry.winnerStats.baseStats.defesa}</div>
                            </div>
                            <div style="background: rgba(0, 0, 0, 0.3); padding: 10px; border-radius: 8px;">
                                <div style="font-size: 0.8rem; color: var(--text-secondary);">ENERGIA</div>
                                <div style="font-weight: bold; color: var(--quantum-primary);">${entry.winnerStats.baseStats.energia}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Perdedor -->
                <div class="history-character-info">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                        <img src="${loserImg}" alt="${entry.loser}" 
                             style="width: 100px; height: 135px; border-radius: 10px; border: 3px solid var(--quantum-danger);">
                        <div>
                            <h4 class="history-character-name">${entry.loser}</h4>
                            <div style="background: rgba(255, 42, 109, 0.1); color: var(--quantum-danger); padding: 5px 10px; border-radius: 20px; font-size: 0.9rem;">
                                ${categoryNames[entry.loserCharacter.category] || entry.loserCharacter.category}
                            </div>
                        </div>
                    </div>
                    
                    <div class="history-detail-stats-grid">
                        <div class="history-detail-stat loser">
                            <div class="history-detail-stat-value">${Math.round((entry.loserStats.currentHealth / entry.loserStats.health) * 100)}%</div>
                            <div class="history-detail-stat-label">SAÚDE FINAL</div>
                        </div>
                        <div class="history-detail-stat loser">
                            <div class="history-detail-stat-value">${entry.loserStats.totalPower}</div>
                            <div class="history-detail-stat-label">PODER</div>
                        </div>
                        <div class="history-detail-stat loser">
                            <div class="history-detail-stat-value">${entry.criticalHits.player2}</div>
                            <div class="history-detail-stat-label">CRÍTICOS</div>
                        </div>
                        <div class="history-detail-stat loser">
                            <div class="history-detail-stat-value">${Math.round(entry.totalDamage.player2)}</div>
                            <div class="history-detail-stat-label">DANO</div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px;">
                        <h5 style="color: var(--quantum-primary); margin-bottom: 10px;">ATRIBUTOS:</h5>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                            <div style="background: rgba(0, 0, 0, 0.3); padding: 10px; border-radius: 8px;">
                                <div style="font-size: 0.8rem; color: var(--text-secondary);">FORÇA</div>
                                <div style="font-weight: bold; color: var(--quantum-primary);">${entry.loserStats.baseStats.forca}</div>
                            </div>
                            <div style="background: rgba(0, 0, 0, 0.3); padding: 10px; border-radius: 8px;">
                                <div style="font-size: 0.8rem; color: var(--text-secondary);">VELOCIDADE</div>
                                <div style="font-weight: bold; color: var(--quantum-primary);">${entry.loserStats.baseStats.velocidade}</div>
                            </div>
                            <div style="background: rgba(0, 0, 0, 0.3); padding: 10px; border-radius: 8px;">
                                <div style="font-size: 0.8rem; color: var(--text-secondary);">DEFESA</div>
                                <div style="font-weight: bold; color: var(--quantum-primary);">${entry.loserStats.baseStats.defesa}</div>
                            </div>
                            <div style="background: rgba(0, 0, 0, 0.3); padding: 10px; border-radius: 8px;">
                                <div style="font-size: 0.8rem; color: var(--text-secondary);">ENERGIA</div>
                                <div style="font-weight: bold; color: var(--quantum-primary);">${entry.loserStats.baseStats.energia}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    // Adicionar log da batalha se disponível
    if (entry.battleLog && entry.battleLog.length > 0) {
      detailHTML += `
                <div class="history-log" style="grid-column: 1 / -1; margin-top: 30px;">
                    <h4 class="history-log-title">REGISTRO DA BATALHA</h4>
                    <div style="max-height: 200px; overflow-y: auto; padding-right: 10px;">
                        ${entry.battleLog
                          .map((log) => {
                            let logClass = "";
                            if (log.type === "winner") logClass = "winner";
                            if (log.type === "critical") logClass = "critical";
                            if (log.type === "damage") logClass = "damage";
                            if (log.type === "dodge") logClass = "dodge";
                            if (log.type === "underdog") logClass = "underdog";

                            return `<div class="history-log-entry ${logClass}">${log.timestamp} - ${log.message}</div>`;
                          })
                          .join("")}
                    </div>
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

  // CORREÇÃO: Função para limpar histórico imediatamente com confirmação
  clearHistoryWithConfirmation() {
    // Usar o sistema de toast do site para confirmação
    this.gallery.showToast("🗑️ HISTÓRICO DE BATALHAS LIMPO COM SUCESSO!");

    // Limpar imediatamente
    this.history = [];
    this.saveHistory();
    this.renderHistory();

    // Atualizar a interface sem precisar de F5
    this.elements.battleHistoryList.innerHTML = `
            <div class="empty-history" id="emptyHistory">
                <i class="fas fa-scroll"></i>
                <h3>NENHUM HISTÓRICO DE BATALHA</h3>
                <p>Realize batalhas para ver o histórico aqui</p>
            </div>
        `;
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

// Adicionar CSS para animações de ataque
const style = document.createElement("style");
style.textContent = `
    /* Animações de ataque para as imagens dos personagens */
    @keyframes attackForward {
        0% { transform: translateX(0) scale(1); }
        50% { transform: translateX(50px) scale(1.1); }
        100% { transform: translateX(0) scale(1); }
    }
    
    @keyframes attackBackward {
        0% { transform: translateX(0) scale(1); }
        50% { transform: translateX(-50px) scale(1.1); }
        100% { transform: translateX(0) scale(1); }
    }
    
    @keyframes takeDamage {
        0% { transform: translateX(0) scale(1); }
        25% { transform: translateX(-30px) scale(0.95); }
        50% { transform: translateX(30px) scale(0.95); }
        75% { transform: translateX(-15px) scale(0.98); }
        100% { transform: translateX(0) scale(1); }
    }
    
    .attacking-forward {
        animation: attackForward 0.3s ease-out !important;
    }
    
    .attacking-backward {
        animation: attackBackward 0.3s ease-out !important;
    }
    
    .taking-damage {
        animation: takeDamage 0.4s ease-out !important;
    }
    
    /* Melhorar efeitos de ataque */
    .attack-effect {
        z-index: 100;
    }
    
    .damage-effect {
        z-index: 99;
    }
    
    /* Estilo para logs e itens de underdog */
    .log-entry.underdog {
        background: rgba(155, 89, 182, 0.1);
        border-left: 3px solid #9b59b6;
        color: #d0a8ff;
    }
    
    .history-item.underdog {
        background: rgba(155, 89, 182, 0.05);
        border-left: 4px solid #9b59b6;
    }
    
    .history-detail-summary.underdog {
        background: rgba(155, 89, 182, 0.1);
        border-left: 4px solid #9b59b6;
    }
    
    .history-detail-stat.underdog {
        background: rgba(155, 89, 182, 0.1);
        border: 1px solid rgba(155, 89, 182, 0.3);
    }
    
    .history-detail-stat.underdog .history-detail-stat-value {
        color: #9b59b6;
    }
    
    /* Estilo para logs de esquiva */
    .log-entry.dodge {
        background: rgba(52, 152, 219, 0.1);
        border-left: 3px solid #3498db;
        color: #a6d8ff;
    }
    
    .log-entry.critical {
        background: rgba(231, 76, 60, 0.1);
        border-left: 3px solid #e74c3c;
        color: #ffb8b0;
    }
`;
document.head.appendChild(style);
