<?php
/**
 * Template Name: Aviso Legal
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
  
</style>

<main>

    <section class="hero-section hero-center" style="min-height: 40vh; padding-top: calc(var(--space-5xl) + 80px); padding-bottom: var(--space-2xl); background-color: var(--surface-light); color: var(--color-ink);">
      <div class="container" data-reveal="fade-up">
        <span class="hero-label" style="color: var(--color-gold); font-family: var(--font-label); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;">Legal</span>
        <h1 class="hero-title" style="color: var(--text-primary);">Aviso Legal</h1>
        <p class="hero-desc" style="color: var(--text-secondary);">Información legal de Murcianitos</p>
      </div>
    </section>

    <section class="section">
      <div class="container policy-layout" data-reveal="fade-up">
        
        <h2>1. Objeto y Aceptación</h2>
        <p>El presente aviso legal regula el uso del sitio web, del que es titular <strong>Murcianitos S.L.</strong>.</p>
        <p>La navegación por el sitio web de Murcianitos atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal. El usuario se obliga a hacer un uso correcto del sitio web de conformidad con las leyes, la buena fe, el orden público, los usos del tráfico y el presente Aviso Legal.</p>

        <h2>2. Identificación y Comunicaciones</h2>
        <p>Murcianitos S.L., en cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, le informa de que:</p>
        <ul>
          <li><strong>Razón social:</strong> Murcianitos S.L.</li>
          <li><strong>CIF:</strong> B-12345678</li>
          <li><strong>Domicilio social:</strong> Calle Mayor 12, 30001 Murcia, España</li>
          <li><strong>Inscrita en el Registro Mercantil:</strong> Tomo 1234, Folio 56, Hoja MU-78910</li>
        </ul>
        <p>Para comunicarse con nosotros, ponemos a su disposición diferentes medios de contacto que detallamos a continuación:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@murcianitos.com" style="color: var(--color-burgundy); text-decoration: underline;">info@murcianitos.com</a></li>
        </ul>

        <h2>3. Condiciones de Acceso y Utilización</h2>
        <p>El usuario garantiza la autenticidad y actualidad de todos aquellos datos que comunique a Murcianitos y será el único responsable de las manifestaciones falsas o inexactas que realice. El usuario se compromete expresamente a hacer un uso adecuado de los contenidos y servicios de Murcianitos y a no emplearlos para, entre otros:</p>
        <ul>
          <li>Difundir contenidos, delictivos, violentos, pornográficos, racistas, xenófobo, ofensivos, de apología del terrorismo o, en general, contrarios a la ley o al orden público.</li>
          <li>Introducir en la red virus informáticos o realizar actuaciones susceptibles de alterar, estropear, interrumpir o generar errores o daños en los documentos electrónicos, datos o sistemas.</li>
          <li>Vulnerar los derechos de propiedad intelectual o industrial.</li>
          <li>Suplantar la identidad de otro usuario, de las administraciones públicas o de un tercero.</li>
          <li>Reproducir, copiar, distribuir, poner a disposición o de cualquier otra forma comunicar públicamente, transformar o modificar los contenidos, a menos que se cuente con la autorización del titular de los correspondientes derechos.</li>
        </ul>

        <h2>4. Propiedad Intelectual e Industrial</h2>
        <p>Todos los contenidos del sitio web, como textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Murcianitos, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso de la web.</p>
        <p>La distribución, modificación, cesión o comunicación pública de los contenidos y cualquier otro acto que no haya sido expresamente autorizado por el titular de los derechos de explotación quedan prohibidas.</p>

        <h2>5. Exclusión de Garantías y de Responsabilidad</h2>
        <p>El contenido del presente sitio web es de carácter general y tiene una finalidad meramente informativa. Murcianitos excluye, hasta donde permite el ordenamiento jurídico, cualquier responsabilidad por los daños y perjuicios de toda naturaleza derivados de:</p>
        <ul>
          <li>La imposibilidad de acceso al sitio web o la falta de veracidad, exactitud, exhaustividad y/o actualidad de los contenidos.</li>
          <li>La presencia de virus o de otros elementos en los contenidos que puedan producir alteraciones en los sistemas informáticos.</li>
          <li>El incumplimiento de las leyes, la buena fe, el orden público, los usos del tráfico y el presente aviso legal como consecuencia del uso incorrecto del sitio web.</li>
        </ul>

        <h2>6. Política de Privacidad</h2>
        <p>Puede revisar nuestra política de privacidad y protección de datos personales en el siguiente <a href="<?php echo home_url('/privacidad/'); ?>" style="color: var(--color-burgundy); text-decoration: underline;">enlace</a>.</p>

        <h2>7. Ley Aplicable y Jurisdicción</h2>
        <p>Las condiciones presentes se regirán por la legislación española vigente. Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, las partes se someten a los Juzgados y Tribunales de Murcia (España), renunciando expresamente a cualquier otro fuero que pudiera corresponderles.</p>

      </div>
    </section>
  
</main>


<?php get_footer(); ?>
