'use client';

import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Brain, 
  Database, 
  Code,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const experiences = [
  {
    period: "Feb 2024 - Present",
    company: "THK Manufacturing of America",
    role: "Data Scientist & Software Engineer",
    location: "Columbus, Ohio",
    description: "Leading data science initiatives to optimize manufacturing processes through advanced ML solutions.",
    achievements: [
      "Developed predictive models improving efficiency by 40%",
      "Built scalable data pipelines processing 500+ GB data",
      "Implemented real-time ML inference systems"
    ],
    focus: {
      ai: ["PyTorch", "TensorFlow", "NLP Models"],
      engineering: ["FastAPI", "Kubernetes", "PostgreSQL"],
      analytics: ["Real-time Dashboards", "Predictive Analytics"]
    }
  },
  {
    period: "May 2019 - April 2021",
    company: "PAGO Analytics",
    role: "Data Scientist",
    location: "India",
    description: "Led AI-powered solutions for talent acquisition and data analysis.",
    achievements: [
      "Built AI-powered resume parsing system improving efficiency by 30%",
      "Optimized databases reducing query times by 40%",
      "Created analytics dashboards for stakeholder insights"
    ],
    focus: {
      ai: ["NLP", "BERT Models", "Deep Learning"],
      engineering: ["AWS", "SQL", "Python"],
      analytics: ["Power BI", "Statistical Analysis"]
    }
  },
  {
    period: "March 2018 - February 2019",
    company: "Knowledge Matrix",
    role: "Data Analyst",
    location: "India",
    description: "Focused on data analysis and visualization to drive business insights.",
    achievements: [
      "Developed ETL pipelines for efficient data processing",
      "Created analytics dashboards improving conversion by 25%",
      "Implemented statistical analysis methods"
    ],
    focus: {
      ai: ["Statistical Models", "Predictive Analytics"],
      engineering: ["ETL Pipelines", "SQL", "Python"],
      analytics: ["Tableau", "Business Intelligence"]
    }
  }
];

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const rotateExperiences = (direction: 'left' | 'right') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newIndex = direction === 'left' 
      ? (activeIndex - 1 + experiences.length) % experiences.length
      : (activeIndex + 1) % experiences.length;
    
    setActiveIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
      
      <div className="relative min-h-[600px] flex items-center">
        {/* Navigation Arrows */}
        <button
          onClick={() => rotateExperiences('left')}
          className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={() => rotateExperiences('right')}
          className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
          disabled={isAnimating}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Experience Cards */}
        <div className="w-full overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 px-4 transition-all duration-500
                  ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}
              >
                <div className="bg-white rounded-xl shadow-xl p-8">
                  {/* Company and Role Info */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{exp.description}</p>

                  {/* Key Achievements */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                          <p className="text-gray-700">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Brain className="w-5 h-5 text-blue-600 mr-2" />
                        <h5 className="font-medium">AI/ML</h5>
                      </div>
                      <div className="space-y-1">
                        {exp.focus.ai.map((item, i) => (
                          <p key={i} className="text-sm text-gray-600">{item}</p>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Code className="w-5 h-5 text-purple-600 mr-2" />
                        <h5 className="font-medium">Engineering</h5>
                      </div>
                      <div className="space-y-1">
                        {exp.focus.engineering.map((item, i) => (
                          <p key={i} className="text-sm text-gray-600">{item}</p>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Database className="w-5 h-5 text-green-600 mr-2" />
                        <h5 className="font-medium">Analytics</h5>
                      </div>
                      <div className="space-y-1">
                        {exp.focus.analytics.map((item, i) => (
                          <p key={i} className="text-sm text-gray-600">{item}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {experiences.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCarousel;