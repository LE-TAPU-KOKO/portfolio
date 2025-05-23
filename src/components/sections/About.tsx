import React from 'react';
import { Brain, Code, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Passionate about harnessing the power of AI and data science to solve complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg mb-4">
              <Brain className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">AI Enthusiast</h3>
            <p className="text-gray-600">
              Dedicated to exploring artificial intelligence, machine learning, and deep learning technologies to create innovative solutions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-4">
              <Database className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Scientist</h3>
            <p className="text-gray-600">
              Skilled in data analysis, visualization, and extracting meaningful insights to drive decision-making processes.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Developer</h3>
            <p className="text-gray-600">
              Experienced in building applications using various programming languages and frameworks, focusing on clean, efficient code.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700 leading-relaxed">
            I am a passionate AI and Data Science enthusiast with a strong foundation in programming and web technologies. 
            My journey in tech began with a curiosity about how data can transform the way we solve problems. 
            I'm particularly interested in the intersection of artificial intelligence and practical applications that can make a difference in people's lives.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            My experience includes contributing to open-source projects, participating in hackathons, and developing systems that leverage AI for improved efficiency. 
            I'm constantly learning and experimenting with new technologies, and I believe in creating solutions that are not only technically sound but also ethical and user-friendly.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            When I'm not coding or analyzing data, I enjoy sharing my knowledge with others and collaborating on challenging projects that push the boundaries of what's possible with AI and data science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;