import './Partners.css';

const Partners = () => {
    // UAE Government partners from the flyer
    const partners = [
        { name: 'Government of Dubai', category: 'Government' },
        { name: 'Dubai Economy', category: 'Government' },
        { name: 'Dubai Municipality', category: 'Government' },
        { name: 'RTA', category: 'Government' },
        { name: 'Tasheel', category: 'Government' },
        { name: 'RAKEZ', category: 'Free Zone' },
        { name: 'Dubai Culture', category: 'Government' },
        { name: 'Dubai Police', category: 'Government' },
        { name: 'DMCC', category: 'Free Zone' },
        { name: 'EJAR', category: 'Government' },
        { name: 'Dubai Airport Freezone', category: 'Free Zone' },
        { name: 'JAFZA', category: 'Free Zone' },
        { name: 'SAIF Zone', category: 'Free Zone' },
        { name: 'IFZA', category: 'Free Zone' },
        { name: 'Dubai South', category: 'Free Zone' },
        { name: 'Creative City', category: 'Free Zone' },
        { name: 'Khalifa Port', category: 'Free Zone' },
        { name: 'Ajman Free Zone', category: 'Free Zone' },
        { name: 'TAD-BEER', category: 'Government' },
        { name: 'Dubai Courts', category: 'Government' },
    ];

    return (
        <section className="partners" id="partners">
            <div className="partners-container">
                <div className="partners-header">
                    <div className="partners-label">
                        <span className="label-line"></span>
                        <span>Our Partners</span>
                    </div>
                    <h2 className="partners-title">
                        Trusted by <span className="text-primary">50+ Government Entities</span>
                    </h2>
                    <p className="partners-subtitle">
                        We maintain direct relationships with all major UAE government departments and free zones,
                        ensuring smooth and efficient processing for your business needs.
                    </p>
                </div>

                <div className="partners-grid-animated">
                    {Array.from({ length: 30 }).map((_, index) => {
                        const row = Math.floor(index / 5);
                        const col = index % 5;

                        // Generate random starting positions
                        const randomX = (Math.random() - 0.5) * 1000; // -500px to 500px
                        const randomY = (Math.random() - 0.5) * 1000;
                        const randomRotate = (Math.random() - 0.5) * 360; // -180deg to 180deg
                        const randomScale = 0.5 + Math.random(); // 0.5 to 1.5

                        // Stagger effect
                        const delay = Math.random() * 1.5;

                        return (
                            <div
                                key={index}
                                className="partner-piece"
                                style={{
                                    '--row': row,
                                    '--col': col,
                                    '--random-x': `${randomX}px`,
                                    '--random-y': `${randomY}px`,
                                    '--random-r': `${randomRotate}deg`,
                                    '--random-s': randomScale,
                                    '--delay': `${delay}s`
                                }}
                            ></div>
                        );
                    })}
                </div>

                <div className="partners-note">
                    <div className="note-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 16v-4M12 8h.01" />
                        </svg>
                    </div>
                    <p>
                        <strong>Complete Coverage:</strong> We work with all UAE free zones, mainland authorities,
                        and government departments to provide you with comprehensive business setup solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Partners;
