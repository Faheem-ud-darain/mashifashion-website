import { state } from '../../state.js';

export const Checkout = () => {
  const cart = state.getCart();
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return `
    <div class="checkout-page section-padding">
      <div class="container">
        <div class="checkout-grid">
          <div class="checkout-form">
            <header class="checkout-header">
              <p class="tagline">SECURE TRANSIT</p>
              <h1>Checkout</h1>
            </header>

            <section class="checkout-section">
              <h3>Shipping Silhouette</h3>
              <div class="form-grid">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email Address" class="full-width" />
                <input type="text" placeholder="Address" class="full-width" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Postal Code" />
              </div>
            </section>

            <section class="checkout-section">
              <h3>Payment Method</h3>
              <div class="payment-options">
                <div class="payment-card active">
                  <i data-lucide="credit-card"></i>
                  <span>Card</span>
                </div>
                <div class="payment-card">
                  <i data-lucide="box"></i>
                  <span>Crypto</span>
                </div>
              </div>
            </section>

            <button class="btn btn-dark btn-block btn-large" id="place-order-btn">Confirm Order - $${total.toFixed(2)}</button>
          </div>

          <div class="checkout-sidebar">
            <div class="summary-box">
              <h3>Bag Content</h3>
              <div class="checkout-items">
                ${cart.map(item => `
                  <div class="checkout-item">
                    <img src="${item.img}" />
                    <div class="ci-details">
                      <p>${item.name}</p>
                      <span>Qty: ${item.quantity}</span>
                    </div>
                    <p class="ci-price">$${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                `).join('')}
              </div>
              <div class="summary-total">
                <div class="summary-row">
                  <span>Subtotal</span>
                  <span>$${total.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div class="summary-row total">
                  <span>Total</span>
                  <span>$${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export const initCheckout = () => {
  const placeOrderBtn = document.getElementById('place-order-btn');
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener('click', () => {
      // Simulate order placement
      state.clearCart();
      window.navigateTo('/success');
    });
  }
  
  if (window.lucide) window.lucide.createIcons();
}
