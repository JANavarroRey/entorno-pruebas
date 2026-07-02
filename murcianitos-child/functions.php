<?php
/**
 * Murcianitos Child Theme Functions
 */

function murcianitos_enqueue_styles() {
    // Parent style
    wp_enqueue_style( 'astra-theme-css', get_template_directory_uri() . '/style.css' );
    
    // Custom styles (all bundled in style.css)
    wp_enqueue_style( 'murcianitos-main-css', get_stylesheet_directory_uri() . '/style.css', array(), time() ); // time() prevents aggressive caching during dev
    
    // Scripts
    wp_enqueue_script( 'gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js', array(), '3.12.5', true );
    wp_enqueue_script( 'gsap-scrolltrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js', array('gsap'), '3.12.5', true );
    wp_enqueue_script( 'murcianitos-main', get_stylesheet_directory_uri() . '/assets/js/main.js', array('gsap-scrolltrigger'), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'murcianitos_enqueue_styles', 20 );

// Load main.js as ES6 module
function murcianitos_script_module($tag, $handle, $src) {
    if ( 'murcianitos-main' === $handle ) {
        return '<script type="module" src="' . esc_url( $src ) . '"></script>';
    }
    return $tag;
}
add_filter( 'script_loader_tag', 'murcianitos_script_module', 10, 3 );

// Disable Astra default features that conflict with our custom design
add_filter( 'astra_enable_default_fonts', '__return_false' );
