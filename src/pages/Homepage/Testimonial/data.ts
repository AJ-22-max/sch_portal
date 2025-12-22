interface TestimonialData {
  id: number;
  name: string;
  company: string;
  avatar: string;
  rating: number;
  testimonial: string;
}

export const baseTestimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Dr. Patricia Williams",
    company: "Principal, Greenwood Academy",
    avatar: "/home/users/user_1.jpg",
    rating: 5,
    testimonial: "SchoolPortal has revolutionized how we manage our institution. From attendance tracking to parent communication, everything is centralized and efficient. Our administrative workload has reduced by 60%, allowing us to focus more on student success."
  },
  {
    id: 2,
    name: "James Okonkwo",
    company: "Math Teacher, St. Mary's Secondary",
    avatar: "/home/users/user_2.jpeg",
    rating: 5,
    testimonial: "As a teacher managing 6 classes, grading and attendance used to be overwhelming. SchoolPortal's teacher dashboard makes it effortless. I can track student progress, share assignments, and communicate with parents all in one place. It's truly a game-changer!"
  },
  {
    id: 3,
    name: "Aisha Mohammed",
    company: "Parent of 3 Students",
    avatar: "/home/users/user_3.jpeg",
    rating: 4,
    testimonial: "Finally, a platform where I can monitor all my children's academic progress in real-time! I receive instant notifications about grades, attendance, and school announcements. The parent portal keeps me connected and informed without constant phone calls to the school."
  },
  {
    id: 4,
    name: "Michael Eze",
    company: "School Administrator, Victory High School",
    avatar: "/home/users/user_4.jpeg",
    rating: 5,
    testimonial: "Managing student data, fee payments, and generating reports used to take days. With SchoolPortal's admin panel, I complete these tasks in minutes. The financial management module alone has saved our school countless hours and improved transparency."
  },
  {
    id: 5,
    name: "Linda Chukwu",
    company: "Vice Principal, Bright Future Academy",
    avatar: "/home/users/user_5.jpeg",
    rating: 5,
    testimonial: "The analytics and reporting features are outstanding! We can now track school performance metrics, identify students who need extra support, and make data-driven decisions. SchoolPortal has elevated our institution to a whole new level of professionalism."
  },
  {
    id: 6,
    name: "Emmanuel Taiwo",
    company: "IT Coordinator, Heritage College",
    avatar: "/home/users/user_6.jpeg",
    rating: 4,
    testimonial: "Implementation was smooth and the support team is incredibly responsive. The platform is intuitive enough that even non-tech-savvy staff adapted quickly. Cloud-based access means we can manage school operations from anywhere, which proved invaluable during remote learning periods."
  },
  {
    id: 7,
    name: "Grace Adeleke",
    company: "Proprietress, Little Stars Nursery & Primary",
    avatar: "/home/users/user_7.jpeg",
    rating: 5,
    testimonial: "As a small school owner, affordability was crucial. SchoolPortal offers enterprise-level features at a price that works for us. The subscription management and fee tracking modules have improved our cash flow, and parents appreciate the professional communication system."
  },
  {
    id: 8,
    name: "Chidi Nnamdi",
    company: "Student, Federal Science College",
    avatar: "/home/users/user_4.jpeg",
    rating: 4,
    testimonial: "The student dashboard makes it easy to access my courses, check grades, and submit assignments online. I love that I can communicate with my teachers through the platform and never miss important announcements. It's like having my entire school life organized in one app!"
  }
];