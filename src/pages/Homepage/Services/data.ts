import theme from '../../../themes';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ElementType;
  color: string;
  image?: string;
  mobileImage?: string;
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export const services: Service[] = [
  {
    id: 'student-management',
    title: 'Student Management',
    description: 'Comprehensive student data management from admission to graduation. Track academic progress, attendance, and behavior all in one centralized system.',
    icon: SchoolIcon,
    color: `${theme.palette.primary.main}`,
    image: '/home/services/studentManagement.png',
    mobileImage: '/home/services/mobileStudentManagement.png',
    features: [
      {
        title: 'Digital Records',
        description: 'Maintain complete student profiles with academic history, medical records, and family information.',
        icon: '📋'
      },
      {
        title: 'Attendance Tracking',
        description: 'Real-time attendance monitoring with automated parent notifications and detailed reports.',
        icon: '✓'
      }
    ]
  },
  {
    id: 'academic-management',
    title: 'Academic Management',
    description: 'Streamline curriculum planning, timetable creation, and grade management. Create a seamless academic experience for teachers and students.',
    icon: AutoStoriesIcon,
    color: '#06B6D4',
    image: '/home/services/academicManagement.png',
    mobileImage: '/home/services/mobileAcademicManagement.png',
    features: [
      {
        title: 'Grade Management',
        description: 'Efficient grading system with automated calculations, report card generation, and progress tracking.',
        icon: '📊'
      },
      {
        title: 'Timetable Scheduling',
        description: 'Create and manage class schedules, assign teachers, and handle room allocations effortlessly.',
        icon: '📅'
      }
    ]
  },
  {
    id: 'fee-management',
    title: 'Fee Management',
    description: 'Complete financial management solution for school fees. Handle invoicing, payments, and financial reporting with ease and transparency.',
    icon: MonetizationOnIcon,
    color: '#F59E0B',
    image: '/home/services/feeManagement.png',
    mobileImage: '/home/services/mobileFeeManagement.png',
    features: [
      {
        title: 'Online Payments',
        description: 'Accept fee payments through multiple channels with automated receipt generation and reminders.',
        icon: '💳'
      },
      {
        title: 'Financial Reports',
        description: 'Generate comprehensive financial reports, track outstanding fees, and manage expense records.',
        icon: '📈'
      }
    ]
  },
  {
    id: 'parent-communication',
    title: 'Parent Communication',
    description: 'Keep parents engaged and informed with real-time updates. Foster strong school-home partnerships through seamless communication.',
    icon: EscalatorWarningIcon,
    color: '#EC4899',
    image: '/home/services/parentCommunication.png',
    mobileImage: '/home/services/mobileParentCommunication.png',
    features: [
      {
        title: 'Instant Notifications',
        description: 'Send announcements, event updates, and important notices directly to parents via SMS and email.',
        icon: '📱'
      },
      {
        title: 'Progress Updates',
        description: 'Share student performance, attendance, and behavior reports with parents in real-time.',
        icon: '📝'
      }
    ]
  },
  {
    id: 'staff-management',
    title: 'Staff Management',
    description: 'Efficiently manage your teaching and non-teaching staff. Handle HR processes, payroll, and performance evaluations all in one place.',
    icon: SupervisorAccountIcon,
    color: '#10B981',
    image: '/home/services/staffManagement.png',
    mobileImage: '/home/services/mobileStaffManagement.png',
    features: [
      {
        title: 'HR & Payroll',
        description: 'Manage employee records, process payroll, track leave requests, and generate salary slips automatically.',
        icon: '💼'
      },
      {
        title: 'Performance Tracking',
        description: 'Monitor staff performance, conduct evaluations, and maintain professional development records.',
        icon: '⭐'
      }
    ]
  }
];