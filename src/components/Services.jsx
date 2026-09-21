import React from 'react';

export default function Services() {
  const styles = {
    container: { backgroundColor: '#ffffff', padding: '80px 20px', minHeight: '100vh' },
    headerArea: { textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' },
    tag: { color: '#F26419', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '13px' },
    h2: { fontSize: '40px', fontWeight: 900, color: '#0B2545', marginTop: '10px', marginBottom: '5px' },
    line: { height: '4px', width: '80px', backgroundColor: '#00A6FB', margin: '15px auto' },
    subtext: { color: '#555555', fontSize: '16px', lineHeight: 1.6 },
    
    // Grid & Cards
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' },
    card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '40px 30px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', transition: 'all 0.3s ease' },
    iconBox: { width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', marginBottom: '25px' },
    cardTitle: { fontSize: '22px', fontWeight: 'bold', color: '#0B2545', marginBottom: '15px' },
    
    // Bullet Points Style
    list: { listStyleType: 'none', padding: 0, margin: 0 },
    listItem: { color: '#4a5568', fontSize: '14px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' },
    bullet: { color: '#00A6FB', fontWeight: 'bold' },

    // CTA Banner
    ctaBanner: { background: 'linear-gradient(135deg, #0B2545, #091C36)', borderLeft: '6px solid #F26419', color: '#ffffff', padding: '50px 40px', borderRadius: '16px', maxWidth: '1200px', margin: '80px auto 0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' },
    ctaText: { maxWidth: '700px' },
    ctaH3: { fontSize: '26px', fontWeight: 'bold', margin: 0 },
    ctaP: { color: '#cbd5e1', marginTop: '10px', fontSize: '16px', marginBotom: 0 },
    ctaBtn: { backgroundColor: '#F26419', color: '#ffffff', border: 'none', padding: '14px 30px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s' }
  };

  // ५ मुख्य सेवांचा डेटा (ब्रँड गाईडनुसार)
  const serviceList = [
    {
      icon: '🎨',
      bgColor: '#fff7ed', // Light Orange
      title: 'Creative Branding & Identity',
      points: ['Logo design & visual asset creation', 'Comprehensive brand guidelines', 'Color system & custom typography', 'Business stationery & packaging design']
    },
    {
      icon: '📱',
      bgColor: '#eff6ff', // Light Blue
      title: 'Social Media Management',
      points: ['Instagram & LinkedIn content strategy', 'Viral reel scripting & professional editing', 'Monthly post calendars & graphic design', 'Caption writing & active community handling']
    },
    {
      icon: '🤖',
      bgColor: '#ecfeff', // Light Cyan
      title: 'AI Video Production & Reels',
      points: ['Hyper-engaging AI promotional videos', 'Product demo reels & short-form edits', 'Modern motion graphics & visual effects', 'Multilingual AI voiceover ads']
    },
    {
      icon: '💻',
      bgColor: '#f0fdf4', // Light Green
      title: 'Web & UI/UX Development',
      points: ['High-converting landing pages', 'Modern corporate websites (React/Next.js)', 'Mobile responsive & finger-friendly design', 'SEO optimization & speed enhancement']
    },
    {
      icon: '📈',
      bgColor: '#fdf2f8', // Light Pink
      title: 'Performance Marketing',
      points: ['Targeted Meta (Facebook & Insta) Ads', 'Google Search & Display placement', 'High-intent B2B/B2C lead generation', 'Real-time ROI & conversion tracking']
    }
  ];

  return (
    <div id="services" style={styles.container}>
      {/* SECTION HEADER */}
      <div style={styles.headerArea}>
        <span style={styles.tag}>What We Offer</span>
        <h2 style={styles.h2}>Aamhi Kay Karto</h2>
        <div style={styles.line}></div>
        <p style={styles.subtext}>
          तुमच्या ब्रँडला डिजिटल जगात किंग बनवण्यासाठी आमच्या प्रगत आणि परिणामकारक सेवा. 
          आम्ही फक्त पोस्ट करत नाही, तर पूर्ण डिजिटल गेम बदलतो!
        </p>
      </div>

      {/* SERVICES GRID */}
      <div style={styles.grid}>
        {serviceList.map((service, index) => (
          <div key={index} style={styles.card}>
            <div style={{ ...styles.iconBox, backgroundColor: service.bgColor }}>
              {service.icon}
            </div>
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <ul style={styles.list}>
              {service.points.map((point, pIdx) => (
                <li key={pIdx} style={styles.listItem}>
                  <span style={styles.bullet}>✓</span> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* SERVICE CTA BANNER */}
      <div style={styles.ctaBanner}>
        <div style={styles.ctaText}>
          <h3 style={styles.ctaH3}>Ready to elevate your brand presence?</h3>
          <p style={styles.ctaP}>आमच्या तज्ज्ञांसोबत चर्चा करा. Book a 30-min Free Strategy Call today!</p>
        </div>
        <button style={styles.ctaBtn}>Book Free Call 📞</button>
      </div>
    </div>
  );
}
