import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import './Process.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Process = () => {
    const sectionRef = useRef(null);
    const nav = useNavigate();

    useEffect(() => {
        const section = sectionRef.current;
        const features = section.querySelectorAll('.process-step');
        const featureBgs = section.querySelectorAll('.step-bg');

        // Initial positions for the scattered effect
        const featureStartPositions = [
            { top: 20, left: 15 },
            { top: 15, left: 50 },
            { top: 25, left: 80 },
            { top: 50, left: 85 },
            { top: 80, left: 80 },
            { top: 85, left: 50 },
            { top: 80, left: 20 }
        ];

        // Set initial scattered positions
        features.forEach((feature, index) => {
            if (featureStartPositions[index]) {
                const pos = featureStartPositions[index];
                gsap.set(feature, {
                    top: `${pos.top}%`,
                    left: `${pos.left}%`
                });
            }
        });

        // Get initial dimensions for morphing
        const featureStartDimensions = [];
        featureBgs.forEach(bg => {
            const rect = bg.getBoundingClientRect();
            featureStartDimensions.push({
                width: rect.width,
                height: rect.height
            });
        });

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "+=300%", // 3x scroll distance
                pin: true,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;

                    // Phase 1: Header Exit (0% - 33%)
                    if (progress <= 0.33) {
                        const headerProgress = progress / 0.33;
                        gsap.set('.process-intro', {
                            y: `${-100 * headerProgress}%`,
                            opacity: 1 - headerProgress
                        });
                    } else {
                        gsap.set('.process-intro', { opacity: 0 });
                    }

                    // Phase 2: Convergence (0% - 50%)
                    if (progress <= 0.5) {
                        const convergeProgress = progress / 0.5;

                        // Move steps to center
                        features.forEach((feature, index) => {
                            if (!featureStartPositions[index]) return;
                            const original = featureStartPositions[index];
                            // Shift convergence slightly down (52%) and right (54%) as per user request
                            // Mobile adjustment: "just a bit up (53->51)"
                            const isMobile = window.innerWidth < 768;
                            const targetTop = isMobile ? 51 : 52;
                            const targetLeft = isMobile ? 62 : 54;

                            const currentTop = original.top + (targetTop - original.top) * convergeProgress;
                            const currentLeft = original.left + (targetLeft - original.left) * convergeProgress;

                            gsap.set(feature, {
                                top: `${currentTop}%`,
                                left: `${currentLeft}%`
                            });
                        });

                        // Morph backgrounds
                        featureBgs.forEach((bg, index) => {
                            // Target size is roughly 3rem (48px)
                            const targetSize = 48;
                            if (!featureStartDimensions[index]) return;

                            const startDim = featureStartDimensions[index];
                            const currentWidth = startDim.width + (targetSize - startDim.width) * convergeProgress;
                            const currentHeight = startDim.height + (targetSize - startDim.height) * convergeProgress;
                            const currentRadius = 0.5 + (2 - 0.5) * convergeProgress; // rem

                            gsap.set(bg, {
                                width: `${currentWidth}px`,
                                height: `${currentHeight}px`,
                                borderRadius: `${currentRadius}rem`
                            });
                        });

                        // Fade out text labels early
                        if (progress <= 0.2) {
                            const textProgress = progress / 0.2;
                            gsap.set('.step-content', { opacity: 1 - textProgress });
                        } else {
                            gsap.set('.step-content', { opacity: 0 });
                        }
                    }

                    // Phase 3: Transition to CTA (50% - 75%)
                    if (progress >= 0.5) {
                        gsap.set('.process-steps-container', { opacity: 0 });
                        gsap.set('.process-cta-container', { opacity: 1 });

                        if (progress <= 0.75) {
                            const ctaProgress = (progress - 0.5) / 0.25;
                            // Expand circle to button size
                            const currentWidth = 3 + (20 - 3) * ctaProgress; // rem
                            const currentHeight = 3 + (4 - 3) * ctaProgress; // rem

                            gsap.set('.cta-morph-bg', {
                                width: `${currentWidth}rem`,
                                height: `${currentHeight}rem`
                            });
                        } else {
                            gsap.set('.cta-morph-bg', { width: '20rem', height: '4rem' });
                        }
                    } else {
                        gsap.set('.process-steps-container', { opacity: 1 });
                        gsap.set('.process-cta-container', { opacity: 0 });
                    }

                    // Phase 4: Final Reveal (75% - 100%)
                    if (progress >= 0.75) {
                        const finalProgress = (progress - 0.75) / 0.25;

                        gsap.set('.process-final-content', {
                            opacity: finalProgress,
                            y: 20 - (20 * finalProgress)
                        });

                        gsap.set('.cta-text', { opacity: finalProgress });
                    } else {
                        gsap.set('.process-final-content', { opacity: 0 });
                        gsap.set('.cta-text', { opacity: 0 });
                    }
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="process-section" ref={sectionRef}>
            {/* Intro Header */}
            <div className="process-intro">
                <div className="intro-badge">Simple Process</div>
                <h2>Your Business Journey <br /><span className="text-secondary">Simplified</span></h2>
                <p>We handle all the complexities so you can focus on your vision.</p>
            </div>

            {/* Scattered Steps */}
            <div className="process-steps-container">
                {[
                    'Initial Consultation',
                    'Document Collection',
                    'Name Approval',
                    'License Issuance',
                    'Visa Processing',
                    'Bank Opening',
                    'Business Launch'
                ].map((step, i) => (
                    <div className="process-step" key={i}>
                        <div className="step-bg"></div>
                        <div className="step-content">
                            <span className="step-num">0{i + 1}</span>
                            <span className="step-text">{step}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Final CTA Container */}
            <div className="process-cta-container">
                <div className="process-final-content">
                    <h2>Ready to Start?</h2>
                    <p>Launch your business in Dubai today.</p>
                </div>

                <div className="cta-morph-bg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    <span className="cta-text">Get Your License Now</span>
                </div>
            </div>
        </section>
    );
};

export default Process;
