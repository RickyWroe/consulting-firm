import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        // Intersection Observer for fade-in animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            number: '01',
            title: 'Strategy',
            description: 'We develop comprehensive strategies that align with your business goals and market opportunities, ensuring sustainable competitive advantage.'
        },
        {
            number: '02',
            title: 'Operations',
            description: 'Optimize your operations for efficiency and scalability. We identify bottlenecks and implement solutions that drive measurable results.'
        },
        {
            number: '03',
            title: 'Transformation',
            description: 'Navigate complex organizational changes with confidence. We guide you through digital transformation and cultural evolution.'
        }
    ];

    return (
        <div className="page-transition">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero__content">
                        <h1 className="hero__title">
                            We help businesses<br />
                            reach their peak.
                        </h1>
                        <p className="hero__subtitle">
                            Strategic consulting for forward-thinking organizations. We partner with leaders
                            to solve complex challenges and create lasting impact.
                        </p>
                        <div className="hero__cta">
                            <Link to="/contact" className="btn btn--primary btn--large">
                                Start a Project
                            </Link>
                            <Link to="/about" className="btn btn--secondary btn--large">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hero__scroll-indicator">
                    <span>Scroll</span>
                    <div className="hero__scroll-line"></div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section section--large services">
                <div className="container">
                    <div className="mb-16 fade-in">
                        <h2 className="mb-4">What we do</h2>
                        <p className="text-lg text-gray" style={{ maxWidth: '600px' }}>
                            We bring clarity to complexity, helping organizations navigate
                            challenges and unlock their full potential.
                        </p>
                    </div>

                    <div className="services__grid">
                        {services.map((service, index) => (
                            <div
                                key={service.number}
                                className="service-card fade-in"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="service-card__number">{service.number}</div>
                                <h3 className="service-card__title">{service.title}</h3>
                                <p className="service-card__description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section--large" style={{ backgroundColor: '#000', color: '#fff' }}>
                <div className="container text-center fade-in">
                    <h2 className="mb-6">Ready to transform your business?</h2>
                    <p className="text-lg mb-10" style={{ color: '#737373', maxWidth: '500px', margin: '0 auto var(--spacing-10)' }}>
                        Let's discuss how we can help you achieve your strategic objectives.
                    </p>
                    <Link to="/contact" className="btn btn--secondary" style={{ borderColor: '#fff', color: '#fff' }}>
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
