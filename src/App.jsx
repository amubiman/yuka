import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'; 
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact'; // १. शेवटचे पेज इम्पोर्ट केले

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* स्वतंत्र हेडर */}
      <Header />
      
      {/* मुख्य कंटेंट एरिया */}
      <main style={{ flexGrow: 1 }}>
        {/* PAGE 1: HOME PAGE */}
        <Home />
        
        {/* PAGE 2: SERVICES PAGE */}
        <Services />
        
        {/* PAGE 3: PORTFOLIO PAGE */}
        <Portfolio />

        {/* PAGE 4: ABOUT US PAGE */}
        <About />

        {/* PAGE 5: CONTACT PAGE */}
        <Contact />
      </main>
      
      {/* स्वतंत्र फुटर */}
      <Footer />
    </div>
  );
}

export default App;
