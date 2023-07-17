import  React, { useState, useEffect, useRef } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function Navbar() {
  const [activePage, setActivePage] = useState('home');
  const [menuVisible, setMenuVisible] = useState(false);

  const handlePageChange = (page) => {
    setActivePage(page);
    setMenuVisible(false); // Close the menu after clicking a link
  };

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent click event propagation to document
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  // Use useRef to store the list of section elements
  const sectionRefs = useRef({});

  const navLinks = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About' },
    { page: 'projects', label: 'Projects' },
    { page: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    // Add event listeners when the component mounts
    document.addEventListener('click', hideMenu);
    document.addEventListener('scroll', handleScroll);

    // Clean up the event listeners when the component unmounts
    return () => {
      document.removeEventListener('click', hideMenu);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set up the sectionRefs object with references to the section elements
    navLinks.forEach(({ page }) => {
      const sectionElement = document.getElementById(page);
      if (sectionElement) {
        sectionRefs.current[page] = sectionElement;
      }
    });
  }, [navLinks]);

  const handleScroll = () => {
    hideMenu(); // Hide the menu when scrolling starts

    // Function to determine the currently visible section based on scroll position
    const scrollPosition = window.scrollY;

    let active = 'home'; // Default to 'home' if no section is active

    Object.entries(sectionRefs.current).forEach(([page, sectionElement]) => {
      if (sectionElement.offsetTop <= scrollPosition + 100) {
        active = page;
      }
    });

    setActivePage(active);
  };

  return (
    <header>
      {/* Add logo */}
      <a href="/">
        <img src="/public/Icons&logo/logo.jpg" alt="Logo" />
      </a>

      {/* Add menu icon */}
      {!menuVisible && (
        <FiMenu size={54} className="menu-icon" onClick={(e) => toggleMenu(e)} />
      )}

      {/* Navbar list */}
      <nav className={`menu ${menuVisible ? 'active' : ''}`}>
        <ul>
          {navLinks.map(({ page, label }) => (
            <li key={page}>
              <a
                href={page === 'home' ? '/' : `#${page}`}
                className={activePage === page ? 'active' : ''}
                onClick={() => handlePageChange(page)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        /* Add your custom styles here */

        /* Example media query for switching to column layout */
        @media (max-width: 950px) {
          .menu {
            display: ${menuVisible ? 'flex' : 'none'};
            flex-direction: column;
          }
        }
      `}</style>
    </header>
  );
}
