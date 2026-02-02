import React from 'react';

const CambridgeTemplate = ({ data }) => {
    // Default dummy data matching the screenshot for preview if fields are empty
    const {
        personal = {},
        summary = {},
        experience = [],
        education = [],
        skills = [],
        languages = [],
        interests = []
    } = data;

    // Helper to render rating dots
    const RatingDots = ({ level = 5 }) => (
        <div style={{ display: 'flex', gap: '4px' }}>
            {[1, 2, 3, 4, 5].map(i => (
                <div key={i} style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: i <= level ? '#333' : '#d1d5db'
                }}></div>
            ))}
        </div>
    );

    return (
        <div style={{
            width: '100%',
            minHeight: '1000px', // A4 aspect ratio approximation
            backgroundColor: 'white',
            display: 'flex',
            fontFamily: "'Inter', sans-serif",
            color: '#333',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
        }}>
            {/* Left Column */}
            <div style={{
                width: '35%',
                backgroundColor: '#e8e8e6', // Light grayish beige
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem'
            }}>
                {/* Photo */}
                {personal.photo && (
                    <div style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        backgroundImage: `url(${personal.photo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        margin: '0 auto',
                        border: '4px solid white',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}></div>
                )}

                {/* Personal Details */}
                <div>
                    <h3 style={{
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1rem',
                        color: '#4b5563'
                    }}>
                        Personal Details
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                        <div>
                            <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>Name</div>
                            <div>{personal.fullName || 'Amelia Davis'}</div>
                        </div>
                        <div>
                            <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>Address</div>
                            <div>{personal.address || '14 Tottenham Court Road, London, W1T 1JY'}</div>
                        </div>
                        <div>
                            <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>Phone number</div>
                            <div>{personal.phone || '+44 20 7946 0638'}</div>
                        </div>
                        <div>
                            <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>Email address</div>
                            <div>{personal.email || 'amelia.davis@mail.uk'}</div>
                        </div>
                        {personal.linkedin && (
                            <div>
                                <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>LinkedIn</div>
                                <div>{personal.linkedin}</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Interests */}
                {(interests.length > 0 || true) && (
                    <div>
                        <h3 style={{
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '1rem',
                            color: '#4b5563'
                        }}>
                            Interests
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {(interests.length ? interests : ['Traveling', 'Cooking', 'Reading', 'Sports']).map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ width: '6px', height: '6px', backgroundColor: '#333', display: 'inline-block' }}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Languages */}
                {(languages.length > 0 || true) && (
                    <div>
                        <h3 style={{
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '1rem',
                            color: '#4b5563'
                        }}>
                            Languages
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                            {(languages.length ? languages : [
                                { name: 'English', level: 5 },
                                { name: 'French', level: 4 },
                                { name: 'Spanish', level: 3 },
                                { name: 'German', level: 2 }
                            ]).map((lang, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: '600' }}>{typeof lang === 'string' ? lang : lang.name}</span>
                                    <RatingDots level={typeof lang === 'string' ? 4 : lang.level} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Right Column */}
            <div style={{
                flex: 1,
                padding: '3rem 2.5rem',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Header Name Box */}
                <div style={{
                    border: '2px solid #000',
                    padding: '1.5rem',
                    textAlign: 'center',
                    marginBottom: '2.5rem',
                    width: '90%',
                    alignSelf: 'center'
                }}>
                    <h1 style={{
                        fontSize: '2rem',
                        fontWeight: '400',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        margin: 0
                    }}>
                        {personal.fullName || 'Amelia Davis'}
                    </h1>
                </div>

                {/* Profile Summary */}
                <div style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '2.5rem', color: '#444' }}>
                    {summary.objective || "Due to graduate in 2016, I have acquired technical knowledge and skills from my course as well as practical and business skills from my industrial year in a software company in the Netherlands. I have used a range of languages, operating systems and development tools as well as experiencing the system development life cycle. Specialising in mobile technology."}
                </div>

                {/* Work Experience */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        marginBottom: '1.5rem',
                        color: '#333'
                    }}>
                        Work Experience
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {(experience.length ? experience : [
                            {
                                role: 'Junior software developer',
                                company: 'Explore the web ltd, London',
                                period: '2015 - present',
                                description: 'Used a range of languages, operating systems and development tools as well as experiencing the system development life cycle. Specialising in mobile technology, I am keen to develop as a graduate trainee in software development.'
                            },
                            {
                                role: 'Website analyst',
                                company: 'Quality ltd, London',
                                period: '2007 - 2010',
                                points: [
                                    'Creating online analyses',
                                    'Writting personal branding plans',
                                    'Online marketingplan opstellen voor de diverse titels',
                                    'Content marketing en content management'
                                ]
                            }
                        ]).map((job, i) => (
                            <div key={i}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{job.role}</div>
                                    <div style={{ fontSize: '0.9rem', color: '#666' }}>
                                        {job.period || (job.from && `${job.from} - ${job.isCurrent ? 'Present' : (job.to || '')}`)}
                                    </div>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: '#555', fontStyle: 'italic', marginBottom: '0.5rem' }}>{job.company}</div>
                                {job.description && (
                                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: '#444' }}>{job.description}</p>
                                )}
                                {job.points && (
                                    <ul style={{ paddingLeft: '1rem', fontSize: '0.85rem', lineHeight: '1.5', color: '#444', marginTop: '0.5rem' }}>
                                        {job.points.map((pt, idx) => <li key={idx} style={{ marginBottom: '4px' }}>{pt}</li>)}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        marginBottom: '1.5rem',
                        color: '#333'
                    }}>
                        Education and Qualifications
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {(education.length ? education : [
                            {
                                degree: 'Computer Science and Software Engineering',
                                institution: 'University of London',
                                period: 'sep 2002 - jun 2007'
                            },
                            {
                                degree: 'BTEC Level 3 ICT and A-level maths',
                                institution: 'Highbridge College',
                                period: 'sep 1998 - jun 2002'
                            }
                        ]).map((edu, i) => (
                            <div key={i}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{edu.degree}</div>
                                    <div style={{ fontSize: '0.9rem', color: '#666' }}>
                                        {edu.period || (edu.from && `${edu.from} - ${edu.isCurrent ? 'Present' : (edu.to || '')}`)}
                                    </div>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: '#555' }}>{edu.institution}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        marginBottom: '1.5rem',
                        color: '#333'
                    }}>
                        Skills
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                        {(skills.length ? skills : [
                            { name: 'Microsoft Office', level: 5 },
                            { name: 'Google Analytics', level: 4 },
                            { name: 'Google Adwords', level: 4 },
                            { name: 'Google Optimize', level: 3 }
                        ]).map((skill, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '60%' }}>
                                <span style={{ fontWeight: '600' }}>{typeof skill === 'string' ? skill : skill.name}</span>
                                <RatingDots level={typeof skill === 'string' ? 4 : skill.level} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* References */}
                <div>
                    <h3 style={{
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        marginBottom: '1.5rem',
                        color: '#333'
                    }}>
                        References
                    </h3>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ fontSize: '0.85rem', color: '#444' }}>
                            <div style={{ fontWeight: "bold", fontSize: "0.95rem", marginBottom: "4px" }}>Mr. Scott Williams</div>
                            <div>+44 20 1212 4421</div>
                            <div>scott.williams@mail.com</div>
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#666' }}>CPE Group</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CambridgeTemplate;
