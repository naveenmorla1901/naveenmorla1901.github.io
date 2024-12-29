'use client';

import React from 'react';
import { Code, Database, BarChart, Brain } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  achievements: string[];
  icon: JSX.Element;
}

const projects: Project[] = [
  {
    title: "AI-Powered Resume Parser",
    description: "Built an intelligent resume parsing system using deep learning and NLP techniques to automate the hiring process.",
    technologies: ["Python", "NLTK", "Spacy", "AWS", "Deep Learning"],
    category: "Machine Learning",
    achievements: [
      "30% improvement in hiring efficiency",
      "Processed 10,000+ resumes",
      "Automated candidate matching"
    ],
    icon: <Brain className="w-6 h-6 text-purple-500" />
  },
  {
    title: "High-Performance Data Pipeline",
    description: "Developed scalable ETL pipeline for processing and analyzing large-scale manufacturing data.",
    technologies: ["FastAPI", "PostgreSQL", "Kubernetes", "Docker"],
    category: "Data Engineering",
    achievements: [
      "Processed 10M+ records",
      "5+ hours time saving",
      "40% faster query response"
    ],
    icon: <Database className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "Created interactive dashboards for inventory management and lead time forecasting.",
    technologies: ["Python", "React", "Tableau", "TensorFlow"],
    category: "Data Visualization",
    achievements: [
      "Real-time monitoring",
      "Predictive insights",
      "Interactive filters"
    ],
    icon: <BarChart className="w-6 h-6 text-green-500" />
  },
  {
    title: "Microservices Architecture",
    description: "Designed and implemented containerized microservices for scalable data processing.",
    technologies: ["Docker", "Kubernetes", "FastAPI", "AWS"],
    category: "Software Engineering",
    achievements: [
      "Scalable architecture",
      "Automated deployment",
      "High availability"
    ],
    icon: <Code className="w-6 h-6 text-red-500" />
  }
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-105">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {project.icon}
                <span className="ml-2 text-sm font-medium text-gray-500">{project.category}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="space-y-2 mb-4">
                {project.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {achievement}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}