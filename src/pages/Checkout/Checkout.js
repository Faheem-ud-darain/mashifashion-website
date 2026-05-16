import { state } from '../../state.js';

export const Checkout = () => {
  const cart = state.getCart();
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const total = subtotal; // Assuming free shipping for now

  return `
    <div class="checkout-page section-padding" style="background: #fff;">
        <div class="container">
            <h1 style="font-size: 3rem; margin-bottom: 3rem; letter-spacing: -2px; font-weight: 900;">Checkout</h1>

            <div class="checkout-layout-grid" style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 5rem;">
                <!-- Left: Forms -->
                <div id="checkout-forms">
                    <!-- Shipping Section -->
                    <section style="margin-bottom: 4rem;">
                        <h3 style="font-size: 1.5rem; margin-bottom: 2rem; display: flex; align-items: center; gap: 1rem; font-weight: 800;">
                            <span style="width: 30px; height: 30px; background: #000; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">1</span>
                            Shipping Information
                        </h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                            <input type="text" placeholder="First Name" style="padding: 1rem 1.5rem; border: 1px solid var(--border-light); border-radius: 12px; font-family: inherit;" />
                            <input type="text" placeholder="Last Name" style="padding: 1rem 1.5rem; border: 1px solid var(--border-light); border-radius: 12px; font-family: inherit;" />
                            <input type="email" placeholder="Email Address" style="padding: 1rem 1.5rem; border: 1px solid var(--border-light); border-radius: 12px; font-family: inherit; grid-column: span 2;" />
                            <input type="text" placeholder="Address Line 1" style="padding: 1rem 1.5rem; border: 1px solid var(--border-light); border-radius: 12px; font-family: inherit; grid-column: span 2;" />
                            <input type="text" placeholder="City" style="padding: 1rem 1.5rem; border: 1px solid var(--border-light); border-radius: 12px; font-family: inherit;" />
                            <input type="text" placeholder="Postal Code" style="padding: 1rem 1.5rem; border: 1px solid var(--border-light); border-radius: 12px; font-family: inherit;" />
                        </div>
                    </section>

                    <!-- Payment Section -->
                    <section>
                        <h3 style="font-size: 1.5rem; margin-bottom: 2rem; display: flex; align-items: center; gap: 1rem; font-weight: 800;">
                            <span style="width: 30px; height: 30px; background: #000; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">2</span>
                            Payment Method
                        </h3>
                        
                        <div class="flex" style="gap: 1rem; margin-bottom: 2.5rem;">
                            <button class="btn btn-dark" style="padding: 0.8rem 2rem; border-radius: 50px; display: flex; align-items: center; gap: 10px; font-size: 0.8rem;"><i data-lucide="credit-card" style="width: 16px;"></i> Card</button>
                            <button class="btn btn-outline" style="padding: 0.8rem 2rem; border-radius: 50px; display: flex; align-items: center; gap: 10px; font-size: 0.8rem;"><i data-lucide="smartphone" style="width: 16px;"></i> Apple Pay</button>
                        </div>

                        <div id="card-form" style="background: #f8f8f8; padding: 2.5rem; border-radius: 20px;">
                            <div style="margin-bottom: 1.5rem;">
                                <label style="display: block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.8rem; color: #666;">Card Number</label>
                                <input type="text" placeholder="0000 0000 0000 0000" style="width: 100%; padding: 1rem 1.5rem; border: 1px solid var(--border-light); border-radius: 12px; background: #fff;" />
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                                <div>
                                    <label style="display: block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.8rem; color: #666;">Expiry Date</label>
                                    <input type="text" placeholder="MM / YY" style="width: 100%; padding: 1rem 1.5rem; border: 1px solid var(--border-light); border-radius: 12px; background: #fff;" />
                                </div>
                                <div>
                                    <label style="display: block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.8rem; color: #666;">CVV</label>
                                    <input type="text" placeholder="***" style="width: 100%; padding: 1rem 1.5rem; border: 1px solid var(--border-light); border-radius: 12px; background: #fff;" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div style="margin-top: 4rem; padding: 1.5rem; border: 1px solid var(--border-light); border-radius: 12px; display: flex; align-items: center; gap: 1rem; color: #666; font-size: 0.85rem;">
                        <i data-lucide="shield-check" style="color: #000;"></i>
                        Your payment information is encrypted and securely processed.
                    </div>
                </div>

                <!-- Right: Order Summary -->
                <aside id="checkout-summary">
                    <div class="glass" style="padding: 2.5rem; border-radius: 20px; position: sticky; top: 120px; background: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
                        <h3 style="font-size: 1.3rem; margin-bottom: 2rem; font-weight: 800;">Order Summary</h3>
                        
                        <div id="checkout-items" style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2rem;">
                            ${cart.map(item => `
                                <div class="checkout-item" style="display: flex; gap: 1rem; align-items: center;">
                                    <div style="width: 60px; height: 75px; background: #f5f5f5; border-radius: 8px; overflow: hidden;">
                                        <img src="${item.img}" style="width: 100%; height: 100%; object-fit: cover;" />
                                    </div>
                                    <div style="flex: 1;">
                                        <h4 style="font-size: 0.85rem; font-weight: 700;">${item.name}</h4>
                                        <p style="font-size: 0.75rem; color: #999;">Qty: ${item.quantity}</p>
                                    </div>
                                    <p style="font-weight: 800; font-size: 0.9rem;">$${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            `).join('')}
                        </div>

                        <hr style="border: none; border-top: 1px solid var(--border-light); margin: 2rem 0;" />

                        <div style="display: flex; flex-direction: column; gap: 1.2rem;">
                            <div class="flex-between">
                                <span style="color: #666; font-size: 0.9rem;">Subtotal</span>
                                <span style="font-weight: 700;">$${subtotal.toFixed(2)}</span>
                            </div>
                            <div class="flex-between">
                                <span style="color: #666; font-size: 0.9rem;">Shipping</span>
                                <span style="font-weight: 700; color: #000;">Free</span>
                            </div>
                            <div class="flex-between" style="font-size: 1.4rem; font-weight: 900; margin-top: 0.5rem;">
                                <span>Total</span>
                                <span>$${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <button id="place-order-btn" class="btn btn-dark" style="width: 100%; padding: 1.5rem; margin-top: 2.5rem; border-radius: 50px; font-weight: 800; border: none; cursor: pointer;">Complete Purchase</button>
                    </div>
                </aside>
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
      window.navigateTo('/dashboard');
      alert('Order Placed Successfully!');
    });
  }
  
  if (window.lucide) window.lucide.createIcons();
}
