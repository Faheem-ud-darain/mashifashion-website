export const Orders = () => {
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
                      <li class="dash-nav-item active" style="border-radius: 12px; cursor: pointer; background: #f0f0f0;">
                        <a href="/orders" style="padding: 1rem; display: flex; align-items: center; gap: 12px; font-weight: 600; font-size: 0.9rem; color: #000; text-decoration: none; width: 100%;">
                          <i data-lucide="shopping-bag" style="width: 18px;"></i> Orders
                        </a>
                      </li>
                      <li class="dash-nav-item" style="border-radius: 12px; cursor: pointer;">
                        <a href="/wishlist" style="padding: 1rem; display: flex; align-items: center; gap: 12px; font-size: 0.9rem; color: #666; text-decoration: none; width: 100%;">
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
                  <h1 style="font-size: 2.5rem; letter-spacing: -1px; font-weight: 800;">Order History</h1>
                  <p style="color: #999; font-size: 0.9rem; margin-top: 0.5rem;">Manage and track your studio purchases.</p>
              </header>

              <div id="orders-list-container" style="display: flex; flex-direction: column; gap: 1.5rem;">
                  <div style="background: #fff; padding: 2rem; border-radius: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.02); display: flex; align-items: center; justify-content: space-between;">
                    <div class="flex" style="gap: 1.5rem;">
                      <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=100" style="width: 80px; height: 80px; border-radius: 12px; object-fit: cover;" />
                      <div>
                        <h4 style="font-weight: 700;">Mini BLVCK Grey Hoodie</h4>
                        <p style="font-size: 0.8rem; color: #999; margin-top: 4px;">Order #MS-4521 • Delivered on May 12, 2026</p>
                      </div>
                    </div>
                    <div style="text-align: right;">
                      <span style="display: block; font-weight: 800; font-size: 1.1rem; margin-bottom: 8px;">$180.00</span>
                      <button class="btn btn-outline" style="font-size: 0.7rem; padding: 0.5rem 1rem;">Track Order</button>
                    </div>
                  </div>

                  <div style="background: #fff; padding: 2rem; border-radius: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.02); display: flex; align-items: center; justify-content: space-between;">
                    <div class="flex" style="gap: 1.5rem;">
                      <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=100" style="width: 80px; height: 80px; border-radius: 12px; object-fit: cover;" />
                      <div>
                        <h4 style="font-weight: 700;">Essential Summer Tee</h4>
                        <p style="font-size: 0.8rem; color: #999; margin-top: 4px;">Order #MS-3210 • Processing</p>
                      </div>
                    </div>
                    <div style="text-align: right;">
                      <span style="display: block; font-weight: 800; font-size: 1.1rem; margin-bottom: 8px;">$45.00</span>
                      <button class="btn btn-outline" style="font-size: 0.7rem; padding: 0.5rem 1rem;">View Details</button>
                    </div>
                  </div>
              </div>
          </main>
      </div>
    </div>
  `;
}

export const initOrders = () => {
  if (window.lucide) window.lucide.createIcons();
}
