import React from 'react';

export default function Header() {
  const styles = {
    nav: { 
      backgroundColor: '#0B2545', 
      color: '#ffffff', 
      padding: '15px 30px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', // इथे आधी चूक झाली होती, आता दुरुस्त केली आहे.
      position: 'sticky', 
      top: 0, 
      zIndex: 50, 
      boxShadow: '0 4px 10px rgba(0,0,0,0.15)' 
    },
    logo: { fontSize: '24px', fontWeight: 'bold', letterSpacing: '1px' },
    span: { color: '#00A6FB' },
    links: { display: 'flex', gap: '25px', alignItems: 'center' },
    link: { color: '#ffffff', textDecoration: 'none', fontWeight: 500, fontSize: '15px' },
    btn: { 
      backgroundColor: '#F26419', 
      color: '#ffffff', 
      border: 'none', 
      padding: '10px 22px', 
      borderRadius: '25px', 
      fontWeight: 'bold', 
      cursor: 'pointer' 
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        YUKA <span style={styles.span}>DIGITAL MEDIA</span>
      </div>
      <div style={styles.links}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#services" style={styles.link}>Services</a>
        <a href="#portfolio" style={styles.link}>Portfolio</a>
        <a href="#about" style={styles.link}>About Us</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
      <button style={styles.btn}>Start A Project</button>
    </nav>
  );
}
