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
