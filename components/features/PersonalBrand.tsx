'use client';

import React from 'react';
import { Brain, Database, BarChart as ChartIcon, Code, Globe, Server, LineChart } from 'lucide-react';

interface AchievementProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const achievements: AchievementProps[] = [
  {
    icon: Globe,
    title: "LLM & RAG Expert",
    description: "Built intelligent systems using LangChain, vector databases, and fine-tuning LLMs"
  },
  {
    icon: Brain,
    title: "AI Applications",
    description: "Developed dual-LLM architecture for natural language to web scraping conversion"
  },
  {
    icon: Server,
    title: "Data Engineering",
    description: "Created job market analytics system tracking 140+ corporate career sites hourly"
  },
  {
    icon: LineChart,
    title: "ML Research",
    description: "Implemented Graph Neural Networks for anomaly detection in time series data"
  }
];

const PersonalBrand: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="relative z-10 text-white text-center max-w-5xl mx-auto px-4">
        {/* Icon Grid */}
        <div className="mb-8 flex justify-center space-x-4">
          {[Brain, Code, Database, Globe, Server, LineChart].map((Icon, index) => (
            <div
              key={index}
              className="w-16 h-16 bg-white bg-opacity-10 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:rotate-6"
            >
              <Icon className="w-8 h-8" />
            </div>
          ))}
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-fadeIn">
          Naveen Morla
        </h1>

        <div className="text-2xl md:text-3xl mb-8 opacity-90">
          Data Scientist & Software Engineer | THK Manufacturing of America
        </div>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-80">
          RAG & LLM Integration | Full-Stack Development | Manufacturing Data Analytics | Master's in Data Science
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="px-4 py-2 bg-white bg-opacity-10 rounded-full text-sm md:text-base">Large Language Models</span>
          <span className="px-4 py-2 bg-white bg-opacity-10 rounded-full text-sm md:text-base">Web Scraping</span>
          <span className="px-4 py-2 bg-white bg-opacity-10 rounded-full text-sm md:text-base">Data Engineering</span>
          <span className="px-4 py-2 bg-white bg-opacity-10 rounded-full text-sm md:text-base">FastAPI</span>
          <span className="px-4 py-2 bg-white bg-opacity-10 rounded-full text-sm md:text-base">Python</span>
          <span className="px-4 py-2 bg-white bg-opacity-10 rounded-full text-sm md:text-base">Machine Learning</span>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <achievement.icon className="w-8 h-8 mb-4 mx-auto text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-sm md:text-base">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Contact Me
          </button>
          <a
            href="/Naveen_morla_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Download Resume
          </a>
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