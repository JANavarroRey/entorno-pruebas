import { renderHeader, initHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderTicker, initTickers } from './components/ticker.js';
import { initGSAP } from './animations/gsap-setup.js';
import { initReveals, initParallax } from './animations/reveals.js';
import { initPedirAhora } from './pedir-ahora.js';
import { initAccessibilityWidget } from './components/accessibility.js';

function initAll() {
  // 1. Inject Shared Components OR Initialize them if already static
  
  // Header
  const headerPlaceholder = document.getElementById('header-placeholder');
  const existingHeader = document.querySelector('.site-header');
  
  if (headerPlaceholder) {
    headerPlaceholder.outerHTML = renderHeader();
    initHeader();
  } else if (existingHeader) {
    initHeader();
  }

  // Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = renderFooter();
  }

  // Tickers
  const tickerPlaceholders = document.querySelectorAll('.ticker-placeholder');
  if (tickerPlaceholders.length > 0) {
    tickerPlaceholders.forEach(placeholder => {
      const theme = placeholder.dataset.theme || 'dark';
      placeholder.outerHTML = renderTicker(theme);
    });
  }

  // 2. Initialize Animations
  if (initGSAP()) {
    initTickers(); // Animate tickers using GSAP
    initReveals();
    initParallax();
  }

  // 3. Initialize Pedir Ahora (Cart logic)
  if (document.querySelector('.shop-products') || document.querySelector('.cart-sidebar')) {
    initPedirAhora();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initAccessibilityWidget();
    initAll();
  });
} else {
  initAccessibilityWidget();
  initAll();
}
