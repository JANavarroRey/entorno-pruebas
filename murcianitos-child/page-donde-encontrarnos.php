<?php
/**
 * Template Name: Dónde Encontrarnos
 */

get_header(); ?>

<main>
    <section class="hero-section hero-center" style="min-height: 40vh;">
      <div class="container" data-reveal="fade-up">
        <h1 class="hero-title">Nuestros Obradores</h1>
        <p class="hero-desc">Ven a visitarnos y disfruta del hojaldre recién horneado.</p>
      </div>
    </section>

    <!-- Tiendas Físicas -->
    <section class="section">
      <div class="container locations-grid" data-reveal="stagger">
        
        <div class="location-card stagger-item">
          <h2 class="location-title">Murcia Centro (Original)</h2>
          <div class="location-address">
            <span class="material-symbols-outlined">location_on</span>
            <p>Calle Mayor 12<br>30001 Murcia</p>
          </div>
          <div class="location-hours">
            <div class="hours-row">
              <strong>Lunes - Sábado</strong>
              <span>09:00 - 21:00</span>
            </div>
            <div class="hours-row">
              <strong>Domingos y Festivos</strong>
              <span>10:00 - 15:00</span>
            </div>
          </div>
          <a href="#" class="btn btn-secondary" style="width: 100%;">Cómo Llegar</a>
        </div>

        <div class="location-card stagger-item">
          <h2 class="location-title">Madrid (Pop-up)</h2>
          <div class="location-address">
            <span class="material-symbols-outlined">location_on</span>
            <p>Mercado de San Miguel<br>Plaza de San Miguel, s/n<br>28005 Madrid</p>
          </div>
          <div class="location-hours">
            <div class="hours-row">
              <strong>Lunes - Domingo</strong>
              <span>10:00 - 24:00</span>
            </div>
          </div>
          <a href="#" class="btn btn-secondary" style="width: 100%;">Cómo Llegar</a>
        </div>

      </div>
    </section>

    <!-- Delivery -->
    <section class="delivery-section" data-reveal="fade-up">
      <div class="container">
        <h2 style="color: var(--color-cream);">También a domicilio</h2>
        <p style="color: var(--text-on-dark-muted); max-width: 600px; margin: 0 auto;">Si vives en Murcia o Madrid ciudad, puedes pedir tus Murcianitos calientes a través de las principales plataformas de delivery.</p>
        
        <div class="delivery-apps">
          <div class="delivery-app">
            <span class="material-symbols-outlined">two_wheeler</span>
            Glovo
          </div>
          <div class="delivery-app">
            <span class="material-symbols-outlined">two_wheeler</span>
            Uber Eats
          </div>
          <div class="delivery-app">
            <span class="material-symbols-outlined">two_wheeler</span>
            Just Eat
          </div>
        </div>
      </div>
    </section>

  </main>

<?php get_footer(); ?>
