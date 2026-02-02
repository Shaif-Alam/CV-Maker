import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TEMPLATE_COMPONENTS } from '../config/templateMap';
import html2pdf from 'html2pdf.js';
import { ArrowLeft, Download as DownloadIcon, Star } from 'lucide-react';
import { TEMPLATE_TESTIMONIALS, DEFAULT_TESTIMONIALS } from '../data/testimonialsData';

const Download = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const resumeRef = useRef();

    // Get data passed from Builder
    const { cvData, selectedTemplate } = location.state || {};

    if (!cvData) {
        return (
            <div style={{ textAlign: 'center', padding: '4rem' }}>
                <h2>No resume data found.</h2>
                <button className="btn" onClick={() => navigate('/builder')}>Go to Builder</button>
            </div>
        );
    }

    const ActiveTemplate = TEMPLATE_COMPONENTS[selectedTemplate] || TEMPLATE_COMPONENTS['Cambridge'];

    const activeTestimonials = TEMPLATE_TESTIMONIALS[selectedTemplate] || DEFAULT_TESTIMONIALS;

    const handleDownload = () => {
        const element = resumeRef.current;
        const opt = {
            margin: 0,
            filename: `${cvData.personal.fullName || 'Resume'}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save();
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'var(--theme-bg)', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <div style={{
                backgroundColor: 'var(--theme-card-bg)',
                padding: '1rem 2rem',
                borderBottom: '1px solid var(--theme-border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'sticky',
                top: 70, // Below header
                zIndex: 40
            }}>
                <button
                    onClick={() => navigate('/builder', { state: { cvData, selectedTemplate } })} // Pass state back to edit
                    style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.5rem 1rem', border: '1px solid var(--theme-border)', borderRadius: '8px',
                        backgroundColor: 'var(--theme-card-bg)', cursor: 'pointer', fontWeight: '500', color: 'var(--theme-text)'
                    }}
                >
                    <ArrowLeft size={18} /> Back to Editor
                </button>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        onClick={handleDownload}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.75rem 1.5rem', border: 'none', borderRadius: '8px',
                            backgroundColor: '#10b981', color: 'white', cursor: 'pointer', fontWeight: '600',
                            boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.2)'
                        }}
                    >
                        <DownloadIcon size={18} /> Download PDF
                    </button>
                </div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 2rem', overflowY: 'auto' }}>
                <div style={{
                    width: '210mm',
                    minHeight: '297mm',
                    backgroundColor: 'white',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    marginBottom: '2rem'
                }}>
                    <div ref={resumeRef} style={{ width: '100%', height: '100%' }}>
                        <ActiveTemplate data={cvData} />
                    </div>
                </div>

                {/* Bottom Download Button */}
                <div style={{ marginBottom: '4rem' }}>
                    <button
                        onClick={handleDownload}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.75rem',
                            padding: '1rem 2.5rem', border: 'none', borderRadius: '12px',
                            backgroundColor: '#10b981', color: 'white', cursor: 'pointer', fontWeight: '600',
                            fontSize: '1.1rem',
                            boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.3)',
                            transition: 'transform 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <DownloadIcon size={22} /> Download Your Resume
                    </button>
                    <p style={{ textAlign: 'center', color: 'var(--theme-text-muted)', marginTop: '1rem', fontSize: '0.9rem' }}>
                        Ready to apply? Get your professional PDF now.
                    </p>
                </div>

                {/* Feedback Slider */}
                <div style={{ width: '100%', overflow: 'hidden', padding: '2rem 0', marginBottom: '4rem' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--theme-text)' }}>Success Stories</h3>
                    <div className="marquee-container">
                        <div className="marquee-content">
                            {/* Triple for even smoother infinite scroll */}
                            {[...activeTestimonials, ...activeTestimonials, ...activeTestimonials].map((t, i) => (
                                <div key={i} className="testimonial-card">
                                    <div style={{ display: 'flex', gap: '2px', marginBottom: '0.5rem' }}>
                                        {[...Array(t.rating)].map((_, starIdx) => (
                                            <Star key={starIdx} size={14} fill="#fbbf24" color="#fbbf24" />
                                        ))}
                                    </div>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--theme-text-muted)', fontStyle: 'italic', marginBottom: '1rem', lineHeight: '1.5' }}>"{t.feedback}"</p>
                                    <div style={{ fontWeight: '600', fontSize: '0.8rem', color: 'var(--theme-text)' }}>- {t.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            <style>{`
                .marquee-container {
                    width: 100vw;
                    max-width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    position: relative;
                }
                .marquee-content {
                    display: inline-flex;
                    animation: marquee 60s linear infinite;
                }
                .marquee-content:hover {
                    animation-play-state: paused;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .testimonial-card {
                    flex: 0 0 280px;
                    margin: 0 1rem;
                    background: 'var(--theme-card-bg)',
                    padding: '1.5rem',
                    border-radius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                    white-space: normal;
                    border: 1px solid var(--theme-border);
                    transition: transform 0.3s;
                    color: var(--theme-text);
                }
                .testimonial-card:hover {
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    );
};

export default Download;
