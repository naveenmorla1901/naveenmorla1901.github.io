'use client';

import React from 'react';
import { Github, ExternalLink, Code, Database, Brain, BarChart, LineChart, Server, Globe } from 'lucide-react';

// Comprehensive project data structure showcasing technical depth and measurable impact
const projects = [
  {
    title: "RAG-LLM - Legal Document Processing System",
    description: "Enterprise Retrieval-Augmented Generation system for intelligent legal and loan document Q&A. Leverages AWS Bedrock Titan embeddings for semantic vector search over PDFs and CSVs, with multi-LLM support (Claude, GPT-4, DeepSeek) and automatic fallback chains.",
    category: "AI/RAG Applications",
    icon: Brain,
    metrics: [
      "Multi-LLM support: DeepSeek, GPT-4, Claude-3 with automatic fallback",
      "Semantic vector search using AWS Bedrock Titan embeddings",
      "Full source reference tracking for AI-generated responses",
      "Document ingestion with embedding caching and batch optimization",
      "Exponential backoff retries and error handling"
    ],
    technical_details: [
      "Architected scalable document ingestion pipeline with ChromaDB vector storage",
      "Implemented retrieval-augmented generation using AWS Bedrock",
      "Multi-LLM orchestration with automatic fallback chains and retry logic",
      "Engineered embedding caching and batch processing for large files",
      "Built source reference tracking system for auditability",
      "Designed progress tracking and performance monitoring"
    ],
    technologies: [
      "AWS Bedrock", "ChromaDB", "LangChain", "Claude API", "GPT-4", "DeepSeek", "Python", "RAG", "Vector Databases", "Semantic Search", "LLMs"
    ],
    github: "https://github.com/naveenmorla1901/RAG-LLM-Deepseek",
    demo: null,
    image: "/api/placeholder/600/400"
  },
  {
    title: "Auto-Scrapper - LLM-Powered Intelligent Web Scraping",
    description: "Innovative agentic platform that transforms natural language requests into functional web scraping code using multi-LLM architecture. Users describe data needs, and the system auto-generates, tests, and refines scraping code until successful.",
    category: "AI/LLM Applications",
    icon: Brain,
    metrics: [
      "Dual-LLM architecture: cost-effective Gemini for analysis, user-selected LLM (GPT-4, Claude, DeepSeek) for code",
      "Intelligent refinement loop with automated error handling",
      "Multi-provider support: OpenAI, Anthropic, Google via LangChain",
      "Real-time token usage tracking and status updates",
      "Secure sandboxed code execution with dependency management"
    ],
    technical_details: [
      "Backend: FastAPI with asynchronous processing",
      "Frontend: Responsive interface with Bootstrap and real-time updates",
      "Code Execution: Secure sandbox with dynamic library installation and resource limitations",
      "LLM Integration: Fallback chains, exponential backoff retries, prompt optimization",
      "Data Processing: JSON extraction, requirement validation, error analysis"
    ],
    technologies: [
      "FastAPI", "LangChain", "OpenAI API", "Claude API", "Gemini API", "Playwright", "BeautifulSoup", "Docker", "Python", "Bootstrap", "LLM Orchestration"
    ],
    github: "https://github.com/naveenmorla1901/auto-scrapper",
    demo: null,
    image: "/api/placeholder/600/400"
  },
  {
    title: "Job Tracker - Automated Job Market Analytics",
    description: "Full-stack job market analytics platform that automatically scrapes tech job postings from 140+ corporate career sites hourly, providing real-time insights into market trends with advanced filtering and visualization.",
    category: "Full-Stack/Web Scraping",
    icon: LineChart,
    metrics: [
      "Scrapes 140+ corporate career portals hourly",
      "Persists 10,000+ job postings in PostgreSQL",
      "Automatic cleanup of records older than 7 days",
      "Interactive Streamlit dashboard with real-time filtering",
      "System monitoring tracking CPU, memory, disk usage"
    ],
    technical_details: [
      "Built full-stack application with Python, FastAPI, PostgreSQL, Streamlit",
      "Implemented 140+ custom web scrapers for major tech companies",
      "Created intelligent role validation system using NLP techniques",
      "Designed interactive dashboard with real-time filtering by role, company, location",
      "Automated hourly updates using APScheduler with GitHub Actions CI/CD",
      "Deployed on Oracle Cloud Infrastructure with Nginx reverse proxy"
    ],
    technologies: [
      "FastAPI", "PostgreSQL", "Streamlit", "APScheduler", "Python", "SQLAlchemy", "GitHub Actions", "Oracle Cloud", "Nginx", "CI/CD", "Data Visualization", "Web Scraping"
    ],
    github: "https://github.com/naveenmorla1901/job-tracker",
    demo: null,
    image: "/api/placeholder/600/400"
  },
  {
    title: "GNN - Graph Neural Network Anomaly Detection",
    description: "Research project developing Graph Neural Network-based anomaly detection for multivariate time series data. Leverages graph-structured representations to model complex inter-sensor dependencies for industrial IoT datasets with superior performance vs traditional baselines.",
    category: "Deep Learning/Research",
    icon: Brain,
    metrics: [
      "Designed graph construction from sensor correlation matrices",
      "Outperformed traditional statistical baselines in detection accuracy",
      "Open-sourced implementation achieving 3 GitHub stars and 1 fork",
      "Practical applicability for predictive maintenance in manufacturing",
      "Demonstrated effectiveness on industrial IoT datasets"
    ],
    technical_details: [
      "Developed Graph Neural Network models using PyTorch Geometric",
      "Implemented graph construction from multivariate time series",
      "Trained GNN models to identify anomalous temporal patterns",
      "Benchmarked against traditional anomaly detection methods",
      "Created visualization tools for anomaly pattern analysis",
      "Published implementation on GitHub with documentation"
    ],
    technologies: [
      "PyTorch", "PyTorch Geometric", "Graph Neural Networks", "Time Series Analysis", "Python", "Deep Learning", "Anomaly Detection"
    ],
    github: "https://github.com/naveenmorla1901/GNN",
    demo: null,
    image: "/api/placeholder/600/400"
  },
  {
    title: "MGMT Glioblastoma Classification from MRI Scans",
    description: "Research project investigating MGMT positive/negative glioblastoma classification from MRI scans using Deep Convolutional Neural Networks. Developed during M.S. in Data Science coursework.",
    category: "Medical AI/Deep Learning",
    icon: Brain,
    metrics: [
      "Developed CNN model for medical image classification",
      "Investigated feature differences between MGMT+ and MGMT- tumors",
      "Achieved significant classification accuracy on MRI datasets",
      "Created feature importance visualization tools",
      "Implemented data augmentation for limited medical datasets"
    ],
    technical_details: [
      "Implemented deep learning architectures for medical image analysis",
      "Developed comprehensive preprocessing pipeline for MRI scans",
      "Created data augmentation techniques for limited datasets",
      "Built evaluation framework with cross-validation and metrics",
      "Implemented visualization tools for CNN feature analysis",
      "Optimized model architecture for medical imaging tasks"
    ],
    technologies: [
      "TensorFlow", "Deep Learning", "Convolutional Neural Networks", "Medical Imaging", "Python", "Image Processing"
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