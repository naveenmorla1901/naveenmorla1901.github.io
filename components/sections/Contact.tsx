'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Calendar, Code, Brain, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Create mailto URL with form data
      const mailtoUrl = `mailto:naveen.morla04@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

      // Open the mailto link
      window.open(mailtoUrl, '_blank');

      // Show success message
      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Let's Connect</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information Section */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              I'm always excited to connect with fellow data scientists, engineers, and technology enthusiasts.
              Whether you want to discuss potential collaborations, AI/ML projects, or explore innovative ideas
              in data science, I'd love to hear from you!
            </p>
          </div>

          {/* Contact Links with Enhanced Interactivity */}
          <div className="space-y-4">
            <a
              href="mailto:naveen.morla04@gmail.com"
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors p-3 rounded-lg hover:bg-blue-50"
            >
              <Mail className="w-5 h-5" />
              <span>naveen.morla04@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/naveen-morla/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors p-3 rounded-lg hover:bg-blue-50"
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </a>

            <a
              href="https://github.com/naveenmorla1901"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors p-3 rounded-lg hover:bg-blue-50"
            >
              <Github className="w-5 h-5" />
              <span>Follow on GitHub</span>
            </a>

            <div className="flex items-center space-x-3 text-gray-600 p-3">
              <MapPin className="w-5 h-5" />
              <span>Columbus, Ohio, United States</span>
            </div>
          </div>

          {/* Professional Interests Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Areas of Interest</h4>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start">
                <Brain className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h5 className="font-medium">AI/ML Innovation</h5>
                  <p className="text-sm text-gray-600">Exploring cutting-edge machine learning solutions and LLM applications</p>
                </div>
              </div>

              <div className="flex items-start">
                <Code className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h5 className="font-medium">Open Source Collaboration</h5>
                  <p className="text-sm text-gray-600">Contributing to and developing impactful open source projects</p>
                </div>
              </div>

              <div className="flex items-start">
                <MessageCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h5 className="font-medium">Knowledge Sharing</h5>
                  <p className="text-sm text-gray-600">Writing technical articles and conducting workshops on AI/ML</p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Focus Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-4">Current Focus</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                Developing advanced ML models for manufacturing optimization
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                Exploring applications of Large Language Models
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                Building scalable data processing pipelines
              </li>
            </ul>
          </div>
        </div>

        {/* Enhanced Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Share your thoughts, ideas, or questions..."
                  required
                />
              </div>

              {submitSuccess && (
                <div className="p-3 bg-green-100 text-green-700 rounded-md">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitError && (
                <div className="p-3 bg-red-100 text-red-700 rounded-md">
                  {submitError}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  I typically respond within 24-48 hours
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}