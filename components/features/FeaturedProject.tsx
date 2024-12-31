'use client';

import React from 'react';
import { Brain, Github, ExternalLink, Network } from 'lucide-react';

const FeaturedProject = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Network className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-bold">Featured Project: Graph Neural Networks for Manufacturing</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-700">
              Developed an innovative Graph Neural Network (GNN) model for optimizing manufacturing processes 
              and predicting equipment failures. This project combines cutting-edge deep learning techniques 
              with practical industrial applications.
            </p>

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Key Achievements:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Improved failure prediction accuracy by 35%</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Reduced maintenance costs by 25%</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Real-time monitoring of 1000+ sensors</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'PyTorch Geometric',
                  'DGL',
                  'FastAPI',
                  'React',
                  'Neo4j',
                  'Docker',
                  'MLflow'
                ].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://github.com/naveenmorla1901/GNN-Projects"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                <Github className="w-5 h-5 mr-2" />
                <span>View Code</span>
              </a>
              <a 
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/api/placeholder/600/400" 
              alt="GNN Project Architecture"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
              Featured Work
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;