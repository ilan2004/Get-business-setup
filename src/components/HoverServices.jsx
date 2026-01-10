import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HoverServices.css';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger);

const HoverServices = () => {
    const sectionRef = useRef(null);
    const previewRef = useRef(null);
    const navigate = useNavigate();
    const activeIndexRef = useRef(-1);

    const services = [
        {
            title: 'Golden Visa Services',
            link: '/golden-visa',
            image: '/images/golden_visa_1767939543375.png'
        },
        {
            title: 'Mainland Company Formation',
            link: '/mainland-formation',
            image: '/images/mainland_formation_1767939560431.png'
        },
        {
            title: 'Freezone & Offshore Setup',
            link: '/freezone-offshore',
            image: '/images/freezone_setup_1767939578629.png'
        },
        {
            title: 'Business Consulting',
            link: '/business-consulting',
            image: '/images/business_consulting_1767939607705.png'
        },
        {
            title: 'Business Licence Renewal',
            link: '/licence-renewal',
            image: '/images/license_renewal_1767939624511.png'
        },
        {
            title: 'Dubai Courts & Notary',
            link: '/dubai-courts',
            image: '/images/dubai_courts_1767939642130.png'
        },
        {
            title: 'Immigration & Labour',
            link: '/immigration-labour',
            image: '/images/golden_visa_1767939543375.png'
        },
        {
            title: 'Corporate PRO Services',
            link: '/corporate-pro',
            image: '/images/business_consulting_1767939607705.png'
        }
    ];

    useEffect(() => {
        // Create custom easing - exactly from original
        CustomEase.create(
            "hop",
            "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1"
        );

        const ctx = gsap.context(() => {
            // Stagger animate service items on scroll
            gsap.fromTo('.service-name',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.services-list',
                        start: 'top 85%'
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = (index) => {
        const preview = previewRef.current;
        if (!preview) return;
        if (activeIndexRef.current === index) return;

        // If there was a previous active item, trigger mouseout
        if (activeIndexRef.current !== -1) {
            const existingWrapper = preview.querySelector('.service-img-wrapper');
            if (existingWrapper) {
                const existingImg = existingWrapper.querySelector('img');
                gsap.to(existingImg, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power1.out',
                    onComplete: () => existingWrapper.remove()
                });
            }
        }

        activeIndexRef.current = index;

        // Create wrapper - exactly like original
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'service-img-wrapper';

        // Create image - exactly like original
        const img = document.createElement('img');
        img.src = services[index].image;
        gsap.set(img, { scale: 1.25, opacity: 0 });

        imgWrapper.appendChild(img);
        preview.appendChild(imgWrapper);

        // Animate clip-path reveal - exactly like original
        gsap.to(imgWrapper, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 0.5,
            ease: 'hop'
        });

        gsap.to(img, {
            opacity: 1,
            duration: 0.25,
            ease: 'power2.out'
        });

        gsap.to(img, {
            scale: 1,
            duration: 1.25,
            ease: 'hop'
        });
    };

    const handleMouseLeave = (index, event) => {
        const preview = previewRef.current;
        if (!preview) return;

        // Prevent if moving to child element
        if (event.relatedTarget && event.currentTarget.contains(event.relatedTarget)) {
            return;
        }

        if (activeIndexRef.current === index) {
            activeIndexRef.current = -1;
        }

        const wrapper = preview.querySelector('.service-img-wrapper');
        if (wrapper) {
            const img = wrapper.querySelector('img');
            gsap.to(img, {
                opacity: 0,
                duration: 0.5,
                ease: 'power1.out',
                onComplete: () => wrapper.remove()
            });
        }
    };

    return (
        <section className="services-section" id="services" ref={sectionRef}>
            {/* Preview container - centered, images appear here */}
            <div className="services-preview" ref={previewRef}></div>

            {/* Header label */}
            <div className="services-header">
                <p>Our Services</p>
            </div>

            {/* Services List - uses mix-blend-mode */}
            <div className="services-list">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-name"
                        onMouseOver={() => handleMouseEnter(index)}
                        onMouseOut={(e) => handleMouseLeave(index, e)}
                        onClick={() => navigate(service.link)}
                    >
                        <h1>{service.title}{index < services.length - 1 ? ',' : '.'}</h1>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HoverServices;
