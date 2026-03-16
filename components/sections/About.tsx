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
            Results-driven Data Scientist with 5+ years of experience building end-to-end ML pipelines, LLM-powered applications, and scalable APIs.
            Currently at The Lisinski Law Firm, I specialize in data analytics, business intelligence dashboards, and AI-driven case forecasting.
            Deep expertise in RAG systems, MLOps, FastAPI, and multi-provider AI architectures (Claude, Gemini, DeepSeek) with production 
            deployments on AWS and Azure. My career spans manufacturing optimization, legal tech analytics, and talent acquisition automation.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Business Intelligence & Analytics</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Interactive Power BI dashboards</li>
                <li>Case forecasting & growth analysis</li>
                <li>Sentiment analysis on case data</li>
                <li>KPI tracking for leadership</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">LLM & RAG Systems</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Multi-provider AI architectures</li>
                <li>Enterprise document processing</li>
                <li>Semantic search & retrieval</li>
                <li>Sentiment analysis with LLMs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">MLOps & Cloud Infrastructure</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>CI/CD pipelines (GitHub Actions)</li>
                <li>Azure Functions & serverless</li>
                <li>FastAPI production deployments</li>
                <5+ years of experience spanning data analysis, machine learning, and AI engineering, I've progressed from traditional data analysis
            to architecting production LLM systems and autonomous agents. I hold a Master's in Data Science from Bowling Green State University
            and have driven significant impact across multiple domains: optimizing manufacturing operations (18% lead-time improvement, 1TB+ daily data),
            enhancing legal tech analytics (50,000+ cases), and revolutionizing hiring processes (30% efficiency gain, 10,000+ resumes). Currently focused on
            building intelligent document processing systems and leveraging multi-provider LLMs (Claude, Gemini, DeepSeek) for enterprise solution

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