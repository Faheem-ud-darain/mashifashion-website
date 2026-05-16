import { state } from '../state.js';

export const ProductDetail = () => {
  return `
    <div class="product-detail-page section-padding">
      <div class="container">
        <div class="pd-grid">
          <div class="pd-images">
            <div class="pd-main-image">
              <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200" alt="Product" id="main-product-img" />
            </div>
            <div class="pd-thumbnails">
              <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=200" class="active" />
              <img src="https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=200" />
              <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=200" />
            </div>
          </div>
          
          <div class="pd-info">
            <p class="pd-category">SERIES 01 / OUTERWEAR</p>
            <h1 class="pd-title">Architectural Oversized Hoodie</h1>
            <p class="pd-price">$185.00</p>
            
            <div class="pd-description">
              <p>A structural silhouette crafted from high-density French Terry. Featuring dropped shoulders, a double-layered hood, and the signature 'Reflect' architectural seam details.</p>
            </div>

            <div class="pd-options">
              <div class="option-group">
                <label>Select Size</label>
                <div class="size-selector">
                  <button>S</button>
                  <button class="active">M</button>
                  <button>L</button>
                  <button>XL</button>
                </div>
              </div>
              
              <div class="option-group">
                <label>Color</label>
                <div class="color-selector">
                  <button style="background: #111;" class="active"></button>
                  <button style="background: #333;"></button>
                  <button style="background: #f0f0f0;"></button>
                </div>
              </div>
            </div>

            <div class="pd-actions">
              <button class="btn btn-dark btn-block" id="add-to-cart-btn">Add to Studio Cart</button>
              <button class="btn btn-outline btn-block">Add to Wishlist</button>
            </div>

            <div class="pd-meta">
              <div class="meta-item">
                <i data-lucide="truck"></i>
                <span>Free Studio Shipping on orders over $200</span>
              </div>
              <div class="meta-item">
                <i data-lucide="refresh-cw"></i>
                <span>30-Day Draft Exchange Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export const initProductDetail = () => {
  const addBtn = document.getElementById('add-to-cart-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const product = {
        id: 1,
        name: 'Architectural Oversized Hoodie',
        price: 185,
        img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600'
      };
      state.addToCart(product);
      alert('Added to cart');
    });
  }
  
  if (window.lucide) window.lucide.createIcons();
}
