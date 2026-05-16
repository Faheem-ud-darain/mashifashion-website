import { state } from '../state.js';

export const Store = () => {
  return `
    <div class="store-page section-padding">
      <div class="container">
        <header class="store-header">
          <p class="tagline">CATALOGUE</p>
          <h1>The Series</h1>
          <div class="store-filters">
            <button class="filter-btn active">All Pieces</button>
            <button class="filter-btn">Outerwear</button>
            <button class="filter-btn">Basics</button>
            <button class="filter-btn">Accessories</button>
          </div>
        </header>

        <div class="product-grid-v2" id="store-grid">
          <!-- Injected by initStore -->
        </div>
      </div>
    </div>
  `;
}

export const initStore = () => {
  const grid = document.getElementById('store-grid');
  if (!grid) return;

  const products = [
    { id: 1, name: 'Architectural Oversized Hoodie', price: 185, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600' },
    { id: 2, name: 'Structural Cargo Pants', price: 210, img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600' },
    { id: 3, name: 'Draft Silhouette T-Shirt', price: 85, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600' },
    { id: 4, name: 'Minimalist Studio Cap', price: 45, img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600' },
    { id: 5, name: 'Shadow Layer Jacket', price: 320, img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600' },
    { id: 6, name: 'Geometric Tote Bag', price: 95, img: 'https://images.unsplash.com/photo-1544816153-12ad58bc1c1e?q=80&w=600' }
  ];

  grid.innerHTML = products.map(p => `
    <div class="product-card-v2" onclick="window.navigateTo('/product/${p.id}')">
      <div class="pc-image">
        <img src="${p.img}" alt="${p.name}" />
        <div class="pc-overlay">
          <button class="pc-add" data-id="${p.id}">Add to Cart</button>
        </div>
      </div>
      <div class="pc-info">
        <h4>${p.name}</h4>
        <span class="pc-price">$${p.price}</span>
      </div>
    </div>
  `).join('');

  // Handle Add to Cart
  grid.querySelectorAll('.pc-add').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const product = products.find(p => p.id === id);
      state.addToCart(product);
      alert(`${product.name} added to cart!`);
    });
  });
}
