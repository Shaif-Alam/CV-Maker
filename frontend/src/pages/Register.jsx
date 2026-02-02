import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Sending registration request with data:', formData);
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);
            alert('Registration successful! Redirecting to login...');
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error);
            const errorMessage = error.response?.data?.message || error.message || 'Registration failed';
            alert(errorMessage);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form className="glass-card" style={{ width: '400px', padding: '2rem' }} onSubmit={handleSubmit}>
                <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Create Account</h2>
                <input name="firstName" value={formData.firstName} placeholder="First Name" className="input-field" onChange={handleChange} required />
                <input name="lastName" value={formData.lastName} placeholder="Last Name" className="input-field" onChange={handleChange} required />
                <input name="email" type="email" value={formData.email} placeholder="Email Address" className="input-field" onChange={handleChange} required />
                <input name="mobileNumber" value={formData.mobileNumber} placeholder="Mobile Number" className="input-field" onChange={handleChange} required />
                <input name="password" type="password" value={formData.password} placeholder="Password" className="input-field" onChange={handleChange} required />
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Register</button>
                <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>
                    Already have an account? <span onClick={() => navigate('/login')} style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: 'bold' }}>Login</span>
                </div>
            </form>
        </div>
    );
};

export default Register;
