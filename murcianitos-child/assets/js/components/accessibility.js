import '../../css/components/accessibility.css';

export class AccessibilityWidget {
  constructor() {
    const defaults = {
      cursorBlack: false, cursorWhite: false, stopAnimations: false, muteSounds: false,
      dyslexiaFont: false, legibleFont: false, easyReading: false, readingMode: false, highlightTitles: false,
      highlightLinks: false, hideImages: false, focusMask: false, dictionary: false, textAlign: false,
      readingGuide: false, keyboardNav: false, smartNav: false,
      descWindows: false, screenReader: false, zoomNav: false,
      grayscale: false, invert: false, highContrast: false, lowBrightness: false, scaleText: false, fontSize: 1, letterSpacing: 0,
      lineHeight: 1.5, wordSpacing: 0, contrastVal: 100, saturateVal: 100, brightnessVal: 100,
      deuteranopia: false, deuteranomalia: false, protanopia: false,
      tritanopia: false, tritanomalia: false, acromatopsia: false
    };
    
    let saved = null;
    try {
      saved = JSON.parse(localStorage.getItem('murcianitos_acc'));
    } catch (e) {}

    this.state = { ...defaults, ...(saved || {}) };
    
    this.init();
  }

  init() {
    this.injectHTML();
    this.applyState();
    this.bindEvents();
    this.bindMouseTrackers();
  }

