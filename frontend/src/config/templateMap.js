import CambridgeTemplate from '../templates/CambridgeTemplate';
import OxfordTemplate from '../templates/OxfordTemplate';
import StanfordTemplate from '../templates/StanfordTemplate';
import ArtDirectorTemplate from '../templates/ArtDirectorTemplate';
import TechResumeTemplate from '../templates/TechResumeTemplate';
import ExecutiveTemplate from '../templates/ExecutiveTemplate';
import CreativeTemplate from '../templates/CreativeTemplate';

export const TEMPLATE_COMPONENTS = {
    Cambridge: CambridgeTemplate,
    Oxford: OxfordTemplate,
    Stanford: StanfordTemplate,
    'Art Director': ArtDirectorTemplate,
    'Tech Resume': TechResumeTemplate,
    Executive: ExecutiveTemplate,
    Creative: CreativeTemplate,
    Harvard: ExecutiveTemplate,
    MIT: TechResumeTemplate
};

export const TEMPLATES_LIST = [
    { id: 1, name: 'Cambridge', color: '#a3c1ad' },
    { id: 2, name: 'Oxford', color: '#1a365d' },
    { id: 3, name: 'Stanford', color: '#8c1515' },
    { id: 4, name: 'Art Director', color: '#4b5563' },
    { id: 5, name: 'Tech Resume', color: '#1e293b' },
    { id: 6, name: 'Executive', color: '#2d3748' },
    { id: 7, name: 'Creative', color: '#6b9bd1' },
    { id: 8, name: 'Harvard', color: '#a51c30' },
    { id: 9, name: 'MIT', color: '#757575' },
];

export const dummyData = {
    personal: {
        fullName: 'Amelia Davis',
        jobTitle: 'Junior Software Developer',
        email: 'amelia.davis@mail.uk',
        phone: '+44 20 7946 0638',
        address: '14 Tottenham Court Road, London',
        linkedin: 'linkedin.com/in/amelia.davis'
    },
    summary: {
        objective: 'Due to graduate in 2016, I have acquired technical knowledge and skills from my course as well as practical and business skills from my industrial year in a software company.'
    },
    experience: [
        {
            role: 'Junior software developer',
            company: 'Explore the web ltd, London',
            period: '2015 - present',
            description: 'Used a range of languages, operating systems and development tools as well as experiencing the system development life cycle.'
        },
        {
            role: 'Website analyst',
            company: 'Quality ltd, London',
            period: '2007 - 2010',
            description: 'Creating online analyses. Writting personal branding plans.'
        }
    ],
    education: [
        {
            degree: 'Computer Science',
            institution: 'University of London',
            period: 'sep 2002 - jun 2007'
        }
    ],
    skills: ['Microsoft Office', 'Google Analytics', 'Google Adwords', 'Google Optimize'],
    languages: ['English', 'French', 'Spanish'],
    interests: ['Traveling', 'Cooking', 'Reading', 'Sports']
};
