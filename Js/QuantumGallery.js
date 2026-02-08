class QuantumGallery {
  constructor(cache) {
    this.cache = cache;
    this.charactersData = charactersData;

    this.config = {
      itemsPerPage: 80,
      intersectionObserver: null,
      scrollDebounce: null,
    };

    this.state = {
      currentPage: 1,
      currentCategory: "all",
      currentSort: "original",
      filteredCharacters: [...charactersData],
      isModalOpen: false,
      isSearchModalOpen: false,
      showFavoritesPage: false,
      showBattlePage: false,
      modalOpenedFromFavorites: false,
      scrollPositionBeforeModal: 0,
    };

    this.viewedCharacters = new Set();
    this.history = new QuantumHistory(this);
    this.effects = new QuantumEffects();
    this.audio = new QuantumAudio();
    this.themeSystem = new QuantumThemeSystem();
    this.favorites = new QuantumFavoritesSystem(this);
    this.searchSystem = new QuantumSearch(this);
    this.battleSystem = new QuantumBattleSystem(this);

    this.elements = {};
    this.init();
  }

  async init() {
    console.log("🚀 Inicializando Nexus Universe 13/10...");

    await this.preloadFirstFourImages();

    this.cacheElements();
    this.setupEventListeners();
    this.renderFilters();
    this.renderAllCharacters();
    this.updateStats();
    this.setCurrentYear();
    this.setupSortOptions();
    this.initScrollAnimations();
    this.setupIntersectionObserver();
    this.setupMenuToggle();

    this.handlePageRefresh();

    console.log("✅ Nexus Universe 13/10 inicializado!");
  }

  handlePageRefresh() {
    window.scrollTo(0, 0);

    window.addEventListener("beforeunload", () => {
      window.scrollTo(0, 0);
    });
  }

  setupMenuToggle() {
    const menuToggle = document.getElementById("menuToggle");
    const controlButtons = document.getElementById("controlButtonsContainer");

    if (menuToggle && controlButtons) {
      menuToggle.addEventListener("click", () => {
        const isVisible = controlButtons.classList.contains("show");

        if (isVisible) {
          controlButtons.classList.remove("show");
          menuToggle.setAttribute("aria-label", "Abrir menu de controles");
          menuToggle.innerHTML =
            '<i class="fas fa-bars" aria-hidden="true"></i>';
        } else {
          controlButtons.classList.add("show");
          menuToggle.setAttribute("aria-label", "Fechar menu de controles");
          menuToggle.innerHTML =
            '<i class="fas fa-times" aria-hidden="true"></i>';
        }

        this.audio.play("click");
      });

      // Fechar menu ao clicar em qualquer botão de controle
      document
        .querySelectorAll(".control-buttons-container .quantum-control-btn")
        .forEach((btn) => {
          btn.addEventListener("click", () => {
            controlButtons.classList.remove("show");
            menuToggle.setAttribute("aria-label", "Abrir menu de controles");
            menuToggle.innerHTML =
              '<i class="fas fa-bars" aria-hidden="true"></i>';
          });
        });
    }
  }

  async preloadFirstFourImages() {
    console.log("🔥 Pré-carregando as primeiras 4 imagens...");
    const firstFour = charactersData.slice(0, 4);
    const promises = firstFour.map(async (character) => {
      try {
        const startTime = performance.now();
        await this.cache.cacheImage(character.image);
        const loadTime = performance.now() - startTime;
        console.log(`✅ ${character.name}: ${loadTime.toFixed(0)}ms`);
        return true;
      } catch (error) {
        console.warn(
          `⚠️ Falha ao pré-carregar ${character.name}: ${character.image}`,
        );
        return false;
      }
    });

    const results = await Promise.allSettled(promises);
    const successCount = results.filter(
      (r) => r.status === "fulfilled" && r.value,
    ).length;
    console.log(`📊 ${successCount}/4 imagens pré-carregadas com sucesso`);
  }

  cacheElements() {
    this.elements = {
      filterMatrix: document.getElementById("filterMatrix"),
      showMoreFilters: document.getElementById("showMoreFilters"),
      sortQuantum: document.getElementById("sortQuantum"),
      sortOptionsQuantum: document.getElementById("sortOptionsQuantum"),
      sortText: document.querySelector(".sort-text"),
      resetQuantum: document.getElementById("resetQuantum"),
      resetEmptyFilters: document.getElementById("resetEmptyFilters"),
      loadingState: document.getElementById("loadingState"),
      emptyState: document.getElementById("emptyState"),
      quantumGrid: document.getElementById("quantumGrid"),
      firstBtn: document.getElementById("firstBtn"),
      prevBtn: document.getElementById("prevBtn"),
      nextBtn: document.getElementById("nextBtn"),
      lastBtn: document.getElementById("lastBtn"),
      quantumInput: document.getElementById("quantumInput"),
      totalPages: document.getElementById("totalPages"),
      totalCharacters: document.getElementById("totalCharacters"),
      visibleCharacters: document.getElementById("visibleCharacters"),
      totalCategories: document.getElementById("totalCategories"),
      currentPageDisplay: document.getElementById("currentPageDisplay"),
      quantumModal: document.getElementById("quantumModal"),
      modalClose: document.getElementById("modalClose"),
      modalContent: document.getElementById("modalContent"),
      quantumToast: document.getElementById("quantumToast"),
      quantumJump: document.getElementById("quantumJump"),
      soundToggle: document.getElementById("soundToggle"),
      soundIcon: document.getElementById("soundIcon"),
      favoritesToggle: document.getElementById("favoritesToggle"),
      quantumUniverse: document.getElementById("quantumUniverse"),
      quantumFavoritesPage: document.getElementById("quantumFavoritesPage"),
      quantumBattlePage: document.getElementById("quantumBattlePage"),
      viewFavoritesBtn: document.getElementById("viewFavoritesBtn"),
      viewBattleBtn: document.getElementById("viewBattleBtn"),
      viewSearchBtn: document.getElementById("viewSearchBtn"),
      backToGallery: document.getElementById("backToGallery"),
      favoritesCountTerminal: document.getElementById("favoritesCountTerminal"),
      searchModal: document.getElementById("searchModal"),
      searchToggle: document.getElementById("searchToggle"),
      searchClose: document.getElementById("searchClose"),
      searchInput: document.getElementById("searchInput"),
      searchResults: document.getElementById("searchResults"),
      battleToggle: document.getElementById("battleToggle"),
    };
  }

  setupEventListeners() {
    const debounce = (func, wait) => {
      return (...args) => {
        clearTimeout(this.config.scrollDebounce);
        this.config.scrollDebounce = setTimeout(
          () => func.apply(this, args),
          wait,
        );
      };
    };

    if (this.elements.filterMatrix) {
      this.elements.filterMatrix.addEventListener("click", (e) => {
        const filter = e.target.closest(".filter-quantum");
        if (filter && filter.dataset.category) {
          const category = filter.dataset.category;
          this.setCategory(category);
          this.audio.play("click");
          this.closeExtraFilters();
          this.scrollToCardsSection();
        }
      });
    }

    if (this.elements.showMoreFilters) {
      this.elements.showMoreFilters.addEventListener("click", () => {
        this.toggleMoreFilters();
        this.audio.play("click");
      });
    }

    if (this.elements.sortQuantum) {
      this.elements.sortQuantum.addEventListener("click", () => {
        const isShowing =
          this.elements.sortOptionsQuantum.style.display === "block";
        this.elements.sortOptionsQuantum.style.display = isShowing
          ? "none"
          : "block";
        this.elements.sortQuantum.setAttribute("aria-expanded", !isShowing);
        this.audio.play("click");
      });
    }

    if (this.elements.resetQuantum) {
      this.elements.resetQuantum.addEventListener("click", () => {
        this.resetFilters();
        this.audio.play("click");
      });
    }

    if (this.elements.resetEmptyFilters) {
      this.elements.resetEmptyFilters.addEventListener("click", () => {
        this.resetFilters();
        this.audio.play("click");
      });
    }

    if (this.elements.firstBtn) {
      this.elements.firstBtn.addEventListener("click", () => {
        this.goToPage(1);
        this.audio.play("click");
      });
    }

    if (this.elements.prevBtn) {
      this.elements.prevBtn.addEventListener("click", () => {
        this.goToPage(this.state.currentPage - 1);
        this.audio.play("click");
      });
    }

    if (this.elements.nextBtn) {
      this.elements.nextBtn.addEventListener("click", () => {
        this.goToPage(this.state.currentPage + 1);
        this.audio.play("click");
      });
    }

    if (this.elements.lastBtn) {
      this.elements.lastBtn.addEventListener("click", () => {
        this.goToPage(this.getTotalPages());
        this.audio.play("click");
      });
    }

    if (this.elements.quantumInput) {
      this.elements.quantumInput.addEventListener("change", (e) => {
        const page = parseInt(e.target.value);
        if (page >= 1 && page <= this.getTotalPages()) {
          this.goToPage(page);
        } else {
          this.elements.quantumInput.value = this.state.currentPage;
          this.showToast("FREQUÊNCIA INVÁLIDA");
        }
      });
    }

    if (this.elements.modalClose) {
      this.elements.modalClose.addEventListener("click", () => {
        this.closeModal();
        this.audio.play("click");
      });
    }

    if (this.elements.soundToggle) {
      this.elements.soundToggle.addEventListener("click", () => {
        const enabled = this.audio.toggle();
        const icon = this.elements.soundIcon;
        icon.className = enabled ? "fas fa-volume-up" : "fas fa-volume-mute";
        this.showToast(enabled ? "🔊 SONS ATIVADOS" : "🔇 SONS DESATIVADOS");
        if (enabled) this.audio.play("click");
      });
    }

    if (this.elements.favoritesToggle) {
      this.elements.favoritesToggle.addEventListener("click", () => {
        this.showFavoritesPage();
        this.audio.play("click");
      });
    }

    if (this.elements.viewFavoritesBtn) {
      this.elements.viewFavoritesBtn.addEventListener("click", () => {
        this.showFavoritesPage();
        this.audio.play("click");
      });
    }

    if (this.elements.viewBattleBtn) {
      this.elements.viewBattleBtn.addEventListener("click", () => {
        this.battleSystem.showBattlePage();
        this.audio.play("click");
      });
    }

    if (this.elements.viewSearchBtn) {
      this.elements.viewSearchBtn.addEventListener("click", () => {
        this.openSearchModal();
        this.audio.play("click");
      });
    }

    if (this.elements.searchToggle) {
      this.elements.searchToggle.addEventListener("click", () => {
        this.openSearchModal();
        this.audio.play("click");
      });
    }

    if (this.elements.searchClose) {
      this.elements.searchClose.addEventListener("click", () => {
        this.closeSearchModal();
        this.audio.play("click");
      });
    }

    if (this.elements.searchInput) {
      this.elements.searchInput.addEventListener(
        "input",
        debounce((e) => {
          this.handleSearchInput(e.target.value);
        }, 300),
      );

      this.elements.searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const results = this.elements.searchResults.querySelectorAll(
            ".search-result-item",
          );
          if (results.length > 0) {
            results[0].click();
          }
        }
      });
    }

    if (this.elements.backToGallery) {
      this.elements.backToGallery.addEventListener("click", () => {
        this.showGalleryPage();
        this.audio.play("click");
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (this.state.isModalOpen) this.closeModal();
        if (this.state.isSearchModalOpen) this.closeSearchModal();
        if (document.getElementById("themeModal").classList.contains("show")) {
          this.themeSystem.closeThemeModal();
        }
        if (
          document
            .getElementById("characterSelectorModal")
            .classList.contains("show")
        ) {
          this.battleSystem.closeCharacterSelector();
        }
        if (
          document
            .getElementById("battleAnimationContainer")
            .classList.contains("active")
        ) {
          this.battleSystem.skipAnimation();
        }
        if (
          document
            .getElementById("battleResultModal")
            .classList.contains("active")
        ) {
          this.battleSystem.closeResultModal();
        }
      }

      // Atalho Ctrl+F ou Cmd+F para pesquisa
      if ((e.ctrlKey || e.metaKey) && e.key === "f") {
        e.preventDefault();
        this.openSearchModal();
      }

      // Atalho Ctrl+B ou Cmd+B para batalha
      if ((e.ctrlKey || e.metaKey) && e.key === "b") {
        e.preventDefault();
        this.battleSystem.showBattlePage();
      }

      // Atalho Ctrl+M ou Cmd+M para menu
      if ((e.ctrlKey || e.metaKey) && e.key === "m") {
        e.preventDefault();
        document.getElementById("menuToggle").click();
      }
    });

    document.addEventListener("click", (e) => {
      if (this.state.isModalOpen && e.target === this.elements.quantumModal) {
        this.closeModal();
      }
      if (
        this.state.isSearchModalOpen &&
        e.target === this.elements.searchModal
      ) {
        this.closeSearchModal();
      }
    });

    if (this.elements.quantumJump) {
      this.elements.quantumJump.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.audio.play("click");
      });
    }

    window.addEventListener(
      "scroll",
      debounce(() => {
        this.toggleQuantumJump();
        this.animateOnScroll();
      }, 50),
    );

    document.addEventListener("click", (e) => {
      if (this.elements.sortQuantum && this.elements.sortOptionsQuantum) {
        if (
          !e.target.closest(".sort-quantum") &&
          !e.target.closest("#sortOptionsQuantum")
        ) {
          this.elements.sortOptionsQuantum.style.display = "none";
          this.elements.sortQuantum.setAttribute("aria-expanded", "false");
        }
      }
    });
  }

  closeExtraFilters() {
    const hiddenFilters = document.querySelectorAll(
      ".filter-quantum.hidden-filter",
    );
    const showMoreBtn = this.elements.showMoreFilters;

    if (hiddenFilters.length === 0 && showMoreBtn) {
      this.toggleMoreFilters();
    }
  }

  setupIntersectionObserver() {
    if ("IntersectionObserver" in window) {
      this.config.intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target.querySelector("img");
              if (img && img.dataset.src) {
                this.loadImage(img);
                this.config.intersectionObserver.unobserve(entry.target);
              }
            }
          });
        },
        {
          rootMargin: "200px",
          threshold: 0.01,
        },
      );
    }
  }

  async loadImage(imgElement) {
    const src = imgElement.dataset.src;
    if (!src) return;

    try {
      const img = await this.cache.cacheImage(src);
      if (img) {
        imgElement.src = img.src;
        imgElement.removeAttribute("data-src");
        imgElement.classList.add("loaded");
      }
    } catch (error) {
      console.warn(`Não foi possível carregar: ${src}`);
      imgElement.classList.add("error");
    }
  }

  renderFilters() {
    if (!this.elements.filterMatrix) return;

    const categories = [
      ...new Set(charactersData.map((char) => char.category)),
    ];
    categories.sort();

    const allButton = this.createFilterButton(
      "all",
      "TODO O MULTIVERSO",
      charactersData.length,
      true,
    );
    this.elements.filterMatrix.appendChild(allButton);

    const maxVisibleFilters = 12;
    const maxCategories = maxVisibleFilters - 1;

    categories.forEach((category, index) => {
      const count = charactersData.filter(
        (char) => char.category === category,
      ).length;
      const button = this.createFilterButton(
        category,
        categoryNames[category] || category,
        count,
        false,
      );

      if (index >= maxCategories) {
        button.classList.add("hidden-filter");
      }

      this.elements.filterMatrix.appendChild(button);
    });

    if (categories.length > maxCategories && this.elements.showMoreFilters) {
      this.elements.showMoreFilters.style.display = "block";
    }

    if (this.elements.totalCategories) {
      this.elements.totalCategories.textContent = categories.length + 1;
    }
  }

  createFilterButton(category, label, count, isActive) {
    const button = document.createElement("button");
    button.className = `filter-quantum ${isActive ? "active" : ""}`;
    button.dataset.category = category;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", isActive);
    button.setAttribute("aria-label", `Filtrar por ${label}`);
    button.innerHTML = `
      <div style="font-size: 1.3rem; font-weight: 700; margin-bottom: 15px;">${label}</div>
      <span class="filter-badge">${count}</span>
    `;
    return button;
  }

  toggleMoreFilters() {
    const allFilters = document.querySelectorAll(".filter-quantum");
    const showMoreBtn = this.elements.showMoreFilters;

    const hasHidden = Array.from(allFilters).some((filter) =>
      filter.classList.contains("hidden-filter"),
    );

    if (hasHidden) {
      allFilters.forEach((filter) => {
        filter.classList.remove("hidden-filter");
      });
      showMoreBtn.innerHTML =
        '<i class="fas fa-chevron-up" aria-hidden="true"></i> MOSTRAR MENOS CATEGORIAS';
      showMoreBtn.setAttribute("aria-label", "Mostrar menos categorias");
    } else {
      allFilters.forEach((filter, index) => {
        if (index >= 12) {
          filter.classList.add("hidden-filter");
        }
      });
      showMoreBtn.innerHTML =
        '<i class="fas fa-chevron-down" aria-hidden="true"></i> MOSTRAR MAIS CATEGORIAS';
      showMoreBtn.setAttribute("aria-label", "Mostrar mais categorias");
    }
  }

  async renderAllCharacters() {
    if (this.elements.loadingState) {
      this.elements.loadingState.style.display = "flex";
      this.elements.loadingState.removeAttribute("hidden");
    }

    if (this.elements.emptyState) {
      this.elements.emptyState.classList.remove("show");
      this.elements.emptyState.setAttribute("hidden", "");
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    this.filterAndSort();

    if (this.elements.loadingState) {
      this.elements.loadingState.style.display = "none";
      this.elements.loadingState.setAttribute("hidden", "");
    }
  }

  filterAndSort() {
    if (this.state.currentCategory === "all") {
      this.state.filteredCharacters = [...charactersData];
    } else {
      this.state.filteredCharacters = charactersData.filter(
        (char) => char.category === this.state.currentCategory,
      );
    }

    this.sortCharacters();
    this.renderCharacters();

    if (this.elements.emptyState) {
      if (this.state.filteredCharacters.length === 0) {
        this.elements.emptyState.classList.add("show");
        this.elements.emptyState.removeAttribute("hidden");
      } else {
        this.elements.emptyState.classList.remove("show");
        this.elements.emptyState.setAttribute("hidden", "");
      }
    }
  }

  sortCharacters() {
    switch (this.state.currentSort) {
      case "original":
        this.state.filteredCharacters.sort((a, b) => a.id - b.id);
        break;
      case "name-asc":
        this.state.filteredCharacters.sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        break;
      case "name-desc":
        this.state.filteredCharacters.sort((a, b) =>
          b.name.localeCompare(a.name),
        );
        break;
      case "category-asc":
        this.state.filteredCharacters.sort((a, b) =>
          (categoryNames[a.category] || a.category).localeCompare(
            categoryNames[b.category] || b.category,
          ),
        );
        break;
      case "category-desc":
        this.state.filteredCharacters.sort((a, b) =>
          (categoryNames[b.category] || b.category).localeCompare(
            categoryNames[a.category] || a.category,
          ),
        );
        break;
      case "random":
        this.state.filteredCharacters.sort(() => Math.random() - 0.5);
        break;
    }
  }

  async renderCharacters() {
    if (!this.elements.quantumGrid) return;

    const totalPages = this.getTotalPages();
    const startIndex = (this.state.currentPage - 1) * this.config.itemsPerPage;
    const endIndex = Math.min(
      startIndex + this.config.itemsPerPage,
      this.state.filteredCharacters.length,
    );
    const charactersToShow = this.state.filteredCharacters.slice(
      startIndex,
      endIndex,
    );

    this.elements.quantumGrid.innerHTML = "";

    charactersToShow.forEach((character, index) => {
      const card = this.createCharacterCard(character, index);
      this.elements.quantumGrid.appendChild(card);

      setTimeout(() => {
        card.classList.add("entering");

        if (!this.viewedCharacters.has(character.id)) {
          this.viewedCharacters.add(character.id);
        }
      }, index * 50);

      if (this.config.intersectionObserver && index >= 4) {
        this.config.intersectionObserver.observe(card);
      }
    });

    this.updatePagination(totalPages);
    this.updateStats();

    setTimeout(() => this.initScrollAnimations(), 100);
  }

  createCharacterCard(character, index) {
    const card = document.createElement("article");
    card.className = "quantum-card";
    card.dataset.id = character.id;
    card.dataset.category = character.category;
    card.tabIndex = 0;
    card.setAttribute("role", "article");
    card.setAttribute("aria-labelledby", `card-title-${character.id}`);
    card.setAttribute("aria-describedby", `card-desc-${character.id}`);

    const normalizedPath = this.cache.normalizePath(character.image);
    const isPreloaded = this.cache.imageCache.has(normalizedPath);
    const hasFailed = this.cache.failedImages.has(normalizedPath);
    const isFavorite = this.favorites.isFavorite(character.id);

    const placeholderSVG = this.generatePlaceholderSVG(character, hasFailed);

    card.innerHTML = `
      <div class="card-quantum-effect" aria-hidden="true"></div>
      <div class="card-quantum-frame" aria-hidden="true"></div>
      <button class="quantum-favorite ${isFavorite ? "active" : ""}" data-id="${character.id}" aria-label="${isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}">
        <i class="${isFavorite ? "fas" : "far"} fa-heart" aria-hidden="true"></i>
      </button>
      <div class="quantum-badge" aria-hidden="true">
        ${categoryNames[character.category] || character.category}
      </div>
      <img src="${isPreloaded && !hasFailed ? this.cache.imageCache.get(normalizedPath).src : placeholderSVG}"
        ${!isPreloaded && !hasFailed ? `data-src="${character.image}"` : ""}
        alt="${character.name}"
        class="quantum-image ${isPreloaded ? "preloaded" : ""}"
        ${index < 4 ? 'loading="eager"' : 'loading="lazy"'}
        decoding="async">
      <div class="card-quantum-overlay">
        <h3 id="card-title-${character.id}" class="card-quantum-title">${character.name}</h3>
        <p id="card-desc-${character.id}" class="card-quantum-description">${character.description}</p>
        <div class="quantum-actions">
          <button class="quantum-button view-quantum" data-id="${character.id}"
            aria-label="Analisar ${character.name}">
            <i class="fas fa-expand" aria-hidden="true"></i> ANALISAR
          </button>
          <button class="quantum-button explore-quantum" data-id="${character.id}"
            aria-label="Explorar ${character.name}">
            <i class="fas fa-compass" aria-hidden="true"></i> EXPLORAR
          </button>
        </div>
      </div>
    `;

    if (!isPreloaded && !hasFailed) {
      const img = card.querySelector("img");
      this.loadImage(img);
    }

    const viewBtn = card.querySelector(".view-quantum");
    const exploreBtn = card.querySelector(".explore-quantum");
    const favoriteBtn = card.querySelector(".quantum-favorite");

    viewBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.openModal(character);
      this.audio.play("click");
    });

    exploreBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.setCategory(character.category);
      this.audio.play("click");
    });

    favoriteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(e.currentTarget.dataset.id);
      this.favorites.toggleFavorite(id);
      const icon = favoriteBtn.querySelector("i");
      if (this.favorites.isFavorite(id)) {
        icon.className = "fas fa-heart";
        favoriteBtn.classList.add("active");
        this.audio.play("favorite");
      } else {
        icon.className = "far fa-heart";
        favoriteBtn.classList.remove("active");
        this.audio.play("click");
      }
    });

    if (typeof gsap !== "undefined" && !CONFIG.REDUCE_MOTION) {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, rotationX: 15, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.1,
        },
      );
    }

    return card;
  }

  generatePlaceholderSVG(character, hasFailed = false) {
    const colors = {
      "One-Piece": "var(--quantum-primary)",
      "Dragon-Ball": "var(--quantum-warning)",
      Berserk: "var(--quantum-danger)",
      Naruto: "var(--quantum-secondary)",
      HXH: "var(--quantum-accent)",
      kimetsu: "var(--quantum-success)",
      Boku: "#b8b8ff",
      castlevania: "#8a2be2",
      lol: "#ff4500",
      Fullmetal: "#1e90ff",
    };

    const color = colors[character.category] || "var(--quantum-primary)";
    const initials = character.name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .substring(0, 2);

    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="var(--background-primary)" stop-opacity="1"/>
            <stop offset="100%" stop-color="var(--background-secondary)" stop-opacity="1"/>
          </linearGradient>
          <radialGradient id="glow">
            <stop offset="0%" stop-color="${color}" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#bg)"/>

        <circle cx="200" cy="250" r="100" fill="url(#glow)"/>

        <g transform="translate(200, 250)">
          <circle r="80" fill="${color}" opacity="0.1"/>
          <text y="10" text-anchor="middle" fill="${color}" font-family="Arial" font-size="36" font-weight="bold">
            ${initials}
          </text>
        </g>

        <text x="200" y="380" text-anchor="middle" fill="var(--text-secondary)" font-family="Arial" font-size="14" opacity="0.7">
          ${hasFailed ? "IMAGEM NÃO ENCONTRADA" : "CARREGANDO..."}
        </text>

        ${
          !hasFailed
            ? `
                <g transform="translate(200, 250)">
                  <circle r="85" fill="none" stroke="${color}" stroke-width="2" opacity="0.5" stroke-dasharray="4,4">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3s" repeatCount="indefinite"/>
                  </circle>
                </g>
                `
            : ""
        }
      </svg>
    `)}`;
  }

  openModal(character) {
    this.state.modalOpenedFromFavorites = false;
    this.openModalInternal(character);
  }

  openModalFromFavorites(character) {
    this.state.modalOpenedFromFavorites = true;
    this.openModalInternal(character);
  }

  openModalInternal(character) {
    if (
      this.state.isModalOpen ||
      !this.elements.modalContent ||
      !this.elements.quantumModal
    )
      return;

    this.state.isModalOpen = true;

    this.state.scrollPositionBeforeModal = window.pageYOffset;

    document.documentElement.style.setProperty(
      "--scroll-top",
      `${this.state.scrollPositionBeforeModal}px`,
    );

    const normalizedPath = this.cache.normalizePath(character.image);
    const cachedImg = this.cache.imageCache.get(normalizedPath);
    const imgSrc = cachedImg ? cachedImg.src : character.image;
    const isFavorite = this.favorites.isFavorite(character.id);

    this.elements.modalContent.innerHTML = `
      <div class="modal-character-details">
        <div class="modal-character-grid">
          <div class="modal-character-image-container">
            <img src="${imgSrc}"
              alt="${character.name}"
              class="modal-character-image"
              onerror="this.onerror=null; this.src='${this.generatePlaceholderSVG(character, true)}';">
            <div class="modal-image-tags">
              <span class="modal-category-tag">
                ${categoryNames[character.category] || character.category}
              </span>
              <button class="modal-favorite-btn ${isFavorite ? "active" : ""}" 
                data-id="${character.id}"
                aria-label="${isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}">
                <i class="${isFavorite ? "fas" : "far"} fa-heart"></i>
              </button>
            </div>
          </div>
          <div class="modal-character-info">
            <h2 class="modal-character-title">${character.name}</h2>
            <p class="modal-character-description">${character.description}</p>

            <div class="modal-character-specs">
              <h3 class="modal-specs-title">
                <i class="fas fa-chart-network"></i>
                ESPECIFICAÇÕES QUÂNTICAS
              </h3>
              <div class="modal-specs-grid">
                ${Object.entries(character.details || {})
                  .map(
                    ([key, value]) => `
                      <div class="modal-spec-item">
                        <div class="modal-spec-label">${key}</div>
                        <div class="modal-spec-value">${value}</div>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </div>

            <div class="modal-character-actions">
              <button class="modal-explore-btn" onclick="window.gallery.setCategory('${character.category}')">
                <i class="fas fa-filter"></i>
                EXPLORAR ${categoryNames[character.category]}
              </button>
              <button class="modal-battle-btn" onclick="window.gallery.battleSystem.openCharacterSelector(1); setTimeout(() => { const selectorGrid = document.getElementById('characterSelectorGrid'); const characterElement = selectorGrid.querySelector('[data-id=\\'${character.id}\\']'); if (characterElement) characterElement.click(); }, 100); window.gallery.closeModal();">
                <i class="fas fa-fist-raised"></i>
                SELECIONAR PARA BATALHA
              </button>
              <button class="modal-close-btn" onclick="window.gallery.closeModal()">
                <i class="fas fa-times"></i>
                FECHAR ANÁLISE
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    const favoriteBtn = this.elements.modalContent.querySelector(
      ".modal-favorite-btn",
    );
    if (favoriteBtn) {
      favoriteBtn.addEventListener("click", () => {
        const id = parseInt(favoriteBtn.dataset.id);
        this.favorites.toggleFavorite(id);
        const icon = favoriteBtn.querySelector("i");
        if (this.favorites.isFavorite(id)) {
          icon.className = "fas fa-heart";
          favoriteBtn.classList.add("active");
          this.audio.play("favorite");
        } else {
          icon.className = "far fa-heart";
          favoriteBtn.classList.remove("active");
          this.audio.play("click");
        }
      });
    }

    this.elements.quantumModal.classList.add("show");
    this.elements.quantumModal.removeAttribute("hidden");
    this.elements.quantumModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    this.elements.modalContent.scrollTop = 0;

    setTimeout(() => {
      this.elements.modalClose.focus();
    }, 100);
  }

  closeModal() {
    if (!this.state.isModalOpen || !this.elements.quantumModal) return;

    this.elements.quantumModal.classList.remove("show");
    this.elements.quantumModal.setAttribute("hidden", "");
    this.elements.quantumModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    document.documentElement.style.removeProperty("--scroll-top");

    this.state.isModalOpen = false;

    window.scrollTo(0, this.state.scrollPositionBeforeModal);

    if (this.state.modalOpenedFromFavorites && this.state.showFavoritesPage) {
      this.state.modalOpenedFromFavorites = false;
    }
  }

  openSearchModal() {
    if (
      this.state.isModalOpen ||
      this.state.isSearchModalOpen ||
      !this.elements.searchModal
    )
      return;

    this.state.isSearchModalOpen = true;
    this.elements.searchModal.classList.add("show");
    this.elements.searchModal.removeAttribute("hidden");
    this.elements.searchModal.setAttribute("aria-hidden", "false");

    setTimeout(() => {
      this.elements.searchInput.focus();
    }, 100);

    this.audio.play("search");
  }

  closeSearchModal() {
    if (!this.state.isSearchModalOpen) return;

    this.state.isSearchModalOpen = false;
    this.elements.searchModal.classList.remove("show");
    this.elements.searchModal.setAttribute("hidden", "");
    this.elements.searchModal.setAttribute("aria-hidden", "true");

    this.elements.searchInput.value = "";
    this.elements.searchResults.innerHTML = "";
  }

  async handleSearchInput(query) {
    const resultsContainer = this.elements.searchResults;
    if (!resultsContainer) return;

    if (!query.trim()) {
      resultsContainer.innerHTML = `
        <div class="search-no-results">
          <i class="fas fa-search"></i>
          <h3>DIGITE PARA PESQUISAR</h3>
          <p>Digite o nome de um personagem para iniciar a busca quântica.</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = `
      <div class="search-no-results">
        <div class="loading-ring" style="width: 60px; height: 60px; margin: 0 auto 20px;"></div>
        <h3>ANALISANDO REALIDADE QUÂNTICA...</h3>
        <p>Buscando correspondências na base de dados.</p>
      </div>
    `;

    await new Promise((resolve) => setTimeout(resolve, 200));

    const results = this.searchSystem.fuzzySearch(query, 15);

    if (results.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-no-results">
          <i class="fas fa-search-minus"></i>
          <h3>NENHUM PERSONAGEM ENCONTRADO</h3>
          <p>Tente digitar o nome de forma diferente ou usar termos mais genéricos.</p>
      </div>
      `;
      return;
    }

    resultsContainer.innerHTML = results
      .map((character) => {
        const normalizedPath = this.cache.normalizePath(character.image);
        const cachedImg = this.cache.imageCache.get(normalizedPath);
        const imgSrc = cachedImg ? cachedImg.src : character.image;
        const isFavorite = this.favorites.isFavorite(character.id);

        return `
          <div class="search-result-item" data-id="${character.id}">
            <img src="${imgSrc}" 
                 alt="${character.originalName}" 
                 class="search-result-image"
                 onerror="this.onerror=null; this.src='${this.generatePlaceholderSVG(
                   character,
                   true,
                 )}';">
            <div class="search-result-info">
              <h3 class="search-result-name">${character.originalName}</h3>
              <div class="search-result-category">${
                categoryNames[character.category] || character.category
              }</div>
              <div class="search-result-match">
                <i class="fas fa-${
                  character.matchType === "exact" ? "check-circle" : "bullseye"
                }"></i>
                ${
                  character.matchType === "exact"
                    ? "Correspondência exata"
                    : "Correspondência aproximada"
                }
              </div>
            </div>
            <button class="search-result-favorite  ${
              isFavorite ? "active" : ""
            }" data-id="${character.id}" aria-label="${
              isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
            }">
              <i class="${isFavorite ? "fas" : "far"} fa-heart"></i>
            </button>
            <i class="fas fa-chevron-right search-result-arrow" aria-hidden="true"></i>
          </div>
        `;
      })
      .join("");

    resultsContainer.querySelectorAll(".search-result-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target.closest(".search-result-favorite")) {
          return;
        }

        const id = parseInt(item.dataset.id);
        const character = charactersData.find((c) => c.id === id);
        if (character) {
          this.closeSearchModal();
          this.openModal(character);
        }
      });
    });

    resultsContainer
      .querySelectorAll(".search-result-favorite")
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const id = parseInt(btn.dataset.id);
          this.favorites.toggleFavorite(id);
          const icon = btn.querySelector("i");
          if (this.favorites.isFavorite(id)) {
            icon.className = "fas fa-heart";
            btn.classList.add("active");
            this.audio.play("favorite");
          } else {
            icon.className = "far fa-heart";
            btn.classList.remove("active");
            this.audio.play("click");
          }
        });
      });
  }

  setCategory(category, silent = false) {
    this.state.currentCategory = category;
    this.state.currentPage = 1;

    document
      .querySelectorAll(".filter-quantum[data-category]")
      .forEach((btn) => {
        const isActive = btn.dataset.category === category;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-selected", isActive);
      });

    this.filterAndSort();
    this.showToast(
      category === "all"
        ? "🌌 EXPLORANDO TODO O MULTIVERSO NEXUS 13/10!"
        : `🔍 FILTRO QUÂNTICO: ${categoryNames[category] || category}`,
    );

    this.closeModal();

    if (!silent) {
      localStorage.setItem("nexus_last_category_13", category);
      localStorage.setItem("nexus_last_page_13", "1");
    }
  }

  setSort(sortType, silent = false) {
    this.state.currentSort = sortType;
    const labels = {
      original: "ORDEM QUÂNTICA",
      "name-asc": "NOME (A-Z)",
      "name-desc": "NOME (Z-A)",
      "category-asc": "CATEGORIA (A-Z)",
      "category-desc": "CATEGORIA (Z-A)",
      random: "ALEATÓRIO QUÂNTICO",
    };

    if (this.elements.sortText) {
      this.elements.sortText.textContent = labels[sortType];
    }

    if (this.elements.sortOptionsQuantum) {
      this.elements.sortOptionsQuantum.style.display = "none";
    }

    if (this.elements.sortQuantum) {
      this.elements.sortQuantum.setAttribute("aria-expanded", "false");
    }

    document.querySelectorAll(".sort-option-quantum").forEach((option) => {
      option.setAttribute("aria-selected", option.dataset.sort === sortType);
    });

    this.filterAndSort();
    this.showToast(`📊 ORDENAÇÃO: ${labels[sortType]}`);

    if (!silent) {
      localStorage.setItem("nexus_last_sort_13", sortType);
    }
  }

  resetFilters() {
    this.state.currentCategory = "all";
    this.state.currentSort = "original";
    this.state.currentPage = 1;

    if (this.elements.sortText) {
      this.elements.sortText.textContent = "ORDEM QUÂNTICA";
    }

    if (this.elements.sortOptionsQuantum) {
      this.elements.sortOptionsQuantum.style.display = "none";
    }

    document
      .querySelectorAll(".filter-quantum[data-category]")
      .forEach((btn) => {
        const isActive = btn.dataset.category === "all";
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-selected", isActive);
      });

    document.querySelectorAll(".sort-option-quantum").forEach((option) => {
      option.setAttribute("aria-selected", option.dataset.sort === "original");
    });

    this.filterAndSort();
    this.showToast(
      "🔄 REALIDADE REINICIADA • FILTROS QUÂNTICOS RESETADOS 13/10",
    );
    this.closeModal();

    localStorage.setItem("nexus_last_category_13", "all");
    localStorage.setItem("nexus_last_page_13", "1");
    localStorage.setItem("nexus_last_sort_13", "original");
  }

  getTotalPages() {
    return (
      Math.ceil(
        this.state.filteredCharacters.length / this.config.itemsPerPage,
      ) || 1
    );
  }

  goToPage(page, silent = false) {
    const totalPages = this.getTotalPages();
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    this.state.currentPage = page;
    this.renderCharacters();
    this.scrollToCardsSection();

    this.showToast(`🚀 SALTO QUÂNTICO: FREQUÊNCIA ${page} DE ${totalPages}`);

    if (!silent) {
      localStorage.setItem("nexus_last_page_13", page.toString());
    }
  }

  scrollToCardsSection() {
    const cardsSection = document.querySelector(".quantum-grid-section");
    if (cardsSection) {
      const cardsSectionTop =
        cardsSection.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: cardsSectionTop - 100,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  updatePagination(totalPages) {
    if (this.elements.totalPages) {
      this.elements.totalPages.textContent = totalPages;
    }

    if (this.elements.quantumInput) {
      this.elements.quantumInput.value = this.state.currentPage;
      this.elements.quantumInput.max = totalPages;
    }

    if (this.elements.firstBtn) {
      this.elements.firstBtn.disabled = this.state.currentPage === 1;
    }

    if (this.elements.prevBtn) {
      this.elements.prevBtn.disabled = this.state.currentPage === 1;
    }

    if (this.elements.nextBtn) {
      this.elements.nextBtn.disabled = this.state.currentPage === totalPages;
    }

    if (this.elements.lastBtn) {
      this.elements.lastBtn.disabled = this.state.currentPage === totalPages;
    }
  }

  updateStats() {
    if (this.elements.totalCharacters) {
      this.elements.totalCharacters.textContent = charactersData.length;
    }

    if (this.elements.visibleCharacters) {
      this.elements.visibleCharacters.textContent =
        this.state.filteredCharacters.length;
    }
    if (this.elements.currentPageDisplay) {
      this.elements.currentPageDisplay.textContent = this.state.currentPage;
    }

    document.querySelectorAll(".filter-badge").forEach((span) => {
      const filterBtn = span.closest(".filter-quantum");
      if (filterBtn) {
        const category = filterBtn.dataset.category;
        if (category === "all") {
          span.textContent = charactersData.length;
        } else {
          const count = charactersData.filter(
            (char) => char.category === category,
          ).length;
          span.textContent = count;
        }
      }
    });

    this.favorites.updateFavoritesCount();
    this.favorites.updateTerminalCount();
  }

  setupSortOptions() {
    if (!this.elements.sortOptionsQuantum) return;

    const sortOptions = [
      {
        value: "original",
        label: "ORDEM QUÂNTICA ORIGINAL",
        icon: "fa-atom",
      },
      {
        value: "name-asc",
        label: "NOME (A → Z)",
        icon: "fa-sort-alpha-down",
      },
      {
        value: "name-desc",
        label: "NOME (Z → A)",
        icon: "fa-sort-alpha-up",
      },
      {
        value: "category-asc",
        label: "CATEGORIA (A → Z)",
        icon: "fa-layer-group",
      },
      {
        value: "category-desc",
        label: "CATEGORIA (Z → A)",
        icon: "fa-layer-group fa-rotate-180",
      },
      { value: "random", label: "ALEATÓRIO QUÂNTICO", icon: "fa-random" },
    ];

    this.elements.sortOptionsQuantum.innerHTML = sortOptions
      .map(
        (option) => `
          <div class="sort-option-quantum" data-sort="${option.value}"
            onclick="window.gallery.setSort('${option.value}')"
            role="option"
            aria-selected="${this.state.currentSort === option.value}">
            <i class="fas ${option.icon}" style="color: var(--quantum-primary); font-size: 1.2rem;"></i>
            <span>${option.label}</span>
          </div>
        `,
      )
      .join("");
  }

  initScrollAnimations() {
    if (
      typeof gsap !== "undefined" &&
      typeof ScrollTrigger !== "undefined" &&
      !CONFIG.REDUCE_MOTION
    ) {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.batch(".quantum-card", {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
            },
          );
        },
        once: true,
      });
    }
  }

  animateOnScroll() {
    const cards = document.querySelectorAll(".quantum-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
      if (isInView) {
        card.classList.add("animated");
      }
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  toggleQuantumJump() {
    if (!this.elements.quantumJump) return;
    if (window.scrollY > 1200) {
      this.elements.quantumJump.classList.add("show");
    } else {
      this.elements.quantumJump.classList.remove("show");
    }
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
      if (typeof gsap !== "undefined" && !CONFIG.REDUCE_Motion) {
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

  setCurrentYear() {
    const yearElement = document.getElementById("currentYear");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  showFavoritesPage() {
    this.state.showFavoritesPage = true;
    this.state.showBattlePage = false;

    if (this.elements.quantumUniverse) {
      this.elements.quantumUniverse.style.display = "none";
    }

    if (this.elements.quantumBattlePage) {
      this.elements.quantumBattlePage.style.display = "none";
      this.elements.quantumBattlePage.classList.remove("active");
      this.elements.quantumBattlePage.setAttribute("hidden", "");
    }

    if (this.elements.quantumFavoritesPage) {
      this.elements.quantumFavoritesPage.style.display = "block";
      this.elements.quantumFavoritesPage.classList.add("active");
      this.elements.quantumFavoritesPage.removeAttribute("hidden");
    }

    const favoritesIcon = document.getElementById("favoritesIcon");
    if (favoritesIcon) {
      favoritesIcon.className = "fas fa-images";
    }

    document.title = "⭐ FAVORITOS 13/10 | NEXUS UNIVERSE";

    this.favorites.renderFavoritesPage();

    window.scrollTo({ top: 0, behavior: "smooth" });

    this.audio.play("click");

    this.showToast("⭐ ACESSANDO COLEÇÃO PESSOAL 13/10");
  }

  showGalleryPage() {
    this.state.showFavoritesPage = false;
    this.state.showBattlePage = false;

    if (this.elements.quantumUniverse) {
      this.elements.quantumUniverse.style.display = "block";
    }

    if (this.elements.quantumFavoritesPage) {
      this.elements.quantumFavoritesPage.style.display = "none";
      this.elements.quantumFavoritesPage.classList.remove("active");
      this.elements.quantumFavoritesPage.setAttribute("hidden", "");
    }

    if (this.elements.quantumBattlePage) {
      this.elements.quantumBattlePage.style.display = "none";
      this.elements.quantumBattlePage.classList.remove("active");
      this.elements.quantumBattlePage.setAttribute("hidden", "");
    }

    const favoritesIcon = document.getElementById("favoritesIcon");
    if (favoritesIcon) {
      favoritesIcon.className = "fas fa-heart";
    }

    document.title =
      "🌌 NEXUS UNIVERSE 13/10 | Experiência Quântica Definitiva";

    window.scrollTo({ top: 0, behavior: "smooth" });

    this.audio.play("click");

    this.showToast("🌌 RETORNANDO À GALERIA PRINCIPAL");
  }

  cleanup() {
    if (this.config.intersectionObserver) {
      this.config.intersectionObserver.disconnect();
    }
    clearTimeout(this.config.scrollDebounce);
  }
}
