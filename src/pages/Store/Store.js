import { state } from '../../state.js';

export const Store = () => {
  return `
    <div class="store-page section-padding">
      <div class="container">
        <!-- Store Hero -->
        <header class="store-hero" style="margin-bottom: 4rem;">
            <span class="sub-tag">Mashi Studio / Store</span>
            <h1 style="font-size: clamp(3rem, 8vw, 4.5rem); line-height: 1;">All Collections</h1>
        </header>

        <div class="store-layout">
          <!-- Sidebar -->
          <aside id="store-sidebar">
            <div class="filter-group">
                <h4>Categories</h4>
                <ul class="filter-list">
                    <li class="active" data-category="all">All Products</li>
                    <li data-category="new">New Arrivals</li>
                    <li data-category="hoodies">Hoodies</li>
                    <li data-category="outerwear">Outerwear</li>
                    <li data-category="accessories">Accessories</li>
                </ul>
            </div>
            
            <div class="filter-group">
                <h4>Filter by Price</h4>
                <div class="price-range" style="margin-top: 1rem;">
                    <input type="range" min="0" max="1000" value="500" id="price-slider">
                    <div class="flex-between" style="margin-top: 1rem; font-size: 0.8rem; font-weight: 600;">
                        <span>$0</span>
                        <span id="price-val">$500</span>
                    </div>
                </div>
            </div>

            <div class="filter-group">
                <h4>Size</h4>
                <div class="flex" style="gap: 0.8rem; flex-wrap: wrap;">
                    <button class="size-btn active">S</button>
                    <button class="size-btn">M</button>
                    <button class="size-btn">L</button>
                    <button class="size-btn">XL</button>
                </div>
            </div>

            <div class="filter-group">
                <h4>Colors</h4>
                <div class="flex" style="gap: 1rem;">
                    <div class="color-dot active" style="background: #000;"></div>
                    <div class="color-dot" style="background: #eee; border: 1px solid #ddd;"></div>
                    <div class="color-dot" style="background: #8B4513;"></div>
                </div>
            </div>
          </aside>

          <!-- Product Area -->
          <div id="product-area">
            <div class="flex-between" style="margin-bottom: 3rem;">
                <p style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;" id="product-count">Showing 12 of 48 products</p>
                <div class="flex" style="gap: 1rem;">
                    <span style="font-size: 0.8rem; font-weight: 600;">SORT BY:</span>
                    <select class="sort-select">
                        <option>Popularity</option>
                        <option>Newest</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                </div>
            </div>

            <div class="product-grid-v2" id="store-grid">
                <!-- Products will be injected here -->
            </div>

            <!-- Pagination -->
            <div class="pagination flex" style="justify-content: center; margin-top: 6rem; gap: 1rem;">
                <button class="page-btn active">1</button>
                <button class="page-btn">2</button>
                <button class="page-btn">3</button>
                <button class="page-btn"><i data-lucide="chevron-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export const initStore = () => {
  const grid = document.getElementById('store-grid');
  if (!grid) return;

  const products = [
    { id: 1, name: 'Mishi Black Gray Hoodie', price: 180, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600' },
    { id: 2, name: 'LHR London England Hoodie', price: 250, img: 'https://images.unsplash.com/photo-1539109132381-31512579f455?q=80&w=600' },
    { id: 3, name: 'Retro Rapper Toped Hoodie', price: 180, img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600' },
    { id: 4, name: 'Hip Hop Street Wear Hoodie', price: 120, img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600' },
    { id: 5, name: 'Vintage Oversized Tee', price: 85, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600' },
    { id: 6, name: 'Cargo Tech Pants', price: 210, img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600' },
    { id: 7, name: 'Minimalist Windbreaker', price: 320, img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600' },
    { id: 8, name: 'Urban Leather Boots', price: 450, img: 'https://images.unsplash.com/photo-1520639889313-7ef7205bb29c?q=80&w=600' },
    { id: 9, name: 'Reflective Joggers', price: 190, img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=600' },
    { id: 10, name: 'Premium Knit Sweater', price: 275, img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600' },
    { id: 11, name: 'Studio Bucket Hat', price: 65, img: 'https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?q=80&w=600' },
    { id: 12, name: 'Essential Tote Bag', price: 110, img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600' }
  ];

  const renderProducts = (items) => {
    grid.innerHTML = items.map(p => `
      <div class="product-card-v2" onclick="window.navigateTo('/product')">
        <div class="pc-image">
          <img src="${p.img}" alt="${p.name}" />
          <div class="pc-overlay">
            <button class="pc-add" data-id="${p.id}">Add to Cart</button>
            <button class="pc-buy" data-id="${p.id}">Buy Now</button>
          </div>
        </div>
        <div class="pc-info">
          <div class="flex-between" style="margin-bottom: 0.5rem;">
            <span style="font-size: 0.65rem; color: #999; font-weight: 700;">NEW ARRIVAL</span>
            <div class="flex" style="gap: 2px;">
              <i data-lucide="star" style="width: 10px; height: 10px; fill: var(--accent-gold); color: var(--accent-gold);"></i>
              <span style="font-size: 0.65rem; font-weight: 700;">4.8</span>
            </div>
          </div>
          <h4>${p.name}</h4>
          <span class="pc-price">$${p.price}</span>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();

    // Re-attach listeners
    grid.querySelectorAll('.pc-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        const product = products.find(p => p.id === id);
        state.addToCart(product);
        // Custom event for navbar update
        window.dispatchEvent(new CustomEvent('stateChange', { detail: { key: 'cart', value: state.getCart() } }));
      });
    });
  }

  renderProducts(products);

  // Setup Sidebar Filters
  const filterItems = document.querySelectorAll('.filter-list li');
  filterItems.forEach(item => {
    item.addEventListener('click', () => {
      filterItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      // Logic for filtering would go here
    });
  });

  const priceSlider = document.getElementById('price-slider');
  const priceVal = document.getElementById('price-val');
  if (priceSlider && priceVal) {
    priceSlider.addEventListener('input', (e) => {
      priceVal.textContent = `$${e.target.value}`;
    });
  }

  const sizeBtns = document.querySelectorAll('.size-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  const colorDots = document.querySelectorAll('.color-dot');
  colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      colorDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });
}
