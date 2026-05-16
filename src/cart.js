import './style.css'

const init = () => {
  renderNavbar();
  renderFooter();
  renderCartItems();
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
        <i data-lucide="search"></i>
        <a href="/auth.html" style="color: inherit;"><i data-lucide="user"></i></a>
        <a href="/cart.html" class="active" style="color: inherit;"><i data-lucide="shopping-cart"></i></a>
      </div>
    </div>
  `;
}

const renderCartItems = () => {
  const items = [
    { id: 1, name: 'Mishi Black Gray Hoodie', variant: 'Set : Colour: Coffee', price: 437, qty: 4, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=200' },
    { id: 2, name: 'Vintage Oversized Tee', variant: 'Set : Colour: Brown', price: 945, qty: 2, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200' },
    { id: 3, name: 'Hip Hop Street Wear', variant: 'Set : Colour: Deep Green', price: 597, qty: 7, img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=200' }
  ];

  const container = document.querySelector('#cart-items-list');
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="flex" style="gap: 1.5rem;">
        <div style="width: 100px; height: 100px; background: var(--bg-light); border-radius: 12px; overflow: hidden;">
          <img src="${item.img}" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div>
          <h4 style="font-size: 1.1rem; letter-spacing: -0.5px; margin-bottom: 0.5rem;">${item.name}</h4>
          <p style="font-size: 0.75rem; color: #999; font-weight: 600;">${item.variant}</p>
        </div>
      </div>
      
      <div class="qty-selector">
        <span class="qty-btn minus">-</span>
        <span style="font-weight: 700; font-size: 0.9rem;">${item.qty}</span>
        <span class="qty-btn plus">+</span>
      </div>

      <div style="text-align: center; font-weight: 800; font-size: 1.2rem;">
        $${item.price}
      </div>

      <div style="text-align: right;">
        <i data-lucide="trash-2" class="qty-btn" style="width: 20px;"></i>
      </div>
    </div>
  `).join('');

  setupCartEventListeners();
}

const setupCartEventListeners = () => {
  document.querySelectorAll('.minus').forEach(btn => {
    btn.addEventListener('click', () => {
      let qty = btn.nextElementSibling;
      if (parseInt(qty.innerText) > 1) {
        qty.innerText = parseInt(qty.innerText) - 1;
      }
    });
  });

  document.querySelectorAll('.plus').forEach(btn => {
    btn.addEventListener('click', () => {
      let qty = btn.previousElementSibling;
      qty.innerText = parseInt(qty.innerText) + 1;
    });
  });

  document.querySelectorAll('[data-lucide="trash-2"]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.cart-item').remove();
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
          <div class="flex" style="justify-content: center; gap: 2rem; margin-bottom: 3rem;">
            <a href="#" style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #000; text-decoration: none;">Facebook</a>
            <a href="#" style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #000; text-decoration: none;">Instagram</a>
            <a href="#" style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #000; text-decoration: none;">Twitter</a>
          </div>
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

  document.querySelectorAll('a, button, .qty-btn').forEach(el => {
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
