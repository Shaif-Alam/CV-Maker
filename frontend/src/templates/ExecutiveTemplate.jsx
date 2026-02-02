import React from 'react';
import { Phone, Mail, MapPin, Globe, Briefcase } from 'lucide-react';

const ExecutiveTemplate = ({ data = {} }) => {
    const {
        personal = {},
        summary = {},
        experience = [],
        education = [],
        skills = []
    } = data;

    return (
        <div style={{
            width: '100%',
            minHeight: '1000px',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: '#333',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
        }}>
            {/* Header */}
            <div style={{
                backgroundColor: '#2d3748', // Dark Navy/Grey
                height: '180px',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '5rem',
                position: 'relative'
            }}>
                <div style={{ textAlign: 'center', minWidth: '300px' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0, textTransform: 'uppercase' }}>{personal.fullName || 'RICHARD SANCHEZ'}</h1>
                    <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', letterSpacing: '2px', fontWeight: '300' }}>{personal.jobTitle || 'MARKETING MANAGER'}</p>
                </div>

                {/* Photo Circle Overlapping */}
                {personal.photo ? (
                    <div style={{
                        position: 'absolute',
                        left: '50px',
                        top: '40px',
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        border: '5px solid white',
                        backgroundImage: `url(${personal.photo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 10,
                        backgroundColor: '#e2e8f0'
                    }}></div>
                ) : (
                    <div style={{
                        position: 'absolute',
                        left: '50px',
                        top: '40px',
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        border: '5px solid white',
                        backgroundColor: '#e2e8f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '4rem',
                        color: '#2d3748',
                        zIndex: 10
                    }}>
                        {personal.fullName ? personal.fullName.charAt(0) : 'R'}
                    </div>
                )}
            </div>

            <div style={{ display: 'flex', flex: 1 }}>
                {/* Left Sidebar */}
                <div style={{
                    width: '30%',
                    backgroundColor: '#f3f4f6', // Light Grey
                    padding: '8rem 2rem 2rem', // Top padding to clear photo
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2.5rem'
                }}>
                    {/* Contact */}
                    <div>
                        <h3 style={{ textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', borderBottom: '2px solid #cbd5e1', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#2d3748' }}>Contact</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Phone size={16} /> {personal.phone || '+123-456-7890'}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Mail size={16} /> {personal.email || 'hello@reallygreatsite.com'}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <MapPin size={16} /> {personal.address || '123 Anywhere St., Any City'}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Globe size={16} /> www.reallygreatsite.com
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 style={{ textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', borderBottom: '2px solid #cbd5e1', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#2d3748' }}>Skills</h3>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', margin: 0 }}>
                            {(skills.length ? skills : ['Project Management', 'Public Relations', 'Teamwork']).map((skill, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>{typeof skill === 'string' ? skill : skill.name}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Languages */}
                    <div>
                        <h3 style={{ textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', borderBottom: '2px solid #cbd5e1', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#2d3748' }}>Languages</h3>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', margin: 0 }}>
                            {['English (Fluent)', 'French (Fluent)', 'German (Basic)'].map((lang, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>{lang}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Content */}
                <div style={{ flex: 1, padding: '3rem', paddingTop: '4rem' }}>
                    {/* Profile */}
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #718096', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2d3748' }}>
                            <span style={{ fontSize: '1.2rem' }}>👤</span>
                        </div>
                        <div>
                            <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '1rem', color: '#2d3748' }}>Profile</h3>
                            <p style={{ lineHeight: '1.6', color: '#4a5568', fontSize: '0.95rem' }}>
                                {summary.objective || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation."}
                            </p>
                        </div>
                    </div>

                    {/* Work Experience */}
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #718096', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2d3748' }}>
                            <Briefcase size={20} />
                        </div>
                        <div style={{ borderLeft: '1px solid #718096', paddingLeft: '2rem', marginLeft: '-35px', paddingTop: '50px' }}>
                            <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2d3748', marginTop: '-50px' }}>Work Experience</h3>

                            {(experience.length ? experience : [
                                { role: 'Marketing Manager', company: 'Borcelle Studio', period: '2030 - PRESENT', description: 'Develop and executive comprehensive marketing strategies.' },
                                { role: 'Marketing Manager', company: 'Fauget Studio', period: '2025 - 2029', description: 'Create and manage the marketing budget.' }
                            ]).map((job, i) => (
                                <div key={i} style={{ marginBottom: '2rem', position: 'relative' }}>
                                    {/* Dot on line */}
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', border: '2px solid #2d3748', backgroundColor: 'white', position: 'absolute', left: '-38px', top: '5px' }}></div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                                        <strong style={{ fontSize: '1.1rem' }}>{job.company}</strong>
                                        <span style={{ fontSize: '0.85rem', color: '#718096' }}>
                                            {job.period || (job.from && `${job.from} - ${job.isCurrent ? 'Present' : (job.to || '')}`)}
                                        </span>
                                    </div>
                                    <div style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#4a5568' }}>{job.role}</div>
                                    <ul style={{ paddingLeft: '1rem', color: '#4a5568', fontSize: '0.9rem' }}>
                                        <li>{job.description}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExecutiveTemplate;
