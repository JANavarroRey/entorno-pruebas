<?php
/**
 * Template Name: Pedir Ahora
 */
if (!defined('ABSPATH')) exit;

get_header();
?>

<style>

    /* SPA Transitions */
    .view-section {
      display: none;
      animation: fadeIn 0.4s ease-out forwards;
    }
    .view-active {
      display: block;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* Splash Cards */
    .service-selection-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-xl);
      max-width: 800px;
      margin: 0 auto;
    }
    @media (min-width: 768px) {
      .service-selection-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    .service-card {
      background-color: #FFFFFF;
      padding: var(--space-xl) var(--space-md);
      border-radius: var(--radius-lg);
      text-align: center;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-sm);
    }
    
    @media (min-width: 768px) {
      .service-card {
        padding: var(--space-3xl) var(--space-xl);
        gap: var(--space-md);
      }
    }
    
    .service-card:hover {
      border-color: var(--color-gold);
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
    }
    
    .service-icon-wrapper {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: var(--surface-light);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--space-sm);
      color: var(--color-gold);
      transition: transform 0.3s ease, color 0.3s ease;
    }
    
    .service-card:hover .service-icon-wrapper {
      transform: scale(1.1);
      color: var(--color-burgundy);
    }
    
    .service-icon {
      font-size: 24px;
    }
    .service-title {
      font-family: var(--font-headline);
      font-size: var(--text-h2);
    }
    
    /* Delivery Logos */
    .delivery-logos-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-md);
      max-width: 600px;
      margin: 0 auto;
    }
    @media (min-width: 768px) {
      .delivery-logos-grid {
        grid-template-columns: repeat(3, 1fr);
        max-width: 900px;
      }
    }
    .delivery-logo-card {
      background-color: var(--color-white);
      border-radius: var(--radius-md);
      padding: var(--space-xl);
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      text-decoration: none;
      min-height: 120px;
    }
    .delivery-logo-card:hover {
      border-color: var(--color-gold);
      transform: translateY(-3px);
      box-shadow: var(--shadow-sm);
    }
    .delivery-logo-card img {
      max-height: 50px;
      max-width: 150px;
      object-fit: contain;
    }

    /* Back Button */
    .btn-back {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs);
      font-family: var(--font-headline);
      font-size: 1.1rem;
      color: var(--text-secondary);
      background: none;
      border: none;
      cursor: pointer;
      padding: var(--space-xs) 0;
      letter-spacing: 0.1em;
      margin-bottom: var(--space-2xl);
      transition: color 0.3s ease;
    }
    .btn-back:hover {
      color: var(--color-gold);
    }

    /* Shop Layout */
    .shop-layout {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-2xl);
      padding-bottom: var(--space-4xl);
    }
    @media (min-width: 1024px) {
      .shop-layout {
        grid-template-columns: 2fr 1fr;
        align-items: start;
      }
    }

    .shop-products {
      display: flex;
      flex-direction: column;
      gap: var(--space-2xl);
      min-width: 0;
    }

    /* Mobile-first Product Card for Shop */
    .shop-item {
      display: grid;
      grid-template-columns: 85px 1fr;
      background-color: var(--surface-card);
      border-radius: var(--radius-md);
      padding: 16px 16px 4px 16px; /* Reduced bottom padding to offset the grid gap */
      box-shadow: 0 4px 12px -4px rgba(0,0,0,0.05);
      border: 1px solid rgba(0,0,0,0.03);
      gap: 12px 16px;
      align-items: start;
    }
    @media (min-width: 768px) {
      .shop-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px; /* Reset padding for desktop */
      }
    }

    .shop-item-img {
      width: 85px;
      height: 85px;
      flex-shrink: 0;
      background-color: var(--color-cream-dark);
      border-radius: var(--radius-sm);
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.3s ease;
    }
    .shop-item-img:hover {
      transform: scale(1.05);
    }

    .shop-item-details {
      flex: 1;
      min-width: 0;
    }

    .shop-item-title {
      font-family: var(--font-headline);
      font-size: 1.15rem;
      margin-bottom: 2px;
      color: var(--color-ink);
      word-wrap: break-word;
    }

    .shop-item-desc {
      font-size: 0.85rem;
      color: var(--text-secondary);
      margin-bottom: 16px;
      line-height: 1.4;
      word-wrap: break-word;
    }
    
    .card-price {
      font-size: 0.95rem !important;
      font-weight: 700;
    }

    .quantity-selector {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      gap: 12px;
      background-color: var(--color-cream);
      padding: 4px 10px;
      border-radius: var(--radius-full);
      width: fit-content;
      border: 1px solid rgba(0,0,0,0.05);
      grid-column: 2;
      justify-self: end;
      margin-top: -42px; /* Alineado con el precio */
      position: relative;
      z-index: 2;
    }
    @media (min-width: 768px) {
      .quantity-selector {
        grid-column: auto;
        justify-self: auto;
        margin-top: 0;
      }
    }
    .qty-btn {
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--color-ink);
      width: 22px;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
    }

    /* Cart Sidebar */
    .cart-sidebar {
      background-color: var(--surface-card);
      border: 1px solid rgba(0,0,0,0.1);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      position: sticky;
      top: 100px;
      min-width: 0;
    }

    .cart-header {
      font-family: var(--font-headline);
      font-size: var(--text-h3);
      border-bottom: 1px solid rgba(0,0,0,0.1);
      padding-bottom: var(--space-md);
      margin-bottom: var(--space-md);
    }

    .cart-item-mini {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--space-sm);
      font-size: var(--text-body-sm);
      gap: 12px;
    }
    
    .cart-item-mini span:first-child {
      flex: 1;
      min-width: 0;
      word-wrap: break-word;
    }

    .cart-total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--font-label);
      font-size: var(--text-body-lg);
      font-weight: 700;
      border-top: 1px solid rgba(0,0,0,0.1);
      padding-top: var(--space-md);
      margin-top: var(--space-md);
      margin-bottom: var(--space-xl);
    }

    .trust-badges {
      display: flex;
      gap: var(--space-sm);
      margin-top: var(--space-lg);
      font-size: var(--text-label-sm);
      color: var(--text-muted);
      justify-content: center;
    }
    
    .trust-badge {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    /* Sticky Category Nav */
    html {
      scroll-behavior: smooth;
    }
    .shop-categories-nav {
      position: sticky;
      top: 80px; /* Below the main header */
      background-color: var(--surface-light);
      padding: var(--space-xl) 0 var(--space-lg) 0;
      z-index: 40;
      display: flex;
      gap: var(--space-sm);
      overflow-x: auto;
      margin-bottom: var(--space-lg);
      scrollbar-width: none; /* Firefox */
      -webkit-overflow-scrolling: touch;
      max-width: 100vw;
    }
    .shop-categories-nav::-webkit-scrollbar {
      display: none; /* Chrome/Safari */
    }
    .cat-nav-link {
      padding: 8px 16px;
      background-color: var(--color-white);
      color: var(--color-ink);
      border-radius: var(--radius-full);
      font-family: var(--font-label);
      font-size: 0.85rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      white-space: nowrap;
      text-decoration: none;
      border: 1px solid rgba(0,0,0,0.05);
      box-shadow: 0 2px 8px rgba(0,0,0,0.02);
      transition: all 0.3s ease;
    }
    .cat-nav-link:hover {
      background-color: var(--color-cream);
    }
    .cat-nav-link.active {
      background-color: var(--color-burgundy);
      color: var(--color-white);
      border-color: var(--color-burgundy);
    }
    .shop-category-section {
      scroll-margin-top: 150px; /* 80px header + 70px sticky nav */
      margin-bottom: var(--space-3xl);
    }
    .shop-category-title {
      font-family: var(--font-headline);
      font-size: 1.8rem;
      color: var(--color-ink);
      margin-bottom: var(--space-lg);
      padding-bottom: var(--space-xs);
      border-bottom: 2px solid var(--color-gold);
      display: inline-block;
    }

    /* Checkout Premium Form */
    .checkout-input-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .checkout-input-group label {
      font-family: var(--font-label);
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .checkout-input-group input {
      width: 100%;
      height: 56px;
      border: 1px solid rgba(0,0,0,0.1);
      border-radius: 8px;
      background: var(--color-cream);
      padding: 0 16px;
      font-family: var(--font-body);
      font-size: 1.1rem;
      color: var(--color-ink);
      outline: none;
      transition: border-color 0.3s ease;
      box-shadow: none;
      box-sizing: border-box;
    }
    .checkout-input-group input:focus {
      border-color: var(--color-gold);
      background: var(--color-cream);
      box-shadow: none;
    }
    .payment-method-btn {
      display: flex;
      align-items: center;
      padding: var(--space-md) var(--space-lg);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(0,0,0,0.15);
      background: var(--color-white);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: var(--shadow-sm);
    }
    .payment-method-btn.selected {
      border-color: #2F5E3D;
      background: rgba(47, 94, 61, 0.05);
      color: #2F5E3D;
    }
    .payment-method-btn:hover:not(.selected) {
      border-color: rgba(0,0,0,0.25);
      background: var(--surface-light);
    }
    
    /* Terms Modal CSS */
    .terms-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }
    .terms-modal-overlay.active {
      opacity: 1;
      pointer-events: auto;
    }
    .terms-modal {
      background: var(--surface-light);
      width: 90%;
      max-width: 800px;
      max-height: 85vh;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      display: flex;
      flex-direction: column;
      transform: translateY(20px);
      transition: transform 0.3s ease;
      overflow: hidden;
    }
    .terms-modal-overlay.active .terms-modal {
      transform: translateY(0);
    }
    .terms-modal-header {
      padding: var(--space-md) var(--space-xl);
      border-bottom: 1px solid rgba(197, 160, 89, 0.2);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #FFFFFF;
    }
    .terms-modal-header h3 {
      font-family: var(--font-headline);
      color: var(--color-ink);
      font-size: 1.25rem;
      margin: 0;
    }
    .terms-modal-close {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--color-ink);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-xs);
      border-radius: 50%;
      transition: background-color 0.2s ease;
    }
    .terms-modal-close:hover {
      background-color: rgba(197, 160, 89, 0.1);
    }
    .terms-modal-body {
      padding: var(--space-xl);
      overflow-y: auto;
      font-family: var(--font-body);
      color: var(--text-secondary);
      line-height: 1.6;
      text-align: left;
    }
    .terms-modal-body h4 {
      color: var(--color-ink);
      margin-top: var(--space-lg);
      margin-bottom: var(--space-sm);
      font-family: var(--font-headline);
      font-size: 1.1rem;
    }
    .terms-modal-body p, .terms-modal-body ul {
      margin-bottom: var(--space-md);
      font-size: 0.95rem;
    }
    .terms-modal-body ul {
      padding-left: var(--space-lg);
    }
    .terms-modal-body ul li {
      margin-bottom: var(--space-xs);
    }
  
