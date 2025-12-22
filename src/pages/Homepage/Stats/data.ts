interface StatItem {
    label: string;
    value: number;
    suffix?: string;
}

export const statsData: StatItem[] = [
    { label: "Schools Onboarded", value: 120 },
    { label: "Active Students", value: 35000, suffix: "+" },
    { label: "Teachers Using Platform", value: 4200 },
    { label: "Parents Connected", value: 15000, suffix: "+" },
];