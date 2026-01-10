import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GoldenVisa from './components/GoldenVisa';
import MainlandFormation from './components/MainlandFormation';
import FreezoneOffshore from './components/FreezoneOffshore';
import BusinessConsulting from './components/BusinessConsulting';
import LicenceRenewal from './components/LicenceRenewal';
import ImmigrationLabour from './components/ImmigrationLabour';
import CorporatePro from './components/CorporatePro';
import DedServices from './components/DedServices';
import DubaiCourts from './components/DubaiCourts';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CostCalculator from './components/CostCalculator';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    // Use Lenis scrollTo if available, otherwise fallback to window.scrollTo
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

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
            <img src="/get logo.png" alt="Get Business Setup" width="150" height="48" style={{ objectFit: 'contain' }} />
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/golden-visa" element={<GoldenVisa />} />
          <Route path="/mainland-formation" element={<MainlandFormation />} />
          <Route path="/freezone-offshore" element={<FreezoneOffshore />} />
          <Route path="/business-consulting" element={<BusinessConsulting />} />
          <Route path="/licence-renewal" element={<LicenceRenewal />} />
          <Route path="/immigration-labour" element={<ImmigrationLabour />} />
          <Route path="/corporate-pro" element={<CorporatePro />} />
          <Route path="/ded-services" element={<DedServices />} />
          <Route path="/dubai-courts" element={<DubaiCourts />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <CostCalculator isOpen={isCalculatorOpen} onClose={closeCalculator} />
    </div>
  );
}

export default App;
