import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
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

    const values = [
        {
            title: 'Excellence',
            description: 'We pursue the highest standards in everything we do, delivering work that exceeds expectations and creates lasting value for our clients.'
        },
        {
            title: 'Integrity',
            description: 'We build trust through transparency, honesty, and ethical practices. Our reputation is built on doing what\'s right, not what\'s easy.'
        },
        {
            title: 'Innovation',
            description: 'We embrace new ideas and approaches, constantly evolving our methods to address the challenges of a rapidly changing business landscape.'
        },
        {
            title: 'Partnership',
            description: 'We work alongside our clients as true partners, invested in their success and committed to achieving results together.'
        }
    ];

    return (
        <div className="page-transition">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1 className="about-hero__title">About APEX</h1>
                    <p className="about-hero__subtitle">
                        We are a team of strategists, innovators, and problem-solvers dedicated
                        to helping businesses navigate complexity and achieve sustainable growth.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="section section--large">
                <div className="container">
                    <div className="about-content">
                        <div className="about-content__text fade-in">
                            <h3>Our Story</h3>
                            <p>
                                Founded in 2010, APEX Consulting was born from a simple belief: that every
                                organization has untapped potential waiting to be unlocked. Our founders,
                                veterans of leading global consulting firms, saw an opportunity to create
                                something different—a consultancy that combined world-class expertise with
                                a more personal, collaborative approach.
                            </p>
                            <p>
                                Today, we've grown into a trusted partner for organizations across industries,
                                from ambitious startups to Fortune 500 companies. Our success is measured not
                                by our size, but by the tangible impact we create for our clients.
                            </p>
                            <p>
                                We believe that the best solutions emerge from deep understanding, rigorous
                                analysis, and genuine partnership. That's why we take the time to truly
                                understand each client's unique context, challenges, and aspirations.
                            </p>
                        </div>

                        <div className="stats fade-in" style={{ transitionDelay: '200ms' }}>
                            <div className="stat">
                                <div className="stat__number">200+</div>
                                <div className="stat__label">Projects Completed</div>
                            </div>
                            <div className="stat">
                                <div className="stat__number">15+</div>
                                <div className="stat__label">Years Experience</div>
                            </div>
                            <div className="stat">
                                <div className="stat__number">50+</div>
                                <div className="stat__label">Team Members</div>
                            </div>
                            <div className="stat">
                                <div className="stat__number">98%</div>
                                <div className="stat__label">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section section--large values">
                <div className="container">
                    <div className="mb-16 fade-in">
                        <h2 className="mb-4">Our Values</h2>
                        <p className="text-lg" style={{ color: '#737373', maxWidth: '600px' }}>
                            These principles guide everything we do and shape how we work with our clients.
                        </p>
                    </div>

                    <div className="values__grid">
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className="value-item fade-in"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <h4 className="value-item__title">{value.title}</h4>
                                <p className="value-item__description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="section section--large">
                <div className="container">
                    <div className="about-content">
                        <div className="fade-in">
                            <h3>Our Approach</h3>
                            <p className="text-lg text-gray mb-8">
                                We believe that great consulting is about more than delivering recommendations.
                                It's about creating real, lasting change.
                            </p>
                        </div>

                        <div className="fade-in" style={{ transitionDelay: '200ms' }}>
                            <div className="mb-8">
                                <h4 className="mb-4">Discovery</h4>
                                <p className="text-gray">
                                    We begin every engagement by deeply understanding your business context,
                                    challenges, and goals. This foundation ensures our work is grounded in reality.
                                </p>
                            </div>
                            <div className="mb-8">
                                <h4 className="mb-4">Strategy</h4>
                                <p className="text-gray">
                                    We develop tailored strategies based on rigorous analysis and deep industry
                                    expertise, always focused on practical, actionable outcomes.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-4">Execution</h4>
                                <p className="text-gray">
                                    We work alongside your team to implement solutions, ensuring knowledge
                                    transfer and building internal capabilities for sustainable success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
