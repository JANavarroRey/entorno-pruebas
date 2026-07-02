<?php
/**
 * SEO & GEO (Generative Engine Optimization) Schema Injections
 * Inyecta marcado JSON-LD para Google y LLMs (ChatGPT, Perplexity).
 */

if (!defined('ABSPATH')) exit;

function murcianitos_inject_schema() {
    // 1. Organization Schema
    $schema_org = array(
        '@context' => 'https://schema.org',
        '@type' => 'Organization',
        'name' => 'Murcianitos',
        'url' => home_url('/'),
        'logo' => get_template_directory_uri() . '/assets/images/logo/icononegro.webp',
        'description' => 'El nuevo culto al hojaldre. Pastel de carne murciano premium en formato mini.',
        'sameAs' => array(
            'https://www.instagram.com/murcianitos_oficial/'
        )
    );

    // 2. LocalBusiness Schema (Recogida en Rincón Huertano)
    $schema_local = array(
        '@context' => 'https://schema.org',
        '@type' => 'FoodEstablishment',
        'name' => 'Murcianitos (Recogida Rincón Huertano)',
        'image' => get_template_directory_uri() . '/assets/images/logo/icononegro.webp',
        '@id' => home_url('/'),
        'url' => home_url('/'),
        'address' => array(
            '@type' => 'PostalAddress',
            'streetAddress' => 'Camino Viejo de Orihuela, 104',
            'addressLocality' => 'Murcia',
            'addressRegion' => 'Murcia',
            'postalCode' => '30570',
            'addressCountry' => 'ES'
        ),
        'geo' => array(
            '@type' => 'GeoCoordinates',
            'latitude' => 37.994519,
            'longitude' => -1.087796
        ),
        'openingHoursSpecification' => array(
            array(
                '@type' => 'OpeningHoursSpecification',
                'dayOfWeek' => array('Wednesday', 'Thursday', 'Friday', 'Saturday'),
                'opens' => '10:00',
                'closes' => '23:30'
            ),
            array(
                '@type' => 'OpeningHoursSpecification',
                'dayOfWeek' => 'Sunday',
                'opens' => '10:00',
                'closes' => '16:30'
            )
        )
    );

    echo "\n<!-- GEO Schema Murcianitos -->\n";
    echo "<script type='application/ld+json'>\n" . wp_json_encode($schema_org, JSON_UNESCAPED_SLASHES) . "\n</script>\n";
    echo "<script type='application/ld+json'>\n" . wp_json_encode($schema_local, JSON_UNESCAPED_SLASHES) . "\n</script>\n";
}
add_action('wp_head', 'murcianitos_inject_schema', 5);
