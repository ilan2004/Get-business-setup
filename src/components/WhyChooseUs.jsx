import { useEffect, useRef } from 'react';
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

        const elements = sectionRef.current?.querySelectorAll('.animate-why');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="why-choose-us" id="why-us" ref={sectionRef}>
            <div className="why-container">
                <div className="why-content">
                    {/* Left - Text */}
                    <div className="why-text animate-why">
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

                    {/* Right - Cards */}
                    <div className="why-cards">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="why-card animate-why"
                                style={{ animationDelay: `${index * 0.1}s` }}
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
