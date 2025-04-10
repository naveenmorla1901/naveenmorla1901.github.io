'use client';

import React from 'react';
import {
  Brain, Code, Database, Cloud, Terminal,
  BarChart, GitBranch, Globe
} from 'lucide-react';

const skillCategories = [
  {
    icon: Brain,
    title: "Machine Learning & AI",
    description: "Deep learning, neural networks, and advanced AI applications",
    skills: [
      {
        name: "Large Language Models",
        details: ["LangChain", "RAG Systems", "Vector Databases", "Prompt Engineering", "Fine-Tuning"]
      },
      {
        name: "Deep Learning",
        details: ["PyTorch", "TensorFlow", "Neural Networks", "CNN", "GNN"]
      },
      {
        name: "Natural Language Processing",
        details: ["BERT", "Transformers", "LLMs", "Spacy", "NLTK"]
      }
    ]
  },
  {
    icon: Code,
    title: "Development",
    description: "Full-stack development with modern technologies",
    skills: [
      {
        name: "Backend",
        details: ["FastAPI", "Python", "RESTful APIs", "Async Processing"]
      },
      {
        name: "Web Scraping",
        details: ["Selenium", "BeautifulSoup", "Scrapy", "Playwright", "LLM-Generated Scrapers"]
      },
      {
        name: "Frontend",
        details: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Bootstrap"]
      }
    ]
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Building robust data pipelines and infrastructure",
    skills: [
      {
        name: "Databases",
        details: ["PostgreSQL", "ChromaDB", "SQLAlchemy", "Vector Databases"]
      },
      {
        name: "Data Processing",
        details: ["Pandas", "Polars", "NumPy", "Streamlit", "Plotly"]
      },
      {
        name: "ETL & Automation",
        details: ["APScheduler", "Data Pipelines", "Automated Scraping", "Real-time Processing"]
      }
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud-native development and deployment",
    skills: [
      {
        name: "Cloud Platforms",
        details: ["AWS", "Oracle Cloud", "AWS Bedrock", "Cloud Deployment"]
      },
      {
        name: "DevOps",
        details: ["GitHub Actions", "CI/CD", "Nginx", "Systemd"]
      },
      {
        name: "Monitoring & Security",
        details: ["Resource Monitoring", "Sandbox Environments", "Error Handling", "Logging"]
      }
    ]
  }
];

const SkillsGrid = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
        <p className="text-gray-600">
          Specializing in machine learning, data engineering, and full-stack development
          with a focus on building production-ready AI solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              {React.createElement(category.icon, {
                className: "w-8 h-8 text-blue-600"
              })}
              <div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </div>

            <div className="space-y-6">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx}>
                  <h4 className="font-medium text-gray-800 mb-2">{skill.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.details.map((detail, detailIdx) => (
                      <span
                        key={detailIdx}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Current Industry Focus */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
        <h3 className="text-xl font-semibold mb-6">Focused Areas of Innovation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
            <Brain className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium mb-2">Retrieval-Augmented Generation</h4>
            <p className="text-sm text-gray-600">
              Building intelligent document processing systems with RAG architecture and vector databases
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
            <Globe className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium mb-2">Agentic AI Systems</h4>
            <p className="text-sm text-gray-600">
              Developing multi-model LLM architectures for autonomous web scraping and data extraction
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
            <Terminal className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium mb-2">Real-time Data Analytics</h4>
            <p className="text-sm text-gray-600">
              Creating automated systems for job market analysis and visualization with hourly updates
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
            <GitBranch className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium mb-2">Manufacturing AI</h4>
            <p className="text-sm text-gray-600">
              Applying machine learning for manufacturing optimization and predictive maintenance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;