<?php
/**
 * Template Name: Eventos
 */

get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="hero-section hero-center" style="background-image: linear-gradient(rgba(29,29,27,0.7), rgba(46,14,22,0.85)), url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop'); background-size: cover; background-position: center; min-height: 85vh; padding-top: var(--space-5xl); display: flex; align-items: center;">
      <div class="container" data-reveal="fade-up">
        <span class="hero-label">Eventos & B2B</span>
        <h1 class="hero-title" style="color: var(--color-cream); letter-spacing: -0.02em;">Marca la diferencia en tu evento</h1>
        <p class="hero-desc" style="color: var(--color-cream); opacity: 0.9;">Soluciones personalizadas para catering, bodas y regalos corporativos.</p>
        <div class="hero-actions" style="margin-top: var(--space-xl); justify-content: center;">
          <a href="#contacto-eventos" class="btn btn-primary" style="padding: 14px 32px;">Solicitar Presupuesto</a>
        </div>
      </div>
    </section>

    <!-- Servicios -->
    <section class="section services-section" style="background-color: var(--color-cream);">
      <div class="container">
        <div style="text-align: center; max-width: 600px; margin: 0 auto;" data-reveal="fade-up">
          <span class="hero-label" style="color: var(--color-gold); font-family: var(--font-label); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; display: block; margin-bottom: var(--space-sm);">Diseñados a medida</span>
          <h2 style="font-family: var(--font-headline); color: var(--color-ink); font-size: clamp(2rem, 4vw, 2.5rem); margin-bottom: var(--space-sm);">Nuestros Servicios</h2>
          <p style="color: var(--text-secondary); font-size: 1.1rem; font-weight: 300;">Adaptamos la experiencia Murcianitos a tus necesidades.</p>
        </div>
        
        <div class="services-grid" data-reveal="stagger">
          <div class="service-card stagger-item">
            <div class="service-icon-wrapper">
              <span class="material-symbols-outlined service-icon">corporate_fare</span>
            </div>
            <h3>Corporativo</h3>
            <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.6;">Cajas personalizadas con el logo de tu empresa para regalar a empleados o clientes.</p>
          </div>
          <div class="service-card stagger-item">
            <div class="service-icon-wrapper">
              <span class="material-symbols-outlined service-icon">celebration</span>
            </div>
            <h3>Bodas & Fiestas</h3>
            <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.6;">Stands de Murcianitos o recena con mini-pasteles de carne que sorprenderán a tus invitados.</p>
          </div>
          <div class="service-card stagger-item">
            <div class="service-icon-wrapper">
              <span class="material-symbols-outlined service-icon">restaurant_menu</span>
            </div>
            <h3>Hostelería</h3>
            <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.6;">Distribución B2B para cafeterías y restaurantes que quieran ofrecer nuestro producto.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Formulario -->
    <section class="section theme-dark" id="contacto-eventos" style="scroll-margin-top: 80px;">
      <div class="container contact-layout">
        <div data-reveal="fade-up">
          <span class="hero-label" style="color: var(--color-gold); font-family: var(--font-label); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;">Hablemos</span>
          <h2 class="hero-title" style="color: var(--color-cream); font-family: var(--font-headline);">Solicita información<br>sin compromiso</h2>
          <p style="color: var(--text-on-dark-muted); margin-bottom: var(--space-xl); line-height: 1.6;">Cuéntanos qué tienes en mente y nuestro equipo te preparará<br>una propuesta a medida en menos de 24 horas.</p>
          
          <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: var(--space-md);">
            <li style="display: flex; align-items: center; gap: var(--space-sm);">
              <span class="material-symbols-outlined" style="color: var(--color-gold);">check_circle</span>
              <span>Presupuesto personalizado</span>
            </li>
            <li style="display: flex; align-items: center; gap: var(--space-sm);">
              <span class="material-symbols-outlined" style="color: var(--color-gold);">check_circle</span>
              <span>Muestras de degustación</span>
            </li>
            <li style="display: flex; align-items: center; gap: var(--space-sm);">
              <span class="material-symbols-outlined" style="color: var(--color-gold);">check_circle</span>
              <span>Atención dedicada</span>
            </li>
          </ul>
        </div>
        
        <div class="form-card-light" style="background-color: var(--surface-card); padding: var(--space-2xl); border-radius: var(--radius-lg);" data-reveal="fade-up">
          <form onsubmit="event.preventDefault(); alert('Formulario de contacto estático para maqueta.');">
            <div class="form-group">
              <label class="form-label">Nombre Completo / Empresa</label>
              <input type="text" class="form-input" placeholder="Tu nombre">
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-input" placeholder="tucorreo@ejemplo.com">
            </div>
            <div class="form-group">
              <label class="form-label">Teléfono <span style="font-size: 0.8em; color: var(--text-muted); font-weight: normal;">(Opcional)</span></label>
              <input type="tel" class="form-input" placeholder="600 000 000">
            </div>
            <div class="form-group">
              <label class="form-label">Tipo de Evento</label>
              <select class="form-select" required>
                <option value="" disabled selected hidden>Selecciona una opción</option>
                <option value="Regalo Corporativo">Regalo Corporativo</option>
                <option value="Boda / Celebración">Boda / Celebración</option>
                <option value="Distribución Hostelería">Distribución Hostelería</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Mensaje</label>
              <textarea class="form-textarea" placeholder="Cuéntanos más detalles..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">Enviar Solicitud</button>
          </form>
        </div>
      </div>
    </section>

  </main>

<?php get_footer(); ?>
