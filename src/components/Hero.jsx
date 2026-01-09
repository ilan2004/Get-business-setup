import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = heroRef.current?.querySelectorAll('.animate-hero');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="hero" id="home" ref={heroRef}>
            {/* Background Elements */}
            <div className="hero-bg">
                <div className="hero-bg-gradient"></div>
                <div className="hero-bg-image">
                    <img
                        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
                        alt="Dubai Skyline"
                    />
                </div>
                <div className="hero-bg-overlay"></div>
            </div>

            {/* Decorative Elements */}
            <div className="hero-decorations">
                <div className="deco-dots"></div>
                <div className="deco-triangle"></div>
                <div className="deco-lines"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-left animate-hero">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            <span>Your Premier Business Partner in the UAE</span>
                        </div>

                        <h1 className="hero-title">
                            <span className="title-line">Your</span>
                            <span className="title-line highlight">Success</span>
                            <span className="title-line">is Our</span>
                            <span className="title-line highlight-red">Mission</span>
                        </h1>

                        <p className="hero-description">
                            Start your business journey with <strong>GET</strong> — a distinguished business
                            consultancy in the heart of Dubai. We specialize in delivering expert licensing
                            services, making your business establishment seamless and successful.
                        </p>

                        <div className="hero-cta">
                            <a href="#contact" className="btn btn-secondary">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                                Get Started Today
                            </a>
                            <a href="#services" className="btn btn-outline">
                                Our Services
                            </a>
                        </div>

                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Businesses Established</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Government Partners</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-right animate-hero" style={{ animationDelay: '0.3s' }}>
                        <div className="hero-image-wrapper">
                            <div className="hero-image-frame">
                                <img
                                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80"
                                    alt="Dubai Business"
                                />
                            </div>
                            <div className="hero-image-accent"></div>
                        </div>

                        {/* Floating Card */}
                        <div className="hero-floating-card">
                            <div className="floating-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <div className="floating-text">
                                <span className="floating-title">Trusted Partner</span>
                                <span className="floating-subtitle">For UAE Business Setup</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
};

export default Hero;
