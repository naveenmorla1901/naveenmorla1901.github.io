'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  MessageCircle, 
  CheckCircle, 
  Brain as BrainIcon 
} from 'lucide-react';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

interface InterestItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const interests: InterestItem[] = [
  {
    icon: BrainIcon,
    title: 'AI Research & Development',
    description: 'Exploring LLMs and neural architectures'
  },
  {
    icon: MessageCircle,
    title: 'Tech Collaboration',
    description: 'Open source and innovative projects'
  }
];

const ContactForm = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-600">
              I'm always interested in discussing new opportunities, collaborations, 
              or just chatting about data science and AI.
            </p>
          </div>

          {/* Contact Links */}
          <div className="space-y-4">
            <motion.a
              href="mailto:naveen.morla04@gmail.com"
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors p-3 rounded-lg hover:bg-blue-50"
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5" />
              <span>naveen.morla04@gmail.com</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/naveen-morla/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors p-3 rounded-lg hover:bg-blue-50"
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/naveenmorla1901"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors p-3 rounded-lg hover:bg-blue-50"
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              <span>Follow on GitHub</span>
            </motion.a>
          </div>

          {/* Current Interests */}
          <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-xl p-6 space-y-4">
            <h3 className="font-semibold text-gray-800">Current Interests</h3>
            <div className="space-y-3">
              {interests.map((interest, index) => (
                <div key={index} className="flex items-start">
                  <interest.icon className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">{interest.title}</h4>
                    <p className="text-sm text-gray-600">{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form fields remain the same */}
            {/* ... */}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;