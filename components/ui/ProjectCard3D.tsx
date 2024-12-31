'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCard3DProps {
  project: {
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    github?: string;
    demo?: string;
    category: string;
  };
}

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = -(x - centerX) / 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="relative h-full perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`w-full h-full rounded-xl bg-white shadow-lg transform-style-3d transition-transform duration-200 ${
          isHovered ? 'shadow-xl' : ''
        }`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${
            isHovered ? 'scale3d(1.05, 1.05, 1.05)' : ''
          }`
        }}
      >
        {/* Card Content */}
        <div className="p-6 h-full flex flex-col">
          {/* Category Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            {project.category}
          </div>

          {/* Project Image */}
          {project.image && (
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          )}

          {/* Project Info */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
          </div>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                <span>View Code</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Reflection Effect */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: `linear-gradient(105deg, 
              transparent 40%, 
              rgba(255, 255, 255, 0.1) 45%, 
              rgba(255, 255, 255, 0.2) 50%, 
              rgba(255, 255, 255, 0.1) 55%, 
              transparent 60%)`,
            transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
            transition: 'transform 0.6s',
          }}
        />
      </div>
    </div>
  );
};

export default ProjectCard3D;