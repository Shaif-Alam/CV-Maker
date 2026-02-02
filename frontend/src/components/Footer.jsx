import React from 'react';
import { Link } from 'react-router-dom';
import homeData from '../data/homeContent.json';

const Footer = () => {
    const { footer } = homeData;

    return (
        <footer className="advanced-footer">
            <div className="footer-columns">
                {footer.columns.map((col, idx) => (
                    <div key={idx} className="footer-col">
                        <h4>{col.title}</h4>
                        <ul>
                            {col.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                    {typeof link === 'string' ? (
                                        <a href="#">{link}</a>
                                    ) : (
                                        <Link to={link.path}>{link.label}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="footer-bottom">
                <p>{footer.copyright} | {footer.bottomLinks.join(' | ')}</p>
            </div>
        </footer>
    );
};

export default Footer;
