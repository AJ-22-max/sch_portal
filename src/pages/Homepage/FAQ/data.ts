interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

export const faqData: FAQItem[] = [
    {
        category: 'Getting Started',
        question: 'How long does it take to implement SchoolPortal?',
        answer: 'Implementation typically takes 1-2 weeks depending on your school size and data migration needs. Our team provides hands-on support throughout the process, including data import, staff training, and system configuration. Most schools are fully operational within 10 business days.',
    },
    {
        category: 'Getting Started',
        question: 'Do you provide training for our staff?',
        answer: 'Yes! We offer comprehensive training for all user roles including administrators, teachers, and support staff. This includes live onboarding sessions, video tutorials, detailed documentation, and ongoing support through our help center. We also provide train-the-trainer sessions for larger institutions.',
    },
    {
        category: 'Getting Started',
        question: 'Can I migrate data from our current system?',
        answer: 'Absolutely! We support data migration from most school management systems including Excel spreadsheets, Google Sheets, and other platforms. Our team assists with data cleaning, formatting, and importing to ensure a smooth transition without data loss.',
    },
    {
        category: 'Pricing & Plans',
        question: 'How is pricing calculated?',
        answer: 'Pricing is based on your school size (number of students), required features, and subscription term. We offer monthly, annual, and custom payment plans. All plans include unlimited users, full feature access, cloud storage, and 24/7 support. Contact us for a personalized quote tailored to your budget.',
    },
    {
        category: 'Pricing & Plans',
        question: 'Are there any hidden fees or setup costs?',
        answer: 'No hidden fees! Our pricing is completely transparent. The quote you receive includes everything: setup, data migration, training, ongoing support, updates, and cloud hosting. No surprise charges or additional costs for features.',
    },
    {
        category: 'Pricing & Plans',
        question: 'Can we cancel or change our plan anytime?',
        answer: 'Yes, you have complete flexibility. You can upgrade, downgrade, or cancel your subscription at any time without penalties. We believe in earning your business every month, not locking you into long-term contracts you can\'t change.',
    },
    {
        category: 'Features & Security',
        question: 'Is our school data secure and backed up?',
        answer: 'Security is our top priority. We use bank-level encryption (256-bit SSL), secure cloud hosting, daily automatic backups, and comply with international data protection standards. Your data is stored redundantly across multiple servers to prevent any loss.',
    },
    {
        category: 'Features & Security',
        question: 'Can parents access the portal?',
        answer: 'Yes! Parents receive secure login credentials to monitor their children\'s progress, view grades, attendance records, fee payments, and receive real-time school announcements. They can also communicate directly with teachers through the messaging system.',
    },
    {
        category: 'Features & Security',
        question: 'Does SchoolPortal work on mobile devices?',
        answer: 'Yes, SchoolPortal is fully responsive and works seamlessly on all devices - smartphones, tablets, laptops, and desktops. Students, teachers, parents, and administrators can access the platform anytime, anywhere with an internet connection.',
    },
    {
        category: 'Support & Updates',
        question: 'What kind of support do you provide?',
        answer: 'We offer 24/7 premium support through multiple channels: live chat, email, phone, and video calls. Our support team is highly trained and responds within minutes for urgent issues. All plans include unlimited support requests at no extra cost.',
    },
    {
        category: 'Support & Updates',
        question: 'Do you add new features regularly?',
        answer: 'Yes! We continuously improve SchoolPortal based on user feedback and education industry trends. All updates and new features are included free in your subscription - you always have access to the latest version without additional charges.',
    },
    {
        category: 'Support & Updates',
        question: 'What if we need custom features specific to our school?',
        answer: 'We offer custom development services for unique requirements. Our team can build specialized modules, integrations, or features tailored to your school\'s specific workflows. Contact us to discuss your needs and get a custom solution quote.',
    },
];