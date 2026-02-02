import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TEMPLATE_COMPONENTS, TEMPLATES_LIST, dummyData } from '../config/templateMap';

const Templates = () => {
    const navigate = useNavigate();
    return (
        <div className="page-wrapper">
            <Header />
            <main className="templates-container" style={{ padding: '80px 2rem 4rem', minHeight: 'calc(100vh - 400px)', backgroundColor: '#f9f9f9' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <h1 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>
                        Professional Resume Templates
                    </h1>
                    <p style={{ textAlign: 'center', marginBottom: '4rem', color: '#666', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
                        Choose one of our professionally designed templates to get started on your resume instantly.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '3rem'
                    }}>
                        {TEMPLATES_LIST.map((template) => {
                            const TemplateComponent = TEMPLATE_COMPONENTS[template.name];

                            return (
                                <div key={template.id} className="template-card" style={{
                                    border: 'none',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    backgroundColor: 'white',
                                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div style={{
                                        backgroundColor: '#eef2f6',
                                        padding: '1rem', // Reduced padding to fit more content
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden',
                                        height: '500px',
                                        position: 'relative'
                                    }}>
                                        {/* Scaled Preview Wrapper - Increased Scale */}
                                        <div style={{
                                            transform: 'scale(0.48)', // Increased from 0.35 to 0.48 for better visibility
                                            transformOrigin: 'top center',
                                            boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                                            width: '210mm',
                                            minHeight: '297mm', // A4 Height
                                            backgroundColor: 'white',
                                            display: 'flex',
                                            position: 'absolute',
                                            top: '20px'
                                        }}>
                                            {TemplateComponent && <TemplateComponent data={dummyData} />}
                                        </div>
                                    </div>

                                    <div style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'white', position: 'relative', zIndex: 10 }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>{template.name}</h3>
                                        <p style={{ color: '#9ca3af', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Professional & Clean</p>
                                        <button
                                            className="btn"
                                            onClick={() => navigate('/builder', { state: { templateName: template.name } })}
                                            style={{
                                                backgroundColor: '#6366f1',
                                                color: 'white',
                                                width: '80%',
                                                padding: '0.8rem',
                                                borderRadius: '50px',
                                                fontWeight: '600',
                                                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                                            }}>Use This Template</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Templates;
