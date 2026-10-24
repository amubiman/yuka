import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    serviceRequirement: 'Web & UI/UX Development'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! YUKA Digital Media team will connect with you soon.`);
    console.log('Send Requirement Captured:', formData);
  };

  const styles = {
    wrapper: { backgroundColor: '#f9fafb', fontFamily: 'Inter, sans-serif' },
    container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
    sectionPadding: { padding: '100px 20px' },
    
    // Hero
    hero: { background: 'linear-gradient(135deg, #0B2545, #091C36)', color: '#ffffff', padding: '80px 20px', textAlign: 'center' },
    heroH1: { fontSize: '48px', fontWeight: 900, margin: 0 },
    subtext: { color: '#cbd5e1', fontSize: '16px', marginTop: '15px' },
    
    // Two Column Layout
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', marginTop: '50px' },
    
    // Contact Details Column
    infoColumn: { display: 'flex', flexDirection: 'column', gap: '30px' },
    infoGroup: { backgroundColor: '#ffffff', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0' },
    officeTitle: { fontSize: '20px', fontWeight: 'bold', color: '#0B2545', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' },
    infoText: { fontSize: '15px', color: '#4a5568', lineHeight: 1.6, marginBottom: '15px' },
    dirBtn: { display: 'inline-block', backgroundColor: '#0B2545', color: '#ffffff', textDecoration: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', fontSize: '13px' },
    
    // Enquiry Form Column
    formBox: { backgroundColor: '#ffffff', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' },
    formGroup: { marginBottom: '20px' },
    label: { display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#0B2545', marginBottom: '8px' },
    input: { width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', backgroundColor: '#f8fafc', boxSizing: 'border-box' },
    select: { width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', backgroundColor: '#f8fafc', boxSizing: 'border-box' },
    submitBtn: { backgroundColor: '#F26419', color: '#ffffff', width: '100%', padding: '14px', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', letterSpacing: '0.5px', textTransform: 'uppercase' },
    
    // Map & Social
    mapSection: { width: '100%', height: '350px', backgroundColor: '#e2e8f0', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontWeight: 'bold', border: '2px dashed #00A6FB', margin: '5px 0 0 0' },
    socialFlex: { display: 'flex', gap: '15px', marginTop: '10px' },
    socialLink: { color: '#0B2545', backgroundColor: '#f1f5f9', padding: '10px 20px', borderRadius: '25px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' },
    
    // Final CTA Block
    finalBlock: { background: 'linear-gradient(135deg, #0B2545, #091C36)', color: '#ffffff', padding: '80px 20px', textAlign: 'center', marginTop: '80px', borderRadius: '16px' }
  };

  return (
    <div id="contact" style={styles.wrapper}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heroH1}>Let's Talk About Your Business.</h1>
          <p style={styles.subtext}>Have a business idea, a marketing challenge or a digital presence that needs improvement?</p>
        </div>
      </section>

      <div style={styles.container}>
        {/* CONTACT GRID */}
        <div style={styles.grid}>
          
          {/* LEFT COLUMN: CONTACT DETAILS */}
          <div style={styles.infoColumn}>
            <div style={styles.infoGroup}>
              <h3 style={{ ...styles.officeTitle, color: '#00A6FB', fontSize: '22px', marginBottom: '20px' }}>YUKA DIGITAL MEDIA</h3>
              <p style={styles.infoText}>📞 <strong>Phone:</strong> 9028190902 / 8600771113</p>
              <p style={styles.infoText}>📧 <strong>Email:</strong> yukadigitalmedia@gmail.com</p>
            </div>

            <div style={styles.infoGroup}>
              <h3 style={styles.officeTitle}>AHILYANAGAR OFFICE</h3>
              <p style={styles.infoText}>Plot No. 102, Bhagwan Baba Chowk, Near Mule STD, Nirmal Nagar, Ahilyanagar – 414003</p>
              <a href="#directions" style={styles.dirBtn}>Get Directions →</a>
            </div>

            <div style={styles.infoGroup}>
              <h3 style={styles.officeTitle}>PUNE OFFICE</h3>
              <p style={styles.infoText}>Flat No. F-402, Dreams Rakshak Society, Gade Vasti, Bakori Road, Wagholi – 412207</p>
              <a href="#directions" style={styles.dirBtn}>Get Directions →</a>
            </div>

            <div style={styles.infoGroup}>
              <h3 style={{ ...styles.officeTitle, fontSize: '16px' }}>Follow Us</h3>
              <div style={styles.socialFlex}>
                <a href="#instagram" style={styles.socialLink}>Instagram</a>
                <a href="#facebook" style={styles.socialLink}>Facebook</a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ENQUIRY FORM */}
          <div style={styles.formBox}>
            <h3 style={{ ...styles.officeTitle, marginBottom: '25px', textAlign: 'center' }}>ENQUIRY FORM</h3>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" style={styles.input} required />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Business Name</label>
                <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Your Business Name" style={styles.input} />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" style={styles.input} required />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email Address" style={styles.input} required />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Service Requirement</label>
                <select name="serviceRequirement" value={formData.serviceRequirement} onChange={handleChange} style={styles.select}>
                  <option value="Social Media">Social Media</option>
                  <option value="Content Creation">Content Creation</option>
                  <option value="Digital Branding">Digital Branding</option>
                  <option value="Digital Advertising">Digital Advertising</option>
                  <option value="Strategy & Consulting">Strategy & Consulting</option>
                  <option value="Website & Presence">Website & Digital Presence</option>
                </select>
              </div>

              <button type="submit" style={styles.submitBtn}>Send Requirement</button>
            </form>
          </div>

        </div>

        {/* FULL WIDTH MAP PLACEHOLDER */}
        <div style={{ marginTop: '50px' }}>
          <h3 style={{ ...styles.officeTitle, marginBottom: '15px' }}>Office Locations Map</h3>
          <div style={styles.mapSection}>
            📍 Ahilyanagar & Pune Interactive Office Markers Embed Space
          </div>
        </div>

        {/* FINAL CLOSING CTA BLOCK */}
        <div style={styles.finalBlock}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, margin: 0 }}>Your Next Digital Move Starts Here.</h2>
          <a href="#contact" style={{ ...styles.submitBtn, width: 'auto', display: 'inline-block', marginTop: '25px', padding: '15px 40px', textDecoration: 'none' }}>Let's Talk →</a>
        </div>

      </div>
    </div>
  );
}
