import { useEffect, useRef } from 'react';
import './LatestEvents.css';

const LatestEvents = () => {
    const sectionRef = useRef(null);

    const events = [
        {
            title: 'Indo-Pacific Ministerial Forum',
            client: 'EEAS',
            image: 'https://cdn.prod.website-files.com/66201889636e55efeaf3e93e/692eb03649afdacde4dfa253_EUIPMF25-01.jpg'
        },
        {
            title: 'Roundtable on Consumers and Personalization',
            client: 'CCIA',
            image: 'https://cdn.prod.website-files.com/66201889636e55efeaf3e93e/692eb74b06fee44f54d76dd8_FG_251120_CCIA_3%20(1).jpg'
        },
        {
            title: 'BNP Paribas Fortis European Open',
            client: 'Tennium',
            image: 'https://cdn.prod.website-files.com/66201889636e55efeaf3e93e/68ff856ccb0be2e6740035f5_EVENT%20HOSTESS%2C%20EVENT%20STEWARDESS%2C%20EVENT%20STAFFING.jpg'
        },
        {
            title: 'Global Gateway Forum',
            client: 'European Commission',
            image: 'https://cdn.prod.website-files.com/66201889636e55efeaf3e93e/68f8c3ef9d2225b9748ad520_SQUARE%2C%20BRUSSELS%20EVENT%2C%20EVENT%20MANAGEMENT%2C%20LIAISON%20OFFICER.jpg'
        },
        {
            title: 'Brand Activation',
            client: 'Spotify',
            image: 'https://cdn.prod.website-files.com/66201889636e55efeaf3e93e/68f745465451c02a98d10df2_EVENT%20MANAGEMENT%2C%20CREATIVE%20CONCEPTION%20EVENT.jpg'
        },
        {
            title: 'Bus World',
            client: 'MCV',
            image: 'https://cdn.prod.website-files.com/66201889636e55efeaf3e93e/68f8db09a538d6ea12168050_R6_O5863%20(1).jpg'
        },
        {
            title: 'New European Bauhaus Festival',
            client: 'VO EU',
            image: 'https://cdn.prod.website-files.com/66201889636e55efeaf3e93e/6911e6be198795632d07e4fc_NEB_Sept%20(6).jpg'
        },
        {
            title: 'Open Day',
            client: 'European Commission',
            image: 'https://cdn.prod.website-files.com/66201889636e55efeaf3e93e/690e104fccaf01a97a654702_EUROPEAN%20COMMISSION%20OPEN%20DAY%20BRUSSELS%20EVENT%20STAFF%20STAFFING.jpeg'
        }
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

        const elements = sectionRef.current?.querySelectorAll('.event-card');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="latest-events" ref={sectionRef}>
            {/* Marquee Title */}
            <div className="events-marquee">
                <div className="marquee-track">
                    <div className="marquee-content">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="marquee-text">LATEST EVENTS</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="events-container">
                <div className="events-grid">
                    {events.map((event, index) => (
                        <a
                            key={index}
                            href="#"
                            className="event-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="event-image">
                                <img src={event.image} alt={event.title} />
                                <div className="event-overlay"></div>
                            </div>
                            <div className="event-info">
                                <h3 className="event-title">{event.title}</h3>
                                <span className="event-client">{event.client}</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="events-cta">
                    <a href="#gallery" className="btn-gallery">
                        <span className="btn-gallery-circle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </span>
                        <span className="btn-gallery-text">See All Events Photos</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LatestEvents;