  injectHTML() {
    // Inject the floating button
    const btnHtml = `
      <div id="acc-floating-btn" class="acc-floating-btn" aria-label="Abrir menú de accesibilidad">
        <span class="material-symbols-outlined">accessibility_new</span>
      </div>
    `;

    // Inject the panel
    const panelHtml = `
      <div id="acc-panel" class="acc-panel">
        <div class="acc-panel-header">
          <h3><span class="material-symbols-outlined">accessibility_new</span> Accesibilidad</h3>
          <div class="acc-panel-actions">
            <button class="acc-icon-btn" id="acc-reset-btn" title="Restablecer ajustes"><span class="material-symbols-outlined">refresh</span></button>
            <button class="acc-icon-btn" id="acc-close-btn" title="Cerrar menú"><span class="material-symbols-outlined">close</span></button>
          </div>
        </div>
        <div class="acc-panel-body">
          
          <!-- Perfiles -->
          <div class="acc-section active">
            <div class="acc-section-header">Perfiles de Accesibilidad</div>
            <div class="acc-section-content acc-grid">
              <button class="acc-btn" data-profile="epilepsia">
                <span class="material-symbols-outlined">flash_off</span>
                Epilepsia
              </button>
              <button class="acc-btn" data-profile="aprendizaje">
                <span class="material-symbols-outlined">school</span>
                Aprendizaje
              </button>
              <button class="acc-btn" data-profile="visual">
                <span class="material-symbols-outlined">visibility</span>
                D. Visual
              </button>
              <button class="acc-btn" data-profile="mayores">
                <span class="material-symbols-outlined">elderly</span>
                Mayores
              </button>
              <button class="acc-btn" data-profile="tdah">
                <span class="material-symbols-outlined">psychology</span>
                TDAH
              </button>
              <button class="acc-btn" data-profile="dyslexia">
                <span class="material-symbols-outlined">sort_by_alpha</span>
                Dislexia
              </button>
            </div>
          </div>

          <!-- Navegación -->
          <div class="acc-section">
            <div class="acc-section-header">Herramientas de Navegación</div>
            <div class="acc-section-content acc-grid">
              <button class="acc-btn" data-toggle="cursorBlack"><span class="material-symbols-outlined">arrow_selector_tool</span> Cursor Negro</button>
              <button class="acc-btn" data-toggle="cursorWhite"><span class="material-symbols-outlined">near_me</span> Cursor Blanco</button>
              <button class="acc-btn" data-toggle="readingGuide"><span class="material-symbols-outlined">view_headline</span> Guía Lectura</button>
              <button class="acc-btn" data-toggle="keyboardNav"><span class="material-symbols-outlined">keyboard</span> Navegación por teclado</button>
              <button class="acc-btn" data-toggle="smartNav"><span class="material-symbols-outlined">sort_by_alpha</span> Navegación inteligente</button>
              <button class="acc-btn" data-toggle="descWindows"><span class="material-symbols-outlined">chat</span> Ventanas descriptivas</button>
              <button class="acc-btn" data-toggle="screenReader"><span class="material-symbols-outlined">record_voice_over</span> Lector de pantalla</button>
              <button class="acc-btn" data-toggle="zoomNav"><span class="material-symbols-outlined">zoom_out_map</span> Zoom</button>
            </div>
          </div>

          <!-- Contenido -->
          <div class="acc-section">
            <div class="acc-section-header">Herramientas de Contenido</div>
            <div class="acc-section-content acc-grid">
              <button class="acc-btn" data-toggle="stopAnimations"><span class="material-symbols-outlined">motion_photos_off</span> Bloquear Animaciones</button>
              <button class="acc-btn" data-toggle="muteSounds"><span class="material-symbols-outlined">volume_off</span> Silenciar sonidos</button>
              <button class="acc-btn" data-toggle="dyslexiaFont"><span class="material-symbols-outlined">match_case</span> Fuente Dislexia</button>
              <button class="acc-btn" data-toggle="legibleFont"><span class="material-symbols-outlined">font_download</span> Fuente Legible</button>
              <button class="acc-btn" data-toggle="easyReading"><span class="material-symbols-outlined">format_size</span> Lectura fácil</button>
              <button class="acc-btn" data-toggle="readingMode"><span class="material-symbols-outlined">menu_book</span> Modo de lectura</button>
              <button class="acc-btn" data-toggle="highlightTitles"><span class="material-symbols-outlined">title</span> Resaltar Títulos</button>
              <button class="acc-btn" data-toggle="highlightLinks"><span class="material-symbols-outlined">link</span> Resaltar Enlaces</button>
              <button class="acc-btn" data-toggle="hideImages"><span class="material-symbols-outlined">hide_image</span> Ocultar Imágenes</button>
              <button class="acc-btn" data-toggle="focusMask"><span class="material-symbols-outlined">center_focus_strong</span> Máscara Enfoque</button>
              <button class="acc-btn" data-toggle="dictionary"><span class="material-symbols-outlined">import_contacts</span> Diccionario</button>
              <button class="acc-btn" data-toggle="textAlign"><span class="material-symbols-outlined">format_align_left</span> Alinear textos</button>
            </div>
          </div>

          <!-- Color -->
          <div class="acc-section">
            <div class="acc-section-header">Herramientas de Color</div>
            <div class="acc-section-content acc-grid">
              <button class="acc-btn" data-toggle="highContrast"><span class="material-symbols-outlined">contrast</span> Alto Contraste</button>
              <button class="acc-btn" data-toggle="grayscale"><span class="material-symbols-outlined">palette</span> Escala de Grises</button>
              <button class="acc-btn" data-toggle="invert"><span class="material-symbols-outlined">invert_colors</span> Invertir Colores</button>
              <button class="acc-btn" data-toggle="lowBrightness"><span class="material-symbols-outlined">brightness_low</span> Brillo Bajo</button>
            </div>
          </div>
          
          <!-- Daltonismo -->
          <div class="acc-section">
            <div class="acc-section-header">Perfiles de Daltonismo</div>
            <div class="acc-section-content acc-grid">
              <button class="acc-btn" data-toggle="deuteranopia">Deuteranopia</button>
              <button class="acc-btn" data-toggle="deuteranomalia">Deuteranomalía</button>
              <button class="acc-btn" data-toggle="protanopia">Protanopia</button>
              <button class="acc-btn" data-toggle="tritanopia">Tritanopia</button>
              <button class="acc-btn" data-toggle="tritanomalia">Tritanomalía</button>
              <button class="acc-btn" data-toggle="acromatopsia">Acromatopsia</button>
            </div>
          </div>
          
        </div>
      </div>

      <!-- DOM Injected Tools -->
      <div id="acc-backdrop-filter-layer" class="acc-backdrop-filter-layer"></div>
      <div id="acc-reading-guide" class="acc-reading-guide"></div>
      <div id="acc-focus-mask" class="acc-focus-mask"></div>

      <!-- SVG Filters for Color Blindness -->
      <svg style="width:0; height:0; position:absolute; visibility:hidden;" aria-hidden="true">
        <defs>
          <filter id="acc-deuteranopia">
            <feColorMatrix type="matrix" values="0.625 0.375 0 0 0  0.7 0.3 0 0 0  0 0.3 0.7 0 0  0 0 0 1 0"/>
          </filter>
          <filter id="acc-deuteranomalia">
            <feColorMatrix type="matrix" values="0.8 0.2 0 0 0  0.258 0.742 0 0 0  0 0.142 0.858 0 0  0 0 0 1 0"/>
          </filter>
          <filter id="acc-protanopia">
            <feColorMatrix type="matrix" values="0.567 0.433 0 0 0  0.558 0.442 0 0 0  0 0.242 0.758 0 0  0 0 0 1 0"/>
          </filter>
          <filter id="acc-tritanopia">
            <feColorMatrix type="matrix" values="0.95 0.05 0 0 0  0 0.433 0.567 0 0  0 0.475 0.525 0 0  0 0 0 1 0"/>
          </filter>
          <filter id="acc-tritanomalia">
            <feColorMatrix type="matrix" values="0.967 0.033 0 0 0  0 0.733 0.267 0 0  0 0.183 0.817 0 0  0 0 0 1 0"/>
          </filter>
          <filter id="acc-acromatopsia">
            <feColorMatrix type="matrix" values="0.299 0.587 0.114 0 0  0.299 0.587 0.114 0 0  0.299 0.587 0.114 0 0  0 0 0 1 0"/>
          </filter>
        </defs>
      </svg>
    `;

    const container = document.createElement('div');
    container.id = 'acc-widget-container';
    container.innerHTML = btnHtml + panelHtml;
    document.body.appendChild(container);
  }

