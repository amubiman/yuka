import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import yukaChar from '../assets/yuka.json';

export default function Home() {
  const styles = {
    // Layout & General Specs (1200px Content Max Width)
    wrapper: { backgroundColor: '#ffffff', fontFamily: 'Inter, sans-serif' },
    container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
    
    // Section Padding System (100px - 140px for Premium Desktop Look)
    sectionPadding: { padding: '100px 20px' },
    sectionPaddingContrast: { padding: '100px 20px', backgroundColor: '#091C36', color: '#ffffff' },
    sectionPaddingGray: { padding: '100px 20px', backgroundColor: '#f9fafb' },
    
    // Typography
    eyebrow: { color: '#F26419', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '2px', display: 'block', marginBottom: '10px', textAlign: 'center' },
    secTitle: { fontSize: '44px', fontWeight: 900, textAlign: 'center', color: '#0B2545', marginBottom: '15px', lineHeight: 1.2 },
    line: { height: '4px', width: '80px', backgroundColor: '#00A6FB', margin: '0 auto 25px auto' },
    
    // Hero Section
    hero: { background: 'linear-gradient(135deg, #0B2545, #091C36)', color: '#ffffff', padding: '120px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '40px', flexWrap: 'wrap' },
    heroLeft: { flex: '1', minWidth: '300px', maxWidth: '650px' },
    h1: { fontSize: '64px', fontWeight: 900, lineHeight: 1.1, margin: '0 0 20px 0' },
    p: { color: '#cbd5e1', fontSize: '18px', margin: '0 0 30px 0', lineHeight: 1.6 },
    btnContainer: { display: 'flex', gap: '15px', flexWrap: 'wrap' },
    btnOrange: { backgroundColor: '#F26419', color: '#ffffff', border: 'none', padding: '15px 32px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', textDecoration: 'none', display: 'inline-block', transition: 'transform 0.2s' },
    btnBorder: { background: 'transparent', border: '2px solid #00A6FB', color: '#ffffff', padding: '13px 32px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', textDecoration: 'none', display: 'inline-block', transition: 'transform 0.2s' },
    heroRight: { backgroundColor: '#091C36', border: '2px solid rgba(0, 166, 251, 0.2)', padding: '25px', borderRadius: '16px', textAlign: 'center', minWidth: '280px', flex: '1', maxWidth: '360px', margin: '0 auto' },
    
    // Introduction Section
    introBox: { maxWidth: '800px', margin: '0 auto', textAlign: 'center' },
    introH2: { fontSize: '36px', fontWeight: 800, color: '#0B2545', marginBottom: '20px' },
    introText: { fontSize: '18px', color: '#555555', lineHeight: 1.7, marginBottom: '20px' },
    
    // Services Preview Grid (6 Cards)
    grid3: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' },
    card: { background: '#ffffff', border: '1px solid #eeeeee', padding: '35px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'transform 0.3s ease' },
    cardIcon: { fontSize: '32px', marginBottom: '15px' },
    cardTitle: { fontSize: '22px', fontWeight: 'bold', color: '#0B2545', margin: '10px 0' },
    cardText: { color: '#555555', fontSize: '15px', lineHeight: 1.6, marginBottom: '15px' },
    cardExplore: { color: '#00A6FB', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' },
    viewAllBtn: { display: 'block', width: 'max-content', margin: '40px auto 0 auto', color: '#0B2545', border: '2px solid #0B2545', padding: '12px 28px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' },

    // Why Yuka Grid (4 Blocks)
    whyGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' },
    whyCard: { backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '30px', borderRadius: '12px', borderLeft: '4px solid #F26419' },
    whyNum: { fontSize: '24px', fontWeight: 'bold', color: '#F26419', marginBottom: '10px' },
    whyTitle: { fontSize: '20px', fontWeight: 'bold', color: '#ffffff', marginBottom: '10px' },
    whyText: { color: '#cbd5e1', fontSize: '14px', lineHeight: 1.5 },

    // Process Timeline (Horizontal)
    processGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' },
    procCard: { background: '#ffffff', padding: '25px', borderRadius: '12px', textAlign: 'center', borderBottom: '4px solid #00A6FB', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' },
    procNum: { fontSize: '24px', fontWeight: 'bold', color: '#F26419' },
    procTitle: { fontSize: '18px', fontWeight: 'bold', color: '#0B2545', margin: '5px 0' },
    
    // Portfolio Grid (Max 6 Projects)
    portGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px', marginTop: '40px' },
    portCard: { backgroundColor: '#ffffff', border: '1px solid #eeeeee', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' },
    portImgArea: { height: '200px', background: 'linear-gradient(45deg, #0B2545, #00A6FB)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '40px' },
    portBody: { padding: '25px' },
    portClient: { fontSize: '13px', color: '#00A6FB', fontWeight: 'bold', textTransform: 'uppercase', margin: 0 },
    portTitle: { fontSize: '20px', fontWeight: 'bold', color: '#0B2545', margin: '5px 0 10px 0' },

    // Final CTA Banner
    ctaSection: { background: 'linear-gradient(135deg, #0B2545, #091C36)', color: '#ffffff', padding: '80px 20px', textAlign: 'center' }
  };

  const sampleProjects = [
    { client: 'Nexa Tech', title: 'Modern Identity Overhaul', icon: '🎨' },
    { client: 'FitLife Studio', title: 'Viral Instagram Growth', icon: '📱' },
    { client: 'DineRight Restaurant', title: 'Cinematic Food AI Promo', icon: '🤖' },
    { client: 'E-Cart India', title: 'High-Converting Landing Page', icon: '💻' },
    { client: 'Apex Logistics', title: 'Premium Brand Packaging', icon: '🎨' },
    { client: 'StyleHub Fashion', title: 'LinkedIn Thought Leadership', icon: '📱' }
  ];

  return (
    <div style={styles.wrapper}>
      {/* SECTION 2 — HERO */}
      <header id="home" style={styles.hero}>
        <div style={{ ...styles.container, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '40px' }}>
          <div style={styles.heroLeft}>
            <h1 style={styles.h1}>
              Your Brand.<br />
              <span style={{ color: '#F26419' }}>Digitally, Powerfully.</span>
            </h1>
            <p style={styles.p}>
              We help businesses build a strong digital presence through strategic marketing, creative content and consistent online communication.
            </p>
            <div style={styles.btnContainer}>
              <a href="#contact" style={styles.btnOrange}>Let's Grow Your Business</a>
              <a href="#services" style={styles.btnBorder}>Explore Our Services →</a>
            </div>
          </div>
          <div style={styles.heroRight}>
            <div style={{ width: '100%', height: '200px', margin: '0 auto 10px auto', overflow: 'hidden' }}>
              <DotLottieReact data={yukaChar} loop autoplay style={{ width: '100%', height: '100%', transform: 'scale(1.4)' }} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#00A6FB', margin: 0 }}>YUKA Digital Person</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '8px', marginBottom: 0 }}>Bold. Witty. Result-Oriented.</p>
          </div>
        </div>
      </header>

      {/* SECTION 3 — INTRODUCTION */}
      <section style={styles.sectionPadding}>
        <div style={styles.container}>
          {/* पॅरेंट बॉक्सची विड्थ 1200px केली जेणेकरून कार्ड्स पूर्ण पसरतील */}
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* फक्त मजकुराची रुंदी मर्यादित ठेवली जेणेकरून तो वाचायला सुंदर दिसेल */}
            <div style={{ maxWidth: '850px', margin: '0 auto' }}>
              <h2 style={styles.introH2}>Your Digital Presence Should Work for Your Business.</h2>
              <p style={styles.introText}>
                In a digital-first world, your business needs more than just a social media page. It needs a clear identity, meaningful content and a strategy that turns attention into trust and trust into business.
              </p>
              <p style={styles.introText}>
                Yuka Digital Media brings strategy, creativity and execution together to help your brand grow online.
              </p>
            </div>

            {/* THREE MINIMAL ICON BLOCKS (आता १००% पूर्ण रुंदीत पसरतील) */}
            <div className="intro-pillars" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              marginTop: '50px',
              width: '100%'
            }}>
              {[
                { icon: '🧠', title: 'STRATEGY', desc: 'Marketing built around your business goals.' },
                { icon: '🎨', title: 'CREATIVITY', desc: 'Content that makes your brand stand out.' },
                { icon: '⚡', title: 'EXECUTION', desc: 'A professional and consistent online presence.' }
              ].map((item, idx) => (
                <div key={idx} style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  padding: '40px 30px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                  transition: 'transform 0.3s ease'
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '15px' }}>{item.icon}</div>
                  <h4 style={{ 
                    fontSize: '16px', 
                    fontWeight: 'bold', 
                    color: '#0B2545', 
                    letterSpacing: '1.5px',
                    margin: '0 0 12px 0'
                  }}>{item.title}</h4>
                  <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>



      {/* SECTION 4 — SERVICES PREVIEW */}
      <section id="services" style={styles.sectionPaddingGray}>
        <div style={styles.container}>
          <span style={styles.eyebrow}>OUR SERVICES</span>
          <h2 style={styles.secTitle}>Digital Marketing Built Around Your Business.</h2>
          <div style={styles.line}></div>
          
          <div style={styles.grid3}>
            {[
              { icon: '📱', name: 'Social Media', desc: 'Turn your social platforms into powerful corporate conversion assets.' },
              { icon: '🎬', name: 'Content Creation', desc: 'High-quality viral reels, scripts, graphics, and value content.' },
              { icon: '🎨', name: 'Branding', desc: 'Logo systems, brand guidelines, and unique market identity.' },
              { icon: '📈', name: 'Digital Ads', desc: 'Targeted performance campaigns optimized for real conversion metrics.' },
              { icon: '🧠', name: 'Strategy', desc: 'Complete market positioning blueprint before execution.' },
              { icon: '💻', name: 'Website & Presence', desc: 'High-converting responsive design coded in React/Next.js.' }
            ].map((srv, idx) => (
              <div key={idx} style={styles.card}>
                <div style={styles.cardIcon}>{srv.icon}</div>
                <h3 style={styles.cardTitle}>{srv.name}</h3>
                <p style={styles.cardText}>{srv.desc}</p>
                <a href="#services" style={styles.cardExplore}>Explore →</a>
              </div>
            ))}
          </div>
          <a href="#services" style={styles.viewAllBtn}>View All Services →</a>
        </div>
      </section>

      {/* SECTION 5 — WHY YUKA */}
      <section style={styles.sectionPaddingContrast}>
        <div style={styles.container}>
          <span style={{ ...styles.eyebrow, color: '#00A6FB' }}>WHY YUKA?</span>
          <h2 style={{ ...styles.secTitle, color: '#ffffff' }}>Why Yuka Digital Media?</h2>
          <div style={styles.line}></div>
          
          <div style={styles.whyGrid}>
            <div style={styles.whyCard}>
              <div style={styles.whyNum}>01</div>
              <div style={styles.whyTitle}>Strategy First</div>
              <div style={styles.whyText}>Marketing built around your clear and specific business goals.</div>
            </div>
            <div style={styles.whyCard}>
              <div style={styles.whyNum}>02</div>
              <div style={styles.whyTitle}>Creative Thinking</div>
              <div style={styles.whyText}>Content structured purposefully to make your brand stand out.</div>
            </div>
            <div style={styles.whyCard}>
              <div style={styles.whyNum}>03</div>
              <div style={styles.whyTitle}>Consistent Execution</div>
              <div style={styles.whyText}>A highly professional and optimized presence across digital platforms.</div>
            </div>
            <div style={styles.whyCard}>
              <div style={styles.whyNum}>04</div>
              <div style={styles.whyTitle}>Business Focused</div>
              <div style={styles.whyText}>Marketing workflows designed strictly around meaningful conversion objectives.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — OUR PROCESS */}
      <section id="process" style={styles.sectionPaddingGray}>
        <div style={styles.container}>
          <h2 style={styles.secTitle}>From Idea to Digital Growth.</h2>
          <div style={styles.line}></div>
          
          <div style={styles.processGrid}>
            {['Understand', 'Strategise', 'Create', 'Execute', 'Improve'].map((step, idx) => (
              <div key={idx} style={styles.procCard}>
                <div style={styles.procNum}>0{idx + 1}</div>
                <h4 style={styles.procTitle}>{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — SELECTED WORK */}
      <section style={styles.sectionPadding}>
        <div style={styles.container}>
          <span style={styles.eyebrow}>Our Flagship Work</span>
          <h2 style={styles.secTitle}>Ideas Turned Into Digital Experiences.</h2>
          <div style={styles.line}></div>
          
          <div style={styles.portGrid}>
            {sampleProjects.map((proj, idx) => (
              <div key={idx} style={styles.portCard}>
                <div style={styles.portImgArea}>{proj.icon}</div>
                <div style={styles.portBody}>
                  <p style={styles.portClient}>{proj.client}</p>
                  <h3 style={styles.portTitle}>{proj.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <a href="#portfolio" style={styles.viewAllBtn}>View Our Work →</a>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '20px' }}>Ready to Build a Stronger Digital Presence?</h2>
          <a href="#contact" style={styles.btnOrange}>Let's Grow Your Business</a>
        </div>
      </section>
    </div>
  );
}
