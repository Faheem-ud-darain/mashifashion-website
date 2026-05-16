import './style.css'

const init = () => {
  renderWishlist();
  setupCursor();
  initLucide();
}

const wishlistItems = [
  { id: 1, name: 'Mishi Black Gray Hoodie', price: 120, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=400', stock: 'In Stock' },
  { id: 2, name: 'Studio Classic Watch', price: 299, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400', stock: 'Limited Stock' },
  { id: 3, name: 'Reflect High Tops', price: 220, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400', stock: 'In Stock' }
];

const renderWishlist = () => {
  const grid = document.querySelector('#wishlist-grid');
  if (!grid) return;

  if (wishlistItems.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 100px 0;">
        <i data-lucide="heart" style="width: 80px; height: 80px; color: #eee; margin-bottom: 2rem;"></i>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Your wishlist is empty</h2>
        <p style="color: #999; margin-bottom: 2rem;">Start exploring our collections and save your favorites.</p>
        <button class="btn btn-dark" onclick="window.location.href='/store.html'" style="border-radius: 50px; padding: 1rem 3rem;">Start Shopping</button>
      </div>
    `;
    initLucide();
    return;
  }

  grid.innerHTML = wishlistItems.map(item => `
    <div class="wishlist-card">
      <div class="img-box">
        <img src="${item.img}" alt="${item.name}">
        <div class="remove-btn" onclick="removeWishlistItem(${item.id})">
          <i data-lucide="trash-2" style="width: 18px;"></i>
        </div>
      </div>
      <div class="info">
        <span class="stock-status" style="color: ${item.stock === 'Limited Stock' ? '#ff9800' : '#1ea35b'}">${item.stock.toUpperCase()}</span>
        <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">${item.name}</h3>
        <p style="font-weight: 700; margin-bottom: 1.5rem;">$${item.price}.00</p>
        <button class="btn btn-dark" style="width: 100%; border-radius: 12px; font-size: 0.75rem; padding: 1rem;">Add to Cart</button>
      </div>
    </div>
  `).join('');
  
  initLucide();
}

window.removeWishlistItem = (id) => {
  const index = wishlistItems.findIndex(i => i.id === id);
  if (index > -1) {
    wishlistItems.splice(index, 1);
    renderWishlist();
  }
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

  document.querySelectorAll('a, button, .dash-nav-item, .remove-btn').forEach(el => {
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
