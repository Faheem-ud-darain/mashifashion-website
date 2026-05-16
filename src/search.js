import './style.css'

const init = () => {
  renderNavbar();
  renderFooter();
  renderInitialResults();
  setupSearchLogic();
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
        <li><a href="#">Sale</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
      
      <a href="/" class="logo">
        <h2 style="font-size: 2rem; font-weight: 900;">MASHI</h2>
      </a>

      <div class="nav-actions flex" style="gap: 1.5rem;">
        <a href="/search.html" class="active" style="color: inherit;"><i data-lucide="search"></i></a>
        <a href="/auth.html" style="color: inherit;"><i data-lucide="user"></i></a>
        <a href="/cart.html" style="color: inherit;"><i data-lucide="shopping-cart"></i></a>
      </div>
    </div>
  `;
}

const products = [
  { id: 1, name: 'Mishi Black Gray Hoodie', price: 120, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=400', category: 'Hoodies' },
  { id: 2, name: 'Vintage Oversized Tee', price: 85, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400', category: 'T-Shirts' },
  { id: 3, name: 'Streetwear Cargo Pants', price: 150, img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400', category: 'Pants' },
  { id: 4, name: 'Mashi Limited Jacket', price: 290, img: 'https://images.unsplash.com/photo-1551028711-031c50728a15?q=80&w=400', category: 'Outerwear' },
  { id: 5, name: 'Reflect Beanie', price: 45, img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=400', category: 'Accessories' },
  { id: 6, name: 'Studio Sneaker V1', price: 220, img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=400', category: 'Footwear' }
];

const renderInitialResults = (filter = '') => {
  const grid = document.querySelector('#search-results-grid');
  const count = document.querySelector('#results-count');
  if (!grid) return;

  const filtered = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()) || p.category.toLowerCase().includes(filter.toLowerCase()));
  
  count.innerText = `Showing ${filtered.length} Results`;

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="window.location.href='/product.html'">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}">
        <div class="badge">NEW</div>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>$${p.price}.00</p>
      </div>
    </div>
  `).join('');
}

const setupSearchLogic = () => {
  const input = document.querySelector('#search-input');
  if (!input) return;

  input.addEventListener('input', (e) => {
    renderInitialResults(e.target.value);
  });

  document.querySelectorAll('.search-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      input.value = tag.innerText;
      renderInitialResults(tag.innerText);
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

  document.querySelectorAll('a, button, .search-tag, .product-card').forEach(el => {
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
