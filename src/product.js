import './style.css'

const init = () => {
  renderNavbar();
  renderFooter();
  setupCursor();
  setupProductLogic();
  renderSuggestions();
  initLucide();
}

const renderNavbar = () => {
  const nav = document.querySelector('#navbar');
  nav.innerHTML = `
    <div class="container flex" style="justify-content: space-between; width: 100%; align-items: center;">
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
        <a href="/search.html" style="color: inherit;"><i data-lucide="search"></i></a>
        <a href="/auth.html" style="color: inherit;"><i data-lucide="user"></i></a>
        <a href="/cart.html" style="color: inherit;"><i data-lucide="shopping-cart"></i></a>
      </div>
    </div>
  `;
}

const renderFooter = () => {
  const footer = document.querySelector('#footer');
  footer.innerHTML = `
    <div style="background: #fff; border-top: 1px solid var(--border-light); padding: 80px 0 40px;">
      <div class="container">
        <div class="grid" style="grid-template-columns: repeat(4, 1fr); gap: 4rem; margin-bottom: 60px;">
          <div class="footer-col">
            <h2 style="font-size: 2rem; font-weight: 900; margin-bottom: 1.5rem;">MASHI</h2>
            <p style="margin-bottom: 2rem;">Elevating your lifestyle with curated high-end fashion.</p>
            <div class="flex" style="gap: 1.5rem;">
              <i data-lucide="instagram"></i>
              <i data-lucide="twitter"></i>
              <i data-lucide="facebook"></i>
            </div>
          </div>
          <div class="footer-col">
            <h4 style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 2rem;">Quick Links</h4>
            <ul style="display: flex; flex-direction: column; gap: 1rem; font-size: 0.9rem;">
              <li><a href="#">Shop All</a></li>
              <li><a href="#">New Arrivals</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 2rem;">Support</h4>
            <ul style="display: flex; flex-direction: column; gap: 1rem; font-size: 0.9rem;">
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 2rem;">Resources</h4>
            <ul style="display: flex; flex-direction: column; gap: 1rem; font-size: 0.9rem;">
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

const setupProductLogic = () => {
  // Gallery Logic
  const thumbs = document.querySelectorAll('.thumb');
  const mainImg = document.querySelector('#main-product-image');
  
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      mainImg.src = thumb.querySelector('img').src;
    });
  });

  // Size Selector Logic
  const sizeBtns = document.querySelectorAll('.size-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Accordion Logic
  const accordions = document.querySelectorAll('.accordion-item');
  accordions.forEach(item => {
    const header = item.querySelector('.flex-between');
    header.addEventListener('click', () => {
      item.classList.toggle('active');
      const icon = header.querySelector('i');
      if (item.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'chevron-up');
      } else {
        icon.setAttribute('data-lucide', 'chevron-down');
      }
      initLucide();
    });
  });
}

const renderSuggestions = () => {
  const products = [
    { name: 'Polo with Contrast Trims', price: '$212', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600' },
    { name: 'Gradient Graphic T-shirt', price: '$145', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600' },
    { name: 'Polo with Tipping Details', price: '$180', img: 'https://images.unsplash.com/photo-1539109132381-31512579f455?q=80&w=600' },
    { name: 'Striped Jacket', price: '$120', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=600' }
  ];

  const grid = document.querySelector('#suggested-products');
  grid.innerHTML = products.map(p => `
    <div class="p-card">
      <div class="p-img-wrapper">
        <img src="${p.img}" />
      </div>
      <div class="p-info" style="text-align: center;">
        <h4>${p.name}</h4>
        <p class="price">${p.price}</p>
      </div>
    </div>
  `).join('');
}

const setupCursor = () => {
  const cursor = document.querySelector('#cursor');
  const cursorBlur = document.querySelector('#cursor-blur');
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorBlur.animate({
      left: `${e.clientX - 100}px`,
      top: `${e.clientY - 100}px`
    }, { duration: 500, fill: "forwards" });
  });

  document.querySelectorAll('a, button, .thumb, .p-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(3)';
      cursor.style.backgroundColor = 'rgba(0,0,0,0.1)';
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
