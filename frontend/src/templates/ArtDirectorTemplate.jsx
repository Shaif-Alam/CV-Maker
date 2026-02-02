import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const ArtDirectorTemplate = ({ data = {} }) => {
    const {
        personal = {},
        summary = {},
        experience = [],
        education = [],
        skills = [],
        languages = []
    } = data;

    return (
        <div style={{
            width: '100%',
            minHeight: '1000px',
            backgroundColor: 'white',
            display: 'flex',
            fontFamily: "'Segoe UI', Roboto, sans-serif",
            color: '#333',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
        }}>
            {/* Left Sidebar */}
            <div style={{
                width: '35%',
                backgroundColor: '#d1d5db', // Light Grey
                padding: '0',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
            }}>
                {/* Photo Area (Top overlap) */}
                <div style={{
                    height: '250px',
                    backgroundColor: '#9ca3af', // Darker grey placeholder for photo bg
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {personal.photo ? (
                        <div style={{
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            backgroundImage: `url(${personal.photo})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            border: '5px solid white',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                        }}></div>
                    ) : (
                        <div style={{
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            backgroundColor: '#4b5563', // Simulated photo
                            border: '5px solid white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '3rem'
                        }}>
                            {personal.fullName ? personal.fullName.charAt(0) : 'J'}
                        </div>
                    )}
                </div>

                <div style={{ padding: '2rem' }}>
                    {/* Education */}
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ borderBottom: '2px solid #4b5563', paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px' }}>Education</h3>
                        {(education.length ? education : [
                            { degree: 'Bachelor of Design', institution: 'Wardiere University', period: '2014 - 2017' }
                        ]).map((edu, i) => (
                            <div key={i} style={{ marginBottom: '1rem' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                                    {edu.period || (edu.from && `${edu.from} - ${edu.isCurrent ? 'Present' : (edu.to || '')}`)}
                                </div>
                                <div style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>{edu.degree}</div>
                                <div style={{ fontSize: '0.9rem' }}>{edu.institution}</div>
                            </div>
                        ))}
                    </div>

                    {/* Skills */}
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ borderBottom: '2px solid #4b5563', paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px' }}>Skills</h3>
                        <ul style={{ padding: '0 0 0 1rem', margin: 0 }}>
                            {(skills.length ? skills : ['Management Skills', 'Creativity', 'Digital Marketing', 'Negotiation']).map((skill, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>{typeof skill === 'string' ? skill : skill.name}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Languages */}
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ borderBottom: '2px solid #4b5563', paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px' }}>Languages</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {['English', 'German (basic)', 'Spanish (basic)'].map((lang, i) => (
                                <div key={i} style={{ fontSize: '0.95rem' }}>• {lang}</div>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 style={{ borderBottom: '2px solid #4b5563', paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px' }}>Contact</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
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
                </div>
            </div>

            {/* Right Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Header Block */}
                <div style={{
                    backgroundColor: '#4b5563', // Dark Grey Header
                    color: 'white',
                    padding: '3rem',
                    height: '250px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>
                        {personal.fullName ? personal.fullName.split(' ')[0] : 'JONATHAN'}
                    </h1>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        {personal.fullName ? personal.fullName.split(' ').slice(1).join(' ') : 'PATTERSON'}
                    </h1>
                    <p style={{ fontSize: '1.5rem', opacity: 0.9, letterSpacing: '3px', textTransform: 'uppercase' }}>
                        {personal.jobTitle || 'Art Director'}
                    </p>
                </div>

                <div style={{ padding: '3rem' }}>
                    {/* Profile */}
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{ borderBottom: '2px solid #d1d5db', paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px', display: 'inline-block', minWidth: '200px' }}>Profile Info</h3>
                        <p style={{ lineHeight: '1.6', color: '#666' }}>
                            {summary.objective || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation."}
                        </p>
                    </div>

                    {/* Experience */}
                    <div>
                        <h3 style={{ borderBottom: '2px solid #d1d5db', paddingBottom: '0.5rem', marginBottom: '2rem', textTransform: 'uppercase', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px', display: 'inline-block', minWidth: '200px' }}>Experience</h3>

                        {(experience.length ? experience : [
                            { role: 'Senior Graphic Designer', company: 'Studio Shodwe', period: '2020 - 2023', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                            { role: 'Senior Graphic Designer', company: 'Ingoude Company', period: '2018 - 2020', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                            { role: 'Senior Graphic Designer', company: 'Keithston and Partners', period: '2018 - 2020', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
                        ]).map((job, i) => (
                            <div key={i} style={{ display: 'flex', marginBottom: '2rem' }}>
                                {/* Timeline dots */}
                                <div style={{ width: '2rem', position: 'relative', marginRight: '1rem' }}>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #333', backgroundColor: 'white', zIndex: 2, position: 'relative' }}></div>
                                    <div style={{ width: '2px', height: '100%', backgroundColor: '#333', position: 'absolute', left: '5px', top: '0', zIndex: 1 }}></div>
                                </div>

                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                        <strong style={{ textTransform: 'uppercase', fontSize: '1rem' }}>{job.role}</strong>
                                        <span style={{ fontSize: '0.9rem' }}>
                                            {job.period || (job.from && `${job.from} - ${job.isCurrent ? 'Present' : (job.to || '')}`)}
                                        </span>
                                    </div>
                                    <strong style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{job.company}</strong>
                                    <ul style={{ paddingLeft: '1rem', color: '#666', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                                        <li>{job.description}</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtDirectorTemplate;
