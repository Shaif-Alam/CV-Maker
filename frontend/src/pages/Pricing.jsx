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
                {/* Hero Ribbon */}
                <div className="login-hero-ribbon">
                    <h1>{applySuccessfully.title}</h1>
                    <p>{applySuccessfully.description}</p>
                </div>

                {/* Apply Successfully Section (Pricing Options) */}
                <section className="apply-section" style={{ backgroundColor: 'var(--theme-bg)', paddingBottom: '8rem', marginTop: '-4rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                        <div className="apply-cards">
                            {applySuccessfully.cards.map((card, index) => (
                                <div key={index} className="login-card-v2" style={{
                                    border: index === 0 ? '2px solid var(--accent-solid)' : '1px solid #e2e8f0',
                                    padding: '3rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    position: 'relative',
                                    textAlign: 'left'
                                }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', height: '60px', color: 'var(--theme-text)' }}>
                                        {card.title}
                                    </h3>
                                    <ul style={{ flex: 1, padding: 0 }}>
                                        {card.points.map((point, pIndex) => (
                                            <li key={pIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem', fontSize: '1rem', color: 'var(--theme-text-muted)' }}>
                                                <CheckCircle size={20} color="var(--accent-solid)" fill="var(--accent-solid)" style={{ minWidth: '20px', color: 'white' }} />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="btn-primary" style={{ marginTop: '2rem' }}>
                                        Select Plan
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="footer-cta">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2>{footerCTA.text}</h2>
                        <p style={{ marginBottom: '2rem' }}>{footerCTA.subtext}</p>
                        <button className="btn-primary" style={{ padding: '1rem 2.5rem' }}>
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
