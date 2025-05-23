import React from 'react';
import { Code, Globe, Library, PenTool as Tool, BarChart2, Users } from 'lucide-react';
import { skillCategories } from '../../data/skills';

const iconComponents = {
  Code,
  Globe,
  Library,
  Tool,
  BarChart2,
  Users
};

const Skills = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
    return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            A collection of technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-teal-500"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-teal-100 rounded-lg mr-3">
                  {getIcon(category.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Always Learning
            </h3>
            <p className="text-gray-700">
              As technology evolves, I'm committed to continuously expanding my skill set. 
              I'm currently exploring more advanced AI techniques and blockchain development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;