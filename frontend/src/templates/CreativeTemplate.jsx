import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const CreativeTemplate = ({ data = {} }) => {
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
            fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
            color: '#555',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
        }}>
            {/* Left Sidebar */}
            <div style={{
                width: '35%',
                backgroundColor: '#f7f7f7', // Very light grey
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Blue Diagonal Header Part */}
                <div style={{
                    height: '250px',
                    backgroundColor: '#6b9bd1', // Soft Blue
                    clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0% 100%)',
                    marginBottom: '-80px' // Pull content up
                }}></div>

                <div style={{ padding: '2rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                    {/* Photo */}
                    {personal.photo ? (
                        <div style={{
                            width: '160px',
                            height: '160px',
                            borderRadius: '50%',
                            border: '5px solid white',
                            backgroundImage: `url(${personal.photo})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            margin: '0 auto 1.5rem',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                        }}></div>
                    ) : (
                        <div style={{
                            width: '160px',
                            height: '160px',
                            borderRadius: '50%',
                            border: '5px solid white',
                            backgroundColor: '#ddd',
                            margin: '0 auto 1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '3rem',
                            color: 'white',
                            fontWeight: 'bold',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                        }}>
                            {personal.fullName ? personal.fullName.charAt(0) : 'L'}
                        </div>
                    )}

                    <h1 style={{ fontSize: '2rem', color: '#4a76a8', fontWeight: 'bold', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                        {personal.fullName ? personal.fullName.split(' ')[0] : 'Lorna'} <br />
                        {personal.fullName ? personal.fullName.split(' ').slice(1).join(' ') : 'Alvarado'}
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: '#888', marginBottom: '2rem' }}>{personal.jobTitle || 'Marketing Manager'}</p>

                    <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
                        <h3 style={{ color: '#555', fontSize: '1.2rem', fontWeight: 'bold', borderBottom: '2px solid #6b9bd1', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Contact</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.85rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Phone size={14} color="#6b9bd1" /> {personal.phone || '+123-456-7890'}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Mail size={14} color="#6b9bd1" /> {personal.email || 'hello@reallygreatsite.com'}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <MapPin size={14} color="#6b9bd1" /> {personal.address || '123 Anywhere St., Any City'}
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'left' }}>
                        <h3 style={{ color: '#555', fontSize: '1.2rem', fontWeight: 'bold', borderBottom: '2px solid #6b9bd1', paddingBottom: '0.5rem', marginBottom: '1rem' }}>About Me</h3>
                        <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#666' }}>
                            {summary.objective || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        </p>
                    </div>

                    <div style={{ textAlign: 'left', marginTop: '2.5rem' }}>
                        <h3 style={{ color: '#555', fontSize: '1.2rem', fontWeight: 'bold', borderBottom: '2px solid #6b9bd1', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Languages</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                            {(languages.length ? languages : [
                                { name: 'English', level: 'Fluent' },
                                { name: 'French', level: 'Intermediate' }
                            ]).map((lang, i) => (
                                <div key={i} style={{ color: '#666' }}>
                                    {typeof lang === 'string' ? lang : `${lang.name} (${lang.level})`}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ textAlign: 'left', marginTop: '2.5rem' }}>
                        <h3 style={{ color: '#555', fontSize: '1.2rem', fontWeight: 'bold', borderBottom: '2px solid #6b9bd1', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Skills</h3>
                        <ul style={{ padding: '0 0 0 1rem', margin: 0, fontSize: '0.9rem' }}>
                            {(skills.length ? skills : ['Management Skills', 'Creativity']).map((skill, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem' }}>{typeof skill === 'string' ? skill : skill.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Content */}
            <div style={{ flex: 1, padding: '4rem 3rem' }}>
                {/* Header Decoration (Triangle) */}
                <div style={{ position: 'absolute', top: 0, right: 0, width: '0', height: '0', borderStyle: 'solid', borderWidth: '0 150px 150px 0', borderColor: 'transparent #6b9bd1 transparent transparent', opacity: 0.2 }}></div>

                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#555', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                        <span style={{ color: '#6b9bd1' }}>🎓</span> Education
                    </h3>
                    {(education.length ? education : [
                        { degree: 'Bachelor of Business Management', institution: 'Borcelle University', period: '2016 - 2020', description: 'Lorem ipsum dolor sit amet' },
                        { degree: 'Bachelor of Business Management', institution: 'Borcelle University', period: '2016 - 2020', description: 'Lorem ipsum dolor sit amet' }
                    ]).map((edu, i) => (
                        <div key={i} style={{ marginBottom: '2rem', paddingLeft: '1rem', borderLeft: '2px solid #ddd', position: 'relative' }}>
                            {/* Dot */}
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6b9bd1', position: 'absolute', left: '-5px', top: '0' }}></div>
                            <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#444' }}>{edu.degree}</h4>
                            <div style={{ fontStyle: 'italic', color: '#6b9bd1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{edu.institution}</div>
                            <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: '1.5' }}>{edu.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>
                            <div style={{ fontSize: '0.8rem', color: '#999', marginTop: '0.25rem', textAlign: 'right' }}>
                                {edu.period || (edu.from && `${edu.from} - ${edu.isCurrent ? 'Present' : (edu.to || '')}`)}
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#555', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                        <span style={{ color: '#6b9bd1' }}>💼</span> Experience
                    </h3>
                    {(experience.length ? experience : [
                        { role: 'Product Design Manager', company: 'Arowwai Industries', period: '2016 - 2020', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                        { role: 'Marketing Manager', company: 'Arowwai Industries', period: '2019 - 2020', description: 'Lorem ipsum dolor sit amet.' }
                    ]).map((job, i) => (
                        <div key={i} style={{ marginBottom: '2rem', paddingLeft: '1rem', borderLeft: '2px solid #ddd', position: 'relative' }}>
                            {/* Dot */}
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6b9bd1', position: 'absolute', left: '-5px', top: '0' }}></div>
                            <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#444' }}>{job.role}</h4>
                            <div style={{ fontStyle: 'italic', color: '#6b9bd1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{job.company}</div>
                            <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: '1.5' }}>{job.description}</p>
                            <div style={{ fontSize: '0.8rem', color: '#999', marginTop: '0.25rem', textAlign: 'right' }}>
                                {job.period || (job.from && `${job.from} - ${job.isCurrent ? 'Present' : (job.to || '')}`)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreativeTemplate;
