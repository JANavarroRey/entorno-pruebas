(()=>{var E="../images/icononegro.webp";var H="../images/iconoblanco.webp";function A(){let o=document.querySelector(".site-header");if(!o)return;window.addEventListener("scroll",()=>{window.scrollY>50?o.classList.add("is-scrolled"):o.classList.remove("is-scrolled")},{passive:!0});let e=o.querySelector(".mobile-toggle"),t=document.body;e&&e.addEventListener("click",()=>{let a=e.querySelector(".material-symbols-outlined");o.classList.toggle("is-menu-open"),o.classList.contains("is-menu-open")?(t.style.overflow="hidden",a&&(a.textContent="close")):(t.style.overflow="",a&&(a.textContent="menu"))})}function X(){let o=window.location.pathname.toLowerCase();return`
    <header class="site-header ${o.includes("historia")||o.includes("blog")||o.includes("carta")||o.includes("pedir-ahora")||o.includes("contacto")||o.includes("faq")||o.includes("alergenos")||o.includes("privacidad")||o.includes("aviso-legal")||o.includes("cookies")||o.includes("accesibilidad")?"is-light-theme":""}">
      <div class="container header-container">
        <!-- Mobile Toggle -->
        <button class="mobile-toggle" aria-label="Abrir men\xFA" style="z-index: 2; position: relative;">
          <span class="material-symbols-outlined">menu</span>
        </button>

        <!-- Desktop Nav Left -->
        <nav class="header-nav-left">
          <a href="./index.html" class="nav-link ${o==="/"||o.includes("index.html")?"active":""}">Inicio</a>
          <a href="./nuestra-historia.html" class="nav-link ${o.includes("historia")?"active":""}">Historia</a>
          <a href="./carta.html" class="nav-link ${o.includes("carta")?"active":""}">Carta</a>
        </nav>

        <!-- Center Logo -->
        <a href="./index.html" class="header-logo" style="z-index: 2; position: relative;">
          <img src="${H}" alt="Murcianitos" class="logo-light" />
          <img src="${E}" alt="Murcianitos" class="logo-dark" />
        </a>

        <!-- Desktop Nav Right -->
        <nav class="header-nav-right">
          <a href="./eventos.html" class="nav-link ${o.includes("eventos")?"active":""}">Eventos</a>
          <a href="./blog.html" class="nav-link ${o.includes("blog")?"active":""}">Blog</a>
          <a href="./pedir-ahora.html" class="btn btn-primary" style="margin-left: var(--space-md);">Pedir Ahora</a>
        </nav>

        <!-- Mobile CTA -->
        <div class="mobile-cta" style="z-index: 2; position: relative;">
          <a href="./pedir-ahora.html" class="btn" style="border: 1px solid rgba(197, 160, 89, 0.5); color: var(--color-gold); background: transparent; padding: 6px 14px; font-size: 0.75rem; font-family: var(--font-label); text-transform: uppercase; letter-spacing: 0.1em; border-radius: 4px;">Pedir</a>
        </div>
        
        <!-- Mobile Menu Overlay -->
        <div class="mobile-menu-overlay">
          <nav class="mobile-nav">
            <a href="./index.html" class="nav-link ${o==="/"||o.includes("index.html")?"active":""}">Inicio</a>
            <a href="./nuestra-historia.html" class="nav-link ${o.includes("historia")?"active":""}">Historia</a>
            <a href="./carta.html" class="nav-link ${o.includes("carta")?"active":""}">Carta</a>
            <a href="./eventos.html" class="nav-link ${o.includes("eventos")?"active":""}">Eventos</a>
            <a href="./blog.html" class="nav-link ${o.includes("blog")?"active":""}">Blog</a>
          </nav>
        </div>
      </div>
    </header>
  `}var u="../images/logoblanconew.webp";function y(){return`
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-brand">
            <img src="${u}" alt="Murcianitos" class="footer-logo" />
          </div>

          <!-- Explorar -->
          <div class="footer-col">
            <h4>Explorar</h4>
            <nav class="footer-links">
              <a href="./carta.html">Carta</a>
              <a href="./nuestra-historia.html">Historia</a>
              <a href="./eventos.html">Eventos</a>
              <a href="./blog.html">Blog</a>
              <a href="./faq.html">FAQ</a>
            </nav>
          </div>

          <!-- Legal -->
          <div class="footer-col">
            <h4>Legal</h4>
            <nav class="footer-links">
              <a href="./privacidad.html">Privacidad</a>
              <a href="./aviso-legal.html">Aviso legal</a>
              <a href="./cookies.html">Cookies</a>
              <a href="./accesibilidad.html">Accesibilidad</a>
            </nav>
          </div>
          
          <!-- Contacto -->
          <div class="footer-col">
            <h4>Contacto</h4>
            <nav class="footer-links">
              <a href="mailto:info@murcianitos.com">info@murcianitos.com</a>
              <a href="./contacto.html">Contacto</a>
            </nav>
          </div>

          <!-- Social -->
          <div class="footer-col">
            <h4>S\xEDguenos</h4>
            <nav class="footer-social-links">
              <a href="https://www.instagram.com/murcianitos_oficial/" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@murcianitos_oficial" target="_blank" rel="noopener" aria-label="TikTok">
                <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61585041083351" target="_blank" rel="noopener" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://x.com/murcianitos_ofi" target="_blank" rel="noopener" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </nav>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="footer-copyright">\xA9 ${new Date().getFullYear()} Murcianitos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `}function C(o="dark"){let e=o==="dark"?"":`theme-${o}`,t="PASTEL DE CARNE MURCIANO",a="HONRAMOS LA TRADICI\xD3N",i="REINVENTAMOS EL SABOR",c='<span class="ticker-separator"></span>',s=Array(6).fill(`${t} ${c} ${a} ${c} ${i} ${c}`).join(" ");return`
    <div class="ticker-section ${e}">
      <div class="ticker-track">
        <div class="ticker-item">${s}</div>
        <div class="ticker-item">${s}</div>
      </div>
    </div>
  `}function w(){typeof gsap<"u"&&document.querySelectorAll(".ticker-track").forEach(e=>{e.querySelector(".ticker-item")&&gsap.to(e,{xPercent:-50,ease:"none",duration:80,repeat:-1})})}function v(){return typeof gsap>"u"||typeof ScrollTrigger>"u"?(console.warn("GSAP or ScrollTrigger not loaded via CDN"),!1):(gsap.registerPlugin(ScrollTrigger),!0)}function $(){if(typeof gsap>"u")return;document.querySelectorAll('[data-reveal="fade-up"]').forEach(t=>{gsap.fromTo(t,{y:50,opacity:0},{y:0,opacity:1,duration:1,ease:"power3.out",scrollTrigger:{trigger:t,start:"top 85%",toggleActions:"play none none none"}})}),document.querySelectorAll('[data-reveal="stagger"]').forEach(t=>{let a=t.querySelectorAll(".stagger-item");a.length&&gsap.fromTo(a,{y:50,opacity:0},{y:0,opacity:1,duration:.8,stagger:.1,ease:"power2.out",scrollTrigger:{trigger:t,start:"top 80%",toggleActions:"play none none none"}})})}function I(){if(typeof gsap>"u")return;document.querySelectorAll('[data-parallax="true"]').forEach(e=>{let t=e.closest(".hero-fullscreen")!==null;gsap.to(e,{yPercent:20,ease:"none",scrollTrigger:{trigger:e.parentElement,start:t?"top top":"top bottom",end:"bottom top",scrub:!0}})})}var f=class{constructor(){this.items={},this.listeners=[]}subscribe(e){this.listeners.push(e),e(this.getState())}_notify(){let e=this.getState();this.listeners.forEach(t=>t(e))}getState(){let e=Object.keys(this.items).map(i=>({id:i,...this.items[i]})),t=e.reduce((i,c)=>i+c.quantity,0),a=e.reduce((i,c)=>i+c.price*c.quantity,0);return{items:this.items,itemsArray:e,totalItems:t,totalPrice:a}}addItem(e,t,a){let i=typeof a=="string"?parseFloat(a.replace("\u20AC","").replace(",",".")):a;this.items[e]?this.items[e]={...this.items[e],quantity:this.items[e].quantity+1}:this.items[e]={title:t,price:i,quantity:1},this._notify()}removeItem(e){if(this.items[e]){if(this.items[e].quantity>1)this.items[e]={...this.items[e],quantity:this.items[e].quantity-1};else{let t={...this.items};delete t[e],this.items=t}this._notify()}}clearCart(){this.items={},this._notify()}};function D(){let o=new f,e=document.querySelectorAll(".shop-item"),t=document.querySelector(".cart-sidebar"),a=null,i=null;if(e.forEach((s,r)=>{let d=s.querySelector(".shop-item-title"),n=s.querySelector(".card-price"),g=s.querySelector(".quantity-selector span"),l=s.querySelectorAll(".qty-btn"),h="prod_"+r;s.dataset.id=h,s.dataset.title=d.innerText.trim(),s.dataset.price=n.innerText.trim(),g&&g.classList.add("qty-display"),l.length>=2&&(l[0].dataset.action="remove",l[1].dataset.action="add")}),t){let s=t.querySelector(".cart-header"),r=t.querySelector(".btn-primary"),d=t.querySelector(".trust-badges");t.innerHTML="",s&&t.appendChild(s);let n=document.createElement("div");n.id="cart-pickup-info",n.style.display="none",n.style.alignItems="center",n.style.gap="12px",n.style.fontSize="0.9rem",n.style.color="var(--text-secondary)",n.style.backgroundColor="var(--color-cream)",n.style.border="1px solid rgba(197, 160, 89, 0.3)",n.style.padding="12px 16px",n.style.borderRadius="var(--radius-md)",n.style.marginBottom="var(--space-md)",t.appendChild(n),a=document.createElement("div"),a.className="cart-items-container",a.style.display="flex",a.style.flexDirection="column",a.style.gap="var(--space-sm)",a.style.marginBottom="var(--space-lg)",t.appendChild(a),i=document.createElement("div"),i.className="cart-total",t.appendChild(i),r&&t.appendChild(r),d&&t.appendChild(d)}document.querySelector(".shop-products")?.addEventListener("click",s=>{if(s.target.classList.contains("shop-item-img")){if(window.openImagePopup){let b=s.target.style.cssText||"";window.openImagePopup(s.target.src,b)}return}let r=s.target.closest(".qty-btn");if(!r)return;let d=r.closest(".shop-item");if(!d)return;let n=d.dataset.id,g=d.dataset.title,l=d.dataset.price,h=r.dataset.action;h==="add"?o.addItem(n,g,l):h==="remove"&&o.removeItem(n)}),o.subscribe(s=>{if(e.forEach(g=>{let l=g.dataset.id,h=g.querySelector(".qty-display");h&&(h.innerText=s.items[l]?s.items[l].quantity:0)}),a&&i){if(a.innerHTML="",s.itemsArray.length===0){a.innerHTML='<div style="color: var(--text-secondary); font-size: 0.9rem; text-align: center; padding: var(--space-md) 0;">Tu cesta est\xE1 vac\xEDa</div>',i.innerHTML="<span>Total</span><span>0,00\u20AC</span>";return}s.itemsArray.forEach(l=>{let h=document.createElement("div");h.className="cart-item-mini";let b=(l.price*l.quantity).toFixed(2).replace(".",",");h.innerHTML=`
          <span>${l.quantity}x ${l.title}</span>
          <span>${b}\u20AC</span>
        `,a.appendChild(h)});let g=s.totalPrice.toFixed(2).replace(".",",");i.innerHTML=`<span>Total</span><span>${g}\u20AC</span>`}let r=document.getElementById("checkout-total-text"),d=document.getElementById("checkout-pay-btn-total"),n=document.getElementById("checkout-items-list");if(r&&d&&n){let g=s.totalPrice.toFixed(2).replace(".",",");r.innerText=g+" \u20AC",d.innerText=g+" \u20AC",n.innerHTML="",s.itemsArray.length===0?n.innerHTML='<div style="color: var(--text-secondary); font-size: 0.9rem; text-align: center; padding: var(--space-md) 0;">Tu cesta est\xE1 vac\xEDa.</div>':s.itemsArray.forEach(l=>{let h=(l.price*l.quantity).toFixed(2).replace(".",",");n.innerHTML+=`
            <div class="cart-item-mini">
              <span>${l.quantity}x ${l.title}</span>
              <span>${h}\u20AC</span>
            </div>
          `})}});let c=document.querySelectorAll(".payment-method-btn");c.forEach(s=>{s.addEventListener("click",()=>{c.forEach(r=>r.classList.remove("selected")),s.classList.add("selected")})})}var p=class{constructor(){let e={cursorBlack:!1,cursorWhite:!1,stopAnimations:!1,muteSounds:!1,dyslexiaFont:!1,legibleFont:!1,easyReading:!1,readingMode:!1,highlightTitles:!1,highlightLinks:!1,hideImages:!1,focusMask:!1,dictionary:!1,textAlign:!1,readingGuide:!1,keyboardNav:!1,smartNav:!1,descWindows:!1,screenReader:!1,zoomNav:!1,grayscale:!1,invert:!1,highContrast:!1,lowBrightness:!1,scaleText:!1,fontSize:1,letterSpacing:0,lineHeight:1.5,wordSpacing:0,contrastVal:100,saturateVal:100,brightnessVal:100,deuteranopia:!1,deuteranomalia:!1,protanopia:!1,tritanopia:!1,tritanomalia:!1,acromatopsia:!1},t=null;try{t=JSON.parse(localStorage.getItem("murcianitos_acc"))}catch{}this.state={...e,...t||{}},this.init()}init(){this.injectHTML(),this.applyState(),this.bindEvents(),this.bindMouseTrackers()}injectHTML(){let e=`
      <div id="acc-floating-btn" class="acc-floating-btn" aria-label="Abrir men\xFA de accesibilidad">
        <span class="material-symbols-outlined">accessibility_new</span>
      </div>
    `,t=`
      <div id="acc-panel" class="acc-panel">
        <div class="acc-panel-header">
          <h3><span class="material-symbols-outlined">accessibility_new</span> Accesibilidad</h3>
          <div class="acc-panel-actions">
            <button class="acc-icon-btn" id="acc-reset-btn" title="Restablecer ajustes"><span class="material-symbols-outlined">refresh</span></button>
            <button class="acc-icon-btn" id="acc-close-btn" title="Cerrar men\xFA"><span class="material-symbols-outlined">close</span></button>
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

          <!-- Navegaci\xF3n -->
          <div class="acc-section">
            <div class="acc-section-header">Herramientas de Navegaci\xF3n</div>
            <div class="acc-section-content acc-grid">
              <button class="acc-btn" data-toggle="cursorBlack"><span class="material-symbols-outlined">arrow_selector_tool</span> Cursor Negro</button>
              <button class="acc-btn" data-toggle="cursorWhite"><span class="material-symbols-outlined">near_me</span> Cursor Blanco</button>
              <button class="acc-btn" data-toggle="readingGuide"><span class="material-symbols-outlined">view_headline</span> Gu\xEDa Lectura</button>
              <button class="acc-btn" data-toggle="keyboardNav"><span class="material-symbols-outlined">keyboard</span> Navegaci\xF3n por teclado</button>
              <button class="acc-btn" data-toggle="smartNav"><span class="material-symbols-outlined">sort_by_alpha</span> Navegaci\xF3n inteligente</button>
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
              <button class="acc-btn" data-toggle="easyReading"><span class="material-symbols-outlined">format_size</span> Lectura f\xE1cil</button>
              <button class="acc-btn" data-toggle="readingMode"><span class="material-symbols-outlined">menu_book</span> Modo de lectura</button>
              <button class="acc-btn" data-toggle="highlightTitles"><span class="material-symbols-outlined">title</span> Resaltar T\xEDtulos</button>
              <button class="acc-btn" data-toggle="highlightLinks"><span class="material-symbols-outlined">link</span> Resaltar Enlaces</button>
              <button class="acc-btn" data-toggle="hideImages"><span class="material-symbols-outlined">hide_image</span> Ocultar Im\xE1genes</button>
              <button class="acc-btn" data-toggle="focusMask"><span class="material-symbols-outlined">center_focus_strong</span> M\xE1scara Enfoque</button>
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
              <button class="acc-btn" data-toggle="deuteranomalia">Deuteranomal\xEDa</button>
              <button class="acc-btn" data-toggle="protanopia">Protanopia</button>
              <button class="acc-btn" data-toggle="tritanopia">Tritanopia</button>
              <button class="acc-btn" data-toggle="tritanomalia">Tritanomal\xEDa</button>
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
    `,a=document.createElement("div");a.id="acc-widget-container",a.innerHTML=e+t,document.body.appendChild(a)}bindEvents(){document.getElementById("acc-floating-btn").addEventListener("click",()=>{document.getElementById("acc-panel").classList.toggle("active")}),document.getElementById("acc-close-btn").addEventListener("click",()=>{document.getElementById("acc-panel").classList.remove("active")}),document.querySelectorAll(".acc-section-header").forEach(e=>{e.addEventListener("click",()=>{e.parentElement.classList.toggle("active")})}),document.querySelectorAll(".acc-btn[data-toggle]").forEach(e=>{let t=e.dataset.toggle;this.state[t]&&e.classList.add("active"),e.addEventListener("click",()=>{this.state[t]=!this.state[t],e.classList.toggle("active",this.state[t]),document.querySelectorAll(".acc-btn[data-profile]").forEach(i=>i.classList.remove("active")),t==="cursorBlack"&&this.state[t]?(this.state.cursorWhite=!1,document.querySelector('[data-toggle="cursorWhite"]').classList.remove("active")):t==="cursorWhite"&&this.state[t]&&(this.state.cursorBlack=!1,document.querySelector('[data-toggle="cursorBlack"]').classList.remove("active"));let a=["deuteranopia","deuteranomalia","protanopia","tritanopia","tritanomalia","acromatopsia"];a.includes(t)&&this.state[t]&&a.forEach(i=>{if(i!==t){this.state[i]=!1;let c=document.querySelector(`[data-toggle="${i}"]`);c&&c.classList.remove("active")}}),t==="dyslexiaFont"&&this.state[t]&&(this.state.legibleFont=!1,document.querySelector('[data-toggle="legibleFont"]').classList.remove("active")),t==="legibleFont"&&this.state[t]&&(this.state.dyslexiaFont=!1,document.querySelector('[data-toggle="dyslexiaFont"]').classList.remove("active")),this.applyState(),this.saveState()})}),document.querySelectorAll(".acc-btn[data-profile]").forEach(e=>{e.addEventListener("click",()=>{if(e.classList.contains("active")){document.getElementById("acc-reset-btn").click();return}document.querySelectorAll(".acc-btn[data-profile]").forEach(i=>i.classList.remove("active")),e.classList.add("active");let t=e.dataset.profile;document.getElementById("acc-reset-btn").click(),e.classList.add("active");let a=e.dataset.profile;a==="dyslexia"?(this.state.dyslexiaFont=!0,this.state.readingGuide=!0):a==="visual"?(this.state.cursorBlack=!0,this.state.highContrast=!0,this.state.highlightTitles=!0):a==="epilepsia"?(this.state.stopAnimations=!0,this.state.invert=!1):a==="aprendizaje"?(this.state.readingGuide=!0,this.state.legibleFont=!0,this.state.focusMask=!0):a==="mayores"?(this.state.legibleFont=!0,this.state.highContrast=!0,this.state.scaleText=!0):a==="tdah"&&(this.state.focusMask=!0,this.state.stopAnimations=!0),document.querySelectorAll(".acc-btn[data-toggle]").forEach(i=>{i.classList.toggle("active",this.state[i.dataset.toggle])}),this.applyState(),this.saveState()})}),document.getElementById("acc-reset-btn").addEventListener("click",()=>{this.resetState()})}bindMouseTrackers(){let e=document.getElementById("acc-reading-guide"),t=document.getElementById("acc-focus-mask");window.addEventListener("mousemove",a=>{this.state.readingGuide&&(e.style.top=a.clientY+"px"),this.state.focusMask&&(t.style.background=`radial-gradient(circle 150px at ${a.clientX}px ${a.clientY}px, transparent 0%, rgba(0, 0, 0, 0.7) 100%)`)})}applyState(){let e=document.body,t=this.state;e.classList.toggle("acc-cursor-black",!!t.cursorBlack),e.classList.toggle("acc-cursor-white",!!t.cursorWhite),e.classList.toggle("acc-stop-animations",!!t.stopAnimations),e.classList.toggle("acc-font-dyslexia",!!t.dyslexiaFont),e.classList.toggle("acc-font-legible",!!t.legibleFont),e.classList.toggle("acc-highlight-titles",!!t.highlightTitles),e.classList.toggle("acc-highlight-links",!!t.highlightLinks),e.classList.toggle("acc-hide-images",!!t.hideImages),e.classList.toggle("acc-focus-active",!!t.focusMask),e.classList.toggle("acc-reading-guide-active",!!t.readingGuide),e.classList.toggle("acc-keyboard-nav",!!t.keyboardNav),e.classList.toggle("acc-smart-nav",!!t.smartNav),e.classList.toggle("acc-zoom-nav",!!t.zoomNav),e.classList.toggle("acc-filter-grayscale",!!t.grayscale),e.classList.toggle("acc-filter-invert",!!t.invert),e.classList.toggle("acc-filter-high-contrast",!!t.highContrast),e.classList.toggle("acc-low-brightness",!!t.lowBrightness),e.classList.toggle("acc-text-large",!!t.scaleText),e.classList.toggle("acc-align-left",!!t.textAlign),e.classList.toggle("acc-easy-reading",!!t.easyReading),this.toggleMuteSounds(!!t.muteSounds),this.toggleReadingMode(!!t.readingMode),this.toggleDictionary(!!t.dictionary),this.toggleDescWindows(!!t.descWindows),this.toggleScreenReader(!!t.screenReader),e.classList.toggle("acc-deuteranopia",!!t.deuteranopia),e.classList.toggle("acc-deuteranomalia",!!t.deuteranomalia),e.classList.toggle("acc-protanopia",!!t.protanopia),e.classList.toggle("acc-tritanopia",!!t.tritanopia),e.classList.toggle("acc-tritanomalia",!!t.tritanomalia),e.classList.toggle("acc-acromatopsia",!!t.acromatopsia),typeof window<"u"&&window.gsap&&(t.stopAnimations?window.gsap.globalTimeline.pause():window.gsap.globalTimeline.play())}saveState(){localStorage.setItem("murcianitos_acc",JSON.stringify(this.state))}resetState(){this.state={cursorBlack:!1,cursorWhite:!1,stopAnimations:!1,muteSounds:!1,dyslexiaFont:!1,legibleFont:!1,easyReading:!1,readingMode:!1,highlightTitles:!1,highlightLinks:!1,hideImages:!1,focusMask:!1,dictionary:!1,textAlign:!1,readingGuide:!1,keyboardNav:!1,smartNav:!1,descWindows:!1,screenReader:!1,zoomNav:!1,grayscale:!1,invert:!1,highContrast:!1,lowBrightness:!1,scaleText:!1,fontSize:1,letterSpacing:0,lineHeight:1.5,wordSpacing:0,contrastVal:100,saturateVal:100,brightnessVal:100,deuteranopia:!1,deuteranomalia:!1,protanopia:!1,tritanopia:!1,tritanomalia:!1,acromatopsia:!1},document.querySelectorAll(".acc-btn").forEach(e=>e.classList.remove("active")),this.applyState(),this.saveState()}toggleDescWindows(e){if(!e){this.descTooltip&&(this.descTooltip.remove(),this.descTooltip=null),this.handleDescWindows&&(document.body.removeEventListener("mouseover",this.handleDescWindows),document.body.removeEventListener("mousemove",this.moveDescWindows));return}this.descTooltip=document.createElement("div"),this.descTooltip.className="acc-desc-tooltip",document.body.appendChild(this.descTooltip),this.handleDescWindows=t=>{let a=t.target.closest("a, button, img, input, [aria-label]");if(!a||a.closest("#acc-widget-container")){this.descTooltip.style.opacity="0";return}let i=a.getAttribute("aria-label")||a.getAttribute("alt")||a.getAttribute("title")||a.innerText;i&&i.trim()?(this.descTooltip.innerText=i.trim(),this.descTooltip.style.opacity="1"):this.descTooltip.style.opacity="0"},this.moveDescWindows=t=>{if(this.descTooltip.style.opacity==="1"){let a=t.clientX+15,i=t.clientY+15;a+this.descTooltip.offsetWidth>window.innerWidth&&(a=t.clientX-this.descTooltip.offsetWidth-15),i+this.descTooltip.offsetHeight>window.innerHeight&&(i=t.clientY-this.descTooltip.offsetHeight-15),this.descTooltip.style.left=a+"px",this.descTooltip.style.top=i+"px"}},document.body.addEventListener("mouseover",this.handleDescWindows),document.body.addEventListener("mousemove",this.moveDescWindows)}toggleScreenReader(e){if(!e){this.handleScreenReader&&document.body.removeEventListener("mouseover",this.handleScreenReader),window.speechSynthesis.cancel();return}let t;this.handleScreenReader=a=>{clearTimeout(t);let i=a.target.closest("p, h1, h2, h3, h4, h5, h6, a, button, img, li");if(!i||i.closest("#acc-widget-container"))return;let c=i.getAttribute("aria-label")||i.getAttribute("alt")||i.innerText;c&&c.trim()&&(t=setTimeout(()=>{window.speechSynthesis.cancel();let s=new SpeechSynthesisUtterance(c.trim());window.speechSynthesis.speak(s)},400))},document.body.addEventListener("mouseover",this.handleScreenReader)}toggleMuteSounds(e){document.querySelectorAll("audio, video").forEach(t=>{t.muted=e})}toggleReadingMode(e){let t=document.getElementById("acc-reading-mode-panel");if(!e){t&&(t.style.display="none"),document.body.style.overflow="";return}if(!t){t=document.createElement("div"),t.id="acc-reading-mode-panel",t.className="acc-reading-mode-panel";let c=document.createElement("button");c.className="acc-reading-mode-close",c.innerHTML="&times; Cerrar Modo Lectura",c.onclick=()=>{this.state.readingMode=!1,document.querySelector('[data-toggle="readingMode"]').classList.remove("active"),this.applyState(),this.saveState()};let s=document.createElement("div");s.id="acc-reading-mode-content",t.appendChild(c),t.appendChild(s),document.body.appendChild(t)}let a=document.querySelector("main, article, .content")||document.body,i=document.createElement("div");a.querySelectorAll("h1, h2, h3, h4, h5, h6, p").forEach(c=>{if(c.closest(".acc-widget-wrapper, #acc-widget-container")||!c.innerText.trim())return;let s=document.createElement(c.tagName);s.innerText=c.innerText,c.tagName.startsWith("H")?(s.style.marginTop="40px",s.style.marginBottom="20px",s.style.fontWeight="bold"):s.style.marginBottom="20px",i.appendChild(s)}),t.querySelector("#acc-reading-mode-content").innerHTML="",t.querySelector("#acc-reading-mode-content").appendChild(i),t.style.display="block",document.body.style.overflow="hidden"}toggleDictionary(e){if(!e){this.dictTooltip&&(this.dictTooltip.remove(),this.dictTooltip=null),this.handleDictionarySelect&&document.removeEventListener("mouseup",this.handleDictionarySelect);return}this.dictTooltip=document.createElement("div"),this.dictTooltip.className="acc-dict-tooltip",this.dictTooltip.innerHTML="<strong>Diccionario Activo</strong><br><small>Selecciona cualquier palabra del texto para ver su significado.</small>",this.dictTooltip.style.left="50%",this.dictTooltip.style.top="20px",this.dictTooltip.style.transform="translateX(-50%)",this.dictTooltip.style.opacity="1",document.body.appendChild(this.dictTooltip),setTimeout(()=>{this.dictTooltip&&this.dictTooltip.innerHTML.includes("Diccionario Activo")&&(this.dictTooltip.style.opacity="0")},4e3),this.handleDictionarySelect=async t=>{if(t.target.closest(".acc-dict-tooltip")||t.target.closest("#acc-widget-container"))return;let a=window.getSelection().toString().trim();if(!a||a.split(" ").length>3){this.dictTooltip.style.opacity="0",this.dictTooltip.style.pointerEvents="none";return}this.dictTooltip.style.transform="none",this.dictTooltip.innerHTML="Buscando...",this.dictTooltip.style.left=t.pageX+"px",this.dictTooltip.style.top=t.pageY+20+"px",this.dictTooltip.style.opacity="1",this.dictTooltip.style.pointerEvents="auto";try{let s=(await(await fetch(`https://es.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=2&exlimit=1&titles=${encodeURIComponent(a)}&explaintext=1&formatversion=2&format=json&origin=*`)).json()).query.pages[0];s.missing?this.dictTooltip.innerHTML=`<strong>${a}</strong><br><small>No se encontr\xF3 en Wikipedia.</small>`:this.dictTooltip.innerHTML=`<strong>${s.title}</strong><hr style="margin:4px 0; border-color: rgba(255,255,255,0.2);"><p style="margin:0; font-size: 0.9em; line-height: 1.4;">${s.extract}</p>`}catch{this.dictTooltip.innerHTML="<strong>Error</strong><br><small>No se pudo conectar al diccionario.</small>"}},document.addEventListener("mouseup",this.handleDictionarySelect)}};function m(){document.getElementById("acc-widget-container")||(window.accWidget=new p)}function x(){let o=document.getElementById("header-placeholder"),e=document.querySelector(".site-header");o?(o.outerHTML=X(),A()):e&&A();let t=document.getElementById("footer-placeholder");t&&(t.outerHTML=y());let a=document.querySelectorAll(".ticker-placeholder");a.length>0&&a.forEach(i=>{let c=i.dataset.theme||"dark";i.outerHTML=C(c)}),v()&&(w(),$(),I()),(document.querySelector(".shop-products")||document.querySelector(".cart-sidebar"))&&D()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{m(),x()}):(m(),x());})();
