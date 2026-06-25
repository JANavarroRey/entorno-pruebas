const fs = require('fs');

const articles = [
  { slug: "blog-secreto-hojaldre", title: "El secreto de nuestro hojaldre", date: "12 Mayo 2026", cat: "Historia", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600&auto=format&fit=crop" },
  { slug: "blog-chato-murciano", title: "El auténtico chato murciano", date: "05 Abril 2026", cat: "Ingredientes", img: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?q=80&w=1600&auto=format&fit=crop" },
  { slug: "blog-bando-huerta", title: "Murcianitos en Bando de la Huerta", date: "20 Marzo 2026", cat: "Eventos", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop" },
  { slug: "blog-manteca-iberica", title: "La manteca ibérica perfecta", date: "15 Febrero 2026", cat: "Ingredientes", img: "./src/assets/IMG_3826.jpg" },
  { slug: "blog-origen-pastel", title: "El origen del pastel de carne", date: "10 Enero 2026", cat: "Historia", img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1600&auto=format&fit=crop" },
  { slug: "blog-maridaje", title: "El maridaje perfecto", date: "05 Diciembre 2025", cat: "Gastronomía", img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1600&auto=format&fit=crop" },
  { slug: "blog-ediciones-limitadas", title: "Ediciones Limitadas", date: "20 Noviembre 2025", cat: "Obrador", img: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1600&auto=format&fit=crop" },
  { slug: "blog-obrador-dentro", title: "Nuestro obrador por dentro", date: "14 Octubre 2025", cat: "Obrador", img: "https://images.unsplash.com/photo-1587241321921-91a834d6d191?q=80&w=1600&auto=format&fit=crop" },
  { slug: "blog-huevo-duro", title: "El arte del huevo duro", date: "30 Septiembre 2025", cat: "Ingredientes", img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1600&auto=format&fit=crop" }
];

const template = (article) => `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${article.title} | Murcianitos</title>
  <link rel="stylesheet" href="./src/css/index.css">
  <style>
    .post-hero {
      padding-top: calc(var(--space-6xl) + 100px);
      padding-bottom: var(--space-4xl);
      background-color: var(--surface-light);
      text-align: center;
    }
    .post-meta {
      font-family: var(--font-label);
      color: var(--color-gold);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: var(--space-md);
      font-weight: 600;
    }
    .post-title {
      font-family: var(--font-headline);
      font-size: clamp(2.5rem, 5vw, 4rem);
      color: var(--color-ink);
      max-width: 800px;
      margin: 0 auto var(--space-xl);
      line-height: 1.1;
    }
    .post-image-container {
      max-width: 1000px;
      margin: 0 auto;
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-md);
    }
    .post-image {
      width: 100%;
      height: 60vh;
      min-height: 400px;
      object-fit: cover;
      display: block;
    }
    .post-content {
      max-width: 700px;
      margin: var(--space-4xl) auto;
      padding: 0 var(--space-xl);
      font-size: var(--text-body-lg);
      line-height: 1.8;
      color: var(--text-primary);
    }
    .post-content h2 {
      font-family: var(--font-headline);
      font-size: var(--text-h2);
      margin-top: var(--space-3xl);
      margin-bottom: var(--space-md);
      color: var(--color-ink);
    }
    .post-content p {
      margin-bottom: var(--space-lg);
    }
    .post-content blockquote {
      font-family: var(--font-headline);
      font-size: var(--text-h3);
      color: var(--color-gold);
      border-left: 4px solid var(--color-gold);
      padding-left: var(--space-lg);
      margin: var(--space-2xl) 0;
      line-height: 1.4;
    }
    .back-btn-container {
      text-align: center;
      margin-bottom: var(--space-5xl);
    }
  </style>
</head>
<body>

  <div id="header-placeholder"></div>

  <main>
    <article>
      <header class="post-hero">
        <div class="container">
          <div class="post-meta" data-reveal="fade-up">${article.cat} &bull; ${article.date}</div>
          <h1 class="post-title" data-reveal="fade-up" data-reveal-delay="100">${article.title}</h1>
          <div class="post-image-container" data-reveal="fade-up" data-reveal-delay="200">
            <img src="${article.img}" alt="${article.title}" class="post-image">
          </div>
        </div>
      </header>

      <div class="post-content" data-reveal="fade-up">
        <p><strong>El tradicional pastel de carne murciano tiene una historia y un proceso que van mucho más allá de lo que vemos a simple vista. En Murcianitos nos tomamos muy en serio la herencia de nuestra región, y por eso hemos documentado todo nuestro proceso creativo y técnico.</strong></p>
        
        <h2>El respeto por el proceso</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio vitae eros imperdiet fringilla. Sed ut tellus in sapien volutpat luctus. Morbi vehicula velit nec diam egestas, non tempus dui bibendum. Phasellus tincidunt elementum lacus, ac sagittis mi iaculis vel.</p>
        
        <blockquote>"La clave de un buen Murcianito no está solo en los ingredientes, sino en las manos que amasan el hojaldre cada madrugada antes de que salga el sol."</blockquote>
        
        <p>Suspendisse potenti. Mauris accumsan purus nec vestibulum tempus. Aliquam erat volutpat. Pellentesque eu dolor eget magna cursus aliquet. Etiam id arcu eget risus vehicula efficitur.</p>
        
        <h2>Mirando al futuro sin olvidar el pasado</h2>
        <p>Nullam auctor, lectus nec semper consequat, quam risus sagittis diam, in pulvinar libero mauris eget arcu. Sed viverra orci eu turpis tincidunt, vel fermentum libero scelerisque. Curabitur sed nisl vitae ante dapibus scelerisque et a tortor.</p>
        <p>Quisque non ipsum at sem iaculis dapibus. Proin dignissim, justo vel bibendum ultrices, odio turpis lacinia ligula, eu accumsan velit lacus ac velit.</p>
      </div>

      <div class="back-btn-container" data-reveal="fade-up">
        <a href="./blog.html" class="btn btn-secondary" style="background: transparent; border: 1px solid var(--color-gold); color: var(--color-gold); min-width: 250px; font-weight: 700; letter-spacing: 0.1em; transition: all var(--duration-fast) var(--ease-normal);">VOLVER AL BLOG</a>
      </div>
    </article>
  </main>

  <div id="footer-placeholder"></div>
  <script type="module" src="./src/js/main.js"></script>
</body>
</html>\`;

articles.forEach(article => {
  fs.writeFileSync(\`./\${article.slug}.html\`, template(article));
});
console.log("Created 9 blog post pages.");
