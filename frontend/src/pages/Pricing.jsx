import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import homeData from '../data/homeContent.json';
import { CheckCircle } from 'lucide-react';

const Pricing = () => {
    const { applySuccessfully, footerCTA } = homeData;

    return (
        <div className="page-wrapper">
            <Header />

            <main>
                {/* Apply Successfully Section (Pricing Options) */}
                <section className="apply-section" style={{ backgroundColor: '#f8fafc', paddingBottom: '8rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            {applySuccessfully.title}
                        </h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.7', marginBottom: '4rem' }}>
                            {applySuccessfully.description}
                        </p>

                        <div className="apply-cards">
                            {applySuccessfully.cards.map((card, index) => (
                                <div key={index} className="apply-card" style={{
                                    border: index === 0 ? '2px solid #6366f1' : '1px solid #e2e8f0',
                                    backgroundColor: 'white',
                                    borderRadius: '16px',
                                    padding: '3rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    position: 'relative'
                                }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', height: '60px' }}>
                                        {card.title}
                                    </h3>
                                    <ul style={{ flex: 1 }}>
                                        {card.points.map((point, pIndex) => (
                                            <li key={pIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem', fontSize: '1rem', color: '#475569' }}>
                                                <CheckCircle size={20} color="#10b981" fill="#10b981" textAnchor="middle" style={{ minWidth: '20px', color: 'white' }} />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer CTA (Green Ribbon) */}
                <section className="footer-cta">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2>{footerCTA.text}</h2>
                        <p style={{ marginBottom: '2rem' }}>{footerCTA.subtext}</p>
                        <button className="btn" style={{
                            backgroundColor: '#6366f1',
                            color: 'white',
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            fontWeight: '600'
                        }}>
                            {footerCTA.button}
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Pricing;
