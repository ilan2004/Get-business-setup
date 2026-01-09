import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [activeTab, setActiveTab] = useState('main');
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    const mainServices = [
        {
            icon: '🏆',
            title: 'Golden Visa Services',
            description: 'Investor, Talent & Employment visas',
            link: '/golden-visa',
            image: '/images/golden_visa_1767939543375.png'
        },
        {
            icon: '🏢',
            title: 'Dubai Mainland Company Formation',
            description: 'Complete mainland business setup',
            link: '/mainland-formation',
            image: '/images/mainland_formation_1767939560431.png'
        },
        {
            icon: '🌐',
            title: 'Freezone & Offshore Company Set-up',
            description: 'All UAE free zones covered',
            link: '/freezone-offshore',
            image: '/images/freezone_setup_1767939578629.png'
        },
        {
            icon: '📊',
            title: 'Business Consulting Services',
            description: 'Expert business guidance',
            link: '/business-consulting',
            image: '/images/business_consulting_1767939607705.png'
        },
        {
            icon: '📋',
            title: 'Business Licence Renewal',
            description: 'Renewals and amendments',
            link: '/licence-renewal',
            image: '/images/license_renewal_1767939624511.png'
        },
        {
            icon: '⚖️',
            title: 'Notary Services (Dubai Court)',
            description: 'Legal documentation support',
            link: '/dubai-courts',
            image: '/images/dubai_courts_1767939642130.png'
        },
        {
            icon: '🛂',
            title: 'Immigration & Labour Works',
            description: 'Work permits and visas',
            link: '/immigration-labour',
            image: '/images/golden_visa_1767939543375.png'
        },
        {
            icon: '👔',
            title: 'Corporate PRO Services',
            description: 'Government liaison services',
            link: '/corporate-pro',
            image: '/images/business_consulting_1767939607705.png'
        },
        {
            icon: '🏛️',
            title: 'Dubai Economy Department (DED)',
            description: 'DED related services',
            link: '/ded-services',
            image: '/images/mainland_formation_1767939560431.png'
        },
        {
            icon: '⚖️',
            title: 'Dubai Courts & Public Prosecution',
            description: 'Legal proceedings support',
            link: '/dubai-courts',
            image: '/images/dubai_courts_1767939642130.png'
        },
    ];

    const additionalServices = [
        'Translation (Legal & Normal)',
        'Emirates ID & Medical Services',
        'Visit Visa & Tourist Visa Services',
        'Family Visa & Dependent Visa Services',
        'Insurance & VAT Registration',
        'Attestation (Education & Non-Education)',
        'Corporate Bank Account Opening',
        'Police Clearance Certificate (PCC)',
        'Community Development Authority (CDA)',
        'Ministry of Health (MOH)',
        'Dubai Civil Aviation (DCAA)',
        'Tenancy Contract Registration',
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

        const elements = sectionRef.current?.querySelectorAll('.animate-service');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll logic
    useEffect(() => {
        const slider = document.querySelector('.services-slider');
        if (!slider) return;

        let intervalId;

        const autoScroll = () => {
            if (isPaused) return;

            // Check if we reached the end
            if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: 350, behavior: 'smooth' }); // Scroll by approximately one card width
            }
        };

        intervalId = setInterval(autoScroll, 2000);

        return () => clearInterval(intervalId);
    }, [isPaused, activeTab]);

    const scrollLeft = () => {
        const slider = document.querySelector('.services-slider');
        if (slider) slider.scrollBy({ left: -350, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const slider = document.querySelector('.services-slider');
        if (slider) slider.scrollBy({ left: 350, behavior: 'smooth' });
    };

    return (
        <section className="services" id="services" ref={sectionRef}>
            {/* Background Decoration */}
            <div className="services-bg">
                <div className="services-bg-shape"></div>
            </div>

            <div className="services-container">
                {/* Header */}
                <div className="services-header animate-service">
                    <div className="header-content">
                        <div className="services-label">
                            <span className="label-line"></span>
                            <span>Our Expertise</span>
                        </div>
                        <h2 className="services-title">
                            Stay Updated On The <br />
                            <span className="text-primary">Ever-Evolving Dubai Economy</span>
                        </h2>
                        <p className="services-subtitle">
                            The bustling UAE is the business hub of the world. To be a successful entrepreneur,
                            it is vital to keep up with the constantly changing business scenario in the country.
                        </p>
                    </div>
                </div>

                {/* Tab Buttons - Keeping these as filter controls */}
                <div className="services-tabs animate-service">
                    <button
                        className={`tab-btn ${activeTab === 'main' ? 'active' : ''}`}
                        onClick={() => setActiveTab('main')}
                    >
                        Main Services
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'additional' ? 'active' : ''}`}
                        onClick={() => setActiveTab('additional')}
                    >
                        Additional Services
                    </button>

                    {/* Navigation Arrows for Slider */}
                    {activeTab === 'main' && (
                        <div className="slider-nav">
                            <button className="nav-btn prev" onClick={scrollLeft} aria-label="Previous">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button className="nav-btn next" onClick={scrollRight} aria-label="Next">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                {/* Main Services Slider */}
                {activeTab === 'main' && (
                    <div
                        className="services-slider animate-service"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onClick={() => setIsPaused(true)} // Stop on click as requested
                    >
                        {mainServices.map((service, index) => (
                            <div
                                key={index}
                                className="service-card-new"
                                onClick={() => service.link && navigate(service.link)}
                            >
                                <div className="card-image-area">
                                    <div className="card-overlay">
                                        <span className="card-tag">Business Setup</span>
                                    </div>
                                    <img src={service.image} alt={service.title} className="card-bg-image" />
                                </div>
                                <div className="card-content">
                                    <h3 className="card-title">{service.title}</h3>
                                    <p className="card-desc">{service.description}</p>
                                    <button className="btn-explore">
                                        Explore More
                                        <span className="btn-dot"></span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Additional Services List (Kept as grid/list) */}
                {activeTab === 'additional' && (
                    <div className="additional-services animate-service">
                        <div className="additional-grid">
                            {additionalServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="additional-item"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <div className="additional-bullet">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <circle cx="12" cy="12" r="5" />
                                        </svg>
                                    </div>
                                    <span>{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Services;
