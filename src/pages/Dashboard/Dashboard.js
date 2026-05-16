import { state } from '../state.js';

export const Dashboard = () => {
  return `
    <div class="dashboard-page section-padding">
      <div class="container">
        <div class="dashboard-layout">
          <aside class="dashboard-nav">
            <div class="user-brief">
              <div class="avatar">F</div>
              <div>
                <h3>Faheem Jadoon</h3>
                <p>Studio Member</p>
              </div>
            </div>
            <nav class="db-links">
              <button class="active" data-tab="orders">Order History</button>
              <button data-tab="wishlist">My Wishlist</button>
              <button data-tab="profile">Studio Settings</button>
              <button class="logout-btn">Sign Out</button>
            </nav>
          </aside>

          <main class="dashboard-content" id="dashboard-main">
            <!-- Tabs injected here -->
          </main>
        </div>
      </div>
    </div>
  `;
}

export const initDashboard = () => {
  const main = document.getElementById('dashboard-main');
  const tabs = document.querySelectorAll('.db-links button[data-tab]');
  
  const renderTab = (tab) => {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    
    if (tab === 'orders') {
      main.innerHTML = `
        <h2>Order History</h2>
        <div class="orders-list">
          <div class="order-card">
            <div class="oc-header">
              <span>Order #MS-9942</span>
              <span class="status">Transit</span>
            </div>
            <div class="oc-body">
              <p>Architectural Oversized Hoodie (M)</p>
              <p>Purchased: May 12, 2026</p>
            </div>
            <div class="oc-footer">
              <span>Total: $185.00</span>
              <button class="btn-text">Track Draft</button>
            </div>
          </div>
        </div>
      `;
    } else if (tab === 'wishlist') {
      main.innerHTML = `
        <h2>My Wishlist</h2>
        <div class="wishlist-grid">
          <p class="empty-msg">Your wishlist is currently a blank canvas.</p>
        </div>
      `;
    } else if (tab === 'profile') {
      main.innerHTML = `
        <h2>Studio Settings</h2>
        <form class="profile-form">
          <div class="form-grid">
            <div class="input-group">
              <label>Full Name</label>
              <input type="text" value="Faheem Jadoon" />
            </div>
            <div class="input-group">
              <label>Email</label>
              <input type="email" value="faheem@example.com" />
            </div>
          </div>
          <button class="btn btn-dark">Update Settings</button>
        </form>
      `;
    }
  };

  tabs.forEach(btn => {
    btn.addEventListener('click', () => renderTab(btn.dataset.tab));
  });

  renderTab('orders');
}
