import './style.css'

const init = () => {
  renderTimeline();
  setupCursor();
  initLucide();
}

const renderTimeline = () => {
  const steps = [
    { title: 'Delivered', time: '27th Aug 2026 At 2:30 PM', location: 'At location Ahmedabad, GJ', active: true },
    { title: 'Out For Delivery', time: '27th Aug 2026 At 9:30 AM', location: 'At location Ahmedabad, GJ', active: false },
    { title: 'In Transit', time: '26th Aug 2026 At 10:00 PM', location: 'From Mumbai, MH to Ahmedabad, GJ', active: false },
    { title: 'Order Picked up', time: '26th Aug 2026 At 01:22 AM', location: 'From Mumbai, MH', active: false },
    { title: 'Order Received', time: '25th Aug 2026 At 10:46 PM', location: 'At Mumbai, MH', active: false }
  ];

  const container = document.querySelector('#tracking-timeline');
  if (!container) return;

  container.innerHTML = steps.map(s => `
    <div class="timeline-item ${s.active ? 'active' : ''}">
      <div>
        <h5>${s.title}</h5>
        <p>${s.location}</p>
      </div>
      <div style="text-align: right;">
        <p style="color: #000; font-weight: 700;">${s.time.split('At')[0]}</p>
        <p>${s.time.split('At')[1] || ''}</p>
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

  document.querySelectorAll('a, button, .dash-nav-item, span').forEach(el => {
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
