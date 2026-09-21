import React, { useState } from 'react';

export default function Portfolio() {
  // एक्टिव्ह फिल्टर टॅब ट्रॅक करण्यासाठी स्टेट (State)
  const [activeFilter, setActiveFilter] = useState('All');

  const styles = {
    container: { backgroundColor: '#f9fafb', padding: '80px 20px', minHeight: '100vh' },
    headerArea: { textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' },
    tag: { color: '#F26419', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '13px' },
    h2: { fontSize: '40px', fontWeight: 900, color: '#0B2545', marginTop: '10px', marginBottom: '5px' },
    line: { height: '4px', width: '80px', backgroundColor: '#00A6FB', margin: '15px auto' },
    subtext: { color: '#555555', fontSize: '16px', lineHeight: 1.6 },
    
    // Filter Tabs Layout
    tabsContainer: { display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '50px' },
    tabBtn: (isActive) => ({
      backgroundColor: isActive ? '#F26419' : 'transparent',
      color: isActive ? '#ffffff' : '#0B2545',
      border: isActive ? 'none' : '2px solid #0B2545',
      padding: '10px 20px',
      borderRadius: '25px',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'all 0.3s ease'
    }),

    // Cards Grid
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' },
    card: { backgroundColor: '#ffffff', border: '1px solid #eeeeee', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' },
    cardImageArea: { height: '200px', background: 'linear-gradient(45deg, #0B2545, #00A6FB)', display: 'flex', alignItems: 'center', justifycontent: 'center', position: 'relative' },
    mockupIcon: { fontSize: '50px' },
    badge: { position: 'absolute', top: '15px', right: '15px', backgroundColor: '#F26419', color: 'white', padding: '5px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold' },
    
    // Card Body Content
    cardBody: { padding: '25px' },
    clientName: { fontSize: '14px', color: '#00A6FB', fontWeight: 'bold', textTransform: 'uppercase', margin: 0 },
    projectTitle: { fontSize: '22px', fontWeight: 'bold', color: '#0B2545', margin: '5px 0 15px 0' },
    
    // Case Study Details (Problem -> Result)
    detailsBox: { backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', marginBottom: '20px' },
    detailText: { fontSize: '13px', color: '#475569', margin: '0 0 8px 0', lineHeight: 1.5 },
    resultHighlight: { fontSize: '14px', color: '#16a34a', fontWeight: 'bold', margin: 0 }, // Green for results

    viewBtn: { backgroundColor: 'transparent', border: '2px solid #F26419', color: '#F26419', width: '100%', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s' }
  };

  // ५ वेगवेगळ्या कॅटेगरीमधील केस स्टडीज आणि डमी डेटा
  const projectsData = [
    {
      client: 'Nexa Tech Solutions',
      category: 'Branding',
      title: 'Modern Identity Overhaul',
      problem: 'Generic tech templates templates made them look outdated.',
      strategy: 'Designed sharp typographic logo and deep navy code aesthetics.',
      result: '+150% Corporate Trust & Pitch Wins'
    },
    {
      client: 'FitLife Fitness Studio',
      category: 'Social Media',
      title: 'Viral Instagram Growth',
      problem: 'Low reel engagement and generic motivational quotes.',
      strategy: 'Implemented hook-driven scripting & daily content calendars.',
      result: '1.2M+ Views & +300% Member Inquiries'
    },
    {
      client: 'DineRight Restaurant',
      category: 'Video & Reels',
      title: 'Cinematic Food AI Promo',
      problem: 'Static food photos failing to attract weekend crowds.',
      strategy: 'Produced hyper-engaging 4K AI promotional video commercials.',
      result: '10M+ Impressions & 4.2x ROAS on Meta Ads'
    },
    {
      client: 'E-Cart India',
      category: 'Web Development',
      title: 'High-Converting Landing Page',
      problem: 'Slow page load speed causing 60% user drop-offs.',
      strategy: 'Built crisp React interface optimized for lightning-fast speeds.',
      result: 'Cart abandon dropped by 40% & 3x Conversions'
    },
    {
      client: 'Apex Global Logistics',
      category: 'Branding',
      title: 'Premium Brand Packaging',
      problem: 'Lacked visual uniformity across global shipments.',
      strategy: 'Created modern geometric design ecosystem and brand guidelines.',
      result: 'Established premium market identity'
    },
    {
      client: 'StyleHub Fashion Brand',
      category: 'Social Media',
      title: 'LinkedIn Thought Leadership',
      problem: 'Founders profile lacked authority and visibility.',
      strategy: 'Ghostwrote deep industry case studies and high-impact carousels.',
      result: '15k+ Real Followers & Top Voice Badge'
    }
  ];

  // टॅब सिलेक्ट केल्यानुसार प्रोजेक्ट्स फिल्टर करणे
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === activeFilter);

  return (
    <div id="portfolio" style={styles.container}>
      {/* SECTION HEADER */}
      <div style={styles.headerArea}>
        <span style={styles.tag}>Our Flagship Work</span>
        <h2 style={styles.h2}>Featured Case Studies</h2>
        <div style={styles.line}></div>
        <p style={styles.subtext}>
          वाकी नावेचं सांगू... काम मात्र दाखवू! आम्ही केलेले काही निवडक प्रोजेक्ट्स आणि त्यांचे परिणामकारक निकाल खाली पहा.
        </p>
      </div>

      {/* INTERACTIVE FILTER TABS */}
      <div style={styles.tabsContainer}>
        {['All', 'Branding', 'Social Media', 'Video & Reels', 'Web Development'].map((tab) => (
          <button 
            key={tab} 
            style={styles.tabBtn(activeFilter === tab)}
            onClick={() => setActiveFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* DYNAMIC PORTFOLIO GRID */}
      <div style={styles.grid}>
        {filteredProjects.map((project, index) => (
          <div key={index} style={styles.card}>
            {/* Top Mockup Section */}
            <div style={styles.cardImageArea}>
              <span style={styles.badge}>{project.category}</span>
              <div style={styles.mockupIcon}>
                {project.category === 'Web Development' ? '💻' : project.category === 'Branding' ? '🎨' : '📱'}
              </div>
            </div>
            
            {/* Content Details */}
            <div style={styles.cardBody}>
              <p style={styles.clientName}>{project.client}</p>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              
              <div style={styles.detailsBox}>
                <p style={styles.detailText}><strong>Problem:</strong> {project.problem}</p>
                <p style={styles.detailText}><strong>YUKA Strategy:</strong> {project.strategy}</p>
                <p style={styles.resultHighlight}>🚀 Measurable Result: {project.result}</p>
              </div>

              <button style={styles.viewBtn}>View Full Case Study</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
