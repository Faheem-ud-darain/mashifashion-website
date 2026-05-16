export const OrderConfirmation = () => {
  return `
    <div class="confirmation-page">
      <div class="container flex-center" style="min-height: 80vh; flex-direction: column; text-align: center;">
        <div class="success-icon" style="margin-bottom: 3rem;">
          <div style="width: 100px; height: 100px; background: var(--accent-gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff;">
            <i data-lucide="check" style="width: 50px; height: 50px;"></i>
          </div>
        </div>
        
        <header style="margin-bottom: 4rem;">
          <p class="tagline" style="letter-spacing: 5px; color: var(--accent-gold); font-weight: 700; font-size: 0.8rem; margin-bottom: 1.5rem;">ORDER CONFIRMED</p>
          <h1 style="font-family: 'Outfit', sans-serif; font-size: 5rem; letter-spacing: -3px; line-height: 0.9;">Thank You<br/>For Your Purchase.</h1>
        </header>

        <div class="order-details-box" style="background: #F8F8F8; padding: 4rem; border-radius: 40px; width: 100%; max-width: 600px; margin-bottom: 4rem;">
          <div class="flex-between" style="border-bottom: 1px solid #eee; padding-bottom: 1.5rem; margin-bottom: 1.5rem;">
            <span style="color: #999; font-size: 0.8rem; font-weight: 700; text-transform: uppercase;">Order Number</span>
            <span style="font-weight: 700;">#MSH-928347</span>
          </div>
          <div class="flex-between" style="border-bottom: 1px solid #eee; padding-bottom: 1.5rem; margin-bottom: 1.5rem;">
            <span style="color: #999; font-size: 0.8rem; font-weight: 700; text-transform: uppercase;">Expected Delivery</span>
            <span style="font-weight: 700;">May 24 - May 28, 2026</span>
          </div>
          <p style="font-size: 0.9rem; color: #666; line-height: 1.6;">A confirmation email has been sent to your inbox. Your architectural garments are now being drafted in our studio.</p>
        </div>

        <div class="confirmation-actions flex" style="gap: 2rem;">
          <button class="btn btn-dark" onclick="window.location.href='/tracking.html'">Track Order</button>
          <button class="btn btn-outline" onclick="window.location.href='/store.html'">Continue Shopping</button>
        </div>

        <div style="margin-top: 6rem; opacity: 0.3;">
          <h2 style="font-family: 'Outfit', sans-serif; font-size: 10vw; letter-spacing: -10px; color: #000;">MASHI</h2>
        </div>
      </div>
    </div>
  `;
}
