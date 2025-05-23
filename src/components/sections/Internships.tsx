import React from 'react';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';
import { internships } from '../../data/internships';

const Internships = () => {
  return (
    <section id="internships" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            My internships and professional work experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {internships.map((internship, index) => (
            <div 
              key={index}
              className={`relative pl-8 ${
                index !== internships.length - 1 ? 'pb-12' : ''
              }`}
            >
              {index !== internships.length - 1 && (
                <div className="absolute left-3 top-8 h-full w-0.5 bg-gray-200"></div>
              )}

              <div className="absolute left-0 top-5 w-7 h-7 bg-teal-500 rounded-full flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 ml-4 hover:shadow-lg transition-shadow duration-300 border-l-4 border-teal-500">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {internship.title} at {internship.company}
                  </h3>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 text-teal-600 mr-1" />
                    <span className="text-sm text-gray-600">{internship.period}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  {internship.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <a 
            href="#skills"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors"
          >
            <span className="font-medium">View my complete skill set</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Internships;