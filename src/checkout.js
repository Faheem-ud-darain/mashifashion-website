import './style.css'

const init = () => {
  renderNavbar();
  renderFooter();
  renderSummaryItems();
  setupPaymentTabs();
  setupOrderButton();
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
        <a href="/cart.html" style="color: inherit;"><i data-lucide="shopping-cart"></i></a>
      </div>
    </div>
  `;
}

const renderSummaryItems = () => {
  const items = [
    { name: 'Mishi Black Gray Hoodie', qty: 1, price: 437, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=200' },
    { name: 'Vintage Oversized Tee', qty: 1, price: 945, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200' }
  ];

  const container = document.querySelector('#checkout-items');
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="checkout-summary-item">
      <img src="${item.img}" />
      <div style="flex: 1;">
        <h4 style="font-size: 0.9rem; margin-bottom: 0.2rem;">${item.name}</h4>
        <p style="font-size: 0.7rem; color: #999;">Qty: ${item.qty}</p>
      </div>
      <div style="font-weight: 700; font-size: 0.9rem;">$${item.price}</div>
    </div>
  `).join('');
}

const setupPaymentTabs = () => {
  const tabs = document.querySelectorAll('.payment-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

const setupOrderButton = () => {
  const btn = document.querySelector('#place-order-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    btn.innerHTML = '<i data-lucide="loader-2" class="spin"></i> Processing...';
    initLucide();
    setTimeout(() => {
      alert('Order Placed Successfully! Redirecting to your dashboard...');
      window.location.href = '/dashboard.html';
    }, 2000);
  });
}

const renderFooter = () => {
  const footer = document.querySelector('#footer');
  if (!footer) return;
  footer.innerHTML = `
    <div style="background: #fff; border-top: 1px solid var(--border-light); padding: 60px 0 30px;">
      <div class="container">
        <div style="text-align: center;">
          <p style="color: #999; font-size: 0.7rem; letter-spacing: 1px;">MASHI FASHION STUDIO &copy; 2026</p>
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

  document.querySelectorAll('a, button, .payment-tab').forEach(el => {
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
