import React from 'react';

const StanfordTemplate = ({ data = {} }) => {
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
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            color: '#333',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
        }}>
            {/* Left Sidebar */}
            <div style={{
                width: '32%',
                backgroundColor: '#8c1515', // Stanford Cardinal Red
                color: 'white',
                padding: '3rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    {/* Photo or Placeholder */}
                    {personal.photo ? (
                        <div style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            backgroundImage: `url(${personal.photo})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            margin: '0 auto 1.5rem',
                            border: '3px solid rgba(255,255,255,0.2)'
                        }}></div>
                    ) : (
                        <div style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            margin: '0 auto 1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                            fontWeight: 'bold'
                        }}>
                            {personal.fullName ? personal.fullName.charAt(0) : 'A'}
                        </div>
                    )}
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 0.5rem' }}>{personal.fullName || 'Amelia Davis'}</h2>
                    <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>{personal.jobTitle || 'Creative Director'}</p>
                </div>

                <div>
                    <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Contact</h4>
                    <div style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', opacity: 0.9 }}>
                        <div>{personal.address || 'San Francisco, CA'}</div>
                        <div>{personal.phone || '+1 555 0123'}</div>
                        <div>{personal.email || 'amelia@example.com'}</div>
                    </div>
                </div>

                <div>
                    <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Skills</h4>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {(skills.length ? skills : ['UI/UX Design', 'React / Angular', 'Node.js', 'Team Leadership']).map((skill, i) => (
                            <li key={i}>{typeof skill === 'string' ? skill : skill.name}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Languages</h4>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.9 }}>
                        {(languages.length ? languages : [
                            { name: 'English', level: 'Fluent' },
                            { name: 'Spanish', level: 'Intermediate' }
                        ]).map((lang, i) => (
                            <li key={i}>{typeof lang === 'string' ? lang : `${lang.name} (${lang.level})`}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right Content */}
            <div style={{ flex: 1, padding: '4rem 3rem' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: '#8c1515', borderBottom: '2px solid #f3f4f6', paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '1.2rem', letterSpacing: '1px', fontWeight: 'bold' }}>Profile</h3>
                    <p style={{ lineHeight: '1.7', color: '#555' }}>
                        {summary.objective || "Passionate and results-oriented professional with extensive experience in creative industries. Skilled in translating business requirements into effective visual solutions."}
                    </p>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: '#8c1515', borderBottom: '2px solid #f3f4f6', paddingBottom: '0.5rem', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '1.2rem', letterSpacing: '1px', fontWeight: 'bold' }}>Experience</h3>
                    {(experience.length ? experience : [
                        { role: 'Senior Designer', company: 'Creative Studio', period: '2019 - Present', description: 'Lead designer for major client accounts, overseeing a team of 5 juniors.' },
                        { role: 'Graphic Designer', company: 'Design Co.', period: '2016 - 2019', description: 'Created marketing materials and brand identities for startups.' }
                    ]).map((job, i) => (
                        <div key={i} style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <strong style={{ fontSize: '1.1rem', color: '#333' }}>{job.role}</strong>
                                <span style={{ color: '#8c1515', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                    {job.period || (job.from && `${job.from} - ${job.isCurrent ? 'Present' : (job.to || '')}`)}
                                </span>
                            </div>
                            <div style={{ fontStyle: 'italic', marginBottom: '0.75rem', color: '#666' }}>{job.company}</div>
                            <p style={{ lineHeight: '1.6', color: '#555' }}>{job.description}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <h3 style={{ color: '#8c1515', borderBottom: '2px solid #f3f4f6', paddingBottom: '0.5rem', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '1.2rem', letterSpacing: '1px', fontWeight: 'bold' }}>Education</h3>
                    {(education.length ? education : [
                        { degree: 'Master of Design', institution: 'Stanford University', period: '2016' },
                        { degree: 'Bachelor of Arts', institution: 'College of Arts', period: '2014' }
                    ]).map((edu, i) => (
                        <div key={i} style={{ marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <strong style={{ fontSize: '1.05rem' }}>{edu.degree}</strong>
                                <span style={{ color: '#666' }}>
                                    {edu.period || (edu.from && `${edu.from} - ${edu.isCurrent ? 'Present' : (edu.to || '')}`)}
                                </span>
                            </div>
                            <div>{edu.institution}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StanfordTemplate;
