'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import PersonalBrand from '@/components/features/PersonalBrand';
import ExperienceCarousel from '@/components/features/ExperienceCarousel';
import SkillsGrid from '@/components/features/SkillsGrid';
import ProjectShowcase from '@/components/features/ProjectShowcase';
import Contact from '@/components/sections/Contact';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-semibold">Naveen Morla</span>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-16">
        <PersonalBrand />
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4">
        {/* Professional Journey moved above Skills */}
        <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <ExperienceCarousel />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <SkillsGrid />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <ProjectShowcase />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex space-x-6">
              <a 
                href="https://github.com/naveenmorla1901" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/naveen-morla/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:naveen.morla04@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm opacity-80">© {new Date().getFullYear()} Naveen Morla. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;