export interface DemoVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
    icon: string;
  duration: string;
  category: string;
  color: string;
}

export const demoVideos: DemoVideo[] = [
    {
      id: '1',
      title: 'Student Dashboard Overview',
      description: 'Learn how students access courses, grades, and resources in their personalized dashboard.',
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      icon: 'GraduationCap',
      duration: '5:30',
      category: 'Student',
      color: '#8B5CF6',
    },
    {
      id: '2',
      title: 'Teacher Dashboard Guide',
      description: 'Discover how teachers manage classes, grade assignments, and track student performance.',
      thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      icon: 'ChalkboardTeacher',
      duration: '7:15',
      category: 'Teacher',
      color: '#EC4899',
    },
    {
      id: '3',
      title: 'Admin Panel Walkthrough',
      description: 'Master the administrative tools for managing users, subscriptions, and school operations.',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      icon: 'UserCircleGear',
      duration: '8:45',
      category: 'Administrator',
      color: '#F59E0B',
    },
    {
      id: '4',
      title: 'Analytics & Reports',
      description: 'Understand how to generate insights and track performance metrics across your school.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      icon: 'ChartLineUp',
      duration: '6:20',
      category: 'Analytics',
      color: '#10B981',
    },
    {
      id: '5',
      title: 'Course Management',
      description: 'Learn to create, organize, and manage courses with our intuitive course builder.',
      thumbnail: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      icon: 'Books',
      duration: '9:10',
      category: 'Academic',
      color: '#3B82F6',
    },
    {
      id: '6',
      title: 'Attendance Tracking',
      description: 'Efficiently manage and monitor student attendance with automated tracking tools.',
      thumbnail: 'https://attendancepro.online/wp-content/uploads/2025/07/9-1024x683.webp',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      icon: 'CalendarCheck',
      duration: '4:55',
      category: 'Operations',
      color: '#06B6D4',
    },
  ];