import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronRight, Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/login', formData);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/dashboard');
        } catch (error) {
            alert(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="login-page-v2">
            <Header />

            <div className="login-hero-ribbon">
                <h1>Log In</h1>
                <p>Enter your email address and password to log in</p>
            </div>

            <div className="login-form-container">
                <form onSubmit={handleSubmit} className="login-v2-form">
                    <div className="login-card-v2">
                        <div className="input-group-v2">
                            <label>Email address*</label>
                            <input
                                name="email"
                                type="email"
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

                        <Link to="/forgot-password" style={{ color: 'var(--accent-solid)', textDecoration: 'none', fontSize: '0.9rem' }}>
                            Lost your password?
                        </Link>
                    </div>

                    <div className="login-action-container">
                        <button type="submit" className="login-submit-btn-v2">
                            Log In <ChevronRight size={24} />
                        </button>

                        <div style={{ width: '100%', margin: '2rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
                            <span style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: '500' }}>OR</span>
                            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
                        </div>

                        <button
                            type="button"
                            className="btn-primary"
                            style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '1rem',
                                padding: '0.85rem',
                                borderRadius: '6px',
                                background: 'white',
                                color: '#1e293b',
                                border: '1px solid #e2e8f0',
                                fontSize: '1rem',
                                fontWeight: '500',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                            </svg>
                            Continue with Google
                        </button>

                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <p style={{ color: '#64748b' }}>
                                Don't have an account? <Link to="/register" style={{ color: 'var(--accent-solid)', fontWeight: '600' }}>Register</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    );
};

export default Login;
