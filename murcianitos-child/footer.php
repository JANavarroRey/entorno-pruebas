</div><!-- #content -->

<footer class="site-footer">
  <!-- Top decorative edge (Olas SVG) -->
  <div class="footer-wave">
    <svg viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0,48 C240,48 480,0 720,0 C960,0 1200,48 1440,48 L1440,48 L0,48 Z" fill="var(--color-ink)"></path>
    </svg>
  </div>

  <div class="container">
    <div class="footer-grid">
      <!-- Columna 1: Branding -->
      <div class="footer-brand">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/logo/logoblanconew.webp" alt="Murcianitos Logo" class="footer-logo">
        <p class="footer-description">El nuevo culto al hojaldre.<br>Receta de 1695, horneada hoy.</p>
        <div class="social-links">
          <a href="#" aria-label="Síguenos en Instagram"><span class="material-symbols-outlined">photo_camera</span></a>
          <a href="#" aria-label="Síguenos en TikTok"><span class="material-symbols-outlined">play_arrow</span></a>
        </div>
      </div>

      <!-- Columna 2: Navegación -->
      <div class="footer-nav-col">
        <h4>Descubre</h4>
        <ul class="footer-links">
          <li><a href="<?php echo home_url('/carta/'); ?>">La Carta</a></li>
          <li><a href="<?php echo home_url('/nuestra-historia/'); ?>">Nuestra Historia</a></li>
          <li><a href="<?php echo home_url('/eventos/'); ?>">Eventos & B2B</a></li>
          <li><a href="<?php echo home_url('/blog/'); ?>">El Culto (Blog)</a></li>
        </ul>
      </div>

      <!-- Columna 3: Ayuda -->
      <div class="footer-nav-col">
        <h4>Ayuda</h4>
        <ul class="footer-links">
          <li><a href="<?php echo home_url('/faq/'); ?>">Preguntas Frecuentes</a></li>
          <li><a href="<?php echo home_url('/donde-encontrarnos/'); ?>">Dónde Encontrarnos</a></li>
          <li><a href="<?php echo home_url('/contacto/'); ?>">Contacto</a></li>
          <li><a href="<?php echo home_url('/alergenos/'); ?>">Tabla de Alérgenos</a></li>
        </ul>
      </div>

      <!-- Columna 4: Newsletter -->
      <div class="footer-newsletter">
        <h4>Únete al culto</h4>
        <p>Déjanos tu email y entérate antes que nadie de nuestras ediciones limitadas.</p>
        <form class="newsletter-form" action="#" method="POST">
          <input type="email" placeholder="Tu correo electrónico" required aria-label="Correo electrónico">
          <button type="submit" class="btn btn-primary">Suscribirme</button>
        </form>
      </div>
    </div>

    <!-- Legal -->
    <div class="footer-bottom">
      <p>&copy; <?php echo date('Y'); ?> Murcianitos S.L. Todos los derechos reservados.</p>
      <div class="footer-legal-links">
        <a href="<?php echo home_url('/privacidad/'); ?>">Privacidad</a>
        <a href="<?php echo home_url('/aviso-legal/'); ?>">Aviso Legal</a>
        <a href="<?php echo home_url('/cookies/'); ?>">Cookies</a>
        <a href="<?php echo home_url('/accesibilidad/'); ?>">Accesibilidad</a>
      </div>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
