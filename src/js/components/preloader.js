// ===== PRÉ-LOADER OTIMIZADO =====
class QuantumPreloader {
  constructor() {
    this.progress = 0;
    this.cache = new QuantumCache();
    this.init();
  }

  async init() {
    this.setupElements();
    await this.loadCriticalResources();
    this.startLoading();
  }

  setupElements() {
    this.elements = {
      loader: document.getElementById("quantumLoader"),
      progressBar: document.getElementById("progressBar"),
      progressText: document.getElementById("progressText"),
      universe: document.getElementById("quantumUniverse"),
    };
  }

  async loadCriticalResources() {
    if ("fonts" in document) {
      await document.fonts.ready;
    }
  }

  startLoading() {
    const steps = [
      { text: "Inicializando sistema quântico 13/10...", progress: 10 },
      { text: "Carregando dados quânticos...", progress: 25 },
      { text: "Estabilizando realidades...", progress: 40 },
      { text: "Ativando filtros...", progress: 55 },
      { text: "Renderizando entidades...", progress: 70 },
      { text: "Otimizando performance...", progress: 85 },
      { text: "Inicializando sistema de batalha...", progress: 92 },
      { text: "Calibrando efeitos 13/10...", progress: 96 },
      { text: "Pronto para explorar!", progress: 100 },
    ];

    let currentStep = 0;

    const loadStep = () => {
      if (currentStep < steps.length) {
        const step = steps[currentStep];
        this.progress = step.progress;
        this.updateProgress(step.text);

        setTimeout(() => {
          currentStep++;
          loadStep();
        }, 300);
      } else {
        this.completeLoading();
      }
    };

    loadStep();
  }

  updateProgress(message) {
    if (this.elements.progressBar) {
      this.elements.progressBar.style.width = `${this.progress}%`;
    }
    if (this.elements.progressText) {
      this.elements.progressText.textContent = `${message} ${this.progress}%`;
    }
  }

  completeLoading() {
    requestAnimationFrame(() => {
      if (this.elements.loader) {
        this.elements.loader.style.opacity = "0";
        setTimeout(() => {
          this.elements.loader.style.display = "none";
          this.showContent();
        }, 500);
      }
    });
  }

  showContent() {
    if (this.elements.universe) {
      this.elements.universe.style.opacity = "1";
      this.elements.universe.style.visibility = "visible";

      if (typeof gsap !== "undefined" && !CONFIG.REDUCE_MOTION) {
        gsap.fromTo(
          this.elements.universe,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        );
      }

      this.initSystems();
    }
  }

  initSystems() {
    window.gallery = new QuantumGallery(this.cache);
    this.lazyLoadHeavySystems();
  }

  lazyLoadHeavySystems() {
    if (
      CONFIG.USE_THREE_JS &&
      typeof THREE !== "undefined" &&
      CONFIG.SHOW_EFFECTS
    ) {
      scheduleIdleTask(
        () => {
          this.initThreeJS();
        },
        { timeout: 5000 },
      );
    }

    if (CONFIG.USE_PARTICLES && !CONFIG.IS_MOBILE && CONFIG.SHOW_EFFECTS) {
      scheduleIdleTask(
        () => {
          this.initParticles();
        },
        { timeout: 3000 },
      );
    }
  }

