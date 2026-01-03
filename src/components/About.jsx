import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = sectionRef.current?.querySelectorAll('.animate-about');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about" id="about" ref={sectionRef}>
            <div className="about-container">
                <div className="about-grid">
                    {/* Left - Image */}
                    <div className="about-image-wrapper animate-about">
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
                    <div className="about-content animate-about" style={{ animationDelay: '0.2s' }}>
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
