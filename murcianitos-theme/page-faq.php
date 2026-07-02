<?php
/**
 * Template Name: Faq
 */
if (!defined('ABSPATH')) exit;

get_header();
?>

<style>

    .faq-layout {
      max-width: 800px;
      margin: 0 auto;
      padding: var(--space-2xl) var(--space-md) var(--space-5xl);
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
    }
    
    .faq-item {
      background: #FFFFFF;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
      padding: 0;
      transition: all var(--duration-normal) var(--ease-smooth);
      border: 1px solid rgba(0,0,0,0.02);
      border-left: 4px solid transparent;
      overflow: hidden;
    }
    
    .faq-item:hover {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      transform: translateY(-2px);
      border-left-color: var(--color-gold);
    }
    
    .faq-question {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      font-family: var(--font-headline);
      font-size: 1.25rem;
      font-weight: 500;
      color: var(--color-ink);
      padding: var(--space-xl) var(--space-2xl);
      transition: color var(--duration-fast) var(--ease-smooth);
    }
    
    .faq-question:hover {
      color: var(--color-gold);
    }
    
    .faq-icon {
      color: var(--color-gold);
      transition: all var(--duration-normal) var(--ease-smooth);
      background: var(--surface-light);
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .faq-question:hover .faq-icon {
      background: var(--color-gold);
      color: white;
    }

    .faq-question span:first-child {
      padding-right: var(--space-md);
      line-height: 1.4;
    }
    
    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s var(--ease-smooth), opacity 0.4s var(--ease-smooth);
      opacity: 0;
      color: var(--text-secondary);
      font-family: var(--font-body);
      font-size: 1.1rem;
      line-height: 1.7;
      background-color: var(--surface-light);
    }
    
    .faq-answer-inner {
      padding: var(--space-lg) var(--space-2xl) var(--space-2xl);
      border-top: 1px solid rgba(0,0,0,0.05);
    }
    
    .faq-title {
      color: var(--text-primary);
      font-size: 3.5rem;
    }
    
    @media (max-width: 768px) {
      .faq-layout {
        padding: var(--space-xl) var(--space-sm) 180px;
      }
      .faq-question {
        padding: var(--space-md) var(--space-lg);
        font-size: 1.1rem;
      }
      .faq-answer-inner {
        padding: var(--space-md) var(--space-lg) var(--space-lg);
      }
      .faq-title {
        font-size: 2.2rem;
      }
    }
    
    /* Active state handled by JS */
    .faq-item.active {
      border-left-color: var(--color-burgundy);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    }
    .faq-item.active .faq-question {
      color: var(--color-burgundy);
    }
    .faq-item.active .faq-icon {
      transform: rotate(180deg);
      background: var(--color-burgundy);
      color: white;
    }
    .faq-item.active .faq-answer {
      max-height: 500px;
      opacity: 1;
    }
  
</style>

