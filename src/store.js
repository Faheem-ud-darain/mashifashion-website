import './style.css'

const init = () => {
  renderNavbar();
  renderFooter();
  renderStoreGrid();
  setupCursor();
  setupFilters();
  initLucide();
}

const renderNavbar = () => {
  const nav = document.querySelector('#navbar');
  if (!nav) return;
  nav.innerHTML = `
    <div class="container flex-between" style="height: 100%;">
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/store.html" class="active">Shop</a></li>
        <li><a href="#">Sale</a></li>
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

const renderStoreGrid = () => {
  const products = [
    { name: 'Mishi Black Gray Hoodie', price: '$180', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600' },
    { name: 'LHR London England Hoodie', price: '$250', img: 'https://images.unsplash.com/photo-1539109132381-31512579f455?q=80&w=600' },
    { name: 'Retro Rapper Toped Hoodie', price: '$180', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600' },
    { name: 'Hip Hop Street Wear Hoodie', price: '$120', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600' },
    { name: 'Vintage Oversized Tee', price: '$85', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600' },
    { name: 'Cargo Tech Pants', price: '$210', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600' },
    { name: 'Minimalist Windbreaker', price: '$320', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600' },
    { name: 'Urban Leather Boots', price: '$450', img: 'https://images.unsplash.com/photo-1520639889313-7ef7205bb29c?q=80&w=600' },
    { name: 'Reflective Joggers', price: '$190', img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=600' },
    { name: 'Premium Knit Sweater', price: '$275', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600' },
    { name: 'Studio Bucket Hat', price: '$65', img: 'https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?q=80&w=600' },
    { name: 'Essential Tote Bag', price: '$110', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600' }
  ];

  const grid = document.querySelector('#store-grid');
  if (!grid) return;
  grid.innerHTML = products.map(p => `
    <a href="/product.html" class="p-card">
      <div class="p-img-wrapper">
        <img src="${p.img}" />
        <div class="p-hover">
          <button class="btn btn-outline" style="background: #fff; border: none; font-size: 0.6rem; padding: 0.8rem 1.2rem;">Add to Cart</button>
          <button class="btn btn-dark" style="font-size: 0.6rem; padding: 0.8rem 1.2rem;">Buy Now</button>
        </div>
      </div>
      <div class="p-info">
        <div class="flex-between" style="margin-bottom: 0.5rem;">
          <span style="font-size: 0.65rem; color: #999; font-weight: 700;">NEW ARRIVAL</span>
          <div class="flex" style="gap: 2px;">
            <i data-lucide="star" style="width: 10px; height: 10px; fill: var(--accent-gold); color: var(--accent-gold);"></i>
            <span style="font-size: 0.65rem; font-weight: 700;">4.8</span>
          </div>
        </div>
        <h4>${p.name}</h4>
        <p class="price">${p.price}</p>
      </div>
    </a>
  `).join('');
}

const setupFilters = () => {
  const sizeBtns = document.querySelectorAll('.size-btn-sm');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  const catItems = document.querySelectorAll('.filter-group ul li');
  catItems.forEach(item => {
    item.addEventListener('click', () => {
      catItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

const renderFooter = () => {
  const footer = document.querySelector('#footer');
  if (!footer) return;
  footer.innerHTML = `
    <div style="background: #fff; border-top: 1px solid var(--border-light); padding: 100px 0 50px;">
      <div class="container">
        <div class="grid-4" style="display: grid; gap: 5rem; margin-bottom: 80px;">
          <div class="footer-col">
            <h2 style="font-size: 2.2rem; font-weight: 900; margin-bottom: 1.5rem;">MASHI</h2>
            <p style="color: #666; line-height: 1.8;">Elevating your lifestyle with curated high-end fashion.</p>
          </div>
          <div class="footer-col">
            <h4 style="font-size: 0.9rem; margin-bottom: 2.5rem; letter-spacing: 1px;">Shop</h4>
            <ul style="display: flex; flex-direction: column; gap: 1.2rem; font-size: 0.9rem; list-style: none;">
              <li><a href="#">Collections</a></li>
              <li><a href="#">New Arrivals</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 style="font-size: 0.9rem; margin-bottom: 2.5rem; letter-spacing: 1px;">Support</h4>
            <ul style="display: flex; flex-direction: column; gap: 1.2rem; font-size: 0.9rem; list-style: none;">
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 style="font-size: 0.9rem; margin-bottom: 2.5rem; letter-spacing: 1px;">Visit</h4>
            <p style="font-size: 0.9rem; color: #666; line-height: 1.8;">123 Fashion Ave,<br/>Suite 100<br/>New York, NY 10001</p>
          </div>
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

  document.querySelectorAll('a, button, .cat-card, .p-card, .pagination-btn').forEach(el => {
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
