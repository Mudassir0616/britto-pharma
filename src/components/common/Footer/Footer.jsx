import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container britto-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Britto Pharmaceuticals" />
          <p>
            Trusted Pharmaceutical Solutions for Modern Healthcare Delivering
            precision, safety, and quality through reliable pharmaceutical
            manufacturing for healthcare professionals and institutions.
          </p>

          <div className="social-links">
            <a href="#" aria-label="Instagram">
              <img src="/icons/ig.svg" alt="" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="/icons/in.svg" alt="" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src="/icons/yt.svg" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© 2026 Britto Pharma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
