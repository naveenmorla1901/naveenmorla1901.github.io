'use client';

import React, { useEffect, useRef } from 'react';
import { Brain, Code, Database, Network } from 'lucide-react';

const AnimatedHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      connections: number[];

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.connections = [];
      }
      update(canvas: HTMLCanvasElement) {
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(66, 153, 225, 0.5)';
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(window.innerWidth * 0.05), 100);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas));
    }

    // Animation
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(canvas);
        particle.draw();

        // Draw connections
        particles.forEach((particle2, index2) => {
          if (particles.indexOf(particle) === index2) return;
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(66, 153, 225, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
      />

      {/* Content */}
      <div className="relative z-10 text-white text-center max-w-5xl mx-auto px-4">
        <div className="mb-8 flex justify-center space-x-4">
          {[Brain, Code, Database, Network].map((Icon, index) => (
            <div
              key={index}
              className="w-16 h-16 bg-white bg-opacity-10 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
            >
              <Icon className="w-8 h-8" />
            </div>
          ))}
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Naveen Morla
        </h1>
        
        <div className="text-2xl md:text-3xl mb-8 opacity-90">
          Data Scientist & ML Engineer
        </div>

        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-80">
          Building AI-powered solutions and transforming data into impact
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-colors"
          >
            Contact Me
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero;