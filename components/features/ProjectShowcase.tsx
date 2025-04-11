'use client';

import React from 'react';
import {
  Github,
  Brain,
  Code,
  Database,
  ArrowRight,
  Globe
} from 'lucide-react';

const projects = [
  {
    title: "Agentic multi-model AutoScrape",
    description: "I developed AutoScrape AI, an innovative platform that transforms natural language requests into functional web scraping code using dual Large Language Models (LLMs). Users simply describe what data they need from any website, and the system automatically generates, tests, and refines Python scraping code until it successfully extracts the requested information.",
    category: "AI/Web Scraping",
    icon: Globe,
    highlights: [
      "Dual-LLM Architecture: Cost-effective helper LLM (Gemini) handles prompt formatting and error analysis, while a user-selected coding LLM generates the actual scraping code",
      "Intelligent Refinement Loop: Tests generated code, analyzes errors, and refines the approach until successful",
      "Data Validation: Verifies that extracted data fulfills user requirements, not just that code executes",
      "Multi-Provider Support: Integrates with OpenAI, Anthropic, and Google using LangChain",
      "Secure Code Execution: Sandboxed environment with resource limitations and dependency management"
    ],
    technical: [
      "Backend: FastAPI with asynchronous processing",
      "Frontend: Responsive interface with Bootstrap",
      "Code Execution: Secure sandbox with dynamic library installation",
      "Error Analysis: Specialized detection for web scraping errors",
      "Data Processing: JSON extraction and validation against requirements"
    ],
    technologies: ["Large Language Model (LLM) Integration", "AI Application Development", "Full-Stack Development", "LangChain", "OpenAI API", "Claude API", "Gemini API", "FastAPI"],
    github: "https://github.com/naveenmorla1901/auto-scrapper"
  },
  {
    title: "Automated Job Market Analytics System",
    description: "Developed a comprehensive job tracking system that automatically scrapes, processes, and visualizes tech job postings from 140+ corporate career sites every one hour, providing real-time insights into the tech job market with advanced filtering and visualization capabilities.",
    category: "Data Analytics",
    icon: Database,
    highlights: [
      "Built full-stack application using Python, FastAPI, PostgreSQL, and Streamlit",
      "Implemented 140+ custom web scrapers for major tech companies",
      "Created intelligent role validation system using NLP techniques",
      "Designed interactive dashboard with real-time filtering capabilities",
      "Automated hourly job data updates using APScheduler"
    ],
    technical: [
      "Backend: Python, FastAPI, SQLAlchemy, PostgreSQL",
      "Frontend: Streamlit, Plotly, Pandas",
      "DevOps: GitHub Actions, Nginx, Systemd",
      "Monitoring: Custom metrics dashboard, psutil",
      "Deployed on Oracle Cloud with CI/CD pipeline via GitHub Actions"
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Streamlit", "Web Scraping", "SQLAlchemy", "GitHub Actions", "Oracle Cloud", "CI/CD", "Data Visualization", "Data Engineering"],
    github: "https://github.com/naveenmorla1901/job-tracker"
  },
  {
    title: "RAG-LLM-LangChain",
    description: "Intelligent Loan Document Processing System using RAG, Lang Chain. This system implements an intelligent loan document processing assistant that helps analyze loan applications, policy documents, and historical loan data using RAG (Retrieval-Augmented Generation) with AWS Bedrock and ChromaDB.",
    category: "AI/ML",
    icon: Brain,
    highlights: [
      "Document Processing (PDF, CSV)",
      "Semantic Search with AWS Bedrock Embeddings",
      "Vector Storage with ChromaDB",
      "Intelligent Question Answering with Multiple LLM Support",
      "Source Reference Tracking"
    ],
    technical: [
      "Implemented fallback responses for connection issues",
      "Built progress tracking and caching features",
      "Added enhanced error handling capabilities",
      "Developed vector storage with ChromaDB for efficient retrieval",
      "Created source reference tracking for document citations"
    ],
    technologies: ["Retrieval-Augmented Generation (RAG)", "LangChain", "Natural Language Processing (NLP)", "Large Language Models (LLM)", "AWS Bedrock", "ChromaDB"],
    github: "https://github.com/naveenmorla1901/RAG-LLM-Deepseek"
  }
];

const otherProjects = [
  {
    title: "Manufacturing Analytics Platform",
    description: "Real-time analytics dashboard for manufacturing insights and process optimization",
    icon: Database,
    highlights: ["Real-time monitoring", "Predictive maintenance", "Process optimization"],
    technologies: ["React", "D3.js", "FastAPI", "TimescaleDB"],
    github: "https://github.com/naveenmorla1901/analytics"
  },
  {
    title: "Data Pipeline Automation",
    description: "Automated ETL pipeline for large-scale data processing and analytics",
    icon: Code,
    highlights: ["Automated workflows", "Data quality checks", "Real-time processing"],
    technologies: ["Apache Airflow", "Spark", "Python", "AWS"],
    github: "https://github.com/naveenmorla1901/etl-pipeline"
  },
  {
    title: "ML Model Deployment System",
    description: "MLOps platform for automated model training and deployment",
    icon: Brain,
    highlights: ["Automated training", "Model versioning", "A/B testing"],
    technologies: ["MLflow", "Docker", "Kubernetes", "FastAPI"],
    github: "https://github.com/naveenmorla1901/mlops"
  }
];

const ProjectShowcase = () => {
  return (
    <div className="space-y-16">
      {/* Main Featured Projects */}
      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                {React.createElement(project.icon, { className: "w-6 h-6 text-blue-600" })}
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{project.description}</p>

              {/* Key Highlights - Simplified for 3-column layout */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Key Highlights</h4>
                <div className="space-y-2">
                  {project.highlights.slice(0, 3).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="w-5 h-5 mr-2" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects Grid */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-semibold">Other Notable Projects</h3>
          <a
            href="https://github.com/naveenmorla1901"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              {React.createElement(project.icon, { className: "w-8 h-8 text-blue-600 mb-4" })}
              <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>

              <div className="space-y-2 mb-4">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                <span className="text-sm">View Code</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;