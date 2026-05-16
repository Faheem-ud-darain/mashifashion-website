import { state } from '../../state.js';

export const Cart = () => {
  const cart = state.getCart();
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = subtotal * 0.1; // Example 10%
  const delivery = subtotal > 0 ? 50 : 0;
  const total = subtotal - discount + delivery;

  return `
    <div class="cart-page section-padding">
      <div class="container">
          <h1 style="font-size: clamp(3rem, 8vw, 4rem); margin-bottom: 4rem; font-weight: 900;">Shopping Cart</h1>

          <div class="cart-grid-layout" style="display: grid; grid-template-columns: 1fr 400px; gap: 4rem;">
              <!-- Cart Items List -->
              <div id="cart-items-container">
                  <div style="border-bottom: 1px solid var(--border-light); padding-bottom: 1.5rem; margin-bottom: 2rem;">
                      <div class="cart-labels-grid" style="display: grid; grid-template-columns: 2fr 1fr 1fr 0.5fr; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #999; letter-spacing: 1px;">
                          <span>Product Details</span>
                          <span style="text-align: center;">Quantity</span>
                          <span style="text-align: center;">Total</span>
                          <span style="text-align: right;">Action</span>
                      </div>
                  </div>

                  <div id="cart-items-list">
                      <!-- Dynamic Cart Items -->
                      ${cart.length === 0 ? '<p class="empty-msg" style="padding: 4rem; text-align: center; color: #999; font-weight: 600;">Your bag is currently empty.</p>' : ''}
                  </div>

                  <div style="margin-top: 3rem;">
                      <button class="btn btn-outline" style="padding: 1rem 2rem;" onclick="window.navigateTo('/store')">Continue Shopping</button>
                  </div>
              </div>

              <!-- Order Summary Sidebar -->
              <aside id="order-summary">
                  <div class="glass summary-card" style="padding: 2.5rem; border-radius: var(--radius-md); background: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
                      <h3 style="font-size: 1.5rem; margin-bottom: 2rem; letter-spacing: -1px; font-weight: 800;">Order Summary</h3>
                      
                      <div style="display: flex; gap: 0.5rem; margin-bottom: 2.5rem;">
                          <input type="text" placeholder="Discount voucher" style="flex: 1; padding: 0.8rem 1.2rem; border: 1px solid var(--border-light); border-radius: 8px; font-family: inherit; outline: none;" />
                          <button class="btn btn-dark" style="padding: 0.8rem 1.5rem; font-size: 0.7rem; border-radius: 8px;">Apply</button>
                      </div>

                      <div style="display: flex; flex-direction: column; gap: 1.2rem; font-size: 0.95rem;">
                          <div class="flex-between">
                              <span style="color: #666;">Sub Total</span>
                              <span style="font-weight: 700;" id="summary-subtotal">$${subtotal.toFixed(2)}</span>
                          </div>
                          <div class="flex-between">
                              <span style="color: #666;">Discount (10%)</span>
                              <span style="color: #000; font-weight: 700;" id="summary-discount">-$${discount.toFixed(2)}</span>
                          </div>
                          <div class="flex-between">
                              <span style="color: #666;">Delivery Fee</span>
                              <span style="font-weight: 700;" id="summary-delivery">$${delivery.toFixed(2)}</span>
                          </div>
                          <hr style="border: none; border-top: 1px solid var(--border-light); margin: 0.5rem 0;" />
                          <div class="flex-between" style="font-size: 1.2rem; font-weight: 900;">
                              <span>Total</span>
                              <span id="summary-total">$${total.toFixed(2)}</span>
                          </div>
                      </div>

                      <div style="margin-top: 2.5rem; padding: 1rem; background: var(--bg-light); border-radius: 10px; font-size: 0.75rem; color: #666; display: flex; gap: 10px; align-items: center;">
                          <i data-lucide="shield-check" style="width: 20px; color: #000;"></i>
                          <p>90 Day Limited Warranty against manufacturer's defects. <a href="#" style="color: #000; font-weight: 700;">Details</a></p>
                      </div>

                      <button class="btn btn-dark" style="width: 100%; padding: 1.5rem; margin-top: 2.5rem; border-radius: 50px; border: none; font-weight: 800; cursor: pointer;" onclick="window.navigateTo('/checkout')">Checkout Now</button>
                  </div>
              </aside>
          </div>
      </div>
    </div>
  `;
}

export const initCart = () => {
  if (window.lucide) window.lucide.createIcons();

  const list = document.getElementById('cart-items-list');
  if (!list) return;

  const renderItems = () => {
    const cart = state.getCart();
    if (cart.length === 0) return;

    list.innerHTML = cart.map(item => `
      <div class="cart-item-row" style="display: grid; grid-template-columns: 2fr 1fr 1fr 0.5fr; align-items: center; padding: 2rem 0; border-bottom: 1px solid var(--border-light);">
          <div class="item-details" style="display: flex; gap: 2rem; align-items: center;">
              <div style="width: 100px; height: 120px; background: var(--bg-light); border-radius: 12px; overflow: hidden;">
                  <img src="${item.img}" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div>
                  <h4 style="font-size: 1rem; margin-bottom: 0.5rem; font-weight: 700;">${item.name}</h4>
                  <p style="font-size: 0.75rem; color: #999; text-transform: uppercase; font-weight: 600;">Size: M | Color: Black</p>
              </div>
          </div>
          <div style="display: flex; justify-content: center;">
              <div class="qty-selector" style="display: flex; align-items: center; gap: 1.5rem; border: 1px solid var(--border-light); padding: 0.6rem 1rem; border-radius: 50px;">
                  <button class="qty-btn" style="background: none; border: none; cursor: pointer; color: #999; font-size: 1rem;" onclick="window.updateCartQty(${item.id}, -1)">-</button>
                  <span style="font-weight: 700; font-size: 0.9rem;">${item.quantity}</span>
                  <button class="qty-btn" style="background: none; border: none; cursor: pointer; color: #999; font-size: 1rem;" onclick="window.updateCartQty(${item.id}, 1)">+</button>
              </div>
          </div>
          <div style="text-align: center; font-weight: 800; font-size: 1rem;">
              $${(item.price * item.quantity).toFixed(2)}
          </div>
          <div style="text-align: right;">
              <button style="background: none; border: none; cursor: pointer; color: #ff4444;" onclick="window.updateCartQty(${item.id}, -${item.quantity})">
                  <i data-lucide="trash-2" style="width: 18px;"></i>
              </button>
          </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  };

  window.updateCartQty = (id, delta) => {
    const cart = state.getCart();
    const item = cart.find(i => i.id === id);
    if (item) {
      state.updateQuantity(id, item.quantity + delta);
      renderItems();
      
      // Update Summary UI
      const newCart = state.getCart();
      const subtotal = newCart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
      const discount = subtotal * 0.1;
      const delivery = subtotal > 0 ? 50 : 0;
      const total = subtotal - discount + delivery;

      const subtotalEl = document.getElementById('summary-subtotal');
      const discountEl = document.getElementById('summary-discount');
      const deliveryEl = document.getElementById('summary-delivery');
      const totalEl = document.getElementById('summary-total');

      if (subtotalEl) subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
      if (discountEl) discountEl.innerText = `-$${discount.toFixed(2)}`;
      if (deliveryEl) deliveryEl.innerText = `$${delivery.toFixed(2)}`;
      if (totalEl) totalEl.innerText = `$${total.toFixed(2)}`;

      // Custom event for navbar update
      window.dispatchEvent(new CustomEvent('stateChange', { detail: { key: 'cart', value: newCart } }));
    }
  };

  renderItems();
}
