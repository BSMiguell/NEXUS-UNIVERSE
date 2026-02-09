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
    this.battleResult = null;
    this.damageNumbers = [];
    this.effects = [];
    this.particleSystems = [];
    this.frameCount = 0;
    this.animationId = null;

    this.init();
  }

  init() {
    this.cacheElements();
    this.setupEventListeners();
    this.loadHistory();
    this.addBattleStyles();
    this.initParticleSystem();
  }

  addBattleStyles() {
    const style = document.createElement("style");
    style.textContent = `
      /* ANIMAÇÕES AVANÇADAS DE BATALHA */
      @keyframes dimensionalShift {
        0% {
          transform: translateX(0) scale(1) rotate(0deg);
          filter: hue-rotate(0deg) blur(0);
        }
        25% {
          transform: translateX(-30px) scale(1.05) rotate(-5deg);
          filter: hue-rotate(90deg) blur(1px);
        }
        50% {
          transform: translateX(30px) scale(1.1) rotate(5deg);
          filter: hue-rotate(180deg) blur(2px);
        }
        75% {
          transform: translateX(-15px) scale(1.05) rotate(-2deg);
          filter: hue-rotate(270deg) blur(1px);
        }
        100% {
          transform: translateX(0) scale(1) rotate(0deg);
          filter: hue-rotate(360deg) blur(0);
        }
      }
      
      @keyframes quantumFlash {
        0%, 100% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.7;
          transform: scale(1.1);
        }
      }
      
      @keyframes rippleEffect {
        0% {
          transform: scale(0);
          opacity: 1;
          box-shadow: 0 0 0 0 rgba(66, 220, 255, 0.7);
        }
        100% {
          transform: scale(4);
          opacity: 0;
          box-shadow: 0 0 0 20px rgba(66, 220, 255, 0);
        }
      }
      
      @keyframes swordSlash {
        0% {
          transform: translateX(-100%) rotate(-45deg) scaleX(0);
          opacity: 0;
        }
        30% {
          transform: translateX(0) rotate(-45deg) scaleX(1);
          opacity: 1;
        }
        70% {
          transform: translateX(100%) rotate(-45deg) scaleX(1);
          opacity: 1;
        }
        100% {
          transform: translateX(200%) rotate(-45deg) scaleX(0);
          opacity: 0;
        }
      }
      
      @keyframes energyBlast {
        0% {
          transform: scale(0) translateX(0);
          opacity: 0;
        }
        20% {
          transform: scale(1.2) translateX(50px);
          opacity: 1;
        }
        80% {
          transform: scale(1) translateX(150px);
          opacity: 0.8;
        }
        100% {
          transform: scale(0.5) translateX(300px);
          opacity: 0;
        }
      }
      
      @keyframes shieldBlock {
        0% {
          transform: scale(0) rotate(0deg);
          opacity: 0;
        }
        50% {
          transform: scale(1.2) rotate(180deg);
          opacity: 1;
          border-width: 8px;
        }
        100% {
          transform: scale(1.5) rotate(360deg);
          opacity: 0;
          border-width: 2px;
        }
      }
      
      @keyframes healingPulse {
        0%, 100% {
          transform: scale(1);
          opacity: 0.8;
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
        }
        50% {
          transform: scale(1.3);
          opacity: 0.4;
          box-shadow: 0 0 40px rgba(0, 255, 136, 0.8);
        }
      }
      
      @keyframes lightningStrike {
        0%, 100% {
          opacity: 0;
          transform: translateY(-100%) scaleY(0);
        }
        10%, 90% {
          opacity: 1;
          transform: translateY(0) scaleY(1);
        }
        50% {
          opacity: 0.8;
          transform: translateY(50%) scaleY(1.2);
        }
      }
      
      @keyframes fireBurn {
        0% {
          transform: scale(0) rotate(0deg);
          opacity: 1;
        }
        50% {
          transform: scale(1.5) rotate(180deg);
          opacity: 0.8;
          filter: blur(2px);
        }
        100% {
          transform: scale(2) rotate(360deg);
          opacity: 0;
          filter: blur(5px);
        }
      }
      
      @keyframes iceFreeze {
        0% {
          transform: scale(0);
          opacity: 0;
          filter: blur(0) brightness(1);
        }
        30% {
          transform: scale(1.2);
          opacity: 1;
          filter: blur(2px) brightness(2);
        }
        70% {
          transform: scale(1.2);
          opacity: 0.8;
          filter: blur(4px) brightness(1.5);
        }
        100% {
          transform: scale(1.5);
          opacity: 0;
          filter: blur(8px) brightness(1);
        }
      }
      
      @keyframes poisonCloud {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        50% {
          transform: scale(1.5);
          opacity: 0.7;
          filter: blur(5px);
        }
        100% {
          transform: scale(2.5);
          opacity: 0;
          filter: blur(10px);
        }
      }
      
      @keyframes earthShatter {
        0% {
          transform: scale(0) translateY(0);
          opacity: 1;
        }
        50% {
          transform: scale(2) translateY(-20px);
          opacity: 0.8;
          filter: blur(3px);
        }
        100% {
          transform: scale(3) translateY(0);
          opacity: 0;
          filter: blur(6px);
        }
      }
      
      @keyframes windGust {
        0% {
          transform: translateX(0) scaleX(0);
          opacity: 0;
        }
        30% {
          transform: translateX(100px) scaleX(1.5);
          opacity: 1;
          filter: blur(3px);
        }
        70% {
          transform: translateX(200px) scaleX(1.2);
          opacity: 0.8;
          filter: blur(5px);
        }
        100% {
          transform: translateX(300px) scaleX(0);
          opacity: 0;
          filter: blur(8px);
        }
      }
      
      /* ELEMENTOS DE EFEITO */
      .dimensional-shift {
        animation: dimensionalShift 0.8s ease-out;
      }
      
      .quantum-flash {
        animation: quantumFlash 0.3s ease-in-out 2;
      }
      
      .ripple {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(66, 220, 255, 0.3);
        border: 2px solid rgba(66, 220, 255, 0.8);
        pointer-events: none;
        z-index: 450;
        animation: rippleEffect 1s ease-out forwards;
      }
      
      .sword-slash {
        position: absolute;
        width: 150px;
        height: 20px;
        background: linear-gradient(90deg, 
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.9) 50%,
          rgba(255, 255, 255, 0) 100%);
        clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
        filter: drop-shadow(0 0 10px #ffffff);
        pointer-events: none;
        z-index: 500;
        animation: swordSlash 0.6s ease-out forwards;
      }
      
      .energy-blast {
        position: absolute;
        width: 80px;
        height: 80px;
        background: radial-gradient(circle, 
          rgba(255, 100, 100, 0.9) 0%,
          rgba(255, 50, 50, 0.6) 50%,
          rgba(255, 0, 0, 0) 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 550;
        animation: energyBlast 0.8s ease-out forwards;
      }
      
      .shield-block {
        position: absolute;
        width: 120px;
        height: 120px;
        border: 4px solid rgba(100, 200, 255, 0.8);
        border-radius: 50%;
        pointer-events: none;
        z-index: 600;
        animation: shieldBlock 0.6s ease-out forwards;
      }
      
      .healing-pulse {
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: radial-gradient(circle,
          rgba(0, 255, 136, 0.6) 0%,
          rgba(0, 255, 136, 0.3) 50%,
          rgba(0, 255, 136, 0) 70%);
        pointer-events: none;
        z-index: 400;
        animation: healingPulse 1s ease-in-out infinite;
      }
      
      .lightning-strike {
        position: absolute;
        width: 8px;
        height: 100px;
        background: linear-gradient(to bottom,
          rgba(255, 255, 100, 0) 0%,
          rgba(255, 255, 100, 0.9) 30%,
          rgba(100, 200, 255, 0.9) 50%,
          rgba(66, 220, 255, 0) 100%);
        clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
        filter: drop-shadow(0 0 10px #42dcff);
        pointer-events: none;
        z-index: 650;
        animation: lightningStrike 0.5s ease-out forwards;
      }
      
      .fire-burn {
        position: absolute;
        width: 100px;
        height: 100px;
        background: radial-gradient(circle,
          rgba(255, 100, 0, 0.9) 0%,
          rgba(255, 50, 0, 0.6) 50%,
          rgba(255, 0, 0, 0) 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 700;
        animation: fireBurn 1s ease-out forwards;
      }
      
      .ice-freeze {
        position: absolute;
        width: 120px;
        height: 120px;
        background: radial-gradient(circle,
          rgba(100, 200, 255, 0.9) 0%,
          rgba(66, 220, 255, 0.6) 50%,
          rgba(0, 150, 255, 0) 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 650;
        animation: iceFreeze 1.2s ease-out forwards;
      }
      
      .poison-cloud {
        position: absolute;
        width: 150px;
        height: 150px;
        background: radial-gradient(circle,
          rgba(0, 255, 0, 0.4) 0%,
          rgba(50, 255, 50, 0.2) 50%,
          rgba(100, 255, 100, 0) 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 500;
        animation: poisonCloud 2s ease-out forwards;
      }
      
      .earth-shatter {
        position: absolute;
        width: 120px;
        height: 120px;
        background: radial-gradient(circle,
          rgba(139, 69, 19, 0.8) 0%,
          rgba(160, 82, 45, 0.5) 50%,
          rgba(210, 105, 30, 0) 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 550;
        animation: earthShatter 1s ease-out forwards;
      }
      
      .wind-gust {
        position: absolute;
        width: 200px;
        height: 40px;
        background: linear-gradient(90deg,
          rgba(200, 200, 255, 0) 0%,
          rgba(200, 200, 255, 0.6) 50%,
          rgba(200, 200, 255, 0) 100%);
        border-radius: 20px;
        filter: blur(5px);
        pointer-events: none;
        z-index: 450;
        animation: windGust 0.7s ease-out forwards;
      }
      
      /* SISTEMA DE PARTÍCULAS AVANÇADO */
      .particle {
        position: absolute;
        pointer-events: none;
        z-index: 800;
      }
      
      .particle-damage {
        background: #ff4444;
        border-radius: 50%;
        box-shadow: 0 0 10px #ff4444;
      }
      
      .particle-heal {
        background: #00ff88;
        border-radius: 50%;
        box-shadow: 0 0 10px #00ff88;
      }
      
      .particle-energy {
        background: #42dcff;
        border-radius: 50%;
        box-shadow: 0 0 10px #42dcff;
      }
      
      .particle-fire {
        background: #ff6600;
        border-radius: 50%;
        box-shadow: 0 0 15px #ff6600;
      }
      
      .particle-ice {
        background: #66ccff;
        border-radius: 50%;
        box-shadow: 0 0 15px #66ccff;
      }
      
      .particle-lightning {
        background: #ffff00;
        border-radius: 0;
        transform: rotate(45deg);
        box-shadow: 0 0 15px #ffff00;
      }
      
      /* ANIMAÇÕES DE DANO MELHORADAS */
      @keyframes damagePop {
        0% {
          transform: translateY(0) scale(0.5);
          opacity: 0;
          text-shadow: 0 0 0 rgba(255, 255, 255, 0);
        }
        20% {
          transform: translateY(-50px) scale(1.3);
          opacity: 1;
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
        }
        40% {
          transform: translateY(-60px) scale(1.2);
          opacity: 0.9;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
        }
        80% {
          transform: translateY(-100px) scale(1.1);
          opacity: 0.7;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
        }
        100% {
          transform: translateY(-150px) scale(0.9);
          opacity: 0;
          text-shadow: 0 0 0 rgba(255, 255, 255, 0);
        }
      }
      
      .damage-number {
        position: absolute;
        font-size: 28px;
        font-weight: 900;
        z-index: 1000;
        pointer-events: none;
        animation: damagePop 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }
      
      .damage-physical {
        color: #ff4444;
        text-shadow: 
          2px 2px 0 #000,
          0 0 10px #ff4444,
          0 0 20px #ff0000;
      }
      
      .damage-magical {
        color: #8844ff;
        text-shadow: 
          2px 2px 0 #000,
          0 0 10px #8844ff,
          0 0 20px #6600ff;
      }
      
      .damage-critical {
        color: #ffaa00;
        font-size: 36px;
        text-shadow: 
          2px 2px 0 #000,
          0 0 15px #ffaa00,
          0 0 30px #ff8800,
          0 0 45px #ff6600;
        animation: damagePop 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }
      
      .heal-number {
        color: #00ff88;
        text-shadow: 
          2px 2px 0 #000,
          0 0 10px #00ff88,
          0 0 20px #00cc66;
      }
      
      /* ANIMAÇÕES DE PERSONAGEM */
      @keyframes characterCharge {
        0% {
          transform: translateX(0) scale(1);
          filter: brightness(1) drop-shadow(0 0 0 rgba(255, 255, 255, 0));
        }
        30% {
          transform: translateX(40px) scale(1.1);
          filter: brightness(1.3) drop-shadow(0 0 20px rgba(255, 255, 255, 0.8));
        }
        70% {
          transform: translateX(40px) scale(1.1);
          filter: brightness(1.3) drop-shadow(0 0 20px rgba(255, 255, 255, 0.8));
        }
        100% {
          transform: translateX(0) scale(1);
          filter: brightness(1) drop-shadow(0 0 0 rgba(255, 255, 255, 0));
        }
      }
      
      @keyframes characterImpact {
        0% {
          transform: translateX(0) scale(1);
          filter: brightness(1) hue-rotate(0deg);
        }
        15% {
          transform: translateX(-30px) scale(0.95) rotate(-5deg);
          filter: brightness(2) hue-rotate(180deg) saturate(2);
        }
        35% {
          transform: translateX(20px) scale(0.97) rotate(3deg);
          filter: brightness(1.8) hue-rotate(270deg) saturate(1.5);
        }
        65% {
          transform: translateX(-10px) scale(0.98) rotate(-2deg);
          filter: brightness(1.5) hue-rotate(360deg) saturate(1.2);
        }
        85% {
          transform: translateX(5px) scale(0.99) rotate(1deg);
          filter: brightness(1.2) hue-rotate(450deg) saturate(1.1);
        }
        100% {
          transform: translateX(0) scale(1) rotate(0deg);
          filter: brightness(1) hue-rotate(0deg) saturate(1);
        }
      }
      
      .character-charge {
        animation: characterCharge 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      }
      
      .character-impact {
        animation: characterImpact 1s cubic-bezier(0.36, 0, 0.66, -0.56);
      }
      
      /* EFEITOS DE TELA */
      @keyframes screenShake {
        0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px) translateY(-5px) rotate(-0.5deg); }
        20%, 40%, 60%, 80% { transform: translateX(10px) translateY(5px) rotate(0.5deg); }
      }
      
      @keyframes screenFlash {
        0%, 100% { background-color: transparent; }
        50% { background-color: rgba(255, 255, 255, 0.3); }
      }
      
      .screen-shake {
        animation: screenShake 0.5s ease-out;
      }
      
      .screen-flash {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        animation: screenFlash 0.3s ease-out;
      }
      
      /* EFEITOS DE COMBO */
      @keyframes comboRush {
        0% {
          transform: scale(0) rotate(0deg);
          opacity: 0;
        }
        30% {
          transform: scale(1.5) rotate(180deg);
          opacity: 1;
          filter: brightness(2) drop-shadow(0 0 20px #ff6600);
        }
        70% {
          transform: scale(1.5) rotate(180deg);
          opacity: 1;
          filter: brightness(2) drop-shadow(0 0 20px #ff6600);
        }
        100% {
          transform: scale(3) rotate(360deg);
          opacity: 0;
          filter: brightness(1) drop-shadow(0 0 0 #ff6600);
        }
      }
      
      .combo-rush {
        position: absolute;
        width: 150px;
        height: 150px;
        background: radial-gradient(circle,
          rgba(255, 100, 0, 0.9) 0%,
          rgba(255, 50, 0, 0.6) 50%,
          rgba(255, 0, 0, 0) 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 750;
        animation: comboRush 0.8s ease-out forwards;
      }
      
      /* EFEITOS DE STATUS */
      .status-burn {
        filter: sepia(1) saturate(2) hue-rotate(-30deg);
        animation: quantumFlash 1s infinite;
      }
      
      .status-freeze {
        filter: hue-rotate(180deg) brightness(1.2) contrast(0.8);
        animation: pulse 2s infinite;
      }
      
      .status-poison {
        filter: hue-rotate(90deg) saturate(2);
        animation: shake 0.5s infinite;
      }
      
      .status-stun {
        filter: brightness(1.5) contrast(1.2);
        animation: stunEffect 0.5s infinite;
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
      }
      
      @keyframes stunEffect {
        0%, 100% { 
          filter: brightness(1) contrast(1) blur(0);
        }
        50% { 
          filter: brightness(1.8) contrast(0.7) blur(2px);
        }
      }
      
      /* EFEITOS DE VITÓRIA/DERROTA */
      @keyframes victoryGlow {
        0%, 100% {
          filter: drop-shadow(0 0 10px gold) brightness(1);
          transform: scale(1);
        }
        50% {
          filter: drop-shadow(0 0 30px gold) brightness(1.3);
          transform: scale(1.05);
        }
      }
      
      @keyframes defeatShake {
        0%, 100% { transform: translateX(0) rotate(0deg); }
        25% { transform: translateX(-20px) rotate(-5deg); }
        75% { transform: translateX(20px) rotate(5deg); }
      }
      
      .victory-glow {
        animation: victoryGlow 1s infinite alternate;
      }
      
      .defeat-shake {
        animation: defeatShake 0.5s ease-in-out 3;
      }
      
      /* BARRA DE COMBO */
      .combo-bar {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        height: 40px;
        background: linear-gradient(90deg,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(20, 20, 20, 0.8) 100%);
        border-radius: 20px;
        border: 3px solid #ff6600;
        overflow: hidden;
        z-index: 2000;
        display: none;
      }
      
      .combo-fill {
        height: 100%;
        background: linear-gradient(90deg,
          #ff3300,
          #ff6600,
          #ff9900,
          #ffcc00);
        border-radius: 20px;
        transition: width 0.3s ease;
        position: relative;
        overflow: hidden;
      }
      
      .combo-fill::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg,
          transparent 0%,
          rgba(255, 255, 255, 0.4) 50%,
          transparent 100%);
        animation: comboShimmer 1s infinite linear;
      }
      
      @keyframes comboShimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      .combo-text {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 18px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
      }
      
      /* INDICADORES DE STATS */
      .stat-buff {
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(90deg, 
          rgba(0, 255, 136, 0.2) 0%,
          rgba(0, 255, 136, 0.8) 50%,
          rgba(0, 255, 136, 0.2) 100%);
        color: white;
        padding: 5px 15px;
        border-radius: 15px;
        font-size: 12px;
        font-weight: bold;
        z-index: 300;
        animation: floatUp 2s ease-out forwards;
      }
      
      .stat-debuff {
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(90deg, 
          rgba(255, 68, 68, 0.2) 0%,
          rgba(255, 68, 68, 0.8) 50%,
          rgba(255, 68, 68, 0.2) 100%);
        color: white;
        padding: 5px 15px;
        border-radius: 15px;
        font-size: 12px;
        font-weight: bold;
        z-index: 300;
        animation: floatUp 2s ease-out forwards;
      }
      
      @keyframes floatUp {
        0% {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
        100% {
          transform: translateX(-50%) translateY(-50px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
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

      // Elementos para efeitos
      comboBar: document.createElement("div"),
      screenOverlay: document.createElement("div"),
    };

    // Adicionar elementos ao DOM
    if (this.elements.battleAnimationContainer) {
      this.elements.comboBar.className = "combo-bar";
      this.elements.comboBar.innerHTML = `
        <div class="combo-fill" style="width: 0%"></div>
        <div class="combo-text">COMBO: 0x</div>
      `;
      this.elements.battleAnimationContainer.appendChild(
        this.elements.comboBar,
      );

      this.elements.screenOverlay.className = "screen-flash";
      this.elements.screenOverlay.style.display = "none";
      document.body.appendChild(this.elements.screenOverlay);
    }
  }

  setupEventListeners() {
    // Listeners existentes...
    document.querySelectorAll(".character-select-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const player = parseInt(e.currentTarget.dataset.player);
        this.openCharacterSelector(player);
        this.gallery.audio.play("click");
      });
    });

    if (this.elements.startBattleBtn) {
      this.elements.startBattleBtn.addEventListener("click", () => {
        this.startBattle();
        this.gallery.audio.play("click");
      });
    }

    if (this.elements.resetBattleBtn) {
      this.elements.resetBattleBtn.addEventListener("click", () => {
        this.resetBattle();
        this.gallery.audio.play("click");
      });
    }

    if (this.elements.selectorClose) {
      this.elements.selectorClose.addEventListener("click", () => {
        this.closeCharacterSelector();
        this.gallery.audio.play("click");
      });
    }

    if (this.elements.backToGalleryFromBattle) {
      this.elements.backToGalleryFromBattle.addEventListener("click", () => {
        this.gallery.showGalleryPage();
        this.gallery.audio.play("click");
      });
    }

    if (this.elements.viewBattleBtn) {
      this.elements.viewBattleBtn.addEventListener("click", () => {
        this.showBattlePage();
        this.gallery.audio.play("click");
      });
    }

    if (this.elements.battleToggle) {
      this.elements.battleToggle.addEventListener("click", () => {
        this.showBattlePage();
        this.gallery.audio.play("click");
      });
    }

    if (this.elements.skipAnimationBtn) {
      this.elements.skipAnimationBtn.addEventListener("click", () => {
        this.skipAnimation();
        this.gallery.audio.play("click");
      });
    }

    if (this.elements.resultModalClose) {
      this.elements.resultModalClose.addEventListener("click", () => {
        this.closeResultModal();
        this.gallery.audio.play("click");
      });
    }

    if (this.elements.resultModalRematch) {
      this.elements.resultModalRematch.addEventListener("click", () => {
        this.rematch();
        this.gallery.audio.play("click");
      });
    }

    if (this.elements.clearHistoryBtn) {
      this.elements.clearHistoryBtn.addEventListener("click", () => {
        this.clearHistoryWithConfirmation();
        this.gallery.audio.play("click");
      });
    }

    if (this.elements.historyDetailClose) {
      this.elements.historyDetailClose.addEventListener("click", () => {
        this.closeHistoryDetail();
        this.gallery.audio.play("click");
      });
    }

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

  // SISTEMA DE PARTÍCULAS AVANÇADO
  initParticleSystem() {
    this.particleSystems = [];
    this.frameCount = 0;

    const updateParticles = () => {
      this.frameCount++;

      for (let i = this.particleSystems.length - 1; i >= 0; i--) {
        const system = this.particleSystems[i];
        const now = Date.now();

        if (now - system.startTime > system.duration) {
          system.container.remove();
          this.particleSystems.splice(i, 1);
          continue;
        }

        system.particles.forEach((particle, pIndex) => {
          const progress = (now - system.startTime) / system.duration;

          if (progress > particle.life) {
            particle.element.remove();
            system.particles.splice(pIndex, 1);
            return;
          }

          const x = particle.startX + particle.velocityX * progress * 100;
          const y =
            particle.startY +
            particle.velocityY * progress * 100 +
            (particle.gravity * Math.pow(progress * 100, 2)) / 2;

          const scale = 1 - progress / particle.life;
          const opacity = 1 - progress / particle.life;

          particle.element.style.left = `${x}px`;
          particle.element.style.top = `${y}px`;
          particle.element.style.transform = `scale(${scale}) rotate(${progress * 360}deg)`;
          particle.element.style.opacity = opacity;
        });

        if (system.particles.length === 0) {
          system.container.remove();
          this.particleSystems.splice(i, 1);
        }
      }

      if (this.particleSystems.length > 0 || this.animationActive) {
        requestAnimationFrame(updateParticles);
      }
    };

    // Iniciar loop de partículas quando necessário
    this.updateParticles = updateParticles;
  }

  createParticleSystem(type, x, y, options = {}) {
    const container = this.elements.battleAnimationContainer;
    const particleContainer = document.createElement("div");
    particleContainer.style.position = "absolute";
    particleContainer.style.left = "0";
    particleContainer.style.top = "0";
    particleContainer.style.width = "100%";
    particleContainer.style.height = "100%";
    particleContainer.style.pointerEvents = "none";
    particleContainer.style.zIndex = "800";

    container.appendChild(particleContainer);

    const system = {
      container: particleContainer,
      particles: [],
      startTime: Date.now(),
      duration: options.duration || 2000,
    };

    const particleCount = options.count || 30;
    const colors = {
      damage: ["#ff4444", "#ff0000", "#ff8888"],
      heal: ["#00ff88", "#00cc66", "#66ffaa"],
      energy: ["#42dcff", "#00aaff", "#88eeff"],
      fire: ["#ff6600", "#ff3300", "#ff9900"],
      ice: ["#66ccff", "#00aaff", "#aaddff"],
      lightning: ["#ffff00", "#ffcc00", "#ffff88"],
    };

    const typeColors = colors[type] || colors.damage;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = `particle particle-${type}`;

      const size = Math.random() * 8 + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.position = "absolute";
      particle.style.borderRadius = type === "lightning" ? "2px" : "50%";
      particle.style.backgroundColor =
        typeColors[Math.floor(Math.random() * typeColors.length)];
      particle.style.boxShadow = `0 0 ${size / 2}px currentColor`;

      const life = Math.random() * 0.8 + 0.2;
      const velocityX = (Math.random() - 0.5) * 10;
      const velocityY = (Math.random() - 0.5) * 10 - 5;
      const gravity = Math.random() * 0.05 + 0.02;

      system.particles.push({
        element: particle,
        startX: x,
        startY: y,
        velocityX,
        velocityY,
        gravity,
        life,
      });

      particleContainer.appendChild(particle);
    }

    this.particleSystems.push(system);

    if (this.particleSystems.length === 1) {
      this.updateParticles();
    }

    return system;
  }

  // NOVOS EFEITOS VISUAIS
  createBattleEffect(type, x, y, options = {}) {
    const container = this.elements.battleAnimationContainer;
    const effect = document.createElement("div");

    switch (type) {
      case "ripple":
        effect.className = "ripple";
        effect.style.left = `${x - 10}px`;
        effect.style.top = `${y - 10}px`;
        break;

      case "swordSlash":
        effect.className = "sword-slash";
        effect.style.left = `${x}px`;
        effect.style.top = `${y}px`;
        effect.style.transform = `rotate(${options.angle || -45}deg)`;
        break;

      case "energyBlast":
        effect.className = "energy-blast";
        effect.style.left = `${x - 40}px`;
        effect.style.top = `${y - 40}px`;
        break;

      case "shieldBlock":
        effect.className = "shield-block";
        effect.style.left = `${x - 60}px`;
        effect.style.top = `${y - 60}px`;
        break;

      case "healingPulse":
        effect.className = "healing-pulse";
        effect.style.left = `${x - 50}px`;
        effect.style.top = `${y - 50}px`;
        break;

      case "lightningStrike":
        effect.className = "lightning-strike";
        effect.style.left = `${x - 4}px`;
        effect.style.top = `${y}px`;
        effect.style.transform = `rotate(${options.angle || 0}deg)`;
        break;

      case "fireBurn":
        effect.className = "fire-burn";
        effect.style.left = `${x - 50}px`;
        effect.style.top = `${y - 50}px`;
        break;

      case "iceFreeze":
        effect.className = "ice-freeze";
        effect.style.left = `${x - 60}px`;
        effect.style.top = `${y - 60}px`;
        break;

      case "poisonCloud":
        effect.className = "poison-cloud";
        effect.style.left = `${x - 75}px`;
        effect.style.top = `${y - 75}px`;
        break;

      case "earthShatter":
        effect.className = "earth-shatter";
        effect.style.left = `${x - 60}px`;
        effect.style.top = `${y - 60}px`;
        break;

      case "windGust":
        effect.className = "wind-gust";
        effect.style.left = `${x}px`;
        effect.style.top = `${y - 20}px`;
        effect.style.transform = `rotate(${options.angle || 0}deg)`;
        break;

      case "comboRush":
        effect.className = "combo-rush";
        effect.style.left = `${x - 75}px`;
        effect.style.top = `${y - 75}px`;
        break;
    }

    container.appendChild(effect);
    this.effects.push(effect);

    const duration =
      options.duration ||
      (type === "healingPulse"
        ? 1000
        : type === "poisonCloud"
          ? 2000
          : type === "comboRush"
            ? 800
            : 1000);

    setTimeout(() => {
      if (effect.parentNode) effect.remove();
      this.effects = this.effects.filter((e) => e !== effect);
    }, duration);

    return effect;
  }

  applyCharacterEffect(characterElement, effectType) {
    switch (effectType) {
      case "dimensionalShift":
        characterElement.classList.add("dimensional-shift");
        setTimeout(() => {
          characterElement.classList.remove("dimensional-shift");
        }, 800);
        break;

      case "quantumFlash":
        characterElement.classList.add("quantum-flash");
        setTimeout(() => {
          characterElement.classList.remove("quantum-flash");
        }, 600);
        break;

      case "characterCharge":
        characterElement.classList.add("character-charge");
        setTimeout(() => {
          characterElement.classList.remove("character-charge");
        }, 600);
        break;

      case "characterImpact":
        characterElement.classList.add("character-impact");
        setTimeout(() => {
          characterElement.classList.remove("character-impact");
        }, 1000);
        break;

      case "victoryGlow":
        characterElement.classList.add("victory-glow");
        break;

      case "defeatShake":
        characterElement.classList.add("defeat-shake");
        setTimeout(() => {
          characterElement.classList.remove("defeat-shake");
        }, 1500);
        break;

      case "statusBurn":
        characterElement.classList.add("status-burn");
        setTimeout(() => {
          characterElement.classList.remove("status-burn");
        }, 3000);
        break;

      case "statusFreeze":
        characterElement.classList.add("status-freeze");
        setTimeout(() => {
          characterElement.classList.remove("status-freeze");
        }, 3000);
        break;

      case "statusPoison":
        characterElement.classList.add("status-poison");
        setTimeout(() => {
          characterElement.classList.remove("status-poison");
        }, 3000);
        break;

      case "statusStun":
        characterElement.classList.add("status-stun");
        setTimeout(() => {
          characterElement.classList.remove("status-stun");
        }, 3000);
        break;
    }
  }

  createScreenEffect(effectType) {
    switch (effectType) {
      case "screenShake":
        this.elements.battleAnimationContainer.classList.add("screen-shake");
        setTimeout(() => {
          this.elements.battleAnimationContainer.classList.remove(
            "screen-shake",
          );
        }, 500);
        break;

      case "screenFlash":
        this.elements.screenOverlay.style.display = "block";
        setTimeout(() => {
          this.elements.screenOverlay.style.display = "none";
        }, 300);
        break;
    }
  }

  createDamageNumber(
    x,
    y,
    damage,
    type = "physical",
    isCritical = false,
    isHeal = false,
  ) {
    const container = this.elements.battleAnimationContainer;
    const damageNumber = document.createElement("div");

    damageNumber.className = `damage-number ${
      isCritical ? "damage-critical" : isHeal ? "heal-number" : `damage-${type}`
    }`;
    damageNumber.textContent = isHeal ? `+${damage}` : `-${damage}`;
    damageNumber.style.left = `${x}px`;
    damageNumber.style.top = `${y}px`;

    if (isCritical) {
      damageNumber.textContent = `CRÍTICO! ${damage}`;
    }

    container.appendChild(damageNumber);
    this.damageNumbers.push(damageNumber);

    setTimeout(() => {
      if (damageNumber.parentNode) damageNumber.remove();
      this.damageNumbers = this.damageNumbers.filter((d) => d !== damageNumber);
    }, 1800);

    return damageNumber;
  }

  updateComboBar(comboCount) {
    const comboBar = this.elements.comboBar;
    const comboFill = comboBar.querySelector(".combo-fill");
    const comboText = comboBar.querySelector(".combo-text");

    if (comboCount > 1) {
      comboBar.style.display = "block";
      const fillPercentage = Math.min(100, comboCount * 10);
      comboFill.style.width = `${fillPercentage}%`;
      comboText.textContent = `COMBO: ${comboCount}x`;

      if (comboCount >= 5) {
        comboBar.style.borderColor = "#ff3300";
        comboFill.style.background =
          "linear-gradient(90deg, #ff0000, #ff6600, #ffcc00)";
      } else if (comboCount >= 3) {
        comboBar.style.borderColor = "#ff9900";
        comboFill.style.background =
          "linear-gradient(90deg, #ff6600, #ff9900, #ffcc00)";
      }
    } else {
      comboBar.style.display = "none";
    }
  }

  createStatIndicator(characterElement, text, isBuff = true) {
    const indicator = document.createElement("div");
    indicator.className = isBuff ? "stat-buff" : "stat-debuff";
    indicator.textContent = text;

    characterElement.appendChild(indicator);

    setTimeout(() => {
      if (indicator.parentNode) indicator.remove();
    }, 2000);
  }

  // MÉTODOS DE ANIMAÇÃO DE BATALHA MELHORADOS
  async startBattleAnimationWithRealResult(result) {
    return new Promise((resolve) => {
      const char1 =
        result.winner.character.id === this.selectedCharacters.player1.id
          ? result.winner
          : result.loser;
      const char2 =
        result.winner.character.id === this.selectedCharacters.player2.id
          ? result.winner
          : result.loser;

      const isWinnerPlayer1 =
        result.winner.character.id === this.selectedCharacters.player1.id;
      const winnerHealth = result.winner.currentHealth;
      const loserHealth = result.loser.currentHealth;
      const winnerTotalHealth = result.winner.health;
      const loserTotalHealth = result.loser.health;

      // Carregar imagens
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

      // Inicializar barras de HP
      this.updateHpBar(this.elements.hpBar1, this.elements.hpText1, 100);
      this.updateHpBar(this.elements.hpBar2, this.elements.hpText2, 100);

      // Efeito de entrada
      this.applyCharacterEffect(
        this.elements.animationChar1,
        "dimensionalShift",
      );
      this.applyCharacterEffect(
        this.elements.animationChar2,
        "dimensionalShift",
      );

      // Efeito de tela
      this.createScreenEffect("screenFlash");

      this.elements.battleAnimationContainer.classList.add("active");
      document.body.style.overflow = "hidden";

      let currentStep = 0;
      const totalSteps = 30;
      let comboCount = 0;
      let lastAttackStep = 0;

      const winnerFinalHealthPercent = (winnerHealth / winnerTotalHealth) * 100;
      const loserFinalHealthPercent = (loserHealth / loserTotalHealth) * 100;

      const animateStep = () => {
        if (!this.animationActive) {
          this.endAnimation();
          resolve();
          return;
        }

        currentStep++;
        const progress = (currentStep / totalSteps) * 100;
        this.elements.animationProgressBar.style.width = `${progress}%`;

        // Textos dinâmicos
        const texts = [
          "⚡ INICIALIZANDO SISTEMA QUÂNTICO...",
          "🌀 SINCRONIZANDO DIMENSÕES...",
          "💫 ESTABILIZANDO CAMPO DE BATALHA...",
          "🔥 CARREGANDO PODERES...",
          "⚔️ BATALHA QUÂNTICA INICIADA!",
          "🗡️ ATAQUE RÁPIDO!",
          "🛡️ DEFESA ATIVADA!",
          "⚡ RELÂMPAGO VELOZ!",
          "🔥 CHAMAS ARDENTES!",
          "❄️ CONGELAMENTO!",
          "💨 VENTANIA CORTANTE!",
          "⚡ CONTRA-ATAQUE!",
          "💥 EXPLOSÃO DE ENERGIA!",
          "🌀 DISTORÇÃO TEMPORAL!",
          "⚡ ATAQUE EM CADEIA!",
          "🔥 INFERNO EM CHAMAS!",
          "❄️ GEADA MORTAL!",
          "💨 TORNADO DESTRUIDOR!",
          "⚡ PODER SUPREMO!",
          "💥 COLISÃO FINAL!",
          "🔥 ULTRA EXPLOSÃO!",
          "❄️ CONGELAMENTO ABSOLUTO!",
          "💨 VENTO DA MORTE!",
          "⚡ RAIOS DA PERDIÇÃO!",
          "💥 MEGA EXPLOSÃO!",
          "🌟 PODER MÁXIMO!",
          "💫 ULTRA EVOLUÇÃO!",
          "⚡ ATAQUE DEFINITIVO!",
          "💥 COLAPSO FINAL!",
          "🏁 BATALHA CONCLUÍDA!",
        ];

        if (currentStep <= totalSteps) {
          this.elements.animationText.textContent = texts[currentStep - 1];

          // Efeitos de batalha
          if (currentStep >= 5 && currentStep <= 28) {
            const isPlayer1Attack = currentStep % 2 === 1;
            const attacker = isPlayer1Attack
              ? this.elements.animationChar1
              : this.elements.animationChar2;
            const defender = isPlayer1Attack
              ? this.elements.animationChar2
              : this.elements.animationChar1;

            // Efeito de ataque
            this.createAttackAnimation(
              attacker,
              defender,
              currentStep,
              isPlayer1Attack,
            );

            // Contador de combo
            if (currentStep - lastAttackStep === 1) {
              comboCount++;
              this.updateComboBar(comboCount);

              if (comboCount >= 3) {
                const rect = defender.getBoundingClientRect();
                const containerRect =
                  this.elements.battleAnimationContainer.getBoundingClientRect();
                const x = rect.left + rect.width / 2 - containerRect.left;
                const y = rect.top + rect.height / 2 - containerRect.top;
                this.createBattleEffect("comboRush", x, y);
              }
            } else {
              comboCount = 0;
              this.updateComboBar(0);
            }
            lastAttackStep = currentStep;

            // Aplicar dano progressivo
            if (currentStep >= 6 && currentStep <= 25) {
              const stepProgress = (currentStep - 5) / 20;
              const damageProgress = Math.pow(stepProgress, 1.5);

              const winnerCurrentHP = Math.max(
                winnerFinalHealthPercent,
                100 - (100 - winnerFinalHealthPercent) * damageProgress,
              );
              const loserCurrentHP = Math.max(
                loserFinalHealthPercent,
                100 - (100 - loserFinalHealthPercent) * damageProgress,
              );

              if (isWinnerPlayer1) {
                this.updateHpBar(
                  this.elements.hpBar1,
                  this.elements.hpText1,
                  winnerCurrentHP,
                );
                this.updateHpBar(
                  this.elements.hpBar2,
                  this.elements.hpText2,
                  loserCurrentHP,
                );
              } else {
                this.updateHpBar(
                  this.elements.hpBar1,
                  this.elements.hpText1,
                  loserCurrentHP,
                );
                this.updateHpBar(
                  this.elements.hpBar2,
                  this.elements.hpText2,
                  winnerCurrentHP,
                );
              }

              // Criar números de dano
              if (currentStep % 2 === 0) {
                this.createDamageEffects(
                  defender,
                  currentStep,
                  isPlayer1Attack,
                );
              }
            }

            // Efeitos especiais
            if (
              currentStep === 10 ||
              currentStep === 15 ||
              currentStep === 20 ||
              currentStep === 25
            ) {
              this.createSpecialAttack(currentStep, isPlayer1Attack);
            }
          }

          // Fim da batalha
          if (currentStep === totalSteps) {
            // Valores finais exatos
            if (isWinnerPlayer1) {
              this.updateHpBar(
                this.elements.hpBar1,
                this.elements.hpText1,
                winnerFinalHealthPercent,
              );
              this.updateHpBar(
                this.elements.hpBar2,
                this.elements.hpText2,
                loserFinalHealthPercent,
              );
            } else {
              this.updateHpBar(
                this.elements.hpBar1,
                this.elements.hpText1,
                loserFinalHealthPercent,
              );
              this.updateHpBar(
                this.elements.hpBar2,
                this.elements.hpText2,
                winnerFinalHealthPercent,
              );
            }

            // Efeito de vitória
            this.createVictorySequence(isWinnerPlayer1, result);
          }

          // Continuar animação
          const stepDuration =
            currentStep >= totalSteps - 3
              ? 600
              : currentStep >= 25
                ? 400
                : currentStep >= 20
                  ? 350
                  : currentStep >= 15
                    ? 300
                    : currentStep >= 10
                      ? 250
                      : 200;

          setTimeout(animateStep, stepDuration);
        } else {
          this.endAnimation();
          resolve();
        }
      };

      // Iniciar animação
      setTimeout(() => {
        animateStep();
      }, 1000);
    });
  }

  createAttackAnimation(attacker, defender, step, isPlayer1Attack) {
    // Efeito no atacante
    this.applyCharacterEffect(attacker, "characterCharge");

    // Efeito no defensor
    setTimeout(() => {
      this.applyCharacterEffect(defender, "characterImpact");
    }, 300);

    // Posições para efeitos
    const attackerRect = attacker.getBoundingClientRect();
    const defenderRect = defender.getBoundingClientRect();
    const containerRect =
      this.elements.battleAnimationContainer.getBoundingClientRect();

    const startX =
      attackerRect.left + attackerRect.width / 2 - containerRect.left;
    const startY =
      attackerRect.top + attackerRect.height / 2 - containerRect.top;
    const endX =
      defenderRect.left + defenderRect.width / 2 - containerRect.left;
    const endY = defenderRect.top + defenderRect.height / 2 - containerRect.top;

    // Tipos de ataque baseados no step
    const attackTypes = [
      "swordSlash",
      "energyBlast",
      "fireBurn",
      "iceFreeze",
      "lightningStrike",
      "windGust",
      "earthShatter",
    ];
    const attackType = attackTypes[step % attackTypes.length];

    // Criar efeito visual
    switch (attackType) {
      case "swordSlash":
        this.createBattleEffect("swordSlash", startX, startY, {
          angle:
            (Math.atan2(endY - startY, endX - startX) * 180) / Math.PI - 45,
        });
        break;

      case "energyBlast":
        this.createBattleEffect("energyBlast", endX, endY);
        this.createParticleSystem("energy", endX, endY, { count: 20 });
        break;

      case "fireBurn":
        this.createBattleEffect("fireBurn", endX, endY);
        this.createParticleSystem("fire", endX, endY, { count: 25 });
        break;

      case "iceFreeze":
        this.createBattleEffect("iceFreeze", endX, endY);
        this.createParticleSystem("ice", endX, endY, { count: 20 });
        break;

      case "lightningStrike":
        this.createBattleEffect("lightningStrike", endX, endY);
        this.createParticleSystem("lightning", endX, endY, { count: 15 });
        break;

      case "windGust":
        this.createBattleEffect("windGust", startX, startY, {
          angle: (Math.atan2(endY - startY, endX - startX) * 180) / Math.PI,
        });
        break;

      case "earthShatter":
        this.createBattleEffect("earthShatter", endX, endY);
        break;
    }

    // Efeito de ripple no impacto
    setTimeout(() => {
      this.createBattleEffect("ripple", endX, endY);
    }, 300);

    // Chance de efeito de tela
    if (step % 7 === 0) {
      this.createScreenEffect("screenShake");
    }

    // Chance de crítico (15%)
    const isCritical = Math.random() < 0.15;
    if (isCritical) {
      this.createScreenEffect("screenFlash");
      this.applyCharacterEffect(defender, "quantumFlash");
    }

    // Chance de status effect (10%)
    if (Math.random() < 0.1) {
      const statusEffects = [
        "statusBurn",
        "statusFreeze",
        "statusPoison",
        "statusStun",
      ];
      const statusEffect =
        statusEffects[Math.floor(Math.random() * statusEffects.length)];
      this.applyCharacterEffect(defender, statusEffect);

      // Indicador de status
      const statusTexts = {
        statusBurn: "QUEIMADO!",
        statusFreeze: "CONGELADO!",
        statusPoison: "ENVENENADO!",
        statusStun: "ATORDOADO!",
      };
      this.createStatIndicator(defender, statusTexts[statusEffect], false);
    }

    // Chance de buff (5%)
    if (Math.random() < 0.05) {
      this.applyCharacterEffect(attacker, "quantumFlash");
      this.createStatIndicator(attacker, "PODER AUMENTADO!", true);
    }
  }

  createDamageEffects(defender, step, isPlayer1Attack) {
    const defenderRect = defender.getBoundingClientRect();
    const containerRect =
      this.elements.battleAnimationContainer.getBoundingClientRect();

    const x = defenderRect.left + defenderRect.width / 2 - containerRect.left;
    const y = defenderRect.top - containerRect.top;

    const damageAmount = Math.floor(Math.random() * 35) + 20;
    const isCritical = Math.random() < 0.2;
    const damageType = Math.random() < 0.5 ? "physical" : "magical";

    // Número de dano
    this.createDamageNumber(x, y, damageAmount, damageType, isCritical);

    // Sistema de partículas
    if (isCritical) {
      this.createParticleSystem("energy", x, y, { count: 40, duration: 2500 });
    } else {
      this.createParticleSystem("damage", x, y, { count: 25, duration: 2000 });
    }

    // Efeito de impacto
    if (isCritical) {
      this.createBattleEffect("energyBlast", x, y);
      this.createBattleEffect("ripple", x, y);
    }
  }

  createSpecialAttack(step, isPlayer1Attack) {
    const attacker = isPlayer1Attack
      ? this.elements.animationChar1
      : this.elements.animationChar2;
    const defender = isPlayer1Attack
      ? this.elements.animationChar2
      : this.elements.animationChar1;

    const attackerRect = attacker.getBoundingClientRect();
    const defenderRect = defender.getBoundingClientRect();
    const containerRect =
      this.elements.battleAnimationContainer.getBoundingClientRect();

    const startX =
      attackerRect.left + attackerRect.width / 2 - containerRect.left;
    const startY =
      attackerRect.top + attackerRect.height / 2 - containerRect.top;
    const endX =
      defenderRect.left + defenderRect.width / 2 - containerRect.left;
    const endY = defenderRect.top + defenderRect.height / 2 - containerRect.top;

    switch (step) {
      case 10: // Ataque especial 1
        this.applyCharacterEffect(attacker, "dimensionalShift");
        this.createBattleEffect("energyBlast", endX, endY);
        this.createBattleEffect("ripple", endX, endY);
        this.createParticleSystem("energy", endX, endY, {
          count: 50,
          duration: 3000,
        });
        this.createScreenEffect("screenFlash");
        break;

      case 15: // Ataque especial 2
        this.applyCharacterEffect(attacker, "quantumFlash");
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            this.createBattleEffect(
              "lightningStrike",
              endX + (Math.random() * 100 - 50),
              endY + (Math.random() * 100 - 50),
            );
          }, i * 200);
        }
        this.createParticleSystem("lightning", endX, endY, {
          count: 40,
          duration: 2500,
        });
        break;

      case 20: // Ataque especial 3
        this.applyCharacterEffect(attacker, "characterCharge");
        this.createBattleEffect("fireBurn", endX, endY);
        this.createBattleEffect("iceFreeze", endX, endY);
        this.createParticleSystem("fire", endX, endY, {
          count: 60,
          duration: 3500,
        });
        this.createParticleSystem("ice", endX, endY, {
          count: 40,
          duration: 3000,
        });
        this.createScreenEffect("screenShake");
        break;

      case 25: // Ataque supremo
        this.applyCharacterEffect(attacker, "dimensionalShift");
        this.applyCharacterEffect(defender, "characterImpact");

        // Múltiplos efeitos
        const effects = [
          "fireBurn",
          "iceFreeze",
          "lightningStrike",
          "earthShatter",
          "windGust",
        ];
        effects.forEach((effect, i) => {
          setTimeout(() => {
            this.createBattleEffect(effect, endX, endY);
          }, i * 100);
        });

        // Sistema de partículas massivo
        this.createParticleSystem("energy", endX, endY, {
          count: 100,
          duration: 4000,
        });
        this.createParticleSystem("fire", endX, endY, {
          count: 80,
          duration: 3500,
        });
        this.createParticleSystem("ice", endX, endY, {
          count: 60,
          duration: 3000,
        });

        this.createScreenEffect("screenShake");
        this.createScreenEffect("screenFlash");
        break;
    }

    // Indicador de ataque especial
    this.createStatIndicator(attacker, "ATAQUE ESPECIAL!", true);
  }

  createVictorySequence(isWinnerPlayer1, result) {
    const winnerElement = isWinnerPlayer1
      ? this.elements.animationChar1
      : this.elements.animationChar2;
    const loserElement = isWinnerPlayer1
      ? this.elements.animationChar2
      : this.elements.animationChar1;

    // Efeitos no vencedor
    this.applyCharacterEffect(winnerElement, "victoryGlow");
    this.applyCharacterEffect(winnerElement, "quantumFlash");

    // Efeitos no perdedor
    this.applyCharacterEffect(loserElement, "defeatShake");

    // Efeitos de vitória
    const winnerRect = winnerElement.getBoundingClientRect();
    const containerRect =
      this.elements.battleAnimationContainer.getBoundingClientRect();
    const centerX = winnerRect.left + winnerRect.width / 2 - containerRect.left;
    const centerY = winnerRect.top + winnerRect.height / 2 - containerRect.top;

    // Sistema de partículas de vitória
    this.createParticleSystem("energy", centerX, centerY, {
      count: 80,
      duration: 5000,
    });
    this.createParticleSystem("heal", centerX, centerY, {
      count: 60,
      duration: 4000,
    });

    // Efeitos visuais
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.createBattleEffect("ripple", centerX, centerY);
        this.createBattleEffect("healingPulse", centerX, centerY);
      }, i * 300);
    }

    // Texto de vitória
    const victoryText = document.createElement("div");
    victoryText.className = "damage-number damage-critical";
    victoryText.textContent = result.underdogWin
      ? "🎲 VITÓRIA SURPRESA!"
      : "🏆 VITÓRIA!";
    victoryText.style.left = "50%";
    victoryText.style.top = "15%";
    victoryText.style.transform = "translateX(-50%)";
    victoryText.style.fontSize = "48px";
    victoryText.style.zIndex = "2000";

    this.elements.battleAnimationContainer.appendChild(victoryText);

    setTimeout(() => {
      if (victoryText.parentNode) victoryText.remove();
    }, 3000);
  }

  updateHpBar(barElement, textElement, newPercentage) {
    const currentWidth = parseFloat(barElement.style.width) || 100;
    const difference = currentWidth - newPercentage;

    if (difference > 20) {
      barElement.classList.add("hp-bar-pulse");
      setTimeout(() => {
        barElement.classList.remove("hp-bar-pulse");
      }, 1000);
    }

    barElement.style.width = `${Math.max(0, newPercentage)}%`;
    textElement.textContent = `${Math.max(0, Math.round(newPercentage))}%`;

    if (difference > 0) {
      barElement.parentNode.classList.add("damage-shake");
      setTimeout(() => {
        barElement.parentNode.classList.remove("damage-shake");
      }, 500);
    }
  }

  skipAnimation() {
    this.animationActive = false;

    // Efeito de transição
    this.createScreenEffect("screenFlash");

    // Mostrar resultado imediatamente
    if (this.battleResult) {
      this.createVictorySequence(
        this.battleResult.winner.character.id ===
          this.selectedCharacters.player1.id,
        this.battleResult,
      );

      setTimeout(() => {
        this.endAnimation();
      }, 1000);
    } else {
      this.endAnimation();
    }
  }

  endAnimation() {
    // Limpar todas as animações
    this.damageNumbers.forEach((number) => {
      if (number.parentNode) number.remove();
    });
    this.damageNumbers = [];

    this.effects.forEach((effect) => {
      if (effect.parentNode) effect.remove();
    });
    this.effects = [];

    // Limpar sistemas de partículas
    this.particleSystems.forEach((system) => {
      system.container.remove();
    });
    this.particleSystems = [];

    // Remover classes de animação
    [this.elements.animationChar1, this.elements.animationChar2].forEach(
      (char) => {
        if (char) {
          char.classList.remove(
            "dimensional-shift",
            "quantum-flash",
            "character-charge",
            "character-impact",
            "victory-glow",
            "defeat-shake",
            "status-burn",
            "status-freeze",
            "status-poison",
            "status-stun",
          );
          char.style.transform = "";
          char.style.filter = "";
          char.style.animation = "";
        }
      },
    );

    // Limpar efeitos de tela
    this.elements.battleAnimationContainer.classList.remove(
      "active",
      "screen-shake",
    );
    this.elements.screenOverlay.style.display = "none";

    // Esconder barra de combo
    this.elements.comboBar.style.display = "none";

    document.body.style.overflow = "";
  }

  // Resto dos métodos mantidos...
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

    if (this.selectedCharacters.player1 && this.selectedCharacters.player2) {
      this.elements.startBattleBtn.disabled = false;
      this.elements.startBattleBtn.innerHTML = `
                <i class="fas fa-play"></i>
                INICIAR BATALHA QUÂNTICA
            `;
    }
  }

  renderCharacterDisplay(character, player, healthPercent = null) {
    const display =
      player === 1
        ? this.elements.player1Display
        : this.elements.player2Display;
    if (!display) return;

    const normalizedPath = this.gallery.cache.normalizePath(character.image);
    const cachedImg = this.gallery.cache.imageCache.get(normalizedPath);
    const imgSrc = cachedImg ? cachedImg.src : character.image;

    const health =
      healthPercent !== null
        ? healthPercent
        : this.calculateHealth(character.stats);

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
                <div class="health-bar player-${player}" style="width: ${Math.max(0, health)}%"></div>
                <div class="health-text">SAÚDE: ${Math.max(0, Math.round(health))}%</div>
                <div class="health-stats">
                    <div class="health-stat">
                        <i class="fas fa-heart"></i>
                        <span>${Math.max(0, Math.round(health))}%</span>
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

  updateCharacterHealthAfterBattle(result) {
    const winnerHealthPercent = Math.round(
      (result.winner.currentHealth / result.winner.health) * 100,
    );
    const loserHealthPercent = Math.round(
      (result.loser.currentHealth / result.loser.health) * 100,
    );

    const isWinnerPlayer1 =
      result.winner.character.id === this.selectedCharacters.player1.id;

    if (isWinnerPlayer1) {
      this.renderCharacterDisplay(
        this.selectedCharacters.player1,
        1,
        Math.max(0, winnerHealthPercent),
      );
      this.renderCharacterDisplay(
        this.selectedCharacters.player2,
        2,
        Math.max(0, loserHealthPercent),
      );
    } else {
      this.renderCharacterDisplay(
        this.selectedCharacters.player1,
        1,
        Math.max(0, loserHealthPercent),
      );
      this.renderCharacterDisplay(
        this.selectedCharacters.player2,
        2,
        Math.max(0, winnerHealthPercent),
      );
    }
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

    this.elements.startBattleBtn.disabled = true;
    this.elements.startBattleBtn.innerHTML = `
            <i class="fas fa-spinner fa-spin"></i>
            BATALHA EM ANDAMENTO...
        `;

    this.animationActive = true;
    this.battleResult = null;

    const stats1 = this.calculateCharacterStats(
      this.selectedCharacters.player1,
    );
    const stats2 = this.calculateCharacterStats(
      this.selectedCharacters.player2,
    );

    this.battleResult = this.simulateBattle(stats1, stats2);

    await this.startBattleAnimationWithRealResult(this.battleResult);

    this.updateCharacterHealthAfterBattle(this.battleResult);

    this.saveToHistory(this.battleResult);

    this.showResultModalWithCharacterInfo(this.battleResult, stats1, stats2);

    this.elements.startBattleBtn.disabled = false;
    this.elements.startBattleBtn.innerHTML = `
            <i class="fas fa-play"></i>
            INICIAR BATALHA QUÂNTICA
        `;
    this.animationActive = false;

    this.gallery.audio.play("favorite");
  }

  calculateCharacterStats(character) {
    const stats = character.stats;

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

    const criticalChance = Math.min(
      30,
      Math.floor((stats.velocidade * 0.8 + stats.habilidade * 0.6) * 10) / 10,
    );

    const dodgeChance = Math.min(
      25,
      Math.floor((stats.velocidade * 1.2 + stats.habilidade * 0.5) * 10) / 10,
    );

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

  simulateBattle(stats1, stats2) {
    this.battleLog = [];
    this.elements.battleLog.innerHTML =
      "<h4 class='log-title'>REGISTRO DA BATALHA</h4>";

    this.addToLog(
      `🏁 BATALHA INICIADA: ${stats1.character.name} vs ${stats2.character.name}`,
      "start",
    );

    const powerDiff = Math.abs(stats1.totalPower - stats2.totalPower);
    let underdogBonus = 0;
    let underdogMessage = "";

    if (powerDiff > 80) {
      underdogBonus = 0.03 + Math.random() * 0.05;

      if (Math.random() < 0.3) {
        if (stats1.totalPower < stats2.totalPower) {
          stats1.attack *= 1 + underdogBonus;
          stats1.criticalChance += 1;
          underdogMessage = `${stats1.character.name} é o azarão! Recebe +${Math.round(underdogBonus * 100)}% de ataque (apenas por sorte!).`;
        } else {
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

    const advantage1 = this.calculateDynamicAdvantage(stats1, stats2);
    const advantage2 = this.calculateDynamicAdvantage(stats2, stats1);

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

    const maxRounds = Math.min(
      25,
      Math.max(
        8,
        Math.floor((stats1.totalPower + stats2.totalPower) / 100) * 3,
      ),
    );

    this.addToLog(`⏱️ Máximo de ${maxRounds} rounds.`, "info");

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

    let finalScore1 = score1;
    let finalScore2 = score2;

    if (stats1.totalPower < stats2.totalPower && Math.random() < 0.1) {
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

  calculateBalancedAttack(attacker, defender, round, isFavorite) {
    const dodgeRoll = Math.random() * 100;
    if (dodgeRoll < defender.dodgeChance) {
      return {
        damage: 0,
        critical: false,
        dodged: true,
        message: "ATAQUE ESQUIVADO! ⚡",
      };
    }

    let damage = attacker.attack;

    const defenseReduction = Math.min(
      75,
      (defender.defense / (defender.defense + 120)) * 100,
    );
    damage *= 1 - defenseReduction / 100;

    const criticalRoll = Math.random() * 100;
    let isCritical = criticalRoll < attacker.criticalChance;

    if (isFavorite && !isCritical) {
      isCritical = criticalRoll < attacker.criticalChance * 1.2;
    }

    if (isCritical) {
      damage *= 1.8 + Math.random() * 0.4;
    }

    if (round > 8) {
      const roundBonus = isFavorite ? 0.025 : 0.015;
      damage *= 1 + (round - 8) * roundBonus;
    }

    const randomFactor = isFavorite
      ? 0.9 + Math.random() * 0.2
      : 0.85 + Math.random() * 0.3;

    damage *= randomFactor;

    damage = Math.max(1, Math.floor(damage));

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

  calculateBalancedScore(
    stats,
    criticalHits,
    dodges,
    damageTaken,
    rounds,
    isFavorite,
  ) {
    const healthScore = (stats.currentHealth / stats.health) * 40;
    const powerScore = stats.totalPower * 0.35;

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

    advantage += (attacker.speed - defender.speed) * 0.7;
    advantage += (attacker.attack - defender.defense) * 0.4;
    advantage += (attacker.defense - defender.attack) * 0.3;
    advantage += (attacker.criticalChance - defender.dodgeChance) * 0.5;

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

    this.elements.battleLog.scrollTop = this.elements.battleLog.scrollHeight;
  }

  showResultModalWithCharacterInfo(result, stats1, stats2) {
    this.elements.resultModalTitle.textContent = "VITÓRIA QUÂNTICA!";

    if (result.underdogWin) {
      this.elements.resultModalWinner.innerHTML = `
        <div style="animation: bounce 1s infinite alternate;">
          🎲 SURPRESA!<br>${result.winnerName} VENCEU!<br>
          <small style="font-size: 0.8rem; color: #9b59b6;">(Vitória do Azarão!)</small>
        </div>
      `;

      const bounceStyle = document.createElement("style");
      bounceStyle.textContent = `
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }
      `;
      document.head.appendChild(bounceStyle);
    } else {
      this.elements.resultModalWinner.innerHTML = `
        <div style="animation: glow 2s infinite alternate;">
          🏆 <br> ${result.winnerName} VENCEU!
        </div>
      `;

      const glowStyle = document.createElement("style");
      glowStyle.textContent = `
        @keyframes glow {
          0% { text-shadow: 0 0 10px gold; }
          100% { text-shadow: 0 0 20px gold, 0 0 30px gold; }
        }
      `;
      document.head.appendChild(glowStyle);
    }

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

    const statsHTML = `
      <div class="result-stat" style="animation: slideInLeft 0.5s ease-out;">
        <div class="result-stat-label">VENCEDOR</div>
        <div class="result-stat-value" style="display: flex; align-items: center; gap: 10px;">
          <img src="${winnerImg}" alt="${result.winnerName}" 
               style="height: 170px; border-radius: 10px; border: 3px solid ${result.underdogWin ? "#9b59b6" : "var(--quantum-success)"};
                      animation: ${result.underdogWin ? "pulsePurple 1s infinite" : "pulseGreen 1s infinite"};">
          <div>
            <strong>${result.winnerName}</strong><br>
            <small>${categoryNames[result.winner.character.category] || result.winner.character.category}</small>
            ${result.underdogWin ? '<br><small style="color: #9b59b6;">🎲 Azarão Vitorioso!</small>' : ""}
          </div>
        </div>
      </div>
      <div class="result-stat" style="animation: slideInRight 0.5s ease-out 0.1s both;">
        <div class="result-stat-label">PERDEDOR</div>
        <div class="result-stat-value" style="display: flex; align-items: center; gap: 10px;">
          <img src="${loserImg}" alt="${result.loserName}" 
               style="height: 170px; border-radius: 10px; border: 3px solid var(--quantum-danger);">
          <div>
            <strong>${result.loserName}</strong><br>
            <small>${categoryNames[result.loser.character.category] || result.loser.character.category}</small>
          </div>
        </div>
      </div>
      <div class="result-stat" style="animation: fadeIn 0.5s ease-out 0.2s both;">
        <div class="result-stat-label">ROUNDS</div>
        <div class="result-stat-value">${result.rounds}</div>
      </div>
      <div class="result-stat" style="animation: fadeIn 0.5s ease-out 0.3s both;">
        <div class="result-stat-label">SAÚDE RESTANTE</div>
        <div class="result-stat-value">
          <span style="color: var(--quantum-success); font-weight: bold;">${winnerHealth}%</span> vs 
          <span style="color: var(--quantum-danger); font-weight: bold;">${loserHealth}%</span>
        </div>
      </div>
      <div class="result-stat" style="animation: fadeIn 0.5s ease-out 0.4s both;">
        <div class="result-stat-label">CRÍTICOS</div>
        <div class="result-stat-value" style="color: #ff9900; font-weight: bold;">
          ${result.criticalHits.player1 + result.criticalHits.player2}
        </div>
      </div>
      <div class="result-stat" style="animation: fadeIn 0.5s ease-out 0.5s both;">
        <div class="result-stat-label">ESQUIVAS</div>
        <div class="result-stat-value" style="color: #33ccff; font-weight: bold;">
          ${result.dodges.player1 + result.dodges.player2}
        </div>
      </div>
      ${result.winByPoints ? '<div class="result-stat" style="animation: fadeIn 0.5s ease-out 0.6s both;"><div class="result-stat-label">VITÓRIA POR</div><div class="result-stat-value">PONTOS</div></div>' : ""}
    `;

    this.elements.resultModalStats.innerHTML = statsHTML;

    const modalAnimations = document.createElement("style");
    modalAnimations.textContent = `
      @keyframes slideInLeft {
        from { transform: translateX(-50px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes slideInRight {
        from { transform: translateX(50px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes pulseGreen {
        0%, 100% { box-shadow: 0 0 10px var(--quantum-success); }
        50% { box-shadow: 0 0 20px var(--quantum-success); }
      }
      
      @keyframes pulsePurple {
        0%, 100% { box-shadow: 0 0 10px #9b59b6; }
        50% { box-shadow: 0 0 20px #9b59b6; }
      }
    `;
    document.head.appendChild(modalAnimations);

    setTimeout(() => {
      this.elements.battleResultModal.classList.add("active");
      document.body.style.overflow = "hidden";

      this.elements.battleResultModal.style.opacity = "0";
      this.elements.battleResultModal.style.transform = "scale(0.9)";

      setTimeout(() => {
        this.elements.battleResultModal.style.transition = "all 0.3s ease-out";
        this.elements.battleResultModal.style.opacity = "1";
        this.elements.battleResultModal.style.transform = "scale(1)";
      }, 10);
    }, 500);
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

    this.elements.startBattleBtn.disabled = true;
    this.elements.battleResults.classList.remove("show");
    this.elements.battleLog.innerHTML =
      "<h4 class='log-title'>REGISTRO DA BATALHA</h4>";

    this.gallery.showToast(
      "🔄 BATALHA REINICIADA • SELECIONE NOVOS PERSONAGENS",
    );
  }

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

    document.querySelectorAll(".history-item").forEach((item, index) => {
      item.addEventListener("click", () => {
        this.showHistoryDetail(this.history[index]);
      });
    });
  }

  showHistoryDetail(entry) {
    const body = this.elements.historyDetailBody;

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

  clearHistoryWithConfirmation() {
    this.gallery.showToast("🗑️ HISTÓRICO DE BATALHAS LIMPO COM SUCESSO!");

    this.history = [];
    this.saveHistory();
    this.renderHistory();

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

    if (this.gallery.elements.quantumUniverse) {
      this.gallery.elements.quantumUniverse.style.display = "none";
    }

    if (this.gallery.elements.quantumFavoritesPage) {
      this.gallery.elements.quantumFavoritesPage.style.display = "none";
      this.gallery.elements.quantumFavoritesPage.classList.remove("active");
      this.gallery.elements.quantumFavoritesPage.setAttribute("hidden", "");
    }

    if (this.elements.battlePage) {
      this.elements.battlePage.style.display = "block";
      this.elements.battlePage.classList.add("active");
      this.elements.battlePage.removeAttribute("hidden");

      setTimeout(() => {
        this.elements.battlePage.style.opacity = "1";
        this.elements.battlePage.style.transform = "translateY(0)";
      }, 50);
    }

    const favoritesIcon = document.getElementById("favoritesIcon");
    if (favoritesIcon) {
      favoritesIcon.className = "fas fa-heart";
    }

    document.title = "⚔️ SISTEMA DE BATALHA | NEXUS UNIVERSE 13/10";

    window.scrollTo({ top: 0, behavior: "smooth" });

    this.gallery.audio.play("click");

    this.gallery.showToast("⚔️ ACESSANDO SISTEMA DE BATALHA QUÂNTICA 13/10");

    this.renderHistory();
  }
}
