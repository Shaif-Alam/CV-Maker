import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TEMPLATE_COMPONENTS } from '../config/templateMap';
import html2pdf from 'html2pdf.js';
import { ArrowLeft, Download as DownloadIcon } from 'lucide-react';

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
        <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <div style={{
                backgroundColor: 'white',
                padding: '1rem 2rem',
                borderBottom: '1px solid #e5e7eb',
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
                        padding: '0.5rem 1rem', border: '1px solid #e5e7eb', borderRadius: '8px',
                        backgroundColor: 'white', cursor: 'pointer', fontWeight: '500'
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
                    <p style={{ textAlign: 'center', color: '#6b7280', marginTop: '1rem', fontSize: '0.9rem' }}>
                        Ready to apply? Get your professional PDF now.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Download;
