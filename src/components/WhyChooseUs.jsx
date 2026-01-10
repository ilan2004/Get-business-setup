import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const sectionRef = useRef(null);

    const reasons = [
        {
            icon: '🏛️',
            title: '50+ Government Partners',
            description: 'Direct relationships with Dubai & UAE government entities for faster processing.',
        },
        {
            icon: '⚡',
            title: 'Fast Processing',
            description: 'Quick turnaround times with efficient handling of all documentation.',
        },
        {
            icon: '💼',
            title: '500+ Businesses Established',
            description: 'Proven track record of successful company formations in UAE.',
        },
        {
            icon: '🌍',
            title: 'All Free Zones Covered',
            description: 'Expertise across all Dubai and UAE free zones and mainland.',
        },
        {
            icon: '📞',
            title: '24/7 Support',
            description: 'Round-the-clock assistance for all your business setup needs.',
        },
        {
            icon: '💰',
            title: 'Competitive Pricing',
            description: 'Transparent pricing with no hidden costs or surprises.',
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text section animations
            gsap.fromTo('.why-label',
                { x: -30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    scrollTrigger: {
                        trigger: '.why-text-section',
                        start: 'top 80%',
                    }
                }
            );

            gsap.fromTo('.why-title',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.1,
                    scrollTrigger: {
                        trigger: '.why-text-section',
                        start: 'top 80%',
                    }
                }
            );

            gsap.fromTo('.why-description',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: '.why-text-section',
                        start: 'top 75%',
                    }
                }
            );

            gsap.fromTo('.why-cta',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: '.why-text-section',
                        start: 'top 70%',
                    }
                }
            );

            // Cards staggered entrance with rotation
            const cards = gsap.utils.toArray('.why-card');
            cards.forEach((card, index) => {
                gsap.fromTo(card,
                    {
                        y: 80,
                        opacity: 0,
                        rotateX: 15,
                        scale: 0.9
                    },
                    {
                        y: 0,
                        opacity: 1,
                        rotateX: 0,
                        scale: 1,
                        duration: 0.7,
                        delay: index * 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: '.why-cards-section',
                            start: 'top 80%',
                        }
                    }
                );
            });

            // Icon animation on each card
            cards.forEach((card, index) => {
                const icon = card.querySelector('.card-icon');
                gsap.fromTo(icon,
                    { scale: 0, rotate: -180 },
                    {
                        scale: 1,
                        rotate: 0,
                        duration: 0.5,
                        delay: 0.3 + (index * 0.1),
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: '.why-cards-section',
                            start: 'top 80%',
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="why-choose-us" id="why-us" ref={sectionRef}>
            <div className="why-container">
                {/* Text Section */}
                <div className="why-text-section">
                    <div className="why-text">
                        <div className="why-label">
                            <span className="label-line"></span>
                            <span>Why Choose Us</span>
                        </div>
                        <h2 className="why-title">
                            Build Your Business<br />
                            <span className="text-secondary">We're With You</span>
                        </h2>
                        <p className="why-description">
                            At GET Business Setup, we don't just help you establish your business —
                            we become your trusted partner throughout your entrepreneurial journey
                            in the UAE. Our commitment to excellence and client satisfaction sets
                            us apart.
                        </p>

                        <div className="why-cta">
                            <a href="tel:+971504274260" className="btn btn-secondary">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                                +971 50 427 4260
                            </a>
                            <a href="mailto:info@getourism.com" className="btn btn-outline">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>

                {/* Cards Section - Simplified Grid Layout */}
                <div className="why-cards-section">
                    <div className="why-cards-grid">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="why-card"
                            >
                                <div className="card-icon">{reason.icon}</div>
                                <div className="card-content">
                                    <h3 className="card-title">{reason.title}</h3>
                                    <p className="card-description">{reason.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
