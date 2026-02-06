import { useState, useEffect } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        // Validate form
        if (!formData.firstName || !formData.email || !formData.message) {
            setStatus({
                type: 'error',
                message: 'Please fill in all required fields.'
            });
            setIsSubmitting(false);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({
                type: 'error',
                message: 'Please enter a valid email address.'
            });
            setIsSubmitting(false);
            return;
        }

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus({
            type: 'success',
            message: 'Thank you for your message. We\'ll be in touch shortly.'
        });
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            message: ''
        });
        setIsSubmitting(false);
    };

    return (
        <div className="page-transition">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <h1 className="about-hero__title">Get in Touch</h1>
                    <p className="about-hero__subtitle">
                        Ready to start a conversation? We'd love to hear about your challenges
                        and explore how we can help.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section section--large">
                <div className="container">
                    <div className="contact-content">
                        {/* Contact Info */}
                        <div className="contact-info fade-in">
                            <h3>Let's Talk</h3>
                            <p>
                                Whether you're looking to transform your organization, solve a complex
                                challenge, or simply explore possibilities, we're here to help.
                            </p>

                            <div className="contact-info__item">
                                <div className="contact-info__label">Email</div>
                                <div className="contact-info__value">hello@apexconsulting.com</div>
                            </div>

                            <div className="contact-info__item">
                                <div className="contact-info__label">Phone</div>
                                <div className="contact-info__value">+1 (555) 123-4567</div>
                            </div>

                            <div className="contact-info__item">
                                <div className="contact-info__label">Office</div>
                                <div className="contact-info__value">
                                    350 Fifth Avenue<br />
                                    New York, NY 10118
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="contact-form fade-in" style={{ transitionDelay: '200ms' }} onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project or challenge..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn--primary btn--large"
                                disabled={isSubmitting}
                                style={{ width: '100%' }}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {status.message && (
                                <div className={`form-status form-status--${status.type}`}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
