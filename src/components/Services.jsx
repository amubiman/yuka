import React from 'react';

export default function Services() {
  const styles = {
    wrapper: { backgroundColor: '#ffffff', fontFamily: 'Inter, sans-serif' },
    container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
    sectionPadding: { padding: '100px 20px' },
    sectionPaddingGray: { padding: '100px 20px', backgroundColor: '#f9fafb' },
    
    // Hero Section
    hero: { background: 'linear-gradient(135deg, #0B2545, #091C36)', color: '#ffffff', padding: '120px 20px', textAlign: 'center' },
    heroH1: { fontSize: '64px', fontWeight: 900, margin: '0 0 20px 0', lineHeight: 1.2 },
    heroP: { color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto 30px auto', lineHeight: 1.6 },
    heroBtn: { backgroundColor: '#F26419', color: '#ffffff', border: 'none', padding: '15px 35px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', textDecoration: 'none', display: 'inline-block' },

    // Section 2 — Sticky Mini Navigation
    miniNav: { position: 'sticky', top: '70px', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', zIndex: 40, padding: '15px 0', overflowX: 'auto', display: 'flex', whiteSpace: 'nowrap' },
    miniNavFlex: { display: 'flex', gap: '20px', justifyContent: 'center', width: '100%', minWidth: 'max-content', padding: '0 20px' },
    miniNavLink: { color: '#0B2545', textDecoration: 'none', fontWeight: '600', fontSize: '14px', padding: '8px 16px', borderRadius: '20px', backgroundColor: '#f1f5f9', transition: 'all 0.3s' },

    // Alternating Rows (50/50 Split)
    row: (isReverse) => ({
      display: 'flex',
      flexDirection: isReverse ? 'row-reverse' : 'row',
      alignItems: 'center',
      gap: '60px',
      flexWrap: 'wrap'
    }),
    colText: { flex: '1', minWidth: '300px' },
    colVisual: { flex: '1', minWidth: '300px', height: '350px', background: 'linear-gradient(135deg, #0B2545, #00A6FB)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '60px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' },

    // Typography & Details
    secTitle: { fontSize: '36px', fontWeight: 800, color: '#0B2545', marginBottom: '20px', lineHeight: 1.3 },
    list: { listStyleType: 'none', padding: 0, margin: '20px 0 30px 0' },
    listItem: { color: '#4a5568', fontSize: '16px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' },
    bullet: { color: '#00A6FB', fontWeight: 'bold' },
    inlineGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '15px', margin: '20px 0 30px 0' },
    inlineTag: { backgroundColor: '#e0f2fe', color: '#0369a1', padding: '10px', borderRadius: '8px', textAlign: 'center', fontSize: '13px', fontWeight: 'bold' },

    // CTA Elements
    serviceCta: { color: '#F26419', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', display: 'inline-flex', alignItems: 'center', gap: '5px', borderBottom: '2px solid transparent', transition: 'border 0.2s' },
    finalCtaSection: { background: 'linear-gradient(135deg, #0B2545, #091C36)', color: '#ffffff', padding: '80px 20px', textAlign: 'center' }
  };

  return (
    <div style={styles.wrapper}>
      {/* SECTION 1 — HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heroH1}>Everything Your Brand Needs to Grow Digitally.</h1>
          <p style={styles.heroP}>
            From strategy and content to social media, branding and advertising, we bring your digital marketing under one roof.
          </p>
          <a href="#contact" style={styles.heroBtn}>Discuss Your Requirement</a>
        </div>
      </section>

      {/* SECTION 2 — SERVICES NAVIGATION (STICKY MINI-NAV) */}
      <nav style={styles.miniNav}>
        <div style={styles.miniNavFlex}>
          <a href="#social-media" style={styles.miniNavLink}>Social Media</a>
          <a href="#content-creation" style={styles.miniNavLink}>Content</a>
          <a href="#branding" style={styles.miniNavLink}>Branding</a>
          <a href="#advertising" style={styles.miniNavLink}>Advertising</a>
          <a href="#strategy" style={styles.miniNavLink}>Strategy</a>
          <a href="#website" style={styles.miniNavLink}>Website</a>
          <a href="#local-marketing" style={styles.miniNavLink}>Local Marketing</a>
          <a href="#campaign-marketing" style={styles.miniNavLink}>Campaigns</a>
        </div>
      </nav>

      {/* SECTION 3 — SOCIAL MEDIA */}
      <section id="social-media" style={styles.sectionPadding}>
        <div style={styles.container}>
          <div style={styles.row(false)}>
            <div style={styles.colText}>
              <h2 style={styles.secTitle}>Turn Your Social Media Into a Business Asset.</h2>
              <ul style={styles.list}>
                <li style={styles.listItem}><span style={styles.bullet}>✓</span> Content strategy aligned with goals</li>
                <li style={styles.listItem}><span style={styles.bullet}>✓</span> Comprehensive monthly planning</li>
                <li style={styles.listItem}><span style={styles.bullet}>✓</span> High-impact creative posts & design</li>
                <li style={styles.listItem}><span style={styles.bullet}>✓</span> Copywritten captions & community growth</li>
                <li style={styles.listItem}><span style={styles.bullet}>✓</span> Viral script edits & modern short reels</li>
              </ul>
              <a href="#contact" style={styles.serviceCta}>Enquire About Social Media →</a>
            </div>
            <div style={styles.colVisual}>📱</div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CONTENT CREATION */}
      <section id="content-creation" style={styles.sectionPaddingGray}>
        <div style={styles.container}>
          <div style={styles.row(true)}>
            <div style={styles.colText}>
              <h2 style={styles.secTitle}>Content That Gives Your Brand Something to Say.</h2>
              <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: 1.6 }}>
                We engineer structural, value-driven assets rather than random daily posts. Every piece educates, showcases, or converts.
              </p>
              <div style={styles.inlineGrid}>
                <div style={styles.inlineTag}>Educational</div>
                <div style={styles.inlineTag}>Promotional</div>
                <div style={styles.inlineTag}>Carousel Tech</div>
                <div style={styles.inlineTag}>High-Value Edits</div>
              </div>
              <a href="#contact" style={styles.serviceCta}>Request Content Proposal →</a>
            </div>
            <div style={styles.colVisual}>🎬</div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DIGITAL BRANDING */}
      <section id="branding" style={styles.sectionPadding}>
        <div style={styles.container}>
          <div style={styles.row(false)}>
            <div style={styles.colText}>
              <h2 style={styles.secTitle}>Build a Brand People Can Recognise.</h2>
              <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: 1.6 }}>
                Establish institutional market authority with unified guidelines, custom design languages, and clean graphic architectures.
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}><span style={styles.bullet}>✓</span> Logo & Typographic Core Guidelines</li>
                <li style={styles.listItem}><span style={styles.bullet}>✓</span> Corporate Color Palette Infrastructures</li>
                <li style={styles.listItem}><span style={styles.bullet}>✓</span> Ready-to-deploy Social Layout Templates</li>
              </ul>
              <a href="#contact" style={styles.serviceCta}>Build Your Brand →</a>
            </div>
            <div style={styles.colVisual}>🎨</div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — DIGITAL ADVERTISING */}
      <section id="advertising" style={styles.sectionPaddingGray}>
        <div style={styles.container}>
          <div style={styles.row(true)}>
            <div style={styles.colText}>
              <h2 style={styles.secTitle}>Put Your Business in Front of the Right Audience.</h2>
              <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: 1.6 }}>
                We focus on strategy, creative quality, audience targeting and continuous optimisation rather than unrealistic promises.
              </p>
              <div style={styles.inlineGrid}>
                <div style={styles.inlineTag}>Awareness</div>
                <div style={styles.inlineTag}>Reach Matrix</div>
                <div style={styles.inlineTag}>B2B Leads</div>
                <div style={styles.inlineTag}>ROAS Optimization</div>
              </div>
              <a href="#contact" style={styles.serviceCta}>Launch Active Campaign →</a>
            </div>
            <div style={styles.colVisual}>📈</div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — STRATEGY & CONSULTING */}
      <section id="strategy" style={styles.sectionPadding}>
        <div style={styles.container}>
          <div style={styles.row(false)}>
            <div style={styles.colText}>
              <h2 style={styles.secTitle}>The Right Direction Before You Start Spending.</h2>
              <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: 1.6 }}>
                Skip the trial-and-error method. We build complete market positioning plans designed around absolute objectives.
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}><span style={styles.bullet}>✓</span> Audience Demographic Auditing</li>
                <li style={styles.listItem}><span style={styles.bullet}>✓</span> Channel Allocation Frameworks</li>
              </ul>
              <a href="#contact" style={styles.serviceCta}>Request Strategy Audit →</a>
            </div>
            <div style={styles.colVisual}>🧠</div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — WEBSITE & DIGITAL PRESENCE */}
      <section id="website" style={styles.sectionPaddingGray}>
        <div style={styles.container}>
          <div style={styles.row(true)}>
            <div style={styles.colText}>
              <h2 style={styles.secTitle}>Give Your Business a Professional Digital Home.</h2>
              <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: 1.6 }}>
                Clean, mobile-first layouts optimized for lightning-fast speeds and high lead conversion tracking systems.
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}><span style={styles.bullet}>✓</span> Responsive Corporate Layout Coded in React</li>
                <li style={styles.listItem}><span style={styles.bullet}>✓</span> Technical Core Web Vitals SEO Enhancement</li>
              </ul>
              <a href="#contact" style={styles.serviceCta}>Build Professional Website →</a>
            </div>
            <div style={styles.colVisual}>💻</div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — LOCAL BUSINESS MARKETING */}
      <section id="local-marketing" style={styles.sectionPadding}>
        <div style={styles.container}>
          <div style={styles.row(false)}>
            <div style={styles.colText}>
              <h2 style={styles.secTitle}>Become More Visible to Customers Around You.</h2>
              <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: 1.6 }}>
                Maximize geographical discovery footprints for brick-and-mortar operations, retail chains, and service sectors.
              </p>
              <div style={styles.inlineGrid}>
                <div style={styles.inlineTag}>Retail Hubs</div>
                <div style={styles.inlineTag}>Restaurants</div>
                <div style={styles.inlineTag}>Local Services</div>
              </div>
              <a href="#contact" style={styles.serviceCta}>Boost Local Visibility →</a>
            </div>
            <div style={styles.colVisual}>📍</div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — CAMPAIGN MARKETING */}
      <section id="campaign-marketing" style={styles.sectionPaddingGray}>
        <div style={styles.container}>
          <div style={styles.row(true)}>
            <div style={styles.colText}>
              <h2 style={styles.secTitle}>Make Every Important Occasion Work for Your Brand.</h2>
              <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: 1.6 }}>
                Deploy high-converting tactical blueprints during key seasonal opportunities, launches, and festivals.
              </p>
              <div style={styles.inlineGrid}>
                <div style={styles.inlineTag}>Product Launches</div>
                <div style={styles.inlineTag}>Festival Campaigns</div>
                <div style={styles.inlineTag}>Special Offers</div>
              </div>
              <a href="#contact" style={styles.serviceCta}>Plan Next Campaign →</a>
            </div>
            <div style={styles.colVisual}>🚀</div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — SERVICE CTA */}
      <section style={styles.finalCtaSection}>
        <div style={styles.container}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '20px' }}>Not Sure Which Service Your Business Needs?</h2>
          <a href="#contact" style={styles.heroBtn}>Talk to Yuka →</a>
        </div>
      </section>
    </div>
  );
}
