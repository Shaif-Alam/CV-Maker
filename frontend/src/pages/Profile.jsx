import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { User, Mail, Phone, Save, ArrowLeft } from 'lucide-react';

const Profile = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        dob: '',
        gender: ''
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        if (user) {
            setFormData({
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                email: user.email || '',
                mobileNumber: user.mobileNumber || '',
                dob: user.dob || '',
                gender: user.gender || ''
            });
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const token = localStorage.getItem('token');
            const response = await axios.put('http://localhost:5000/api/auth/profile', {
                firstName: formData.firstName,
                lastName: formData.lastName,
                mobileNumber: formData.mobileNumber,
                dob: formData.dob,
                gender: formData.gender
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            // Update localStorage
            const updatedUser = response.data.user;
            localStorage.setItem('user', JSON.stringify(updatedUser));

            setMessage({ type: 'success', text: 'Profile updated successfully!' });

            // Redirect after a short delay
            setTimeout(() => navigate('/dashboard'), 2000);
        } catch (error) {
            setMessage({ type: 'error', text: error.response?.data?.message || 'Failed to update profile' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--theme-hover)' }}>
            <Header />

            <main style={{ flex: 1, padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>

                    <button
                        onClick={() => navigate(-1)}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            background: 'none', border: 'none', color: 'var(--theme-text-muted)',
                            cursor: 'pointer', marginBottom: '2rem', fontSize: '1rem'
                        }}
                    >
                        <ArrowLeft size={18} /> Back
                    </button>

                    <div style={{
                        backgroundColor: 'var(--theme-card-bg)', padding: '3rem', borderRadius: '24px',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
                    }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <div style={{
                                backgroundColor: '#d1fae5', color: '#10b981',
                                width: '80px', height: '80px', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 1.5rem'
                            }}>
                                <User size={40} />
                            </div>
                            <h1 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--theme-text)' }}>Edit Profile</h1>
                            <p style={{ color: 'var(--theme-text-muted)', marginTop: '0.5rem' }}>Keep your professional information up to date</p>
                        </div>

                        {message.text && (
                            <div style={{
                                padding: '1rem', borderRadius: '12px', marginBottom: '2rem',
                                backgroundColor: message.type === 'success' ? '#d1fae5' : '#fee2e2',
                                color: message.type === 'success' ? '#065f46' : '#991b1b',
                                textAlign: 'center', fontWeight: '500'
                            }}>
                                {message.text}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: 'var(--theme-text)', marginBottom: '0.5rem' }}>First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.85rem', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none', background: 'var(--theme-bg)', color: 'var(--theme-text)' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: 'var(--theme-text)', marginBottom: '0.5rem' }}>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.85rem', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none', background: 'var(--theme-bg)', color: 'var(--theme-text)' }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: 'var(--theme-text)', marginBottom: '0.5rem' }}>Email Address</label>
                                <div style={{ position: 'relative' }}>
                                    <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        disabled
                                        style={{ width: '100%', padding: '0.85rem 0.85rem 0.85rem 3rem', borderRadius: '10px', border: '1px solid #e2e8f0', backgroundColor: 'var(--theme-hover)', color: 'var(--theme-text-muted)', cursor: 'not-allowed' }}
                                    />
                                </div>
                                <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.4rem' }}>Email cannot be changed</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: 'var(--theme-text)', marginBottom: '0.5rem' }}>Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.85rem', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none', background: 'var(--theme-bg)', color: 'var(--theme-text)' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: 'var(--theme-text)', marginBottom: '0.5rem' }}>Gender</label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.85rem', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none', backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)' }}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: 'var(--theme-text)', marginBottom: '0.5rem' }}>Mobile Number</label>
                                <div style={{ position: 'relative' }}>
                                    <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>
                                        <Phone size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.85rem 0.85rem 0.85rem 3rem', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none', background: 'var(--theme-bg)', color: 'var(--theme-text)' }}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    marginTop: '1rem', padding: '1rem', borderRadius: '12px',
                                    backgroundColor: '#10b981', color: 'white', border: 'none',
                                    fontWeight: '700', fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
                                    transition: 'all 0.2s', opacity: loading ? 0.7 : 1
                                }}
                            >
                                {loading ? 'Saving Changes...' : <><Save size={20} /> Save Changes</>}
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Profile;
