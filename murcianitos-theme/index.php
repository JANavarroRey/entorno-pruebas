<?php
/**
 * index.php — Fallback template obligatorio de WordPress
 *
 * WordPress requiere este archivo. Para la homepage usamos front-page.php.
 * Este template se usa para cualquier URL que no tenga un template específico.
 */
if (!defined('ABSPATH')) exit;

get_header();
?>

<main>
  <section class="section">
    <div class="container">
      <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
          <article>
            <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
            <?php the_excerpt(); ?>
          </article>
        <?php endwhile; ?>
      <?php else : ?>
        <p>No se encontraron entradas.</p>
      <?php endif; ?>
    </div>
  </section>
</main>

<?php get_footer(); ?>
