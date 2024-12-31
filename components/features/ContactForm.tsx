'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Github, Linkedin, MessageCircle, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
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
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Animated background patterns
  const backgroundPatterns = (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
    </div>
  );

  return (
    <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden">
      {backgroundPatterns}
      
      <div className="relative grid md:grid-cols-2 gap-12 p-8">
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
              <div className="flex items-start">
                <Brain className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">AI Research & Development</h4>
                  <p className="text-sm text-gray-600">Exploring LLMs and neural architectures</p>
                </div>
              </div>
              <div className="flex items-start">
                <MessageCircle className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Tech Collaboration</h4>
                  <p className="text-sm text-gray-600">Open source and innovative projects</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <motion.label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Name
              </motion.label>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`
                    w-full px-4 py-2 rounded-lg border transition-all duration-300
                    ${focusedField === 'name' 
                      ? 'border-blue-500 ring-2 ring-blue-200' 
                      : 'border-gray-300 hover:border-gray-400'
                    }
                  `}
                  placeholder="Your name"
                />
              </motion.div>
            </div>

            {/* Email Input */}
            <div>
              <motion.label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Email
              </motion.label>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`
                    w-full px-4 py-2 rounded-lg border transition-all duration-300
                    ${focusedField === 'email' 
                      ? 'border-blue-500 ring-2 ring-blue-200' 
                      : 'border-gray-300 hover:border-gray-400'
                    }
                  `}
                  placeholder="your.email@example.com"
                />
              </motion.div>
            </div>

            {/* Message Input */}
            <div>
              <motion.label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Message
              </motion.label>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="relative"
              >
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className={`
                    w-full px-4 py-2 rounded-lg border transition-all duration-300
                    ${focusedField === 'message' 
                      ? 'border-blue-500 ring-2 ring-blue-200' 
                      : 'border-gray-300 hover:border-gray-400'
                    }
                  `}
                  placeholder="Share your thoughts or questions..."
                />
              </motion.div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full flex justify-center items-center px-6 py-3 rounded-lg
                text-white font-medium transition-all duration-300
                ${isSubmitting || isSubmitted 
                  ? 'bg-green-500' 
                  : 'bg-blue-600 hover:bg-blue-700'
                }
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="submitting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                  />
                ) : isSubmitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Sent Successfully!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    <span>Send Message</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;