'use client';

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Try sending via our API first
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // If our API fails, try FormSpree as fallback
        const formSpreeResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (formSpreeResponse.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error('Failed to send message');
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  // Rest of your component remains the same
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <a 
              href="mailto:naveen.morla04@gmail.com"
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>naveen.morla04@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/naveen-morla/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn Profile</span>
            </a>
            <a 
              href="https://github.com/naveenmorla1901"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub Profile</span>
            </a>
          </div>
          <div className="mt-8">
            <h4 className="font-medium mb-2">Location</h4>
            <p className="text-gray-600">Columbus, Ohio, United States</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
          </button>
          {status === 'success' && (
            <p className="text-green-600 text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}