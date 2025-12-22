interface Feature {
    icon: string;
    title: string;
    desc: string;
    color: string;
    tag?: string;
}

export interface FeatureCategory {
    title: string;
    features: Feature[];
}

export interface TransformedFeature {
    icon: React.ReactElement;
    title: string;
    desc: string;
    color: string;
    tag?: string;
}

export interface TransformedFeatureCategory {
    title: string;
    features: TransformedFeature[];
}

export interface TransformedResource {
    icon: React.ReactElement;
    title: string;
    desc: string;
    color: string;
}export interface TransformedFeature {
    icon: React.ReactElement;
    title: string;
    desc: string;
    color: string;
    tag?: string;
}

export interface TransformedFeatureCategory {
    title: string;
    features: TransformedFeature[];
}

export interface TransformedResource {
    icon: React.ReactElement;
    title: string;
    desc: string;
    color: string;
}

export const featureCategories: Record<string, FeatureCategory> = {
    core: {
        title: 'Core Management',
        features: [
            { icon: 'Dashboard1', title: 'Overview', desc: 'Real-time analytics dashboard', color: '#8B5CF6' },
            { icon: 'AccountCircle', title: 'Account', desc: 'User profile management', color: '#3B82F6' },
            { icon: 'People', title: 'Users', desc: 'Comprehensive user management', color: '#10B981', tag: 'Popular' },
            { icon: 'PersonAdd', title: 'Admission', desc: 'Streamline enrollment process', color: '#F59E0B' },
        ]
    },
    academic: {
        title: 'Academic',
        features: [
            { icon: 'Business', title: 'Departments', desc: 'Organize school departments', color: '#6366F1' },
            { icon: 'MenuBook1', title: 'Program', desc: 'Academic programs & curricula', color: '#EC4899' },
            { icon: 'MenuBook1', title: 'Courses', desc: 'Course management', color: '#14B8A6' },
            { icon: 'Class', title: 'Classes', desc: 'Class scheduling & management', color: '#F97316' },
        ]
    },
    operations: {
        title: 'Operations',
        features: [
            { icon: 'CalendarMonth', title: 'Sessions', desc: 'Academic calendar management', color: '#8B5CF6' },
            { icon: 'CalendarMonth', title: 'Semesters', desc: 'Semester configuration', color: '#3B82F6' },
            { icon: 'AttachMoney', title: 'School Fees', desc: 'Fee management', color: '#EF4444', tag: 'Essential' },
            { icon: 'Payment', title: 'Subscription', desc: 'Billing & payment plans', color: '#10B981', tag: 'Premium' },
        ]
    },
    services: {
        title: 'Services',
        features: [
            { icon: 'LocalLibrary', title: 'Library', desc: 'Digital library management', color: '#6366F1' },
            { icon: 'Hotel', title: 'Hostel', desc: 'Accommodation management', color: '#EC4899' },
            { icon: 'EmojiEvents', title: 'Awards', desc: 'Student recognition system', color: '#EF4444' },
            { icon: 'Message1', title: 'Messages', desc: 'Internal communication', color: '#14B8A6' },
        ]
    },
};

export const resources = [
    {
        icon: 'MenuBook',
        title: 'Documentation',
        desc: 'Complete guides and API docs',
        color: '#3B82F6'
    },
    {
        icon: 'Phone',
        title: 'Help Center',
        desc: 'Get support when you need it',
        color: '#10B981'
    },
    {
        icon: 'Message',
        title: 'Blog',
        desc: 'Latest updates and best practices',
        color: '#F59E0B'
    },
    {
        icon: 'Dashboard',
        title: 'Video Tutorials',
        desc: 'Learn with step-by-step videos',
        color: '#8B5CF6'
    }
];

export const solutions = [
    {
        title: 'For Students',
        desc: 'Access courses, grades, and resources',
        icon: '🎓',
        color: '#3B82F6',
        features: ['Course Access', 'Grade Tracking', 'Assignment Submission']
    },
    {
        title: 'For Teachers',
        desc: 'Manage classes and track performance',
        icon: '👨‍🏫',
        color: '#10B981',
        features: ['Class Management', 'Grading Tools', 'Attendance']
    },
    {
        title: 'For Parents',
        desc: 'Monitor child progress and communicate',
        icon: '👨‍👩‍👧',
        color: '#F59E0B',
        features: ['Progress Reports', 'School Communication', 'Fee Payments']
    },
    {
        title: 'For Administrators',
        desc: 'Complete school management suite',
        icon: '💼',
        color: '#8B5CF6',
        features: ['Full System Access', 'Analytics Dashboard', 'User Management']
    },
];

export const solutionDetails = {
    'For Students': {
        description: 'Everything students need to succeed academically and stay connected with their school community.',
        workflows: [
            { icon: '📚', title: 'View Courses', desc: 'Access all enrolled courses and materials' },
            { icon: '📝', title: 'Submit Work', desc: 'Turn in assignments and projects' },
            { icon: '📊', title: 'Track Progress', desc: 'Monitor grades and performance' },
            { icon: '💬', title: 'Communicate', desc: 'Message teachers and classmates' },
        ],
        stats: 'Trusted by 50,000+ students',
        cta: 'Explore Student Portal'
    },
    'For Teachers': {
        description: 'Powerful tools to manage your classroom, engage students, and track their progress effectively.',
        workflows: [
            { icon: '👥', title: 'Manage Classes', desc: 'Organize students and course sections' },
            { icon: '✅', title: 'Grade Work', desc: 'Efficient grading and feedback tools' },
            { icon: '📋', title: 'Track Attendance', desc: 'Monitor student attendance patterns' },
            { icon: '📈', title: 'View Analytics', desc: 'Insights on class performance' },
        ],
        stats: 'Used by 5,000+ educators',
        cta: 'Explore Teacher Dashboard'
    },
    'For Parents': {
        description: 'Stay informed about your child\'s academic journey and communicate seamlessly with the school.',
        workflows: [
            { icon: '📱', title: 'Get Updates', desc: 'Real-time notifications on progress' },
            { icon: '💰', title: 'Pay Fees', desc: 'Convenient online payment options' },
            { icon: '📞', title: 'Contact School', desc: 'Direct messaging with teachers' },
            { icon: '📄', title: 'View Reports', desc: 'Detailed academic reports' },
        ],
        stats: 'Supporting 30,000+ families',
        cta: 'Explore Parent Portal'
    },
    'For Administrators': {
        description: 'Complete control over your school operations with powerful administrative tools and insights.',
        workflows: [
            { icon: '⚙️', title: 'System Settings', desc: 'Configure school-wide settings' },
            { icon: '👤', title: 'User Management', desc: 'Manage all user accounts and roles' },
            { icon: '📊', title: 'Analytics', desc: 'School-wide performance metrics' },
            { icon: '💳', title: 'Billing', desc: 'Financial management and reports' },
        ],
        stats: 'Managing 1,000+ schools',
        cta: 'Explore Admin Panel'
    },
};