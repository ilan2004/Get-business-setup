import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';
import './GoldenVisa.css';

const DubaiCourts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="golden-visa-page">
            <SEO
                title="Dubai Courts Services - Legal Documentation"
                description="Document notarization, legal attestations, power of attorney, MOA notarization, and Dubai Courts services for businesses and individuals. E-Notary available."
                keywords="Dubai courts services, legal notarization UAE, power of attorney Dubai, attestation Dubai, MOA notarization, e-notary services"
                url="/dubai-courts"
            />
            <Navbar />

            <main className="gv-main">
                <div className="gv-container">
                    <article className="gv-content">
                        <header className="gv-header">
                            <h1>Dubai Courts & Notary Services</h1>
                            <p className="gv-subtitle">Secure Your Official Documents with Legal Attestation</p>
                        </header>

                        <section className="gv-section">
                            <h2>Notary Public Services</h2>
                            <p>
                                <strong>Dubai Courts Notary Public</strong> services are essential for authenticating and witnessing the signing of important legal documents. Whether for business setup or personal matters, ensuring your documents are legally notarized gives them validity and enforceability within the UAE legal system.
                            </p>
                        </section>

                        <section className="gv-section">
                            <h2>Key Services We Facilitate</h2>
                            <div className="gv-grid">
                                <div className="gv-card">
                                    <h3>Memorandum of Association (MOA)</h3>
                                    <p>Notarization of company formation agreements and addendums for LLCS and Civil Companies.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Power of Attorney (POA)</h3>
                                    <p>Drafting and notarizing General or Special POAs to appoint representatives.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Wills & Probates</h3>
                                    <p>Registration of wills for non-Muslims to ensure asset distribution according to their wishes.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Legal Notices</h3>
                                    <p>Serving official legal notices through the Notary Public for disputes or demands.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Affidavits & Declarations</h3>
                                    <p>Attesting sworn statements for various official purposes.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Share Sale Agreements</h3>
                                    <p>Legalizing the transfer of company shares between partners.</p>
                                </div>
                            </div>
                        </section>

                        <section className="gv-section">
                            <h2>Electronic Notary (Remote)</h2>
                            <p>
                                Dubai Courts now offers <strong>e-Notary services</strong>, allowing many documents to be notarized via video call without visiting the courts physically. We assist in preparing the digital drafts, scheduling the video call, and finalizing the digitally signed document.
                            </p>
                        </section>

                        <section className="gv-section">
                            <h2>Private Notary vs. Public Notary</h2>
                            <ul className="gv-list">
                                <li><strong>Public Notary:</strong> Government officials located at Dubai Courts branches. Lower fees but fixed working hours.</li>
                                <li><strong>Private Notary:</strong> Licensed lawyers authorized to perform notary acts. Flexible hours and locations, but slightly higher fees. We work with trusted private notaries for urgent requirements.</li>
                            </ul>
                        </section>

                        <section className="gv-section">
                            <h2>Required Documents for Notarization</h2>
                            <ul className="gv-list">
                                <li>Original Emirates ID / Passport of all signatories.</li>
                                <li>Legal capacity documents (Trade License, Board Resolution) if signing on behalf of a company.</li>
                                <li>Draft of the document in Arabic (or dual column Arabic/English).</li>
                            </ul>
                        </section>

                        <section className="gv-section">
                            <h2>Frequently Asked Questions</h2>
                            <div className="gv-faq">
                                <div className="faq-item">
                                    <strong>Do documents need to be in Arabic?</strong>
                                    <p>Yes, the official language of the courts is Arabic. Documents can be bilingual, but the Arabic text prevails.</p>
                                </div>
                                <div className="faq-item">
                                    <strong>Can I notarize a foreign document?</strong>
                                    <p>Foreign documents must first be attested by the UAE Embassy in the origin country and MOFA in UAE before they can be used or notarized here.</p>
                                </div>
                                <div className="faq-item">
                                    <strong>What is the validity of a POA?</strong>
                                    <p>It depends on the text. Some are indefinite, while others (like for vehicle sale) may have a specific validity. You can revoke a POA at any time.</p>
                                </div>
                            </div>
                        </section>

                        <div className="gv-cta-box">
                            <h3>Need Legal Document Assistance?</h3>
                            <p>We draft, translate, and facilitate notarization for all your legal needs.</p>
                            <a href="tel:+971504274260" className="gv-cta-btn">Contact Us Now</a>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default DubaiCourts;