  bindEvents() {
    // Open/Close Panel
    document.getElementById('acc-floating-btn').addEventListener('click', () => {
      document.getElementById('acc-panel').classList.toggle('active');
    });

    document.getElementById('acc-close-btn').addEventListener('click', () => {
      document.getElementById('acc-panel').classList.remove('active');
    });

    // Accordion Sections
    document.querySelectorAll('.acc-section-header').forEach(header => {
      header.addEventListener('click', () => {
        header.parentElement.classList.toggle('active');
      });
    });

    // Toggle Buttons
    document.querySelectorAll('.acc-btn[data-toggle]').forEach(btn => {
      const key = btn.dataset.toggle;
      // Set initial active class
      if (this.state[key]) btn.classList.add('active');
      
      btn.addEventListener('click', () => {
        // Toggle state
        this.state[key] = !this.state[key];
        btn.classList.toggle('active', this.state[key]);
        
        // Remove active state from profile buttons if user manually toggles
        document.querySelectorAll('.acc-btn[data-profile]').forEach(pBtn => pBtn.classList.remove('active'));
        
        // Handle mutual exclusives
        if (key === 'cursorBlack' && this.state[key]) {
          this.state.cursorWhite = false;
          document.querySelector('[data-toggle="cursorWhite"]').classList.remove('active');
        } else if (key === 'cursorWhite' && this.state[key]) {
          this.state.cursorBlack = false;
          document.querySelector('[data-toggle="cursorBlack"]').classList.remove('active');
        }
        
        // Daltonismo mutual exclusives
        const daltonismoKeys = ['deuteranopia', 'deuteranomalia', 'protanopia', 'tritanopia', 'tritanomalia', 'acromatopsia'];
        if (daltonismoKeys.includes(key) && this.state[key]) {
          daltonismoKeys.forEach(k => {
            if (k !== key) {
              this.state[k] = false;
              const tBtn = document.querySelector(`[data-toggle="${k}"]`);
              if (tBtn) tBtn.classList.remove('active');
            }
          });
        }
        if (key === 'dyslexiaFont' && this.state[key]) {
          this.state.legibleFont = false;
          document.querySelector('[data-toggle="legibleFont"]').classList.remove('active');
        }
        if (key === 'legibleFont' && this.state[key]) {
          this.state.dyslexiaFont = false;
          document.querySelector('[data-toggle="dyslexiaFont"]').classList.remove('active');
        }

        this.applyState();
        this.saveState();
      });
    });

    // Profiles
    document.querySelectorAll('.acc-btn[data-profile]').forEach(btn => {
      btn.addEventListener('click', () => {
        // If the profile is already active, clicking it again should reset it
        if (btn.classList.contains('active')) {
          document.getElementById('acc-reset-btn').click();
          return;
        }

        // Remove active class from all profile buttons
        document.querySelectorAll('.acc-btn[data-profile]').forEach(pBtn => pBtn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');

        // Reset state so tools don't accumulate incorrectly between profiles
        // We only reset the boolean toggles
        const activeProfile = btn.dataset.profile;
        document.getElementById('acc-reset-btn').click(); 
        // Note: the click above will clear the profile active class too, so we re-apply it
        btn.classList.add('active');

        const profile = btn.dataset.profile;
        if (profile === 'dyslexia') {
          this.state.dyslexiaFont = true;
          this.state.readingGuide = true;
        } else if (profile === 'visual') {
          this.state.cursorBlack = true;
          this.state.highContrast = true;
          this.state.highlightTitles = true;
        } else if (profile === 'epilepsia') {
          this.state.stopAnimations = true;
          this.state.invert = false; 
        } else if (profile === 'aprendizaje') {
          this.state.readingGuide = true;
          this.state.legibleFont = true;
          this.state.focusMask = true;
        } else if (profile === 'mayores') {
          this.state.legibleFont = true;
          this.state.highContrast = true;
          this.state.scaleText = true; 
        } else if (profile === 'tdah') {
          this.state.focusMask = true;
          this.state.stopAnimations = true;
        }
        
        // Update UI for toggle buttons
        document.querySelectorAll('.acc-btn[data-toggle]').forEach(tBtn => {
          tBtn.classList.toggle('active', this.state[tBtn.dataset.toggle]);
        });

        this.applyState();
        this.saveState();
      });
    });

    // Reset
    document.getElementById('acc-reset-btn').addEventListener('click', () => {
      this.resetState();
    });
  }

  bindMouseTrackers() {
    const guide = document.getElementById('acc-reading-guide');
    const mask = document.getElementById('acc-focus-mask');

    window.addEventListener('mousemove', (e) => {
      if (this.state.readingGuide) {
        guide.style.top = e.clientY + 'px';
      }
      if (this.state.focusMask) {
        // Update radial gradient position
        mask.style.background = `radial-gradient(circle 150px at ${e.clientX}px ${e.clientY}px, transparent 0%, rgba(0, 0, 0, 0.7) 100%)`;
      }
    });
  }

  applyState() {
    const b = document.body;
    const s = this.state;
    
    // Toggle Classes
    b.classList.toggle('acc-cursor-black', !!s.cursorBlack);
    b.classList.toggle('acc-cursor-white', !!s.cursorWhite);
    b.classList.toggle('acc-stop-animations', !!s.stopAnimations);
    b.classList.toggle('acc-font-dyslexia', !!s.dyslexiaFont);
    b.classList.toggle('acc-font-legible', !!s.legibleFont);
    b.classList.toggle('acc-highlight-titles', !!s.highlightTitles);
    b.classList.toggle('acc-highlight-links', !!s.highlightLinks);
    b.classList.toggle('acc-hide-images', !!s.hideImages);
    b.classList.toggle('acc-focus-active', !!s.focusMask);
    b.classList.toggle('acc-reading-guide-active', !!s.readingGuide);
    b.classList.toggle('acc-keyboard-nav', !!s.keyboardNav);
    b.classList.toggle('acc-smart-nav', !!s.smartNav);
    b.classList.toggle('acc-zoom-nav', !!s.zoomNav);
    b.classList.toggle('acc-filter-grayscale', !!s.grayscale);
    b.classList.toggle('acc-filter-invert', !!s.invert);
    b.classList.toggle('acc-filter-high-contrast', !!s.highContrast);
    b.classList.toggle('acc-low-brightness', !!s.lowBrightness);
    b.classList.toggle('acc-text-large', !!s.scaleText);
    b.classList.toggle('acc-align-left', !!s.textAlign);
    b.classList.toggle('acc-easy-reading', !!s.easyReading);

    this.toggleMuteSounds(!!s.muteSounds);
    this.toggleReadingMode(!!s.readingMode);
    this.toggleDictionary(!!s.dictionary);
    this.toggleDescWindows(!!s.descWindows);
    this.toggleScreenReader(!!s.screenReader);

    // Daltonismo CSS classes
    b.classList.toggle('acc-deuteranopia', !!s.deuteranopia);
    b.classList.toggle('acc-deuteranomalia', !!s.deuteranomalia);
    b.classList.toggle('acc-protanopia', !!s.protanopia);
    b.classList.toggle('acc-tritanopia', !!s.tritanopia);
    b.classList.toggle('acc-tritanomalia', !!s.tritanomalia);
    b.classList.toggle('acc-acromatopsia', !!s.acromatopsia);

    // Stop GSAP animations
    if (typeof window !== 'undefined' && window.gsap) {
      if (s.stopAnimations) {
        window.gsap.globalTimeline.pause();
      } else {
        window.gsap.globalTimeline.play();
      }
    }
  }

  saveState() {
    localStorage.setItem('murcianitos_acc', JSON.stringify(this.state));
  }

  resetState() {
    this.state = {
      cursorBlack: false, cursorWhite: false, stopAnimations: false, muteSounds: false,
      dyslexiaFont: false, legibleFont: false, easyReading: false, readingMode: false, highlightTitles: false,
      highlightLinks: false, hideImages: false, focusMask: false, dictionary: false, textAlign: false,
      readingGuide: false, keyboardNav: false, smartNav: false,
      descWindows: false, screenReader: false, zoomNav: false,
      grayscale: false, invert: false, highContrast: false, lowBrightness: false, scaleText: false, fontSize: 1, letterSpacing: 0,
      lineHeight: 1.5, wordSpacing: 0, contrastVal: 100, saturateVal: 100, brightnessVal: 100,
      deuteranopia: false, deuteranomalia: false, protanopia: false,
      tritanopia: false, tritanomalia: false, acromatopsia: false
    };
    document.querySelectorAll('.acc-btn').forEach(btn => btn.classList.remove('active'));
    this.applyState();
    this.saveState();
  }

  // --- New Nav Tools Implementations ---

  toggleDescWindows(active) {
    if (!active) {
      if (this.descTooltip) {
        this.descTooltip.remove();
        this.descTooltip = null;
      }
      if (this.handleDescWindows) {
        document.body.removeEventListener('mouseover', this.handleDescWindows);
        document.body.removeEventListener('mousemove', this.moveDescWindows);
      }
      return;
    }

    this.descTooltip = document.createElement('div');
    this.descTooltip.className = 'acc-desc-tooltip';
    document.body.appendChild(this.descTooltip);

    this.handleDescWindows = (e) => {
      const el = e.target.closest('a, button, img, input, [aria-label]');
      if (!el || el.closest('#acc-widget-container')) {
        this.descTooltip.style.opacity = '0';
        return;
      }
      const text = el.getAttribute('aria-label') || el.getAttribute('alt') || el.getAttribute('title') || el.innerText;
      if (text && text.trim()) {
        this.descTooltip.innerText = text.trim();
        this.descTooltip.style.opacity = '1';
      } else {
        this.descTooltip.style.opacity = '0';
      }
    };
    
    this.moveDescWindows = (e) => {
      if (this.descTooltip.style.opacity === '1') {
        let x = e.clientX + 15;
        let y = e.clientY + 15;
        
        // Prevent tooltip from overflowing the right edge
        if (x + this.descTooltip.offsetWidth > window.innerWidth) {
          x = e.clientX - this.descTooltip.offsetWidth - 15;
        }
        // Prevent tooltip from overflowing the bottom edge
        if (y + this.descTooltip.offsetHeight > window.innerHeight) {
          y = e.clientY - this.descTooltip.offsetHeight - 15;
        }
        
        this.descTooltip.style.left = x + 'px';
        this.descTooltip.style.top = y + 'px';
      }
    };

    document.body.addEventListener('mouseover', this.handleDescWindows);
    document.body.addEventListener('mousemove', this.moveDescWindows);
  }

  toggleScreenReader(active) {
    if (!active) {
      if (this.handleScreenReader) {
        document.body.removeEventListener('mouseover', this.handleScreenReader);
      }
      window.speechSynthesis.cancel();
      return;
    }

    let speechTimer;
    this.handleScreenReader = (e) => {
      clearTimeout(speechTimer);
      const el = e.target.closest('p, h1, h2, h3, h4, h5, h6, a, button, img, li');
      if (!el || el.closest('#acc-widget-container')) return;
      
      const text = el.getAttribute('aria-label') || el.getAttribute('alt') || el.innerText;
      if (text && text.trim()) {
        speechTimer = setTimeout(() => {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text.trim());
          window.speechSynthesis.speak(utterance);
        }, 400);
      }
    };

    document.body.addEventListener('mouseover', this.handleScreenReader);
  }

