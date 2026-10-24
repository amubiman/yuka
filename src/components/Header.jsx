import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  // मोबाईल मेनू ओपन/क्लोज ट्रॅक करण्यासाठी स्टेट (State)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const styles = {
    navContainer: {
      backgroundColor: '#0B2545',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
      fontFamily: 'Inter, sans-serif'
    },
    nav: { 
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '15px 20px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center'
    },
    logo: { 
      fontSize: '22px', 
      fontWeight: 'bold', 
      letterSpacing: '1px',
      color: '#ffffff',
      textDecoration: 'none'
    },
    logoSpan: { color: '#00A6FB', display: 'block', fontSize: '12px', marginTop: '-2px', letterSpacing: '2px' },
    
    // Desktop Links Wrapper
    desktopLinks: { 
      display: 'flex', 
      gap: '25px', 
      alignItems: 'center'
    },
    link: { 
      color: '#ffffff', 
      textDecoration: 'none', 
      fontWeight: 500, 
      fontSize: '15px', 
      transition: 'color 0.3s' 
    },
    btn: { 
      backgroundColor: '#F26419', 
      color: '#ffffff', 
      border: 'none', 
      padding: '10px 22px', 
      borderRadius: '25px', 
      fontWeight: 'bold', 
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '14px'
    },

    // Mobile Hamburger Menu Icon (3 Lines)
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '24px',
      height: '18px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    },
    line: {
      width: '24px',
      height: '3px',
      backgroundColor: '#ffffff',
      borderRadius: '2px',
      transition: 'all 0.3s ease'
    },

    // Mobile Expandable Dropdown Menu
    mobileMenu: {
      display: isMenuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      backgroundColor: '#091C36',
      padding: '20px',
      gap: '20px',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    },
    mobileLink: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
      padding: '5px 0'
    }
  };

return (
  <div style={styles.navContainer}>
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        YUKA <span style={styles.logoSpan}>DIGITAL MEDIA</span>
      </Link>

      {/* DESKTOP LINKS */}
      <div className="desktop-nav" style={styles.desktopLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/our-work" style={styles.link}>Our Work</Link>
        <Link to="/digital-growth" style={styles.link}>Digital Growth</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/contact" style={styles.btn}>Let's Grow</Link>
      </div>


        {/* MOBILE HAMBURGER BUTTON (☰) */}
        <button className="mobile-toggle" style={styles.hamburger} onClick={toggleMenu}>
          <div style={{...styles.line, transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'}} />
          <div style={{...styles.line, opacity: isMenuOpen ? 0 : 1}} />
          <div style={{...styles.line, transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'}} />
        </button>
      </nav>

      {/* MOBILE DROPDOWN MENU (फक्त मोबाईलवर क्लिक केल्यावर उघडेल) */}
      <div className="mobile-menu-overlay" style={styles.mobileMenu}>
        <a href="#home" style={styles.mobileLink} onClick={closeMenu}>Home</a>
        <a href="#about" style={styles.mobileLink} onClick={closeMenu}>About</a>
        <a href="#services" style={styles.mobileLink} onClick={closeMenu}>Services</a>
        <a href="#portfolio" style={styles.mobileLink} onClick={closeMenu}>Our Work</a>
        <a href="#digital-growth" style={styles.mobileLink} onClick={closeMenu}>Digital Growth</a>
        <a href="#contact" style={styles.mobileLink} onClick={closeMenu}>Contact</a>
        <a href="#contact" style={{...styles.btn, textAlign: 'center', marginTop: '10px'}} onClick={closeMenu}>Let's Grow</a>
      </div>

      {/* DESKTOP vs MOBILE CSS (हे स्टाईल टॅग रिस्पॉन्सिव्ह डिझाइनसाठी आवश्यक आहे) */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (min-width: 992px) {
          .mobile-menu-overlay { display: none !important; }
        }
      `}} />
    </div>
  );
}
