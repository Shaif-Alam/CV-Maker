import React, { useState } from 'react';
import Header from '../components/Header'; // Global site header
import Footer from '../components/Footer'; // Global site footer
import { TEMPLATE_COMPONENTS, TEMPLATES_LIST } from '../config/templateMap'; // Removed dummyData
import { User, FileText, PenTool, CheckCircle, ChevronRight, ChevronLeft, Upload } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Builder = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeStep, setActiveStep] = useState(0);

    // Initialize with data passed from other pages (e.g. from Templates page or Previous session)
    // or default to empty structure
    const [cvData, setCvData] = useState(location.state?.cvData || {
        personal: { fullName: '', jobTitle: '', email: '', phone: '', address: '', photo: null },
        summary: { objective: '' },
        experience: [],
        education: [],
        skills: [],
        languages: [],
        interests: [],
        socialLinks: { linkedin: '', github: '', twitter: '', portfolio: '' }
    });

    const [visibleTemplatesCount, setVisibleTemplatesCount] = useState(6);

    // Initialize template from navigation state or default
    const [selectedTemplate, setSelectedTemplate] = useState(location.state?.templateName || location.state?.selectedTemplate || 'Cambridge');

    const steps = [
        { id: 0, title: 'Personal', icon: User },
        { id: 1, title: 'Experiences', icon: FileText },
        { id: 2, title: 'Additional', icon: CheckCircle }, // Languages, Hobbies, Social
        { id: 3, title: 'Template', icon: PenTool }
    ];

    const checkAuth = () => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
            return false;
        }
        return true;
    };

    const handleInputChange = (section, field, value, index = null) => {
        if (!checkAuth()) return;
        setCvData(prev => {
            const newData = { ...prev };
            if (index !== null && Array.isArray(newData[section])) {
                newData[section][index] = { ...newData[section][index], [field]: value };
            } else if (typeof newData[section] === 'object') {
                newData[section] = { ...newData[section], [field]: value };
            } else {
                newData[section] = value;
            }
            return newData;
        });
    };

    const handlePhotoUpload = (e) => {
        if (!checkAuth()) return;
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                handleInputChange('personal', 'photo', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddItem = (section, item) => {
        if (!checkAuth()) return;
        setCvData(prev => ({
            ...prev,
            [section]: [...(prev[section] || []), item]
        }));
    };

    const handleRemoveItem = (section, index) => {
        setCvData(prev => ({
            ...prev,
            [section]: prev[section].filter((_, i) => i !== index)
        }));
    };

    const nextStep = () => setActiveStep(prev => Math.min(prev + 1, steps.length - 1));
    const prevStep = () => setActiveStep(prev => Math.max(prev - 1, 0));

    const handleFinish = () => {
        navigate('/download', { state: { cvData, selectedTemplate } });
    };

    const handleDownloadTemplate = (templateName) => {
        navigate('/download', { state: { cvData, selectedTemplate: templateName } });
    };

    // Dynamic Component Rendering
    const ActiveTemplate = TEMPLATE_COMPONENTS[selectedTemplate] || TEMPLATE_COMPONENTS['Cambridge'];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--theme-hover)' }}>
            <Header />

            {/* Steps Navigation */}
            <div style={{ backgroundColor: 'var(--theme-card-bg)', borderBottom: '1px solid var(--theme-border)', padding: '1rem 0', position: 'sticky', top: '70px', zIndex: 40, boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = index === activeStep;
                        const isCompleted = index < activeStep;

                        return (
                            <div key={step.id} style={{ display: 'flex', alignItems: 'center' }}>
                                <div
                                    onClick={() => setActiveStep(index)}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        padding: '0 2rem'
                                    }}
                                >
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: isActive ? '#10b981' : (isCompleted ? '#d1fae5' : 'var(--theme-hover)'), // Green for active
                                        color: isActive ? 'white' : (isCompleted ? '#059669' : '#9ca3af'),
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '0.5rem',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <Icon size={20} />
                                    </div>
                                    <span style={{
                                        fontSize: '0.85rem',
                                        fontWeight: isActive ? '600' : '500',
                                        color: isActive ? '#10b981' : 'var(--theme-text-muted)'
                                    }}>{step.title}</span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div style={{ width: '60px', height: '2px', backgroundColor: isCompleted ? '#10b981' : 'var(--theme-border)' }}></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Main Builder Content */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', width: '100%', padding: '2rem 1rem' }}>
                {/* Centered Form Area */}
                <div style={{ width: '100%', maxWidth: '900px' }}>
                    <div style={{ backgroundColor: 'var(--theme-card-bg)', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>

                        {activeStep === 0 && (
                            <div className="fade-in">
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--theme-text)' }}>Personal Details</h2>

                                {/* Photo Upload */}
                                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '80px', height: '80px', borderRadius: '50%',
                                        backgroundColor: 'var(--theme-hover)', border: '1px solid var(--theme-border)',
                                        backgroundImage: cvData.personal.photo ? `url(${cvData.personal.photo})` : 'none',
                                        backgroundSize: 'cover', backgroundPosition: 'center',
                                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        {!cvData.personal.photo && <User size={30} color="#9ca3af" />}
                                    </div>
                                    <div>
                                        <label htmlFor="photo-upload" style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                            padding: '0.5rem 1rem', border: '1px solid var(--theme-border)', borderRadius: '6px',
                                            cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500', color: 'var(--theme-text)'
                                        }}>
                                            <Upload size={16} /> Upload Photo
                                        </label>
                                        <input
                                            id="photo-upload"
                                            type="file"
                                            onClick={(e) => {
                                                if (!checkAuth()) e.preventDefault();
                                            }}
                                            accept="image/*"
                                            onChange={handlePhotoUpload}
                                            style={{ display: 'none' }}
                                        />
                                        <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '0.25rem' }}>Max size 2MB, JPG/PNG</div>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div>
                                        <label className="label">Full Name</label>
                                        <input
                                            type="text"
                                            className="input-field"
                                            value={cvData.personal.fullName}
                                            onFocus={checkAuth}
                                            onChange={(e) => handleInputChange('personal', 'fullName', e.target.value)}
                                            placeholder="e.g. Amelia Davis"
                                        />
                                    </div>
                                    <div>
                                        <label className="label">Job Title</label>
                                        <input
                                            type="text"
                                            className="input-field"
                                            value={cvData.personal.jobTitle}
                                            onFocus={checkAuth}
                                            onChange={(e) => handleInputChange('personal', 'jobTitle', e.target.value)}
                                            placeholder="e.g. Software Engineer"
                                        />
                                    </div>
                                    <div style={{ gridColumn: '1 / -1' }}>
                                        <label className="label">Email Address</label>
                                        <input
                                            type="email"
                                            className="input-field"
                                            value={cvData.personal.email}
                                            onFocus={checkAuth}
                                            onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                                            placeholder="e.g. amelia@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="label">Phone Number</label>
                                        <input
                                            type="text"
                                            className="input-field"
                                            value={cvData.personal.phone}
                                            onFocus={checkAuth}
                                            onChange={(e) => handleInputChange('personal', 'phone', e.target.value)}
                                            placeholder="e.g. +44 20 7946 0638"
                                        />
                                    </div>
                                    <div>
                                        <label className="label">Address</label>
                                        <input
                                            type="text"
                                            className="input-field"
                                            value={cvData.personal.address}
                                            onFocus={checkAuth}
                                            onChange={(e) => handleInputChange('personal', 'address', e.target.value)}
                                            placeholder="e.g. London, UK"
                                        />
                                    </div>
                                    <div style={{ gridColumn: '1 / -1' }}>
                                        <label className="label">Professional Summary</label>
                                        <textarea
                                            className="input-field"
                                            rows="4"
                                            value={cvData.summary.objective}
                                            onFocus={checkAuth}
                                            onChange={(e) => handleInputChange('summary', 'objective', e.target.value)}
                                            placeholder="Briefly describe your professional background and goals..."
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeStep === 1 && (
                            <div className="fade-in">
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--theme-text)' }}>Experience & Education</h2>

                                <div style={{ marginBottom: '2rem' }}>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--theme-text-muted)' }}>Work Experience</h3>
                                    {cvData.experience.map((exp, index) => (
                                        <div key={index} style={{ marginBottom: '1.5rem', padding: '1.5rem', border: '1px solid var(--theme-border)', borderRadius: '12px', position: 'relative', backgroundColor: 'var(--theme-bg)' }}>
                                            <button
                                                onClick={() => handleRemoveItem('experience', index)}
                                                style={{ position: 'absolute', top: '15px', right: '15px', color: '#ef4444', background: '#fee2e2', border: 'none', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '12px' }}
                                            >✕</button>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                                <div style={{ gridColumn: '1 / -1' }}>
                                                    <label className="label">Job Title</label>
                                                    <input className="input-field" placeholder="e.g. Senior Developer" value={exp.role || ''} onChange={(e) => handleInputChange('experience', 'role', e.target.value, index)} />
                                                </div>
                                                <div style={{ gridColumn: '1 / -1' }}>
                                                    <label className="label">Company</label>
                                                    <input className="input-field" placeholder="e.g. Google" value={exp.company || ''} onChange={(e) => handleInputChange('experience', 'company', e.target.value, index)} />
                                                </div>

                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', gridColumn: '1 / -1' }}>
                                                    <div style={{ flex: 1, minWidth: '150px' }}>
                                                        <label className="label">From</label>
                                                        <input className="input-field" type="text" placeholder="MM/YYYY" value={exp.from || ''} onChange={(e) => handleInputChange('experience', 'from', e.target.value, index)} />
                                                    </div>
                                                    <div style={{ flex: 1, minWidth: '150px' }}>
                                                        <label className="label">To</label>
                                                        <input
                                                            className="input-field"
                                                            type="text"
                                                            placeholder={exp.isCurrent ? 'Present' : 'MM/YYYY'}
                                                            value={exp.isCurrent ? '' : (exp.to || '')}
                                                            onChange={(e) => handleInputChange('experience', 'to', e.target.value, index)}
                                                            disabled={exp.isCurrent}
                                                        />
                                                    </div>
                                                </div>

                                                <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                                    <input
                                                        type="checkbox"
                                                        id={`exp-current-${index}`}
                                                        checked={exp.isCurrent || false}
                                                        onChange={(e) => handleInputChange('experience', 'isCurrent', e.target.checked, index)}
                                                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                                                    />
                                                    <label htmlFor={`exp-current-${index}`} style={{ fontSize: '0.9rem', color: 'var(--theme-text)', cursor: 'pointer' }}>I currently work here</label>
                                                </div>

                                                <div style={{ gridColumn: '1 / -1' }}>
                                                    <label className="label">Description</label>
                                                    <textarea className="input-field" placeholder="Briefly describe your responsibilities and achievements..." rows="3" value={exp.description || ''} onChange={(e) => handleInputChange('experience', 'description', e.target.value, index)} ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        className="btn-outline"
                                        onClick={() => handleAddItem('experience', { role: '', company: '', from: '', to: '', isCurrent: false, description: '' })}
                                        style={{ width: '100%', borderColor: '#10b981', color: '#10b981', padding: '0.75rem', fontWeight: '600' }}
                                    >+ Add Work Experience</button>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--theme-text-muted)' }}>Education</h3>
                                    {cvData.education.map((edu, index) => (
                                        <div key={index} style={{ marginBottom: '1.5rem', padding: '1.5rem', border: '1px solid var(--theme-border)', borderRadius: '12px', position: 'relative', backgroundColor: 'var(--theme-bg)' }}>
                                            <button
                                                onClick={() => handleRemoveItem('education', index)}
                                                style={{ position: 'absolute', top: '15px', right: '15px', color: '#ef4444', background: '#fee2e2', border: 'none', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '12px' }}
                                            >✕</button>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                                <div style={{ gridColumn: '1 / -1' }}>
                                                    <label className="label">Degree / Field of Study</label>
                                                    <input className="input-field" placeholder="e.g. B.S. Computer Science" value={edu.degree || ''} onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)} />
                                                </div>
                                                <div style={{ gridColumn: '1 / -1' }}>
                                                    <label className="label">Institution</label>
                                                    <input className="input-field" placeholder="e.g. University of London" value={edu.institution || ''} onChange={(e) => handleInputChange('education', 'institution', e.target.value, index)} />
                                                </div>

                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', gridColumn: '1 / -1' }}>
                                                    <div style={{ flex: 1, minWidth: '150px' }}>
                                                        <label className="label">From</label>
                                                        <input className="input-field" type="text" placeholder="MM/YYYY" value={edu.from || ''} onChange={(e) => handleInputChange('education', 'from', e.target.value, index)} />
                                                    </div>
                                                    <div style={{ flex: 1, minWidth: '150px' }}>
                                                        <label className="label">To</label>
                                                        <input
                                                            className="input-field"
                                                            type="text"
                                                            placeholder={edu.isCurrent ? 'Present' : 'MM/YYYY'}
                                                            value={edu.isCurrent ? '' : (edu.to || '')}
                                                            onChange={(e) => handleInputChange('education', 'to', e.target.value, index)}
                                                            disabled={edu.isCurrent}
                                                        />
                                                    </div>
                                                </div>

                                                <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <input
                                                        type="checkbox"
                                                        id={`edu-current-${index}`}
                                                        checked={edu.isCurrent || false}
                                                        onChange={(e) => handleInputChange('education', 'isCurrent', e.target.checked, index)}
                                                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                                                    />
                                                    <label htmlFor={`edu-current-${index}`} style={{ fontSize: '0.9rem', color: 'var(--theme-text)', cursor: 'pointer' }}>I am currently studying here</label>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        className="btn-outline"
                                        onClick={() => handleAddItem('education', { degree: '', institution: '', from: '', to: '', isCurrent: false })}
                                        style={{ width: '100%', borderColor: '#10b981', color: '#10b981', padding: '0.75rem', fontWeight: '600' }}
                                    >+ Add Education</button>
                                </div>
                            </div>
                        )}

                        {activeStep === 2 && (
                            <div className="fade-in">
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--theme-text)' }}>Additional Details</h2>

                                {/* Languages */}
                                <div style={{ marginBottom: '2rem' }}>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--theme-text-muted)' }}>Languages</h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                        {cvData.languages.map((lang, index) => (
                                            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--theme-hover)', color: 'var(--theme-text)', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                                                <span>{typeof lang === 'string' ? lang : `${lang.name} (${lang.level})`}</span>
                                                <button onClick={() => handleRemoveItem('languages', index)} style={{ border: 'none', background: 'none', color: '#ef4444', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>✕</button>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <input
                                            type="text"
                                            id="lang-input"
                                            className="input-field"
                                            placeholder="e.g. English"
                                            style={{ marginBottom: 0, flex: 2 }}
                                            onFocus={checkAuth}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' && e.target.value.trim()) {
                                                    const level = document.getElementById('lang-level').value;
                                                    handleAddItem('languages', { name: e.target.value.trim(), level });
                                                    e.target.value = '';
                                                }
                                            }}
                                        />
                                        <select
                                            id="lang-level"
                                            className="input-field"
                                            style={{ marginBottom: 0, flex: 1, padding: '0.75rem' }}
                                            onFocus={checkAuth}
                                        >
                                            <option value="Fluent">Fluent</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Expert">Expert</option>
                                            <option value="Basic">Basic</option>
                                            <option value="Native">Native</option>
                                        </select>
                                        <button
                                            className="btn"
                                            style={{ backgroundColor: '#10b981', color: 'white' }}
                                            onClick={() => {
                                                const input = document.getElementById('lang-input');
                                                const level = document.getElementById('lang-level').value;
                                                if (input.value.trim()) {
                                                    handleAddItem('languages', { name: input.value.trim(), level });
                                                    input.value = '';
                                                }
                                            }}
                                        >Add</button>
                                    </div>
                                </div>

                                {/* Hobbies */}
                                <div style={{ marginBottom: '2rem' }}>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--theme-text-muted)' }}>Hobbies & Interests</h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                        {cvData.interests.map((hobby, index) => (
                                            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--theme-hover)', color: 'var(--theme-text)', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                                                <span>{hobby}</span>
                                                <button onClick={() => handleRemoveItem('interests', index)} style={{ border: 'none', background: 'none', color: '#ef4444', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>✕</button>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <input
                                            type="text"
                                            id="hobby-input"
                                            className="input-field"
                                            placeholder="e.g. Photography"
                                            style={{ marginBottom: 0 }}
                                            onFocus={checkAuth}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' && e.target.value.trim()) {
                                                    handleAddItem('interests', e.target.value.trim());
                                                    e.target.value = '';
                                                }
                                            }}
                                        />
                                        <button
                                            className="btn"
                                            style={{ backgroundColor: '#10b981', color: 'white' }}
                                            onClick={() => {
                                                const input = document.getElementById('hobby-input');
                                                if (input.value.trim()) {
                                                    handleAddItem('interests', input.value.trim());
                                                    input.value = '';
                                                }
                                            }}
                                        >Add</button>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div style={{ marginBottom: '2rem' }}>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--theme-text-muted)' }}>Social Links</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <label className="label">LinkedIn</label>
                                            <input
                                                type="text"
                                                className="input-field"
                                                placeholder="linked.com/in/username"
                                                value={cvData.socialLinks.linkedin}
                                                onFocus={checkAuth}
                                                onChange={(e) => handleInputChange('socialLinks', 'linkedin', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className="label">GitHub</label>
                                            <input
                                                type="text"
                                                className="input-field"
                                                placeholder="github.com/username"
                                                value={cvData.socialLinks.github}
                                                onFocus={checkAuth}
                                                onChange={(e) => handleInputChange('socialLinks', 'github', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className="label">Twitter / X</label>
                                            <input
                                                type="text"
                                                className="input-field"
                                                placeholder="twitter.com/username"
                                                value={cvData.socialLinks.twitter}
                                                onFocus={checkAuth}
                                                onChange={(e) => handleInputChange('socialLinks', 'twitter', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className="label">Portfolio</label>
                                            <input
                                                type="text"
                                                className="input-field"
                                                placeholder="yourwebsite.com"
                                                value={cvData.socialLinks.portfolio}
                                                onFocus={checkAuth}
                                                onChange={(e) => handleInputChange('socialLinks', 'portfolio', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeStep === 3 && (
                            <div className="fade-in">
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--theme-text)' }}>Choose Your Template</h2>
                                <p style={{ color: 'var(--theme-text-muted)', marginBottom: '2rem' }}>Every template here now reflects your information in real-time!</p>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                    gap: '2rem'
                                }}>
                                    {TEMPLATES_LIST.slice(0, visibleTemplatesCount).map(template => {
                                        const TemplateComponent = TEMPLATE_COMPONENTS[template.name];
                                        const isActive = selectedTemplate === template.name;

                                        return (
                                            <div
                                                key={template.id}
                                                style={{
                                                    border: isActive ? '3px solid #10b981' : '1px solid var(--theme-border)',
                                                    borderRadius: '16px',
                                                    overflow: 'hidden',
                                                    cursor: 'pointer',
                                                    backgroundColor: 'var(--theme-card-bg)',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: isActive ? '0 10px 15px -3px rgba(16, 185, 129, 0.2)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                                    display: 'flex',
                                                    flexDirection: 'column'
                                                }}
                                                onClick={() => setSelectedTemplate(template.name)}
                                            >
                                                {/* Mini Preview Area */}
                                                <div style={{
                                                    height: '350px',
                                                    backgroundColor: 'var(--theme-hover)',
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'flex-start',
                                                    padding: '10px'
                                                }}>
                                                    <div style={{
                                                        transform: 'scale(0.25)',
                                                        transformOrigin: 'top center',
                                                        width: '210mm',
                                                        minHeight: '297mm',
                                                        backgroundColor: 'white',
                                                        boxShadow: '0 0 20px rgba(0,0,0,0.1)',
                                                        pointerEvents: 'none'
                                                    }}>
                                                        {TemplateComponent && <TemplateComponent data={cvData} />}
                                                    </div>
                                                </div>

                                                {/* Action Area */}
                                                <div style={{ padding: '1rem', textAlign: 'center' }}>
                                                    <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--theme-text)' }}>{template.name}</div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleDownloadTemplate(template.name);
                                                            }}
                                                            className="btn"
                                                            style={{
                                                                padding: '0.75rem',
                                                                borderRadius: '8px',
                                                                backgroundColor: '#6366f1',
                                                                color: 'white',
                                                                fontWeight: '600',
                                                                border: 'none',
                                                                cursor: 'pointer',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                gap: '0.5rem'
                                                            }}
                                                        >
                                                            <Upload size={16} style={{ transform: 'rotate(180deg)' }} /> Download PDF
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', borderTop: '1px solid var(--theme-border)', paddingTop: '1.5rem' }}>
                            <button
                                onClick={prevStep}
                                disabled={activeStep === 0}
                                style={{
                                    opacity: activeStep === 0 ? 0.5 : 1,
                                    cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    padding: '0.75rem 1.5rem', borderRadius: '8px', border: '1px solid var(--theme-border)', backgroundColor: 'var(--theme-card-bg)', color: 'var(--theme-text)'
                                }}
                            >
                                <ChevronLeft size={16} /> Previous
                            </button>

                            {activeStep === steps.length - 1 ? (
                                visibleTemplatesCount < TEMPLATES_LIST.length ? (
                                    <button
                                        onClick={() => setVisibleTemplatesCount(prev => prev + 3)}
                                        style={{
                                            backgroundColor: '#10b981', color: 'white',
                                            padding: '0.75rem 2rem', borderRadius: '8px', border: 'none',
                                            display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600',
                                            cursor: 'pointer', transition: 'all 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                        Show More Templates <ChevronRight size={16} />
                                    </button>
                                ) : null
                            ) : (
                                <button
                                    onClick={nextStep}
                                    style={{
                                        backgroundColor: '#10b981', color: 'white',
                                        padding: '0.75rem 2rem', borderRadius: '8px', border: 'none',
                                        display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Next <ChevronRight size={16} />
                                </button>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            <Footer />

            <style>{`
                .label { display: block; font-size: 0.9rem; font-weight: 500; color: var(--theme-text); marginBottom: 0.5rem; }
                .input-field { width: 100%; padding: 0.75rem; border: 1px solid var(--theme-border); border-radius: 6px; font-size: 0.95rem; background-color: var(--theme-bg); color: var(--theme-text); }
                .input-field:focus { outline: none; border-color: #10b981; ring: 2px solid rgba(16, 185, 129, 0.2); }
                .btn-outline { background: var(--theme-card-bg); border: 1px solid var(--theme-border); padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; transition: all 0.2s; }
                .btn-outline:hover { background: var(--theme-hover); }
            `}</style>
        </div>
    );
};

export default Builder;
