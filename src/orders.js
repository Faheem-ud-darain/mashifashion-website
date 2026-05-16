import './style.css'

const init = () => {
  renderOrders();
  setupCursor();
  initLucide();
}

const renderOrders = () => {
  const orders = [
    { id: '#341918713810', date: '25 Aug 2026', total: '$1,427.00', status: 'Delivered', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=200' },
    { id: '#341918713811', date: '12 Aug 2026', total: '$85.00', status: 'Delivered', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200' },
    { id: '#341918713812', date: '01 Aug 2026', total: '$220.00', status: 'Delivered', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=200' }
  ];

  const container = document.querySelector('#orders-list-container');
  if (!container) return;

  container.innerHTML = orders.map(o => `
    <div class="order-card" onclick="window.location.href='/tracking.html'">
      <div style="width: 80px; height: 80px; background: var(--bg-light); border-radius: 12px; overflow: hidden;">
        <img src="${o.img}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
      <div>
        <h4 style="font-size: 1rem; margin-bottom: 0.3rem;">Order ${o.id}</h4>
        <p style="font-size: 0.75rem; color: #999;">Placed on ${o.date}</p>
      </div>
      <div style="font-weight: 700; font-size: 0.9rem;">
        ${o.total}
      </div>
      <div>
        <span style="background: #e6f7ed; color: #1ea35b; padding: 0.4rem 1rem; border-radius: 50px; font-size: 0.7rem; font-weight: 700;">${o.status}</span>
      </div>
      <div style="text-align: right; color: #999;">
        <i data-lucide="chevron-right"></i>
      </div>
    </div>
  `).join('');
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

  document.querySelectorAll('a, button, .dash-nav-item, .order-card').forEach(el => {
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
