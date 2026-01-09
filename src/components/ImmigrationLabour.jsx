import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './GoldenVisa.css';

const ImmigrationLabour = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="golden-visa-page">
            <Navbar />

            <main className="gv-main">
                <div className="gv-container">
                    <article className="gv-content">
                        <header className="gv-header">
                            <h1>Immigration & Labour Services</h1>
                            <p className="gv-subtitle">Simplify Your Visa Processing with Expert Assistance</p>
                        </header>

                        <section className="gv-section">
                            <h2>Navigating UAE Immigration</h2>
                            <p>
                                Visa and labour regulations in the UAE are precise and constantly evolving. Whether you are hiring staff, bringing your family, or visiting for business, we provide end-to-end support for all your immigration needs, ensuring compliance with GDRFA and MOHRE regulations.
                            </p>
                        </section>

                        <section className="gv-section">
                            <h2>Our Visa Services</h2>
                            <div className="gv-grid">
                                <div className="gv-card">
                                    <h3>Employment Visas</h3>
                                    <p>Full processing from quota application and offer letters to visa stamping and labour contracts.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Partner/Investor Visas</h3>
                                    <p>Residency visas for company shareholders and owners, valid for 2 or 3 years.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Family Sponsorship</h3>
                                    <p>Sponsoring spouses, children, and parents. We handle file opening, medicals, and stamping.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Domestic Worker Visas</h3>
                                    <p>Assistance with sponsoring housemaids, nannies, and drivers under your personal sponsorship.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Golden Visas</h3>
                                    <p>Long-term 10-year residency for investors, talents, and property owners.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Visit / Tourist Visas</h3>
                                    <p>Short-term and long-term entry permits for business associates and family members.</p>
                                </div>
                            </div>
                        </section>

                        <section className="gv-section">
                            <h2>Labour (MOHRE) Services</h2>
                            <ul className="gv-list">
                                <li><strong>New Company Registration:</strong> Registering your entity with the Ministry of Human Resources and Emiratisation.</li>
                                <li><strong>Quota Management:</strong> Applying for and modifying visa quotas.</li>
                                <li><strong>Offer Letters & Contracts:</strong> Drafting and submitting legal labour contracts.</li>
                                <li><strong>NOCs & Permits:</strong> obtaining necessary work permits.</li>
                            </ul>
                        </section>

                        <section className="gv-section">
                            <h2>Typical Direct Residency Process</h2>
                            <ol className="gv-steps">
                                <li><strong>Entry Permit:</strong> Apply for an entry permit (if outside country) or status change (if inside).</li>
                                <li><strong>Medical Test:</strong> Complete medical fitness screening at government centers.</li>
                                <li><strong>Biometrics:</strong> Fingerprint scanning for Emirates ID.</li>
                                <li><strong>Visa Stamping:</strong> Final residency visa stamped in passport (or e-visa issued).</li>
                                <li><strong>Emirates ID:</strong> Card delivery to your provided address.</li>
                            </ol>
                        </section>

                        <section className="gv-section">
                            <h2>Frequently Asked Questions</h2>
                            <div className="gv-faq">
                                <div className="faq-item">
                                    <strong>What is the minimum salary to sponsor family?</strong>
                                    <p>Generally, a minimum salary of AED 4,000 (plus accommodation) is required to sponsor a spouse/children.</p>
                                </div>
                                <div className="faq-item">
                                    <strong>How long does an employment visa take?</strong>
                                    <p>The entire process typically takes 7-14 working days, depending on medical result speed.</p>
                                </div>
                                <div className="faq-item">
                                    <strong>Can I sponsor my parents?</strong>
                                    <p>Yes, but it requires a higher minimum salary (usually AED 20,000) and specific deposit requirements.</p>
                                </div>
                            </div>
                        </section>

                        <div className="gv-cta-box">
                            <h3>Need Visa Assistance?</h3>
                            <p>Avoid rejections and delays. Trust our experts for all your immigration files.</p>
                            <a href="tel:+971504274260" className="gv-cta-btn">Contact Us Now</a>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ImmigrationLabour;
