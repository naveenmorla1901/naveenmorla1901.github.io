'use client';

import React from 'react';
import { Brain, Database, BarChart as ChartIcon, Code } from 'lucide-react';

interface AchievementProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const achievements: AchievementProps[] = [
  {
    icon: Brain,
    title: "AI Innovation",
    description: "Developed machine learning models improving manufacturing efficiency by 40%"
  },
  {
    icon: Database,
    title: "Large-Scale Data",
    description: "Processed and analyzed 500+ GB of manufacturing data for insights"
  },
  {
    icon: ChartIcon,
    title: "AI Pipeline",
    description: "Built end-to-end ML pipelines handling real-time predictions"
  }
];

const PersonalBrand: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="relative z-10 text-white text-center max-w-5xl mx-auto px-4">
        {/* Icon Grid */}
        <div className="mb-8 flex justify-center space-x-4">
          {[Brain, Code, Database, ChartIcon].map((Icon, index) => (
            <div
              key={index}
              className="w-16 h-16 bg-white bg-opacity-10 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
            >
              <Icon className="w-8 h-8" />
            </div>
          ))}
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Naveen Morla
        </h1>
        
        <div className="text-2xl md:text-3xl mb-8 opacity-90">
          Data Scientist & ML Engineer
        </div>

        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-80">
          Building AI-powered solutions and transforming data into impact
        </p>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
            >
              <achievement.icon className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-colors"
          >
            Contact Me
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalBrand;