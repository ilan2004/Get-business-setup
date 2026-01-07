import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CostCalculator from './components/CostCalculator';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const openCalculator = () => {
    setIsCalculatorOpen(true);
  };

  const closeCalculator = () => {
    setIsCalculatorOpen(false);
  };

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader-content">
          <div className="loader-logo">
            <span className="get-logo">
              <span className="get-g">g</span>
              <span className="get-e">e</span>
              <span className="get-t">t</span>
            </span>
            <span className="get-tagline">BUSINESS SETUP</span>
          </div>
          <div className="loader-progress">
            <div className="loader-bar"></div>
          </div>
          <p className="loader-text">Building Your Success...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar onCalculatorOpen={openCalculator} />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <CostCalculator isOpen={isCalculatorOpen} onClose={closeCalculator} />
    </div>
  );
}

export default App;
