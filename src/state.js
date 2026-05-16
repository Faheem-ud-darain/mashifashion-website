const STATE_KEYS = {
  CART: 'mashi_cart',
  WISHLIST: 'mashi_wishlist',
  USER: 'mashi_user'
};

export const state = {
  // Cart
  getCart: () => JSON.parse(localStorage.getItem(STATE_KEYS.CART) || '[]'),
  addToCart: (product) => {
    const cart = state.getCart();
    const existing = cart.find(item => item.id === product.id && item.size === product.size);
    if (existing) {
      existing.quantity += (product.quantity || 1);
    } else {
      cart.push({ ...product, quantity: product.quantity || 1 });
    }
    localStorage.setItem(STATE_KEYS.CART, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('stateChange', { detail: { key: 'cart', value: cart } }));
  },
  removeFromCart: (id, size) => {
    const cart = state.getCart().filter(item => !(item.id === id && item.size === size));
    localStorage.setItem(STATE_KEYS.CART, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('stateChange', { detail: { key: 'cart', value: cart } }));
  },

  // Wishlist
  getWishlist: () => JSON.parse(localStorage.getItem(STATE_KEYS.WISHLIST) || '[]'),
  toggleWishlist: (product) => {
    let wishlist = state.getWishlist();
    const exists = wishlist.find(item => item.id === product.id);
    if (exists) {
      wishlist = wishlist.filter(item => item.id !== product.id);
    } else {
      wishlist.push(product);
    }
    localStorage.setItem(STATE_KEYS.WISHLIST, JSON.stringify(wishlist));
    window.dispatchEvent(new CustomEvent('stateChange', { detail: { key: 'wishlist', value: wishlist } }));
  },

  // User
  getUser: () => JSON.parse(localStorage.getItem(STATE_KEYS.USER) || 'null'),
  setUser: (user) => {
    localStorage.setItem(STATE_KEYS.USER, JSON.stringify(user));
    window.dispatchEvent(new CustomEvent('stateChange', { detail: { key: 'user', value: user } }));
  },
  logout: () => {
    localStorage.removeItem(STATE_KEYS.USER);
    window.dispatchEvent(new CustomEvent('stateChange', { detail: { key: 'user', value: null } }));
  }
};
