import './style.css'

const init = () => {
  renderNavbar();
  renderFooter();
  renderFAQs();
  setupTabs();
  setupSearch();
  setupCursor();
  initLucide();
}

const faqs = [
  { cat: 'Ordering', q: 'How do I place a custom tailoring order?', a: 'To place a custom order, visit our studio or select "Custom Tailoring" on our Contact page. One of our master tailors will reach out to schedule your first fitting.' },
  { cat: 'Ordering', q: 'Can I change my order after it has been placed?', a: 'Orders can be modified within 2 hours of placement. Please contact our support team immediately with your order number.' },
  { cat: 'Shipping', q: 'What are your international shipping rates?', a: 'We offer flat-rate international shipping. Rates vary by region: $30 for Asia, $45 for Europe/US. All orders are tracked and insured.' },
  { cat: 'Shipping', q: 'How long does shipping take?', a: 'Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days. Custom tailored items require an additional 14 days for production.' },
  { cat: 'Returns', q: 'What is your return policy?', a: 'We offer a 14-day return window for all non-custom items. Items must be in original condition with tags attached. Custom tailored items are final sale.' },
  { cat: 'Sizing', q: 'How do I find my perfect fit?', a: 'Consult our detailed Size Guide available on every product page. For a perfect fit, we recommend booking a professional measurement session at our studio.' },
  { cat: 'Studio', q: 'Do I need an appointment to visit the studio?', a: 'While walk-ins are welcome for general shopping, appointments are required for custom fittings and styling consultations.' }
];

const renderFAQs = (filter = 'Ordering', search = '') => {
  const container = document.querySelector('#faq-accordion');
  if (!container) return;

  const filtered = faqs.filter(f => {
    const matchesCat = filter === 'All' || f.cat === filter;
    const matchesSearch = f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  container.innerHTML = filtered.map((f, i) => `
    <div class="accordion-item" id="faq-${i}">
      <div class="accordion-header" onclick="toggleAccordion('faq-${i}')">
        <h4>${f.q}</h4>
        <i data-lucide="plus" class="icon"></i>
      </div>
      <div class="accordion-content">
        <div class="inner">
          ${f.a}
        </div>
      </div>
    </div>
  `).join('');
  
  initLucide();
}

window.toggleAccordion = (id) => {
  const items = document.querySelectorAll('.accordion-item');
  const target = document.getElementById(id);
  
  items.forEach(item => {
    if (item === target) {
      item.classList.toggle('active');
      const icon = item.querySelector('.icon');
      if (item.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'minus');
      } else {
        icon.setAttribute('data-lucide', 'plus');
      }
    } else {
      item.classList.remove('active');
      item.querySelector('.icon').setAttribute('data-lucide', 'plus');
    }
  });
  initLucide();
}

const setupTabs = () => {
  const tabs = document.querySelectorAll('.faq-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderFAQs(tab.innerText, document.querySelector('#faq-search').value);
    });
  });
}

const setupSearch = () => {
  const search = document.querySelector('#faq-search');
  search.addEventListener('input', (e) => {
    const activeTab = document.querySelector('.faq-tab.active').innerText;
    renderFAQs(activeTab, e.target.value);
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

  document.querySelectorAll('a, button, .faq-tab, .accordion-header, input').forEach(el => {
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
