import { state } from '../state.js';

export const Navbar = () => {
  const cart = state.getCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return `
    <nav class="navbar">
      <div class="container flex-between">
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/store.html">Shop</a></li>
          <li><a href="/store.html">Sale</a></li>
          <li><a href="/about.html">About Us</a></li>
        </ul>
        
        <a href="/" class="logo">
          <h2>REFLECT</h2>
        </a>

        <div class="nav-actions flex">
          <a href="/search.html"><i data-lucide="search"></i></a>
          <a href="/auth.html"><i data-lucide="user"></i></a>
          <a href="/cart.html" class="cart-link">
            <i data-lucide="shopping-cart"></i>
            ${cartCount > 0 ? `<span class="cart-badge">${cartCount}</span>` : ''}
          </a>
        </div>
      </div>
    </nav>
  `;
}

export const initNavbar = () => {
  if (window.lucide) window.lucide.createIcons();
}
