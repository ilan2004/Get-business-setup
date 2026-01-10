import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image wrapper animation with parallax
            gsap.fromTo('.about-image-main',
                {
                    y: 80,
                    opacity: 0,
                    scale: 0.9
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    }
                }
            );

            // Accent image animation
            gsap.fromTo('.about-image-accent',
                {
                    x: -60,
                    opacity: 0,
                    scale: 0.8
                },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    delay: 0.3,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    }
                }
            );

            // Experience badge pop animation
            gsap.fromTo('.about-experience',
                {
                    scale: 0,
                    opacity: 0
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    delay: 0.5,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    }
                }
            );

            // Content section animations
            gsap.fromTo('.about-label',
                { x: -30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    scrollTrigger: {
                        trigger: '.about-content',
                        start: 'top 80%',
                    }
                }
            );

            gsap.fromTo('.about-title',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.1,
                    scrollTrigger: {
                        trigger: '.about-content',
                        start: 'top 80%',
                    }
                }
            );

            // Staggered text paragraphs
            gsap.fromTo('.about-text',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: '.about-content',
                        start: 'top 75%',
                    }
                }
            );

            // Vision section
            gsap.fromTo('.about-vision',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    scrollTrigger: {
                        trigger: '.about-vision',
                        start: 'top 85%',
                    }
                }
            );

            // Features grid with stagger
            gsap.fromTo('.feature',
                {
                    y: 30,
                    opacity: 0,
                    scale: 0.9
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.about-features',
                        start: 'top 85%',
                    }
                }
            );

            // Parallax effect on images
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    gsap.set('.about-image-main img', {
                        y: progress * 40
                    });
                    gsap.set('.about-image-accent img', {
                        y: progress * -30
                    });
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="about" id="about" ref={sectionRef}>
            <div className="about-container">
                <div className="about-grid">
                    {/* Left - Image */}
                    <div className="about-image-wrapper">
                        <div className="about-image-main">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                                alt="Dubai Business District"
                            />
                        </div>
                        <div className="about-image-accent">
                            <img
                                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80"
                                alt="Dubai Skyline"
                            />
                        </div>
                        <div className="about-experience">
                            <span className="exp-number">10+</span>
                            <span className="exp-text">Years of Excellence</span>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="about-content">
                        <div className="about-label">
                            <span className="label-line"></span>
                            <span>About Us</span>
                        </div>

                        <h2 className="about-title">
                            Your Premier <span className="text-primary">Business Partner</span> in the UAE!
                        </h2>

                        <p className="about-text">
                            Start your business journey with <strong>GET</strong> — a distinguished business
                            consultancy nestled in the heart of the UAE. We specialize in delivering expert
                            licensing services, making your business establishment in the UAE a seamless
                            and successful experience.
                        </p>

                        <p className="about-text">
                            Our dedicated team excels in navigating legal procedures, preparing essential
                            documents, and securing permissions for businesses of all sizes. With extensive
                            experience across all Dubai free zones and mainland, we are your one-stop
                            solution for business setup in the UAE.
                        </p>

                        <div className="about-vision">
                            <h3 className="vision-title">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16v-4M12 8h.01" />
                                </svg>
                                Our Vision
                            </h3>
                            <p className="vision-text">
                                At <strong>GET</strong>, we envision being the foremost choice for businesses
                                seeking expert guidance in establishing and thriving in the UAE market. We aim
                                to provide seamless solutions, ensuring our clients' success in their ventures,
                                and becoming a trusted partner in their business journey.
                            </p>
                        </div>

                        <div className="about-features">
                            <div className="feature">
                                <div className="feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <span>Expert Licensing</span>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <span>Legal Navigation</span>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <span>Document Preparation</span>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <span>Complete Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
