<?php
/**
 * Template Name: Accesibilidad
 */
if (!defined('ABSPATH')) exit;

get_header();
?>

<style>

    .policy-layout {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 var(--space-md) var(--space-4xl);
      color: var(--text-secondary);
      line-height: 1.8;
      font-size: 1.1rem;
    }
    
    .policy-layout h2 {
      color: var(--text-primary);
      font-family: var(--font-headline);
      font-size: 2rem;
      margin-top: var(--space-3xl);
      margin-bottom: var(--space-md);
    }
    
    .policy-layout h3 {
      color: var(--text-primary);
      font-family: var(--font-headline);
      font-size: 1.5rem;
      margin-top: var(--space-2xl);
      margin-bottom: var(--space-sm);
    }
    
    .policy-layout p {
      margin-bottom: var(--space-md);
    }
    
    .policy-layout ul {
      margin-bottom: var(--space-md);
      padding-left: var(--space-xl);
      list-style-type: disc;
    }
    
    .policy-layout li {
      margin-bottom: var(--space-xs);
    }
    
    .grid-features {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-lg);
      margin-top: var(--space-xl);
    }
    
    @media (min-width: 768px) {
      .grid-features {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    .feature-card {
      border: 1px solid var(--border-light);
      padding: var(--space-lg);
      border-radius: 8px;
    }
  
</style>

<main>

    <section class="hero-section hero-center" style="min-height: 40vh; padding-top: calc(var(--space-5xl) + 80px); padding-bottom: var(--space-2xl); background-color: var(--surface-light); color: var(--color-ink);">
      <div class="container" data-reveal="fade-up">
        <span class="hero-label" style="color: var(--color-gold); font-family: var(--font-label); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;">Legal</span>
        <h1 class="hero-title" style="color: var(--text-primary);">Declaración de Accesibilidad</h1>
        <p class="hero-desc" style="color: var(--text-secondary);">Compromiso con la accesibilidad digital</p>
      </div>
    </section>

    <section class="section">
      <div class="container policy-layout" data-reveal="fade-up">
        
        <p>Murcianitos S.L. está comprometida con hacer accesible su sitio web de conformidad con el Real Decreto 1112/2018, de transposición de la Directiva (UE) 2016/2102 sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público.</p>

        <h2>Estado de Conformidad</h2>
        <p>Este sitio web es <strong>plenamente conforme</strong> con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 en su <strong>nivel AA</strong>, así como con múltiples criterios de nivel AAA.</p>
        <p>Nuestro sitio cumple también con la norma europea <strong>EN 301 549 V3.2.1 (2021-03)</strong> sobre requisitos de accesibilidad para productos y servicios TIC.</p>

        <h2>Características de Accesibilidad Implementadas</h2>
        
        <div class="grid-features">
          <div class="feature-card">
            <h3>Navegación por Teclado</h3>
            <ul>
              <li>Navegación completa con tecla Tab.</li>
              <li>Indicadores de foco visibles.</li>
              <li>Atajos de teclado para carruseles.</li>
              <li>Escape para cerrar menús y modales.</li>
            </ul>
          </div>
          
          <div class="feature-card">
            <h3>Lectores de Pantalla</h3>
            <ul>
              <li>Etiquetas ARIA completas.</li>
              <li>Regiones landmarks semánticas.</li>
              <li>Anuncios dinámicos (aria-live).</li>
              <li>Texto alternativo en imágenes.</li>
            </ul>
          </div>
          
          <div class="feature-card">
            <h3>Diseño Visual</h3>
            <ul>
              <li>Contraste mínimo 4.5:1 (nivel AA).</li>
              <li>Redimensionamiento hasta 200%.</li>
              <li>Diseño responsive y adaptable.</li>
              <li>Tipografía clara y legible.</li>
            </ul>
          </div>
          
          <div class="feature-card">
            <h3>Formularios</h3>
            <ul>
              <li>Etiquetas asociadas (label + input).</li>
              <li>Mensajes de error descriptivos.</li>
              <li>Validación de datos.</li>
              <li>Indicación de campos obligatorios.</li>
            </ul>
          </div>
        </div>

        <h2>Tecnologías de Accesibilidad</h2>
        <p>La accesibilidad de nuestro sitio web se basa en las siguientes tecnologías:</p>
        <ul>
          <li>HTML5 semántico.</li>
          <li>CSS3 con media queries de accesibilidad.</li>
          <li>JavaScript con gestión de foco y navegación por teclado.</li>
          <li>WAI-ARIA 1.2 para widgets interactivos.</li>
        </ul>

        <h2>Limitaciones Conocidas</h2>
        <p>A pesar de nuestros mejores esfuerzos, pueden existir algunas limitaciones:</p>
        <ul>
          <li><strong>Mapas interactivos:</strong> Los mapas pueden tener accesibilidad limitada.</li>
          <li><strong>Contenido de terceros:</strong> Algunos plugins de redes sociales embebidos pueden no ser totalmente accesibles.</li>
        </ul>

        <h2>Retroalimentación y Contacto</h2>
        <p>Sus comentarios sobre la accesibilidad de nuestro sitio web son importantes para nosotros. Si encuentra barreras de accesibilidad, por favor contáctenos:</p>
        <ul>
          <li><strong>Correo electrónico:</strong> <a href="mailto:info@murcianitos.com" style="color: var(--color-burgundy); text-decoration: underline;">info@murcianitos.com</a></li>
        </ul>
        <p>También puede utilizar nuestro formulario de contacto general indicando "Accesibilidad" en el asunto.</p>

        <h2>Nuestro Compromiso Continuo</h2>
        <ul>
          <li>Revisar y actualizar la accesibilidad de nuestro sitio web de forma regular.</li>
          <li>Formar a nuestro equipo en diseño y desarrollo accesible.</li>
          <li>Incorporar la accesibilidad desde las primeras fases de cualquier nuevo desarrollo.</li>
          <li>Escuchar activamente el feedback de usuarios con diversas capacidades.</li>
        </ul>

      </div>
    </section>
  
</main>


<?php get_footer(); ?>
