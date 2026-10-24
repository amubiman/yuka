import React, { useState } from 'react';

export default function DigitalGrowth() {
  // FAQ अकॉर्डियन व्यवस्थापनासाठी स्टेट (State)
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const styles = {
    wrapper: { backgroundColor: '#ffffff', fontFamily: 'Inter, sans-serif' },
    container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
    sectionPadding: { padding: '100px 20px' },
    sectionPaddingGray: { padding: '100px 20px', backgroundColor: '#f9fafb' },
    sectionPaddingContrast: { padding: '100px 20px', backgroundColor: '#091C36', color: '#ffffff' },

    // Typography
    eyebrow: { color: '#F26419', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '2px', display: 'block', marginBottom: '10px', textAlign: 'center' },
    secTitle: { fontSize: '38px', fontWeight: 900, color: '#0B2545', textAlign: 'center', marginBottom: '15px', lineHeight: 1.2 },
    line: { height: '4px', width: '80px', backgroundColor: '#00A6FB', margin: '0 auto 40px auto' },

    // Hero
    hero: { background: 'linear-gradient(135deg, #0B2545, #091C36)', color: '#ffffff', padding: '120px 20px', textAlign: 'center' },
    heroH1: { fontSize: '56px', fontWeight: 900, margin: '0 0 20px 0', lineHeight: 1.2 },
    heroP: { color: '#cbd5e1', fontSize: '20px', maxWidth: '850px', margin: '0 auto 30px auto', lineHeight: 1.6 },

    // Framework Flow
    flowGrid: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px', flexWrap: 'wrap', marginTop: '40px' },
    flowStep: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '20px 15px', borderRadius: '8px', flex: '1', minWidth: '150px', textAlign: 'center', fontWeight: 'bold', color: '#0B2545', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' },
    flowArrow: { color: '#00A6FB', fontWeight: 'bold', fontSize: '20px' },

    // Strategy Box
    stratBox: { maxWidth: '850px', margin: '0 auto', textAlign: 'center' },
    pText: { fontSize: '16px', color: '#4a5568', lineHeight: 1.7, marginBottom: '25px' },
    chainFlex: { display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '20px' },
    chainNode: { backgroundColor: '#F26419', color: '#ffffff', padding: '10px 20px', borderRadius: '6px', fontSize: '14px', fontWeight: 'bold' },

    // Social Media 3 Large Cards
    cardGrid3: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' },
    largeCard: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '40px 30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', textAlign: 'center' },
    cardBadge: { color: '#00A6FB', fontWeight: '900', fontSize: '22px', display: 'block', marginBottom: '15px', letterSpacing: '1px' },

    // Content Pillars Grid
    pillarGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginTop: '40px' },
    pillarCard: { backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '25px 15px', borderRadius: '12px', textAlign: 'center' },
    pillarIcon: { fontSize: '28px', marginBottom: '10px', display: 'block' },
    pillarTitle: { fontSize: '16px', fontWeight: 'bold', color: '#ffffff' },

    // Advertising Path
    adGrid: { display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', alignItems: 'center', marginTop: '30px' },
    adNode: { backgroundColor: '#e0f2fe', color: '#0369a1', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', fontSize: '15px' },

    // FAQ Accordion
    faqBox: { maxWidth: '800px', margin: '0 auto', marginTop: '40px' },
    faqItem: { borderBottom: '1px solid #e2e8f0', padding: '20px 0' },
    faqHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 'bold', color: '#0B2545', fontSize: '18px' },
    faqAnswer: { marginTop: '15px', color: '#4a5568', fontSize: '15px', lineHeight: 1.6 },

    // CTA
    ctaBtn: { backgroundColor: '#F26419', color: '#ffffff', border: 'none', padding: '15px 35px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', textDecoration: 'none', display: 'inline-block', marginTop: '20px' }
  };

  const faqs = [
    { q: "1. What does Yuka Digital Media do?", a: "We provide end-to-end premium digital marketing, comprehensive brand building blueprints, viral short-form video production, and high-converting modern corporate website architectures." },
    { q: "2. Do you work with small and growing businesses?", a: "Yes, our core ecosystem engineering scales local setups, SMEs, startups, and growing enterprises by matching goals directly with absolute market footprints." },
    { q: "3. Can you manage our social media?", a: "Absolutely. We manage entire corporate social channels through value content calendars, hook copywriting pipelines, community relations, and target metric setups." },
    { q: "4. Do you provide customised packages?", a: "Yes, we avoid standard template costs. Every distribution model is customized directly around individual industry objectives." },
    { q: "5. Can you create content in Marathi?", a: "Yes! Crafting highly customized creative copy in Marathi mixed with punchy English triggers immediate local market conversion and deep community trust." },
    { q: "6. Do you guarantee leads or sales?", a: "We guarantee institutional execution quality, strict positioning, and metric optimization tracking rather than making unrealistic generic layout promises." },
    { q: "7. How do we get started?", a: "Simply submit your information via our simple form, or book an optimization consult to structure your pipeline parameters directly." }
  ];

  return (
    <div style={styles.wrapper}>
      {/* SECTION 1 — HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heroH1}>Don't Just Market Your Business. Build Its Digital Growth.</h1>
          <p style={styles.heroP}>
            A clear strategy connects your business goals with the right audience, message, content and digital channels.
          </p>
        </div>
      </section>

      {/* SECTION 2 — DIGITAL GROWTH FRAMEWORK */}
      <section style={styles.sectionPadding}>
        <div style={styles.container}>
          <span style={styles.eyebrow}>THE ENGINE</span>
          <h2 style={styles.secTitle}>Digital Growth Framework</h2>
          <div style={styles.line}></div>
          
          <div style={styles.flowGrid}>
            <div style={styles.flowStep}>DISCOVER</div>
            <div style={styles.flowArrow}>→</div>
            <div style={styles.flowStep}>STRATEGISE</div>
            <div style={styles.flowArrow}>→</div>
            <div style={styles.flowStep}>CREATE</div>
            <div style={styles.flowArrow}>→</div>
            <div style={styles.flowStep}>LAUNCH</div>
            <div style={styles.flowArrow}>→</div>
            <div style={styles.flowStep}>MEASURE</div>
            <div style={styles.flowArrow}>→</div>
            <div style={styles.flowStep}>IMPROVE</div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — STRATEGY */}
      <section style={styles.sectionPaddingGray}>
        <div style={styles.container}>
          <div style={styles.stratBox}>
            <span style={styles.eyebrow}>PHILOSOPHY VALUE</span>
            <h2 style={styles.secTitle}>Strategy Before Activity.</h2>
            <div style={styles.line}></div>
            <p style={styles.pText}>
              Most brands fail to convert because they simply "post regularly" without clear conversion alignment. True institutional scale requires a deep understanding of your business structure before any creative asset distribution.
            </p>
            <div style={styles.chainFlex}>
              <div style={styles.chainNode}>Goals</div>
              <div style={{ ...styles.flowArrow, color: '#0B2545' }}>→</div>
              <div style={styles.chainNode}>Audience</div>
              <div style={{ ...styles.flowArrow, color: '#0B2545' }}>→</div>
              <div style={styles.chainNode}>Positioning</div>
              <div style={{ ...styles.flowArrow, color: '#0B2545' }}>→</div>
              <div style={styles.chainNode}>Platform</div>
              <div style={{ ...styles.flowArrow, color: '#0B2545' }}>→</div>
              <div style={styles.chainNode}>Content</div>
              <div style={{ ...styles.flowArrow, color: '#0B2545' }}>→</div>
              <div style={styles.chainNode}>Campaign</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SOCIAL MEDIA */}
      <section style={styles.sectionPadding}>
        <div style={styles.container}>
          <span style={styles.eyebrow}>PLATFORM CORE</span>
          <h2 style={styles.secTitle}>Social Media Is More Than Posting.</h2>
          <div style={styles.line}></div>
          
          <div style={styles.cardGrid3}>
            <div style={styles.largeCard}>
              <span style={styles.cardBadge}>ATTRACT</span>
              <p style={{ color: '#555555', fontSize: '15px', lineHeight: 1.6 }}>Creative high-impact video reels and visual graphics engineered purposefully to capture immediate premium marketplace attention.</p>
            </div>
            <div style={styles.largeCard}>
              <span style={styles.cardBadge}>ENGAGE</span>
              <p style={{ color: '#555555', fontSize: '15px', lineHeight: 1.6 }}>Relevant local community communication designed explicitly to translate raw visibility into deep long-term brand connection.</p>
            </div>
            <div style={styles.largeCard}>
              <span style={styles.cardBadge}>CONVERT</span>
              <p style={{ color: '#555555', fontSize: '15px', lineHeight: 1.6 }}>Clear transactional offers, clean landing architectures, and direct call-to-action hooks optimized to turn trust into business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CONTENT PILLARS */}
      <section style={styles.sectionPaddingContrast}>
        <div style={styles.container}>
          <span style={{ ...styles.eyebrow, color: '#00A6FB' }}>DISTRIBUTION MODEL</span>
          <h2 style={{ ...styles.secTitle, color: '#ffffff' }}>Create With Purpose.</h2>
          <div style={styles.line}></div>
          
          <div style={styles.pillarGrid}>
            <div style={styles.pillarCard}><span style={styles.pillarIcon}>🧠</span><span style={styles.pillarTitle}>EDUCATE</span></div>
            <div style={styles.pillarCard}><span style={styles.pillarIcon}>📢</span><span style={styles.pillarTitle}>PROMOTE</span></div>
            <div style={styles.pillarCard}><span style={styles.pillarIcon}>💬</span><span style={styles.pillarTitle}>ENGAGE</span></div>
            <div style={styles.pillarCard}><span style={styles.pillarIcon}>🤝</span><span style={styles.pillarTitle}>BUILD TRUST</span></div>
            <div style={styles.pillarCard}><span style={styles.pillarIcon}>✨</span><span style={styles.pillarTitle}>SHOWCASE</span></div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — ADVERTISING */}
      <section style={styles.sectionPadding}>
        <div style={styles.container}>
          <span style={styles.eyebrow}>PERFORMANCE ENGINE</span>
          <h2 style={styles.secTitle}>Right Audience. Right Message. Right Campaign.</h2>
          <div style={styles.line}></div>
          
          <div style={styles.adGrid}>
            <div style={styles.adNode}>Audience</div>
            <div style={{ ...styles.flowArrow, color: '#0B2545' }}>→</div>
            <div style={styles.adNode}>Message</div>
            <div style={{ ...styles.flowArrow, color: '#0B2545' }}>→</div>
            <div style={styles.adNode}>Creative</div>
            <div style={{ ...styles.flowArrow, color: '#0B2545' }}>→</div>
            <div style={styles.adNode}>Campaign</div>
            <div style={{ ...styles.flowArrow, color: '#0B2545' }}>→</div>
            <div style={styles.adNode}>Optimise</div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ Accordion */}
      <section style={styles.sectionPaddingGray}>
        <div style={styles.container}>
          <h2 style={styles.secTitle}>Frequently Asked Questions</h2>
          <div style={styles.line}></div>
          
          <div style={styles.faqBox}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={styles.faqItem}>
                <div style={styles.faqHeader} onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <span>{openFaq === idx ? '−' : '+'}</span>
                </div>
                {openFaq === idx && (
                  <div style={styles.faqAnswer}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section style={{ ...styles.hero, padding: '80px 20px' }}>
        <div style={styles.container}>
          <h2 style={{ fontSize: '36px', fontWeight: 800 }}>Have a Business Goal? Let's Find the Digital Strategy Behind It.</h2>
          <a href="#contact" style={styles.ctaBtn}>Book a Consultation →</a>
        </div>
      </section>
    </div>
  );
}
