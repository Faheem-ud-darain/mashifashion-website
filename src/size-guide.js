import './style.css'

const init = () => {
  renderNavbar();
  renderFooter();
  renderChart();
  setupTabs();
  setupUnits();
  setupCursor();
  initLucide();
}

const sizeData = {
  Tops: [
    { size: 'XS', chest: 88, waist: 72, hips: 90, length: 68 },
    { size: 'S', chest: 94, waist: 78, hips: 96, length: 70 },
    { size: 'M', chest: 100, waist: 84, hips: 102, length: 72 },
    { size: 'L', chest: 106, waist: 90, hips: 108, length: 74 },
    { size: 'XL', chest: 112, waist: 96, hips: 114, length: 76 }
  ],
  Bottoms: [
    { size: '28', chest: '-', waist: 71, hips: 91, length: 102 },
    { size: '30', chest: '-', waist: 76, hips: 96, length: 104 },
    { size: '32', chest: '-', waist: 81, hips: 101, length: 106 },
    { size: '34', chest: '-', waist: 86, hips: 106, length: 108 },
    { size: '36', chest: '-', waist: 91, hips: 111, length: 110 }
  ],
  Outerwear: [
    { size: 'S', chest: 100, waist: 88, hips: 102, length: 75 },
    { size: 'M', chest: 106, waist: 94, hips: 108, length: 77 },
    { size: 'L', chest: 112, waist: 100, hips: 114, length: 79 },
    { size: 'XL', chest: 118, waist: 106, hips: 120, length: 81 }
  ]
};

let currentCat = 'Tops';
let currentUnit = 'CM';

const renderChart = () => {
  const tbody = document.querySelector('#size-table-body');
  if (!tbody) return;

  const data = sizeData[currentCat];
  
  tbody.innerHTML = data.map(d => `
    <tr>
      <td style="color: #000;">${d.size}</td>
      <td>${convert(d.chest)}</td>
      <td>${convert(d.waist)}</td>
      <td>${convert(d.hips)}</td>
      <td>${convert(d.length)}</td>
    </tr>
  `).join('');
}

const convert = (val) => {
  if (val === '-') return '-';
  if (currentUnit === 'CM') return `${val} cm`;
  return `${(val / 2.54).toFixed(1)} in`;
}

const setupTabs = () => {
  const tabs = document.querySelectorAll('.size-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCat = tab.innerText;
      renderChart();
    });
  });
}

const setupUnits = () => {
  const units = document.querySelectorAll('.unit-toggle .unit');
  units.forEach(unit => {
    unit.addEventListener('click', () => {
      units.forEach(u => u.classList.remove('active'));
      unit.classList.add('active');
      currentUnit = unit.innerText;
      renderChart();
    });
  });
}

const renderNavbar = () => {
  const nav = document.querySelector('#navbar');
  if (!nav) return;
  nav.innerHTML = `
    <div class="container flex-between" style="height: 100%;">
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/store.html">Shop</a></li>
        <li><a href="/categories.html">Collections</a></li>
        <li><a href="/about.html">About Us</a></li>
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

  document.querySelectorAll('a, button, .size-tab, .unit, tr').forEach(el => {
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
