export interface Internship {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export const internships: Internship[] = [
  {
    title: "Networking Intern",
    company: "PANTECH Tambaram",
    period: "June 2023 - August 2023",
    description: "Worked on networking infrastructure and security protocols. Gained hands-on experience with network configuration, troubleshooting, and optimization.",
    skills: ["Networking", "Security", "Troubleshooting"]
  },
  {
    title: "Hostel Management System Developer",
    company: "AURCC College",
    period: "January 2023 - March 2023",
    description: "Developed a comprehensive hostel management system to streamline administrative tasks, room allocation, and student information management.",
    skills: ["Python", "Database Design", "UI/UX", "System Architecture"]
  }
];