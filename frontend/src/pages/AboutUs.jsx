import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div className="page-wrapper">
            <Header />

            <main style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '5rem' }}>
                {/* Green Header Ribbon */}
                <div style={{
                    backgroundColor: '#10b981', // Green color
                    padding: '4rem 5% 10rem',
                    textAlign: 'center',
                    color: 'white',
                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
                    marginBottom: '-4rem' // Negative margin to pull content up
                }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>About us</h1>
                    <p style={{ fontSize: '1.2rem', opacity: '0.9' }}>
                        We make a beautiful and professional Resume within reach for everyone
                    </p>
                </div>

                {/* Main Content Card */}
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    padding: '3rem',
                    position: 'relative',
                    zIndex: 10
                }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#1f2937', marginBottom: '1rem', fontWeight: 'bold' }}>
                        About CVMaker
                    </h2>
                    <p style={{ color: '#4b5563', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                        Many people have difficulties in creating their perfect Resume. CVMaker started from the idea of making professional Resumes possible for everyone. With our CV maker, you can create a professional Resume through our step-by-step process in just 10 minutes.
                    </p>
                    <p style={{ color: '#4b5563', lineHeight: '1.7', marginBottom: '2rem' }}>
                        We work with recruiters to create the right content grids which we convert into professional Resume templates. Our Resumes give you the ability to stand out from others in the best way. The templates we have created are integrated within our CV maker, making it incredibly easy to change the order and place of your content or to change the colors of your template. We give you the ability to create and download a professional Resume in just a few minutes.
                    </p>

                    <h2 style={{ fontSize: '1.25rem', color: '#1f2937', marginBottom: '1rem', fontWeight: 'bold' }}>
                        We are Successful!
                    </h2>
                    <p style={{ color: '#4b5563', lineHeight: '1.7', marginBottom: '2rem' }}>
                        So far, more than 100,000 people have successfully used CVMaker.com. A high majority of our users now work at some of the largest companies in the United States, thanks to our outstanding Resumes.
                    </p>

                    <h2 style={{ fontSize: '1.25rem', color: '#1f2937', marginBottom: '1rem', fontWeight: 'bold' }}>
                        Follow Us on Social Media
                    </h2>
                    <p style={{ color: '#4b5563', lineHeight: '1.7', marginBottom: '1rem' }}>
                        Stay connected with CVmaker for the latest resume tips, career advice, and updates on our services. Follow us today:
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', color: '#6366f1' }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <span style={{ color: '#4b5563' }}>• LinkedIn: </span>
                            <a href="#" style={{ color: '#6366f1', textDecoration: 'underline' }}>Connect with us on LinkedIn</a>
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <span style={{ color: '#4b5563' }}>• YouTube: </span>
                            <a href="#" style={{ color: '#6366f1', textDecoration: 'underline' }}>Subscribe to our YouTube Channel</a>
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <span style={{ color: '#4b5563' }}>• Instagram: </span>
                            <a href="#" style={{ color: '#6366f1', textDecoration: 'underline' }}>Follow us on Instagram</a>
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <span style={{ color: '#4b5563' }}>• TikTok: </span>
                            <a href="#" style={{ color: '#6366f1', textDecoration: 'underline' }}>Stay updated on TikTok</a>
                        </li>
                    </ul>

                    <h2 style={{ fontSize: '1.25rem', color: '#1f2937', marginBottom: '1rem', fontWeight: 'bold' }}>
                        Customer service
                    </h2>
                    <p style={{ color: '#4b5563', lineHeight: '1.7', marginBottom: '2rem' }}>
                        Send an e-mail to <a href="mailto:support@cvmaker.com" style={{ color: '#6366f1', textDecoration: 'underline' }}>support@cvmaker.com</a>, or contact us through <a href="#" style={{ color: '#6366f1', textDecoration: 'underline' }}>our contact form</a>.
                    </p>

                    <h2 style={{ fontSize: '1.25rem', color: '#1f2937', marginBottom: '1rem', fontWeight: 'bold' }}>
                        Company details
                    </h2>
                    <div style={{ color: '#4b5563', lineHeight: '1.6' }}>
                        <p>CVmaker BV</p>
                        <p>Piet Heinkade 221</p>
                        <p>1019HM Amsterdam</p>
                        <p>The Netherlands</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AboutUs;
