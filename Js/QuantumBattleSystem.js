class QuantumBattleSystem {
  constructor(gallery) {
    this.gallery = gallery;
    this.selectedCharacters = {
      player1: null,
      player2: null,
    };
    this.battleLog = [];
    this.init();
  }

  init() {
    this.cacheElements();
    this.setupEventListeners();
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

    // Fechar modal ao clicar fora
    if (this.elements.characterSelectorModal) {
      this.elements.characterSelectorModal.addEventListener("click", (e) => {
        if (e.target === this.elements.characterSelectorModal) {
          this.closeCharacterSelector();
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

    display.innerHTML = `
            <img src="${imgSrc}" 
                 alt="${character.name}" 
                 class="selected-character-image"
                 onerror="this.onerror=null; this.src='${this.gallery.generatePlaceholderSVG(character, true)}';">
            <h3 class="selected-character-name">${character.name}</h3>
            <div class="selected-character-category">
              ${categoryNames[character.category] || character.category}
            </div>
            <div class="selected-character-stats">
              <div class="stat-badge stat-strong">
                <i class="fas fa-fist-raised"></i>
                <span>${character.stats.forca}</span>
              </div>
              <div class="stat-badge  stat-ray">
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

  startBattle() {
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

    // Limpar resultados anteriores
    this.battleLog = [];
    this.elements.battleResults.classList.remove("show");
    this.elements.resultsContent.innerHTML = "";
    this.elements.battleLog.innerHTML =
      "<h4 class='log-title'>REGISTRO DA BATALHA</h4>";

    // Adicionar log inicial
    this.addToLog(
      `🏁 BATALHA INICIADA: ${this.selectedCharacters.player1.name} vs ${this.selectedCharacters.player2.name}`,
      "start",
    );

    // Calcular estatísticas dos personagens baseado nos atributos
    const stats1 = this.calculateCharacterStats(
      this.selectedCharacters.player1,
    );
    const stats2 = this.calculateCharacterStats(
      this.selectedCharacters.player2,
    );

    // Simular batalha
    const winner = this.simulateBattle(stats1, stats2);

    // Mostrar resultados
    this.showBattleResults(winner, stats1, stats2);

    // Mostrar seção de resultados
    this.elements.battleResults.classList.add("show");

    // Tocar som de batalha
    this.gallery.audio.play("favorite");
  }

  calculateCharacterStats(character) {
    const stats = character.stats;

    // Calcular atributos baseados nos status
    const health = Math.floor(
      stats.forca * 15 + stats.defesa * 10 + stats.energia * 5,
    );

    const attack = Math.floor(
      stats.forca * 3 + stats.velocidade * 2 + stats.habilidade * 2,
    );

    const defense = Math.floor(
      stats.defesa * 3 + stats.forca * 1.5 + stats.habilidade * 1,
    );

    const speed = Math.floor(stats.velocidade * 3 + stats.habilidade * 2);

    const luck = Math.floor(Math.random() * 20) + 1; // Fator de sorte (1-20)

    // Calcular poder total
    const totalPower = Math.floor(
      health * 0.3 + attack * 0.25 + defense * 0.2 + speed * 0.15 + luck * 0.1,
    );

    return {
      character,
      health,
      attack,
      defense,
      speed,
      luck,
      totalPower,
      currentHealth: health,
      baseStats: stats,
    };
  }

  simulateBattle(stats1, stats2) {
    this.addToLog("⚔️ INICIANDO SIMULAÇÃO QUÂNTICA...", "info");

    let round = 1;
    const maxRounds = 8;
    let criticalHits1 = 0;
    let criticalHits2 = 0;
    let dodges1 = 0;
    let dodges2 = 0;

    // Adicionar fator de sorte para personagem mais fraco
    const powerDifference = Math.abs(stats1.totalPower - stats2.totalPower);
    const underdogBonus = Math.min(30, Math.floor(powerDifference * 0.3)); // Até 30% de bônus para o mais fraco

    let underdog = null;
    if (stats1.totalPower > stats2.totalPower) {
      underdog = stats2;
      stats2.luck += underdogBonus;
      this.addToLog(
        `🍀 BÔNUS DE AZARÃO: ${stats2.character.name} recebe +${underdogBonus} de sorte!`,
        "info",
      );
    } else if (stats2.totalPower > stats1.totalPower) {
      underdog = stats1;
      stats1.luck += underdogBonus;
      this.addToLog(
        `🍀 BÔNUS DE AZARÃO: ${stats1.character.name} recebe +${underdogBonus} de sorte!`,
        "info",
      );
    }

    while (
      round <= maxRounds &&
      stats1.currentHealth > 0 &&
      stats2.currentHealth > 0
    ) {
      this.addToLog(`\n🔴 ROUND ${round}:`, "round");

      // Personagem 1 ataca
      const attackResult1 = this.calculateAttack(stats1, stats2, round);
      stats2.currentHealth -= attackResult1.damage;

      if (attackResult1.critical) criticalHits1++;
      if (attackResult1.dodged) dodges2++;

      this.addToLog(
        `🎯 ${stats1.character.name} ataca! ${attackResult1.message} ${stats2.character.name}: ${Math.max(0, stats2.currentHealth)}/${stats2.health} HP`,
        attackResult1.critical ? "critical" : "damage",
      );

      if (stats2.currentHealth <= 0) {
        this.addToLog(`💀 ${stats2.character.name} foi derrotado!`, "winner");
        return {
          winner: stats1,
          loser: stats2,
          rounds: round,
          criticalHits: {
            player1: criticalHits1,
            player2: criticalHits2,
          },
          dodges: { player1: dodges1, player2: dodges2 },
        };
      }

      // Personagem 2 ataca
      const attackResult2 = this.calculateAttack(stats2, stats1, round);
      stats1.currentHealth -= attackResult2.damage;

      if (attackResult2.critical) criticalHits2++;
      if (attackResult2.dodged) dodges1++;

      this.addToLog(
        `🎯 ${stats2.character.name} contra-ataca! ${attackResult2.message} ${stats1.character.name}: ${Math.max(0, stats1.currentHealth)}/${stats1.health} HP`,
        attackResult2.critical ? "critical" : "damage",
      );

      if (stats1.currentHealth <= 0) {
        this.addToLog(`💀 ${stats1.character.name} foi derrotado!`, "winner");
        return {
          winner: stats2,
          loser: stats1,
          rounds: round,
          criticalHits: {
            player1: criticalHits1,
            player2: criticalHits2,
          },
          dodges: { player1: dodges1, player2: dodges2 },
        };
      }

      round++;
    }

    // Decidir vencedor por pontos se a saúde de ambos > 0
    if (stats1.currentHealth > 0 && stats2.currentHealth > 0) {
      const score1 =
        (stats1.currentHealth / stats1.health) * 100 + criticalHits1 * 5;
      const score2 =
        (stats2.currentHealth / stats2.health) * 100 + criticalHits2 * 5;

      this.addToLog("\n⏰ TEMPO ESGOTADO! Decisão por pontos:", "info");
      this.addToLog(
        `${stats1.character.name}: ${score1.toFixed(1)} pontos (${criticalHits1} críticos)`,
        "info",
      );
      this.addToLog(
        `${stats2.character.name}: ${score2.toFixed(1)} pontos (${criticalHits2} críticos)`,
        "info",
      );

      if (score1 > score2) {
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
        };
      } else if (score2 > score1) {
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
        };
      } else {
        // Desempate por sorte
        if (stats1.luck > stats2.luck) {
          this.addToLog(
            `🎲 ${stats1.character.name} vence por sorte! (${stats1.luck} vs ${stats2.luck})`,
            "winner",
          );
          return {
            winner: stats1,
            loser: stats2,
            rounds: maxRounds,
            winByLuck: true,
            criticalHits: {
              player1: criticalHits1,
              player2: criticalHits2,
            },
            dodges: { player1: dodges1, player2: dodges2 },
          };
        } else if (stats2.luck > stats1.luck) {
          this.addToLog(
            `🎲 ${stats2.character.name} vence por sorte! (${stats2.luck} vs ${stats1.luck})`,
            "winner",
          );
          return {
            winner: stats2,
            loser: stats1,
            rounds: maxRounds,
            winByLuck: true,
            criticalHits: {
              player1: criticalHits1,
              player2: criticalHits2,
            },
            dodges: { player1: dodges1, player2: dodges2 },
          };
        } else {
          this.addToLog(
            "🤝 EMPATE! Ambos os combatentes são igualmente poderosos!",
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
          };
        }
      }
    }

    return {
      winner: stats1.currentHealth > 0 ? stats1 : stats2,
      loser: stats1.currentHealth > 0 ? stats2 : stats1,
      rounds: round - 1,
      criticalHits: { player1: criticalHits1, player2: criticalHits2 },
      dodges: { player1: dodges1, player2: dodges2 },
    };
  }

  calculateAttack(attacker, defender, round) {
    // Chance base de acerto crítico: 5% + (sorte/2)%
    const criticalChance = 5 + attacker.luck / 2;
    const isCritical = Math.random() * 100 < criticalChance;

    // Chance de esquiva: 3% + (velocidade do defensor - velocidade do atacante)/10
    const dodgeChance = 3 + (defender.speed - attacker.speed) / 10;
    const isDodged = Math.random() * 100 < Math.max(0, dodgeChance);

    if (isDodged) {
      return {
        damage: 0,
        critical: false,
        dodged: true,
        message: "ATAQUE ESQUIVADO! ⚡",
      };
    }

    // Base damage é o ataque do atacante - defesa do defensor
    let damage = Math.max(1, attacker.attack - defender.defense / 3);

    // Adicionar variação aleatória
    const randomFactor = 0.7 + Math.random() * 0.6; // 0.7 a 1.3
    damage *= randomFactor;

    // Aplicar crítico se ocorrer
    if (isCritical) {
      damage *= 2;
      return {
        damage: Math.floor(damage),
        critical: true,
        dodged: false,
        message: `GOLPE CRÍTICO! 💥 Causa ${Math.floor(damage)} de dano.`,
      };
    }

    // Bônus de round final (último esforço)
    if (round >= 7) {
      damage *= 1.3;
      return {
        damage: Math.floor(damage),
        critical: false,
        dodged: false,
        message: `ÚLTIMO ESFORÇO! 🔥 Causa ${Math.floor(damage)} de dano.`,
      };
    }

    return {
      damage: Math.floor(damage),
      critical: false,
      dodged: false,
      message: `Causa ${Math.floor(damage)} de dano.`,
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

  showBattleResults(result, stats1, stats2) {
    const resultsContent = this.elements.resultsContent;

    if (result.draw) {
      resultsContent.innerHTML = `
              <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <div style="font-size: 4rem; margin-bottom: 20px;">🤝</div>
                <h2 style="color: var(--quantum-accent); font-size: 2.5rem; margin-bottom: 20px;">
                  EMPATE QUÂNTICO!
                </h2>
                <p style="font-size: 1.2rem; color: var(--text-secondary);">
                  Ambos os combatentes demonstraram poder equivalente após ${result.rounds} rounds.
                </p>
                <div style="margin-top: 30px;">
                  <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
                    <div style="background: rgba(0, 0, 0, 0.3); padding: 20px; border-radius: var(--border-radius-md);">
                      <h4 style="color: var(--quantum-primary); margin-bottom: 10px;">${stats1.character.name}</h4>
                      <div>Críticos: ${result.criticalHits.player1}</div>
                      <div>Esquivas: ${result.dodges.player1}</div>
                    </div>
                    <div style="background: rgba(0, 0, 0, 0.3); padding: 20px; border-radius: var(--border-radius-md);">
                      <h4 style="color: var(--quantum-primary); margin-bottom: 10px;">${stats2.character.name}</h4>
                      <div>Críticos: ${result.criticalHits.player2}</div>
                      <div>Esquivas: ${result.dodges.player2}</div>
                    </div>
                  </div>
                </div>
              </div>
            `;
      return;
    }

    const {
      winner,
      loser,
      rounds,
      winByPoints,
      winByLuck,
      criticalHits,
      dodges,
    } = result;

    resultsContent.innerHTML = `
            <div class="winner-display">
              <h3 style="color: var(--quantum-success); margin-bottom: 20px;">🏆 VENCEDOR</h3>
              <div class="result-character-name">${winner.character.name}</div>
              <img src="${
                this.gallery.cache.imageCache.has(
                  this.gallery.cache.normalizePath(winner.character.image),
                )
                  ? this.gallery.cache.imageCache.get(
                      this.gallery.cache.normalizePath(winner.character.image),
                    ).src
                  : winner.character.image
              }" 
                   alt="${winner.character.name}" 
                   class="result-character-image"
                   style="border-color: var(--quantum-success);">
              <div style="margin-top: 20px;">
                <div style="font-size: 1.1rem; margin-bottom: 10px;">
                  <i class="fas fa-heart" style="color: var(--quantum-danger);"></i>
                  HP: ${winner.currentHealth}/${winner.health}
                </div>
                <div style="font-size: 1.1rem; margin-bottom: 10px;">
                  <i class="fas fa-bolt" style="color: var(--quantum-warning);"></i>
                  ATAQUE: ${winner.attack}
                </div>
                <div style="font-size: 1.1rem; margin-bottom: 10px;">
                  <i class="fas fa-shield-alt" style="color: var(--quantum-primary);"></i>
                  DEFESA: ${winner.defense}
                </div>
                <div style="font-size: 1.1rem; margin-bottom: 10px;">
                  <i class="fas fa-tachometer-alt" style="color: var(--quantum-secondary);"></i>
                  VELOCIDADE: ${winner.speed}
                </div>
                <div style="font-size: 1.1rem; margin-bottom: 10px;">
                  <i class="fas fa-clover" style="color: var(--quantum-accent);"></i>
                  SORTE: ${winner.luck}
                </div>
              </div>
              ${winByPoints ? '<div style="margin-top: 15px; color: var(--quantum-accent); font-size: 1.1rem;">🎯 Vitória por pontos!</div>' : ""}
              ${winByLuck ? '<div style="margin-top: 15px; color: var(--quantum-accent); font-size: 1.1rem;">🎲 Vitória por sorte!</div>' : ""}
            </div>
            
            <div class="loser-display">
              <h3 style="color: var(--quantum-danger); margin-bottom: 20px;">💀 PERDEDOR</h3>
              <div class="result-character-name">${loser.character.name}</div>
              <img src="${
                this.gallery.cache.imageCache.has(
                  this.gallery.cache.normalizePath(loser.character.image),
                )
                  ? this.gallery.cache.imageCache.get(
                      this.gallery.cache.normalizePath(loser.character.image),
                    ).src
                  : loser.character.image
              }" 
                   alt="${loser.character.name}" 
                   class="result-character-image"
                   style="border-color: var(--quantum-danger);">
              <div style="margin-top: 20px;">
                <div style="font-size: 1.1rem; margin-bottom: 10px;">
                  <i class="fas fa-heart" style="color: var(--quantum-danger);"></i>
                  HP: 0/${loser.health}
                </div>
                <div style="font-size: 1.1rem; margin-bottom: 10px;">
                  <i class="fas fa-bolt" style="color: var(--quantum-warning);"></i>
                  ATAQUE: ${loser.attack}
                </div>
                <div style="font-size: 1.1rem; margin-bottom: 10px;">
                  <i class="fas fa-shield-alt" style="color: var(--quantum-primary);"></i>
                  DEFESA: ${loser.defense}
                </div>
                <div style="font-size: 1.1rem; margin-bottom: 10px;">
                  <i class="fas fa-tachometer-alt" style="color: var(--quantum-secondary);"></i>
                  VELOCIDADE: ${loser.speed}
                </div>
                <div style="font-size: 1.1rem; margin-bottom: 10px;">
                  <i class="fas fa-clover" style="color: var(--quantum-accent);"></i>
                  SORTE: ${loser.luck}
                </div>
              </div>
            </div>
            
            <div style="grid-column: 1 / -1; text-align: center; margin-top: 30px;">
              <div style="background: rgba(0, 0, 0, 0.3); padding: 20px; border-radius: var(--border-radius-md);">
                <h4 style="color: var(--quantum-primary); margin-bottom: 15px;">📊 ESTATÍSTICAS DA BATALHA</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                  <div>
                    <div style="font-size: 0.9rem; color: var(--text-secondary);">ROUNDS</div>
                    <div style="font-size: 1.5rem; font-weight: bold; color: var(--quantum-accent);">${rounds}</div>
                  </div>
                  <div>
                    <div style="font-size: 0.9rem; color: var(--text-secondary);">CRÍTICOS</div>
                    <div style="font-size: 1.5rem; font-weight: bold; color: var(--quantum-warning);">
                      ${criticalHits.player1 + criticalHits.player2}
                    </div>
                  </div>
                  <div>
                    <div style="font-size: 0.9rem; color: var(--text-secondary);">ESQUIVAS</div>
                    <div style="font-size: 1.5rem; font-weight: bold; color: var(--quantum-success);">
                      ${dodges.player1 + dodges.player2}
                    </div>
                  </div>
                  <div>
                    <div style="font-size: 0.9rem; color: var(--text-secondary);">DIF. PODER</div>
                    <div style="font-size: 1.5rem; font-weight: bold; color: ${Math.abs(winner.totalPower - loser.totalPower) < 50 ? "var(--quantum-accent)" : "var(--quantum-danger)"}">
                      ${Math.abs(winner.totalPower - loser.totalPower)}
                    </div>
                  </div>
                </div>
                <div style="margin-top: 20px; font-size: 0.9rem; color: var(--text-secondary);">
                  <i class="fas fa-info-circle"></i>
                  Sistema inclui: bônus de azarão, críticos, esquivas e fator sorte
                </div>
              </div>
            </div>
          `;
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
  }
}
