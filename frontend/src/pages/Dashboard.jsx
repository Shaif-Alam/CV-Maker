import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { User, Users, PlusCircle, FileText, Clock, Download, Edit2 } from 'lucide-react';

const Dashboard = () => {
    const [cvs, setCvs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/api/cv', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }).then(res => setCvs(res.data))
            .catch(err => {
                if (err.response?.status === 401) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    navigate('/login');
                }
            });
    }, [navigate]);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8f9fa' }}>
            <Header />

            <main style={{ flex: 1, padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    {/* Hero Section */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#1f2937', marginBottom: '1rem' }}>Your Success is Only One Step Away</h1>
                        <p style={{ fontSize: '1.2rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                            Your next professional breakthrough is waiting. Don't let someone else fill your dream position—take action today and build your future.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
                        {/* Option 1: Myself */}
                        <div
                            onClick={() => navigate('/builder')}
                            style={{
                                backgroundColor: 'white', padding: '3.5rem 2.5rem', borderRadius: '24px',
                                textAlign: 'center', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
                                border: '2px solid transparent', position: 'relative', overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#10b981';
                                e.currentTarget.style.transform = 'translateY(-12px)';
                                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'transparent';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)';
                            }}
                        >
                            <div style={{ backgroundColor: '#d1fae5', color: '#10b981', width: '90px', height: '90px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                                <User size={45} />
                            </div>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1rem', color: '#111827' }}>Create for Myself</h2>
                            <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '1.05rem' }}>Land your next role with a high-impact, professional resume.</p>
                            <div style={{ marginTop: '2rem', color: '#10b981', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                Get Started <PlusCircle size={20} />
                            </div>
                        </div>

                        {/* Option 2: Someone Else */}
                        <div
                            onClick={() => navigate('/builder')}
                            style={{
                                backgroundColor: 'white', padding: '3.5rem 2.5rem', borderRadius: '24px',
                                textAlign: 'center', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
                                border: '2px solid transparent', position: 'relative', overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#6366f1';
                                e.currentTarget.style.transform = 'translateY(-12px)';
                                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(99, 102, 241, 0.1), 0 10px 10px -5px rgba(99, 102, 241, 0.04)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'transparent';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)';
                            }}
                        >
                            <div style={{ backgroundColor: '#e0e7ff', color: '#6366f1', width: '90px', height: '90px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                                <Users size={45} />
                            </div>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1rem', color: '#111827' }}>Someone Else</h2>
                            <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '1.05rem' }}>Help a family member or friend create their perfect resume.</p>
                            <div style={{ marginTop: '2rem', color: '#6366f1', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                Help them out <PlusCircle size={20} />
                            </div>
                        </div>
                    </div>

                    {/* My Resumes List */}
                    <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '4rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <FileText color="#10b981" /> My Recent Resumes
                            </h2>
                            {cvs.length > 0 && <span style={{ color: '#10b981', fontWeight: '600' }}>{cvs.length} total</span>}
                        </div>

                        {cvs.length > 0 ? (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                                {cvs.map(cv => (
                                    <div key={cv.id} style={{
                                        backgroundColor: 'white', padding: '1.5rem', borderRadius: '16px',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'column', gap: '1rem'
                                    }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <div>
                                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937' }}>{cv.title || 'Untitled Resume'}</h3>
                                                <p style={{ color: '#9ca3af', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                    <Clock size={14} /> Updated {new Date(cv.updatedAt).toLocaleDateString()}
                                                </p>
                                            </div>
                                            <div style={{ backgroundColor: cv.isLocked ? '#fee2e2' : '#d1fae5', color: cv.isLocked ? '#ef4444' : '#10b981', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700' }}>
                                                {cv.isLocked ? 'PRO' : 'FREE'}
                                            </div>
                                        </div>

                                        <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem' }}>
                                            <Link
                                                to={`/builder?id=${cv.id}`}
                                                style={{ flex: 1, textAlign: 'center', padding: '0.6rem', borderRadius: '10px', backgroundColor: '#f3f4f6', color: '#374151', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                            >
                                                <Edit2 size={16} /> Edit
                                            </Link>
                                            <button
                                                onClick={() => window.open(`http://localhost:5000/api/pdf/download/${cv.id}`, '_blank')}
                                                disabled={cv.isLocked}
                                                style={{
                                                    flex: 1.5, padding: '0.6rem', borderRadius: '10px',
                                                    backgroundColor: cv.isLocked ? '#9ca3af' : '#10b981', color: 'white',
                                                    border: 'none', cursor: cv.isLocked ? 'not-allowed' : 'pointer', fontWeight: '600', fontSize: '0.9rem',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                                                }}
                                            >
                                                <Download size={16} /> Download
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '4rem', backgroundColor: 'white', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                                <div style={{ color: '#d1d5db', marginBottom: '1.5rem' }}><FileText size={60} style={{ margin: '0 auto' }} /></div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#374151', marginBottom: '0.5rem' }}>No resumes found</h3>
                                <p style={{ color: '#6b7280', marginBottom: '2rem' }}>You haven't created any resumes yet. Start your journey today!</p>
                                <button onClick={() => navigate('/builder')} style={{ padding: '0.75rem 2rem', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '700', cursor: 'pointer' }}>
                                    + Create Your First Resume
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Dashboard;
