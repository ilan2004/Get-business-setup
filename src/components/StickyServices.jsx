import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './StickyServices.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: 'Golden Visa Services',
        description: 'Secure your long-term residency in the UAE. We handle the entire application process for investors, entrepreneurs, and skilled professionals, ensuring a smooth path to your 10-year Golden Visa.',
        link: '/golden-visa',
        image: '/images/golden_visa_1767939543375.png',
        color: '#1a1a1a' // Dark card
    },
    {
        title: 'Mainland Company Formation',
        description: 'Establish your business anywhere in Dubai with 100% ownership. We guide you through DED registration, trade name reservation, and obtaining your commercial license efficiently.',
        link: '/mainland-formation',
        image: '/images/mainland_formation_1767939560431.png',
        color: '#252525' // Slightly lighter
    },
    {
        title: 'Freezone & Offshore Setup',
        description: 'Benefit from tax exemptions and simplified operations. We help you choose the right Freezone jurisdiction that aligns perfectly with your business model and operational needs.',
        link: '/freezone-offshore',
        image: '/images/freezone_setup_1767939578629.png',
        color: '#1a1a1a'
    },
    {
        title: 'Business Consulting',
        description: 'Strategic advice to grow your business. From market entry strategies to operational optimization, our experts provide the insights you need to succeed in the competitive Dubai market.',
        link: '/business-consulting',
        image: '/images/business_consulting_1767939607705.png',
        color: '#252525'
    },
    {
        title: 'Business Licence Renewal',
        description: 'Hassle-free license renewals. We monitor your expiry dates and manage the entire renewal process to ensure your business remains compliant with all regulatory requirements.',
        link: '/licence-renewal',
        image: '/images/license_renewal_1767939624511.png',
        color: '#1a1a1a'
    },
    {
        title: 'Dubai Courts & Notary',
        description: 'Official document clearing and notarization services. We assist with legal attestations, agreements, and power of attorney drafting to protect your business interests.',
        link: '/dubai-courts',
        image: '/images/dubai_courts_1767939642130.png',
        color: '#252525'
    },
    {
        title: 'Immigration & Labour',
        description: 'Complete visa and labour card processing for your team. We handle quota applications, offer letters, and entry permits, making employee onboarding seamless.',
        link: '/immigration-labour',
        image: '/images/golden_visa_1767939543375.png',
        color: '#1a1a1a'
    },
    {
        title: 'Corporate PRO Services',
        description: 'Dedicated PRO support for all government interactions. Save time and avoid penalties with our professional management of your visa processing and document clearing needs.',
        link: '/corporate-pro',
        image: '/images/business_consulting_1767939607705.png',
        color: '#252525'
    }
];

const ServiceCard = ({ service, index, total, navigate }) => {
    return (
        <div className="sticky-card" id={`card-${index}`}>
            <div className="sticky-card-inner">
                <div className="sticky-card-content">
                    <span className="card-number">{(index + 1).toString().padStart(2, '0')}</span>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <button onClick={() => navigate(service.link)} className="card-cta">
                        Learn More
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                </div>
                <div className="sticky-card-media">
                    <img src={service.image} alt={service.title} />
                </div>
            </div>
        </div>
    );
};

const StickyServices = () => {
    const container = useRef(null);
    const navigate = useNavigate();

    useGSAP(() => {
        const cards = gsap.utils.toArray('.sticky-card');

        // Pinned Intro Section
        ScrollTrigger.create({
            trigger: cards[0],
            start: 'top 35%',
            endTrigger: cards[cards.length - 1],
            end: 'top 30%',
            pin: '.services-intro',
            pinSpacing: false,
        });

        cards.forEach((card, index) => {
            const isLastCard = index === cards.length - 1;
            const cardInner = card.querySelector('.sticky-card-inner');

            if (!isLastCard) {
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top 35%',
                    endTrigger: '.services-outro', // Will define this element
                    end: 'top 65%',
                    pin: true,
                    pinSpacing: false,
                });

                // Stacking effect
                gsap.to(cardInner, {
                    y: `-${(cards.length - index) * 5}vh`, // Tuning for visual overlap
                    ease: 'none',
                    scale: 0.95 + (index * 0.01), // Slight scaling difference
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 35%',
                        endTrigger: '.services-outro',
                        end: 'top 65%',
                        scrub: true,
                    },
                });
            }
        });

    }, { scope: container });

    return (
        <div className="sticky-services-container" ref={container} id="services">

            <div className="services-intro">
                <div className="intro-content">
                    <span className="section-label">Our Expertise</span>
                    <h1>Comprehensive Business Solutions</h1>
                    <p>Tailored services to launch, grow, and protect your business in Dubai.</p>
                </div>
            </div>

            <div className="cards-wrapper">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        service={service}
                        index={index}
                        total={services.length}
                        navigate={navigate}
                    />
                ))}
            </div>

            <div className="services-outro">
                {/* Invisible trigger for animation end */}
            </div>
        </div>
    );
};

export default StickyServices;
