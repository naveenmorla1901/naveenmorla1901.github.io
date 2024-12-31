'use client';

import React, { useState } from 'react';
import { 
  Briefcase, GraduationCap, Award, Brain, Code, 
  Database, ChevronRight, ChevronDown, Calendar, MapPin 
} from 'lucide-react';

interface TimelineItem {
  type: 'work' | 'education';
  period: string;
  title: string;
  organization: string;
  location: string;
  icon: React.ElementType;
  description: string;
  achievements: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
  technologies: string[];
}

// Example data structure
const timelineData: TimelineItem[] = [
  {
    type: 'work',
    period: "Feb 2024 - Present",
    title: "Data Scientist & Software Engineer",
    organization: "THK Manufacturing of America",
    location: "Columbus, Ohio",
    icon: Briefcase,
    description: "Leading data science initiatives to optimize manufacturing processes through advanced ML solutions.",
    achievements: [
      {
        title: "AI Implementation",
        description: "Developed predictive models improving efficiency by 40%",
        icon: Brain
      },
      {
        title: "Infrastructure Development",
        description: "Built scalable data pipelines with Kubernetes",
        icon: Database
      }
    ],
    technologies: ["PyTorch", "FastAPI", "Kubernetes", "PostgreSQL"]
  },
  // Add more timeline items here
];

const TimelineItemComponent: React.FC<{
  item: TimelineItem;
  isExpanded: boolean;
  onToggle: () => void;
  isLast: boolean;
}> = ({ item, isExpanded, onToggle, isLast }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div 
          className="absolute left-8 top-8 bottom-0 w-0.5 bg-blue-200"
          style={{ transform: 'translateX(-50%)' }}
        />
      )}

      <div className="relative pl-16">
        {/* Timeline Dot */}
        <div
          className="absolute left-8 top-8 w-4 h-4 bg-blue-500 rounded-full transition-transform duration-300 hover:scale-125"
          style={{ transform: 'translate(-50%, -50%)' }}
        />

        {/* Content Card */}
        <div 
          className={`
            bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300
            ${isExpanded ? 'shadow-lg' : 'hover:shadow-lg cursor-pointer'}
          `}
          onClick={onToggle}
        >
          {/* Header */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-50 rounded-lg transition-transform duration-300 hover:rotate-12">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-blue-600">{item.organization}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm">{item.period}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{item.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Content */}
          {isExpanded && (
            <div className="border-t border-gray-100">
              <div className="p-6 space-y-6">
                {/* Description */}
                <p className="text-gray-600">{item.description}</p>

                {/* Achievements */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-700">Key Achievements</h4>
                  <div className="grid gap-4">
                    {item.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-start p-3 bg-blue-50 rounded-lg transition-all duration-300 hover:bg-blue-100"
                      >
                        <achievement.icon className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                        <div>
                          <h5 className="font-medium">{achievement.title}</h5>
                          <p className="text-gray-600 text-sm">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm transition-colors duration-300 hover:bg-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const InteractiveTimeline: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      {timelineData.map((item, index) => (
        <TimelineItemComponent
          key={index}
          item={item}
          isExpanded={expandedIndex === index}
          onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
          isLast={index === timelineData.length - 1}
        />
      ))}
    </div>
  );
};

export default InteractiveTimeline;