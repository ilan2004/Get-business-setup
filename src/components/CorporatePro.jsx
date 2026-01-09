import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './GoldenVisa.css';

const CorporatePro = () => {
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
                            <h1>Corporate PRO Services</h1>
                            <p className="gv-subtitle">Professional Government Liaison Services for Hassle-Free Operations</p>
                        </header>

                        <section className="gv-section">
                            <h2>What are Corporate PRO Services?</h2>
                            <p>
                                <strong>Public Relations Officer (PRO)</strong> services involve handling all government-related documentation and clearance required for setting up and running a business in the UAE. From visa processing to license renewals and regulatory approvals, experienced PROs ensure your company remains compliant with UAE laws without the headache of managing bureaucracy yourself.
                            </p>
                        </section>

                        <section className="gv-section">
                            <h2>Why Outsource Your PRO Services?</h2>
                            <div className="gv-grid">
                                <div className="gv-card">
                                    <h3>Cost Efficiency</h3>
                                    <p>Eliminate the cost of hiring full-time in-house PROs, transport, and administrative overheads.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Time Saving</h3>
                                    <p>Our experts know exactly where to go and who to speak to, reducing processing times significantly.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Compliance Guarantee</h3>
                                    <p>Avoid fines and blacklisting by ensuring all deadlines and regulations are strictly adhered to.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Document Security</h3>
                                    <p>Professional handling of sensitive original documents with tracking and secure archiving.</p>
                                </div>
                            </div>
                        </section>

                        <section className="gv-section">
                            <h2>Our Scope of Services</h2>
                            <ul className="gv-list">
                                <li><strong>License Management:</strong> New setup, renewals, modifications, and cancellations.</li>
                                <li><strong>Visa Management:</strong> Employment, investor, and family visas processing.</li>
                                <li><strong>Government Approvals:</strong> DED, MOHRE, Immigration, Municipality, Civil Defence, etc.</li>
                                <li><strong>Legal Documentation:</strong> Attestations, translations, and Notary Public assistance.</li>
                                <li><strong>Labour Cards:</strong> Issuance, renewal, and amendment of electronic labour cards.</li>
                                <li><strong>Emirates ID:</strong> Typing and application management.</li>
                            </ul>
                        </section>

                        <section className="gv-section">
                            <h2>Frequently Asked Questions</h2>
                            <div className="gv-faq">
                                <div className="faq-item">
                                    <strong>How do you charge for PRO services?</strong>
                                    <p>We offer flexible models: a monthly retainer for high-volume corporate clients or a pay-per-transaction model for smaller businesses.</p>
                                </div>
                                <div className="faq-item">
                                    <strong>Do I need a Power of Attorney (POA)?</strong>
                                    <p>Typically, yes. A limited POA allows our PROs to sign applications and represent your company at government departments efficiently.</p>
                                </div>
                                <div className="faq-item">
                                    <strong>Do you cover all Emirates?</strong>
                                    <p>Yes, while our primary focus is Dubai, we assist with requirements across the UAE.</p>
                                </div>
                            </div>
                        </section>

                        <div className="gv-cta-box">
                            <h3>Streamline Your Operations Today</h3>
                            <p>Focus on your core business while we handle the red tape.</p>
                            <a href="tel:+971504274260" className="gv-cta-btn">Get a Quote</a>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CorporatePro;
