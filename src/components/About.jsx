import React from 'react';

export default function About() {
  const styles = {
    wrapper: { backgroundColor: '#ffffff', fontFamily: 'Inter, sans-serif' },
    container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
    sectionPadding: { padding: '100px 20px' },
    sectionPaddingContrast: { padding: '100px 20px', backgroundColor: '#091C36', color: '#ffffff' },
    sectionPaddingGray: { padding: '100px 20px', backgroundColor: '#f9fafb' },
    
    // Sizing & Typography
    eyebrow: { color: '#F26419', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '2px', display: 'block', marginBottom: '10px' },
    secTitle: { fontSize: '44px', fontWeight: 900, color: '#0B2545', marginBottom: '20px', lineHeight: 1.2 },
    line: { height: '4px', width: '80px', backgroundColor: '#00A6FB', marginBottom: '30px' },
    
    // Hero Section
    hero: { background: 'linear-gradient(135deg, #0B2545, #091C36)', color: '#ffffff', padding: '120px 20px', textAlign: 'center' },
    heroH1: { fontSize: '64px', fontWeight: 900, margin: '0 0 15px 0', lineHeight: 1.2 },
    heroSub: { fontSize: '24px', color: '#00A6FB', fontWeight: '600', margin: 0, letterSpacing: '1px' },
    
    // Who We Are (2 Column Layout)
    row: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '50px', flexWrap: 'wrap' },
    colLeft: { flex: '1', minWidth: '300px', maxWidth: '550px' },
    colRight: { flex: '1', minWidth: '300px', color: '#4a5568', fontSize: '18px', lineHeight: 1.7 },
    
    // Our Philosophy (Large Typography Section)
    philBox: { maxWidth: '950px', margin: '0 auto', textAlign: 'center' },
    philText: { fontSize: '32px', fontWeight: '700', fontStyle: 'italic', lineHeight: 1.5, color: '#ffffff' },
    
    // Our Approach (5 Cards Grid)
    grid5: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' },
    appCard: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '30px 20px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' },
    appNum: { fontSize: '28px', fontWeight: '900', color: '#F26419', marginBottom: '10px' },
    appTitle: { fontSize: '20px', fontWeight: 'bold', color: '#0B2545', marginBottom: '10px' },
    appDesc: { fontSize: '14px', color: '#555555', lineHeight: 1.5 },

    // Mission & Vision
    mvGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '40px', marginTop: '30px' },
    mvCard: { backgroundColor: '#ffffff', padding: '40px', borderRadius: '16px', borderTop: '6px solid #00A6FB', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' },
    mvTitle: { fontSize: '24px', fontWeight: 'bold', color: '#0B2545', marginBottom: '15px' },
    mvText: { fontSize: '16px', color: '#4a5568', lineHeight: 1.6 },

    // Why Work With Us (5 Points List)
    listGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '40px' },
    listItem: { display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: '#f8fafc', padding: '20px 25px', borderRadius: '8px', borderLeft: '3px solid #00A6FB' },
    listIcon: { fontSize: '20px' },
    listText: { fontSize: '18px', fontWeight: '600', color: '#0B2545' },

    // CTA
    ctaBtn: { backgroundColor: '#F26419', color: '#ffffff', border: 'none', padding: '15px 35px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', textDecoration: 'none', display: 'inline-block', marginTop: '25px' }
  };

  return (
    <div style={styles.wrapper}>
      {/* SECTION 1 — HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heroH1}>We Make Digital Marketing Work for Your Business.</h1>
          <p style={styles.heroSub}>Strategy. Creativity. Consistency.</p>
        </div>
      </section>

      {/* SECTION 2 — WHO WE ARE */}
      <section style={styles.sectionPadding}>
        <div style={styles.container}>
          <div style={styles.row}>
            <div style={styles.colLeft}>
              <span style={styles.eyebrow}>WHO WE ARE</span>
              <h2 style={styles.secTitle}>Digital Marketing With a Business Perspective.</h2>
              <div style={styles.line}></div>
            </div>
            <div style={styles.colRight}>
              <p>
                Tell us about your business and let's explore what digital marketing can do for you. Yuka Digital Media built its foundation to free brands from boring, generic templates. 
              </p>
              <p style={{ marginTop: '15px' }}>
                We bridge the gap between creative visual content and core metrics, ensuring every piece of communication pushes your brand forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR PHILOSOPHY */}
      <section style={styles.sectionPaddingContrast}>
        <div style={styles.container}>
          <div style={{ 
            maxWidth: '1000px', 
            margin: '0 auto', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '30px',
            textAlign: 'left' // डावीकडून सुरू होणारा प्रीमियम लूक
          }}>
            
            {/* पहिली स्वतंत्र ओळ */}
            <div style={{
              borderLeft: '5px solid #00A6FB', // डाव्या बाजूची विजुअल रेषा
              paddingLeft: '25px',
              margin: 0
            }}>
              <h2 style={{
                fontSize: '38px', 
                fontWeight: '700', 
                lineHeight: 1.4, 
                color: '#ffffff',
                margin: 0
              }}>
                Good marketing is not about being everywhere.
              </h2>
            </div>
            
            {/* दुसरी स्वतंत्र ओळ */}
            <div style={{
              borderLeft: '5px solid #F26419', // दुसऱ्या ओळीसाठी कॉन्ट्रास्ट ऑरेंज रेषा
              paddingLeft: '25px',
              margin: 0
            }}>
              <h2 style={{
                fontSize: '38px', 
                fontWeight: '700', 
                lineHeight: 1.4, 
                color: '#ffffff',
                margin: 0
              }}>
                It's about being visible in the right places, with the right message, consistently.
              </h2>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 4 — OUR APPROACH */}
      <section style={styles.sectionPaddingGray}>
        <div style={styles.container}>
          <span style={{ ...styles.eyebrow, textAlign: 'center' }}>OUR METHODOLOGY</span>
          <h2 style={{ ...styles.secTitle, textAlign: 'center' }}>Our Strategic Approach</h2>
          <div style={{ ...styles.line, margin: '0 auto 40px auto' }}></div>
          
          <div style={styles.grid5}>
            {[
              { num: '01', title: 'Understand', desc: 'Deep dive into your business model and target demographics.' },
              { num: '02', title: 'Plan', desc: 'Crafting custom roadmaps rather than standard automated generic schedules.' },
              { num: '03', title: 'Create', desc: 'Producing high-impact assets, viral reel layouts, and sharp copy.' },
              { num: '04', title: 'Execute', desc: 'Deploying targeted setups seamlessly across relevant touchpoints.' },
              { num: '05', title: 'Improve', desc: 'Analyzing analytics parameters to optimize performance continuously.' }
            ].map((card, idx) => (
              <div key={idx} style={styles.appCard}>
                <div style={styles.appNum}>{card.num}</div>
                <h3 style={styles.appTitle}>{card.title}</h3>
                <p style={styles.appDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — MISSION & VISION */}
      <section style={styles.sectionPadding}>
        <div style={styles.container}>
          <div style={styles.mvGrid}>
            <div style={styles.mvCard}>
              <h3 style={styles.mvTitle}>Our Mission</h3>
              <p style={styles.mvText}>
                To empower startups and established local enterprises by developing high-converting digital footprints that organically translate visibility into corporate trust and steady pipeline scaling.
              </p>
            </div>
            <div style={styles.mvCard}>
              <h3 style={styles.mvTitle}>Our Vision</h3>
              <p style={styles.mvText}>
                To be recognised as the elite creative + strategic digital growth partner, shifting the marketing landscape from simple asset deployment to measurable objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHY WORK WITH US (Why Yuka - लिस्ट नुसार) */}
      <section style={styles.sectionPaddingGray}>
        <div style={styles.container}>
          <span style={{ ...styles.eyebrow, textAlign: 'center' }}>THE YUKA ADVANTAGE</span>
          <h2 style={{ ...styles.secTitle, textAlign: 'center' }}>Why Yuka?</h2>
          <div style={{ ...styles.line, margin: '0 auto 40px auto' }}></div>
          
          <div style={styles.listGrid}>
            {[
              { title: 'Business-focused Engineering', desc: 'Marketing strategies built entirely around your core financial and growth goals.' },
              { title: 'Creative Disruption Systems', desc: 'Say goodbye to standard templates. We build custom visual frameworks.' },
              { title: 'Strategic Framework Planning', desc: 'Complete demographic data auditing and platform placement mapping before execution.' },
              { title: 'Consistent Performance Track Record', desc: 'Timely project asset execution with structured accountability matrices.' }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffffff',
                padding: '25px',
                borderRadius: '12px',
                borderLeft: '4px solid #F26419',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
              }}>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0B2545', margin: '0 0 8px 0' }}>{item.title}</h4>
                <p style={{ fontSize: '14px', color: '#555555', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <section style={{ ...styles.hero, padding: '80px 20px' }}>
        <div style={styles.container}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, margin: 0 }}>Let's Build Your Digital Presence Together.</h2>
          <a href="#contact" style={styles.ctaBtn}>Talk to Us →</a>
        </div>
      </section>


      {/* SECTION 7 — CTA */}
      <section style={{ ...styles.hero, padding: '80px 20px' }}>
        <div style={styles.container}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, margin: 0 }}>Let's Build Your Digital Presence Together.</h2>
          <a href="#contact" style={styles.ctaBtn}>Talk to Us →</a>
        </div>
      </section>
    </div>
  );
}
