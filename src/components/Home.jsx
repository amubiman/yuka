import React from 'react';

export default function Home() {
  const styles = {
    hero: { background: 'linear-gradient(135deg, #0B2545, #091C36)', color: '#ffffff', padding: '80px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '40px', flexWrap: 'wrap' },
    heroLeft: { maxWidth: '650px' },
    tagline: { color: '#00A6FB', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '2px', display: 'block', marginBottom: '10px' },
    h1: { fontSize: '48px', fontWeight: 900, lineHeight: 1.2, margin: 0 },
    orangeText: { color: '#F26419' },
    p: { color: '#cbd5e1', fontSize: '18px', margin: '20px 0', lineHeight: 1.6 },
    marathiHook: { color: '#00A6FB', fontWeight: 500, display: 'block', marginTop: '10px' },
    btnContainer: { display: 'flex', gap: '15px', marginTop: '25px' },
    btnOrange: { backgroundColor: '#F26419', color: '#ffffff', border: 'none', padding: '12px 28px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' },
    btnBorder: { background: 'transparent', border: '2px solid #00A6FB', color: '#ffffff', padding: '12px 28px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' },
    heroRight: { backgroundColor: '#091C36', border: '2px solid rgba(0, 166, 251, 0.2)', padding: '40px', borderRadius: '16px', textAlign: 'center', minWidth: '280px' },
    
    philosophy: { backgroundColor: '#F26419', color: '#ffffff', padding: '40px 20px', textAlign: 'center' },
    philH2: { fontSize: '28px', fontStyle: 'italic', fontWeight: 800, margin: 0 },
    philP: { fontSize: '20px', marginTop: '10px', color: '#0B2545', fontWeight: 'bold', margin: '10px 0 0 0' },
    
    services: { padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' },
    secTitle: { fontSize: '36px', fontWeight: 900, textAlign: 'center', color: '#0B2545', marginBottom: '5px' },
    line: { height: '4px', width: '80px', backgroundColor: '#00A6FB', margin: '0 auto 15px auto' },
    secSub: { textAlign: 'center', color: '#666666', marginBottom: '50px' },
    grid3: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
    card: { background: '#ffffff', border: '1px solid #eeeeee', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
    cardIcon: { fontSize: '32px', marginBottom: '15px' },
    cardTitle: { fontSize: '20px', fontWeight: 'bold', color: '#0B2545', margin: '10px 0' },
    cardText: { color: '#555555', fontSize: '14px', lineHeight: 1.6 },
    
    process: { backgroundColor: '#f9fafb', padding: '80px 20px' },
    grid5: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' },
    procCard: { background: '#ffffff', padding: '25px', borderRadius: '12px', textAlign: 'center', borderBottom: '4px solid #00A6FB', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' },
    procNum: { fontSize: '24px', fontNav: 'bold', color: '#F26419' },
    procTitle: { fontSize: '18px', fontWeight: 'bold', color: '#0B2545', margin: '5px 0' },
    procDesc: { fontSize: '13px', color: '#777777', margin: 0 },
    
    results: { padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' },
    resCard: { backgroundColor: '#0B2545', color: '#ffffff', padding: '35px', borderRadius: '12px', textAlign: 'center' },
    resNum: { fontSize: '40px', fontWeight: 900, color: '#F26419' },
    resNumSky: { fontSize: '40px', fontWeight: 900, color: '#00A6FB' },
    resDesc: { fontSize: '14px', color: '#cbd5e1', marginTop: '8px' }
  };

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* HERO SECTION */}
      <header id="home" style={styles.hero}>
        <div style={styles.heroLeft}>
          <span style={styles.tagline}>Welcome to Next-Gen Digital Agency</span>
          <h1 style={styles.h1}>
            We Make Brands <br />
            <span style={styles.orangeText}>Impossible To Ignore.</span>
          </h1>
          <p style={styles.p}>
            Data-driven digital marketing, creative strategy & next-gen web design.
            <span style={styles.marathiHook}>Pratyekasathi "Yu"nik "Ka"hitari..!!</span>
          </p>
          <div style={styles.btnContainer}>
            <button style={styles.btnOrange}>View Our Work</button>
            <button style={styles.btnBorder}>Start A Project</button>
          </div>
        </div>
        <div style={styles.heroRight}>
          <div style={{ fontSize: '60px', marginBottom: '15px' }}>🚀</div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#00A6FB', margin: 0 }}>YUKA Digital Persona</h3>
          <p style={{ fontSize: '14px', color: '#94a3b8', marginTop: '10px', marginBotom: 0 }}>Bold. Witty. Result-Oriented.</p>
        </div>
      </header>

      {/* PHILOSOPHY BANNER */}
      <section style={styles.philosophy}>
        <h2 style={styles.philH2}>"Posting is easy. Getting noticed is the job."</h2>
        <p style={styles.philP}>— Ho, aamhi thoda veglan karto! 😉</p>
      </section>

      {/* CORE SERVICES GRID */}
      <section style={styles.services}>
        <h2 style={styles.secTitle}>Aamhi Kay Karto?</h2>
        <div style={styles.line}></div>
        <p style={styles.secSub}>तुमच्या ब्रँडला डिजिटल जगात किंग बनवण्यासाठी आमच्या सेवा</p>
        
        <div style={styles.grid3}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🎨</div>
            <h3 style={styles.cardTitle}>Creative Branding</h3>
            <p style={styles.cardText}>Logo design, comprehensive brand guidelines, and unique color systems.</p>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>📱</div>
            <h3 style={styles.cardTitle}>Social Media Marketing</h3>
            <p style={styles.cardText}>Instagram & LinkedIn strategy, viral reel scripting, and active community handling.</p>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>💻</div>
            <h3 style={styles.cardTitle}>Web Solutions</h3>
            <p style={styles.cardText}>High-converting landing pages, modern corporate websites, and SEO optimization.</p>
          </div>
        </div>
      </section>

      {/* WORKING PROCESS */}
      <section style={styles.process}>
        <h2 style={{ ...styles.secTitle, marginBottom: '40px' }}>Our Working Process</h2>
        <div style={styles.grid5}>
          <div style={styles.procCard}>
            <div style={styles.procNum}>01</div>
            <h4 style={styles.procTitle}>Discover</h4>
            <p style={styles.procDesc}>माहिती गोळा करणे</p>
          </div>
          <div style={styles.procCard}>
            <div style={styles.procNum}>02</div>
            <h4 style={styles.procTitle}>Think</h4>
            <p style={styles.procDesc}>स्ट्रेटेजी बनवणे</p>
          </div>
          <div style={styles.procCard}>
            <div style={styles.procNum}>03</div>
            <h4 style={styles.procTitle}>Create</h4>
            <p style={styles.procDesc}>जादू तयार करणे</p>
          </div>
          <div style={styles.procCard}>
            <div style={styles.procNum}>04</div>
            <h4 style={styles.procTitle}>Launch</h4>
            <p style={styles.procDesc}>लाईव्ह करणे</p>
          </div>
          <div style={styles.procCard}>
            <div style={styles.procNum}>05</div>
            <h4 style={styles.procTitle}>Grow</h4>
            <p style={styles.procDesc}>ब्रँड वाढवणे</p>
          </div>
        </div>
      </section>

      {/* PROVEN RESULTS */}
      <section style={styles.results}>
        <div style={styles.resCard}>
          <div style={styles.resNum}>10M+</div>
          <div style={styles.resDesc}>Total Impressions Generated</div>
        </div>
        <div style={styles.resCard}>
          <div style={styles.resNumSky}>3x</div>
          <div style={styles.resDesc}>Average ROAS for Campaigns</div>
        </div>
        <div style={styles.resCard}>
          <div style={{ ...styles.resNum, color: '#ffffff' }}>100%</div>
          <div style={styles.resDesc}>"YUnik" Creative Content</div>
        </div>
      </section>
    </div>
  );
}
