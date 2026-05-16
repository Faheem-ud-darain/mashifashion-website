import './style.css'

const init = () => {
  renderNavbar();
  renderFooter();
  renderTrending();
  setupTabLogic();
  setupCursor();
  initLucide();
}

const renderNavbar = () => {
  const nav = document.querySelector('#navbar');
  if (!nav) return;
  nav.innerHTML = `
    <div class="container flex-between" style="height: 100%;">
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/store.html">Shop</a></li>
        <li><a href="/categories.html" class="active">Collections</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
      
      <a href="/" class="logo">
        <h2 style="font-size: 2rem; font-weight: 900;">MASHI</h2>
      </a>

      <div class="nav-actions flex" style="gap: 1.5rem;">
        <a href="/search.html" style="color: inherit;"><i data-lucide="search"></i></a>
        <a href="/auth.html" style="color: inherit;"><i data-lucide="user"></i></a>
        <a href="/cart.html" style="color: inherit;"><i data-lucide="shopping-cart"></i></a>
      </div>
    </div>
  `;
}

const trendingProducts = [
  { id: 1, name: 'Mishi Black Gray Hoodie', price: 120, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=400', cat: 'All' },
  { id: 2, name: 'Studio Classic Watch', price: 299, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400', cat: 'Watches' },
  { id: 3, name: 'Leather Studio Bag', price: 450, img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=400', cat: 'Bags' },
  { id: 4, name: 'Reflect High Tops', price: 220, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400', cat: 'Shoes' },
  { id: 5, name: 'Gold Dial Watch', price: 890, img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=400', cat: 'Watches' },
  { id: 6, name: 'Oversized Street Tee', price: 85, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400', cat: 'All' }
];

const renderTrending = (filter = 'All') => {
  const grid = document.querySelector('#trending-grid');
  if (!grid) return;

  const filtered = filter === 'All' ? trendingProducts : trendingProducts.filter(p => p.cat === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="window.location.href='/product.html'">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}">
        <div class="badge">TRENDING</div>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>$${p.price}.00</p>
      </div>
    </div>
  `).join('');
}

const setupTabLogic = () => {
  const tabs = document.querySelectorAll('.category-tabs .tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderTrending(tab.innerText);
    });
  });
}

const renderFooter = () => {
  const footer = document.querySelector('#footer');
  if (!footer) return;
  footer.innerHTML = `
    <div style="background: #fff; border-top: 1px solid var(--border-light); padding: 80px 0 40px;">
      <div class="container">
        <div style="text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 900; margin-bottom: 2rem;">MASHI</h2>
          <p style="color: #999; font-size: 0.8rem;">&copy; 2026 Mashi Fashion Studio. All rights reserved.</p>
        </div>
      </div>
    </div>
  `;
}

const setupCursor = () => {
  const cursor = document.querySelector('#cursor');
  const cursorBlur = document.querySelector('#cursor-blur');
  if (!cursor || !cursorBlur) return;
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorBlur.animate({
      left: `${e.clientX - 150}px`,
      top: `${e.clientY - 150}px`
    }, { duration: 600, fill: "forwards" });
  });

  document.querySelectorAll('a, button, .tab, .bento-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(4)';
      cursor.style.backgroundColor = 'rgba(0,0,0,0.05)';
      cursor.style.border = '1px solid #000';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.backgroundColor = '#000';
      cursor.style.border = 'none';
    });
  });
}

const initLucide = () => {
  if (window.lucide) window.lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', init);
