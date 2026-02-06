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

    // Calcular estatísticas dos personagens
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
    // Baseado nos detalhes do personagem, calcular atributos de batalha
    const details = character.details || {};

    // Calcular nível base (converter S, A, B, C para números)
    const levelMap = { S: 100, A: 80, B: 60, C: 40, D: 20 };
    const baseLevel = levelMap[details.nível] || 50;

    // Calcular poder baseado na descrição e detalhes
    let powerScore = 0;

    // Bonus por categoria
    const categoryBonus = {
      "Dragon-Ball": 30,
      "One-Piece": 25,
      Naruto: 25,
      Berserk: 20,
      "Demon Slayer": 20,
      "Hunter x Hunter": 20,
      "My Hero Academia": 15,
      "Fullmetal Alchemist": 15,
      "League of Legends": 15,
      Castlevania: 10,
      Pokemon: 10,
    };

    powerScore += categoryBonus[character.category] || 10;

    // Bonus por termos específicos na descrição
    const description = character.description.toLowerCase();
    const detailsText = details.poder ? details.poder.toLowerCase() : "";
    const fullText = description + " " + detailsText;

    if (fullText.includes("poderoso") || fullText.includes("forte"))
      powerScore += 20;
    if (fullText.includes("mega") || fullText.includes("evolução"))
      powerScore += 25;
    if (fullText.includes("deus") || fullText.includes("divino"))
      powerScore += 40;
    if (fullText.includes("rei") || fullText.includes("lendário"))
      powerScore += 30;
    if (fullText.includes("herói")) powerScore += 15;
    if (fullText.includes("vilão")) powerScore += 15;
    if (fullText.includes("protagonista")) powerScore += 20;
    if (fullText.includes("rival")) powerScore += 10;

    // Calcular saúde, ataque e defesa
    const health = Math.floor(baseLevel * 10 + powerScore * 5);
    const attack = Math.floor(baseLevel * 2 + powerScore * 3);
    const defense = Math.floor(baseLevel * 1.5 + powerScore * 2);

    // Calcular poder total
    const totalPower = health + attack + defense + powerScore;

    return {
      character,
      health,
      attack,
      defense,
      powerScore,
      totalPower,
      currentHealth: health,
    };
  }

  simulateBattle(stats1, stats2) {
    this.addToLog("⚔️ INICIANDO SIMULAÇÃO QUÂNTICA...", "info");

    let round = 1;
    const maxRounds = 5;

    while (
      round <= maxRounds &&
      stats1.currentHealth > 0 &&
      stats2.currentHealth > 0
    ) {
      this.addToLog(`\n🔴 ROUND ${round}:`, "round");

      // Personagem 1 ataca
      const damage1 = this.calculateDamage(stats1, stats2);
      stats2.currentHealth -= damage1;
      this.addToLog(
        `🎯 ${stats1.character.name} ataca! Causa ${damage1} de dano. ${stats2.character.name}: ${Math.max(0, stats2.currentHealth)}/${stats2.health} HP`,
        "damage",
      );

      if (stats2.currentHealth <= 0) {
        this.addToLog(`💀 ${stats2.character.name} foi derrotado!`, "winner");
        return { winner: stats1, loser: stats2, rounds: round };
      }

      // Personagem 2 ataca
      const damage2 = this.calculateDamage(stats2, stats1);
      stats1.currentHealth -= damage2;
      this.addToLog(
        `🎯 ${stats2.character.name} contra-ataca! Causa ${damage2} de dano. ${stats1.character.name}: ${Math.max(0, stats1.currentHealth)}/${stats1.health} HP`,
        "damage",
      );

      if (stats1.currentHealth <= 0) {
        this.addToLog(`💀 ${stats1.character.name} foi derrotado!`, "winner");
        return { winner: stats2, loser: stats1, rounds: round };
      }

      round++;
    }

    // Decidir vencedor por pontos se a saúde de ambos > 0
    if (stats1.currentHealth > 0 && stats2.currentHealth > 0) {
      const score1 = (stats1.currentHealth / stats1.health) * 100;
      const score2 = (stats2.currentHealth / stats2.health) * 100;

      this.addToLog("\n⏰ TEMPO ESGOTADO! Decisão por pontos:", "info");
      this.addToLog(
        `${stats1.character.name}: ${score1.toFixed(1)}% HP restante`,
        "info",
      );
      this.addToLog(
        `${stats2.character.name}: ${score2.toFixed(1)}% HP restante`,
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
        };
      }
    }

    return {
      winner: stats1.currentHealth > 0 ? stats1 : stats2,
      loser: stats1.currentHealth > 0 ? stats2 : stats1,
      rounds: round - 1,
    };
  }

  calculateDamage(attacker, defender) {
    // Base damage é o ataque do atacante - defesa do defensor
    let damage = Math.max(1, attacker.attack - defender.defense / 2);

    // Adicionar elemento aleatório
    const randomFactor = 0.8 + Math.random() * 0.4; // 0.8 a 1.2
    damage *= randomFactor;

    // Arredondar
    return Math.floor(damage);
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
              </div>
            `;
      return;
    }

    const { winner, loser, rounds, winByPoints } = result;

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
                <div style="font-size: 1.1rem;">
                  <i class="fas fa-shield-alt" style="color: var(--quantum-primary);"></i>
                  DEFESA: ${winner.defense}
                </div>
              </div>
              ${winByPoints ? '<div style="margin-top: 15px; color: var(--quantum-accent); font-size: 1.1rem;">🎯 Vitória por pontos!</div>' : ""}
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
                <div style="font-size: 1.1rem;">
                  <i class="fas fa-shield-alt" style="color: var(--quantum-primary);"></i>
                  DEFESA: ${loser.defense}
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
                    <div style="font-size: 0.9rem; color: var(--text-secondary);">DIFERENÇA DE PODER</div>
                    <div style="font-size: 1.5rem; font-weight: bold; color: ${winner.totalPower > loser.totalPower ? "var(--quantum-success)" : "var(--quantum-danger)"}">
                      ${Math.abs(winner.totalPower - loser.totalPower)}
                    </div>
                  </div>
                  <div>
                    <div style="font-size: 0.9rem; color: var(--text-secondary);">TOTAL DE PODER</div>
                    <div style="font-size: 1.5rem; font-weight: bold; color: var(--quantum-primary);">
                      ${winner.totalPower + loser.totalPower}
                    </div>
                  </div>
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
