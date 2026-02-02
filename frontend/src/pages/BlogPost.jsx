import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import homeData from '../data/homeContent.json';
import { ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = homeData.blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="blog-page">
                <Header />
                <div style={{ padding: '8rem 4rem', textAlign: 'center', backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)' }}>
                    <h2>Article not found</h2>
                    <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Home</button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="blog-page">
            <Header />
            {/* Blog Header Ribbon */}
            <div className="blog-header-ribbon">
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 5%' }}>
                    <div className="breadcrumb">
                        <span onClick={() => navigate('/')}>Home</span>
                        <ChevronRight size={14} />
                        <span>Blog</span>
                    </div>
                    <h1>{post.title}</h1>
                </div>
            </div>

            <div className="blog-container">
                {/* Main Content */}
                <article className="blog-content">
                    <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
                        alt="Consulting"
                        className="blog-hero-img"
                    />
                    <div className="blog-date">{post.date}</div>

                    {post.content.map((para, idx) => (
                        <p key={idx} className={para.startsWith('-') ? 'blog-list-item' : 'blog-para'}>
                            {para}
                        </p>
                    ))}

                    {/* Resume Example Section */}
                    <div className="resume-example-container">
                        <h2>{post.resumeExample.title}</h2>
                        <div className="resume-preview">
                            <div className="resume-header">
                                <h1>Curriculum Vitae</h1>
                            </div>

                            <div className="resume-body">
                                <div className="resume-contact">
                                    <div className="resume-name">{post.resumeExample.userName}</div>
                                    <div className="resume-role">{post.resumeExample.userRole}</div>
                                    <div className="contact-info">
                                        <div className="info-item"><Phone size={14} /> {post.resumeExample.phone}</div>
                                        <div className="info-item"><Mail size={14} /> {post.resumeExample.email}</div>
                                        <div className="info-item"><MapPin size={14} /> {post.resumeExample.address}</div>
                                    </div>
                                </div>

                                <div className="resume-section">
                                    <h3 className="section-title">RESUME OBJECTIVE</h3>
                                    <p>{post.resumeExample.objective}</p>
                                </div>

                                <div className="resume-section">
                                    <h3 className="section-title">WORK EXPERIENCE</h3>
                                    {post.resumeExample.experience.map((exp, idx) => (
                                        <div key={idx} className="experience-item">
                                            <div className="exp-header">
                                                <strong>{exp.role}</strong>
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="exp-company">{exp.company}</div>
                                            <ul className="exp-points">
                                                {exp.points.map((pt, pIdx) => (
                                                    <li key={pIdx}>{pt}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Sidebar Placeholder or Related Posts */}
                <aside className="blog-sidebar desktop-only">
                    <div className="sidebar-card">
                        <h3>Create your resume</h3>
                        <p>Join 68 Million users and build your MNC-ready resume today.</p>
                        <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => navigate('/builder')}>
                            Get Started
                        </button>
                    </div>
                </aside>
            </div>
            <Footer />
        </div>
    );
};

export default BlogPost;
