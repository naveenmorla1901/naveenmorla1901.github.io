'use client';

import React, { Suspense } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import sections with suspense
const DynamicExperienceTimeline = dynamic(() => import('./sections/ExperienceTimeline'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});

const DynamicSkills = dynamic(() => import('./sections/Skills'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});

const DynamicProjects = dynamic(() => import('./sections/Projects'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});

const DynamicContact = dynamic(() => import('./sections/Contact'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-lg z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-semibold">Naveen Morla</span>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Full Stack Data Scientist
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Transforming Data into Actionable Insights | Building Scalable Solutions
          </p>
          <div className="text-lg mb-12 space-y-2">
            <p>🎯 30% Improvement in Hiring Process Efficiency</p>
            <p>📊 10,000+ Training Datasets Processed</p>
            <p>⚡ 40% Reduction in Query Response Times</p>
          </div>
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
          </div>
        </div>
      </section>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <section id="skills" className="py-20">
            <DynamicSkills />
          </section>

          <section id="experience" className="py-20">
            <DynamicExperienceTimeline />
          </section>

          <section id="projects" className="py-20">
            <DynamicProjects />
          </section>

          <section id="contact" className="py-20">
            <DynamicContact />
          </section>
        </Suspense>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Naveen Morla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}