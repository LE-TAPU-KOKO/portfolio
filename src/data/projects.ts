export interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  demoLink?: string;
  codeLink?: string;
}

export const projects: Project[] = [
  {
    title: "AI-Powered Gesture Control System",
    description: "Developed a real-time gesture recognition system that allows users to control computer functions through hand gestures. The system uses computer vision to detect and interpret various hand movements.",
    techStack: ["Python", "OpenCV", "Mediapipe"],
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "BlockExam",
    description: "Created a blockchain-based examination system that ensures security, transparency, and integrity of online assessments through smart contracts on the Ethereum network.",
    techStack: ["Solidity", "Ethereum", "Python", "React"],
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "AI-Driven Structured Data Extractor",
    description: "Designed an AI system that can extract structured information from unstructured text data, enabling automated data entry and analysis for businesses.",
    techStack: ["Python", "spaCy", "FastAPI"],
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];