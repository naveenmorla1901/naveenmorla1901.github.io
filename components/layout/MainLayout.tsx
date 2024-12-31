'use client';

import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import PersonalBrand from '../features/PersonalBrand';
import SkillsGrid from '../features/SkillsGrid';
import ProjectShowcase from '../features/ProjectShowcase';
import InteractiveTimeline from '../features/InteractiveTimeline';
import Contact from '../sections/Contact';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useScrollTo } from '../hooks/useScrollTo';

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSpy();
  const scrollToSection = useScrollTo();

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavigate = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-lg z-50 transition-all">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-semibold">Naveen Morla</span>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`text-gray-600 hover:text-blue-600 transition-colors capitalize
                    ${activeSection === item.id ? 'text-blue-600 font-medium' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64' : 'max-h-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-2 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg capitalize
                  ${activeSection === item.id ? 
                    'bg-blue-50 text-blue-600' : 
                    'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <main>
        <section id="about" className="pt-16">
          <PersonalBrand />
        </section>

        <section id="skills" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <SkillsGrid />
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <ProjectShowcase />
          </div>
        </section>

        <section id="experience" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
            <InteractiveTimeline />
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <Contact />
          </div>
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
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/naveen-morla/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:naveen.morla04@gmail.com"
                className="hover:text-blue-400 transition-colors"
                aria-label="Email Contact"
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