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
      { name: "LLMs & RAG", level: 95, description: "Bedrock, Claude, Gemini, DeepSeek, ChatGPT. LangChain, Vector Databases (ChromaDB, FAISS, Pinecone), Fine-Tuning (LoRA), Prompt Engineering" },
      { name: "PyTorch", level: 85, description: "Deep learning frameworks, neural networks, computer vision models, PyTorch Geometric" },
      { name: "TensorFlow", level: 85, description: "Production ML models, model optimization, distributed training, Keras" },
      { name: "NLP & LLM Applications", level: 95, description: "Natural Language Processing, sentiment analysis, semantic search, autonomous agents, multi-LLM architectures" },
      { name: "Computer Vision", level: 80, description: "OpenCV, image processing, object detection, medical image analysis" },
      { name: "Deep Learning", level: 85, description: "Neural architecture design, model optimization, transfer learning, GNN (Graph Neural Networks)" }
    ]
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Building robust data pipelines and scalable processing systems",
    skills: [
      { name: "Python", level: 98, description: "Advanced programming, data structures, algorithmic solutions, automation" },
      { name: "SQL & NoSQL", level: 92, description: "PostgreSQL, MySQL, MongoDB, Cassandra, DynamoDB, Elasticsearch, complex queries, optimization" },
      { name: "Big Data & Streaming", level: 90, description: "Polars, PySpark, Hadoop, distributed computing, large-scale data processing" },
      { name: "ETL & Data Pipelines", level: 95, description: "Data extraction, transformation, loading, automation, orchestration" },
      { name: "Data Preprocessing", level: 98, description: "Cleaning, normalization, feature engineering, data validation" },
      { name: "FastAPI", level: 98, description: "High-performance API development, async processing, caching, rate limiting, pagination" }
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Deploying and managing scalable cloud solutions",
    skills: [
      { name: "Docker", level: 90, description: "Container orchestration, microservices architecture, containerized applications" },
      { name: "Kubernetes", level: 85, description: "Container management, service deployment, scaling, production orchestration" },
      { name: "AWS Services", level: 90, description: "EC2, S3, Lambda, SageMaker, Bedrock, RDS, DynamoDB, comprehensive AWS ecosystem" },
      { name: "Azure & Cloud Functions", level: 88, description: "Azure Functions, AppServices, cognitive services, cloud deployments" },
      { name: "CI/CD & MLOps", level: 90, description: "GitHub Actions, automated testing, deployment pipelines, model versioning" },
      { name: "Oracle Cloud", level: 82, description: "Deployment, resource management, monitoring, OCI services" }
    ]
  },
  {
    icon: BarChart,
    title: "Data Visualization & Analysis",
    description: "Creating insightful visualizations and analytical solutions",
    skills: [
      { name: "Tableau", level: 92, description: "Interactive dashboards, business intelligence, data storytelling, KPI visualization" },
      { name: "Power BI", level: 90, description: "Report creation, DAX, data modeling, business analytics, leadership dashboards" },
      { name: "Statistical Analysis", level: 88, description: "Hypothesis testing, regression analysis, forecasting, A/B testing, predictive analytics" },
      { name: "React & JavaScript", level: 85, description: "Frontend development, component design, state management, interactive UIs" },
      { name: "Streamlit", level: 92, description: "Data app development, interactive visualizations, dashboard creation" },
      { name: "Data Mining & ML", level: 92, description: "Pattern recognition, clustering, classification, anomaly detection, recommendation systems" }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-600 mb-2">Multi-Provider LLM Architecture</h4>
            <p className="text-gray-600">Integrating Claude, Gemini, and DeepSeek enabling seamless provider switching and cost optimization</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-600 mb-2">Enterprise RAG Systems</h4>
            <p className="text-gray-600">Building scalable document processing and semantic search systems for complex knowledge retrieval</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-600 mb-2">Autonomous AI Agents</h4>
            <p className="text-gray-600">Developing self-improving agents with error recovery and multi-step workflow automation</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-600 mb-2">LLMOps & Model Deployment</h4>
            <p className="text-gray-600">Advancing expertise in LLM lifecycle management, monitoring, and production deployment</p>
          </div>
        </div>
      </div>
    </div>
  );
}