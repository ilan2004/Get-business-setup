import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';
import './GoldenVisa.css';

const BusinessConsulting = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="golden-visa-page">
            <SEO
                title="Business Consulting Services Dubai"
                description="Strategic business consulting for market entry, feasibility studies, and operational optimization in the UAE. Expert guidance for startups, SMEs, and foreign investors."
                keywords="business consulting Dubai, market entry UAE, feasibility study, business strategy Dubai, corporate structuring, startup consulting UAE"
                url="/business-consulting"
            />
            <Navbar />

            <main className="gv-main">
                <div className="gv-container">
                    <article className="gv-content">
                        <header className="gv-header">
                            <h1>Business Consulting Services</h1>
                            <p className="gv-subtitle">Strategic Expert Guidance for Sustainable Growth in the UAE</p>
                        </header>

                        <section className="gv-section">
                            <h2>Why Need Business Consulting in Dubai?</h2>
                            <p>
                                The UAE market is dynamic and competitive. Navigating regulations, understanding market trends, and optimizing operations require local expertise. Our <strong>Business Consulting Services</strong> provide actionable insights and strategic planning to help entrepreneurs, startups, and established enterprises make informed decisions and achieve their business goals.
                            </p>
                        </section>

                        <section className="gv-section">
                            <h2>Our Consulting Expertise</h2>
                            <div className="gv-grid">
                                <div className="gv-card">
                                    <h3>Market Entry Strategy</h3>
                                    <p>Comprehensive analysis and roadmaps for entering the UAE and MENA markets successfully.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Feasibility Studies</h3>
                                    <p> Detailed financial and operational assessments to validate business ideas before investment.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Operational Improvement</h3>
                                    <p>Streamlining processes, reducing costs, and enhancing efficiency for existing businesses.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Corporate Structuring</h3>
                                    <p>Advising on the best legal structures (LLC, Free Zone, Holding) for asset protection and tax efficiency.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>HR & Talent Strategy</h3>
                                    <p>Guidance on recruitment, labor laws, and building high-performance teams in the region.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Compliance & Risk</h3>
                                    <p>Ensuring your business meets all local regulatory requirements (UBO, ESR, AML).</p>
                                </div>
                            </div>
                        </section>

                        <section className="gv-section">
                            <h2>Who We Serve</h2>
                            <p>Our consulting solutions are tailored for a diverse range of clients:</p>
                            <ul className="gv-list">
                                <li><strong>Startups:</strong> From ideation to launch and fundraising readiness.</li>
                                <li><strong>SMEs:</strong> Scaling operations and professionalizing management.</li>
                                <li><strong>Foreign Investors:</strong> Local representation and market intelligence.</li>
                                <li><strong>Family Businesses:</strong> Succession planning and governance.</li>
                            </ul>
                        </section>

                        <section className="gv-section">
                            <h2>Our Methodology</h2>
                            <ol className="gv-steps">
                                <li><strong>Discovery:</strong> We listen to your challenges and understand your vision.</li>
                                <li><strong>Analysis:</strong> Deep dive into data, market research, and internal processes.</li>
                                <li><strong>Strategy Design:</strong> Developing a tailored action plan with clear KPIs.</li>
                                <li><strong>Implementation Support:</strong> We don't just plan; we help you execute and monitor progress.</li>
                            </ol>
                        </section>

                        <section className="gv-section">
                            <h2>Frequently Asked Questions</h2>
                            <div className="gv-faq">
                                <div className="faq-item">
                                    <strong>How much does a consultation cost?</strong>
                                    <p>We offer initial discovery calls to understand your needs. Project fees vary based on scope and complexity.</p>
                                </div>
                                <div className="faq-item">
                                    <strong>Do you help with bank account opening challenges?</strong>
                                    <p>Yes, we advise on the best banks for your profile and assist with compliance documentation.</p>
                                </div>
                                <div className="faq-item">
                                    <strong>Can you help re-structure an existing company?</strong>
                                    <p>Absolutely. We specialize in corporate restructuring for better liability management and operational control.</p>
                                </div>
                            </div>
                        </section>

                        <div className="gv-cta-box">
                            <h3>Transform Your Business Today</h3>
                            <p>Partner with experts who understand the pulse of the UAE market.</p>
                            <a href="tel:+971504274260" className="gv-cta-btn">Book a Strategy Call</a>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BusinessConsulting;
