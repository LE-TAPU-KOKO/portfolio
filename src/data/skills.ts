export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python", "C++", "Java", "Solidity"],
    icon: "Code"
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript", "FastAPI", "Web3.js"],
    icon: "Globe"
  },
  {
    title: "Frameworks",
    skills: ["PyTorch", "TensorFlow", "Keras", "Hugging Face", "OpenCV", "Mediapipe", "React.js", "Tailwind CSS"],
    icon: "Library"
  },
  {
    title: "Tools",
    skills: ["VS Code", "Jupyter Notebook", "Google Colab", "GitHub", "Docker", "Postman", "Streamlit", "Gradio"],
    icon: "Tool"
  },
  {
    title: "Data Science",
    skills: ["Data Analysis", "Data Visualization", "Machine Learning", "Deep Learning", "NLP"],
    icon: "BarChart2"
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Communication", "Teamwork", "Critical Thinking", "Time Management"],
    icon: "Users"
  }
];