import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './GoldenVisa.css';

const LicenceRenewal = () => {
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
                            <h1>Business Licence Renewal Services</h1>
                            <p className="gv-subtitle">Stay Compliant and Avoid Penalties with Timely Renewals</p>
                        </header>

                        <section className="gv-section">
                            <h2>The Importance of Timely Renewal</h2>
                            <p>
                                In the UAE, maintaining a valid Trade License is mandatory for all business operations. Licenses must be renewed annually (or as per their validity term). Failure to renew on time can lead to severe consequences, including fines, blacklisting, and the freezing of corporate bank accounts. We ensure a seamless renewal process so you can focus on your business.
                            </p>
                        </section>

                        <section className="gv-section">
                            <h2>Consequences of Late Renewal</h2>
                            <ul className="gv-list">
                                <li><strong>Monetary Fines:</strong> Monthly penalties from DED or Free Zone authorities.</li>
                                <li><strong>Bank Account Freeze:</strong> Banks automatically block accounts with expired trade licenses.</li>
                                <li><strong>Visa Suspensions:</strong> Inability to apply for or renew employee visas.</li>
                                <li><strong>Supplier Issues:</strong> Utility providers and suppliers may suspend services.</li>
                            </ul>
                        </section>

                        <section className="gv-section">
                            <h2>Our Renewal Services</h2>
                            <div className="gv-grid">
                                <div className="gv-card">
                                    <h3>Trade License Renewal</h3>
                                    <p>Handling all paperwork with DED or Free Zone authorities for instant renewal.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Ejari Renewal</h3>
                                    <p>Assistance with renewing your office Tenancy Contract and Ejari registration.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>License Amendments</h3>
                                    <p>Modifying activities, changing partners, or updating address during renewal.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Approvals Management</h3>
                                    <p>Securing external approvals from bodies like RERA, KHDA, DHA, etc.</p>
                                </div>
                            </div>
                        </section>

                        <section className="gv-section">
                            <h2>Renewal Process</h2>
                            <ol className="gv-steps">
                                <li><strong>Notice:</strong> We proactively remind you before your license expires.</li>
                                <li><strong>Review:</strong> We check your current documents (Ejari, Partner IDs) for validity.</li>
                                <li><strong>Submission:</strong> We submit the renewal application to the relevant authority.</li>
                                <li><strong>Payment Voucher:</strong> We generate the payment voucher and handle payments.</li>
                                <li><strong>Delivery:</strong> Receive your renewed license digitally and updated bank records.</li>
                            </ol>
                        </section>

                        <section className="gv-section">
                            <h2>Required Documents</h2>
                            <ul className="gv-list">
                                <li>Copy of expired Trade License.</li>
                                <li>Valid Tenancy Contract & Ejari (for mainland).</li>
                                <li>Effectively valid Passport copies of all partners.</li>
                                <li>External approvals (if activity requires specially).</li>
                            </ul>
                        </section>

                        <section className="gv-section">
                            <h2>Frequently Asked Questions</h2>
                            <div className="gv-faq">
                                <div className="faq-item">
                                    <strong>Can I change my sponsor during renewal?</strong>
                                    <p>Yes, renewal is the best time to change your Local Service Agent or Corporate Sponsor if needed.</p>
                                </div>
                                <div className="faq-item">
                                    <strong>Do I need to visit the DED personally?</strong>
                                    <p>No, we handle the entire process remotely on your behalf.</p>
                                </div>
                                <div className="faq-item">
                                    <strong>How early can I renew?</strong>
                                    <p>You can typically start the renewal process 1 month before the expiry date.</p>
                                </div>
                            </div>
                        </section>

                        <div className="gv-cta-box">
                            <h3>Is Your License Expiring Soon?</h3>
                            <p>Don't wait for fines to pile up. Let us handle your renewal today.</p>
                            <a href="tel:+971504274260" className="gv-cta-btn">Renew Now</a>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LicenceRenewal;
