import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCard3D from './ServiceCard3D';
import './ServicesGrid.css'; // You might want to remove this if fully replaced, or keep for header styles

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: 'Golden Visa',
        description: 'Secure your 10-year residency in the UAE. We handle applications for investors and professionals.',
        link: '/golden-visa',
        icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
        title: 'Mainland Formation',
        description: 'Establish your business in Dubai with 100% ownership. DED registration and licensing guide.',
        link: '/mainland-formation',
        icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    },
    {
        title: 'Freezone Setup',
        description: 'Tax exemptions and simplified operations. Choose the right jurisdiction for your model.',
        link: '/freezone-offshore',
        icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
        title: 'Business Consulting',
        description: 'Strategic advice for market entry, feasibility studies, and operational optimization.',
        link: '/business-consulting',
        icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    },
    {
        title: 'Licence Renewal',
        description: 'Hassle-free license renewals. We monitor expiries and manage the entire process.',
        link: '/licence-renewal',
        icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
    },
    {
        title: 'Dubai Courts',
        description: 'Document clearing, notarization, legal attestations, and power of attorney drafting.',
        link: '/dubai-courts',
        icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
    },
    {
        title: 'Immigration',
        description: 'Visa and labour card processing. Quotas, offer letters, and employee onboarding.',
        link: '/immigration-labour',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
        title: 'PRO Services',
        description: 'Dedicated PRO support for government interactions, document clearing, and compliance.',
        link: '/corporate-pro',
        icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    }
];

