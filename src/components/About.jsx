import React from 'react';

export default function About() {
  const styles = {
    container: { backgroundColor: '#ffffff', padding: '80px 20px', minHeight: '100vh' },
    headerArea: { textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' },
    tag: { color: '#F26419', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '13px' },
    h2: { fontSize: '40px', fontWeight: 900, color: '#0B2545', marginTop: '10px', marginBottom: '5px' },
    line: { height: '4px', width: '80px', backgroundColor: '#00A6FB', margin: '15px auto' },
    subtext: { color: '#555555', fontSize: '16px', lineHeight: 1.6 },
    
    // Story Section (Two Column Layout)
    row: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '50px', maxWidth: '1200px', margin: '0 auto 80px auto', flexWrap: 'wrap' },
    colLeft: { flex: '1', minWidth: '300px' },
    colRight: { flex: '1', minWidth: '300px', backgroundColor: '#091C36', borderLeft: '6px solid #00A6FB', padding: '40px', borderRadius: '16px', color: '#ffffff' },
    storyTitle: { fontSize: '28px', fontWeight: 'bold', color: '#0B2545', marginBottom: '20px' },
    storyText: { color: '#4a5568', fontSize: '16px', lineHeight: 1.7, marginBottom: '15px' },
    
    // Quote Box
    quoteH3: { fontSize: '22px', fontStyle: 'italic', fontWeight: 'bold', color: '#00A6FB', margin: '0 0 15px 0', lineHeight: 1.4 },
    quoteP: { color: '#cbd5e1', fontSize: '15px', margin: 0, lineHeight: 1.6 },

    // Philosophy Banner
    philBanner: { background: 'linear-gradient(135deg, #0B2545, #091C36)', color: '#ffffff', padding: '60px 30px', borderRadius: '16px', maxWidth: '1200px', margin: '0 auto 80px auto', textAlign: 'center' },
    philText: { fontSize: '24px', fontWeight: 'bold', color: '#ffffff', maxWidth: '900px', margin: '0 auto', lineHeight: 1.5 },
    philOrange: { color: '#F26419' },
    philSky: { color: '#00A6FB' },

    // Team Section
    teamTitle: { fontSize: '30px', fontWeight: 'bold', color: '#0B2545', textAlign: 'center', marginBottom: '40px' },
    teamGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' },
    teamCard: { backgroundColor: '#f8fafc', padding: '30px 20px', borderRadius: '12px', textAlign: 'center', border: '1px solid #e2e8f0' },
    avatar: { width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#0B2545', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', margin: '0 auto 20px auto' },
    memberName: { fontSize: '18px', fontWeight: 'bold', color: '#0B2545', margin: '5px 0' },
    memberRole: { fontSize: '14px', color: '#F26419', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }
  };

  return (
    <div id="about" style={styles.container}>
      {/* SECTION HEADER */}
      <div style={styles.headerArea}>
        <span style={styles.tag}>Who Is YUKA?</span>
        <h2 style={styles.h2}>About Our Agency</h2>
        <div style={styles.line}></div>
        <p style={styles.subtext}>
          आम्ही फक्त एक एजन्सी नाही, तर तुमच्या ब्रँडला डिजिटल जगात वेगळी ओळख मिळवून देणारे तुमचे क्रिएटिव्ह पार्टनर्स आहोत.
        </p>
      </div>

      {/* AGENCY STORY ROW */}
      <div style={styles.row}>
        <div style={styles.colLeft}>
          <h3 style={styles.storyTitle}>Our Origin & Mission</h3>
          <p style={styles.storyText}>
            <strong>YUKA Digital Media</strong> ची स्थापना एका महत्त्वाच्या ध्येयाने झाली: महाराष्ट्रातील आणि देशभरातील ब्रँड्सना जुन्या, कंटाळवाण्या आणि जेनेरिक टेम्पलेट्सपासून पूर्णपणे मुक्त करणे! 
          </p>
          <p style={styles.storyText}>
            आजच्या डिजिटल युगात नुसतं पोस्ट करणं सोपं आहे, पण लोकांचं लक्ष वेधून घेणं हे खरं काम आहे. आम्ही डेटा, अचूक स्ट्रेटेजी आणि भन्नाट क्रिएटिव्हिटीचा मेळ घालून असे सोशल मीडिया कॅम्पेन्स आणि वेब सोल्यूशन्स तयार करतो जे दुर्लक्ष करणे अशक्य आहे.
          </p>
        </div>
        <div style={styles.colRight}>
          <h3 style={styles.quoteH3}>"The Story Behind YUKA Persona"</h3>
          <p style={styles.quoteP}>
            आमचा 'YUKA' हा कॅरेक्टर अत्यंत बोल्ड, विटी (चतुर) आणि रिझल्ट-ओरिएंटेड आहे. तो नेहमी ग्राहकांशी मराठी-इंग्लिशच्या अनोख्या संवादातून आणि हुशारीने कनेक्ट होतो. 'प्रत्येकासाठी युनिक काहीतरी' देणे हाच त्याचा स्वभाव आहे!
          </p>
        </div>
      </div>

      {/* CORE PHILOSOPHY BANNER */}
      <div style={styles.philBanner}>
        <p style={styles.philText}>
          "Strategy without creativity is <span style={styles.philOrange}>boring</span>. <br />
          Creativity without strategy is <span style={styles.philSky}>decoration</span>. <br />
          We bring both together."
        </p>
      </div>

      {/* OUR TEAM SECTION */}
      <div>
        <h3 style={styles.teamTitle}>Meet Our Creative Squad</h3>
        <div style={styles.teamGrid}>
          <div style={styles.teamCard}>
            <div style={styles.avatar}>🎯</div>
            <h4 style={styles.memberName}>Creative Director</h4>
            <p style={styles.memberRole}>Brand Strategy</p>
          </div>
          <div style={styles.teamCard}>
            <div style={styles.avatar}>🎨</div>
            <h4 style={styles.memberName}>UI/UX Designer</h4>
            <p style={styles.memberRole}>Visual Design</p>
          </div>
          <div style={styles.teamCard}>
            <div style={styles.avatar}>🎬</div>
            <h4 style={styles.memberName}>Video Specialist</h4>
            <p style={styles.memberRole}>AI & Reel Editing</p>
          </div>
          <div style={styles.teamCard}>
            <div style={styles.avatar}>✍️</div>
            <h4 style={styles.memberName}>Lead Copywriter</h4>
            <p style={styles.memberRole}>Witty Punchlines</p>
          </div>
        </div>
      </div>

    </div>
  );
}
