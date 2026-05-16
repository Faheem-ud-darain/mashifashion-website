export const Contact = () => {
  return `
    <div class="contact-page section-padding">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <p class="tagline">CONNECT</p>
            <h1>Studio Inquiries</h1>
            <p>For architectural consultations, sizing drafts, or order tracking, our studio team is available 24/7.</p>
            <div class="contact-details">
              <p><strong>Email:</strong> studio@mashifashion.com</p>
              <p><strong>Location:</strong> Mashi Studio, London, UK</p>
            </div>
          </div>
          <form class="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Your Inquiry" rows="6"></textarea>
            <button class="btn btn-dark">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  `;
}
