<?php
/**
 * The header for Astra Child Theme.
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="profile" href="https://gmpg.org/xfn/11">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<?php
// Determine theme based on current page
$is_light_theme = is_page(array('nuestra-historia', 'blog', 'carta', 'contacto', 'faq', 'alergenos', 'privacidad', 'aviso-legal', 'cookies', 'accesibilidad')) || is_checkout() || is_cart();
$theme_class = $is_light_theme ? 'is-light-theme' : '';
?>

<header class="site-header <?php echo esc_attr($theme_class); ?>">
  <div class="container header-container">
    <!-- Mobile Toggle -->
    <button class="mobile-toggle" aria-label="Abrir menú" style="z-index: 2; position: relative;">
      <span class="material-symbols-outlined">menu</span>
    </button>

    <!-- Desktop Nav Left -->
    <nav class="header-nav-left">
      <a href="<?php echo home_url('/'); ?>" class="nav-link <?php echo is_front_page() ? 'active' : ''; ?>">Inicio</a>
      <a href="<?php echo home_url('/nuestra-historia/'); ?>" class="nav-link <?php echo is_page('nuestra-historia') ? 'active' : ''; ?>">Historia</a>
      <a href="<?php echo home_url('/carta/'); ?>" class="nav-link <?php echo is_page('carta') ? 'active' : ''; ?>">Carta</a>
    </nav>

    <!-- Center Logo -->
    <a href="<?php echo home_url('/'); ?>" class="header-logo" style="z-index: 2; position: relative;">
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/logo/iconoblanco.webp" alt="Murcianitos" class="logo-light" />
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/logo/icononegro.webp" alt="Murcianitos" class="logo-dark" />
    </a>

    <!-- Desktop Nav Right -->
    <nav class="header-nav-right">
      <a href="<?php echo home_url('/eventos/'); ?>" class="nav-link <?php echo is_page('eventos') ? 'active' : ''; ?>">Eventos</a>
      <a href="<?php echo home_url('/blog/'); ?>" class="nav-link <?php echo is_home() || is_single() ? 'active' : ''; ?>">Blog</a>
      <a href="<?php echo wc_get_checkout_url(); ?>" class="btn btn-primary" style="margin-left: var(--space-md);">Pedir Ahora</a>
    </nav>

    <!-- Mobile CTA -->
    <div class="mobile-cta" style="z-index: 2; position: relative;">
      <a href="<?php echo wc_get_checkout_url(); ?>" class="btn" style="border: 1px solid rgba(197, 160, 89, 0.5); color: var(--color-gold); background: transparent; padding: 6px 14px; font-size: 0.75rem; font-family: var(--font-label); text-transform: uppercase; letter-spacing: 0.1em; border-radius: 4px;">Pedir</a>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu-overlay">
      <nav class="mobile-nav">
        <a href="<?php echo home_url('/'); ?>" class="nav-link <?php echo is_front_page() ? 'active' : ''; ?>">Inicio</a>
        <a href="<?php echo home_url('/nuestra-historia/'); ?>" class="nav-link <?php echo is_page('nuestra-historia') ? 'active' : ''; ?>">Historia</a>
        <a href="<?php echo home_url('/carta/'); ?>" class="nav-link <?php echo is_page('carta') ? 'active' : ''; ?>">Carta</a>
        <a href="<?php echo home_url('/eventos/'); ?>" class="nav-link <?php echo is_page('eventos') ? 'active' : ''; ?>">Eventos</a>
        <a href="<?php echo home_url('/blog/'); ?>" class="nav-link <?php echo is_home() || is_single() ? 'active' : ''; ?>">Blog</a>
      </nav>
    </div>
  </div>
</header>

<div id="content" class="site-content">
