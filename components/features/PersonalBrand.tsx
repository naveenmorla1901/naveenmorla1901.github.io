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
    description: "Built multi-provider AI architectures with Claude, Gemini, DeepSeek using LangChain and vector databases"
  },
  {
    icon: Brain,
    title: "Business Intelligence",
    description: "Designed Power BI dashboards for 15+ stakeholders, forecasting case growth across 50,000+ cases"
  },
  {
    icon: Server,
    title: "Data Engineering",
    description: "Created FastAPI pipelines processing 1TB+ daily data via Azure Functions with end-to-end CI/CD"
  },
  {
    icon: LineChart,
    title: "ML Research",
    description: "Built Graph Neural Networks for anomaly detection and deep learning models for medical imaging"
  }
];

const PersonalBrand: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="relative z-10 text-white text-center max-w-5xl mx-auto px-4">
        {/* Icon Grid */}
        <div className="mb-6 sm:mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
          {[Brain, Code, Database, Globe, Server, LineChart].map((Icon, index) => (
            <div
              key={index}
              className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-white bg-opacity-10 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:rotate-6"
            >
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </div>
          ))}
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-fadeIn">
          Naveen Morla
        </h1>

        <div className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-8 opacity-90 px-2">
          Data Scientist & Business Intelligence | The Lisinski Law Firm
        </div>

        <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-80 px-2">
          5+ Years | LLM & RAG Systems | Analytics & Forecasting | MLOps & Cloud Infrastructure | Master's in Data Science
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-white bg-opacity-10 rounded-full text-xs sm:text-sm md:text-base">Large Language Models</span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-white bg-opacity-10 rounded-full text-xs sm:text-sm md:text-base">RAG Systems</span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-white bg-opacity-10 rounded-full text-xs sm:text-sm md:text-base">FastAPI</span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-white bg-opacity-10 rounded-full text-xs sm:text-sm md:text-base">Azure Cloud</span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-white bg-opacity-10 rounded-full text-xs sm:text-sm md:text-base">Power BI</span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-white bg-opacity-10 rounded-full text-xs sm:text-sm md:text-base">MLOps</span>
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
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
          >
            Contact Me
          </button>
          <a
            href="/Naveen_morla_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
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