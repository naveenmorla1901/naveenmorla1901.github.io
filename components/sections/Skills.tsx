'use client';

import React from 'react';
import { Brain, Database, Code, LineChart, Cloud, BarChart } from 'lucide-react';

// Define comprehensive skill categories with detailed proficiency levels and descriptions
const skillCategories = [
  {
    icon: Brain,
    title: "Machine Learning & AI",
    description: "Expertise in developing and deploying advanced ML models and AI solutions",
    skills: [
      { name: "PyTorch", level: 90, description: "Deep learning frameworks, neural networks, computer vision models" },
      { name: "TensorFlow", level: 85, description: "Production ML models, model optimization, distributed training" },
      { name: "Scikit-learn", level: 95, description: "Classical ML algorithms, model evaluation, feature engineering" },
      { name: "NLP/LLMs", level: 85, description: "Text processing, language models, sentiment analysis, transformers" },
      { name: "Computer Vision", level: 80, description: "Image processing, object detection, pattern recognition" },
      { name: "Deep Learning", level: 85, description: "Neural architecture design, model optimization, transfer learning" }
    ]
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Building robust data pipelines and scalable processing systems",
    skills: [
      { name: "Python", level: 95, description: "Advanced programming, data structures, algorithmic solutions" },
      { name: "SQL & NoSQL", level: 90, description: "Complex queries, database optimization, schema design" },
      { name: "PySpark", level: 85, description: "Distributed computing, large-scale data processing" },
      { name: "ETL Pipelines", level: 90, description: "Data extraction, transformation, loading, automation" },
      { name: "Data Preprocessing", level: 95, description: "Cleaning, normalization, feature engineering" },
      { name: "FastAPI", level: 90, description: "High-performance API development, async processing" }
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Deploying and managing scalable cloud solutions",
    skills: [
      { name: "Docker", level: 85, description: "Container orchestration, microservices architecture" },
      { name: "Kubernetes", level: 80, description: "Container management, service deployment, scaling" },
      { name: "AWS Services", level: 85, description: "EC2, S3, Lambda, SageMaker, RDS" },
      { name: "CI/CD", level: 85, description: "Automated testing, deployment pipelines, version control" },
      { name: "MongoDB", level: 80, description: "Document databases, schema design, aggregation" },
      { name: "PostgreSQL", level: 90, description: "Relational databases, performance optimization" }
    ]
  },
  {
    icon: BarChart,
    title: "Data Visualization & Analysis",
    description: "Creating insightful visualizations and analytical solutions",
    skills: [
      { name: "Tableau", level: 90, description: "Interactive dashboards, business intelligence, data storytelling" },
      { name: "Power BI", level: 85, description: "Report creation, DAX, data modeling" },
      { name: "Statistical Analysis", level: 85, description: "Hypothesis testing, regression analysis, forecasting" },
      { name: "React", level: 85, description: "Frontend development, component design, state management" },
      { name: "D3.js", level: 80, description: "Custom visualizations, interactive charts" },
      { name: "Data Mining", level: 90, description: "Pattern recognition, clustering, association analysis" }
    ]
  }
];

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
      
      <div className="grid grid-cols-1 gap-16">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              {React.createElement(category.icon, { className: "w-8 h-8 text-blue-600" })}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-sm text-blue-600 font-medium">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Current Learning & Development */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
        <h3 className="text-xl font-semibold mb-6">Current Learning & Development Focus</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-600 mb-2">Advanced AI Technologies</h4>
            <p className="text-gray-600">Exploring latest developments in LLMs, transformers, and advanced neural architectures</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-600 mb-2">MLOps & Model Deployment</h4>
            <p className="text-gray-600">Enhancing expertise in model deployment, monitoring, and scaling in production</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-600 mb-2">Edge Computing & IoT</h4>
            <p className="text-gray-600">Implementing ML models for edge devices and IoT applications</p>
          </div>
        </div>
      </div>
    </div>
  );
}