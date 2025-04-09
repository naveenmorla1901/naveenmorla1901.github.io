'use client';

import React, { Suspense } from 'react';
import { Github, Linkedin, Mail, Brain, Database, Code, Cloud, LineChart } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamic imports for better performance and code splitting
const DynamicSections = {
  About: dynamic(() => import('./sections/About'), {
    loading: () => <div>Loading...</div>,
    ssr: false
  }),
  ExperienceTimeline: dynamic(() => import('./sections/ExperienceTimeline'), {
    loading: () => <div>Loading...</div>,
    ssr: false
  }),
  Languages: dynamic(() => import('./sections/Languages'), {
    loading: () => <div>Loading...</div>,
    ssr: false
  }),
  Skills: dynamic(() => import('./sections/Skills'), {
    loading: () => <div>Loading...</div>,
    ssr: false
  }),
  Projects: dynamic(() => import('./sections/Projects'), {
    loading: () => <div>Loading...</div>,
    ssr: false
  }),
  Contact: dynamic(() => import('./sections/Contact'), {
    loading: () => <div>Loading...</div>,
    ssr: false
  })
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navigation Bar */}
      <nav className="fixed w-full bg-white shadow-lg z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-semibold">Naveen Morla</span>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#languages" className="text-gray-600 hover:text-blue-600 transition-colors">Languages</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Personal Brand Statement */}
      <section className="pt-16 min-h-screen flex items-center bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Data Scientist & Software Engineer | THK Manufacturing of America
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            RAG & LLM Integration | Full-Stack Development | Manufacturing Data Analytics | Master's in Data Science
          </p>
          
          {/* Key Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
              <Brain className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">LLM & RAG Expert</h3>
              <p>Building retrieval-augmented systems using LangChain, vector databases, and fine-tuning LLMs</p>
            </div>
            <div className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
              <LineChart className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Applications</h3>
              <p>Developing predictive models for manufacturing and inventory optimization</p>
            </div>
            <div className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
              <Cloud className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cloud & Infrastructure</h3>
              <p>Managing containerized microservices with Kubernetes and Docker on AWS</p>
            </div>
          </div>

          {/* Achievement Highlights */}
          <div className="text-lg mb-12 space-y-2">
            <p className="flex items-center justify-center">
              <span className="text-2xl mr-2">⚡</span>
              Built high-performance APIs with FastAPI for manufacturing data systems
            </p>
            <p className="flex items-center justify-center">
              <span className="text-2xl mr-2">🤖</span>
              Developed dual-LLM architecture for natural language to web scraping conversion
            </p>
            <p className="flex items-center justify-center">
              <span className="text-2xl mr-2">📊</span>
              Created job market analytics system tracking 100+ corporate career sites hourly
            </p>
            <p className="flex items-center justify-center">
              <span className="text-2xl mr-2">🧠</span>
              Implemented Graph Neural Networks for anomaly detection in time series data
            </p>
            <p className="flex items-center justify-center">
              <span className="text-2xl mr-2">🔍</span>
              Built intelligent loan document processing system using RAG and AWS Bedrock
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="https://github.com/naveenmorla1901"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/naveen-morla/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:naveen.morla04@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span>Email</span>
            </a>
            <a
              href="/Naveen_morla_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-colors"
            >
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="max-w-6xl mx-auto px-4">
        <Suspense fallback={<div>Loading...</div>}>
          <section id="about" className="py-20">
            <DynamicSections.About />
          </section>

          <section id="experience" className="py-20">
            <DynamicSections.ExperienceTimeline />
          </section>

          <section id="languages" className="py-20">
            <DynamicSections.Languages />
          </section>

          <section id="skills" className="py-20">
            <DynamicSections.Skills />
          </section>

          <section id="projects" className="py-20">
            <DynamicSections.Projects />
          </section>

          <section id="contact" className="py-20">
            <DynamicSections.Contact />
          </section>
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/naveenmorla1901" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/naveen-morla/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
            </a>
            <a href="mailto:naveen.morla04@gmail.com">
              <Mail className="w-6 h-6 hover:text-blue-400 transition-colors" />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Naveen Morla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
