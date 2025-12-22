interface PricingHighlights {
    icon: string;
    title: string;
    description: string;
    color: string;
}

export const quickFeatures = [
    'Custom pricing tailored to your school size',
    'No hidden fees or surprise charges',
    'Flexible payment terms & schedules',
    'All features included in every plan',
    'Cancel or upgrade anytime',
    '24/7 premium support included',
];

export const pricingHighlights: PricingHighlights[] = [
    {
        icon: 'Users',
        title: 'Based on School Size',
        description: 'Fair pricing that scales with you',
        color: '#8B5CF6',
    },
    {
        icon: 'TrendUp',
        title: 'Flexible Terms',
        description: 'Monthly, annual, or custom plans',
        color: '#3B82F6',
    },
    {
        icon: 'Shield',
        title: 'Transparent Pricing',
        description: 'Know exactly what you\'re paying for',
        color: '#10B981',
    },
];