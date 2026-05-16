import './Home.css';

export const Home = () => {
  return `
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container hero-container">
          <div class="hero-content">
            <h1 class="hero-main-title">MASHI<br/>FASHION</h1>
            <p class="hero-description">Discover a fashion experience that not only mirrors your unique personality, but elevates it. Every piece is crafted to elevate your confidence, celebrate your individuality, and empower you to stand out effortlessly in any setting.</p>
            <div class="hero-btns">
              <button class="btn btn-dark" onclick="window.navigateTo('/store')">Buy Product</button>
              <button class="btn btn-outline" onclick="window.navigateTo('/about')">Explore Product</button>
            </div>
          </div>
          <div class="hero-image-v2">
            <div class="image-mask">
              <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200" alt="Mashi Fashion" />
            </div>
          </div>
        </div>
      </section>

      <!-- Marquee Ticker -->
      <div class="marquee-ticker">
        <div class="marquee-content">
          <span>FASHION <i data-lucide="sparkle"></i> MASHI FASHION <i data-lucide="sparkle"></i> MASHI FASHION <i data-lucide="sparkle"></i> MASHI FASHION <i data-lucide="sparkle"></i></span>
          <span>FASHION <i data-lucide="sparkle"></i> MASHI FASHION <i data-lucide="sparkle"></i> MASHI FASHION <i data-lucide="sparkle"></i> MASHI FASHION <i data-lucide="sparkle"></i></span>
        </div>
      </div>

      <!-- Categories Section -->
      <section class="categories-v2 section-padding">
        <div class="container">
          <div class="cat-grid-v2">
            <div class="cat-card large-cat">
              <img src="https://images.unsplash.com/photo-1539109132382-381bb3f1cffb?q=80&w=800" alt="Women Collection" />
              <div class="cat-info">
                <button class="btn-cat" onclick="window.navigateTo('/store')">Explore Now</button>
              </div>
            </div>
            <div class="cat-card large-cat">
              <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800" alt="Men Collection" />
              <div class="cat-info">
                <button class="btn-cat" onclick="window.navigateTo('/store')">Explore Now</button>
              </div>
            </div>
            <div class="cat-stacked">
              <div class="cat-card-small">
                <div class="cat-small-text">
                  <p class="tag">Winter Collection</p>
                  <h3>Stylish Winter T-Shirt for Woman</h3>
                  <button class="btn-text" onclick="window.navigateTo('/store')">Check Now</button>
                </div>
                <div class="cat-small-img">
                  <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400" alt="Winter Woman" />
                </div>
              </div>
              <div class="cat-card-small">
                <div class="cat-small-text">
                  <p class="tag">Men Collection</p>
                  <h3>Stylish Winter Shirt for Man</h3>
                  <button class="btn-text" onclick="window.navigateTo('/store')">Check Now</button>
                </div>
                <div class="cat-small-img">
                  <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=400" alt="Winter Man" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Collections Section -->
      <section class="our-collection section-padding">
        <div class="container">
          <div class="flex-between" style="margin-bottom: 4rem;">
            <h2 class="section-title-v2">OUR COLLECTION</h2>
            <p class="section-desc-v2">Step into the world of Mashi, where each collection tells its own story. From minimalist essentials to bold statement pieces, our curated collections are designed to celebrate your unique style.</p>
          </div>
          
          <div class="collection-tabs">
            <button class="tab-btn active">Hoodie</button>
            <button class="tab-btn">Caps & Bags</button>
            <button class="tab-btn">Trending</button>
            <button class="tab-btn">Out Wear</button>
            <button class="tab-btn">Accessories</button>
          </div>

          <div class="product-grid-v2" id="home-product-grid">
            <!-- Dynamic Injection -->
          </div>
        </div>
      </section>

      <!-- Bottom Branding Section -->
      <section class="bottom-branding">
        <div class="container">
          <div class="branding-header">
            <h2 class="branding-title">CLOTH AND FOOTWEAR<br/>COLLECTION</h2>
            <p class="branding-subtitle">At Mashi, we offer more than just clothing and footwear — we provide a canvas for your individuality. Our thoughtfully designed apparel and footwear collections blend style and comfort, allowing you to make a statement with every step.</p>
          </div>
        </div>
        <div class="clothing-collection-banner">
          <div class="container flex-between">
            <div class="banner-image">
              <img src="https://images.unsplash.com/photo-1529139572311-073b3558c9f4?q=80&w=600" alt="Clothing Collection" />
            </div>
            <div class="banner-text">
              <h2>CLOTHING COLLECTION</h2>
              <p>Our clothing collection at Mashi is a celebration of style, versatility, and craftsmanship. Each piece is meticulously designed to complement a range of occasions, from everyday essentials to bold, eye-catching looks.</p>
            </div>
          </div>
        </div>
      </section>
      <!-- Lookbook Series -->
      <section class="lookbook-series section-padding">
        <div class="container">
          <div class="lookbook-grid">
            <div class="lookbook-item" onclick="window.navigateTo('/store')">
              <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800" alt="Lookbook 01" />
              <div class="lookbook-overlay">
                <p>VOL. 01</p>
                <h3>Mashi / Shadows</h3>
              </div>
            </div>
            <div class="lookbook-item" onclick="window.navigateTo('/store')">
              <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800" alt="Lookbook 02" />
              <div class="lookbook-overlay">
                <p>VOL. 02</p>
                <h3>Draft / Light</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Social Grid -->
      <section class="social-grid-section section-padding">
        <div class="container">
          <div class="section-header-v2" style="text-align: center; margin-bottom: 4rem;">
            <p class="tagline">COMMUNITY SILHOUETTES</p>
            <h2 class="font-outfit" style="font-weight: 900;">Follow Us @MASHI_STUDIO</h2>
          </div>
          <div class="social-grid">
            <div class="social-item"><img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=400" /></div>
            <div class="social-item"><img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400" /></div>
            <div class="social-item"><img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=400" /></div>
            <div class="social-item"><img src="https://images.unsplash.com/photo-1584273143981-43c26a098817?q=80&w=400" /></div>
            <div class="social-item"><img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=400" /></div>
            <div class="social-item"><img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=400" /></div>
          </div>
        </div>
      </section>

      <!-- Studio Membership -->
      <section class="membership-section section-padding">
        <div class="container">
          <div class="membership-box">
            <div class="membership-text">
              <p class="tagline">JOIN THE STUDIO</p>
              <h2 style="font-weight: 900;">Unlock Exclusive Drops</h2>
              <p>Be the first to receive notifications about limited architectural drafts and studio events.</p>
            </div>
            <form class="membership-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" class="btn btn-dark">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  `;
}

