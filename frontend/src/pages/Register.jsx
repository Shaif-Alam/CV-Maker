import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronRight, Eye, EyeOff } from 'lucide-react';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
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
        <div className="login-page-v2">
            <Header />

            <div className="login-hero-ribbon">
                <h1>Create Account</h1>
                <p>Build your professional resume and land your dream job</p>
            </div>

            <div className="login-form-container">
                <form onSubmit={handleSubmit} className="login-v2-form">
                    <div className="login-card-v2" style={{ gap: '1.5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div className="input-group-v2">
                                <label>First Name*</label>
                                <input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group-v2">
                                <label>Last Name*</label>
                                <input
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-group-v2">
                            <label>Email address*</label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group-v2">
                            <label>Mobile Number*</label>
                            <input
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group-v2">
                            <label>Password*</label>
                            <div className="password-wrapper">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="login-action-container">
                        <button type="submit" className="login-submit-btn-v2">
                            Register <ChevronRight size={24} />
                        </button>

                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <p style={{ color: '#64748b' }}>
                                Already have an account? <Link to="/login" style={{ color: 'var(--accent-solid)', fontWeight: '600' }}>Login</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    );
};

export default Register;
