import { StrictMode, useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import './assets/fonts/Chillax/chillax.css'
import App from './App.jsx'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Lenis smooth scroll wrapper
function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  // Expose lenis instance globally for route changes
  useEffect(() => {
    if (lenisRef.current) {
      window.lenis = lenisRef.current;
    }
    return () => {
      delete window.lenis;
    };
  }, []);

  return children
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <SmoothScrollProvider>
          <App />
        </SmoothScrollProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)

