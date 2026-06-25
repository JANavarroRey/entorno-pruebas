// src/js/core/cart.js

/**
 * Lógica Core de la Cesta de la Compra.
 * Totalmente agnóstica al DOM.
 * Gestiona el estado y notifica cambios.
 */
export class ShoppingCart {
  constructor() {
    this.items = {}; // { id: { title, price, quantity } }
    this.listeners = [];
  }

  /**
   * Suscribe una función para que reaccione a los cambios de la cesta
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Dispara el estado inicial
    listener(this.getState());
  }

  _notify() {
    const state = this.getState();
    this.listeners.forEach(listener => listener(state));
  }

  /**
   * Devuelve una copia computada del estado actual
   */
  getState() {
    const itemsArray = Object.keys(this.items).map(id => ({
      id,
      ...this.items[id]
    }));
    
    const totalItems = itemsArray.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = itemsArray.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    return {
      items: this.items,
      itemsArray,
      totalItems,
      totalPrice
    };
  }

  /**
   * Incrementa en 1 la cantidad de un producto
   */
  addItem(id, title, price) {
    // Convierte "2,50" a 2.50 si es necesario
    const parsedPrice = typeof price === 'string' ? parseFloat(price.replace('€', '').replace(',', '.')) : price;
    
    if (this.items[id]) {
      this.items[id] = {
        ...this.items[id],
        quantity: this.items[id].quantity + 1
      };
    } else {
      this.items[id] = { title, price: parsedPrice, quantity: 1 };
    }
    this._notify();
  }

  /**
   * Decrementa en 1 la cantidad de un producto
   */
  removeItem(id) {
    if (!this.items[id]) return;

    if (this.items[id].quantity > 1) {
      this.items[id] = {
        ...this.items[id],
        quantity: this.items[id].quantity - 1
      };
    } else {
      // Elimina el producto por completo
      const newItems = { ...this.items };
      delete newItems[id];
      this.items = newItems;
    }
    this._notify();
  }

  /**
   * Vacía la cesta completamente
   */
  clearCart() {
    this.items = {};
    this._notify();
  }
}
