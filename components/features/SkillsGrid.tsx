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
        name: "Deep Learning",
        details: ["PyTorch", "TensorFlow", "Neural Networks", "CNN", "RNN"]
      },
      {
        name: "Natural Language Processing",
        details: ["BERT", "Transformers", "LLMs", "Spacy", "NLTK"]
      },
      {
        name: "Computer Vision",
        details: ["OpenCV", "Image Processing", "Object Detection"]
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
        details: ["FastAPI", "Django", "Node.js", "RESTful APIs"]
      },
      {
        name: "Frontend",
        details: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
      },
      {
        name: "Testing & CI/CD",
        details: ["pytest", "GitHub Actions", "Jenkins"]
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
        details: ["PostgreSQL", "MongoDB", "Redis", "Neo4j"]
      },
      {
        name: "Big Data",
        details: ["Spark", "Hadoop", "Kafka", "Airflow"]
      },
      {
        name: "ETL",
        details: ["Data Pipelines", "Data Warehousing", "Data Lakes"]
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
        details: ["AWS", "GCP", "Azure"]
      },
      {
        name: "Containerization",
        details: ["Docker", "Kubernetes", "Microservices"]
      },
      {
        name: "Infrastructure",
        details: ["Terraform", "CI/CD", "Monitoring"]
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
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <Brain className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium mb-2">Large Language Models</h4>
            <p className="text-sm text-gray-600">
              Building applications with state-of-the-art language models and RAG systems
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <Globe className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium mb-2">Graph Neural Networks</h4>
            <p className="text-sm text-gray-600">
              Applying GNNs to solve complex manufacturing and network problems
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <Terminal className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium mb-2">MLOps & Deployment</h4>
            <p className="text-sm text-gray-600">
              Streamlining ML operations and model deployment at scale
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <GitBranch className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium mb-2">AI Systems Integration</h4>
            <p className="text-sm text-gray-600">
              Integrating AI solutions with existing business systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;