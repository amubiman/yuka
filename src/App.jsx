import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// तुमचे सर्व कॉम्पोनंट्स इम्पोर्ट करा
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import DigitalGrowth from './components/DigitalGrowth';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    /* इथं basename="/yuka" जोडल्यामुळे डीफॉल्ट लिंकवरच होम पेज ओपन होईल */
    <Router basename="/yuka">
      <Header />
      
      <Routes>
        {/* आता मुख्य पाथ "/" म्हणजेच "http://localhost:5173/yuka/" वर होम पेज दिसेल */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-work" element={<Portfolio />} />
        <Route path="/digital-growth" element={<DigitalGrowth />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* जर युझरने चुकीचा किंवा कोणताही न सापडणारा पाथ टाकला, तर आपोआप होम पेजवर रीडायरेक्ट होईल */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}
