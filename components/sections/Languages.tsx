'use client';

import React from 'react';
import { Globe, Code, MessageCircle } from 'lucide-react';

export default function Languages() {
  return (
    <section className="max-w-6xl mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Languages</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Programming Languages */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Code className="w-6 h-6 mr-2 text-blue-600" />
            <h3 className="text-xl font-semibold">Programming Languages</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-800">Python</span>
              <span className="text-sm text-blue-600 font-medium">Expert</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-800">JavaScript/TypeScript</span>
              <span className="text-sm text-blue-600 font-medium">Advanced</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-800">SQL</span>
              <span className="text-sm text-blue-600 font-medium">Expert</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-800">R</span>
              <span className="text-sm text-blue-600 font-medium">Intermediate</span>
            </div>
          </div>
        </div>

        {/* Spoken Languages */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <MessageCircle className="w-6 h-6 mr-2 text-blue-600" />
            <h3 className="text-xl font-semibold">Spoken Languages</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-800">English</span>
              <span className="text-sm text-blue-600 font-medium">Fluent</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-800">Hindi</span>
              <span className="text-sm text-blue-600 font-medium">Native</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-800">Telugu</span>
              <span className="text-sm text-blue-600 font-medium">Native</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
