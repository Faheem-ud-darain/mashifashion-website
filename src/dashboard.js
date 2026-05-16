import './style.css'

const init = () => {
  renderActivities();
  setupCursor();
  initLucide();
}

const renderActivities = () => {
  const activities = [
    { type: 'Purchase', title: 'Streetwear Hoodie', date: '01 Apr, 1:30 pm', status: '50%', icon: 'shopping-bag' },
    { type: 'Transfer', title: 'Studio Credits', date: '10 Apr, 1:30 pm', status: '25%', icon: 'refresh-cw' },
    { type: 'Gift', title: 'Gift Card Redeemed', date: '15 Apr, 4:30 pm', status: '15%', icon: 'gift' },
    { type: 'Review', title: 'Product Feedback', date: '15 Apr, 7:30 pm', status: '10%', icon: 'star' }
  ];

  const list = document.querySelector('#recent-orders-list');
  if (!list) return;

  list.innerHTML = activities.map(a => `
    <div class="activity-item">
      <div class="flex" style="gap: 1.5rem;">
        <div class="icon-box">
          <i data-lucide="${a.icon}" style="width: 20px;"></i>
        </div>
        <div>
          <h4 style="font-size: 0.95rem; letter-spacing: 0; margin-bottom: 0.3rem;">${a.title}</h4>
          <p style="font-size: 0.7rem; color: #999; font-weight: 600;">${a.date}</p>
        </div>
      </div>
      <div style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid #eee; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 800;">
        ${a.status}
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

  document.querySelectorAll('a, button, .dash-nav-item, .activity-item').forEach(el => {
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
