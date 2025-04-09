'use client';

import React from 'react';
import { BookOpen, Trophy, Code, Cpu, Brain, LineChart, Server, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            I'm a Data Scientist and Software Engineer at THK Manufacturing of America, specializing in creating high-performance APIs
            with FastAPI and developing predictive models with PyTorch and TensorFlow to improve lead time forecasting
            and inventory management. My expertise spans from machine learning and data engineering to full-stack development
            and cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Brain className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI/ML Expertise</h3>
            <p className="text-gray-600">Working extensively with LLMs, RAG systems, and vector databases like FAISS and ChromaDB. 
            Implementing advanced NLP techniques and developing autonomous AI agents for process automation.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <LineChart className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Engineering</h3>
            <p className="text-gray-600">Building robust data pipelines with Polars and PySpark for faster data processing. 
            Designing optimized database schemas with PostgreSQL for efficient data querying and maintaining data integrity.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Server className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud & Infrastructure</h3>
            <p className="text-gray-600">Managing containerized microservices with Kubernetes and Docker, ensuring scalable big data pipelines. 
            Implementing CI/CD pipelines with GitHub Actions for automated testing and deployment.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Globe className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
            <p className="text-gray-600">Creating dynamic data visualizations with Tableau and building responsive frontend interfaces with React and JavaScript. 
            Developing high-performance APIs using FastAPI with advanced caching techniques.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Current Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">LLM & RAG Applications</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Enterprise document processing systems</li>
                <li>Retrieval-augmented generation</li>
                <li>Semantic search with vector databases</li>
                <li>Multi-provider LLM integrations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Autonomous AI Agents</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Multi-step workflow automation</li>
                <li>Natural language to code generation</li>
                <li>Intelligent error recovery systems</li>
                <li>Data validation and feedback loops</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Professional Journey</h3>
          <p className="text-gray-700 leading-relaxed">
            With over 4 years of experience in machine learning and data analysis, I've progressed from data analysis
            to advanced AI application development. I hold a Master's in Data Science from Bowling Green State University
            and have worked on diverse projects from developing intelligent loan document processing systems to creating
            autonomous web scraping platforms. I'm particularly interested in the LLM and RAG revolution, architecting
            retrieval-augmented systems and experimenting with autonomous AI agents for automating complex workflows.
          </p>
        </div>
      </div>
    </div>
  );
}