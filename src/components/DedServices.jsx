import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './GoldenVisa.css';

const DedServices = () => {
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
                            <h1>Dubai Economy (DET) Services</h1>
                            <p className="gv-subtitle">Comprehensive Support for All Mainland Department of Economy & Tourism Transactions</p>
                        </header>

                        <section className="gv-section">
                            <h2>What is DET?</h2>
                            <p>
                                The <strong>Dubai Department of Economy and Tourism (DET)</strong>, formerly known as DED, is the government body responsible for setting and driving the economic agenda of the emirate of Dubai. It is the primary licensing authority for all mainland businesses. Navigating DET procedures correctly is critical for the legal operation of your business.
                            </p>
                        </section>

                        <section className="gv-section">
                            <h2>Our Key DET Services</h2>
                            <div className="gv-grid">
                                <div className="gv-card">
                                    <h3>Trade Name Reservation</h3>
                                    <p>Checking availability and reserving your preferred company name in compliance with guidelines.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Initial Approval</h3>
                                    <p>Obtaining the preliminary "No Objection" to start the business setup process.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Instant License</h3>
                                    <p>Issuing licenses in 5 minutes for specific activities without immediate lease requirements.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>License Amendment</h3>
                                    <p>Adding/removing activities, changing partners, or upgrading license types.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>License Cancellation</h3>
                                    <p>Proper legal liquidation and de-registration of companies to avoid future liabilities.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Fines Settlement</h3>
                                    <p>Checking inspection fines and assisting with settlement or grievances.</p>
                                </div>
                            </div>
                        </section>

                        <section className="gv-section">
                            <h2>Why Use a Consultant for DET Services?</h2>
                            <ul className="gv-list">
                                <li><strong>Activity Classification:</strong> There are thousands of activities. We ensure you select the exact code to match your business model.</li>
                                <li><strong>External Approvals:</strong> Many activities require extra approvals (e.g., from Municipality, Police). We know exactly the sequence.</li>
                                <li><strong>Typing Error Prevention:</strong> Mistakes in Arabic/English translations on names can be costly to fix.</li>
                            </ul>
                        </section>

                        <section className="gv-section">
                            <h2>Typical License Issuance Process</h2>
                            <ol className="gv-steps">
                                <li><strong>Activity Selection & Name Reservation</strong></li>
                                <li><strong>Initial Approval Issuance</strong></li>
                                <li><strong>Drafting MOA/LSA Agreement</strong></li>
                                <li><strong>Ejari (Tenancy) Attestation</strong></li>
                                <li><strong>Final Submission & Payment</strong></li>
                                <li><strong>License Release</strong></li>
                            </ol>
                        </section>

                        <section className="gv-section">
                            <h2>Frequently Asked Questions</h2>
                            <div className="gv-faq">
                                <div className="faq-item">
                                    <strong>What is the "Instant License"?</strong>
                                    <p>It's a DET service that allows issuing a license immediately without a tenancy contract for the first year, for specific low-risk activities.</p>
                                </div>
                                <div className="faq-item">
                                    <strong>How much does a Trade License cost?</strong>
                                    <p>Costs vary based on the activity (commercial vs professional) and the 5% market fee (rent tax). Contact us for a precise calculation.</p>
                                </div>
                                <div className="faq-item">
                                    <strong>Can I add activities later?</strong>
                                    <p>Yes, activities can be added or removed at any time through an amendment process.</p>
                                </div>
                            </div>
                        </section>

                        <div className="gv-cta-box">
                            <h3>Start Your DET Requirements Now</h3>
                            <p>Get your license issued or amended with zero hassle.</p>
                            <a href="tel:+971504274260" className="gv-cta-btn">Contact Us</a>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default DedServices;