const ServicesGrid = () => {
    const container = useRef(null);
    const cardRefs = useRef([]);
    const navigate = useNavigate();

    useGSAP(() => {
        const cards = cardRefs.current;
        if (!cards.length) return;

        const totalScrollHeight = window.innerHeight * 3;
        const totalCards = services.length;

        // Define animation logic as reusable functions or inline within matchMedia
        // Using matchMedia for responsive animations
        const mm = gsap.matchMedia();

        // 1. Desktop Logic (min-width: 769px)
        mm.add("(min-width: 769px)", () => {
            const cardsPerRow = 4;

            // Pinning is common, but context might differ
            ScrollTrigger.create({
                trigger: container.current.querySelector(".sc-cards-section"),
                start: "top top",
                end: () => `+=${totalScrollHeight}`,
                pin: true,
                pinSpacing: true,
                scrub: 1,
            });

            cards.forEach((card, index) => {
                if (!card) return;

                const rowIndex = Math.floor(index / cardsPerRow);
                const colIndex = index % cardsPerRow;

                // Spread 70% width
                const spreadWidth = 70;
                const startX = (100 - spreadWidth) / 2;
                const leftPos = startX + colIndex * (spreadWidth / (cardsPerRow - 1));

                // Vertical: 30% / 70% (Reduced gap from 25/75)
                const topPos = rowIndex === 0 ? 30 : 70;

                const rotation = -15 + colIndex * (30 / (cardsPerRow - 1));

                // Spread Animation
                gsap.to(card, {
                    left: `${leftPos}%`,
                    top: `${topPos}%`,
                    rotation: `${rotation}`,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: container.current.querySelector(".sc-cards-section"),
                        start: "top top",
                        end: () => `+=${window.innerHeight * 0.8}`,
                        scrub: 0.5,
                        id: `spread-d-${index}`,
                    },
                });

                // Flip Animation
                setupFlipAnimation(card, index, totalCards, cardsPerRow, rotation, totalScrollHeight);
            });
        });

        // 2. Mobile Logic (max-width: 768px)
        mm.add("(max-width: 768px)", () => {
            const cardsPerRow = 2; // 2 Columns

            ScrollTrigger.create({
                trigger: container.current.querySelector(".sc-cards-section"),
                start: "top top",
                end: () => `+=${totalScrollHeight}`,
                pin: true,
                pinSpacing: true,
                scrub: 1,
            });

            cards.forEach((card, index) => {
                if (!card) return;

                const rowIndex = Math.floor(index / cardsPerRow); // 0..3
                const colIndex = index % cardsPerRow; // 0..1

                // Spread width 80% (centered)
                // Col 0: 25%, Col 1: 75% roughly
                const leftPos = colIndex === 0 ? 25 : 75;

                // Vertical positions for 4 rows: spread 15% to 85%
                const topPos = 15 + rowIndex * 23;

                // Minimal tilt
                const rotation = colIndex === 0 ? -5 : 5;

                gsap.to(card, {
                    left: `${leftPos}%`,
                    top: `${topPos}%`,
                    rotation: `${rotation}`,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: container.current.querySelector(".sc-cards-section"),
                        start: "top top",
                        end: () => `+=${window.innerHeight * 0.8}`,
                        scrub: 0.5,
                        id: `spread-m-${index}`,
                    },
                });

                setupFlipAnimation(card, index, totalCards, cardsPerRow, rotation, totalScrollHeight);
            });
        });

        // Shared Flip Animation Logic
        function setupFlipAnimation(card, index, totalCards, cardsPerRow, baseRotation, totalScrollHeight) {
            const frontEl = card.querySelector(".sc-flip-card-front");
            const backEl = card.querySelector(".sc-flip-card-back");

            if (!frontEl || !backEl) return;

            const relativeIndex = index / totalCards;
            const spreadDuration = 0.3;
            const flipStart = spreadDuration + (relativeIndex * 0.4);
            const flipEnd = flipStart + 0.15;

            ScrollTrigger.create({
                trigger: container.current.querySelector(".sc-cards-section"),
                start: "top top",
                end: () => `+=${totalScrollHeight}`,
                scrub: 1,
                id: `rotate-flip-${index}`,
                onUpdate: (self) => {
                    const progress = self.progress;

                    if (progress >= flipStart && progress <= flipEnd) {
                        const animationProgress = (progress - flipStart) / (flipEnd - flipStart);

                        const frontRotation = -180 * animationProgress;
                        const backRotation = 180 - 180 * animationProgress;
                        const currentRotation = baseRotation * (1 - animationProgress);

                        gsap.set(frontEl, { rotateY: frontRotation });
                        gsap.set(backEl, { rotateY: backRotation });
                        gsap.set(card, {
                            rotate: currentRotation,
                            zIndex: 10 + Math.floor(animationProgress * 100)
                        });
                    } else if (progress > flipEnd) {
                        gsap.set(frontEl, { rotateY: -180 });
                        gsap.set(backEl, { rotateY: 0 });
                        gsap.set(card, { rotate: 0 });
                    } else if (progress < flipStart) {
                        gsap.set(frontEl, { rotateY: 0 });
                        gsap.set(backEl, { rotateY: 180 });
                        gsap.set(card, { rotate: baseRotation });
                    }
                },
            });
        }

    }, { scope: container });

    return (
        <section ref={container} className="services-grid-wrapper" id="services">
            {/* Retaining the header approach but inside the 3D Section or sticky above it? */}
            {/* The request was to USE the tool IN the section. The tool includes a header "Keep scrolling..." */}
            {/* We will use the existing header style but place it appropriately */}

            <div className="sc-cards-section">

                {/* Header overlay or part of the flow? */}
                {/* Let's put the header absolute at top to be visible initially */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    textAlign: 'center',
                    zIndex: 5,
                    width: '100%'
                }} className="services-grid-header">
                    <span className="section-label" style={{ display: 'block', color: 'var(--primary)', marginBottom: '1rem' }}>Our Expertise</span>
                    <h1 style={{ fontSize: '3rem', margin: 0 }}>Comprehensive Solutions for Your Business</h1>
                </div>

                {services.map((service, index) => (
                    <ServiceCard3D
                        key={index}
                        id={`card-${index + 1}`}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        colorTheme={index % 2 === 0 ? 'red' : 'blue'}
                        onClick={() => navigate(service.link)}
                        ref={(el) => (cardRefs.current[index] = el)}
                    />
                ))}
            </div>
        </section>
    );
};

export default ServicesGrid;