  initThreeJS() {
    const canvas = document.getElementById("three-canvas");
    if (!canvas) return;

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      );
      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: !CONFIG.IS_MOBILE,
        powerPreference: "high-performance",
      });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.position.z = 20;

      // Múltiplas camadas de estrelas para profundidade
      const createStarLayer = (count, size, color, opacity, distance) => {
        const geometry = new THREE.BufferGeometry();
        const posArray = new Float32Array(count * 3);
        const colorArray = new Float32Array(count * 3);

        const colors = [
          new THREE.Color(0x00ffea), // Cyan
          new THREE.Color(0xff00ff), // Magenta
          new THREE.Color(0x00ff9d), // Green
          new THREE.Color(0xffaa00), // Orange
          new THREE.Color(0xffffff), // White
        ];

        for (let i = 0; i < count * 3; i += 3) {
          // Posição
          posArray[i] = (Math.random() - 0.5) * distance;
          posArray[i + 1] = (Math.random() - 0.5) * distance;
          posArray[i + 2] = (Math.random() - 0.5) * distance;

          // Cor aleatória do set
          const chosenColor = colors[Math.floor(Math.random() * colors.length)];
          colorArray[i] = chosenColor.r;
          colorArray[i + 1] = chosenColor.g;
          colorArray[i + 2] = chosenColor.b;
        }

        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(posArray, 3),
        );
        geometry.setAttribute(
          "color",
          new THREE.BufferAttribute(colorArray, 3),
        );

        const material = new THREE.PointsMaterial({
          size: size,
          vertexColors: true,
          transparent: true,
          opacity: opacity,
          blending: THREE.AdditiveBlending,
        });

        return new THREE.Points(geometry, material);
      };

      const starLayers = [
        createStarLayer(CONFIG.IS_MOBILE ? 400 : 1200, 0.08, 0x00ffea, 0.6, 50),
        createStarLayer(CONFIG.IS_MOBILE ? 200 : 600, 0.15, 0xff00ff, 0.4, 40),
        createStarLayer(CONFIG.IS_MOBILE ? 100 : 300, 0.25, 0xffffff, 0.2, 30),
      ];

      starLayers.forEach((layer) => scene.add(layer));

      // Shooting Stars System
      const shootingStarGeometry = new THREE.BufferGeometry();
      const shootingStarMaterial = new THREE.PointsMaterial({
        size: 0.1,
        color: 0xffffff,
        transparent: true,
        opacity: 1,
        blending: THREE.AdditiveBlending,
      });

      let shootingStar = null;
      let shootingStarVelocity = new THREE.Vector3();

      function createShootingStar() {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(3);
        positions[0] = (Math.random() - 0.5) * 60;
        positions[1] = (Math.random() - 0.5) * 60;
        positions[2] = -20;
        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3),
        );

        const star = new THREE.Points(geometry, shootingStarMaterial.clone());
        scene.add(star);

        shootingStarVelocity.set(
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5,
          0.5,
        );

        return star;
      }

      function animate() {
        requestAnimationFrame(animate);

        starLayers.forEach((layer, index) => {
          const speed = (index + 1) * 0.0002;
          layer.rotation.x += speed;
          layer.rotation.y += speed * 1.5;
        });

        // Update shooting star
        if (!shootingStar && Math.random() < 0.005) {
          shootingStar = createShootingStar();
        }

        if (shootingStar) {
          shootingStar.position.add(shootingStarVelocity);
          shootingStar.material.opacity -= 0.01;

          if (shootingStar.material.opacity <= 0) {
            scene.remove(shootingStar);
            shootingStar.geometry.dispose();
            shootingStar.material.dispose();
            shootingStar = null;
          }
        }

        renderer.render(scene, camera);
      }

      let resizeTimeout;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        }, 250);
      });

      animate();
    } catch (error) {
      console.warn("Three.js não pôde ser inicializado:", error);
    }
  }

  initParticles() {
    const container = document.getElementById("particles-container");
    if (!container) return;

    const particleCount = CONFIG.IS_MOBILE ? 40 : 100;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "title-particle";

      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 6 + 2;
      const duration = Math.random() * 6 + 4;
      const delay = Math.random() * 5;

      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;

      // Adicionar brilho variável
      const blur = Math.random() * 4 + 1;
      particle.style.filter = `blur(${blur}px)`;

      const colors = [
        "var(--quantum-primary)",
        "var(--quantum-secondary)",
        "var(--quantum-accent)",
        "var(--quantum-danger)",
        "var(--quantum-success)",
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = color;
      particle.style.opacity = (Math.random() * 0.4 + 0.1).toString();

      // Atribuir uma profundidade para parallax CSS se necessário futuramente
      particle.style.setProperty(
        "--particle-z",
        `${Math.random() * 100 - 50}px`,
      );

      container.appendChild(particle);
    }
  }
}
