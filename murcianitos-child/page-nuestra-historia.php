<?php
/**
 * Template Name: Nuestra Historia
 */

get_header(); ?>

<main>
    <section class="hero-section" style="background-color: var(--surface-light); min-height: 80vh; padding-top: calc(var(--space-5xl) + 100px); display: flex; align-items: center; overflow: hidden;">
      <div class="container" style="width: 100%;">
        <div style="display: grid; grid-template-columns: 1fr; gap: var(--space-4xl); align-items: center;">
          <style>
            @media (min-width: 992px) {
              .historia-hero-grid { grid-template-columns: 1fr 1fr !important; gap: var(--space-6xl) !important; }
            }
          </style>
          <div class="historia-hero-grid" style="display: grid; grid-template-columns: 1fr; gap: var(--space-4xl); align-items: center; position: relative;">
            
            <div class="hero-content" data-reveal="fade-up" style="max-width: 600px; z-index: 2;">
              <div style="color: var(--color-gold); font-family: var(--font-label); font-size: var(--text-label); font-weight: 700; letter-spacing: 0.15em; display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-lg); text-transform: uppercase;">
                EN CADA BOCADO <span style="display: block; width: 50px; height: 1px; background-color: var(--color-gold); opacity: 0.6;"></span>
              </div>
              <h1 class="hero-title-giant" style="color: var(--color-ink); white-space: normal; text-shadow: none; margin-bottom: var(--space-xl); text-align: left; font-size: clamp(3rem, 6vw, 5.5rem);">Tres siglos<br>de sabor<br>murciano</h1>
              <p class="hero-desc" style="color: var(--text-secondary); font-size: var(--text-body-lg); line-height: 1.6; text-align: left; max-width: 480px; margin: 0;">En 1695, una ordenanza del Concejo de Murcia definió la perfección del pastel de carne. Hoy, rescatamos esa herencia y lo reinventamos para el mundo.</p>
            </div>

            <div class="hero-image-container" style="position: relative; display: flex; justify-content: center; align-items: center; z-index: 1;">
              <div class="papiro-parallax-wrapper" style="width: 100%; display: flex; justify-content: center;">
                <img src="./src/assets/ordenanza-pastel-carne.webp" alt="Ordenanza Pastel de Carne" class="hero-papiro-img" style="max-width: 110%; height: auto; display: block; opacity: 0; mix-blend-mode: darken;">
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="story-section theme-dark" style="background-color: var(--surface-dark);">
      <div class="container">
        <div style="text-align: center; margin-bottom: var(--space-4xl);" data-reveal="fade-up">
          <h2 style="color: var(--color-cream);">El Legado</h2>
        </div>
        
        <div class="timeline" data-reveal="stagger">
          <div class="timeline-item stagger-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-year">1695</div>
              <h3 style="color: var(--color-cream);">La ordenanza del Concejo</h3>
              <p style="color: var(--text-on-dark-muted);">El nacimiento de un mito. El Concejo de Murcia dicta las estrictas normas que definen los ingredientes y la geometría perfecta del pastel de carne, garantizando una excelencia innegociable.</p>
            </div>
          </div>
          
          <div class="timeline-item stagger-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-year">Siglos XVIII-XIX</div>
              <h3 style="color: var(--color-cream);">Símbolo de Identidad</h3>
              <p style="color: var(--text-on-dark-muted);">De la norma al corazón. Lo que nació como una ordenanza se transformó en el orgullo de la gastronomía murciana. De las mesas nobles a las calles, el pastel de carne se consagró como nuestro mayor símbolo de identidad.</p>
            </div>
          </div>
          
          <div class="timeline-item stagger-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-year">Siglo XX</div>
              <h3 style="color: var(--color-cream);">Los obradores familiares</h3>
              <p style="color: var(--text-on-dark-muted);">Guardianes de la herencia. La receta perdura gracias al talento y trabajo de los pequeños obradores familiares. Maestros artesanos que dedican su vida a dominar el difícil arte de nuestro 'hojaldre infinito'.</p>
            </div>
          </div>
          
          <div class="timeline-item stagger-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-year">2026</div>
              <h3 style="color: var(--color-cream);">Murcianitos: la herencia reinventada</h3>
              <p style="color: var(--text-on-dark-muted);">Rescatamos la receta original y la elevamos para la ciudad contemporánea. Un formato premium, diseñado para deslumbrar y compartir, manteniendo intacto el lujo de nuestra artesanía.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Valores -->
    <section class="story-section">
      <div class="container">
        <div style="text-align: center; max-width: 800px; margin: 0 auto 60px;" data-reveal="fade-up">
          <h2 style="margin-bottom: var(--space-md);">Nuestro Método</h2>
          <p style="color: var(--text-secondary); font-style: italic; font-size: 1.1rem;">¿Qué nos hace únicos?</p>
        </div>
        
        <div class="values-grid" data-reveal="stagger">
          <div class="value-card stagger-item">
            <div class="value-icon-wrapper">
              <span class="material-symbols-outlined value-icon">bakery_dining</span>
            </div>
            <h3 style="margin-bottom: var(--space-sm);">Masa Madre</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-body-sm); line-height: 1.6;">Utilizamos masa madre de cultivo propio y harinas seleccionadas para un hojaldre ligero y digestivo.</p>
          </div>
          
          <div class="value-card stagger-item">
            <div class="value-icon-wrapper">
              <span class="material-symbols-outlined value-icon">eco</span>
            </div>
            <h3 style="margin-bottom: var(--space-sm);">100% Natural</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-body-sm); line-height: 1.6;">Sin conservantes, sin aditivos. Solo ingredientes frescos y de la más alta calidad.</p>
          </div>
          
          <div class="value-card stagger-item">
            <div class="value-icon-wrapper">
              <span class="material-symbols-outlined value-icon">history_edu</span>
            </div>
            <h3 style="margin-bottom: var(--space-sm);">Elaboración Manual</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-body-sm); line-height: 1.6;">Cada Murcianito se cierra a mano, garantizando que el relleno mantenga su jugosidad intacta.</p>
          </div>

          <div class="value-card stagger-item">
            <div class="value-icon-wrapper">
              <span class="material-symbols-outlined value-icon">straighten</span>
            </div>
            <h3 style="margin-bottom: var(--space-sm);">Formato mini</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-body-sm); line-height: 1.6;">El tamaño de la sofisticación. Dos bocados exactos pensados para el ritmo urbano. Perfecto para eventos premium.</p>
          </div>

          <div class="value-card stagger-item">
            <div class="value-icon-wrapper">
              <span class="material-symbols-outlined value-icon">cyclone</span>
            </div>
            <h3 style="margin-bottom: var(--space-sm);">Hojaldre en espiral</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-body-sm); line-height: 1.6;">La corona crujiente. El arte del hojaldre infinito requiere maestría técnica para lograr esa textura perfecta que atrapa y resguarda el sabor.</p>
          </div>

          <div class="value-card stagger-item">
            <div class="value-icon-wrapper">
              <span class="material-symbols-outlined value-icon">auto_awesome</span>
            </div>
            <h3 style="margin-bottom: var(--space-sm);">Rellenos de Autor</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-body-sm); line-height: 1.6;">Respetamos el legado, pero seguimos explorando. Diseñamos sabores contemporáneos y ediciones gourmet que elevan la receta clásica a la alta gastronomía.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section" style="background-color: var(--color-burgundy); color: var(--color-white); text-align: center; padding: var(--space-5xl) var(--space-md);">
      <div class="container" data-reveal="fade-up">
        <h2 style="color: var(--color-white); font-family: var(--font-headline); font-size: clamp(2rem, 4vw, 3.5rem); max-width: 900px; margin: 0 auto var(--space-2xl); font-weight: 400; line-height: 1.2;">
          La mejor forma de conocer nuestra<br>historia es probarla
        </h2>
        <a href="<?php echo wc_get_checkout_url(); ?>" class="btn btn-primary" style="background-color: var(--color-gold); color: var(--color-ink); border-color: var(--color-gold); padding: 14px 40px; font-size: 0.9rem; letter-spacing: 0.1em; text-transform: uppercase;">Pedir ahora</a>
      </div>
    </section>

  </main>

<?php get_footer(); ?>
