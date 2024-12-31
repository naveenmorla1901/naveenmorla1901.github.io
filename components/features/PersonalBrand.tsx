'use client';

import React from 'react';
import { Brain, Cpu, LineChart, Network, Database, Code, Cloud } from 'lucide-react';

const PersonalBrand = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Full Stack Data Scientist & AI Engineer
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Combining advanced AI/ML expertise with full-stack development to build 
            innovative solutions in manufacturing and beyond
          </p>
          <div className="text-lg space-y-2 opacity-90">
            <p>🎯 Currently at THK Manufacturing of America</p>
            <p>🔬 Specialized in ML, LLMs, and Manufacturing Analytics</p>
            <p>🚀 Building AI-powered solutions for real-world challenges</p>
          </div>
        </div>

        {/* Recent Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all">
            <Brain className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Innovation</h3>
            <p className="mb-4">Developed predictive models using PyTorch and TensorFlow, improving lead time forecasting accuracy by 40%</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-white bg-opacity-20 rounded-full text-sm">PyTorch</span>
              <span className="px-2 py-1 bg-white bg-opacity-20 rounded-full text-sm">TensorFlow</span>
              <span className="px-2 py-1 bg-white bg-opacity-20 rounded-full text-sm">ML Ops</span>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all">
            <Cloud className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud Architecture</h3>
            <p className="mb-4">Designed scalable microservices with Kubernetes, handling real-time data from 1000+ sensors</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-white bg-opacity-20 rounded-full text-sm">Kubernetes</span>
              <span className="px-2 py-1 bg-white bg-opacity-20 rounded-full text-sm">Docker</span>
              <span className="px-2 py-1 bg-white bg-opacity-20 rounded-full text-sm">FastAPI</span>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all">
            <Database className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Engineering</h3>
            <p className="mb-4">Optimized data pipelines and implemented advanced caching, reducing response times by 40%</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-white bg-opacity-20 rounded-full text-sm">PostgreSQL</span>
              <span className="px-2 py-1 bg-white bg-opacity-20 rounded-full text-sm">Redis</span>
              <span className="px-2 py-1 bg-white bg-opacity-20 rounded-full text-sm">ETL</span>
            </div>
          </div>
        </div>

        {/* Current Focus Areas */}
        <div className="bg-white bg-opacity-5 rounded-xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-6 text-center">Current Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
              <Brain className="w-6 h-6 mb-3" />
              <h3 className="font-semibold mb-2">Large Language Models</h3>
              <p className="text-sm opacity-90">Implementing LLMs for industrial applications and process automation</p>
            </div>

            <div className="p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
              <Network className="w-6 h-6 mb-3" />
              <h3 className="font-semibold mb-2">Graph Neural Networks</h3>
              <p className="text-sm opacity-90">Developing GNNs for complex manufacturing system analysis</p>
            </div>

            <div className="p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
              <Cpu className="w-6 h-6 mb-3" />
              <h3 className="font-semibold mb-2">MLOps & Deployment</h3>
              <p className="text-sm opacity-90">Building robust pipelines for model training and deployment</p>
            </div>

            <div className="p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
              <Code className="w-6 h-6 mb-3" />
              <h3 className="font-semibold mb-2">Full Stack AI</h3>
              <p className="text-sm opacity-90">Creating end-to-end AI solutions with modern tech stack</p>
            </div>
          </div>
        </div>
        
        {/* Key Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">3+</div>
            <div className="text-sm opacity-80">Years ML Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">10K+</div>
            <div className="text-sm opacity-80">Datasets Processed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">40%</div>
            <div className="text-sm opacity-80">Performance Boost</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-sm opacity-80">Sensors Monitored</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalBrand;