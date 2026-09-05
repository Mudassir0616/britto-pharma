import React, { useEffect, useState } from "react";
import { industriesApi } from "../../../api/api";
import Link from "next/link";
import { useSiteSetting } from "@/context/useSiteSettings";

const Footer = () => {
  const { settings } = useSiteSetting();
  const [industries, setindustries] = useState([]);

  const fetchData = async () => {
    try {
      const response = await industriesApi.get(``);
      setindustries(response?.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="footer-container">
      <div className="container">
        <div className="company-details">
          <div className="img-container">
            <img src="/images/gk-logo.png" alt="Logo" />
          </div>

          <p>
            Empowering industries with smart, scalable solutions for efficiency
            and growth.
          </p>
        </div>

        <div className="quick-links">
          <div className="links">
            <p className="title">Quick Links</p>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="links">
            <p className="title">Industries We Serve</p>
            <ul>
              {industries?.map((industry, index) => (
                <a href={`/industries/${industry?.slug}`} key={index}>
                  <li>{industry?.card_name}</li>
                </a>
              ))}
            </ul>
          </div>

          <div className="links">
            <p className="title">Resources</p>
            <ul>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/faq">FAQ&apos;s</Link>
              </li>
              <li>
                <Link href="/case-study">Case Studies</Link>
              </li>
            </ul>

            <p className="title">Get In Touch</p>
            <ul>
              <li>
                Email :{" "}
                <a href={`mailto:${settings?.email}`}>{settings?.email}</a>
              </li>
              <li>
                Phone : <a href={`tel:${settings?.phone}`}>{settings?.phone}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2025 Quickso. All Rights Reserved.</p>

        <div>
          <a href="/privacy-policy"> Privacy Policy |</a>
          <a href="/terms-and-conditions"> Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
