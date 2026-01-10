import SEO from './SEO';
import Hero from './Hero';
import About from './About';
import ServicesGrid from './ServicesGrid';
import Process from './Process';
import WhyChooseUs from './WhyChooseUs';
import Partners from './Partners';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <SEO
                title="Your Premier Business Partner in Dubai, UAE"
                description="Start your business journey in Dubai with GET Business Setup. Expert consulting for Golden Visa, Company Formation, PRO Services, and licensing. 500+ businesses established with 10+ years of experience."
                keywords="business setup Dubai, company formation UAE, Dubai consultancy, business license Dubai, Golden Visa UAE, PRO services, freezone company, mainland business"
                url="/"
            />
            <Hero />
            <About />
            <ServicesGrid />
            <Process />
            <WhyChooseUs />
            <Partners />
            <Contact />
        </>
    );
};

export default Home;

