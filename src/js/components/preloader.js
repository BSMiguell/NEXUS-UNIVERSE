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
    if (CONFIG.USE_THREE_JS && typeof THREE !== "undefined") {
      scheduleIdleTask(
        () => {
          this.initThreeJS();
        },
        { timeout: 5000 },
      );
    }

    if (CONFIG.USE_PARTICLES && !CONFIG.IS_MOBILE) {
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
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      camera.position.z = 15;

      const particlesCount = CONFIG.IS_MOBILE ? 500 : 1500;
      const particlesGeometry = new THREE.BufferGeometry();
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 40;
      }

      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3),
      );

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.08,
        color: 0x00ffea,
        transparent: true,
        opacity: 0.4,
      });

      const particlesMesh = new THREE.Points(
        particlesGeometry,
        particlesMaterial,
      );
      scene.add(particlesMesh);

      function animate() {
        requestAnimationFrame(animate);
        particlesMesh.rotation.x += 0.0003;
        particlesMesh.rotation.y += 0.0007;
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

    const particleCount = CONFIG.IS_MOBILE ? 60 : 120;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "title-particle";

      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 4 + 1;
      const duration = Math.random() * 4 + 2;
      const delay = Math.random() * 5;

      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;

      const colors = [
        "var(--quantum-primary)",
        "var(--quantum-secondary)",
        "var(--quantum-accent)",
        "var(--quantum-danger)",
        "var(--quantum-success)",
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = color;
      particle.style.opacity = "0.3";

      container.appendChild(particle);
    }
  }
}
