<?php
/**
 * Template Name: Alérgenos
 */

get_header(); ?>

<main>
    <section class="hero-section hero-center" style="background-color: var(--color-cream); min-height: 35vh; padding-top: calc(var(--space-5xl) + 80px); padding-bottom: var(--space-2xl);">
      <div class="container" data-reveal="fade-up">
        <span class="hero-label">Información de Producto</span>
        <h1 class="hero-title" style="color: var(--text-primary);">Alérgenos</h1>
        <p class="hero-desc" style="color: var(--text-secondary);">Consulta detalladamente los ingredientes de nuestra carta.</p>
      </div>
    </section>

    <section class="section" style="background-color: var(--surface-light); padding-bottom: var(--space-4xl);">
      <div class="container">
        
        <!-- Info Banner -->
        <div class="allergen-info-banner" data-reveal="fade-up">
          <span class="material-symbols-outlined">info</span>
          <p class="allergen-info-text">
            <strong>Información importante:</strong> Todos nuestros productos se elaboran artesanalmente en un obrador único. Aunque cuidamos los procesos, <strong>pueden contener trazas de frutos secos</strong> u otros alérgenos cruzados no especificados en la receta original.
          </p>
        </div>

        <!-- ============================== -->
        <!-- VIEW 1: DESKTOP TABLE          -->
        <!-- ============================== -->
        <div class="desktop-only" data-reveal="fade-up">
          <div class="allergen-table-wrapper" style="margin-bottom: 0;">
            <table class="allergen-table">
              <thead>
                <tr>
                  <th style="text-align: left; vertical-align: top; padding-left: var(--space-md);"></th>
                  <th><div class="allergen-header-icon"><span class="material-symbols-outlined">bakery_dining</span></div><span class="allergen-header-text">Gluten</span></th>
                  <th><div class="allergen-header-icon"><span class="material-symbols-outlined">eco</span></div><span class="allergen-header-text">Frutos<br>Secos</span></th>
                  <th><div class="allergen-header-icon"><span class="material-symbols-outlined">set_meal</span></div><span class="allergen-header-text">Crustáceos</span></th>
                  <th><div class="allergen-header-icon"><span class="material-symbols-outlined">grass</span></div><span class="allergen-header-text">Cacahuetes</span></th>
                  <th><div class="allergen-header-icon"><span class="material-symbols-outlined">science</span></div><span class="allergen-header-text">Sulfitos</span></th>
                  <th><div class="allergen-header-icon"><span class="material-symbols-outlined">spa</span></div><span class="allergen-header-text">Soja</span></th>
                  <th><div class="allergen-header-icon"><span class="material-symbols-outlined">phishing</span></div><span class="allergen-header-text">Pescado</span></th>
                  <th><div class="allergen-header-icon"><span class="material-symbols-outlined">grain</span></div><span class="allergen-header-text">Sésamo</span></th>
                  <th><div class="allergen-header-icon"><span class="material-symbols-outlined">water_drop</span></div><span class="allergen-header-text">Mostaza</span></th>
                  <th><div class="allergen-header-icon"><span class="material-symbols-outlined">water</span></div><span class="allergen-header-text">Moluscos</span></th>
                  <th><div class="allergen-header-icon"><span class="material-symbols-outlined">local_drink</span></div><span class="allergen-header-text">Lácteos</span></th>
                  <th><div class="allergen-header-icon"><span class="material-symbols-outlined">egg</span></div><span class="allergen-header-text">Huevos</span></th>
                  <th><div class="allergen-header-icon"><span class="material-symbols-outlined">energy_savings_leaf</span></div><span class="allergen-header-text">Apio</span></th>
                  <th><div class="allergen-header-icon"><span class="material-symbols-outlined">grain</span></div><span class="allergen-header-text">Altramuz</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="15" class="header-category">Murcianitos Salados</td>
                </tr>
                <tr>
                  <td class="dish-name">Clásico</td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="dish-name">Pollo y Trufa</td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="dish-name">Vegetal</td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="dish-name">Queso de Cabra y Cebolla</td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="dish-name">Jamón Ibérico</td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="dish-name">Morcilla y Piñones</td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="15" class="header-category">Murcianitos Dulces</td>
                </tr>
                <tr>
                  <td class="dish-name">Chocolate</td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="dish-name">Crema</td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="dish-name">Dulce de Leche</td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="dish-name">Cabello de Ángel</td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="dish-name">Pistacho y Frambuesa</td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="dish-name">Limón y Merengue</td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><div class="allergen-dot"></div></td>
                  <td><div class="allergen-dot"></div></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ============================== -->
        <!-- VIEW 2: MOBILE CARDS           -->
        <!-- ============================== -->
        <div class="mobile-only">
          <div class="allergen-categories" data-reveal="stagger">
            
            <!-- SALADOS -->
            <div class="allergen-category-block stagger-item">
              <h2 class="allergen-category-title">Murcianitos Salados</h2>
              <div class="allergen-grid">
                
                <div class="allergen-card">
                  <h3 class="allergen-product">Clásico</h3>
                  <div class="allergen-tags">
                    <div class="allergen-tag" title="Gluten"><span class="material-symbols-outlined">bakery_dining</span> Gluten</div>
                    <div class="allergen-tag" title="Lácteos"><span class="material-symbols-outlined">local_drink</span> Lácteos</div>
                    <div class="allergen-tag" title="Huevos"><span class="material-symbols-outlined">egg</span> Huevos</div>
                  </div>
                </div>

                <div class="allergen-card">
                  <h3 class="allergen-product">Pollo y Trufa</h3>
                  <div class="allergen-tags">
                    <div class="allergen-tag" title="Gluten"><span class="material-symbols-outlined">bakery_dining</span> Gluten</div>
                    <div class="allergen-tag" title="Sulfitos"><span class="material-symbols-outlined">science</span> Sulfitos</div>
                    <div class="allergen-tag" title="Mostaza"><span class="material-symbols-outlined">water_drop</span> Mostaza</div>
                    <div class="allergen-tag" title="Lácteos"><span class="material-symbols-outlined">local_drink</span> Lácteos</div>
                    <div class="allergen-tag" title="Huevos"><span class="material-symbols-outlined">egg</span> Huevos</div>
                  </div>
                </div>

                <div class="allergen-card">
                  <h3 class="allergen-product">Vegetal</h3>
                  <div class="allergen-tags">
                    <div class="allergen-tag" title="Gluten"><span class="material-symbols-outlined">bakery_dining</span> Gluten</div>
                    <div class="allergen-tag" title="Frutos Secos"><span class="material-symbols-outlined">eco</span> Frutos Secos</div>
                    <div class="allergen-tag" title="Apio"><span class="material-symbols-outlined">energy_savings_leaf</span> Apio</div>
                    <div class="allergen-tag" title="Lácteos"><span class="material-symbols-outlined">local_drink</span> Lácteos</div>
                    <div class="allergen-tag" title="Huevos"><span class="material-symbols-outlined">egg</span> Huevos</div>
                  </div>
                </div>

                <div class="allergen-card">
                  <h3 class="allergen-product">Queso de Cabra y Cebolla</h3>
                  <div class="allergen-tags">
                    <div class="allergen-tag" title="Gluten"><span class="material-symbols-outlined">bakery_dining</span> Gluten</div>
                    <div class="allergen-tag" title="Frutos Secos"><span class="material-symbols-outlined">eco</span> Frutos Secos</div>
                    <div class="allergen-tag" title="Lácteos"><span class="material-symbols-outlined">local_drink</span> Lácteos</div>
                    <div class="allergen-tag" title="Huevos"><span class="material-symbols-outlined">egg</span> Huevos</div>
                  </div>
                </div>

                <div class="allergen-card">
                  <h3 class="allergen-product">Jamón Ibérico</h3>
                  <div class="allergen-tags">
                    <div class="allergen-tag" title="Gluten"><span class="material-symbols-outlined">bakery_dining</span> Gluten</div>
                    <div class="allergen-tag" title="Lácteos"><span class="material-symbols-outlined">local_drink</span> Lácteos</div>
                    <div class="allergen-tag" title="Huevos"><span class="material-symbols-outlined">egg</span> Huevos</div>
                  </div>
                </div>

                <div class="allergen-card">
                  <h3 class="allergen-product">Morcilla y Piñones</h3>
                  <div class="allergen-tags">
                    <div class="allergen-tag" title="Gluten"><span class="material-symbols-outlined">bakery_dining</span> Gluten</div>
                    <div class="allergen-tag" title="Frutos Secos"><span class="material-symbols-outlined">eco</span> Frutos Secos</div>
                    <div class="allergen-tag" title="Lácteos"><span class="material-symbols-outlined">local_drink</span> Lácteos</div>
                    <div class="allergen-tag" title="Huevos"><span class="material-symbols-outlined">egg</span> Huevos</div>
                  </div>
                </div>

              </div>
            </div>

            <!-- DULCES -->
            <div class="allergen-category-block stagger-item">
              <h2 class="allergen-category-title">Murcianitos Dulces</h2>
              <div class="allergen-grid">
                
                <div class="allergen-card">
                  <h3 class="allergen-product">Chocolate</h3>
                  <div class="allergen-tags">
                    <div class="allergen-tag" title="Gluten"><span class="material-symbols-outlined">bakery_dining</span> Gluten</div>
                    <div class="allergen-tag" title="Frutos Secos"><span class="material-symbols-outlined">eco</span> Frutos Secos</div>
                    <div class="allergen-tag" title="Cacahuetes"><span class="material-symbols-outlined">grass</span> Cacahuetes</div>
                    <div class="allergen-tag" title="Soja"><span class="material-symbols-outlined">spa</span> Soja</div>
                    <div class="allergen-tag" title="Lácteos"><span class="material-symbols-outlined">local_drink</span> Lácteos</div>
                    <div class="allergen-tag" title="Huevos"><span class="material-symbols-outlined">egg</span> Huevos</div>
                  </div>
                </div>

                <div class="allergen-card">
                  <h3 class="allergen-product">Crema</h3>
                  <div class="allergen-tags">
                    <div class="allergen-tag" title="Gluten"><span class="material-symbols-outlined">bakery_dining</span> Gluten</div>
                    <div class="allergen-tag" title="Lácteos"><span class="material-symbols-outlined">local_drink</span> Lácteos</div>
                    <div class="allergen-tag" title="Huevos"><span class="material-symbols-outlined">egg</span> Huevos</div>
                  </div>
                </div>

                <div class="allergen-card">
                  <h3 class="allergen-product">Dulce de Leche</h3>
                  <div class="allergen-tags">
                    <div class="allergen-tag" title="Gluten"><span class="material-symbols-outlined">bakery_dining</span> Gluten</div>
                    <div class="allergen-tag" title="Lácteos"><span class="material-symbols-outlined">local_drink</span> Lácteos</div>
                    <div class="allergen-tag" title="Huevos"><span class="material-symbols-outlined">egg</span> Huevos</div>
                  </div>
                </div>

                <div class="allergen-card">
                  <h3 class="allergen-product">Cabello de Ángel</h3>
                  <div class="allergen-tags">
                    <div class="allergen-tag" title="Gluten"><span class="material-symbols-outlined">bakery_dining</span> Gluten</div>
                    <div class="allergen-tag" title="Lácteos"><span class="material-symbols-outlined">local_drink</span> Lácteos</div>
                    <div class="allergen-tag" title="Huevos"><span class="material-symbols-outlined">egg</span> Huevos</div>
                  </div>
                </div>

                <div class="allergen-card">
                  <h3 class="allergen-product">Pistacho y Frambuesa</h3>
                  <div class="allergen-tags">
                    <div class="allergen-tag" title="Gluten"><span class="material-symbols-outlined">bakery_dining</span> Gluten</div>
                    <div class="allergen-tag" title="Frutos Secos"><span class="material-symbols-outlined">eco</span> Frutos Secos</div>
                    <div class="allergen-tag" title="Lácteos"><span class="material-symbols-outlined">local_drink</span> Lácteos</div>
                    <div class="allergen-tag" title="Huevos"><span class="material-symbols-outlined">egg</span> Huevos</div>
                  </div>
                </div>

                <div class="allergen-card">
                  <h3 class="allergen-product">Limón y Merengue</h3>
                  <div class="allergen-tags">
                    <div class="allergen-tag" title="Gluten"><span class="material-symbols-outlined">bakery_dining</span> Gluten</div>
                    <div class="allergen-tag" title="Lácteos"><span class="material-symbols-outlined">local_drink</span> Lácteos</div>
                    <div class="allergen-tag" title="Huevos"><span class="material-symbols-outlined">egg</span> Huevos</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  </main>

<?php get_footer(); ?>
