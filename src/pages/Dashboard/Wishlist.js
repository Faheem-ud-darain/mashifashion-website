export const Wishlist = () => {
  return `
    <div class="dashboard-page" style="background: #F8F8F8; min-height: 100vh;">
      <div id="dashboard-layout" style="display: flex; min-height: 100vh;">
          <!-- Sidebar -->
          <aside id="dash-sidebar" style="width: 280px; background: #fff; padding: 2rem; display: flex; flex-direction: column; border-right: 1px solid #eee; position: sticky; top: 0; height: 100vh;">
              <div class="logo" style="margin-bottom: 4rem;">
                  <h2 style="font-size: 1.8rem; letter-spacing: -1px; font-weight: 900; cursor: pointer;" onclick="window.navigateTo('/')">MASHI</h2>
              </div>

              <nav style="flex: 1;">
                  <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; padding: 0;">
                      <li class="dash-nav-item" style="border-radius: 12px; cursor: pointer;">
                        <a href="/dashboard" style="padding: 1rem; display: flex; align-items: center; gap: 12px; font-size: 0.9rem; color: #666; text-decoration: none; width: 100%;">
                          <i data-lucide="layout-dashboard" style="width: 18px;"></i> Dashboard
                        </a>
                      </li>
                      <li class="dash-nav-item" style="border-radius: 12px; cursor: pointer;">
                        <a href="/orders" style="padding: 1rem; display: flex; align-items: center; gap: 12px; font-size: 0.9rem; color: #666; text-decoration: none; width: 100%;">
                          <i data-lucide="shopping-bag" style="width: 18px;"></i> Orders
                        </a>
                      </li>
                      <li class="dash-nav-item active" style="border-radius: 12px; cursor: pointer; background: #f0f0f0;">
                        <a href="/wishlist" style="padding: 1rem; display: flex; align-items: center; gap: 12px; font-weight: 600; font-size: 0.9rem; color: #000; text-decoration: none; width: 100%;">
                          <i data-lucide="heart" style="width: 18px;"></i> Wishlist
                        </a>
                      </li>
                      <li class="dash-nav-item" style="border-radius: 12px; cursor: pointer;">
                        <a href="/points" style="padding: 1rem; display: flex; align-items: center; gap: 12px; font-size: 0.9rem; color: #666; text-decoration: none; width: 100%;">
                          <i data-lucide="credit-card" style="width: 18px;"></i> Mashi Points
                        </a>
                      </li>
                      <li class="dash-nav-item" style="border-radius: 12px; cursor: pointer;">
                        <a href="/profile" style="padding: 1rem; display: flex; align-items: center; gap: 12px; font-size: 0.9rem; color: #666; text-decoration: none; width: 100%;">
                          <i data-lucide="user" style="width: 18px;"></i> Profile
                        </a>
                      </li>
                      <li class="dash-nav-item" style="border-radius: 12px; cursor: pointer;">
                        <a href="/profile" style="padding: 1rem; display: flex; align-items: center; gap: 12px; font-size: 0.9rem; color: #666; text-decoration: none; width: 100%;">
                          <i data-lucide="settings" style="width: 18px;"></i> Settings
                        </a>
                      </li>
                  </ul>
              </nav>

              <div class="glass" style="background: #000; color: #fff; padding: 1.5rem; border-radius: 20px; margin-top: auto;">
                  <p style="font-size: 0.75rem; color: #999; margin-bottom: 1rem;">Unlock exclusive studio perks.</p>
                  <button class="btn btn-dark" style="background: #fff; color: #000; width: 100%; padding: 0.8rem; border: none; font-size: 0.7rem; border-radius: 10px; cursor: pointer; font-weight: 700;">Go Premium</button>
              </div>
          </aside>

          <!-- Main Content -->
          <main style="flex: 1; padding: 3rem;">
              <header style="margin-bottom: 4rem;">
                  <h1 style="font-size: 2.5rem; letter-spacing: -1px; font-weight: 800;">My Wishlist</h1>
                  <p style="color: #999; font-size: 0.9rem; margin-top: 0.5rem;">Pieces you've drafted for later.</p>
              </header>

              <div id="wishlist-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem;">
                  <div class="product-card-v2">
                    <div class="pc-image">
                      <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600" style="width: 100%; height: 350px; object-fit: cover; border-radius: 20px;" />
                      <div class="pc-overlay">
                        <button class="pc-add">Add to Cart</button>
                        <button class="pc-buy">Remove</button>
                      </div>
                    </div>
                    <div class="pc-info" style="padding: 1rem 0;">
                      <h4 style="font-weight: 800;">Hip Hop Street Wear Hoodie</h4>
                      <span class="pc-price">$120.00</span>
                    </div>
                  </div>

                  <div class="product-card-v2">
                    <div class="pc-image">
                      <img src="https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=600" style="width: 100%; height: 350px; object-fit: cover; border-radius: 20px;" />
                      <div class="pc-overlay">
                        <button class="pc-add">Add to Cart</button>
                        <button class="pc-buy">Remove</button>
                      </div>
                    </div>
                    <div class="pc-info" style="padding: 1rem 0;">
                      <h4 style="font-weight: 800;">LHR London England Hoodie</h4>
                      <span class="pc-price">$250.00</span>
                    </div>
                  </div>
              </div>
          </main>
      </div>
    </div>
  `;
}

export const initWishlist = () => {
  if (window.lucide) window.lucide.createIcons();
}
