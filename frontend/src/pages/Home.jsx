import { useNavigate, Link } from 'react-router-dom';
import homeData from '../data/homeContent.json';
import { CheckCircle, Zap, Layout, Users, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    const navigate = useNavigate();
    const { hero, stats, features, reviews } = homeData;

    return (
        <div className="home-container">
            <Header />

            {/* Hero Section */}
            <section className="home-hero">
                <h1>{hero.title}</h1>
                <p>{hero.subtitle}</p>
                <button className="btn btn-hero" onClick={() => navigate('/builder')}>
                    {hero.buttonText}
                </button>
            </section>

            {/* Features Section */}
            <section className="feature-section">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div style={{ color: 'var(--accent-solid)' }}>
                            {index === 0 && <Zap size={32} />}
                            {index === 1 && <CheckCircle size={32} />}
                            {index === 2 && <Layout size={32} />}
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </section>

            {/* Statistics Section */}
            <section className="stats-section">
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Global Impact</h2>
                    <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '3rem' }}>{stats.description}</p>

                    <div className="stats-grid">
                        <div className="stat-item">
                            <Users size={48} color="var(--accent-solid)" style={{ marginBottom: '1rem' }} />
                            <h2>{stats.userCount}</h2>
                            <p>Active Users</p>
                        </div>
                        <div className="stat-item">
                            <Award size={48} color="var(--accent-solid)" style={{ marginBottom: '1rem' }} />
                            <h2 style={{ fontSize: '3.5rem' }}>95%</h2>
                            <p>MNC Selection Rate</p>
                        </div>
                    </div>
                    <p style={{ marginTop: '3rem', fontWeight: '600', color: '#1e293b' }}>
                        {stats.successRate}
                    </p>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="review-section">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>What Our Users Say</h2>
                <div className="review-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <p>"{review.comment}"</p>
                            <div className="review-author">
                                {review.name}
                                <span style={{ fontWeight: '400', fontSize: '0.8rem', display: 'block', color: 'var(--accent-solid)' }}>
                                    Selected at {review.company}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Apply Successfully Section */}
            <section className="apply-section">
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{homeData.applySuccessfully.title}</h2>
                    <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        {homeData.applySuccessfully.description}
                    </p>

                    <div className="apply-cards">
                        {homeData.applySuccessfully.cards.map((card, idx) => (
                            <div key={idx} className="apply-card">
                                <h3>{card.title}</h3>
                                <ul>
                                    {card.points.map((point, pIdx) => (
                                        <li key={pIdx}>
                                            <CheckCircle size={18} color="var(--accent-solid)" style={{ flexShrink: 0 }} />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA Section (Green Ribbon) */}
            <section className="footer-cta">
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2>{homeData.footerCTA.text}</h2>
                    <p>{homeData.footerCTA.subtext}</p>
                    <button className="btn btn-hero" style={{ marginTop: '2rem' }} onClick={() => navigate('/builder')}>
                        {homeData.footerCTA.button}
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