</style>

<main>

    <div class="container">
      
      <!-- View 0: Splash Selection -->
      <div id="view-selection" class="view-section view-active" style="padding: var(--space-4xl) 0;">
        <h1 class="hero-title" style="text-align: center; margin-bottom: var(--space-xl);">¿Cómo quieres tu pedido?</h1>
        <p class="hero-desc" style="text-align: center; color: var(--text-secondary); margin-bottom: var(--space-3xl);">Elige si prefieres recogerlo recién horneado o que te lo llevemos.</p>
        
        <div class="service-selection-grid">
          <div class="service-card" onclick="goToView('view-delivery')">
            <div class="service-icon-wrapper">
              <span class="material-symbols-outlined service-icon">two_wheeler</span>
            </div>
            <h2 class="service-title">A Domicilio</h2>
            <p style="color: var(--text-secondary);">Te lo llevamos caliente a casa</p>
          </div>
          <div class="service-card" onclick="goToView('view-takeaway-location')">
            <div class="service-icon-wrapper">
              <span class="material-symbols-outlined service-icon">shopping_bag</span>
            </div>
            <h2 class="service-title">Para Recoger</h2>
            <p style="color: var(--text-secondary);">En nuestro Obrador Central</p>
          </div>
        </div>
      </div>

      <!-- View 1: Delivery -->
      <div id="view-delivery" class="view-section" style="padding: var(--space-2xl) 0; padding-bottom: 120px;">
        <button class="btn-back" onclick="goToView('view-selection')"><span class="material-symbols-outlined">arrow_back</span> Volver</button>
        <h1 class="hero-title" style="text-align: center; margin-bottom: var(--space-md);">Pide a domicilio</h1>
        <p style="text-align: center; color: var(--text-secondary); margin-bottom: var(--space-3xl);">Selecciona tu plataforma de delivery favorita:</p>
        
        <div class="service-selection-grid" style="grid-template-columns: repeat(1, 1fr); max-width: 900px; gap: var(--space-xl);">
          <style>
            @media (min-width: 768px) {
              #view-delivery .service-selection-grid { grid-template-columns: repeat(3, 1fr) !important; }
            }
          </style>
          <a href="https://glovoapp.com" target="_blank" class="service-card" style="text-decoration: none; padding: var(--space-2xl) var(--space-xl);">
            <div class="service-icon-wrapper" style="background-color: rgba(255, 194, 68, 0.1);">
              <img src="https://cdn.simpleicons.org/glovo/FFC244" alt="Glovo" style="height: 24px; width: auto;">
            </div>
            <h2 class="service-title" style="font-size: var(--text-h3);">Glovo</h2>
          </a>
          
          <a href="https://www.ubereats.com" target="_blank" class="service-card" style="text-decoration: none; padding: var(--space-2xl) var(--space-xl);">
            <div class="service-icon-wrapper" style="background-color: rgba(6, 193, 103, 0.1);">
              <img src="https://cdn.simpleicons.org/ubereats/06C167" alt="Uber Eats" style="height: 24px; width: auto;">
            </div>
            <h2 class="service-title" style="font-size: var(--text-h3);">Uber Eats</h2>
          </a>
          
          <a href="https://www.just-eat.es" target="_blank" class="service-card" style="text-decoration: none; padding: var(--space-2xl) var(--space-xl);">
            <div class="service-icon-wrapper" style="background-color: rgba(243, 109, 0, 0.1);">
              <img src="https://cdn.simpleicons.org/justeat/F36D00" alt="Just Eat" style="height: 24px; width: auto;">
            </div>
            <h2 class="service-title" style="font-size: var(--text-h3);">Just Eat</h2>
          </a>
        </div>
      </div>

      <!-- View 2: Take Away Location -->
      <div id="view-takeaway-location" class="view-section" style="padding: var(--space-2xl) 0; padding-bottom: 120px;">
        <button class="btn-back" onclick="goToView('view-selection')"><span class="material-symbols-outlined">arrow_back</span> Volver</button>
        
        <style>
          .takeaway-split-layout {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--space-3xl);
            max-width: 1000px;
            margin: 0 auto;
            align-items: flex-start;
          }
          @media (min-width: 850px) {
            .takeaway-split-layout {
              grid-template-columns: 1.1fr 0.9fr;
            }
          }
          .bullet-list {
            list-style: none;
            padding: 0;
            margin: 0 0 var(--space-2xl) 0;
            display: flex;
            flex-direction: column;
            gap: var(--space-md);
          }
          .bullet-item {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 1.05rem;
            color: var(--color-ink);
          }
          .bullet-icon {
            background-color: var(--color-gold);
            color: var(--surface-light);
            border-radius: 50%;
            padding: 2px;
            font-size: 14px;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
        </style>
        
        <div class="takeaway-split-layout">
          <!-- Columna Izquierda: Ventajas y Ubicación -->
          <div style="padding-top: var(--space-2xl);">
            <h1 class="hero-title" style="margin-bottom: var(--space-md);">Para Recoger</h1>
            <p style="color: var(--text-secondary); margin-bottom: var(--space-xl);">Recógelos recién hechos en nuestro Obrador Central:</p>
            
            <ul class="bullet-list">
              <li class="bullet-item">
                <span class="material-symbols-outlined bullet-icon">check</span>
                <span><strong>Recién horneados</strong> al recoger</span>
              </li>
              <li class="bullet-item">
                <span class="material-symbols-outlined bullet-icon">check</span>
                <span><strong>Cero esperas</strong> en el mostrador</span>
              </li>
              <li class="bullet-item">
                <span class="material-symbols-outlined bullet-icon">check</span>
                <span><strong>Crujido perfecto</strong> garantizado</span>
              </li>
            </ul>

            <div style="margin-top: var(--space-2xl); border-top: 1px solid rgba(0,0,0,0.08); padding-top: var(--space-xl);">
              <h3 style="font-family: var(--font-headline); font-size: 1.3rem; margin-bottom: 8px; color: var(--color-ink);">Obrador Beniaján</h3>
              <p style="color: var(--text-secondary); margin-bottom: var(--space-md); font-size: 1.05rem; line-height: 1.5;">
                Calle de los Obradores,<br>Rincón Huertano, Murcia
              </p>
              <a href="https://maps.app.goo.gl/JMj3FzSWQ7RTZ2Av8" target="_blank" style="color: var(--color-ink); font-weight: 600; font-family: var(--font-label); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; display: inline-flex; align-items: center; gap: 6px; text-decoration: none; border-bottom: 1px solid rgba(197, 160, 89, 0.5); padding-bottom: 2px; transition: color 0.3s ease, border-color 0.3s ease;" onmouseover="this.style.color='var(--color-gold)'; this.style.borderColor='var(--color-gold)';" onmouseout="this.style.color='var(--color-ink)'; this.style.borderColor='rgba(197, 160, 89, 0.5)';">
                <span class="material-symbols-outlined" style="font-size: 16px;">map</span> Ver en Google Maps
              </a>
            </div>
          </div>

          <!-- Columna Derecha: Selector y CTA -->
          <div style="background-color: var(--color-white); padding: var(--space-2xl); border-radius: var(--radius-xl); box-shadow: 0 10px 40px -10px rgba(0,0,0,0.1); border: 1px solid rgba(197, 160, 89, 0.2);">
            <h2 style="font-family: var(--font-headline); font-size: 2.2rem; margin-bottom: var(--space-xs); text-align: center; color: var(--color-ink);">Inicia tu pedido</h2>
            <p style="text-align: center; color: var(--text-secondary); margin-bottom: var(--space-2xl); font-size: 1.1rem;">Selecciona cuándo quieres recogerlo:</p>
            
            <div style="margin-bottom: var(--space-lg);">
              <label style="display: block; font-family: var(--font-label); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; color: var(--text-secondary); font-weight: 700;">Día de recogida</label>
              <div style="position: relative;">
                <input type="text" id="takeaway-date-display" placeholder="dd/mm/aaaa" readonly style="width: 100%; height: 56px; padding: 0 40px 0 16px; border: 1px solid rgba(0,0,0,0.1); border-radius: 8px; font-family: var(--font-body); font-size: 1.1rem; color: var(--color-ink); background-color: var(--color-cream); outline: none; transition: border-color 0.3s ease; box-sizing: border-box; cursor: pointer; text-align: left; background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%231D1D1B%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Crect x=%223%22 y=%224%22 width=%2218%22 height=%2218%22 rx=%222%22 ry=%222%22%3E%3C/rect%3E%3Cline x1=%2216%22 y1=%222%22 x2=%2216%22 y2=%226%22%3E%3C/line%3E%3Cline x1=%228%22 y1=%222%22 x2=%228%22 y2=%226%22%3E%3C/line%3E%3Cline x1=%223%22 y1=%2210%22 x2=%2221%22 y2=%2210%22%3E%3C/line%3E%3C/svg%3E'); background-repeat: no-repeat; background-position: right 16px center; background-size: 20px;">
                <input type="date" id="takeaway-date" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer;" onfocus="document.getElementById('takeaway-date-display').style.borderColor='var(--color-gold)';" onblur="document.getElementById('takeaway-date-display').style.borderColor='rgba(0,0,0,0.1)';" onchange="
                  if(this.value) { 
                    const parts = this.value.split('-'); 
                    document.getElementById('takeaway-date-display').value = parts[2] + '/' + parts[1] + '/' + parts[0]; 
                  } else { 
                    document.getElementById('takeaway-date-display').value = ''; 
                  }">
              </div>
            </div>
            
            <div style="margin-bottom: var(--space-2xl);">
              <label style="display: block; font-family: var(--font-label); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; color: var(--text-secondary); font-weight: 700;">Franja horaria</label>
              <select id="takeaway-time" style="width: 100%; height: 56px; padding: 0 40px 0 16px; border: 1px solid rgba(0,0,0,0.1); border-radius: 8px; font-family: var(--font-body); font-size: 1.1rem; color: var(--color-ink); background-color: var(--color-cream); outline: none; cursor: pointer; transition: border-color 0.3s ease; box-sizing: border-box; appearance: none; -webkit-appearance: none; background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231D1D1B' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E&quot;); background-repeat: no-repeat; background-position: right 16px center; background-size: 16px;" onfocus="this.style.borderColor='var(--color-gold)'" onblur="this.style.borderColor='rgba(0,0,0,0.1)'">
                <option value="" disabled selected>Selecciona una hora</option>
                <option value="10:00-11:00">10:00 - 11:00</option>
                <option value="11:00-12:00">11:00 - 12:00</option>
                <option value="12:00-13:00">12:00 - 13:00</option>
                <option value="17:00-18:00">17:00 - 18:00</option>
                <option value="18:00-19:00">18:00 - 19:00</option>
                <option value="19:00-20:00">19:00 - 20:00</option>
              </select>
            </div>
            
            <button class="btn btn-primary" onclick="validateTakeawayForm()" style="width: 100%; justify-content: center; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; border-radius: 6px; padding: 18px; font-size: 1rem; box-shadow: none !important; transform: none !important;">
              Empezar Pedido
            </button>
            <div id="takeaway-error" style="display: none; align-items: center; justify-content: center; gap: 8px; margin-top: 16px; padding: 12px 16px; background-color: rgba(171, 35, 30, 0.05); border: 1px solid rgba(171, 35, 30, 0.15); border-radius: var(--radius-md); color: var(--color-burgundy); font-size: 0.95rem; font-weight: 500;">
              <span class="material-symbols-outlined" style="font-size: 1.2rem;">info</span>
              <span>Por favor, selecciona un día y una franja horaria.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- View 3: Shop (Take Away) -->
      <div id="view-shop" class="view-section">
        <div style="padding-top: var(--space-2xl); padding-bottom: var(--space-xs);">
          <button class="btn-back" onclick="goToView('view-takeaway-location')"><span class="material-symbols-outlined">arrow_back</span> Volver</button>
        </div>
        
        <div class="shop-layout">
          <div class="shop-products">
            <!-- Sticky Nav (Tabs) -->
            <nav class="shop-categories-nav">
              <a href="#cat-cajas" class="cat-nav-link active" onclick="setActiveCat(this)">Cajas</a>
              <a href="#cat-salados" class="cat-nav-link" onclick="setActiveCat(this)">Salados</a>
              <a href="#cat-dulces" class="cat-nav-link" onclick="setActiveCat(this)">Dulces</a>
              <a href="#cat-bebidas" class="cat-nav-link" onclick="setActiveCat(this)">Bebidas</a>
            </nav>

            <!-- Categoría Cajas -->
            <section id="cat-cajas" class="shop-category-section">
              <h2 class="shop-category-title">Cajas Regalo</h2>
              <div style="display: flex; flex-direction: column; gap: var(--space-md);">
                
                <!-- Caja 3 -->
                <article class="shop-item">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/pack3box.webp" alt="Pack Degustación" class="shop-item-img" style="background-color: transparent; object-fit: contain;">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Pack "Degustación" (3 ud.)</h3>
                    <p class="shop-item-desc">Caja pequeña ideal para degustar. Incluye 3 Murcianitos clásicos.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">7,00€</span>
                  </div>
                  <div class="quantity-selector">
                    <button class="qty-btn">-</button>
                    <span>0</span>
                    <button class="qty-btn">+</button>
                  </div>
                </article>

                <!-- Caja 6 -->
                <article class="shop-item">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/pack6box.webp" alt="Pack La Cuadrilla" class="shop-item-img" style="background-color: transparent; object-fit: contain;">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Pack "La Cuadrilla" (6 ud.)</h3>
                    <p class="shop-item-desc">Caja surtida con 2 Clásicos, 2 Trufados y 2 Ibéricos.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">14,00€</span>
                  </div>
                  <div class="quantity-selector">
                    <button class="qty-btn">-</button>
                    <span>0</span>
                    <button class="qty-btn">+</button>
                  </div>
                </article>

                <!-- Caja 12 -->
                <article class="shop-item">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/pack12box.webp" alt="Pack El Bando" class="shop-item-img" style="background-color: transparent; object-fit: contain;">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Pack "El Bando" (12 ud.)</h3>
                    <p class="shop-item-desc">Caja grande para celebraciones. Sabores a elegir.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">25,00€</span>
                  </div>
                  <div class="quantity-selector">
                    <button class="qty-btn">-</button>
                    <span>0</span>
                    <button class="qty-btn">+</button>
                  </div>
                </article>
              </div>
            </section>

            <!-- Categoría Salados -->
            <section id="cat-salados" class="shop-category-section">
              <h2 class="shop-category-title">Murcianitos Salados</h2>
              <div style="display: flex; flex-direction: column; gap: var(--space-md);">
                
                <article class="shop-item">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/img3804.webp" alt="Clásico" class="shop-item-img">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Murcianito Clásico</h3>
                    <p class="shop-item-desc">Ternera especiada, chorizo, huevo duro y el hojaldre perfecto.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,50€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

                <article class="shop-item">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/img3798.webp" alt="Ibérico" class="shop-item-img">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Murcianito Ibérico <span class="badge badge-burgundy" style="font-size: 0.6rem; padding: 2px 6px; margin-left: 8px; vertical-align: middle;">Nuevo</span></h3>
                    <p class="shop-item-desc">Cerdo ibérico con toque de Pimentón de la Vera.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,80€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

                <article class="shop-item">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/img3826.webp" alt="Trufado" class="shop-item-img">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Murcianito Trufado</h3>
                    <p class="shop-item-desc">Ternera con crema de boletus y trufa negra.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,90€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

                <article class="shop-item">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/img3825.webp" alt="Cuaresma" class="shop-item-img">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Edición "Cuaresma"</h3>
                    <p class="shop-item-desc">Bacalao, tomate frito artesano y pimientos asados.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,80€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

                <article class="shop-item">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/img3804.webp" alt="Cabra" class="shop-item-img" style="filter: contrast(1.1);">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Murcianito de Cabra</h3>
                    <p class="shop-item-desc">Ternera, cebolla caramelizada y queso de cabra fundido.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,80€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

                <article class="shop-item">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/img3798.webp" alt="Vegano" class="shop-item-img" style="filter: saturate(1.2);">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Murcianito Vegano <span class="badge badge-gold" style="font-size: 0.6rem; padding: 2px 6px; margin-left: 8px; vertical-align: middle;">Vegano</span></h3>
                    <p class="shop-item-desc">Heura especiada, verduras asadas y hojaldre 100% vegetal.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,80€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

              </div>
            </section>

            <!-- Categoría Dulces -->
            <section id="cat-dulces" class="shop-category-section">
              <h2 class="shop-category-title">Murcianitos Dulces</h2>
              <div style="display: flex; flex-direction: column; gap: var(--space-md);">
                
                <article class="shop-item">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/img3825.webp" alt="Chocolate" class="shop-item-img">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Murcianito de Chocolate</h3>
                    <p class="shop-item-desc">Hojaldre relleno de crema de chocolate belga y avellanas.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,20€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

                <article class="shop-item">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/img3825.webp" alt="Cabello de Ángel" class="shop-item-img">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Murcianito Cabello de Ángel</h3>
                    <p class="shop-item-desc">El clásico relleno dulce tradicional con un toque de canela.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,00€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

                <article class="shop-item">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/img3825.webp" alt="Crema" class="shop-item-img">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Murcianito de Crema</h3>
                    <p class="shop-item-desc">Suave crema pastelera tostada con vainilla bourbon.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,20€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

                <article class="shop-item">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/img3825.webp" alt="Pistacho" class="shop-item-img" style="filter: hue-rotate(-30deg);">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Murcianito de Pistacho</h3>
                    <p class="shop-item-desc">Relleno de praliné de pistacho verde y chocolate blanco.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,50€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

                <article class="shop-item">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/img3825.webp" alt="Turrón" class="shop-item-img" style="filter: brightness(1.1);">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Murcianito de Turrón</h3>
                    <p class="shop-item-desc">Suave crema de turrón de Jijona con almendras tostadas.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,50€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

                <article class="shop-item">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/img3825.webp" alt="Lemon Pie" class="shop-item-img" style="filter: contrast(1.2) saturate(1.5);">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Murcianito Lemon Pie</h3>
                    <p class="shop-item-desc">Crema de limón ácida coronada con dulce merengue italiano.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,50€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

              </div>
            </section>

            <!-- Categoría Bebidas -->
            <section id="cat-bebidas" class="shop-category-section">
              <h2 class="shop-category-title">Bebidas</h2>
              <div style="display: flex; flex-direction: column; gap: var(--space-md);">
                
                <article class="shop-item">
                  <img src="https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=400" alt="Agua" class="shop-item-img">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Agua Mineral (500ml)</h3>
                    <p class="shop-item-desc">Botella de agua mineral natural.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">1,50€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>
                
                <article class="shop-item">
                  <img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400" alt="Coca Cola" class="shop-item-img">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Refresco Cola (Lata)</h3>
                    <p class="shop-item-desc">Lata de 33cl bien fría.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,00€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

                <article class="shop-item">
                  <img src="https://images.unsplash.com/photo-1622260614153-03223fb72052?q=80&w=400" alt="Naranja" class="shop-item-img">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Refresco Naranja (Lata)</h3>
                    <p class="shop-item-desc">Lata de 33cl bien fría.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,00€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

                <article class="shop-item">
                  <img src="https://images.unsplash.com/photo-1622260614153-03223fb72052?q=80&w=400" alt="Limón" class="shop-item-img" style="filter: hue-rotate(60deg);">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Refresco Limón (Lata)</h3>
                    <p class="shop-item-desc">Lata de 33cl bien fría.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,00€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

                <article class="shop-item">
                  <img src="https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=400" alt="Zumo" class="shop-item-img">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Zumo de Naranja Natural</h3>
                    <p class="shop-item-desc">Recién exprimido (300ml).</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,50€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

                <article class="shop-item">
                  <img src="https://images.unsplash.com/photo-1563514963351-512c1f544621?q=80&w=400" alt="Cerveza" class="shop-item-img" style="filter: hue-rotate(-20deg) saturate(1.2);">
                  <div class="shop-item-details">
                    <h3 class="shop-item-title">Cerveza Estrella de Levante</h3>
                    <p class="shop-item-desc">Lata de 33cl de la clásica cerveza murciana.</p>
                    <span class="card-price" style="font-size: 1.1rem; color: var(--color-burgundy);">2,00€</span>
                  </div>
                  <div class="quantity-selector"><button class="qty-btn">-</button><span>0</span><button class="qty-btn">+</button></div>
                </article>

              </div>
            </section>
          </div>

          <!-- Columna Derecha: Carrito -->
          <aside class="cart-sidebar" style="position: sticky; top: calc(80px + var(--space-xl)); height: fit-content; max-height: calc(100vh - 120px); overflow-y: auto;">
            <h2 class="cart-header">Tu Pedido</h2>
            
            <div class="cart-items-container" style="display: flex; flex-direction: column; gap: var(--space-sm); margin-bottom: var(--space-lg);">
              <div style="color: var(--text-secondary); font-size: 0.9rem; text-align: center; padding: var(--space-md) 0;">Tu cesta está vacía</div>
            </div>
            
            <div class="cart-total">
              <span>Total</span>
              <span>0,00€</span>
            </div>

            <button class="btn btn-primary" style="width: 100%; justify-content: center;" onclick="goToView('view-checkout')">Finalizar Pedido</button>
            
            <div class="trust-badges">
              <div class="trust-badge">
                <span class="material-symbols-outlined" style="font-size:16px;">lock</span>
                Pago Seguro
              </div>
              <div class="trust-badge">
                <span class="material-symbols-outlined" style="font-size:16px;">local_shipping</span>
                Recogida Segura
              </div>
          </aside>
        </div>
      </div>

      <!-- View 4: Checkout -->
      <div id="view-checkout" class="view-section">
        <!-- Header -->
        <div style="padding-top: var(--space-2xl); padding-bottom: var(--space-xs);">
          <button class="btn-back" onclick="goToView('view-shop')"><span class="material-symbols-outlined">arrow_back</span> Volver</button>
        </div>
        <div style="max-width: 650px; margin: 0 auto; padding-bottom: 220px;">
          <div style="background-color: var(--surface-card); padding: var(--space-xl); border-radius: var(--radius-lg); box-shadow: 0 10px 40px -10px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
            <h1 style="font-family: var(--font-headline); font-size: clamp(1.5rem, 6vw, 2.2rem); margin-bottom: var(--space-xl); color: var(--color-ink);">Detalles del pedido</h1>
          
          <div id="checkout-pickup-info" style="display: none; align-items: center; gap: 12px; font-size: 0.95rem; color: var(--text-secondary); background: var(--color-cream); border: 1px solid rgba(197,160,89,0.3); padding: 12px 16px; border-radius: var(--radius-md); margin-bottom: var(--space-xl);"></div>

          <div style="margin-bottom: var(--space-2xl);">
            <div id="checkout-items-list" style="display: flex; flex-direction: column; gap: var(--space-sm); margin-bottom: var(--space-lg);">
              <!-- JS will populate items here -->
            </div>
            
            <div class="cart-total" style="background-color: var(--surface-card); padding: var(--space-md) var(--space-lg); border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.08); margin-top: var(--space-lg); margin-bottom: 0; align-items: center;">
              <span style="font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Total</span>
              <span id="checkout-total-text" style="color: var(--color-ink); font-size: 1.25rem; font-weight: 700;">0,00 €</span>
            </div>
          </div>

          <hr style="border: none; border-top: 1px dashed rgba(0,0,0,0.1); margin: 0 0 var(--space-2xl) 0;">

          <!-- Cliente -->
          <h2 style="font-family: var(--font-headline); font-size: 1.6rem; margin-bottom: var(--space-md); color: var(--color-ink);">Datos del cliente</h2>
          <div style="display: flex; flex-direction: column; gap: var(--space-lg); margin-bottom: var(--space-2xl);">
            <div class="checkout-input-group">
              <label>NOMBRE</label>
              <input type="text" placeholder="Nombre">
            </div>
            <div class="checkout-input-group">
              <label>EMAIL</label>
              <input type="email" placeholder="Email">
            </div>
            <div class="checkout-input-group">
              <label>TELÉFONO</label>
              <div style="display: flex; align-items: center; border: 1px solid rgba(0,0,0,0.1); border-radius: 8px; background: var(--color-cream); padding: 0 16px; transition: border-color 0.3s ease; height: 56px; box-sizing: border-box;">
                <span style="font-size: 0.95rem; margin-right: 8px; font-weight: 600; font-family: var(--font-body); color: var(--color-ink);">ES</span>
                <span class="material-symbols-outlined" style="font-size: 1rem; color: var(--text-secondary); margin-right: 8px;">arrow_drop_down</span>
                <input type="tel" placeholder="Teléfono" style="border: none; background: transparent; padding: 0; box-shadow: none; flex: 1; height: 100%;">
              </div>
            </div>
            <div class="checkout-input-group">
              <label>OBSERVACIONES (OPCIONAL)</label>
              <input type="text" placeholder="Añade información">
            </div>
          </div>

          <!-- Método de pago -->
          <h2 style="font-family: var(--font-headline); font-size: 1.2rem; margin-bottom: var(--space-md);">Método de pago</h2>
          <div style="display: flex; flex-direction: column; margin-bottom: var(--space-2xl); border: 1px solid rgba(0,0,0,0.15); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-white); box-shadow: var(--shadow-sm);">
            <label class="payment-method-btn selected" style="border: none; border-bottom: 1px solid rgba(0,0,0,0.15); border-radius: 0; box-shadow: none; margin: 0; cursor: pointer; padding: var(--space-md) var(--space-lg);">
              <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <input type="radio" name="payment_method" value="apple_google_pay" checked style="width: 20px; height: 20px; accent-color: var(--color-burgundy); margin: 0; cursor: pointer;">
                  <span style="font-size: 1.05rem; font-weight: 500;">Apple Pay o Google Pay</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <div style="border: 1px solid rgba(0,0,0,0.2); border-radius: 4px; display: flex; align-items: center; justify-content: center; height: 26px; width: 44px; background: #fff; box-sizing: border-box;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" style="height: 12px; width: auto;">
                  </div>
                  <div style="border: 1px solid rgba(0,0,0,0.2); border-radius: 4px; display: flex; align-items: center; justify-content: center; height: 26px; width: 44px; background: #fff; box-sizing: border-box;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" style="height: 12px; width: auto;">
                  </div>
                </div>
              </div>
            </label>
            <label class="payment-method-btn" style="border: none; border-radius: 0; box-shadow: none; margin: 0; cursor: pointer; padding: var(--space-md) var(--space-lg);">
              <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <input type="radio" name="payment_method" value="credit_card" style="width: 20px; height: 20px; accent-color: var(--color-burgundy); margin: 0; cursor: pointer;">
                  <span style="font-size: 1.05rem; font-weight: 500;">Pago con Tarjeta</span>
                </div>
                <span class="material-symbols-outlined" style="font-size: 28px; color: var(--text-secondary);">credit_card</span>
              </div>
            </label>
          </div>

          <!-- Términos -->
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: var(--space-xl);">
            <input type="checkbox" id="terms" style="width: 20px; height: 20px; accent-color: var(--color-burgundy); cursor: pointer;">
            <label for="terms" style="font-size: 0.95rem; cursor: pointer;">Aceptar <a href="#" id="openTermsModal" style="color: var(--color-ink); text-decoration: underline;">Términos y Condiciones</a></label>
          </div>
          </div>
        </div>
        
        <!-- Botón flotante -->
        <div style="position: fixed; bottom: 0; left: 0; width: 100%; background: var(--surface-light); padding: var(--space-xl) var(--space-xl) var(--space-3xl) var(--space-xl); border: none; z-index: 100;">
          <div style="max-width: 600px; margin: 0 auto;">
            <button class="btn btn-primary" style="width: 100%; justify-content: center; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; border-radius: 4px; padding: 18px; font-size: 1rem; box-shadow: none !important; transform: none !important;">
              Pagar <span id="checkout-pay-btn-total">0,00 €</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  
</main>

<?php get_footer(); ?>
