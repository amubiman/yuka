import React, { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const styles = {
    wrapper: { backgroundColor: '#ffffff', fontFamily: 'Inter, sans-serif' },
    container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
    sectionPadding: { padding: '100px 20px' },
    sectionPaddingGray: { padding: '100px 20px', backgroundColor: '#f9fafb' },
    
    // Hero
    hero: { background: 'linear-gradient(135deg, #0B2545, #091C36)', color: '#ffffff', padding: '100px 20px', textAlign: 'center' },
    heroH1: { fontSize: '56px', fontWeight: 900, margin: 0 },
    
    // Filter Bar (Mobile Scrollable)
    tabsContainer: { display: 'flex', justifyContent: 'center', gap: '10px', overflowX: 'auto', padding: '20px 0', borderBottom: '1px solid #e2e8f0', backgroundColor: '#ffffff', sticky: 'top', top: '70px', zIndex: 30 },
    tabBtn: (isActive) => ({
      backgroundColor: isActive ? '#F26419' : 'transparent',
      color: isActive ? '#ffffff' : '#0B2545',
      border: isActive ? 'none' : '2px solid #0B2545',
      padding: '10px 24px',
      borderRadius: '25px',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '14px',
      whiteSpace: 'nowrap',
      transition: 'all 0.3s'
    }),

    // Asymmetric Layout Patterns
    asymGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', marginTop: '40px' },
    featCard: { gridColumn: 'span 2', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' },
    regularCard: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' },
    
    imgArea: (isFeat) => ({
      height: isFeat ? '320px' : '220px',
      background: 'linear-gradient(45deg, #0B2545, #00A6FB)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '50px',
      color: 'white'
    }),
    cardBody: { padding: '30px' },
    clientTag: { fontSize: '13px', color: '#00A6FB', fontWeight: 'bold', textTransform: 'uppercase', margin: 0 },
    projTitle: { fontSize: '24px', fontWeight: 'bold', color: '#0B2545', margin: '5px 0 15px 0' },

    // Industries Vertical
    indGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' },
    indCard: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '25px', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold', color: '#0B2545', boxShadow: '0 4px 10px rgba(0,0,0,0.01)' },

    // Testimonials
    testGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '40px' },
    testCard: { backgroundColor: '#ffffff', padding: '35px', borderRadius: '16px', borderLeft: '5px solid #F26419', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' },
    testQuote: { fontSize: '16px', fontStyle: 'italic', color: '#4a5568', lineHeight: 1.6, marginBottom: '20px' },
    testAuthor: { fontWeight: 'bold', color: '#0B2545', fontSize: '15px' },
    testMeta: { fontSize: '13px', color: '#777777', marginTop: '2px' },

    // Core Architecture Specs
    secTitle: { fontSize: '38px', fontWeight: 900, color: '#0B2545', textAlign: 'center', marginBottom: '10px' },
    subText: { color: '#666666', fontSize: '16px', textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' },
    ctaSection: { background: 'linear-gradient(135deg, #0B2545, #091C36)', color: '#ffffff', padding: '80px 20px', textAlign: 'center' },
    btnOrange: { backgroundColor: '#F26419', color: '#ffffff', border: 'none', padding: '15px 35px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', textDecoration: 'none', display: 'inline-block', marginTop: '20px' }
  };

  const industries = ['Solar & Energy', 'Agriculture', 'Hospitality', 'Real Estate', 'Retail Hubs', 'Healthcare', 'Education', 'Manufacturing', 'Professional Services', 'Startups'];

  const projects = [
    { client: 'Nexa Solar Solutions', category: 'BRANDING', title: 'Renewable Clean Energy Identity Overhaul', icon: '☀️', isFeatured: true },
    { client: 'Kisan Agritech', category: 'SOCIAL MEDIA', title: 'Rural B2B Digital Engagement Blueprint', icon: '🚜', isFeatured: false },
    { client: 'DineRight Luxury Hotel', category: 'CAMPAIGNS', title: 'Cinematic Hospitality Booking Scale', icon: '🏨', isFeatured: false },
    { client: 'E-Cart Hub', category: 'ADVERTISING', title: 'Performance Scale Engine Setup', icon: '🛍️', isFeatured: true },
    { client: 'Apex BuildCon', category: 'PROMOTIONS', title: 'High-Intent Real Estate Lead Strategy', icon: '🏢', isFeatured: false },
    { client: 'StyleHub App', category: 'SOCIAL MEDIA', title: 'Thought Leadership Launch', icon: '📱', isFeatured: false }
  ];

  const filtered = activeFilter === 'ALL' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div style={styles.wrapper}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heroH1}>Ideas Turned Into Digital Experiences.</h1>
        </div>
      </section>

      {/* FILTER BAR */}
      <div style={styles.tabsContainer}>
        {['ALL', 'SOCIAL MEDIA', 'BRANDING', 'CAMPAIGNS', 'PROMOTIONS', 'ADVERTISING'].map(tab => (
          <button key={tab} style={styles.tabBtn(activeFilter === tab)} onClick={() => setActiveFilter(tab)}>{tab}</button>
        ))}
      </div>

      {/* PORTFOLIO GRID */}
      <section id="portfolio" style={styles.sectionPadding}>
        <div style={styles.container}>
          <div style={styles.asymGrid}>
            {filtered.map((proj, idx) => {
              const CardTag = proj.isFeatured ? 'div' : 'div';
              return (
                <div key={idx} style={proj.isFeatured ? styles.featCard : styles.regularCard}>
                  <div style={styles.imgArea(proj.isFeatured)}>{proj.icon}</div>
                  <div style={styles.cardBody}>
                    <p style={styles.clientTag}>{proj.client} • {proj.category}</p>
                    <h3 style={styles.projTitle}>{proj.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES TRACK RECORD */}
      <section style={styles.sectionPaddingGray}>
        <div style={styles.container}>
          <h2 style={styles.secTitle}>Marketing That Adapts to Your Industry.</h2>
          <p style={styles.subText}>Our strongest positioning is built upon the solid work we have already deployed across various growth sectors.</p>
          <div style={styles.indGrid}>
            {industries.map((ind, idx) => (
              <div key={idx} style={styles.indCard}>{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={styles.sectionPadding}>
        <div style={styles.container}>
          <h2 style={styles.secTitle}>What Our Clients Say</h2>
          <div style={styles.testGrid}>
            {[
              { quote: "Yuka completely changed our digital footprint. The calculated strategy structure delivered 3x conversion loops within the initial quarter.", author: "Rajesh K.", company: "Nexa Solar Enterprises" },
              { quote: "We stopped generic template layouts completely. The custom motion scripting mechanics built real organic pipeline retention.", author: "Amit S.", company: "Kisan Agritech Frameworks" },
              { quote: "Professional, intentional, and performance-focused. Their customOccasion workflows scaled weekend traffic dramatically.", author: "Sneha M.", company: "DineRight Hospitality Group" }
            ].map((t, idx) => (
              <div key={idx} style={styles.testCard}>
                <p style={styles.testQuote}>“{t.quote}”</p>
                <div style={styles.testAuthor}>{t.author}</div>
                <div style={styles.testMeta}>{t.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 style={{ fontSize: '36px', fontWeight: 800 }}>Want Your Brand to Be Our Next Project?</h2>
          <a href="#contact" style={styles.btnOrange}>Start Your Project →</a>
        </div>
      </section>
    </div>
  );
}
