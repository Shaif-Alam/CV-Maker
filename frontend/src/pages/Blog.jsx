import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import homeData from '../data/homeContent.json';
import { ChevronDown } from 'lucide-react';

const Blog = () => {
    const { blogPosts } = homeData;
    const [selectedCategory, setSelectedCategory] = useState('All articles');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const categories = [
        'All articles',
        'Resume writing',
        'Job interviews',
        'Cover letter',
        'CV writing',
        'Career'
    ];

    return (
        <div className="page-wrapper">
            <Header />

            <main style={{ backgroundColor: 'var(--theme-bg)', minHeight: '100vh', paddingBottom: '4rem' }}>
                {/* Blog Header Ribbon */}
                <div style={{
                    backgroundColor: '#10b981', // Green color
                    padding: '3rem 5% 6rem',
                    textAlign: 'center',
                    color: 'white',
                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
                    marginBottom: '2rem'
                }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Blog</h1>

                    {/* Category Dropdown */}
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <span style={{ marginRight: '0.5rem', opacity: 0.9 }}>Blog / </span>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            style={{
                                background: 'var(--theme-card-bg)',
                                border: '1px solid var(--theme-border)',
                                borderRadius: '20px',
                                padding: '0.5rem 1.5rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                color: 'var(--theme-text)',
                                fontWeight: '500'
                            }}
                        >
                            {selectedCategory}
                            <ChevronDown size={16} />
                        </button>

                        {isDropdownOpen && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateX(-20%)',
                                marginTop: '0.5rem',
                                backgroundColor: 'var(--theme-card-bg)',
                                borderRadius: '8px',
                                border: '1px solid var(--theme-border)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                                padding: '0.5rem 0',
                                zIndex: 10,
                                minWidth: '200px',
                                textAlign: 'left'
                            }}>
                                {categories.map((cat, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => {
                                            setSelectedCategory(cat);
                                            setIsDropdownOpen(false);
                                        }}
                                        style={{
                                            padding: '0.75rem 1.5rem',
                                            cursor: 'pointer',
                                            color: '#6366f1',
                                            fontSize: '0.95rem',
                                            transition: 'background 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                    >
                                        {cat}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Blog Posts List */}
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
                    {blogPosts.map((post, index) => (
                        <div key={index} style={{
                            backgroundColor: 'var(--theme-card-bg)',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            marginBottom: '2rem',
                            display: 'flex',
                            overflow: 'hidden',
                            flexDirection: 'row', // Default row
                            height: '280px'
                        }}>
                            {/* Image Placeholder */}
                            <div style={{
                                width: '35%',
                                backgroundColor: '#e2e8f0',
                                backgroundImage: `url(https://source.unsplash.com/random/400x300?office,work,resume&sig=${index})`, // Placeholder image
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundColor: 'rgba(0,0,0,0.1)' // Overlay
                                }}></div>
                            </div>

                            {/* Content */}
                            <div style={{ width: '65%', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--theme-text)' }}>
                                    {post.title}
                                </h2>
                                <div style={{ fontSize: '0.9rem', color: 'var(--theme-text-muted)', marginBottom: '1rem' }}>
                                    Resume writing | {post.date}
                                </div>
                                <p style={{
                                    fontSize: '1rem',
                                    color: 'var(--theme-text)',
                                    marginBottom: 'auto',
                                    lineHeight: '1.6',
                                    display: '-webkit-box',
                                    WebkitLineClamp: '3',
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                }}>
                                    {post.content[0]}
                                </p>
                                <Link to={`/blog/${post.slug}`} style={{
                                    color: '#6366f1',
                                    textDecoration: 'none',
                                    fontWeight: '500',
                                    marginTop: '1rem',
                                    display: 'inline-block'
                                }}>
                                    Read more here:
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Blog;
