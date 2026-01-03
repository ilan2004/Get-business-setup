import { useEffect, useRef } from 'react';
import './Expertise.css';

const Expertise = () => {
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

        const elements = sectionRef.current?.querySelectorAll('.reveal-text');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="expertise" ref={sectionRef}>
            <div className="expertise-container">
                <div className="expertise-header">
                    <div className="expertise-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                        </svg>
                    </div>
                    <span className="expertise-label">Our expertise</span>
                </div>

                <div className="expertise-content">
                    <p className="expertise-text reveal-text">
                        We deliver expert <span className="highlight-green">event management</span> and{' '}
                        <span className="highlight-yellow">staffing services in Belgium and internationally,</span>{' '}
                        offering customised solutions that ensure flawless execution and exceptional experiences for every client.
                    </p>

                    <p className="expertise-text reveal-text" style={{ animationDelay: '0.2s' }}>
                        With over a decade of experience, we specialise in event management and services for{' '}
                        <span className="highlight-subtle">European institutions</span>,{' '}
                        <span className="highlight-subtle">international associations</span>,{' '}
                        <span className="highlight-subtle">political forums</span>, and{' '}
                        <span className="highlight-subtle">corporate clients</span>.
                    </p>
                </div>

                {/* Stats */}
                <div className="expertise-stats">
                    <div className="stat-item reveal-text" style={{ animationDelay: '0.3s' }}>
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item reveal-text" style={{ animationDelay: '0.4s' }}>
                        <span className="stat-number">100+</span>
                        <span className="stat-label">Events Organized</span>
                    </div>
                    <div className="stat-item reveal-text" style={{ animationDelay: '0.5s' }}>
                        <span className="stat-number">15+</span>
                        <span className="stat-label">Languages Covered</span>
                    </div>
                    <div className="stat-item reveal-text" style={{ animationDelay: '0.6s' }}>
                        <span className="stat-number">7+</span>
                        <span className="stat-label">Nationalities</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
