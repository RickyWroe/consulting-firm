import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div>
                        <div className="footer__logo">APEX</div>
                        <p className="footer__tagline">
                            Strategic consulting that transforms businesses and drives sustainable growth.
                        </p>
                    </div>

                    <div className="footer__links">
                        <Link to="/" className="footer__link">Home</Link>
                        <Link to="/about" className="footer__link">About</Link>
                        <Link to="/contact" className="footer__link">Contact</Link>
                    </div>
                </div>

                <div className="footer__bottom">
                    © {currentYear} APEX Consulting. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
