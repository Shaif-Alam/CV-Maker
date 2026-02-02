import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const cvTemplates = [
    { id: 1, name: 'Academic', color: '#2c3e50' },
    { id: 2, name: 'Executive', color: '#34495e' },
    { id: 3, name: 'Creative', color: '#e74c3c' },
    { id: 4, name: 'International', color: '#2980b9' },
    { id: 5, name: 'Research', color: '#8e44ad' },
    { id: 6, name: 'Medical', color: '#27ae60' },
    { id: 7, name: 'Technical', color: '#d35400' },
    { id: 8, name: 'Legal', color: '#7f8c8d' },
    { id: 9, name: 'Artist', color: '#c0392b' },
];

const CvTemplates = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <main className="templates-container" style={{ padding: '80px 2rem 4rem', minHeight: 'calc(100vh - 400px)', backgroundColor: 'var(--theme-hover)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h1 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--theme-text)' }}>
                        Professional CV Templates
                    </h1>
                    <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--theme-text-muted)', fontSize: '1.1rem' }}>
                        Stand out with our curriculum vitae templates designed for every career stage
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {cvTemplates.map((template) => (
                            <div key={template.id} className="template-card" style={{
                                border: '1px solid var(--theme-border)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                cursor: 'pointer',
                                backgroundColor: 'var(--theme-card-bg)',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}>
                                <div style={{
                                    height: '350px',
                                    backgroundColor: 'var(--theme-hover)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative'
                                }}>
                                    {/* Placeholder for template preview - slightly different style for CV */}
                                    <div style={{
                                        width: '200px',
                                        height: '280px',
                                        backgroundColor: 'white',
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        padding: '1.5rem'
                                    }}>
                                        <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e5e7eb' }}></div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ width: '80%', height: '8px', backgroundColor: template.color, marginBottom: '6px' }}></div>
                                                <div style={{ width: '50%', height: '6px', backgroundColor: '#9ca3af' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ width: '100%', height: '1px', backgroundColor: '#e5e7eb', marginBottom: '1rem' }}></div>

                                        <div style={{ flex: 1, display: 'flex', gap: '8px' }}>
                                            <div style={{ width: '30%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                                <div style={{ width: '100%', height: '4px', backgroundColor: '#d1d5db' }}></div>
                                                <div style={{ width: '80%', height: '4px', backgroundColor: '#d1d5db' }}></div>
                                                <div style={{ width: '90%', height: '4px', backgroundColor: '#d1d5db' }}></div>
                                            </div>
                                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                <div style={{ width: '100%', height: '6px', backgroundColor: '#f3f4f6' }}></div>
                                                <div style={{ width: '100%', height: '6px', backgroundColor: '#f3f4f6' }}></div>
                                                <div style={{ width: '90%', height: '6px', backgroundColor: '#f3f4f6' }}></div>
                                                <div style={{ marginTop: '8px', width: '100%', height: '6px', backgroundColor: '#f3f4f6' }}></div>
                                                <div style={{ width: '100%', height: '6px', backgroundColor: '#f3f4f6' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem', textAlign: 'center', borderTop: '1px solid var(--theme-border)' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--theme-text)', marginBottom: '0.5rem' }}>{template.name}</h3>
                                    <button className="btn btn-primary" style={{ marginTop: '0.5rem', padding: '0.5rem 1.5rem' }}>Create CV</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CvTemplates;
