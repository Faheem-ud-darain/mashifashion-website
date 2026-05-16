import { state } from '../../state.js';

export const Cart = () => {
  const cart = state.getCart();
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return `
    <div class="cart-page section-padding">
      <div class="container">
        <header class="cart-header">
          <p class="tagline">YOUR STUDIO</p>
          <h1>Shopping Cart</h1>
        </header>

        <div class="cart-layout">
          <div class="cart-items" id="cart-items-list">
            ${cart.length === 0 ? '<p class="empty-msg">Your studio bag is currently empty.</p>' : ''}
          </div>

          <div class="cart-summary">
            <div class="summary-box">
              <h3>Order Summary</h3>
              <div class="summary-row">
                <span>Subtotal</span>
                <span id="summary-subtotal">$${total.toFixed(2)}</span>
              </div>
              <div class="summary-row">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div class="summary-row total">
                <span>Total</span>
                <span id="summary-total">$${total.toFixed(2)}</span>
              </div>
              <button class="btn btn-dark btn-block" onclick="window.navigateTo('/checkout')">Secure Checkout</button>
              <button class="btn-text btn-block" onclick="window.navigateTo('/store')" style="margin-top: 1.5rem;">Continue Discovery</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export const initCart = () => {
  const list = document.getElementById('cart-items-list');
  if (!list) return;

  const renderItems = () => {
    const cart = state.getCart();
    if (cart.length === 0) {
      list.innerHTML = '<p class="empty-msg">Your studio bag is currently empty.</p>';
      return;
    }

    list.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="ci-image">
          <img src="${item.img}" alt="${item.name}" />
        </div>
        <div class="ci-info">
          <h3>${item.name}</h3>
          <p class="ci-meta">Size: M | Color: Black</p>
          <div class="ci-controls">
            <div class="quantity-box">
              <button class="qty-btn" onclick="window.updateQty(${item.id}, -1)">-</button>
              <span>${item.quantity}</span>
              <button class="qty-btn" onclick="window.updateQty(${item.id}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="window.updateQty(${item.id}, -${item.quantity})">Remove</button>
          </div>
        </div>
        <div class="ci-price">$${(item.price * item.quantity).toFixed(2)}</div>
      </div>
    `).join('');
  };

  window.updateQty = (id, delta) => {
    const cart = state.getCart();
    const item = cart.find(i => i.id === id);
    if (item) {
      state.updateQuantity(id, item.quantity + delta);
      renderItems();
      // Update summary
      const newTotal = state.getCart().reduce((acc, i) => acc + (i.price * i.quantity), 0);
      document.getElementById('summary-subtotal').innerText = `$${newTotal.toFixed(2)}`;
      document.getElementById('summary-total').innerText = `$${newTotal.toFixed(2)}`;
    }
  };

  renderItems();
}
