import { useEffect, useRef, useState } from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const sectionRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

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

    // Duplicate cards for infinite scroll effect
    const allCards = [...reasons, ...reasons, ...reasons];

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

    // Auto-scroll logic for cards with infinite loop
    useEffect(() => {
        const slider = document.querySelector('.why-cards');
        if (!slider) return;

        let intervalId;
        let currentIndex = reasons.length; // Start at middle set

        // Initial scroll to middle set
        const cards = slider.querySelectorAll('.why-card');
        if (cards.length > 0) {
            const card = cards[currentIndex];
            const cardLeft = card.offsetLeft;
            const cardWidth = card.offsetWidth;
            const sliderWidth = slider.offsetWidth;
            const scrollPosition = cardLeft - (sliderWidth / 2) + (cardWidth / 2);
            slider.scrollTo({ left: scrollPosition, behavior: 'auto' });
        }

        const autoScroll = () => {
            if (isPaused) return;

            const cards = slider.querySelectorAll('.why-card');
            if (cards.length === 0) return;

            currentIndex++;
            
            // Reset to middle set when reaching end of second set
            if (currentIndex >= reasons.length * 2) {
                currentIndex = reasons.length;
            }
            
            // Calculate position to center the card
            const card = cards[currentIndex];
            const cardLeft = card.offsetLeft;
            const cardWidth = card.offsetWidth;
            const sliderWidth = slider.offsetWidth;
            const scrollPosition = cardLeft - (sliderWidth / 2) + (cardWidth / 2);
            
            slider.scrollTo({ left: scrollPosition, behavior: 'smooth' });
        };

        intervalId = setInterval(autoScroll, 2500);

        return () => clearInterval(intervalId);
    }, [isPaused, reasons.length]);

    const scrollLeft = () => {
        const slider = document.querySelector('.why-cards');
        if (!slider) return;
        
        const cards = slider.querySelectorAll('.why-card');
        const sliderWidth = slider.offsetWidth;
        
        // Find the currently centered card
        let currentIndex = 0;
        cards.forEach((card, index) => {
            const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
            const sliderCenter = slider.scrollLeft + (sliderWidth / 2);
            if (Math.abs(cardCenter - sliderCenter) < card.offsetWidth) {
                currentIndex = index;
            }
        });
        
        // Scroll to previous card
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : cards.length - 1;
        const card = cards[prevIndex];
        const scrollPosition = card.offsetLeft - (sliderWidth / 2) + (card.offsetWidth / 2);
        slider.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const slider = document.querySelector('.why-cards');
        if (!slider) return;
        
        const cards = slider.querySelectorAll('.why-card');
        const sliderWidth = slider.offsetWidth;
        
        // Find the currently centered card
        let currentIndex = 0;
        cards.forEach((card, index) => {
            const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
            const sliderCenter = slider.scrollLeft + (sliderWidth / 2);
            if (Math.abs(cardCenter - sliderCenter) < card.offsetWidth) {
                currentIndex = index;
            }
        });
        
        // Scroll to next card
        const nextIndex = (currentIndex + 1) % cards.length;
        const card = cards[nextIndex];
        const scrollPosition = card.offsetLeft - (sliderWidth / 2) + (card.offsetWidth / 2);
        slider.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    };

    return (
        <section className="why-choose-us" id="why-us" ref={sectionRef}>
            <div className="why-container">
                {/* Text Section */}
                <div className="why-text-section">
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
                </div>

                {/* Cards Section with Horizontal Scroll */}
                <div className="why-cards-section">
                    <div className="why-cards-wrapper">
                        {/* Navigation Arrows */}
                        <button className="nav-btn left" onClick={scrollLeft} aria-label="Scroll Left">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <div 
                            className="why-cards"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            onClick={() => setIsPaused(!isPaused)}
                        >
                            {allCards.map((reason, index) => (
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
                        <button className="nav-btn right" onClick={scrollRight} aria-label="Scroll Right">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
