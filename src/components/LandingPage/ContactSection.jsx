import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-heading centered light">
          <p>GET IN TOUCH</p>
          <h2>Let’s Build the Next Opportunity Together.</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <div className="map-container">
              <div className="map-placeholder" aria-label="Map placeholder">
                <span />
              </div>
            </div>

            <div className="contact-detail">
              <span>Address</span>
              <p>
                Britto Pharmaceuticals Pvt. Ltd. 2 nd Floor, Blossom Building
                Oppo. Treehouse School, Yashwant Nagar, West, Virar,
                Maharashtra 401303
              </p>
            </div>

            <div className="contact-detail">
              <span>Contact</span>
              <p>+91 70309 30932</p>
            </div>

            <div className="contact-detail">
              <span>Email</span>
              <p>support@yourdomain.com</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <label>
                Full name*
                <input type="text" placeholder="Enter your full name" />
              </label>
              <label>
                Company
                <input type="text" placeholder="Enter your company name" />
              </label>
            </div>

            <div className="form-row">
              <label>
                Email Address*
                <input type="email" placeholder="Enter your email address" />
              </label>
              <label>
                Whatsapp *
                <div className="phone-input">
                  <select aria-label="Country code" defaultValue="+91">
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                  </select>
                  <input type="tel" placeholder="Enter Whatsapp number" />
                </div>
              </label>
            </div>

            <label>
              Country*
              <select defaultValue="">
                <option value="" disabled>
                  Select Country
                </option>
                <option value="india">India</option>
                <option value="uae">United Arab Emirates</option>
                <option value="uk">United Kingdom</option>
                <option value="usa">United States</option>
              </select>
            </label>

            <label>
              Message
              <textarea placeholder="Enter your requirement, quantity, or query.." rows={5} />
            </label>

            <button type="submit" className="cta-btn submit-btn">
              Send Enquiry →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
