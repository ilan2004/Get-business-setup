import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const counterRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // --- Image Reveal Sequence ---
            const revealTl = gsap.timeline({ delay: 0.1 });

            revealTl
                .to(".gallery-img", {
                    y: 0,
                    opacity: 1,
                    stagger: 0.05,
                    duration: 0.7,
                    ease: "power4.out"
                })
                .to(".hero-gallery", {
                    gap: "0px",
                    duration: 0.8,
                    ease: "power4.out"
                }, "-=0.5")
                .to(".gallery-img", {
                    scale: 1,
                    duration: 0.8,
                    ease: "power4.out"
                }, "<")
                .to(".gallery-img:not(.main-img)", {
                    width: 0,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.inOut"
                })
                .to(".main-img", {
                    scale: 1,
                    width: "100%",
                    duration: 0.8,
                    ease: "power4.out"
                }, "<")
                // Transition to final state (add border radius, shadow)
                .to(".main-img img", {
                    borderRadius: "2rem", // var(--radius-2xl)
                    duration: 0.5
                })
                .to(".hero-image-frame", {
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", // var(--shadow-2xl)
                    duration: 0.5
                }, "<");

            // --- Existing Animations (Delayed) ---

            // Title animation - staggered reveal
            const titleLines = heroRef.current?.querySelectorAll('.title-line');
            gsap.fromTo(titleLines,
                {
                    y: 60,
                    opacity: 0,
                    clipPath: 'inset(0 0 100% 0)'
                },
                {
                    y: 0,
                    opacity: 1,
                    clipPath: 'inset(0 0 0% 0)',
                    duration: 0.7,
                    stagger: 0.1,
                    ease: 'power3.out',
                    delay: 1.2 // Increased delay to wait for image reveal
                }
            );

            // Badge animation
            gsap.fromTo('.hero-badge',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, delay: 1.1, ease: 'power2.out' }
            );

            // Description animation
            gsap.fromTo('.hero-description',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 1.5, ease: 'power2.out' }
            );

            // CTA buttons animation
            gsap.fromTo('.hero-cta',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, delay: 1.7, ease: 'power2.out' }
            );

            // Stats counter - keep scroll trigger
            const stats = heroRef.current?.querySelectorAll('.stat');
            stats?.forEach((stat, index) => {
                const numberEl = stat.querySelector('.stat-number');
                const text = numberEl?.textContent || '0';
                const numberMatch = text.match(/(\d+)/);
                const targetNumber = numberMatch ? parseInt(numberMatch[1]) : 0;
                const suffix = text.replace(/\d+/, '');

                gsap.fromTo(stat,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: 1.9 + (index * 0.15),
                        ease: 'power2.out'
                    }
                );

                ScrollTrigger.create({
                    trigger: stat,
                    start: 'top 85%',
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

            // Floating card animation
            gsap.fromTo('.hero-floating-card',
                { y: 60, opacity: 0, scale: 0.9 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    delay: 2.1,
                    ease: 'back.out(1.7)'
                }
            );

            // Continuous float animation
            gsap.to('.deco-triangle', {
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            // Scroll parallax
            ScrollTrigger.create({
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    gsap.set('.hero-bg-image img', { y: progress * 100 });
                    gsap.set('.hero-floating-card', { y: progress * -50 });
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

            {/* Decorative Elements */}
            <div className="hero-decorations">
                <div className="deco-dots"></div>
                <div className="deco-triangle"></div>
                <div className="deco-lines"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-left">
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

                    <div className="hero-right">
                        <div className="hero-image-wrapper">
                            {/* AlaDesign Style Reveal Gallery */}
                            <div className="hero-gallery">
                                {/* Left Image */}
                                <div className="gallery-img side-img">
                                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" alt="Business Meeting" />
                                </div>
                                {/* Center/Main Image */}
                                <div className="gallery-img main-img">
                                    <div className="hero-image-frame">
                                        <img
                                            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80"
                                            alt="Dubai Business"
                                        />
                                    </div>
                                </div>
                                {/* Right Image */}
                                <div className="gallery-img side-img">
                                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" alt="Success" />
                                </div>
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
