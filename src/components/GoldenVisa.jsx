import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';
import './GoldenVisa.css';

// FAQ Schema for rich snippets
const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Can I work for any company with a Golden Visa?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Golden Visa holders can work for any employer in the UAE or be self-employed."
            }
        },
        {
            "@type": "Question",
            "name": "Do I need to live in the UAE to keep the Golden Visa?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, you can stay outside the UAE for more than 6 months without your visa being cancelled."
            }
        },
        {
            "@type": "Question",
            "name": "Can I sponsor my parents with a Golden Visa?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can sponsor your parents for a 10-year residency."
            }
        },
        {
            "@type": "Question",
            "name": "Is the UAE Golden Visa renewable?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, it is automatically renewable as long as the eligibility conditions are met."
            }
        },
        {
            "@type": "Question",
            "name": "What is the cost of UAE Golden Visa?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost varies depending on the category, medical insurance, and application channel. It includes government filing fees, medical test fees, and Emirates ID fees."
            }
        }
    ]
};

const GoldenVisa = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="golden-visa-page">
            <SEO
                title="UAE Golden Visa Services - 10-Year Residency"
                description="Get your 10-year UAE Golden Visa with expert assistance. We handle investor visas, professional visas, and long-term residency applications in Dubai. Complete guide for eligibility, documents & process."
                keywords="golden visa Dubai, UAE 10 year visa, investor visa UAE, long term residency Dubai, golden visa requirements, UAE residency visa, golden visa cost Dubai"
                url="/golden-visa"
                structuredData={faqStructuredData}
            />
            <Navbar />

            <main className="gv-main">
                <div className="gv-container">
                    <article className="gv-content">
                        <header className="gv-header">
                            <h1>How to Get a UAE Golden Visa</h1>
                            <p className="gv-subtitle">A Complete Guide for Investors, Professionals, and Families</p>
                        </header>

                        <section className="gv-section">
                            <h2>1. What is the UAE Golden Visa?</h2>
                            <p>
                                The <strong>UAE Golden Visa</strong> is a long-term residence visa which enables foreign talents to live, work or study in the UAE while enjoying exclusive benefits. Investors, entrepreneurs, scientists, outstanding students and graduates, humanitarian pioneers and frontline heroes are among those eligible for the Golden Visa.
                            </p>
                            <p>
                                Unlike the standard two-year residency visa, the Golden Visa UAE offers a renewable residence visa valid for 5 or 10 years, depending on the category. It is a game-changer for those seeking stability and long-term growth in the Emirates.
                            </p>
                        </section>

                        <section className="gv-section">
                            <h2>2. Key Benefits of the Golden Visa</h2>
                            <ul className="gv-list">
                                <li><strong>Long-term Residency:</strong> Valid for 5 or 10 years and renewable.</li>
                                <li><strong>No Sponsor Needed:</strong> You do not need an employer or a UAE national sponsor.</li>
                                <li><strong>Family Sponsorship:</strong> Sponsor your spouse and children (regardless of their age).</li>
                                <li><strong>Stay Outside UAE:</strong> You can stay outside the UAE for more than 6 months without invalidating your visa.</li>
                                <li><strong>Sponsor Support Staff:</strong> Ability to sponsor unlimited number of domestic helpers.</li>
                                <li><strong>Example of Stability:</strong> Provides security for your family's future in a world-class environment.</li>
                            </ul>
                        </section>

                        <section className="gv-section">
                            <h2>3. Who is Eligible?</h2>
                            <p>The UAE offers the Golden Visa to several categories of people:</p>
                            <div className="gv-grid">
                                <div className="gv-card">
                                    <h3>Investors</h3>
                                    <p>Real estate investors (min. AED 2M property) or public investors (min. AED 2M deposit/capital).</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Entrepreneurs</h3>
                                    <p>Owners of SMEs with revenue of AED 1M/year or sold a project for AED 7M+.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Specialized Talents</h3>
                                    <p>Doctors, scientists, creative people of culture and art, inventors, executives, and specialists in engineering and science.</p>
                                </div>
                                <div className="gv-card">
                                    <h3>Outstanding Students</h3>
                                    <p>High performing students in UAE secondary schools or graduates from UAE/top 100 universities worldwide.</p>
                                </div>
                            </div>
                        </section>

                        <section className="gv-section">
                            <h2>4. Types and Validity</h2>
                            <p>Generally, there are two main types based on validity:</p>
                            <ul>
                                <li><strong>10-Year Golden Visa:</strong> Typically for investors (AED 2M+), persons with specialized talents, and outstanding graduates.</li>
                                <li><strong>5-Year Golden Visa:</strong> Typically for real estate investors (rules have evolved, AED 2M is now the standard for 10-year in many cases, but specific 5-year categories for entrepreneurs exist).</li>
                            </ul>
                        </section>

                        <section className="gv-section">
                            <h2>5. Required Documents</h2>
                            <p>Documentation varies by category, but generally includes:</p>
                            <ul>
                                <li>Valid Passport (min. 6 months validity).</li>
                                <li>Proof of eligibility (Title Deed, Trade License, University Degree, Reference Letter, etc.).</li>
                                <li>Valid Health Insurance.</li>
                                <li>Passport-sized photographs.</li>
                                <li>Current UAE Visa (if applicable).</li>
                            </ul>
                        </section>

                        <section className="gv-section">
                            <h2>6. Step-by-Step Application Process</h2>
                            <ol className="gv-steps">
                                <li><strong>Check Eligibility:</strong> Determine which category you fit into.</li>
                                <li><strong>Gather Documents:</strong> Prepare all necessary legal and personal documents.</li>
                                <li><strong>Apply for Nomination:</strong> (If required) verification via relevant government bodies.</li>
                                <li><strong>Submit Application:</strong> Through ICA or GDRFA channels, or an accredited service provider like us.</li>
                                <li><strong>Medical Fitness Test:</strong> Complete the mandatory health screening.</li>
                                <li><strong>Visa Issuance:</strong> Once approved, your Golden Visa is stamped.</li>
                            </ol>
                        </section>

                        <section className="gv-section">
                            <h2>7. Cost and Fees</h2>
                            <p>
                                The cost of a UAE Golden Visa varies depending on the category, medical insurance, and application channel. It generally involves government filing fees, medical test fees, and Emirates ID fees. While it is a premium visa, the cost is an investment in a decade of stability. Contact us for the most current and exact breakdown.
                            </p>
                        </section>

                        <section className="gv-section">
                            <h2>8. Processing Time</h2>
                            <p>
                                Once all documents are submitted correctly, the approval process is efficient. It typically takes between <strong>48 hours to 2 weeks</strong> depending on the complexity of the profile (e.g., verifying international degrees or specialized talent accreditation).
                            </p>
                        </section>

                        <section className="gv-section">
                            <h2>9. Common Mistakes to Avoid</h2>
                            <ul>
                                <li>Submitting incomplete or unattested documents.</li>
                                <li>Applying under the wrong category.</li>
                                <li>Letting your current visa expire before the Golden Visa is processed.</li>
                                <li>Not having valid health insurance coverage.</li>
                            </ul>
                        </section>

                        <section className="gv-section">
                            <h2>10. Why Apply for a Golden Visa in UAE?</h2>
                            <p>
                                The UAE is one of the safest, most modern, and business-friendly countries in the world. A Golden Visa residence gives you the freedom to build a legacy, access world-class healthcare and education, and enjoy a tax-free income environment in a strategic global hub.
                            </p>
                        </section>

                        <section className="gv-section">
                            <h2>Frequently Asked Questions</h2>
                            <div className="gv-faq">
                                <div className="faq-item">
                                    <strong>Can I work for any company with a Golden Visa?</strong>
                                    <p>Yes, Golden Visa holders can work for any employer in the UAE or be self-employed.</p>
                                </div>
                                <div className="faq-item">
                                    <strong>Do I need to live in the UAE to keep the visa?</strong>
                                    <p>No, you can stay outside the UAE for more than 6 months without your visa being cancelled.</p>
                                </div>
                                <div className="faq-item">
                                    <strong>Can I sponsor my parents?</strong>
                                    <p>Yes, you can sponsor your parents for a 10-year residency.</p>
                                </div>
                                <div className="faq-item">
                                    <strong>Is the Golden Visa renewable?</strong>
                                    <p>Yes, it is automatically renewable as long as the eligibility conditions are arguably met.</p>
                                </div>
                                <div className="faq-item">
                                    <strong>Can I apply if I have a mortgage?</strong>
                                    <p>Yes, real estate investors with a mortgage can apply if they have paid off at least AED 2M or hold a specific NOC from the bank (rules subject to current regulations).</p>
                                </div>
                            </div>
                        </section>

                        <div className="gv-cta-box">
                            <h3>Ready to Secure Your UAE Golden Visa?</h3>
                            <p>Don't navigate the complex regulations alone. Our experts are here to handle the entire process for you.</p>
                            <a href="tel:+971504274260" className="gv-cta-btn">Contact Us Now</a>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default GoldenVisa;
