import { useEffect, useRef, useState } from 'react';
import './Services.css';

const Services = () => {
    const [activeTab, setActiveTab] = useState('main');
    const sectionRef = useRef(null);

    const mainServices = [
        {
            icon: '🏆',
            title: 'Golden Visa Services',
            description: 'Investor, Talent & Employment visas',
        },
        {
            icon: '🏢',
            title: 'Dubai Mainland Company Formation',
            description: 'Complete mainland business setup',
        },
        {
            icon: '🌐',
            title: 'Freezone & Offshore Company Set-up',
            description: 'All UAE free zones covered',
        },
        {
            icon: '📊',
            title: 'Business Consulting Services',
            description: 'Expert business guidance',
        },
        {
            icon: '📋',
            title: 'Business Licence Renewal',
            description: 'Renewals and amendments',
        },
        {
            icon: '⚖️',
            title: 'Notary Services (Dubai Court)',
            description: 'Legal documentation support',
        },
        {
            icon: '🛂',
            title: 'Immigration & Labour Works',
            description: 'Work permits and visas',
        },
        {
            icon: '👔',
            title: 'Corporate PRO Services',
            description: 'Government liaison services',
        },
        {
            icon: '🏛️',
            title: 'Dubai Economy Department (DED)',
            description: 'DED related services',
        },
        {
            icon: '⚖️',
            title: 'Dubai Courts & Public Prosecution',
            description: 'Legal proceedings support',
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

    return (
        <section className="services" id="services" ref={sectionRef}>
            {/* Background Decoration */}
            <div className="services-bg">
                <div className="services-bg-shape"></div>
            </div>

            <div className="services-container">
                {/* Header */}
                <div className="services-header animate-service">
                    <div className="services-label">
                        <span className="label-line"></span>
                        <span>What We Offer</span>
                    </div>
                    <h2 className="services-title">
                        Comprehensive <span className="text-primary">Business Services</span>
                    </h2>
                    <p className="services-subtitle">
                        From company formation to visa processing, we handle every aspect of
                        your business setup in the UAE with expertise and efficiency.
                    </p>

                    {/* Tab Buttons */}
                    <div className="services-tabs">
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
                    </div>
                </div>

                {/* Main Services Grid */}
                {activeTab === 'main' && (
                    <div className="services-grid animate-service">
                        {mainServices.map((service, index) => (
                            <div
                                key={index}
                                className="service-card"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="service-icon">{service.icon}</div>
                                <div className="service-content">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                </div>
                                <div className="service-arrow">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Additional Services List */}
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

                {/* CTA */}
                <div className="services-cta animate-service">
                    <p>Need a service not listed here?</p>
                    <a href="#contact" className="btn btn-primary">
                        Contact Us for Custom Solutions
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
