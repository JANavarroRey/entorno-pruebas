<?php
/**
 * Template Name: Contacto
 */
if (!defined('ABSPATH')) exit;

get_header();
?>

<style>

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-4xl);
      padding: var(--space-4xl) 0;
    }
    @media (min-width: 1024px) {
      .contact-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--space-xl);
    }
    
    .contact-item {
      display: flex;
      gap: var(--space-md);
    }
    .contact-icon {
      color: var(--color-burgundy);
      font-size: 32px;
    }
    .contact-details h3 {
      font-family: var(--font-label);
      font-size: var(--text-label);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: var(--space-xs);
    }
    .contact-details p {
      color: var(--text-secondary);
      margin-bottom: 0;
    }
    
    .contact-map {
      width: 100%;
      height: 300px;
      background-color: var(--color-cream-dark);
      border-radius: var(--radius-lg);
      margin-top: var(--space-xl);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
    }
  
</style>

<main>

    <section class="section" style="min-height: 100vh; display: flex; align-items: center; padding-top: 100px; padding-bottom: var(--space-4xl); background-color: var(--surface-light);">
      <div class="container contact-grid">
        <div data-reveal="fade-up" style="display: flex; flex-direction: column; justify-content: center;">
          <div style="display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-md);">
            <span class="hero-label" style="color: var(--color-gold); font-family: var(--font-label); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;">Te escuchamos</span>
            <div style="height: 1px; width: 60px; background-color: var(--color-gold); opacity: 0.5;"></div>
          </div>
          <h2 class="hero-title" style="color: var(--text-primary); font-family: var(--font-headline); margin-bottom: var(--space-lg); font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 1.1;">Buzón de<br>sugerencias</h2>
          <p style="color: var(--text-secondary); margin-bottom: 0; line-height: 1.6; max-width: 500px; font-size: 1.1rem;">Tu opinión es fundamental para seguir mejorando. ¿Tienes alguna sugerencia sobre nuestros Murcianitos o necesitas ayuda con un pedido reciente? Escríbenos y nuestro equipo te responderá lo antes posible.</p>
        </div>
        
        <div class="form-card-light" style="background-color: var(--surface-card); padding: var(--space-2xl); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);" data-reveal="fade-up">
          <form onsubmit="event.preventDefault(); alert('Mensaje enviado. (Maqueta visual)');">
            <div class="form-group">
              <label class="form-label">Nombre Completo</label>
              <input type="text" class="form-input" placeholder="Tu nombre">
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-input" placeholder="tucorreo@ejemplo.com">
            </div>
            <div class="form-group">
              <label class="form-label">Asunto</label>
              <select class="form-select" required>
                <option value="" disabled selected hidden>Selecciona una opción</option>
                <option value="Sugerencia">Sugerencia</option>
                <option value="Mi pedido">Mi pedido</option>
                <option value="Queja / Incidencia">Queja / Incidencia</option>
                <option value="Consulta general">Consulta general</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Mensaje</label>
              <textarea class="form-textarea" placeholder="Cuéntanos más detalles..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; padding: 16px; font-weight: 700; letter-spacing: 0.1em;">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  
</main>

<?php get_footer(); ?>
