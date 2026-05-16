import './styles/variables.css';
import './styles/global.css';
import { Navbar, initNavbar } from './components/Navbar.js';
import './components/Navbar.css';
import { Footer } from './components/Footer.js';
import './components/Footer.css';
import { Home, initHome } from './pages/Home/Home.js';
import { Store, initStore } from './pages/Store/Store.js';
import { ProductDetail, initProductDetail } from './pages/Product/ProductDetail.js';
import { Cart, initCart } from './pages/Cart/Cart.js';
import { Checkout, initCheckout } from './pages/Checkout/Checkout.js';
import { About } from './pages/About/About.js';
import { Contact } from './pages/Contact/Contact.js';
import { Dashboard, initDashboard } from './pages/Dashboard/Dashboard.js';
import { Orders, initOrders } from './pages/Dashboard/Orders.js';
import { Wishlist, initWishlist } from './pages/Dashboard/Wishlist.js';
import { Profile, initProfile } from './pages/Dashboard/Profile.js';
import { MashiPoints, initMashiPoints } from './pages/Dashboard/MashiPoints.js';
import { StudioPrivacy } from './pages/Legal/StudioPrivacy.js';
import { TermsOfService } from './pages/Legal/TermsOfService.js';
import { ShippingPolicy } from './pages/Legal/ShippingPolicy.js';
import { ReturnsPolicy } from './pages/Legal/ReturnsPolicy.js';
import './pages/Legal/Legal.css';
import './pages/Store/Store.css';
import './pages/Product/ProductDetail.css';
import './pages/Cart/Cart.css';
import './pages/Dashboard/Dashboard.css';
import { OrderConfirmation } from './pages/Checkout/OrderConfirmation.js';
import './pages/Checkout/Checkout.css';
import { state } from './state.js';

const routes = {
  '/': { component: Home, init: initHome },
  '/store': { component: Store, init: initStore },
  '/product': { component: ProductDetail, init: initProductDetail },
  '/cart': { component: Cart, init: initCart },
  '/checkout': { component: Checkout, init: initCheckout },
  '/about': { component: About },
  '/contact': { component: Contact },
  '/auth': { component: Dashboard, init: initDashboard }, // Merged for now
  '/dashboard': { component: Dashboard, init: initDashboard },
  '/orders': { component: Orders, init: initOrders },
  '/wishlist': { component: Wishlist, init: initWishlist },
  '/profile': { component: Profile, init: initProfile },
  '/points': { component: MashiPoints, init: initMashiPoints },
  '/privacy': { component: StudioPrivacy },
  '/terms': { component: TermsOfService },
  '/shipping': { component: ShippingPolicy },
  '/returns': { component: ReturnsPolicy },
  '/success': { component: OrderConfirmation },
};

window.navigateTo = function(path) {
  history.pushState(null, '', path);
  handleRouting();
}

const initApp = () => {
  renderLayout();
  handleRouting();
  setupGlobalEvents();
  setupCursor();
  initLucide();
}

const renderLayout = () => {
  const navContainer = document.getElementById('navbar-container');
  const footerContainer = document.getElementById('footer-container');
  
  if (navContainer) navContainer.innerHTML = Navbar();
  if (footerContainer) footerContainer.innerHTML = Footer();
  
  initNavbar();
}

async function handleRouting() {
  const transition = document.getElementById('page-transition');
  const path = window.location.pathname;
  const route = routes[path] || routes['/'];

  // Fade Out
  if (transition) {
    transition.style.display = 'block';
    transition.classList.add('active');
    await new Promise(r => setTimeout(r, 200));
  }
  
  const pageContent = document.getElementById('page-content');
  if (pageContent) {
    pageContent.innerHTML = route.component();
    if (route.init) route.init();
  }
  
  initLucide();
  window.scrollTo(0, 0);

  // Fade In
  if (transition) {
    setTimeout(() => {
      transition.classList.remove('active');
      setTimeout(() => { transition.style.display = 'none'; }, 400);
    }, 100);
  }
}

const setupGlobalEvents = () => {
  window.addEventListener('popstate', handleRouting);
  
  // Listen for navigation clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('#')) return;

      // Handle both /path and path.html
      let cleanPath = href.replace('.html', '');
      if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
      
      if (routes[cleanPath]) {
        e.preventDefault();
        window.navigateTo(cleanPath);
      }
    }
  });

  // Listen for state changes (Cart/Wishlist)
  window.addEventListener('stateChange', (e) => {
    console.log(`State updated: ${e.detail.key}`, e.detail.value);
    renderLayout(); // Re-render navbar/footer for counter updates
  });
}

const updateGlobalCounters = () => {
  const cart = state.getCart();
  const cartCount = document.querySelector('.nav-actions a[href="/cart"] i');
  // Logic to show count badge if needed
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

  // Re-setup on dynamic content changes
  document.addEventListener('mouseover', (e) => {
    const el = e.target.closest('a, button, i, .product-card');
    if (el) {
      cursor.style.transform = 'scale(4)';
      cursor.style.backgroundColor = 'rgba(0,0,0,0.05)';
      cursor.style.border = '1px solid #000';
    } else {
      cursor.style.transform = 'scale(1)';
      cursor.style.backgroundColor = '#000';
      cursor.style.border = 'none';
    }
  });
}

const initLucide = () => {
  if (window.lucide) window.lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', initApp);
