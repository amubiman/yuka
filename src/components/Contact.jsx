import React, { useState } from 'react';

export default function Contact() {
  // फॉर्ममधील डेटा मॅनेज करण्यासाठी स्टेट (State)
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    serviceNeeded: 'Web & UI/UX Development',
    budgetRange: '₹25,000 - ₹50,000',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.fullName}! YUKA Digital Media team will connect with you soon.`);
    console.log('Lead Captured:', formData);
  };

  const styles = {
    container: { backgroundColor: '#f9fafb', padding: '80px 20px', minHeight: '100vh' },
    headerArea: { textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' },
    tag: { color: '#F26419', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '13px' },
    h2: { fontSize: '40px', fontWeight: 900, color: '#0B2545', marginTop: '10px', marginBottom: '5px' },
    line: { height: '4px', width: '80px', backgroundColor: '#00A6FB', margin: '15px auto' },
    subtext: { color: '#555555', fontSize: '16px', lineHeight: 1.6 },
    
    // Two Column Grid
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', maxWidth: '1200px', margin: '0 auto' },
    
    // Form Column
    formBox: { backgroundColor: '#ffffff', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' },
    formGroup: { marginBottom: '20px' },
    label: { display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#0B2545', marginBottom: '8px' },
    input: { width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', backgroundColor: '#f8fafc', transition: 'border-color 0.3s' },
    select: { width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', backgroundColor: '#f8fafc' },
    textarea: { width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', backgroundColor: '#f8fafc', height: '100px', resize: 'none' },
    submitBtn: { backgroundColor: '#F26419', color: '#ffffff', width: '100%', padding: '14px', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s' },
    
    // Info Column
    infoBox: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '30px' },
    infoCard: { backgroundColor: '#0B2545', color: '#ffffff', padding: '30px', borderRadius: '16px' },
    infoTitle: { fontSize: '22px', fontWeight: 'bold', marginBottom: '20px', color: '#00A6FB' },
    infoText: { fontSize: '15px', color: '#e2e8f0', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' },
    
    // Social Handles
    socialContainer: { marginTop: '20px' },
    socialTitle: { fontSize: '16px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px' },
    socialFlex: { display: 'flex', gap: '15px' },
    socialLink: { color: '#ffffff', backgroundColor: '#F26419', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' },
    
    // Map Placeholder
    mapBox: { height: '220px', backgroundColor: '#e2e8f0', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontWeight: 'bold', border: '2px dashed #00A6FB', position: 'relative', overflow: 'hidden' },
    whatsappFloat: { backgroundColor: '#25D366', color: 'white', padding: '10px 20px', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.15)' }
  };

  return (
    <div id="contact" style={styles.container}>
      {/* SECTION HEADER */}
      <div style={styles.headerArea}>
        <span style={styles.tag}>Let's Connect</span>
        <h2 style={styles.h2}>Start A Project With YUKA</h2>
        <div style={styles.line}></div>
        <p style={styles.subtext}>
          फक्त पोस्ट नाही... पूर्ण डिजिटल गेम बदलायचा आहे? मग खालील फॉर्म भरा, आमची टीम तुमच्याशी २४ तासांच्या आत संपर्क करेल!
        </p>
      </div>

      {/* CONTACT GRID */}
      <div style={styles.grid}>
        
        {/* LEFT COLUMN: LEAD GENERATION FORM */}
        <div style={styles.formBox}>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="तुमचे नाव" style={styles.input} required />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Business Name</label>
              <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="तुमच्या कंपनीचे नाव" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@gmail.com" style={styles.input} required />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Phone / WhatsApp</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="9876XXXXXX" style={styles.input} required />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Service Needed</label>
              <select name="serviceNeeded" value={formData.serviceNeeded} onChange={handleChange} style={styles.select}>
                <option value="Creative Branding">Creative Branding & Identity</option>
                <option value="Social Media">Social Media Management</option>
                <option value="AI Video">AI Video Production & Reels</option>
                <option value="Web Development">Web & UI/UX Development</option>
                <option value="Performance Marketing">Performance Marketing</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Budget Range</label>
              <select name="budgetRange" value={formData.budgetRange} onChange={handleChange} style={styles.select}>
                <option value="Under ₹25k">Under ₹25,000</option>
                <option value="₹25k - ₹50k">₹25,000 - ₹50,000</option>
                <option value="₹50k - ₹1 Lakh">₹50,000 - ₹1,000,000</option>
                <option value="₹1 Lakh+">₹1,000,000+</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="तुमच्या प्रोजेक्टबद्दल थोडक्यात सांगा..." style={styles.textarea}></textarea>
            </div>

            <button type="submit" style={styles.submitBtn}>Submit Request 🚀</button>
          </form>
        </div>

        {/* RIGHT COLUMN: CONTACT INFO & MAP */}
        <div style={styles.infoBox}>
          
          {/* Direct Contact Card */}
          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>Contact Information</h3>
            <p style={styles.infoText}>📧 <strong>Official Email:</strong> hello@yukadigitalmedia.com</p>
            <p style={styles.infoText}>📞 <strong>Phone Number:</strong> +91 98765 43210</p>
            <p style={styles.infoText}>📍 <strong>Studio Address:</strong> Registered Office, Studio Block, Pune, Maharashtra.</p>
            
            <a href="https://wa.me" target="_blank" rel="noreferrer" style={styles.whatsappFloat}>
              💬 Quick WhatsApp Chat
            </a>

            {/* Social Handles */}
            <div style={styles.socialContainer}>
              <p style={styles.socialTitle}>Follow YUKA Persona</p>
              <div style={styles.socialFlex}>
                <a href="#instagram" style={styles.socialLink}>IG</a>
                <a href="#linkedin" style={styles.socialLink}>LN</a>
                <a href="#youtube" style={styles.socialLink}>YT</a>
                <a href="#facebook" style={styles.socialLink}>FB</a>
              </div>
            </div>
          </div>

          {/* Office Location Map Placeholder */}
          <div style={styles.mapBox}>
            📍 Interactive Google Map Embed Space
          </div>

        </div>

      </div>
    </div>
  );
}
