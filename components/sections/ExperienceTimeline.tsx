'use client';

import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Data Scientist / Software Engineer",
    company: "THK Manufacturing of America",
    period: "Jan 2024 - Present",
    location: "Columbus, Ohio",
    achievements: [
      "Engineered high-performance APIs using FastAPI with advanced caching",
      "Developed predictive models with PyTorch and TensorFlow",
      "Architected containerized microservices with Kubernetes and Docker",
      "Created dynamic data visualizations using Tableau",
    ],
    technologies: ["FastAPI", "PyTorch", "TensorFlow", "Kubernetes", "Docker", "PostgreSQL", "React"]
  },
  {
    title: "Data Scientist",
    company: "Pago Analytics",
    period: "May 2019 - Apr 2021",
    location: "India",
    achievements: [
      "Developed AI-powered resume parsing system with 30% efficiency improvement",
      "Orchestrated collection and labeling of 10,000+ resumes",
      "Improved data handling and system performance by 2X",
      "Implemented data mining and KPI metrics definition"
    ],
    technologies: ["Python", "AWS", "NLTK", "NLP", "Spacy", "SQL", "Power BI"]
  },
  {
    title: "Data Analyst",
    company: "Knowledge Matrix",
    period: "Mar 2018 - Feb 2019",
    location: "India",
    achievements: [
      "Built ETL pipeline saving 5+ hours for 10M records",
      "Created visually appealing dashboards using Tableau",
      "Applied statistical techniques for pattern recognition",
    ],
    technologies: ["Python", "SQL", "Tableau", "ETL", "Statistical Analysis"]
  }
];

export default function ExperienceTimeline() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Professional Journey</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

        {/* Experience items */}
        {experiences.map((exp, index) => (
          <div key={index} className={`mb-12 flex flex-col md:flex-row ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}>
            <div className="md:w-1/2 p-6">
              <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-200 hover:scale-105">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <h4 className="text-lg text-blue-600 mb-1">{exp.company}</h4>
                <p className="text-gray-600 mb-4">{exp.location}</p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {index !== experiences.length - 1 && (
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-8">
                <div className="w-4 h-4 rounded-full bg-blue-600"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}