import iconoDarkSrc from '../../../../Contexto/Identidad digital/Logo/LOGO DEFINITIVO/icono_negro.png';
import iconoLightSrc from '../../../../Contexto/Identidad digital/Logo/LOGO DEFINITIVO/icono_blanco.png';

export function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  // Handle scroll shrink & blur
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });

  // Handle mobile menu toggle
  const mobileToggle = header.querySelector('.mobile-toggle');
  const body = document.body;
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const icon = mobileToggle.querySelector('.material-symbols-outlined');
      header.classList.toggle('is-menu-open');
      if (header.classList.contains('is-menu-open')) {
        body.style.overflow = 'hidden';
        if (icon) icon.textContent = 'close';
      } else {
        body.style.overflow = '';
        if (icon) icon.textContent = 'menu';
      }
    });
  }
}

export function renderHeader() {
  const currentPath = window.location.pathname.toLowerCase();
  const isLightTheme = currentPath.includes('historia') || 
                       currentPath.includes('blog') || 
                       currentPath.includes('carta') || 
                       currentPath.includes('pedir-ahora') ||
                       currentPath.includes('contacto') ||
                       currentPath.includes('faq') ||
                       currentPath.includes('alergenos') ||
                       currentPath.includes('privacidad') ||
                       currentPath.includes('aviso-legal') ||
                       currentPath.includes('cookies') ||
                       currentPath.includes('accesibilidad');
  
  return `
    <header class="site-header ${isLightTheme ? 'is-light-theme' : ''}">
      <div class="container header-container">
        <!-- Mobile Toggle -->
        <button class="mobile-toggle" aria-label="Abrir menú" style="z-index: 2; position: relative;">
          <span class="material-symbols-outlined">menu</span>
        </button>

        <!-- Desktop Nav Left -->
        <nav class="header-nav-left">
          <a href="./index.html" class="nav-link ${currentPath === '/' || currentPath.includes('index.html') ? 'active' : ''}">Inicio</a>
          <a href="./nuestra-historia.html" class="nav-link ${currentPath.includes('historia') ? 'active' : ''}">Historia</a>
          <a href="./carta.html" class="nav-link ${currentPath.includes('carta') ? 'active' : ''}">Carta</a>
        </nav>

        <!-- Center Logo -->
        <a href="./index.html" class="header-logo" style="z-index: 2; position: relative;">
          <img src="${iconoLightSrc}" alt="Murcianitos" class="logo-light" />
          <img src="${iconoDarkSrc}" alt="Murcianitos" class="logo-dark" />
        </a>

        <!-- Desktop Nav Right -->
        <nav class="header-nav-right">
          <a href="./eventos.html" class="nav-link ${currentPath.includes('eventos') ? 'active' : ''}">Eventos</a>
          <a href="./blog.html" class="nav-link ${currentPath.includes('blog') ? 'active' : ''}">Blog</a>
          <a href="./pedir-ahora.html" class="btn btn-primary" style="margin-left: var(--space-md);">Pedir Ahora</a>
        </nav>

        <!-- Mobile CTA -->
        <div class="mobile-cta" style="z-index: 2; position: relative;">
          <a href="./pedir-ahora.html" class="btn" style="border: 1px solid rgba(197, 160, 89, 0.5); color: var(--color-gold); background: transparent; padding: 6px 14px; font-size: 0.75rem; font-family: var(--font-label); text-transform: uppercase; letter-spacing: 0.1em; border-radius: 4px;">Pedir</a>
        </div>
        
        <!-- Mobile Menu Overlay -->
        <div class="mobile-menu-overlay">
          <nav class="mobile-nav">
            <a href="./index.html" class="nav-link ${currentPath === '/' || currentPath.includes('index.html') ? 'active' : ''}">Inicio</a>
            <a href="./nuestra-historia.html" class="nav-link ${currentPath.includes('historia') ? 'active' : ''}">Historia</a>
            <a href="./carta.html" class="nav-link ${currentPath.includes('carta') ? 'active' : ''}">Carta</a>
            <a href="./eventos.html" class="nav-link ${currentPath.includes('eventos') ? 'active' : ''}">Eventos</a>
            <a href="./blog.html" class="nav-link ${currentPath.includes('blog') ? 'active' : ''}">Blog</a>
          </nav>
        </div>
      </div>
    </header>
  `;
}
