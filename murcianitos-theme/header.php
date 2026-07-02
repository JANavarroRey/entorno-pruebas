<?php
/**
 * header.php — Tema Standalone Murcianitos
 *
 * Replica exacta del componente header.js, adaptada a PHP.
 * El JS de scroll/mobile se mantiene en main.js.
 */
if (!defined('ABSPATH')) exit;

$theme_uri = get_template_directory_uri();

// Determinar si la página necesita tema claro (fondo blanco)
$is_light = is_page(array(
    'nuestra-historia', 'historia', 'blog', 'carta',
    'pedir-ahora', 'contacto', 'faq', 'alergenos',
    'privacidad', 'aviso-legal', 'cookies', 'accesibilidad'
));

$light_class = $is_light ? ' is-light-theme' : '';
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W9B7ZZ9P');</script>
<!-- End Google Tag Manager -->
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="profile" href="https://gmpg.org/xfn/11">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9B7ZZ9P"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<?php wp_body_open(); ?>

<header class="site-header<?php echo $light_class; ?>">
  <div class="container header-container">
    <!-- Mobile Toggle -->
    <button class="mobile-toggle" aria-label="Abrir menú" style="z-index: 2; position: relative;">
      <span class="material-symbols-outlined">menu</span>
    </button>

    <!-- Desktop Nav Left -->
    <nav class="header-nav-left">
      <a href="<?php echo home_url('/'); ?>" class="nav-link<?php if (is_front_page()) echo ' active'; ?>">Inicio</a>
      <a href="<?php echo home_url('/nuestra-historia/'); ?>" class="nav-link<?php if (is_page('nuestra-historia')) echo ' active'; ?>">Historia</a>
      <a href="<?php echo home_url('/carta/'); ?>" class="nav-link<?php if (is_page('carta')) echo ' active'; ?>">Carta</a>
    </nav>

    <!-- Center Logo -->
    <a href="<?php echo home_url('/'); ?>" class="header-logo" style="z-index: 2; position: relative;">
      <img src="<?php echo $theme_uri; ?>/assets/images/logo/iconoblanco.webp" alt="Murcianitos" class="logo-light" />
      <img src="<?php echo $theme_uri; ?>/assets/images/logo/icononegro.webp" alt="Murcianitos" class="logo-dark" />
    </a>

    <!-- Desktop Nav Right -->
    <nav class="header-nav-right">
      <a href="<?php echo home_url('/eventos/'); ?>" class="nav-link<?php if (is_page('eventos')) echo ' active'; ?>">Eventos</a>
      <a href="<?php echo home_url('/blog/'); ?>" class="nav-link<?php if (is_page('blog') || (is_home() && !is_front_page()) || is_single()) echo ' active'; ?>">Blog</a>
      <a href="<?php echo home_url('/pedir-ahora/'); ?>" class="btn btn-primary" style="margin-left: var(--space-md);">Pedir Ahora</a>
    </nav>

    <!-- Mobile CTA -->
    <div class="mobile-cta" style="z-index: 2; position: relative;">
      <a href="<?php echo home_url('/pedir-ahora/'); ?>" class="btn" style="border: 1px solid rgba(197, 160, 89, 0.5); color: var(--color-gold); background: transparent; padding: 6px 14px; font-size: 0.75rem; font-family: var(--font-label); text-transform: uppercase; letter-spacing: 0.1em; border-radius: 4px;">Pedir</a>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu-overlay">
      <nav class="mobile-nav">
        <a href="<?php echo home_url('/'); ?>" class="nav-link<?php if (is_front_page()) echo ' active'; ?>">Inicio</a>
        <a href="<?php echo home_url('/nuestra-historia/'); ?>" class="nav-link<?php if (is_page('nuestra-historia')) echo ' active'; ?>">Historia</a>
        <a href="<?php echo home_url('/carta/'); ?>" class="nav-link<?php if (is_page('carta')) echo ' active'; ?>">Carta</a>
        <a href="<?php echo home_url('/eventos/'); ?>" class="nav-link<?php if (is_page('eventos')) echo ' active'; ?>">Eventos</a>
        <a href="<?php echo home_url('/blog/'); ?>" class="nav-link<?php if (is_page('blog') || (is_home() && !is_front_page()) || is_single()) echo ' active'; ?>">Blog</a>
      </nav>
    </div>
  </div>
</header>
