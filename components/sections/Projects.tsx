'use client';

import React from 'react';
import { Github, ExternalLink, Code, Database, Brain, BarChart, LineChart, Server, Globe } from 'lucide-react';

// Comprehensive project data structure showcasing technical depth and measurable impact
const projects = [
  {
    title: "RAG-LLM-LangChain",
    description: "Intelligent Loan Document Processing System using RAG, Lang Chain. This system implements an intelligent loan document processing assistant that helps analyze loan applications, policy documents, and historical loan data using RAG (Retrieval-Augmented Generation) with AWS Bedrock and ChromaDB.",
    category: "AI/ML",
    icon: Brain,
    metrics: [
      "Document Processing (PDF, CSV)",
      "Semantic Search with AWS Bedrock Embeddings",
      "Vector Storage with ChromaDB",
      "Intelligent Question Answering with Multiple LLM Support",
      "Source Reference Tracking"
    ],
    technical_details: [
      "Implemented fallback responses for connection issues",
      "Built progress tracking and caching features",
      "Added enhanced error handling capabilities",
      "Developed vector storage with ChromaDB for efficient retrieval",
      "Created source reference tracking for document citations"
    ],
    technologies: [
      "Retrieval-Augmented Generation (RAG)", "LangChain", "Natural Language Processing (NLP)", "Large Language Models (LLM)", "AWS Bedrock", "ChromaDB"
    ],
    github: "https://github.com/naveenmorla1901/RAG-LLM-Deepseek",
    demo: null,
    image: "/api/placeholder/600/400"
  },
  {
    title: "Agentic multi-model AutoScrape",
    description: "I developed AutoScrape AI, an innovative platform that transforms natural language requests into functional web scraping code using dual Large Language Models (LLMs). Users simply describe what data they need from any website, and the system automatically generates, tests, and refines Python scraping code until it successfully extracts the requested information.",
    category: "AI/Web Scraping",
    icon: Globe,
    metrics: [
      "Dual-LLM Architecture: Cost-effective helper LLM (Gemini) handles prompt formatting and error analysis, while a user-selected coding LLM generates the actual scraping code",
      "Intelligent Refinement Loop: Tests generated code, analyzes errors, and refines the approach until successful",
      "Data Validation: Verifies that extracted data fulfills user requirements, not just that code executes",
      "Multi-Provider Support: Integrates with OpenAI, Anthropic, and Google using LangChain",
      "Secure Code Execution: Sandboxed environment with resource limitations and dependency management"
    ],
    technical_details: [
      "Backend: FastAPI with asynchronous processing",
      "Frontend: Responsive interface with Bootstrap",
      "Code Execution: Secure sandbox with dynamic library installation",
      "Error Analysis: Specialized detection for web scraping errors",
      "Data Processing: JSON extraction and validation against requirements"
    ],
    technologies: [
      "Large Language Model (LLM) Integration", "AI Application Development", "Full-Stack Development", "LangChain", "OpenAI API", "Claude API", "Gemini API", "FastAPI"
    ],
    github: "https://github.com/naveenmorla1901/auto-scrapper",
    demo: null,
    image: "/api/placeholder/600/400"
  },
  {
    title: "Automated Job Market Analytics System",
    description: "Developed a comprehensive job tracking system that automatically scrapes, processes, and visualizes tech job postings from 140+ corporate career sites every one hour, providing real-time insights into the tech job market with advanced filtering and visualization capabilities.",
    category: "Data Analytics",
    icon: BarChart,
    metrics: [
      "Built full-stack application using Python, FastAPI, PostgreSQL, and Streamlit",
      "Implemented 140+ custom web scrapers for major tech companies",
      "Created intelligent role validation system using NLP techniques",
      "Designed interactive dashboard with real-time filtering capabilities",
      "Automated hourly job data updates using APScheduler"
    ],
    technical_details: [
      "Backend: Python, FastAPI, SQLAlchemy, PostgreSQL",
      "Frontend: Streamlit, Plotly, Pandas",
      "DevOps: GitHub Actions, Nginx, Systemd",
      "Monitoring: Custom metrics dashboard, psutil",
      "Deployed on Oracle Cloud with CI/CD pipeline via GitHub Actions"
    ],
    technologies: [
      "Python", "FastAPI", "PostgreSQL", "Streamlit", "Web Scraping", "SQLAlchemy", "GitHub Actions", "Oracle Cloud", "CI/CD", "Data Visualization", "Data Engineering"
    ],
    github: "https://github.com/naveenmorla1901/job-tracker",
    demo: null,
    image: "/api/placeholder/600/400"
  },
  {
    title: "Graph Neural Network-Based Anomaly Detection",
    description: "Research project focusing on anomaly detection in multivariate time series data using Graph Neural Networks. Associated with Bowling Green State University.",
    category: "Machine Learning",
    icon: Brain,
    metrics: [
      "Developed novel GNN approach for multivariate time series analysis",
      "Presented research at university symposium",
      "Created reusable framework for anomaly detection"
    ],
    technical_details: [
      "Implemented graph structure representation of time series data",
      "Developed neural network architectures for pattern recognition",
      "Created visualization components for anomaly detection results",
      "Benchmarked against traditional anomaly detection techniques"
    ],
    technologies: [
      "Graph Neural Networks", "Python", "Deep Learning", "Time Series Analysis", "PyTorch", "Data Visualization"
    ],
    github: "https://github.com/naveenmorla1901/GNN",
    demo: null,
    image: "/api/placeholder/600/400"
  },
  {
    title: "MGMT Glioblastoma Prediction from MRI",
    description: "This project investigates whether there are sufficient feature differences in MGMT positive and MGMT negative glioblastomas to classify them based on MRI scans alone using Deep Convolutional Neural Networks.",
    category: "Medical AI",
    icon: Brain,
    metrics: [
      "Developed CNN model for medical image classification",
      "Achieved significant accuracy in predicting MGMT status",
      "Created visualization tools for feature importance"
    ],
    technical_details: [
      "Implemented deep learning architectures for medical image analysis",
      "Developed preprocessing pipeline for MRI scans",
      "Created data augmentation techniques for limited medical datasets",
      "Built evaluation framework to assess model performance"
    ],
    technologies: [
      "Deep Learning", "Convolutional Neural Networks", "Medical Image Analysis", "Python", "TensorFlow", "Data Visualization"
    ],
    github: null,
    demo: null,
    image: "/api/placeholder/600/400"
  },
  {
    title: "Nutrition Dashboard",
    description: "Interactive dashboard for analyzing nutrition values and calorie consumption of daily meals over a period of time, providing insights into dietary patterns and trends.",
    category: "Data Visualization",
    icon: LineChart,
    metrics: [
      "Comprehensive tracking of nutrition metrics and calorie intake",
      "Visualization of dietary patterns and trends",
      "Analysis of nutritional balance and deficit areas"
    ],
    technical_details: [
      "Built interactive dashboard using Tableau",
      "Integrated SQL database for data storage and retrieval",
      "Deployed on AWS for accessibility",
      "Created Excel templates for data entry and reporting"
    ],
    technologies: [
      "SQL", "Tableau", "Amazon Web Services (AWS)", "Microsoft Excel", "Data Visualization", "Data Analysis"
    ],
    github: null,
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
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">Key Features:</h4>
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