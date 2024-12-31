'use client';

import React from 'react';
import { Github, ExternalLink, Code, Database, Brain, BarChart, LineChart, Server } from 'lucide-react';

// Comprehensive project data structure showcasing technical depth and measurable impact
const projects = [
  {
    title: "AI-Powered Resume Parser",
    description: "Developed an intelligent resume parsing system using advanced NLP and deep learning techniques. The system automatically extracts and categorizes information from resumes, significantly improving the hiring process efficiency and candidate matching accuracy.",
    category: "Machine Learning",
    icon: Brain,
    metrics: [
      "Improved hiring process efficiency by 30%",
      "Processed and analyzed 10,000+ resumes",
      "Increased candidate matching accuracy by 20%"
    ],
    technical_details: [
      "Implemented BERT-based NLP models for text classification and entity extraction",
      "Built custom named entity recognition (NER) system for resume-specific data",
      "Created scalable API endpoints with FastAPI for seamless integration",
      "Deployed models on AWS SageMaker with automated retraining pipeline"
    ],
    technologies: [
      "Python", "NLTK", "Spacy", "TensorFlow", "AWS", "FastAPI", "Docker"
    ],
    github: "https://github.com/naveenmorla1901/resume-parser",
    demo: null,
    image: "/api/placeholder/600/400"
  },
  {
    title: "Manufacturing Predictive Analytics",
    description: "Built an end-to-end predictive analytics system for manufacturing processes using machine learning. The system forecasts lead times, optimizes inventory management, and provides real-time insights through interactive dashboards.",
    category: "Data Science",
    icon: LineChart,
    metrics: [
      "Reduced query response times by 40%",
      "Improved inventory optimization by 25%",
      "Decreased production downtime by 15%"
    ],
    technical_details: [
      "Developed time series forecasting models with PyTorch for demand prediction",
      "Implemented real-time data processing pipeline with Kafka and PySpark",
      "Created interactive dashboards with React and D3.js for data visualization",
      "Containerized application with Docker and Kubernetes for scalability"
    ],
    technologies: [
      "PyTorch", "FastAPI", "PostgreSQL", "Docker", "Kubernetes", "React", "Redux"
    ],
    github: "https://github.com/naveenmorla1901/manufacturing-analytics",
    demo: null,
    image: "/api/placeholder/600/400"
  },
  {
    title: "Data Pipeline Optimization",
    description: "Engineered a high-performance ETL pipeline using modern data engineering tools. The system handles large-scale data processing and transformation while ensuring data quality and reliability throughout the pipeline.",
    category: "Data Engineering",
    icon: Server,
    metrics: [
      "Processed 10M+ records with 5+ hours saved per batch",
      "Improved data accuracy by 20% through automated validation",
      "Reduced processing costs by 30% through optimization"
    ],
    technical_details: [
      "Built distributed processing system with PySpark for scalable data handling",
      "Implemented comprehensive data quality checks and monitoring systems",
      "Created automated testing and deployment pipeline with GitHub Actions",
      "Designed fault-tolerant architecture with error handling and recovery"
    ],
    technologies: [
      "PySpark", "AWS", "Airflow", "Python", "SQL", "MongoDB", "Docker"
    ],
    github: "https://github.com/naveenmorla1901/etl-pipeline",
    demo: null,
    image: "/api/placeholder/600/400"
  },
  {
    title: "Interactive Analytics Dashboard",
    description: "Designed and implemented a comprehensive analytics platform that provides real-time insights through interactive visualizations. The system integrates multiple data sources and allows for dynamic data exploration.",
    category: "Full Stack Development",
    icon: BarChart,
    metrics: [
      "Increased stakeholder engagement by 30%",
      "Reduced decision-making time by 18%",
      "Improved data accessibility for 200+ users"
    ],
    technical_details: [
      "Built responsive frontend with React and Material-UI",
      "Implemented real-time data updates using WebSocket",
      "Created reusable chart components with D3.js",
      "Designed RESTful API with FastAPI for data retrieval"
    ],
    technologies: [
      "React", "TypeScript", "D3.js", "FastAPI", "PostgreSQL", "Redis", "Docker"
    ],
    github: "https://github.com/naveenmorla1901/analytics-dashboard",
    demo: null,
    image: "/api/placeholder/600/400"
  }
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      
      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="md:flex">
              {/* Project Image/Preview */}
              <div className="md:w-2/5">
                <div className="h-64 bg-gray-200 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="md:w-3/5 p-6">
                <div className="flex items-center mb-4">
                  {React.createElement(project.icon, { className: "w-6 h-6 text-blue-600 mr-2" })}
                  <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                </div>

                <p className="text-gray-600 mb-6">{project.description}</p>

                {/* Key Metrics */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">Key Achievements:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.metrics.map((metric, mIndex) => (
                      <div key={mIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Implementation */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">Technical Details:</h4>
                  <div className="space-y-2">
                    {project.technical_details.map((detail, dIndex) => (
                      <div key={dIndex} className="flex items-start text-sm text-gray-600">
                        <Code className="w-4 h-4 mr-2 mt-1 text-blue-600" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <span 
                        key={tIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Profile Link */}
      <div className="text-center mt-12">
        <a 
          href="https://github.com/naveenmorla1901"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Github className="w-5 h-5 mr-2" />
          <span>View More Projects on GitHub</span>
        </a>
      </div>
    </div>
  );
}