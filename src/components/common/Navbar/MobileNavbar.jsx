import React from "react";
import Link from "next/link";

const MobileNavbar = ({ check }) => {
  return (
    <div className={check ? "active-mobile-menu mobile-menu" : "mobile-menu"}>
      <ul className="landing-mobile-menu">
        <Link href={"#home"}>
          <li>Home</li>
        </Link>
        <Link href={"#about"}>
          <li>About</li>
        </Link>
        <Link href={"#services"}>
          <li>Services</li>
        </Link>
        <Link href={"#businesses"}>
          <li>Our Businesses</li>
        </Link>
        <Link href={"#leadership"}>
          <li>Leadership</li>
        </Link>
        <Link href={"#faq"}>
          <li>FAQ</li>
        </Link>
        <Link href={"#contact"}>
          <li>Contact Us</li>
        </Link>
      </ul>
    </div>
  );
};

export default MobileNavbar;