<main>

    <section class="section" style="padding-top: calc(var(--space-5xl) + 80px); background-color: var(--surface-light); min-height: 80vh;">
      <div class="container faq-layout" data-reveal="stagger">
        
        <div style="margin-bottom: var(--space-2xl); text-align: center;" data-reveal="fade-up">
          <h1 class="hero-title faq-title">Preguntas Frecuentes</h1>
          <p class="hero-desc" style="color: var(--text-secondary); font-size: 1.2rem; margin-top: 10px;">Todo lo que necesitas saber sobre nuestros Murcianitos.</p>
        </div>
        
        <div class="faq-item stagger-item">
          <div class="faq-question">
            <span>¿Cuánto tardan en llegar?</span>
            <span class="faq-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
          </div>
          <div class="faq-answer">
            <div class="faq-answer-inner">
              Los envíos se realizan de lunes a jueves. Si haces tu pedido antes de las 12:00h, lo recibes al día siguiente. Los pedidos de viernes a domingo se procesan el lunes.
            </div>
          </div>
        </div>

        <div class="faq-item stagger-item">
          <div class="faq-question">
            <span>¿Cómo debo calentarlos?</span>
            <span class="faq-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
          </div>
          <div class="faq-answer">
            <div class="faq-answer-inner">
              Para disfrutar de la mejor experiencia, precalienta el horno a 180ºC y calienta tu Murcianito durante 10-12 minutos. ¡Nunca uses microondas si quieres mantener el hojaldre crujiente!
            </div>
          </div>
        </div>

        <div class="faq-item stagger-item">
          <div class="faq-question">
            <span>¿Llevan algún tipo de conservante?</span>
            <span class="faq-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
          </div>
          <div class="faq-answer">
            <div class="faq-answer-inner">
              No, nuestros Murcianitos son 100% naturales, elaborados diariamente sin conservantes ni aditivos artificiales.
            </div>
          </div>
        </div>

        <div class="faq-item stagger-item">
          <div class="faq-question">
            <span>¿Hacen envíos para eventos grandes?</span>
            <span class="faq-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
          </div>
          <div class="faq-answer">
            <div class="faq-answer-inner">
              Sí, tenemos un departamento específico para eventos, bodas y regalos corporativos. Visita nuestra sección B2B o escríbenos a info@murcianitos.com.
            </div>
          </div>
        </div>

        <div class="faq-item stagger-item">
          <div class="faq-question">
            <span>¿Cómo conservo los Murcianitos si no los voy a comer en el día?</span>
            <span class="faq-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
          </div>
          <div class="faq-answer">
            <div class="faq-answer-inner">
              Recomendamos guardarlos en la nevera en su envase original. Aguantan en perfectas condiciones hasta 3 días. Recuerda calentarlos en el horno antes de consumirlos.
            </div>
          </div>
        </div>

        <div class="faq-item stagger-item">
          <div class="faq-question">
            <span>¿Ofrecéis opciones vegetarianas o sin gluten?</span>
            <span class="faq-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
          </div>
          <div class="faq-answer">
            <div class="faq-answer-inner">
              Por el momento nuestra receta tradicional incluye carne y gluten. Estamos trabajando en el obrador para conseguir la misma calidad excepcional en opciones alternativas, pero ¡todavía no están listas!
            </div>
          </div>
        </div>

        <div class="faq-item stagger-item">
          <div class="faq-question">
            <span>¿Puedo personalizar los pedidos para regalos?</span>
            <span class="faq-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
          </div>
          <div class="faq-answer">
            <div class="faq-answer-inner">
              ¡Claro! Si quieres enviar Murcianitos como regalo sorpresa, puedes añadir una nota personalizada y elegir un empaquetado especial durante el proceso de compra.
            </div>
          </div>
        </div>

        <div class="faq-item stagger-item">
          <div class="faq-question">
            <span>¿Los Murcianitos llegan congelados?</span>
            <span class="faq-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
          </div>
          <div class="faq-answer">
            <div class="faq-answer-inner">
              No, horneamos cada mañana y enviamos el producto fresco para que llegue a tu casa manteniendo absolutamente toda su calidad, textura y sabor original.
            </div>
          </div>
        </div>

      </div>
      
      <div class="container" style="text-align: center; margin-top: var(--space-xl); margin-bottom: var(--space-4xl);" data-reveal="fade-up">
        <p style="margin-bottom: var(--space-md); font-family: var(--font-headline); font-size: 1.5rem; color: var(--color-ink);">¿No encuentras lo que buscas?</p>
        <a href="<?php echo home_url('/contacto/'); ?>" class="btn btn-gold">Contacta con nosotros</a>
      </div>
    </section>

  
</main>

<script>
    // Simple accordion logic for FAQ
    document.addEventListener('DOMContentLoaded', () => {
      const questions = document.querySelectorAll('.faq-question');
      questions.forEach(q => {
        q.addEventListener('click', () => {
          const item = q.parentElement;
          const isActive = item.classList.contains('active');
          
          // Close all others
          document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
          
          // Toggle current
          if (!isActive) {
            item.classList.add('active');
          }
        });
      });
    });
  </script>


<?php get_footer(); ?>
