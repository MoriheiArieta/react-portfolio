/**
 * @copyright 2025 gmaarieta
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLenis } from "lenis/react";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const lenis = useLenis();
  const [activeSection, setActiveSection] = useState("home");

  const initActiveBox = () => {
    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  // Auto-detect active section based on scroll position
  useEffect(() => {
    if (!lenis) return;

    const updateActiveSection = () => {
      const sections = ["home", "about", "work", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for header

      // Default to home if at the very top
      if (scrollPosition <= 100) {
        if (activeSection !== "home") {
          setActiveSection("home");
        }
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          if (activeSection !== sections[i]) {
            setActiveSection(sections[i]);
          }
          break;
        }
      }
    };

    // Listen to Lenis scroll events
    lenis.on("scroll", updateActiveSection);

    // Initial check
    updateActiveSection();

    return () => {
      lenis.off("scroll", updateActiveSection);
    };
  }, [lenis, activeSection]);

  // Update active link when activeSection changes
  useEffect(() => {
    const newActiveLink = document.querySelector(`[href="#${activeSection}"]`);
    if (newActiveLink) {
      // Remove active class from previous link
      if (lastActiveLink.current && lastActiveLink.current !== newActiveLink) {
        lastActiveLink.current.classList.remove("active");
      }

      // Add active class to new link
      newActiveLink.classList.add("active");
      lastActiveLink.current = newActiveLink;

      // Update active box position
      if (activeBox.current) {
        activeBox.current.style.top = newActiveLink.offsetTop + "px";
        activeBox.current.style.left = newActiveLink.offsetLeft + "px";
        activeBox.current.style.width = newActiveLink.offsetWidth + "px";
        activeBox.current.style.height = newActiveLink.offsetHeight + "px";
      }
    }
  }, [activeSection]);

  // Initialize active box and set up resize listener
  useEffect(() => {
    initActiveBox();

    const handleResize = () => {
      initActiveBox();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const activeCurrentLink = (event) => {
    event.preventDefault();

    const targetId = event.target.getAttribute("href").substring(1); // Remove #
    setActiveSection(targetId);

    // Smooth scroll to target using Lenis
    const targetHref = event.target.getAttribute("href");
    if (lenis && targetHref) {
      lenis.scrollTo(targetHref, {
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    }
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: `nav-link ${activeSection === "home" ? "active" : ""}`,
    },
    {
      label: "About",
      link: "#about",
      className: `nav-link ${activeSection === "about" ? "active" : ""}`,
    },
    {
      label: "Work",
      link: "#work",
      className: `nav-link ${activeSection === "work" ? "active" : ""}`,
    },
    {
      label: "Contact",
      link: "#contact",
      className: `nav-link md:hidden ${
        activeSection === "contact" ? "active" : ""
      }`,
    },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
