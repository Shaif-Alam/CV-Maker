import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Menu, X, User, Settings, LogOut, Mail, Phone, ChevronDown } from 'lucide-react';
import homeData from '../data/homeContent.json';

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const { header } = homeData;

    const user = JSON.parse(localStorage.getItem('user') || 'null');
    const isAuthenticated = !!localStorage.getItem('token');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <>
            <header className="home-header">
                <div className="home-logo" onClick={() => navigate('/')}>
                    {header.logo}
                </div>

                {/* Desktop Nav */}
                <nav className="home-nav desktop-only">
                    {header.navLinks.map((link, index) => (
                        <Link key={index} to={link.path}>{link.label}</Link>
                    ))}

                    {isAuthenticated ? (
                        <div style={{ position: 'relative', marginLeft: '1.5rem' }}>
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: 'none',
                                    border: '1px solid #e2e8f0',
                                    padding: '0.5rem 0.75rem',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    outline: 'none'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-solid)'}
                                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
                            >
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--accent-solid)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <User size={18} />
                                </div>
                                <ChevronDown size={16} color="#718096" style={{ transform: showDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                            </button>

                            {showDropdown && (
                                <div style={{
                                    position: 'absolute',
                                    top: 'calc(100% + 12px)',
                                    right: 0,
                                    width: '260px',
                                    backgroundColor: 'white',
                                    borderRadius: '12px',
                                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                                    border: '1px solid #f1f5f9',
                                    zIndex: 2000,
                                    padding: '0.75rem',
                                    animation: 'slideIn 0.2s ease-out'
                                }}>
                                    {/* User Info Header */}
                                    <div style={{ padding: '0.75rem', borderBottom: '1px solid #f1f5f9', marginBottom: '0.5rem' }}>
                                        <div style={{ fontWeight: '700', color: '#1a202c', fontSize: '0.95rem', marginBottom: '0.25rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {user?.firstName} {user?.lastName || ''}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#718096', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                                            <Mail size={12} /> {user?.email}
                                        </div>
                                        {user?.mobileNumber && (
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#718096', fontSize: '0.8rem' }}>
                                                <Phone size={12} /> {user?.mobileNumber}
                                            </div>
                                        )}
                                    </div>

                                    {/* Menu Items */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                        <button
                                            onClick={() => { navigate('/settings'); setShowDropdown(false); }}
                                            className="dropdown-item"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem',
                                                padding: '0.75rem',
                                                width: '100%',
                                                border: 'none',
                                                background: 'none',
                                                textAlign: 'left',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                fontSize: '0.9rem',
                                                color: '#4a5568',
                                                transition: 'background 0.2s'
                                            }}
                                        >
                                            <Settings size={18} /> Settings
                                        </button>
                                        <button
                                            onClick={handleLogout}
                                            className="dropdown-item logout"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem',
                                                padding: '0.75rem',
                                                width: '100%',
                                                border: 'none',
                                                background: 'none',
                                                textAlign: 'left',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                fontSize: '0.9rem',
                                                color: '#ef4444',
                                                transition: 'background 0.2s'
                                            }}
                                        >
                                            <LogOut size={18} /> Log Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button
                            className="btn btn-primary"
                            style={{ marginLeft: '1rem' }}
                            onClick={() => navigate(header.authLink.path)}
                        >
                            {header.authLink.label}
                        </button>
                    )}
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                <button className="mobile-close-btn" onClick={() => setIsMenuOpen(false)}>
                    <X size={32} />
                </button>
                <nav className="mobile-nav">
                    {header.navLinks.map((link, index) => (
                        <Link key={index} to={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.label}
                        </Link>
                    ))}
                    {isAuthenticated ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'white' }}>{user?.email}</div>
                                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>{user?.mobileNumber}</div>
                            </div>
                            <button
                                className="btn btn-primary"
                                style={{ backgroundColor: '#ef4444', color: 'white', width: '100%' }}
                                onClick={() => {
                                    handleLogout();
                                    setIsMenuOpen(false);
                                }}
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <button
                            className="btn btn-primary"
                            style={{ backgroundColor: 'white', color: 'var(--accent-solid)', marginTop: '1rem', width: '100%' }}
                            onClick={() => {
                                navigate(header.authLink.path);
                                setIsMenuOpen(false);
                            }}
                        >
                            {header.authLink.label}
                        </button>
                    )}
                </nav>
            </div>

            <style>{`
                @keyframes slideIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .dropdown-item:hover {
                    background-color: #f8fafc !important;
                }
                .dropdown-item.logout:hover {
                    background-color: #fef2f2 !important;
                }
                .profile-trigger:hover {
                    background-color: #f8fafc;
                    border-color: var(--accent-solid) !important;
                }
                .mobile-nav a {
                    transition: all 0.2s ease;
                }
                .mobile-nav a:hover {
                    transform: scale(1.1);
                    opacity: 0.9;
                }
            `}</style>
        </>
    );
};

export default Header;
