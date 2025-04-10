'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, Menu, X } from 'lucide-react';
import PersonalBrand from '../features/PersonalBrand';
import ExperienceCarousel from '../features/ExperienceCarousel';
import SkillsGrid from '../features/SkillsGrid';
import ProjectShowcase from '../features/ProjectShowcase';
import Contact from '../sections/Contact';

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle dark mode for navigation only
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // We're not adding dark mode to document.documentElement anymore
    // This way it only affects components that explicitly check for darkMode
  };

  // Check system preference on initial load
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300">
      {/* Navigation */}
      <nav className={`fixed w-full ${darkMode ? 'bg-dark-card border-b border-dark-border' : 'bg-white'} shadow-lg z-50 transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className={`text-2xl font-semibold ${darkMode ? 'text-white' : ''}`}>Naveen Morla</span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>About</a>
              <a href="#experience" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>Experience</a>
              <a href="#skills" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>Skills</a>
              <a href="#projects" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>Projects</a>
              <a href="#contact" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>Contact</a>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-600'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-600'}`} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden py-4 ${darkMode ? 'bg-dark-card' : 'bg-white'} border-t ${darkMode ? 'border-dark-border' : 'border-gray-100'}`}>
              <div className="flex flex-col space-y-4 px-4">
                <a
                  href="#about"
                  className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#experience"
                  className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </a>
                <a
                  href="#skills"
                  className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-16">
        <PersonalBrand />
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4">
        {/* Professional Journey moved above Skills */}
        <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white transition-colors duration-300">
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
      <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white py-8`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex space-x-6">
              <a
                href="https://github.com/naveenmorla1901"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/naveen-morla/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:naveen.morla04@gmail.com"
                className="hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-sm opacity-80">© {new Date().getFullYear()} Naveen Morla. All rights reserved.</p>
              <div className="text-sm opacity-60 flex space-x-4">
                <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;