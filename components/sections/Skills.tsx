'use client';

import React, { useState } from 'react';
import { Brain, Database, Server, Code, BarChart } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: {
    name: string;
    level: number;
    description?: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Data Science & ML",
    icon: <Brain className="w-6 h-6" />,
    skills: [
      { name: "Machine Learning", level: 90, description: "Predictive modeling, classification, regression" },
      { name: "Deep Learning", level: 85, description: "PyTorch, TensorFlow, Neural Networks" },
      { name: "NLP", level: 85, description: "Text processing, sentiment analysis" },
      { name: "Statistical Analysis", level: 90, description: "Hypothesis testing, statistical modeling" }
    ]
  },
  {
    name: "Data Engineering",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "ETL Pipeline", level: 90, description: "Data extraction, transformation, loading" },
      { name: "Big Data", level: 85, description: "PySpark, Hadoop ecosystem" },
      { name: "Data Modeling", level: 85, description: "Database design, schema optimization" },
      { name: "Data Processing", level: 90, description: "Polars, PySpark, data wrangling" }
    ]
  },
  {
    name: "Software Development",
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: "Python", level: 95, description: "FastAPI, Django, Flask" },
      { name: "JavaScript/React", level: 85, description: "Frontend development, state management" },
      { name: "SQL", level: 90, description: "PostgreSQL, MySQL, query optimization" },
      { name: "APIs", level: 90, description: "RESTful APIs, API design" }
    ]
  },
  {
    name: "DevOps & Cloud",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Docker", level: 85, description: "Containerization, microservices" },
      { name: "Kubernetes", level: 80, description: "Container orchestration" },
      { name: "AWS", level: 85, description: "Cloud services, deployment" },
      { name: "CI/CD", level: 80, description: "Automated deployment, testing" }
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
      
      {/* Category Selection */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {skillCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(index)}
            className={`p-6 rounded-xl transition-all duration-200 ${
              activeCategory === index 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white hover:bg-gray-50'
            }`}
          >
            <div className="flex flex-col items-center">
              {category.icon}
              <span className="mt-2 text-sm font-medium">{category.name}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-6">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              {hoveredSkill === skill.name && skill.description && (
                <div className="absolute mt-2 p-2 bg-gray-800 text-white text-sm rounded-md shadow-lg z-10">
                  {skill.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}