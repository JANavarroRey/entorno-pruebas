import { ShoppingCart } from './core/cart.js';

export function initPedirAhora() {
  const cart = new ShoppingCart();
  
  // UI Elements
  const shopItems = document.querySelectorAll('.shop-item');
  const cartSidebar = document.querySelector('.cart-sidebar');
  let cartListContainer = null;
  let cartTotalEl = null;

  // 1. Prepare HTML and extract Data
  shopItems.forEach((item, index) => {
    const titleEl = item.querySelector('.shop-item-title');
    const priceEl = item.querySelector('.card-price');
    const qtySpan = item.querySelector('.quantity-selector span');
    const btns = item.querySelectorAll('.qty-btn');
    
    // Generate an ID if it doesn't exist
    const id = 'prod_' + index;
    item.dataset.id = id;
    item.dataset.title = titleEl.innerText.trim();
    item.dataset.price = priceEl.innerText.trim();
    
    // Setup quantity display class for easy querying
    if (qtySpan) qtySpan.classList.add('qty-display');
    
    // Setup button actions
    if (btns.length >= 2) {
      btns[0].dataset.action = 'remove';
      btns[1].dataset.action = 'add';
    }
  });

  // 2. Prepare Sidebar DOM Structure
  if (cartSidebar) {
    // Clear default HTML inside sidebar except the header and button/badges
    const header = cartSidebar.querySelector('.cart-header');
    const checkoutBtn = cartSidebar.querySelector('.btn-primary');
    const trustBadges = cartSidebar.querySelector('.trust-badges');
    
    cartSidebar.innerHTML = '';
    if (header) cartSidebar.appendChild(header);
    
    // Create pickup info container
    const cartPickupInfo = document.createElement('div');
    cartPickupInfo.id = 'cart-pickup-info';
    cartPickupInfo.style.display = 'none';
    cartPickupInfo.style.alignItems = 'center';
    cartPickupInfo.style.gap = '12px';
    cartPickupInfo.style.fontSize = '0.9rem';
    cartPickupInfo.style.color = 'var(--text-secondary)';
    cartPickupInfo.style.backgroundColor = 'var(--color-cream)';
    cartPickupInfo.style.border = '1px solid rgba(197, 160, 89, 0.3)';
    cartPickupInfo.style.padding = '12px 16px';
    cartPickupInfo.style.borderRadius = 'var(--radius-md)';
    cartPickupInfo.style.marginBottom = 'var(--space-md)';
    cartSidebar.appendChild(cartPickupInfo);
    
    // Create dynamic container
    cartListContainer = document.createElement('div');
    cartListContainer.className = 'cart-items-container';
    cartListContainer.style.display = 'flex';
    cartListContainer.style.flexDirection = 'column';
    cartListContainer.style.gap = 'var(--space-sm)';
    cartListContainer.style.marginBottom = 'var(--space-lg)';
    cartSidebar.appendChild(cartListContainer);
    
    // Create dynamic total
    cartTotalEl = document.createElement('div');
    cartTotalEl.className = 'cart-total';
    cartSidebar.appendChild(cartTotalEl);
    
    // Re-append checkout and badges
    if (checkoutBtn) cartSidebar.appendChild(checkoutBtn);
    if (trustBadges) cartSidebar.appendChild(trustBadges);
  }

  // 3. Event Delegation for Add/Remove and Image Popup
  document.querySelector('.shop-products')?.addEventListener('click', (e) => {
    // Check if clicked on a product image
    if (e.target.classList.contains('shop-item-img')) {
      if (window.openImagePopup) {
        // Transfer the inline style (like filters or background) to the popup
        const imgStyles = e.target.style.cssText || '';
        window.openImagePopup(e.target.src, imgStyles);
      }
      return;
    }

    const btn = e.target.closest('.qty-btn');
    if (!btn) return;
    
    const article = btn.closest('.shop-item');
    if (!article) return;
    
    const id = article.dataset.id;
    const title = article.dataset.title;
    const price = article.dataset.price;
    const action = btn.dataset.action;

    if (action === 'add') {
      cart.addItem(id, title, price);
    } else if (action === 'remove') {
      cart.removeItem(id);
    }
  });

  // 4. Reactive Render: Update UI on state change
  cart.subscribe((state) => {
    // 4a. Update inline product quantities
    shopItems.forEach(item => {
      const id = item.dataset.id;
      const qtyDisplay = item.querySelector('.qty-display');
      if (qtyDisplay) {
        qtyDisplay.innerText = state.items[id] ? state.items[id].quantity : 0;
      }
    });

    // 4b. Update sidebar cart
    if (cartListContainer && cartTotalEl) {
      cartListContainer.innerHTML = '';
      
      if (state.itemsArray.length === 0) {
        cartListContainer.innerHTML = '<div style="color: var(--text-secondary); font-size: 0.9rem; text-align: center; padding: var(--space-md) 0;">Tu cesta está vacía</div>';
        cartTotalEl.innerHTML = `<span>Total</span><span>0,00€</span>`;
        return;
      }

      state.itemsArray.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item-mini';
        
        // Format price
        const totalItemPrice = (item.price * item.quantity).toFixed(2).replace('.', ',');
        
        itemEl.innerHTML = `
          <span>${item.quantity}x ${item.title}</span>
          <span>${totalItemPrice}€</span>
        `;
        cartListContainer.appendChild(itemEl);
      });

      const formattedTotal = state.totalPrice.toFixed(2).replace('.', ',');
      cartTotalEl.innerHTML = `<span>Total</span><span>${formattedTotal}€</span>`;
    }

    // 4c. Update Checkout Total and Items
    const checkoutTotalText = document.getElementById('checkout-total-text');
    const checkoutPayBtnTotal = document.getElementById('checkout-pay-btn-total');
    const checkoutItemsList = document.getElementById('checkout-items-list');

    if (checkoutTotalText && checkoutPayBtnTotal && checkoutItemsList) {
      const formattedTotal = state.totalPrice.toFixed(2).replace('.', ',');
      checkoutTotalText.innerText = formattedTotal + ' €';
      checkoutPayBtnTotal.innerText = formattedTotal + ' €';
      
      checkoutItemsList.innerHTML = '';
      if (state.itemsArray.length === 0) {
        checkoutItemsList.innerHTML = '<div style="padding: 4px 0;">Tu cesta está vacía.</div>';
      } else {
        state.itemsArray.forEach(item => {
          const itemTotal = (item.price * item.quantity).toFixed(2).replace('.', ',');
          checkoutItemsList.innerHTML += `
            <div style="display: flex; justify-content: space-between; gap: 16px; align-items: flex-start;">
              <span style="flex: 1; line-height: 1.4;">${item.quantity}x ${item.title}</span>
              <span style="flex-shrink: 0; white-space: nowrap; font-weight: 500;">${itemTotal} €</span>
            </div>
          `;
        });
      }
    }
  });

  // 5. Intercept Payment Method Selection
  const paymentBtns = document.querySelectorAll('.payment-method-btn');
  paymentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      paymentBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });
}
