import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const counterRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // --- Reduced Animations for Minimalist Look ---

            // Title animation - simple fade up
            const titleLines = heroRef.current?.querySelectorAll('.title-line');
            gsap.fromTo(titleLines,
                {
                    y: 40,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    delay: 0.2
                }
            );

            // Badge animation
            gsap.fromTo('.hero-badge',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, delay: 0.1, ease: 'power2.out' }
            );

            // Description animation
            gsap.fromTo('.hero-description',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: 'power2.out' }
            );

            // CTA buttons animation
            gsap.fromTo('.hero-cta',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, delay: 0.8, ease: 'power2.out' }
            );

            // Stats counter
            const stats = heroRef.current?.querySelectorAll('.stat');
            stats?.forEach((stat, index) => {
                const numberEl = stat.querySelector('.stat-number');
                const text = numberEl?.textContent || '0';
                const numberMatch = text.match(/(\d+)/);
                const targetNumber = numberMatch ? parseInt(numberMatch[1]) : 0;
                const suffix = text.replace(/\d+/, '');

                gsap.fromTo(stat,
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: 1.0 + (index * 0.1),
                        ease: 'power2.out'
                    }
                );

                ScrollTrigger.create({
                    trigger: stat,
                    start: 'top 95%',
                    once: true,
                    onEnter: () => {
                        const counter = { val: 0 };
                        gsap.to(counter, {
                            val: targetNumber,
                            duration: 2,
                            ease: 'power2.out',
                            onUpdate: () => {
                                if (numberEl) {
                                    numberEl.textContent = Math.floor(counter.val) + suffix;
                                }
                            }
                        });
                    }
                });
            });

            // Scroll parallax for background only
            ScrollTrigger.create({
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    gsap.set('.hero-bg-image img', { y: progress * 50 });
                }
            });

        }, heroRef);

        return () => ctx.revert();
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

            {/* Simple Decorative Elements */}
            <div className="hero-decorations">
                <div className="deco-lines"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content centered">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        <span>Your Premier Business Partner in the UAE</span>
                    </div>

                    <h1 className="hero-title">
                        <span className="title-line">Your <span className="highlight">Success</span> is Our <span className="highlight-red">Mission</span></span>
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
                            <span className="stat-label">Businesses</span>
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
