'use client';

import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Code, Brain, Database, BookOpen } from 'lucide-react';

// Comprehensive experience data structure including achievements and technologies
const experiences = [
  {
    title: "Data Scientist & Software Engineer",
    company: "THK Manufacturing of America",
    location: "Columbus, Ohio",
    period: "February 2024 - Present",
    type: "Full-time",
    description: "Leading data science initiatives to optimize manufacturing processes and improve operational efficiency through advanced ML solutions.",
    achievements: [
      {
        title: "Manufacturing Process Optimization",
        description: "Engineered high-performance APIs using FastAPI with advanced caching, improving data processing efficiency by 40%",
        icon: Code
      },
      {
        title: "Predictive Analytics Implementation",
        description: "Developed ML models using PyTorch and TensorFlow for lead time forecasting and inventory optimization",
        icon: Brain
      },
      {
        title: "Data Pipeline Architecture",
        description: "Designed and implemented scalable data pipelines using Kubernetes and Docker for efficient big data processing",
        icon: Database
      }
    ],
    technologies: [
      "FastAPI", "PyTorch", "TensorFlow", "Kubernetes", "Docker", "PostgreSQL", "React", "Python"
    ]
  },
  {
    title: "Data Scientist",
    company: "PAGO Analytics",
    location: "India",
    period: "May 2019 - April 2021",
    type: "Full-time",
    description: "Led the development of AI-powered solutions for talent acquisition and data analysis, significantly improving hiring processes.",
    achievements: [
      {
        title: "AI-Powered Resume Parser",
        description: "Developed an innovative resume parsing system using NLP and deep learning, improving hiring efficiency by 30%",
        icon: Brain
      },
      {
        title: "Database Optimization",
        description: "Optimized SQL databases resulting in 40% reduction in query response times and improved data handling",
        icon: Database
      },
      {
        title: "Analytics Dashboard Development",
        description: "Created interactive dashboards using Power BI, increasing stakeholder engagement by 30%",
        icon: Code
      }
    ],
    technologies: [
      "Python", "NLP", "Deep Learning", "SQL", "AWS", "Power BI", "NLTK", "Spacy"
    ]
  },
  {
    title: "Data Analyst",
    company: "Knowledge Matrix",
    location: "India",
    period: "March 2018 - February 2019",
    type: "Full-time",
    description: "Focused on data analysis and visualization to drive business insights and improve decision-making processes.",
    achievements: [
      {
        title: "ETL Pipeline Development",
        description: "Built efficient ETL pipelines using Python and SQL, processing over 10 million records",
        icon: Database
      },
      {
        title: "Analytics Implementation",
        description: "Developed analytics dashboards leading to 25% increase in conversion rates",
        icon: Code
      },
      {
        title: "Process Optimization",
        description: "Implemented data processing optimizations saving 5+ hours per 10M records",
        icon: Brain
      }
    ],
    technologies: [
      "Python", "SQL", "Tableau", "ETL", "Data Mining", "Statistical Analysis"
    ]
  }
];

// Detailed education information with coursework and focus areas
const education = [
  {
    degree: "Master's in Data Science",
    school: "Bowling Green State University",
    location: "Ohio",
    period: "August 2021 - April 2023",
    description: "Advanced studies in machine learning, statistical analysis, and data engineering with focus on practical applications.",
    courses: [
      {
        name: "Advanced Machine Learning",
        description: "Deep learning architectures, neural networks, model optimization",
        icon: Brain
      },
      {
        name: "Statistical Analysis",
        description: "Probability theory, regression analysis, hypothesis testing",
        icon: Code
      },
      {
        name: "Data Mining",
        description: "Pattern recognition, clustering, association rules",
        icon: Database
      },
      {
        name: "Big Data Technologies",
        description: "Distributed computing, data processing at scale",
        icon: Code
      }
    ]
  },
  {
    degree: "B.Tech in Computer Science",
    school: "Gitam University",
    location: "Hyderabad, India",
    period: "2015 - 2019",
    description: "Built strong foundation in computer science fundamentals and programming concepts.",
    courses: [
      {
        name: "Data Structures & Algorithms",
        description: "Algorithm design, complexity analysis, optimization",
        icon: Code
      },
      {
        name: "Database Systems",
        description: "SQL, database design, query optimization",
        icon: Database
      },
      {
        name: "Software Engineering",
        description: "Development methodologies, system design patterns",
        icon: Brain
      },
      {
        name: "Computer Networks",
        description: "Network protocols, distributed systems",
        icon: Code
      }
    ]
  }
];

// Professional certifications and continuing education
const certifications = [
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    date: "2023",
    description: "Advanced analytics and data interpretation techniques",
    icon: BookOpen
  },
  {
    name: "Docker for Data Scientists",
    issuer: "Docker",
    date: "2023",
    description: "Container orchestration and ML workflow deployment",
    icon: Code
  },
  {
    name: "Spark for Machine Learning & AI",
    issuer: "Databricks",
    date: "2023",
    description: "Large-scale data processing and ML implementations",
    icon: Brain
  }
];

export default function ExperienceTimeline() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>

      {/* Work Experience Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-8 flex items-center">
          <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
          Work Experience
        </h3>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-blue-200">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full" />
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                <div className="text-blue-600 font-medium mb-2">{exp.company}</div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {exp.location}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{exp.description}</p>
                
                <div className="space-y-4 mb-6">
                  {exp.achievements.map((achievement, aIndex) => (
                    <div key={aIndex} className="flex items-start p-3 bg-gray-50 rounded-lg">
                      {React.createElement(achievement.icon, { className: "w-5 h-5 mr-3 text-blue-600 mt-1" })}
                      <div>
                        <h5 className="font-medium text-gray-800">{achievement.title}</h5>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-gray-600 mb-2">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIndex) => (
                      <span 
                        key={tIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-8 flex items-center">
          <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
          Education
        </h3>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-blue-200">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full" />
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                <div className="text-blue-600 font-medium mb-2">{edu.school}</div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {edu.location}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{edu.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {edu.courses.map((course, cIndex) => (
                    <div key={cIndex} className="flex items-start p-3 bg-gray-50 rounded-lg">
                      {React.createElement(course.icon, { className: "w-5 h-5 mr-3 text-blue-600 mt-1" })}
                      <div>
                        <h5 className="font-medium text-gray-800">{course.name}</h5>
                        <p className="text-sm text-gray-600">{course.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-8 flex items-center">
          <Award className="w-6 h-6 mr-2 text-blue-600" />
          Certifications & Professional Development
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {React.createElement(cert.icon, { className: "w-8 h-8 text-blue-600 mb-4" })}
              <h4 className="font-semibold text-gray-800 mb-2">{cert.name}</h4>
              <div className="text-sm text-blue-600 mb-2">{cert.issuer} · {cert.date}</div>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}