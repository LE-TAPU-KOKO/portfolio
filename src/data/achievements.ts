export interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    title: "Bit-Ai-MI Hackathon Top 10",
    description: "Secured a position in the top 10 teams at the Bit-Ai-MI Hackathon with an innovative AI solution.",
    date: "August 2023",
    icon: "Trophy"
  },
  {
    title: "Google Summer of Code Contributor",
    description: "Selected as a contributor for Google Summer of Code, working on open-source projects that make a difference.",
    date: "Summer 2023",
    icon: "Code"
  },
  {
    title: "Networking Internship",
    description: "Successfully completed a comprehensive networking internship at PANTECH Tambaram.",
    date: "August 2023",
    icon: "Network"
  },
  {
    title: "GitHub Open Source Contribution",
    description: "Active contributor to open-source projects on GitHub, helping build tools for the community.",
    date: "Ongoing",
    icon: "Github"
  },
  {
    title: "NPTEL Intro to LLM",
    description: "Completed and certified in the NPTEL Introduction to Large Language Models course.",
    date: "July 2023",
    icon: "Award"
  }
];