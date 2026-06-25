(()=>{var e="./src/assets/icono_negro.png";var S="./src/assets/icono_blanco.png";function D(){let p=document.querySelector(".site-header");if(!p)return;window.addEventListener("scroll",()=>{window.scrollY>50?p.classList.add("is-scrolled"):p.classList.remove("is-scrolled")},{passive:!0});let y=p.querySelector(".mobile-toggle"),o=document.body;y&&y.addEventListener("click",()=>{let O=y.querySelector(".material-symbols-outlined");p.classList.toggle("is-menu-open"),p.classList.contains("is-menu-open")?(o.style.overflow="hidden",O&&(O.textContent="close")):(o.style.overflow="",O&&(O.textContent="menu"))})}function l(){let p=window.location.pathname.toLowerCase();return`
    <header class="site-header ${p.includes("historia")||p.includes("blog")||p.includes("carta")||p.includes("pedir-ahora")||p.includes("contacto")||p.includes("faq")||p.includes("alergenos")||p.includes("privacidad")||p.includes("aviso-legal")||p.includes("cookies")||p.includes("accesibilidad")?"is-light-theme":""}">
      <div class="container header-container">
        <!-- Mobile Toggle -->
        <button class="mobile-toggle" aria-label="Abrir men\xFA" style="z-index: 2; position: relative;">
          <span class="material-symbols-outlined">menu</span>
        </button>

        <!-- Desktop Nav Left -->
        <nav class="header-nav-left">
          <a href="./index.html" class="nav-link ${p==="/"||p.includes("index.html")?"active":""}">Inicio</a>
          <a href="./nuestra-historia.html" class="nav-link ${p.includes("historia")?"active":""}">Historia</a>
          <a href="./carta.html" class="nav-link ${p.includes("carta")?"active":""}">Carta</a>
        </nav>

        <!-- Center Logo -->
        <a href="./index.html" class="header-logo" style="z-index: 2; position: relative;">
          <img src="${S}" alt="Murcianitos" class="logo-light" />
          <img src="${e}" alt="Murcianitos" class="logo-dark" />
        </a>

        <!-- Desktop Nav Right -->
        <nav class="header-nav-right">
          <a href="./eventos.html" class="nav-link ${p.includes("eventos")?"active":""}">Eventos</a>
          <a href="./blog.html" class="nav-link ${p.includes("blog")?"active":""}">Blog</a>
          <a href="./pedir-ahora.html" class="btn btn-primary" style="margin-left: var(--space-md);">Pedir Ahora</a>
        </nav>

        <!-- Mobile CTA -->
        <div class="mobile-cta" style="z-index: 2; position: relative;">
          <a href="./pedir-ahora.html" class="btn" style="border: 1px solid rgba(197, 160, 89, 0.5); color: var(--color-gold); background: transparent; padding: 6px 14px; font-size: 0.75rem; font-family: var(--font-label); text-transform: uppercase; letter-spacing: 0.1em; border-radius: 4px;">Pedir</a>
        </div>
        
        <!-- Mobile Menu Overlay -->
        <div class="mobile-menu-overlay">
          <nav class="mobile-nav">
            <a href="./index.html" class="nav-link ${p==="/"||p.includes("index.html")?"active":""}">Inicio</a>
            <a href="./nuestra-historia.html" class="nav-link ${p.includes("historia")?"active":""}">Historia</a>
            <a href="./carta.html" class="nav-link ${p.includes("carta")?"active":""}">Carta</a>
            <a href="./eventos.html" class="nav-link ${p.includes("eventos")?"active":""}">Eventos</a>
            <a href="./blog.html" class="nav-link ${p.includes("blog")?"active":""}">Blog</a>
          </nav>
        </div>
      </div>
    </header>
  `}var v="./src/assets/logo blanco new.png";function N(){return`
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-brand">
            <img src="${v}" alt="Murcianitos" class="footer-logo" />
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
  `}function i(p="dark"){let y=p==="dark"?"":`theme-${p}`,o="PASTEL DE CARNE MURCIANO",O="HONRAMOS LA TRADICI\xD3N",_="REINVENTAMOS EL SABOR",c='<span class="ticker-separator"></span>',L=Array(6).fill(`${o} ${c} ${O} ${c} ${_} ${c}`).join(" ");return`
    <div class="ticker-section ${y}">
      <div class="ticker-track">
        <div class="ticker-item">${L}</div>
        <div class="ticker-item">${L}</div>
      </div>
    </div>
  `}function k(){typeof gsap<"u"&&document.querySelectorAll(".ticker-track").forEach(y=>{y.querySelector(".ticker-item")&&gsap.to(y,{xPercent:-50,ease:"none",duration:80,repeat:-1})})}function M(){return typeof gsap>"u"||typeof ScrollTrigger>"u"?(console.warn("GSAP or ScrollTrigger not loaded via CDN"),!1):(gsap.registerPlugin(ScrollTrigger),!0)}function B(){if(typeof gsap>"u")return;document.querySelectorAll('[data-reveal="fade-up"]').forEach(o=>{gsap.fromTo(o,{y:50,opacity:0},{y:0,opacity:1,duration:1,ease:"power3.out",scrollTrigger:{trigger:o,start:"top 85%",toggleActions:"play none none reverse"}})}),document.querySelectorAll('[data-reveal="stagger"]').forEach(o=>{let O=o.querySelectorAll(".stagger-item");O.length&&gsap.fromTo(O,{y:50,opacity:0},{y:0,opacity:1,duration:.8,stagger:.1,ease:"power2.out",scrollTrigger:{trigger:o,start:"top 80%",toggleActions:"play none none reverse"}})})}function g(){if(typeof gsap>"u")return;document.querySelectorAll('[data-parallax="true"]').forEach(y=>{let o=y.closest(".hero-fullscreen")!==null;gsap.to(y,{yPercent:20,ease:"none",scrollTrigger:{trigger:y.parentElement,start:o?"top top":"top bottom",end:"bottom top",scrub:!0}})})}var w=class{constructor(){this.items={},this.listeners=[]}subscribe(y){this.listeners.push(y),y(this.getState())}_notify(){let y=this.getState();this.listeners.forEach(o=>o(y))}getState(){let y=Object.keys(this.items).map(_=>({id:_,...this.items[_]})),o=y.reduce((_,c)=>_+c.quantity,0),O=y.reduce((_,c)=>_+c.price*c.quantity,0);return{items:this.items,itemsArray:y,totalItems:o,totalPrice:O}}addItem(y,o,O){let _=typeof O=="string"?parseFloat(O.replace("\u20AC","").replace(",",".")):O;this.items[y]?this.items[y]={...this.items[y],quantity:this.items[y].quantity+1}:this.items[y]={title:o,price:_,quantity:1},this._notify()}removeItem(y){if(this.items[y]){if(this.items[y].quantity>1)this.items[y]={...this.items[y],quantity:this.items[y].quantity-1};else{let o={...this.items};delete o[y],this.items=o}this._notify()}}clearCart(){this.items={},this._notify()}};function q(){let p=new w,y=document.querySelectorAll(".shop-item"),o=document.querySelector(".cart-sidebar"),O=null,_=null;if(y.forEach((L,$)=>{let m=L.querySelector(".shop-item-title"),H=L.querySelector(".card-price"),s=L.querySelector(".quantity-selector span"),z=L.querySelectorAll(".qty-btn"),t="prod_"+$;L.dataset.id=t,L.dataset.title=m.innerText.trim(),L.dataset.price=H.innerText.trim(),s&&s.classList.add("qty-display"),z.length>=2&&(z[0].dataset.action="remove",z[1].dataset.action="add")}),o){let L=o.querySelector(".cart-header"),$=o.querySelector(".btn-primary"),m=o.querySelector(".trust-badges");o.innerHTML="",L&&o.appendChild(L);let H=document.createElement("div");H.id="cart-pickup-info",H.style.display="none",H.style.alignItems="center",H.style.gap="12px",H.style.fontSize="0.9rem",H.style.color="var(--text-secondary)",H.style.backgroundColor="var(--color-cream)",H.style.border="1px solid rgba(197, 160, 89, 0.3)",H.style.padding="12px 16px",H.style.borderRadius="var(--radius-md)",H.style.marginBottom="var(--space-md)",o.appendChild(H),O=document.createElement("div"),O.className="cart-items-container",O.style.display="flex",O.style.flexDirection="column",O.style.gap="var(--space-sm)",O.style.marginBottom="var(--space-lg)",o.appendChild(O),_=document.createElement("div"),_.className="cart-total",o.appendChild(_),$&&o.appendChild($),m&&o.appendChild(m)}document.querySelector(".shop-products")?.addEventListener("click",L=>{if(L.target.classList.contains("shop-item-img")){if(window.openImagePopup){let u=L.target.style.cssText||"";window.openImagePopup(L.target.src,u)}return}let $=L.target.closest(".qty-btn");if(!$)return;let m=$.closest(".shop-item");if(!m)return;let H=m.dataset.id,s=m.dataset.title,z=m.dataset.price,t=$.dataset.action;t==="add"?p.addItem(H,s,z):t==="remove"&&p.removeItem(H)}),p.subscribe(L=>{if(y.forEach(s=>{let z=s.dataset.id,t=s.querySelector(".qty-display");t&&(t.innerText=L.items[z]?L.items[z].quantity:0)}),O&&_){if(O.innerHTML="",L.itemsArray.length===0){O.innerHTML='<div style="color: var(--text-secondary); font-size: 0.9rem; text-align: center; padding: var(--space-md) 0;">Tu cesta est\xE1 vac\xEDa</div>',_.innerHTML="<span>Total</span><span>0,00\u20AC</span>";return}L.itemsArray.forEach(z=>{let t=document.createElement("div");t.className="cart-item-mini";let u=(z.price*z.quantity).toFixed(2).replace(".",",");t.innerHTML=`
          <span>${z.quantity}x ${z.title}</span>
          <span>${u}\u20AC</span>
        `,O.appendChild(t)});let s=L.totalPrice.toFixed(2).replace(".",",");_.innerHTML=`<span>Total</span><span>${s}\u20AC</span>`}let $=document.getElementById("checkout-total-text"),m=document.getElementById("checkout-pay-btn-total"),H=document.getElementById("checkout-items-list");if($&&m&&H){let s=L.totalPrice.toFixed(2).replace(".",",");$.innerText=s+" \u20AC",m.innerText=s+" \u20AC",H.innerHTML="",L.itemsArray.length===0?H.innerHTML='<div style="padding: 4px 0;">Tu cesta est\xE1 vac\xEDa.</div>':L.itemsArray.forEach(z=>{let t=(z.price*z.quantity).toFixed(2).replace(".",",");H.innerHTML+=`
            <div style="display: flex; justify-content: space-between;">
              <span>${z.quantity}x ${z.title}</span>
              <span>${t} \u20AC</span>
            </div>
          `})}});let c=document.querySelectorAll(".payment-method-btn");c.forEach(L=>{L.addEventListener("click",()=>{c.forEach($=>$.classList.remove("selected")),L.classList.add("selected")})})}document.addEventListener("DOMContentLoaded",()=>{let p=document.getElementById("header-placeholder"),y=document.querySelector(".site-header");p?(p.outerHTML=l(),D()):y&&D();let o=document.getElementById("footer-placeholder");o&&(o.outerHTML=N());let O=document.querySelectorAll(".ticker-placeholder");O.length>0&&O.forEach(_=>{let c=_.dataset.theme||"dark";_.outerHTML=i(c)}),M()&&(k(),B(),g()),(document.querySelector(".shop-products")||document.querySelector(".cart-sidebar"))&&q()});})();
