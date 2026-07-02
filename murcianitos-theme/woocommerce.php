<?php
/**
 * woocommerce.php — Integración nativa de WooCommerce para el tema Murcianitos
 *
 * Al existir este archivo, le decimos a WooCommerce que use sus propios
 * templates internos, pero inyectándolos dentro de nuestro diseño global (header/footer).
 * Esto arregla botones de carrito, galerías y zoom.
 */
if (!defined('ABSPATH')) exit;

get_header();
?>

<main class="site-main woocommerce-custom-wrapper" style="padding-top: var(--space-xl); padding-bottom: var(--space-xl);">
  <div class="container">
    <?php 
    // Mágia de WooCommerce: renderiza el producto, carrito o checkout correctamente.
    woocommerce_content(); 
    ?>
  </div>
</main>

<?php get_footer(); ?>
