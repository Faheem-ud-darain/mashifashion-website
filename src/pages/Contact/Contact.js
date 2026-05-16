export const Contact = () => {
  return `
    <div class="contact-page section-padding" style="background: #fff;">
        <div class="container">
            <header style="margin-bottom: 6rem;">
                <p style="font-size: 0.8rem; font-weight: 700; color: #999; letter-spacing: 3px; margin-bottom: 1.5rem;">GET IN TOUCH</p>
                <div class="flex-between" style="align-items: flex-end;">
                    <h1 style="font-size: clamp(3rem, 6vw, 6rem); letter-spacing: -2px; margin: 0; font-weight: 900;">Contact Us</h1>
                    <p style="font-size: 1.1rem; color: #666; max-width: 300px; text-align: right;">Tell us about your style goals and we'll confirm a consultation within 24 hours.</p>
                </div>
            </header>

            <div class="contact-layout-grid" style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 4rem; align-items: start; margin-bottom: 8rem;">
                <!-- Contact Form -->
                <div style="background: #F8F8F8; padding: 4rem; border-radius: 40px;">
                    <form id="contact-form" style="display: flex; flex-direction: column; gap: 2.5rem;">
                        <div class="flex" style="gap: 2rem;">
                            <div style="flex: 1;">
                                <label style="font-size: 0.8rem; font-weight: 700; margin-bottom: 0.8rem; display: block;">Name</label>
                                <input type="text" placeholder="Your full name" style="width: 100%; padding: 1.2rem; border: 1px solid #eee; border-radius: 12px; outline: none; background: #fff;" />
                            </div>
                            <div style="flex: 1;">
                                <label style="font-size: 0.8rem; font-weight: 700; margin-bottom: 0.8rem; display: block;">Email</label>
                                <input type="email" placeholder="you@example.com" style="width: 100%; padding: 1.2rem; border: 1px solid #eee; border-radius: 12px; outline: none; background: #fff;" />
                            </div>
                        </div>

                        <div class="flex" style="gap: 2rem;">
                            <div style="flex: 1;">
                                <label style="font-size: 0.8rem; font-weight: 700; margin-bottom: 0.8rem; display: block;">Phone Number</label>
                                <input type="text" placeholder="+880 123 4567" style="width: 100%; padding: 1.2rem; border: 1px solid #eee; border-radius: 12px; outline: none; background: #fff;" />
                            </div>
                            <div style="flex: 1;">
                                <label style="font-size: 0.8rem; font-weight: 700; margin-bottom: 0.8rem; display: block;">Select Interest</label>
                                <select style="width: 100%; padding: 1.2rem; border: 1px solid #eee; border-radius: 12px; outline: none; background: #fff;">
                                    <option>Custom Tailoring</option>
                                    <option>Studio Visit</option>
                                    <option>Press Inquiry</option>
                                    <option>Partnership</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label style="font-size: 0.8rem; font-weight: 700; margin-bottom: 0.8rem; display: block;">Message / Style Notes</label>
                            <textarea placeholder="Anything else we should know?" style="width: 100%; min-height: 150px; padding: 1.2rem; border: 1px solid #eee; border-radius: 12px; outline: none; resize: vertical; font-family: inherit; background: #fff;"></textarea>
                        </div>

                        <button class="btn btn-dark" style="align-self: flex-start; border-radius: 50px; padding: 1.2rem 3rem; display: flex; align-items: center; gap: 1rem; border: none; font-weight: 800; cursor: pointer;">
                            Send Message <i data-lucide="arrow-up-right"></i>
                        </button>
                    </form>
                </div>

                <!-- Visual Sidebar -->
                <div style="height: 100%; position: relative;">
                    <div style="width: 100%; height: 750px; border-radius: 40px; overflow: hidden; position: sticky; top: 120px;">
                        <img src="https://images.unsplash.com/photo-1445205170230-053b830c6050?q=80&w=800" style="width: 100%; height: 100%; object-fit: cover;" />
                        <div style="position: absolute; top: 2rem; right: 2rem; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); padding: 0.8rem 2rem; border-radius: 50px; color: #fff; font-size: 0.75rem; border: 1px solid rgba(255,255,255,0.3);">Our Studio</div>
                    </div>
                </div>
            </div>

            <!-- Info Cards -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4rem; text-align: center; border-top: 1px solid #eee; padding-top: 6rem;">
                <div>
                    <div style="margin-bottom: 2rem; color: #000;"><i data-lucide="phone" style="width: 32px; height: 32px;"></i></div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem; font-weight: 800;">Call & WhatsApp</h3>
                    <p style="color: #666; font-size: 0.9rem;">+880 123 456 7890</p>
                    <p style="color: #666; font-size: 0.9rem;">+880 987 654 3210</p>
                </div>
                <div>
                    <div style="margin-bottom: 2rem; color: #000;"><i data-lucide="clock" style="width: 32px; height: 32px;"></i></div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem; font-weight: 800;">Studio Hours</h3>
                    <p style="color: #666; font-size: 0.9rem;">Daily: 10am - 8pm</p>
                    <p style="color: #666; font-size: 0.9rem;">Friday: Closed</p>
                </div>
                <div>
                    <div style="margin-bottom: 2rem; color: #000;"><i data-lucide="mail" style="width: 32px; height: 32px;"></i></div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem; font-weight: 800;">Write to Us</h3>
                    <p style="color: #666; font-size: 0.9rem;">studio@mashifashion.com</p>
                    <p style="color: #666; font-size: 0.9rem;">press@mashifashion.com</p>
                </div>
            </div>
        </div>
    </div>
  `;
}

export const initContact = () => {
  if (window.lucide) window.lucide.createIcons();
}
