export const Profile = () => {
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
                      <li class="dash-nav-item active" style="border-radius: 12px; cursor: pointer; background: #f0f0f0;">
                        <a href="/profile" style="padding: 1rem; display: flex; align-items: center; gap: 12px; font-weight: 600; font-size: 0.9rem; color: #000; text-decoration: none; width: 100%;">
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
          <main style="flex: 1; padding: 0;">
              <!-- Profile Settings Header -->
              <div style="padding: 3rem 4rem 1rem;">
                  <h1 style="font-size: 2.2rem; letter-spacing: -1px; margin-bottom: 2rem; font-weight: 800;">Settings</h1>
                  
                  <!-- Secondary Nav -->
                  <div class="flex" style="gap: 2rem; border-bottom: 1px solid #eee; margin-bottom: 3rem; padding-bottom: 1rem;">
                      <span style="font-weight: 700; font-size: 0.9rem; color: #000; cursor: pointer; border-bottom: 2px solid #000; padding-bottom: 1rem;">My details</span>
                      <span style="font-weight: 500; font-size: 0.9rem; color: #999; cursor: pointer; padding-bottom: 1rem;">Profile</span>
                      <span style="font-weight: 500; font-size: 0.9rem; color: #999; cursor: pointer; padding-bottom: 1rem;">Password</span>
                      <span style="font-weight: 500; font-size: 0.9rem; color: #999; cursor: pointer; padding-bottom: 1rem;">Billing</span>
                  </div>
              </div>

              <div style="padding: 0 4rem 4rem;">
                  <!-- Profile Section Card -->
                  <div style="background: #fff; border-radius: 24px; overflow: hidden; border: 1px solid #eee;">
                      <!-- Banner -->
                      <div style="height: 200px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); position: relative;">
                          <div style="position: absolute; right: 2rem; bottom: -1.5rem; display: flex; gap: 1rem;">
                              <button class="btn btn-outline" style="background: #fff; padding: 0.8rem 2rem; font-size: 0.75rem; border: 1px solid #eee; border-radius: 10px;">Cancel</button>
                              <button class="btn btn-dark" style="padding: 0.8rem 2.5rem; font-size: 0.75rem; border-radius: 10px; border: none;">Save changes</button>
                          </div>
                      </div>

                      <!-- Profile Info Area -->
                      <div style="padding: 0 3rem 4rem; position: relative; margin-top: -60px;">
                          <div class="flex" style="align-items: flex-end; gap: 2rem; margin-bottom: 4rem;">
                              <div style="width: 160px; height: 160px; border-radius: 50%; border: 6px solid #fff; overflow: hidden; background: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400" style="width: 100%; height: 100%; object-fit: cover;" />
                              </div>
                              <div style="padding-bottom: 1rem;">
                                  <h2 style="font-size: 1.8rem; font-weight: 800;">Profile</h2>
                                  <p style="color: #666; font-size: 0.9rem;">Update your photo and personal details here.</p>
                              </div>
                          </div>

                          <!-- Form Grid -->
                          <div style="display: flex; flex-direction: column; gap: 2.5rem; max-width: 800px;">
                              <!-- Username -->
                              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f5f5f5; padding-bottom: 1.5rem;">
                                  <label style="font-weight: 700; font-size: 0.9rem; width: 200px;">Username</label>
                                  <div style="flex: 1; display: flex; align-items: center; background: #f9f9f9; border: 1px solid #eee; border-radius: 10px; padding: 0 1rem;">
                                      <span style="color: #999; font-size: 0.85rem;">mashistudio.com/</span>
                                      <input type="text" value="nikky_style" style="background: transparent; border: none; outline: none; padding: 0.8rem 0; flex: 1; font-family: inherit;" />
                                  </div>
                              </div>

                              <!-- Bio -->
                              <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px solid #f5f5f5; padding-bottom: 1.5rem;">
                                  <div style="width: 200px;">
                                      <label style="font-weight: 700; font-size: 0.9rem;">Bio</label>
                                      <p style="font-size: 0.75rem; color: #999; margin-top: 0.2rem;">Short introduction.</p>
                                  </div>
                                  <textarea style="flex: 1; min-height: 120px; padding: 1rem; border: 1px solid #eee; border-radius: 12px; font-family: inherit; resize: vertical; outline: none;" placeholder="Tell us about your style..."></textarea>
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

export const initProfile = () => {
  if (window.lucide) window.lucide.createIcons();
}
