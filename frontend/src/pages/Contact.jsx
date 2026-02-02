import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import homeData from '../data/homeContent.json';
import { Mail, LifeBuoy, ChevronDown, ChevronUp } from 'lucide-react';

const Contact = () => {
    const { contactPage } = homeData;
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="page-wrapper">
            <Header />

            <main style={{ backgroundColor: 'var(--theme-bg)', minHeight: '100vh', paddingBottom: '4rem' }}>
                {/* Hero Ribbon */}
                <div className="login-hero-ribbon">
                    <h1>{contactPage.header.title}</h1>
                    <p>{contactPage.header.subtitle}</p>
                </div>

                {/* Contact Cards */}
                <div style={{
                    maxWidth: '1000px',
                    margin: '-4rem auto 0',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    padding: '0 2rem',
                    flexWrap: 'wrap',
                    position: 'relative',
                    zIndex: 10
                }}>
                    {contactPage.cards.map((card, index) => (
                        <div key={index} className="login-card-v2" style={{
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            flex: '1',
                            minWidth: '300px',
                            maxWidth: '400px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <div style={{ color: 'var(--theme-text-muted)', marginBottom: '1.5rem' }}>
                                {card.icon === 'mail' && <Mail size={48} strokeWidth={1} />}
                                {card.icon === 'lifebuoy' && <LifeBuoy size={48} strokeWidth={1} style={{ color: 'var(--accent-solid)' }} />}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--theme-text)' }}>{card.title}</h3>
                            <p style={{ color: 'var(--theme-text-muted)', marginBottom: '2rem', lineHeight: '1.6', fontSize: '0.95rem' }}>{card.description}</p>
                            <button className="btn-primary" style={{
                                width: '100%',
                                marginBottom: '1.5rem',
                                padding: '0.75rem 2rem',
                                borderRadius: '30px',
                            }}>
                                {card.buttonText}
                            </button>
                            <p style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                {card.footer}
                            </p>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div style={{ maxWidth: '800px', margin: '6rem auto 0', padding: '0 2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', color: 'var(--theme-text)', marginBottom: '0.5rem', fontWeight: 'bold' }}>{contactPage.faq.title}</h2>
                        <p style={{ color: 'var(--theme-text-muted)' }}>{contactPage.faq.subtitle}</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {contactPage.faq.questions.map((faq, index) => (
                            <div key={index} style={{
                                backgroundColor: 'var(--theme-card-bg)',
                                borderRadius: '4px',
                                border: '1px solid var(--theme-border)',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                overflow: 'hidden'
                            }}>
                                <button
                                    onClick={() => toggleFaq(index)}
                                    style={{
                                        width: '100%',
                                        padding: '1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        textAlign: 'left',
                                        background: 'var(--theme-card-bg)',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                        color: 'var(--theme-text)'
                                    }}
                                >
                                    <span style={{ marginRight: '1rem', fontWeight: 'bold' }}>&gt;</span>
                                    {faq.question}
                                </button>
                                {openFaqIndex === index && (
                                    <div style={{ padding: '0 1.5rem 1.5rem 2.5rem', color: 'var(--theme-text-muted)', lineHeight: '1.6' }}>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default Contact;
