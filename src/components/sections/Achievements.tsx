import React from 'react';
import { 
  Trophy, 
  Code, 
  Network, 
  Github, 
  Award 
} from 'lucide-react';
import { achievements } from '../../data/achievements';

const iconComponents = {
  Trophy,
  Code,
  Network,
  Github,
  Award
};

const Achievements = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  return (
    <section id="achievements" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Recognitions and accomplishments throughout my journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  {getIcon(achievement.icon)}
                </div>
                <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
                  {achievement.title}
                </h3>
              </div>
              
              <p className="text-gray-600 flex-grow mb-4">
                {achievement.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">
                  {achievement.date}
                </span>
                <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs font-medium">
                  Achievement
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Continuous Learning</h3>
          <p className="text-gray-700">
            I'm committed to continuous learning and staying updated with the latest advancements in AI and data science. 
            Currently pursuing additional certifications in advanced machine learning techniques and deep learning specializations.
          </p>
          <div className="mt-4 flex space-x-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
              Deep Learning
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
              NLP
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
              Computer Vision
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;