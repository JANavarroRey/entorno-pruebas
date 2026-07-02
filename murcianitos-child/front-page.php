<?php
/**
 * Template Name: Home Page (Front Page)
 * 
 * Replica exacta del diseño local (index.html) adaptada a WordPress.
 * Usa las mismas clases CSS que hero.css, cards.css, ticker.css, etc.
 */

get_header(); ?>

<main id="primary" class="site-main">

  <!-- 1. HERO SECTION (hero-fullscreen, NO "hero") -->
  <section class="hero-fullscreen">
    <!-- Background Image (position: fixed via CSS) -->
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/murcianitos.webp" alt="Murcianitos Fondo" class="hero-fullscreen-bg">
    <div class="hero-overlay"></div>

    <!-- Content -->
    <div class="hero-fullscreen-content">
      <h1 class="hero-title-giant" style="color: var(--color-white);">El nuevo culto al hojaldre</h1>
      <p class="hero-subtitle-gold">TRADICIÓN MURCIANA DESDE 1695. REINVENTADA PARA EL MUNDO</p>
      <div class="hero-actions" style="justify-content: center; margin-top: var(--space-xl);">
        <a href="<?php echo home_url('/pedir-ahora/'); ?>" class="btn btn-primary">Pedir Murcianitos</a>
        <a href="<?php echo home_url('/carta/'); ?>" class="btn btn-secondary"
          style="background: rgba(255,255,255,0.1); border-color: white; color: white;">Ver Carta</a>
      </div>
    </div>
  </section>

  <!-- 2. TICKER MARQUEE (burgundy) -->
  <div class="ticker-section" style="background-color: var(--color-burgundy);">
    <div class="ticker-track">
      <div class="ticker-content">
        <?php for($i=0; $i<8; $i++): ?>
        <span>PASTEL DE CARNE MURCIANO</span>
        <span class="ticker-dot">◆</span>
        <span>HONRAMOS LA TRADICIÓN</span>
        <span class="ticker-dot">◆</span>
        <span>REINVENTAMOS EL SABOR</span>
        <span class="ticker-dot">◆</span>
        <?php endfor; ?>
      </div>
    </div>
  </div>

  <!-- 3. ABOUT SECTION (Dark) -->
  <section class="section theme-dark" style="background-color: var(--surface-dark);">
    <div class="container about-grid">
      <div class="about-image">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/obrador-tradicion.webp" alt="Artesano en un obrador tradicional" data-parallax="true">
      </div>
      <div class="about-content">
        <div style="color: var(--color-gold); font-family: var(--font-label); font-size: var(--text-label); font-weight: 700; letter-spacing: 0.15em; display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-sm);">
          EST. 1695 <span style="display: block; width: 50px; height: 1px; background-color: var(--color-gold); opacity: 0.6;"></span>
        </div>
        <h2 class="hero-title">Tres siglos de tradición</h2>
        <p class="hero-desc">Protegemos el alma del pastel de carne murciano. Cada Murcianito es un tributo vivo a la
          receta original de 1695, elaborado a mano, con rellenos únicos y coronado por nuestro inconfundible hojaldre
          en espiral.</p>
        <a href="<?php echo home_url('/nuestra-historia/'); ?>" class="btn btn-ghost">Descubre Nuestra Historia</a>
      </div>
    </div>
  </section>

  <!-- 4. SELECCIÓN ESPECIAL (Light) -->
  <section class="section">
    <div class="container">
      <div style="text-align: center; max-width: 900px; margin: 0 auto;">
        <span class="hero-label" style="color: var(--color-gold);">Nuestros Favoritos</span>
        <h2 style="margin: var(--space-sm) 0;">Selección Especial</h2>
        <p style="font-family: var(--font-headline); font-style: italic; font-size: 1.25rem; color: var(--text-secondary); margin-top: var(--space-xs);">
          Una colección de clásicos y nuevas creaciones para enamorarte del hojaldre</p>
      </div>

      <div class="products-grid">
        <!-- Product 1 -->
        <article class="card-product">
          <div class="card-image-wrap">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/img3804.webp" alt="Murcianito Clásico" class="card-image">
            <div class="card-image-overlay"></div>
          </div>
          <div class="card-content">
            <h3 class="card-title">Murcianito Clásico</h3>
            <p class="card-desc">Ternera especiada, chorizo, huevo duro y el hojaldre perfecto</p>
          </div>
        </article>

        <!-- Product 2 -->
        <article class="card-product">
          <div class="card-badges"><span class="badge badge-burgundy">Nuevo</span></div>
          <div class="card-image-wrap">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/img3798.webp" alt="Murcianito Ibérico" class="card-image">
            <div class="card-image-overlay"></div>
          </div>
          <div class="card-content">
            <h3 class="card-title">Murcianito Ibérico</h3>
            <p class="card-desc">Cerdo ibérico con toque de Pimentón de la Vera</p>
          </div>
        </article>

        <!-- Product 3 -->
        <article class="card-product">
          <div class="card-badges"><span class="badge badge-gold">Pack de 6</span></div>
          <div class="card-image-wrap">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/pack6box.webp" alt="Pack La Cuadrilla" class="card-image">
            <div class="card-image-overlay"></div>
          </div>
          <div class="card-content">
            <h3 class="card-title">Pack "La Cuadrilla"</h3>
            <p class="card-desc">Caja degustación de 6 unidades. Ideal para compartir</p>
          </div>
        </article>

        <!-- Product 4 -->
        <article class="card-product">
          <div class="card-badges"><span class="badge badge-gold">Pack de 12</span></div>
          <div class="card-image-wrap">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/pack12box.webp" alt="Pack El Bando" class="card-image">
            <div class="card-image-overlay"></div>
          </div>
          <div class="card-content">
            <h3 class="card-title">Pack "El Bando"</h3>
            <p class="card-desc">Caja grande de 12 unidades para grandes celebraciones</p>
          </div>
        </article>

        <!-- Product 5 -->
        <article class="card-product">
          <div class="card-image-wrap">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/img3826.webp" alt="Murcianito Trufado" class="card-image">
            <div class="card-image-overlay"></div>
          </div>
          <div class="card-content">
            <h3 class="card-title">Murcianito Trufado</h3>
            <p class="card-desc">Ternera con crema de boletus y trufa negra</p>
          </div>
        </article>

        <!-- Product 6 -->
        <article class="card-product">
          <div class="card-image-wrap">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/img3825.webp" alt="Edición Cuaresma" class="card-image">
            <div class="card-image-overlay"></div>
          </div>
          <div class="card-content">
            <h3 class="card-title">Edición "Cuaresma"</h3>
            <p class="card-desc">Bacalao, tomate frito artesano y pimientos asados</p>
          </div>
        </article>
      </div>

      <div style="text-align: center; margin-top: var(--space-2xl);">
        <a href="<?php echo home_url('/carta/'); ?>" class="btn btn-secondary">Ver Todos los Sabores</a>
      </div>
    </div>
  </section>

  <!-- 5. TICKER MARQUEE (Gold) -->
  <div class="ticker-section" style="background-color: var(--color-gold); color: var(--color-ink);">
    <div class="ticker-track">
      <div class="ticker-content">
        <?php for($i=0; $i<8; $i++): ?>
        <span>TRADICIÓN</span>
        <span class="ticker-dot">◆</span>
        <span>ARTESANÍA</span>
        <span class="ticker-dot">◆</span>
        <span>SABOR</span>
        <span class="ticker-dot">◆</span>
        <?php endfor; ?>
      </div>
    </div>
  </div>

  <!-- 6. GIFTING BANNER -->
  <section class="gifting-banner">
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/rusticmurcianitosbox.webp" alt="Regalo" class="gifting-bg" style="opacity: 0.4;">
    <div class="container" style="position: relative; z-index: 2; max-width: 800px; margin: 0 auto;">
      <span style="display: block; font-family: var(--font-label); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--color-gold); margin-bottom: var(--space-md);">El Detalle Perfecto</span>
      <h2 style="font-size: clamp(2.5rem, 5vw, 4rem); margin: 0; line-height: 1.1; color: var(--color-white);">Comparte Historia,</h2>
      <h2 style="font-family: var(--font-headline); font-size: clamp(2.5rem, 5vw, 4rem); font-style: italic; font-weight: 400; color: var(--color-gold); margin: 0 0 var(--space-lg) 0; line-height: 1.1;">
        Saborea el Momento</h2>
      <p class="hero-desc" style="color: rgba(255, 255, 255, 0.9); margin: 0 auto var(--space-xl); max-width: 650px;">Una experiencia gastronómica premium diseñada para compartir y disfrutar.</p>
      <a href="<?php echo home_url('/carta/'); ?>#packs" class="btn btn-gold"
        style="padding: 14px 32px; font-family: var(--font-label); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700;">VER CAJAS DEGUSTACIÓN</a>
    </div>
  </section>

  <!-- 7. INSTAGRAM -->
  <section class="section">
    <div class="container">
      <div style="text-align: center; margin-bottom: var(--space-xl);">
        <span class="hero-label" style="color: var(--color-gold);">Únete al culto</span>
        <h2>@murcianitos_oficial</h2>
      </div>

      <div class="instagram-grid">
        <a href="https://www.instagram.com/murcianitos_oficial/" target="_blank" class="ig-item">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/metro.webp" alt="Campaña Metro">
        </a>
        <a href="https://www.instagram.com/murcianitos_oficial/" target="_blank" class="ig-item">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/cartel-gigante.webp" alt="Campaña Cartel Gigante">
        </a>
        <a href="https://www.instagram.com/murcianitos_oficial/" target="_blank" class="ig-item">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/caballete.webp" alt="Campaña Caballete">
        </a>
        <a href="https://www.instagram.com/murcianitos_oficial/" target="_blank" class="ig-item">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/lona-2.webp" alt="Campaña Lona">
        </a>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>
