'use client';

import React from 'react';
import { Brain, Code, Database, Cloud, Bot, LineChart } from 'lucide-react';

const currentMarketSkills = [
  {
    category: "Large Language Models & AI",
    icon: Brain,
    skills: [
      {
        name: "LLM Implementation",
        description: "Experience with GPT models, prompt engineering, and fine-tuning",
        level: 90,
        details: ["LangChain", "HuggingFace", "OpenAI API", "Custom LLM deployment"]
      },
      {
        name: "AI Agents",
        description: "Building autonomous AI agents and chatbots",
        level: 85,
        details: ["RAG systems", "Autonomous agents", "Multi-agent systems"]
      },
      {
        name: "MLOps & AI Infrastructure",
        description: "Deploying and scaling AI solutions",
        level: 88,
        details: ["Model monitoring", "A/B testing", "Version control for ML"]
      }
    ]
  },
  {
    category: "Modern Data Stack",
    icon: Database,
    skills: [
      {
        name: "Real-time Analytics",
        description: "Building streaming data pipelines and real-time processing systems",
        level: 92,
        details: ["Kafka", "Spark Streaming", "Real-time dashboards"]
      },
      {
        name: "Vector Databases",
        description: "Working with embeddings and similarity search",
        level: 85,
        details: ["Pinecone", "Weaviate", "FAISS", "Milvus"]
      },
      {
        name: "Data Lakehouse",
        description: "Modern data architecture implementation",
        level: 88,
        details: ["Delta Lake", "Iceberg", "dbt", "Snowflake"]
      }
    ]
  },
  {
    category: "Full Stack AI Development",
    icon: Code,
    skills: [
      {
        name: "AI-Powered Applications",
        description: "Building end-to-end AI applications",
        level: 90,
        details: ["FastAPI", "React", "Next.js", "Real-time ML inference"]
      },
      {
        name: "Cloud-Native Development",
        description: "Developing scalable cloud solutions",
        level: 85,
        details: ["Kubernetes", "Docker", "Serverless", "Microservices"]
      },
      {
        name: "DevOps & MLOps",
        description: "Implementing CI/CD for ML systems",
        level: 88,
        details: ["GitHub Actions", "MLflow", "Model monitoring"]
      }
    ]
  }
];

const MarketSkills = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-4">Current Market Skills</h2>
      <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        My expertise aligns with the latest industry demands in AI, data science, and full-stack development,
        with a focus on practical implementation and scalable solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentMarketSkills.map((category, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              {React.createElement(category.icon, { className: "w-6 h-6 text-blue-600" })}
              <h3 className="text-xl font-semibold">{category.category}</h3>
            </div>

            <div className="space-y-6">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-blue-600">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-sm text-gray-600">{skill.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skill.details.map((detail, detailIdx) => (
                      <span 
                        key={detailIdx}
                        className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
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
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
        <h3 className="text-xl font-semibold mb-6">Current Industry Focus</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <Bot className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium mb-2">Generative AI</h4>
            <p className="text-sm text-gray-600">Building practical applications with LLMs and autonomous agents</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <Cloud className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium mb-2">Cloud-Native ML</h4>
            <p className="text-sm text-gray-600">Scalable ML systems and microservices architecture</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <Brain className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium mb-2">Edge AI</h4>
            <p className="text-sm text-gray-600">Deploying ML models for edge computing and IoT</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <LineChart className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium mb-2">Real-time Analytics</h4>
            <p className="text-sm text-gray-600">Streaming data processing and instant insights</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSkills;