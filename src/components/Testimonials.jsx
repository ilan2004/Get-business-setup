import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sectionRef = useRef(null);

    const testimonials = [
        {
            text: "Your collective dedication, problem-solving prowess, and collaborative spirit were instrumental in ensuring the seamless preparation of this significant event. It was a pleasure to collaborate with such an efficient and dedicated team.",
            author: "European External Action Service"
        },
        {
            text: "We have had a wonderful experience working with Elite Events and have decided to renew our contract with them for an additional year. Their staff are punctual, professional and we are able to fully count on them.",
            author: "German Marshall Fund"
        },
        {
            text: "With Elite Events you can rest assured that the tasks you assign them will be done professionally, no supervising necessary. What a breath of fresh air. Reliable, on-time, proactive and professional team.",
            author: "European Automobile Manufacturers' Association"
        },
        {
            text: "I would like to thank Elite-Events for their exemplary collaboration on the Mobile Information Unit project. Their organizational skills and meticulous attention to detail were extraordinary.",
            author: "European Parliament"
        },
        {
            text: "My company mainly works for EU Institutions organising high-level events. Elite Events now organise high-level events involving Ministers and delegations from 50 to 500 participants with complete satisfaction.",
            author: "TIPIK Communications Agency"
        },
        {
            text: "Thank you Elite-Events for a great job and proven professionalism!",
            author: "Association of European Energy Exchanges"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials" ref={sectionRef}>
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <span className="testimonials-label">If you are not already amazed,</span>
                    <h2 className="testimonials-title">
                        Read our clients <span className="highlight">success stories!</span>
                    </h2>
                </div>

                <div className="testimonials-slider">
                    <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-slide">
                                <div className="testimonial-card">
                                    <div className="testimonial-stars">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="testimonial-text">"{testimonial.text}"</p>
                                    <div className="testimonial-author">
                                        <span>- {testimonial.author.toUpperCase()}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="slider-controls">
                        <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous testimonial">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className="slider-dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button className="slider-btn next" onClick={nextSlide} aria-label="Next testimonial">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
