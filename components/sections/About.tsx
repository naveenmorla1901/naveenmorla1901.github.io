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
            I'm a passionate Data Scientist and ML Engineer who thrives on transforming complex data challenges into 
            valuable business solutions. Currently at THK Manufacturing of America, I blend my expertise in machine 
            learning, data engineering, and software development to drive manufacturing efficiency and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Brain className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI/ML Expertise</h3>
            <p className="text-gray-600">Specializing in developing predictive models, implementing LLMs, and creating 
            AI-powered solutions that deliver tangible business impact.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <LineChart className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Innovation</h3>
            <p className="text-gray-600">Transforming raw data into actionable insights through advanced analytics, 
            visualization, and machine learning techniques.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Server className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Technical Architecture</h3>
            <p className="text-gray-600">Building robust data pipelines and scalable systems using modern tools 
            like FastAPI, Docker, and cloud technologies.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Globe className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Perspective</h3>
            <p className="text-gray-600">Experience working across different cultures and industries, bringing a 
            unique perspective to problem-solving and innovation.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Current Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Advanced AI Applications</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Large Language Models (LLMs)</li>
                <li>Computer Vision Systems</li>
                <li>Natural Language Processing</li>
                <li>Autonomous AI Agents</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">MLOps & Engineering</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Model Deployment & Scaling</li>
                <li>Performance Optimization</li>
                <li>CI/CD for ML Systems</li>
                <li>Real-time Data Processing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Professional Journey</h3>
          <p className="text-gray-700 leading-relaxed">
            My journey in data science began with a passion for solving complex problems. With a Master's in 
            Data Science from Bowling Green State University and hands-on experience in various industries, 
            I've developed a comprehensive understanding of the entire data science lifecycle. From developing 
            AI-powered resume parsing systems to optimizing manufacturing processes, I've consistently delivered 
            solutions that drive efficiency and innovation.
          </p>
        </div>
      </div>
    </div>
  );
}