<?php
/**
 * functions.php — Tema Standalone Murcianitos
 *
 * Responsabilidades:
 * - Enqueue de estilos y scripts
 * - Soporte de funcionalidades WP (title-tag, menus, thumbnails)
 * - Soporte WooCommerce
 * - Configuración de templates personalizados
 */

// ─── Seguridad: bloquear acceso directo ───
if (!defined('ABSPATH')) {
    exit;
}

// ─── 1. Soporte del tema ───
function murcianitos_setup() {
    // WordPress gestiona el <title>
    add_theme_support('title-tag');

    // Imágenes destacadas
    add_theme_support('post-thumbnails');

    // HTML5 semántico
    add_theme_support('html5', array(
        'search-form', 'comment-form', 'comment-list',
        'gallery', 'caption', 'style', 'script'
    ));

    // WooCommerce
    add_theme_support('woocommerce');
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');

    // Menús de navegación (por si se necesitan en el futuro)
    register_nav_menus(array(
        'primary' => 'Navegación Principal',
        'footer'  => 'Navegación Footer',
    ));
}
add_action('after_setup_theme', 'murcianitos_setup');

// ─── 2. Enqueue de estilos y scripts ───
function murcianitos_enqueue_assets() {
    $theme_uri = get_template_directory_uri();
    $theme_ver = wp_get_theme()->get('Version');

    // CSS principal (contiene TODOS los estilos concatenados)
    wp_enqueue_style(
        'murcianitos-style',
        get_stylesheet_uri(),
        array(),
        $theme_ver
    );

    // GSAP (CDN) — defer para no bloquear
    wp_enqueue_script(
        'gsap-core',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
        array(),
        '3.12.5',
        true
    );

    wp_enqueue_script(
        'gsap-scrolltrigger',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
        array('gsap-core'),
        '3.12.5',
        true
    );

    // JS principal del tema (header scroll, tickers, reveals, accesibilidad)
    wp_enqueue_script(
        'murcianitos-main',
        $theme_uri . '/assets/js/main.js',
        array('gsap-core', 'gsap-scrolltrigger'),
        $theme_ver,
        true
    );

    // Pasar datos de WP a JS (por si hace falta en el futuro)
    wp_localize_script('murcianitos-main', 'murcianitosData', array(
        'themeUrl' => $theme_uri,
        'ajaxUrl'  => admin_url('admin-ajax.php'),
    ));
}
add_action('wp_enqueue_scripts', 'murcianitos_enqueue_assets');

// ─── 3. Desactivar estilos que no necesitamos ───
function murcianitos_dequeue_unwanted() {
    // Desactivar el emoji script/styles de WordPress
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
}
add_action('wp_enqueue_scripts', 'murcianitos_dequeue_unwanted', 20);

// ─── 4. Limpieza del <head> ───
function murcianitos_clean_head() {
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
}
add_action('init', 'murcianitos_clean_head');

// ─── 5. Auto-crear páginas al activar el tema ───
function murcianitos_create_required_pages() {
    $pages = array(
        'carta' => 'Carta',
        'nuestra-historia' => 'Nuestra Historia',
        'eventos' => 'Eventos',
        'blog' => 'Blog',
        'faq' => 'Preguntas Frecuentes',
        'privacidad' => 'Privacidad',
        'aviso-legal' => 'Aviso Legal',
        'cookies' => 'Cookies',
        'accesibilidad' => 'Accesibilidad',
        'contacto' => 'Contacto',
        'donde-encontrarnos' => 'Dónde Encontrarnos',
        'pedir-ahora' => 'Pedir Ahora'
    );

    foreach ($pages as $slug => $title) {
        $page_check = get_page_by_path($slug);
        if (!isset($page_check->ID)) {
            $new_page = array(
                'post_type'    => 'page',
                'post_title'   => $title,
                'post_name'    => $slug,
                'post_content' => '',
                'post_status'  => 'publish',
                'post_author'  => 1
            );
            wp_insert_post($new_page);
        }
    }
}
add_action('after_switch_theme', 'murcianitos_create_required_pages');