export const initHome = () => {
  const grid = document.getElementById('home-product-grid');
  if (!grid) return;

  const products = [
    { id: 201, name: 'Mini BLVCK Grey Hoodie', price: 180, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600' },
    { id: 202, name: 'LHR London England Hoodie', price: 250, img: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=600' },
    { id: 203, name: 'Astro Rapper Topas Hoodie', price: 150, img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600' },
    { id: 204, name: 'Hip Hop Street Wear Hoodie', price: 120, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600' }
  ];

  grid.innerHTML = products.map(p => `
    <div class="product-card-v2" onclick="window.navigateTo('/product/detail')">
      <div class="pc-image">
        <img src="${p.img}" alt="${p.name}" />
        <div class="pc-overlay">
          <button class="pc-add" onclick="event.stopPropagation(); window.handleAddToCart(${JSON.stringify(p).replace(/"/g, '&quot;')})">Add to Cart</button>
          <button class="pc-buy">Buy Now</button>
        </div>
      </div>
      <div class="pc-info">
        <h4 style="font-weight: 800;">${p.name}</h4>
        <span class="pc-price">$${p.price}</span>
      </div>
    </div>
  `).join('');

  window.handleAddToCart = (product) => {
    import('../../state.js').then(m => {
      m.state.addToCart(product);
      // Update navbar count if needed via event
      window.dispatchEvent(new CustomEvent('stateChange', { detail: { key: 'cart', value: m.state.getCart() } }));
    });
  };

  if (window.lucide) window.lucide.createIcons();
}
