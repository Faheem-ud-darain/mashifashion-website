export const About = () => {
  return `
    <div class="about-page">
      <!-- SECTION 1: HERO -->
      <section style="background: #000; height: 100vh; position: relative; display: flex; overflow: hidden;">
          <div style="position: absolute; right: 0; top: 0; width: 50%; height: 100%; background: #FF0000; z-index: 1;"></div>
          
          <div style="position: absolute; width: 100%; top: 15%; z-index: 2; text-align: center;">
              <h1 style="font-size: 18vw; font-family: 'Outfit', sans-serif; color: rgba(255,255,255,0.4); margin: 0; line-height: 0.8; letter-spacing: -5px; font-weight: 900;">MASHI STUDIO</h1>
          </div>

          <div class="container flex" style="position: relative; z-index: 3; height: 100%; align-items: flex-end; padding-bottom: 5rem;">
              <div style="flex: 1;">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" style="width: 100%; height: 90vh; object-fit: cover; filter: grayscale(100%); margin-left: -10%;" />
              </div>
              <div style="flex: 1; color: #fff; padding-left: 5rem; padding-bottom: 10rem;">
                  <p style="font-size: 1.5rem; font-weight: 700; margin-bottom: 2rem; max-width: 400px; line-height: 1.2;">"We're all victims of our own style choices at times."</p>
                  <p style="font-size: 0.9rem; line-height: 1.6; max-width: 400px; opacity: 0.8;">Mashi Studio was entirely based on the philosophy of architectural minimalism. What began as a drafting experiment evolved into a global signature of streetwear luxury.</p>
                  <a href="#" style="color: #fff; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; text-decoration: none; display: block; margin-top: 2rem;">Learn more —</a>
              </div>
          </div>
      </section>

      <!-- SECTION 2: ABOUT -->
      <section class="section-padding" style="position: relative; background: #fff;">
          <div class="container flex" style="gap: 10rem; align-items: flex-start;">
              <div style="flex: 1; position: relative;">
                  <div style="border-left: 1px solid #FF0000; padding-left: 2rem;">
                      <h2 style="font-size: 0.8rem; letter-spacing: 4px; color: #000; margin-bottom: 3rem; font-weight: 800;">ABOUT MASHI</h2>
                      <div style="font-size: 0.9rem; line-height: 2; color: #444;">
                          <p style="margin-bottom: 2rem;">Mashi is a Dhaka-born fashion label that began its journey in the early 2020s. We gained critical acclaim for our 'Reflect' collection which culminated in our first studio opening.</p>
                          <p>Our other garments have included the comedy-inspired 'Neon' line and the sci-fi 'Cyber' series. Every stitch is a part of the narrative we build for our customers.</p>
                      </div>
                  </div>
              </div>
              <div style="flex: 1; position: relative;">
                  <div style="position: absolute; right: -2rem; top: -2rem; width: 300px; height: 400px; opacity: 0.1; background-image: radial-gradient(#000 1px, transparent 1px); background-size: 20px 20px; z-index: 1;"></div>
                  
                  <div style="position: relative; z-index: 2;">
                      <img src="https://images.unsplash.com/photo-1492281262445-cd4b174a57a4?q=80&w=600" style="width: 80%; height: 600px; object-fit: cover; box-shadow: 20px 20px 0 #F8F8F8;" />
                      <div style="position: absolute; left: -10%; bottom: 15%; z-index: 3;">
                          <h3 style="font-family: 'Outfit', sans-serif; font-size: 6rem; color: #FF0000; opacity: 0.9; transform: rotate(-10deg); font-weight: 900;">Mashi.</h3>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!-- SECTION 4: SHOWCASE -->
      <section style="background: #FF0000; padding: 100px 0; position: relative;">
          <div class="container">
              <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 8rem; align-items: center;">
                  <div style="color: #fff;">
                      <h2 style="font-size: 0.8rem; letter-spacing: 4px; margin-bottom: 4rem; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 1rem; font-weight: 800;">COLLECTIONS</h2>
                      <div style="margin-bottom: 3rem;">
                          <i data-lucide="award" style="margin-bottom: 1rem;"></i>
                          <h4 style="font-size: 1.5rem; margin-bottom: 0.5rem; font-weight: 800;">The Reflect Series</h4>
                          <p style="font-size: 0.8rem; opacity: 0.8;">2026 Best New Brand</p>
                          <p style="font-size: 0.85rem; line-height: 1.6; margin-top: 1rem;">A ruthless collection that will stop at nothing to conquer the city's fashion scene.</p>
                      </div>
                  </div>
                  <div style="position: relative; height: 500px; border-radius: 4px; overflow: hidden; box-shadow: 30px 30px 0 rgba(0,0,0,0.1);">
                      <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200" style="width: 100%; height: 100%; object-fit: cover;" />
                      <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 80px; height: 80px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                          <i data-lucide="play" style="fill: #000; color: #000;"></i>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  `;
}

export const initAbout = () => {
  if (window.lucide) window.lucide.createIcons();
}
