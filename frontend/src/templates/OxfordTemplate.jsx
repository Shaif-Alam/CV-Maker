import React from 'react';

const OxfordTemplate = ({ data = {} }) => {
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
            padding: '4rem',
            fontFamily: "'Times New Roman', serif",
            color: '#000',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
        }}>
            {/* Header */}
            <div style={{ textAlign: 'center', borderBottom: '2px solid #1a365d', paddingBottom: '2rem', marginBottom: '2rem' }}>
                {/* Photo */}
                {personal.photo && (
                    <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        backgroundImage: `url(${personal.photo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        margin: '0 auto 1.5rem',
                        border: '3px solid #1a365d'
                    }}></div>
                )}
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 0.5rem', color: '#1a365d', textTransform: 'uppercase' }}>
                    {personal.fullName || 'Amelia Davis'}
                </h1>
                <p style={{ fontSize: '1.2rem', margin: '0 0 1rem', fontStyle: 'italic', color: '#555' }}>
                    {personal.jobTitle || 'Senior Marketing Manager'}
                </p>
                <div style={{ fontSize: '0.9rem', color: '#333' }}>
                    <span>{personal.email || 'amelia.davis@mail.uk'}</span>
                    <span style={{ margin: '0 0.5rem' }}>|</span>
                    <span>{personal.phone || '+44 20 7946 0638'}</span>
                    <span style={{ margin: '0 0.5rem' }}>|</span>
                    <span>{personal.address || 'London, UK'}</span>
                </div>
            </div>

            {/* Summary */}
            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem', marginBottom: '1rem', fontSize: '1.1rem', color: '#1a365d', textTransform: 'uppercase' }}>
                    Professional Profile
                </h3>
                <p style={{ lineHeight: '1.6', fontSize: '1rem' }}>
                    {summary.objective || "Experienced professional with a proven track record. Dedicated to achieving high standards and delivering results."}
                </p>
            </div>

            {/* Experience */}
            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem', marginBottom: '1rem', fontSize: '1.1rem', color: '#1a365d', textTransform: 'uppercase' }}>
                    Work Experience
                </h3>
                {(experience.length ? experience : [
                    { role: 'Product Manager', company: 'Tech Solutions Inc.', period: '2018 - Present', description: 'Leading cross-functional teams to deliver innovative software products.' },
                    { role: 'Business Analyst', company: 'Global Corp', period: '2015 - 2018', description: 'Analyzed business requirements and implemented process improvements.' }
                ]).map((job, i) => (
                    <div key={i} style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                            <strong style={{ fontSize: '1.05rem' }}>{job.role}</strong>
                            <span style={{ fontStyle: 'italic', color: '#666' }}>
                                {job.period || (job.from && `${job.from} - ${job.isCurrent ? 'Present' : (job.to || '')}`)}
                            </span>
                        </div>
                        <div style={{ fontSize: '1rem', color: '#444', marginBottom: '0.5rem' }}>{job.company}</div>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>{job.description}</p>
                    </div>
                ))}
            </div>

            {/* Education */}
            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem', marginBottom: '1rem', fontSize: '1.1rem', color: '#1a365d', textTransform: 'uppercase' }}>
                    Education
                </h3>
                {(education.length ? education : [
                    { degree: 'MBA', institution: 'Business School London', period: '2014' },
                    { degree: 'BA Marketing', institution: 'University of Arts', period: '2012' }
                ]).map((edu, i) => (
                    <div key={i} style={{ marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <strong>{edu.degree}</strong>
                            <span>
                                {edu.period || (edu.from && `${edu.from} - ${edu.isCurrent ? 'Present' : (edu.to || '')}`)}
                            </span>
                        </div>
                        <div>{edu.institution}</div>
                    </div>
                ))}
            </div>

            {/* Skills */}
            <div>
                <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem', marginBottom: '1rem', fontSize: '1.1rem', color: '#1a365d', textTransform: 'uppercase' }}>
                    Core Competencies
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    {(skills.length ? skills : ['Strategic Planning', 'Project Management', 'Data Analysis', 'Leadership', 'Communication']).map((skill, i) => (
                        <span key={i} style={{ backgroundColor: '#f3f4f6', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.9rem' }}>
                            {typeof skill === 'string' ? skill : skill.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OxfordTemplate;
