import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const TechResumeTemplate = ({ data = {} }) => {
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
            fontFamily: "'Helvetica', 'Arial', sans-serif",
            color: '#1e293b',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
        }}>
            {/* Left Sidebar (Navy Pill Shape) */}
            <div style={{
                width: '35%',
                backgroundColor: '#1e293b', // Navy Blue
                color: 'white',
                padding: '3rem 2rem',
                borderTopRightRadius: '80px', // Curved corner
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem'
            }}>
                {/* About Me */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>About Me</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.6', opacity: 0.9 }}>
                        {summary.objective || "As a marketing manager, I have had the pleasure of working with a diverse range of clients across various industries."}
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contact</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ backgroundColor: 'white', color: '#1e293b', borderRadius: '50%', padding: '4px' }}><Phone size={12} /></div>
                            {personal.phone || '+123-456-7890'}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ backgroundColor: 'white', color: '#1e293b', borderRadius: '50%', padding: '4px' }}><Mail size={12} /></div>
                            {personal.email || 'hello@reallygreatsite.com'}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ backgroundColor: 'white', color: '#1e293b', borderRadius: '50%', padding: '4px' }}><Globe size={12} /></div>
                            reallygreatsite.com
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ backgroundColor: 'white', color: '#1e293b', borderRadius: '50%', padding: '4px' }}><MapPin size={12} /></div>
                            {personal.address || '123 Anywhere St., Any City'}
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Skills</h3>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                        {(skills.length ? skills : ['Management Skills', 'Creativity', 'Digital Marketing', 'Negotiation']).map((skill, i) => (
                            <li key={i} style={{ fontSize: '0.95rem' }}>{typeof skill === 'string' ? skill : skill.name}</li>
                        ))}
                    </ul>
                </div>

                {/* Languages */}
                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Language</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: '4px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '5px' }}>100%</div>
                            <div style={{ fontSize: '0.8rem' }}>English</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: '4px solid rgba(255,255,255,0.5)', borderTop: '4px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '5px' }}>75%</div>
                            <div style={{ fontSize: '0.8rem' }}>German</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: '4px solid rgba(255,255,255,0.5)', borderRight: '4px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '5px' }}>70%</div>
                            <div style={{ fontSize: '0.8rem' }}>Spanish</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Content */}
            <div style={{ flex: 1, padding: '3rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
                    <div>
                        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1e293b', margin: 0, lineHeight: 1 }}>{personal.fullName || 'JONATHAN PATTERSON'}</h1>
                        <p style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>{personal.jobTitle || 'Marketing Manager'}</p>
                    </div>
                    {/* Photo Circle */}
                    {personal.photo ? (
                        <div style={{
                            width: '150px',
                            height: '200px',
                            borderRadius: '0 0 100px 100px',
                            backgroundImage: `url(${personal.photo})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                        }}></div>
                    ) : (
                        <div style={{ width: '150px', height: '200px', borderRadius: '0 0 100px 100px', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            <span style={{ fontSize: '3rem', color: '#64748b' }}>{personal.fullName ? personal.fullName.charAt(0) : 'JP'}</span>
                        </div>
                    )}
                </div>

                {/* Experience */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ color: '#1e293b', fontSize: '1.8rem', fontWeight: 'bold', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        Experience
                    </h3>
                    {(experience.length ? experience : [
                        { role: 'Marketing Manager', company: 'Ginyard International Co.', period: '2021 - 2023', description: 'Support the marketing leadership team through organization and administrative support.' },
                        { role: 'Marketing Manager', company: 'Arowwai Industries', period: '2019 - 2020', description: 'Conduct research for key marketing campaigns.' }
                    ]).map((job, i) => (
                        <div key={i} style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <div>
                                    <strong style={{ fontSize: '1rem', display: 'block' }}>{job.role}</strong>
                                    <strong style={{ fontSize: '1.1rem', display: 'block' }}>{job.company}</strong>
                                </div>
                                <span style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>
                                    {job.period || (job.from && `${job.from} - ${job.isCurrent ? 'Present' : (job.to || '')}`)}
                                </span>
                            </div>
                            <ul style={{ paddingLeft: '1.2rem', color: '#475569', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                <li>{job.description}</li>
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#1e293b', fontSize: '1.8rem', fontWeight: 'bold', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                        Education
                    </h3>
                    {(education.length ? education : [
                        { degree: 'Bachelor of Science in Marketing', institution: 'Borcelle University', period: '2014 - 2016' }
                    ]).map((edu, i) => (
                        <div key={i} style={{ marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <strong style={{ fontSize: '1.1rem' }}>{edu.institution}</strong>
                                <span style={{ fontWeight: 'bold' }}>
                                    {edu.period || (edu.from && `${edu.from} - ${edu.isCurrent ? 'Present' : (edu.to || '')}`)}
                                </span>
                            </div>
                            <div>{edu.degree}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechResumeTemplate;
