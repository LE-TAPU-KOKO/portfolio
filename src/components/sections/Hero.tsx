import React from 'react';
import { Mail, Phone, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-yellow-50 rounded-bl-[100px]"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Hey there, I'm <span className="text-teal-600">Ramaswamy B</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
              Aspiring AI & Data Scientist passionate about creating intelligent
              solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-300 text-center sm:text-left"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-teal-600 text-teal-600 rounded-md hover:bg-teal-50 transition-colors duration-300 text-center sm:text-left"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-600" />
                <a href="mailto:vkram8505@gmail.com" className="text-gray-700 hover:text-teal-600 transition-colors">
                  vkram8505@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-600" />
                <a href="tel:+917010078887" className="text-gray-700 hover:text-teal-600 transition-colors">
                  +91-7010078887
                </a>
              </div>
              <div className="flex items-center space-x-3 mt-2">
                <div className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">Google Summer of Code Contributor</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-60 h-60 md:w-80 md:h-80 bg-teal-500 rounded-full overflow-hidden relative">
                {/* Profile image would go here, using a placeholder style for now */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <span className="text-6xl md:text-8xl font-bold text-white opacity-50">RB</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 rounded-lg px-4 py-2 shadow-lg">
                <p className="text-sm font-bold text-gray-800">AI & Data Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;