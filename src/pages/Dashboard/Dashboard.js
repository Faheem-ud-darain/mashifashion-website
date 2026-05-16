import { state } from '../../state.js';

export const Dashboard = () => {
  return `
    <div class="dashboard-page" style="background: #F8F8F8; min-height: 100vh;">
      <div id="dashboard-layout" style="display: flex; min-height: 100vh;">
          <!-- Sidebar -->
          <aside id="dash-sidebar" style="width: 280px; background: #fff; padding: 2rem; display: flex; flex-direction: column; border-right: 1px solid var(--border-light); position: sticky; top: 0; height: 100vh;">
              <div class="logo" style="margin-bottom: 4rem;">
                  <h2 style="font-size: 1.8rem; letter-spacing: -1px; font-weight: 900;">MASHI</h2>
              </div>

              <nav style="flex: 1;">
                  <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; padding: 0;">
                      <li class="dash-nav-item active" style="border-radius: 12px; cursor: pointer; background: #f0f0f0;">
                        <a href="/dashboard" style="padding: 1rem; display: flex; align-items: center; gap: 12px; font-weight: 600; font-size: 0.9rem; color: #000; text-decoration: none; width: 100%;">
                          <i data-lucide="layout-dashboard" style="width: 18px;"></i> Dashboard
                        </a>
                      </li>
                      <li class="dash-nav-item" style="border-radius: 12px; cursor: pointer;">
                        <a href="/orders" style="padding: 1rem; display: flex; align-items: center; gap: 12px; font-size: 0.9rem; color: #666; text-decoration: none; width: 100%;">
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
              <!-- Header -->
              <header class="flex-between" style="margin-bottom: 4rem;">
                  <div>
                      <h1 style="font-size: 2.5rem; letter-spacing: -1px; font-weight: 800;">Hello, Nikky</h1>
                      <p style="color: #999; font-size: 0.9rem; margin-top: 0.5rem;">Welcome back to Mashi Studio!</p>
                  </div>
                  <div class="flex" style="gap: 2rem;">
                      <div style="position: relative;">
                          <input type="text" placeholder="Search orders..." style="padding: 0.8rem 1.5rem 0.8rem 3rem; border-radius: 50px; border: none; background: #fff; width: 300px; font-family: inherit; outline: none; box-shadow: 0 4px 10px rgba(0,0,0,0.02);" />
                          <i data-lucide="search" style="position: absolute; left: 1.2rem; top: 50%; transform: translateY(-50%); width: 16px; color: #999;"></i>
                      </div>
                      <div class="flex" style="gap: 1rem;">
                          <div style="width: 45px; height: 45px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; position: relative; box-shadow: 0 4px 10px rgba(0,0,0,0.02);">
                              <i data-lucide="bell" style="width: 20px;"></i>
                              <div style="position: absolute; top: 12px; right: 12px; width: 8px; height: 8px; background: #FFB800; border-radius: 50%; border: 2px solid #fff;"></div>
                          </div>
                          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100" style="width: 45px; height: 45px; border-radius: 50%; object-fit: cover;" />
                      </div>
                  </div>
              </header>

              <!-- Dashboard Grid -->
              <div class="dash-grid" style="display: grid; grid-template-columns: 2fr 1.2fr; gap: 2.5rem;">
                  <div class="dash-col">
                      <!-- Banner -->
                      <div class="glass" style="background: #fff; padding: 2.5rem; border-radius: 30px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 2.5rem; overflow: hidden; position: relative; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
                          <div style="position: relative; z-index: 2;">
                              <h2 style="font-size: 2rem; margin-bottom: 1rem; font-weight: 800;">Join the Mashi <br/> Affiliate Program</h2>
                              <button class="btn btn-dark" style="border-radius: 50px; padding: 0.8rem 2rem; font-size: 0.7rem; cursor: pointer; border: none; background: #000; color: #fff;">Learn More</button>
                          </div>
                          <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400" style="width: 200px; height: 200px; object-fit: cover; border-radius: 50%; filter: grayscale(1);" />
                      </div>

                      <!-- Activities/Orders -->
                      <div style="background: #fff; padding: 2.5rem; border-radius: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
                          <div class="flex-between" style="margin-bottom: 2.5rem;">
                              <h3 style="font-size: 1.2rem; font-weight: 700;">Recent Activities</h3>
                              <a href="#" style="font-size: 0.8rem; color: #999; font-weight: 700; text-decoration: none;">View All</a>
                          </div>
                          <div id="recent-activities-list">
                              <div class="activity-item" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid #f5f5f5;">
                                  <div class="flex" style="gap: 1rem;">
                                      <div style="width: 40px; height: 40px; background: #f0f0f0; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                                          <i data-lucide="package" style="width: 20px;"></i>
                                      </div>
                                      <div>
                                          <h4 style="font-size: 0.9rem; font-weight: 700;">Order Delivered</h4>
                                          <p style="font-size: 0.75rem; color: #999;">#MS-4521 - 2 hours ago</p>
                                      </div>
                                  </div>
                                  <span style="font-weight: 700; font-size: 0.9rem;">$180.00</span>
                              </div>
                              <div class="activity-item" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid #f5f5f5;">
                                  <div class="flex" style="gap: 1rem;">
                                      <div style="width: 40px; height: 40px; background: #f0f0f0; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                                          <i data-lucide="heart" style="width: 20px;"></i>
                                      </div>
                                      <div>
                                          <h4 style="font-size: 0.9rem; font-weight: 700;">Added to Wishlist</h4>
                                          <p style="font-size: 0.75rem; color: #999;">Cargo Tech Pants - 1 day ago</p>
                                      </div>
                                  </div>
                                  <span style="color: #999; font-size: 0.9rem;">Ref: 8892</span>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="dash-col">
                      <!-- Points/Balance -->
                      <div style="background: #000; padding: 2.5rem; border-radius: 30px; color: #fff; margin-bottom: 2.5rem; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
                          <span style="font-size: 0.75rem; color: #999; text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">Studio Credits</span>
                          <h2 style="font-size: 3rem; color: #fff; margin: 1.5rem 0; font-weight: 800;">$ 8,678.87</h2>
                          <div class="flex-between" style="font-size: 0.8rem; color: #999;">
                              <span>**** **** **** 5624</span>
                              <span>08/22</span>
                          </div>
                      </div>

                      <!-- Statistics/Circular Progress -->
                      <div style="background: #fff; padding: 2.5rem; border-radius: 30px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
                          <h3 style="font-size: 1.2rem; margin-bottom: 2.5rem; text-align: left; font-weight: 700;">Style Profile</h3>
                          <div style="position: relative; width: 180px; height: 180px; margin: 0 auto 3rem;">
                              <svg viewBox="0 0 36 36" style="transform: rotate(-90deg);">
                                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" stroke-width="3" />
                                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#000" stroke-width="3" stroke-dasharray="85, 100" />
                              </svg>
                              <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                                  <h4 style="font-size: 2.5rem; font-weight: 800; margin: 0;">85%</h4>
                                  <p style="font-size: 0.6rem; color: #999; margin: 0; font-weight: 700; letter-spacing: 1px;">STREETWEAR</p>
                              </div>
                          </div>
                          <div style="display: flex; flex-direction: column; gap: 1rem; text-align: left;">
                              <div class="flex-between" style="font-size: 0.85rem;">
                                  <span style="color: #666; display: flex; align-items: center;"><i data-lucide="circle" style="width: 10px; fill: #000; margin-right: 8px;"></i> Streetwear</span>
                                  <span style="font-weight: 700;">$ 847.00</span>
                              </div>
                              <div class="flex-between" style="font-size: 0.85rem;">
                                  <span style="color: #666; display: flex; align-items: center;"><i data-lucide="circle" style="width: 10px; fill: #eee; margin-right: 8px;"></i> Formal</span>
                                  <span style="font-weight: 700;">$ 586.50</span>
                              </div>
                              <div class="flex-between" style="font-size: 0.85rem;">
                                  <span style="color: #666; display: flex; align-items: center;"><i data-lucide="circle" style="width: 10px; fill: #FFB800; margin-right: 8px;"></i> Accessories</span>
                                  <span style="font-weight: 700;">$ 685.50</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
      </div>
    </div>
  `;
}

export const initDashboard = () => {
  if (window.lucide) window.lucide.createIcons();
}