  toggleMuteSounds(active) {
    document.querySelectorAll('audio, video').forEach(media => {
      media.muted = active;
    });
    // Optional: add a MutationObserver if media elements are added dynamically
  }

  toggleReadingMode(active) {
    let panel = document.getElementById('acc-reading-mode-panel');
    if (!active) {
      if (panel) panel.style.display = 'none';
      document.body.style.overflow = '';
      return;
    }

    if (!panel) {
      panel = document.createElement('div');
      panel.id = 'acc-reading-mode-panel';
      panel.className = 'acc-reading-mode-panel';
      
      const closeBtn = document.createElement('button');
      closeBtn.className = 'acc-reading-mode-close';
      closeBtn.innerHTML = '&times; Cerrar Modo Lectura';
      closeBtn.onclick = () => {
        this.state.readingMode = false;
        document.querySelector('[data-toggle="readingMode"]').classList.remove('active');
        this.applyState();
        this.saveState();
      };

      const content = document.createElement('div');
      content.id = 'acc-reading-mode-content';
      
      panel.appendChild(closeBtn);
      panel.appendChild(content);
      document.body.appendChild(panel);
    }

    // Extract only pure text content (headings and paragraphs) for a clean reading experience
    const mainEl = document.querySelector('main, article, .content') || document.body;
    const cleanContent = document.createElement('div');
    
    // Extract headings and paragraphs
    mainEl.querySelectorAll('h1, h2, h3, h4, h5, h6, p').forEach(el => {
      // Skip empty or hidden elements, and skip anything inside the widget itself
      if (el.closest('.acc-widget-wrapper, #acc-widget-container')) return;
      if (!el.innerText.trim()) return;
      
      const newEl = document.createElement(el.tagName);
      newEl.innerText = el.innerText;
      
      // Basic styling for the clean view
      if (el.tagName.startsWith('H')) {
        newEl.style.marginTop = '40px';
        newEl.style.marginBottom = '20px';
        newEl.style.fontWeight = 'bold';
      } else {
        newEl.style.marginBottom = '20px';
      }
      
      cleanContent.appendChild(newEl);
    });
    
    panel.querySelector('#acc-reading-mode-content').innerHTML = '';
    panel.querySelector('#acc-reading-mode-content').appendChild(cleanContent);
    panel.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  toggleDictionary(active) {
    if (!active) {
      if (this.dictTooltip) {
        this.dictTooltip.remove();
        this.dictTooltip = null;
      }
      if (this.handleDictionarySelect) {
        document.removeEventListener('mouseup', this.handleDictionarySelect);
      }
      return;
    }

    this.dictTooltip = document.createElement('div');
    this.dictTooltip.className = 'acc-dict-tooltip';
    
    // Initial instruction toast
    this.dictTooltip.innerHTML = '<strong>Diccionario Activo</strong><br><small>Selecciona cualquier palabra del texto para ver su significado.</small>';
    this.dictTooltip.style.left = '50%';
    this.dictTooltip.style.top = '20px';
    this.dictTooltip.style.transform = 'translateX(-50%)';
    this.dictTooltip.style.opacity = '1';
    
    document.body.appendChild(this.dictTooltip);

    // Hide instruction after 4 seconds
    setTimeout(() => {
      if (this.dictTooltip && this.dictTooltip.innerHTML.includes('Diccionario Activo')) {
        this.dictTooltip.style.opacity = '0';
      }
    }, 4000);

    this.handleDictionarySelect = async (e) => {
      // Don't trigger if clicking inside the tooltip itself
      if (e.target.closest('.acc-dict-tooltip') || e.target.closest('#acc-widget-container')) return;

      const selection = window.getSelection().toString().trim();
      if (!selection || selection.split(' ').length > 3) {
        this.dictTooltip.style.opacity = '0';
        this.dictTooltip.style.pointerEvents = 'none';
        return;
      }

      // Reset transform for normal tooltip behavior
      this.dictTooltip.style.transform = 'none';
      this.dictTooltip.innerHTML = 'Buscando...';
      this.dictTooltip.style.left = e.pageX + 'px';
      this.dictTooltip.style.top = (e.pageY + 20) + 'px';
      this.dictTooltip.style.opacity = '1';
      this.dictTooltip.style.pointerEvents = 'auto';

      try {
        const response = await fetch(`https://es.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=2&exlimit=1&titles=${encodeURIComponent(selection)}&explaintext=1&formatversion=2&format=json&origin=*`);
        const data = await response.json();
        const page = data.query.pages[0];
        
        if (page.missing) {
          this.dictTooltip.innerHTML = `<strong>${selection}</strong><br><small>No se encontró en Wikipedia.</small>`;
        } else {
          this.dictTooltip.innerHTML = `<strong>${page.title}</strong><hr style="margin:4px 0; border-color: rgba(255,255,255,0.2);"><p style="margin:0; font-size: 0.9em; line-height: 1.4;">${page.extract}</p>`;
        }
      } catch (err) {
        this.dictTooltip.innerHTML = `<strong>Error</strong><br><small>No se pudo conectar al diccionario.</small>`;
      }
    };

    document.addEventListener('mouseup', this.handleDictionarySelect);
  }
}

// Global Init function to be called from main.js
export function initAccessibilityWidget() {
  window.accWidget = new AccessibilityWidget();
}
