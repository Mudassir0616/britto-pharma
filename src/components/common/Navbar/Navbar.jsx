import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";

const Navbar = () => {
  // Refs for audio and navigation container
  const navContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuItemsRef = useRef([]);
  menuItemsRef.current = [];

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({}); // State to manage which submenu is open

  const handleClick = () => {
    setCheck((prevCheck) => !prevCheck);
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu((prevMenu) => ({
      ...prevMenu,
      [menu]: !prevMenu[menu],
    }));
  };

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY && !check) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY && !check) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY, check]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  // Toggle Mobile Menu with Animation
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: "100%", y: "-100%", opacity: 0 },
        {
          x: "0%",
          y: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
      );
      gsap.fromTo(
        menuItemsRef.current,
        {
          opacity: 0,
          transform:
            "translate3d(10px, 1px, -60px) rotateY(-60deg) rotateX(-40deg)",
          transformOrigin: "50% 50% -150px",
        },
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          duration: 0.5,
          stagger: 0.1,
          delay: 0.2,
          ease: "power3.out",
        },
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.3,
        delay: 0.1,
        ease: "power3.in",
      });

      gsap.to(menuItemsRef.current, {
        opacity: 1,
        transform:
          "translate3d(10px, 1px, -60px) rotateY(-60deg) rotateX(40deg)",
        transformOrigin: "50% 50% 150px",
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <nav className={`nav-container ${check ? "active" : ""}`}>
      <header className="nav-header container" ref={navContainerRef}>
        <nav className="nav-inner">
          {/* <!-- Logo and Product Button --> */}
          <div className="logo-container">
            <Link href={"/"}>
              <img src="/images/logo.png" alt="logo" className="logo" />
            </Link>
          </div>

          {/* <!-- Navigation Links --> */}
          <div className="nav-links-container">
            <div className="nav-links landing-nav-links">
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#services" className="nav-link">
                Services
              </a>
              <a href="#businesses" className="nav-link">
                Our Businesses
              </a>
              <a href="#leadership" className="nav-link">
                Leadership
              </a>
              <a href="#faq" className="nav-link">
                FAQ
              </a>

              <a href="#contact" className="cta-btn nav-cta">
                Contact Us
              </a>
            </div>
          </div>

          <div
            className={`${check ? "active-nav" : ""} hamburger`}
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <MobileNavbar
        check={check}
        toggleSubMenu={toggleSubMenu}
        openSubMenu={openSubMenu}
      />
    </nav>
  );
};

export default Navbar;
