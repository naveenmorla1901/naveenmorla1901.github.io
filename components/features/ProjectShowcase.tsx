'use client';

import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Brain, 
  Code, 
  Network, 
  Database,
  ArrowRight 
} from 'lucide-react';

const projects = [
  {
    title: "Graph Neural Networks for Manufacturing",
    description: "Advanced GNN models for manufacturing process optimization, focusing on defect prediction and quality control. Leveraged PyTorch Geometric and DGL to build custom neural architectures.",
    category: "Deep Learning",
    icon: Network,
    highlights: [
      "Implemented custom GNN architecture for manufacturing data analysis",
      "Created real-time defect prediction system using graph convolution",
      "Integrated with production systems for automated quality control"
    ],
    technical: [
      "Built on PyTorch Geometric and DGL frameworks",
      "Developed custom graph convolution layers",
      "Implemented attention mechanisms for feature importance"
    ],
    technologies: ["PyTorch Geometric", "DGL", "Python", "FastAPI", "Docker", "Neo4j"],
    github: "https://github.com/naveenmorla1901/GNN"
  },
  {
    title: "AI-Powered Resume Parser",
    description: "Intelligent resume parsing system using advanced NLP and deep learning techniques, improving hiring process efficiency through automated candidate screening and skill matching.",
    category: "NLP",
    icon: Brain,
    highlights: [
      "Improved hiring efficiency by 30% through automation",
      "Processed and analyzed over 10,000 resumes",
      "Enhanced candidate matching accuracy by 20%"
    ],
    technical: [
      "Implemented BERT-based NLP models for text classification",
      "Created custom named entity recognition for resume data",
      "Built automated skill categorization system"
    ],
    technologies: ["BERT", "spaCy", "FastAPI", "AWS", "Docker", "PostgreSQL"],
    github: "https://github.com/naveenmorla1901/resume-parser"
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
      <div className="grid lg:grid-cols-2 gap-8">
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

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Key Highlights</h4>
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Details */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Technical Implementation</h4>
                <div className="space-y-2">
                  {project.technical.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Code className="w-4 h-4 mt-1 text-blue-600" />
                      <span className="text-gray-600">{detail}</span>
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