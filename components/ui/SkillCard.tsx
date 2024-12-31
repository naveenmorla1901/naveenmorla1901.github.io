'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  skills: Array<{
    name: string;
    details: string[];
    proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  }>;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, description, skills }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const tagVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    }
  };

  // Progress bar colors based on proficiency
  const proficiencyColors = {
    beginner: 'from-blue-200 to-blue-400',
    intermediate: 'from-blue-300 to-blue-500',
    advanced: 'from-blue-400 to-blue-600',
    expert: 'from-blue-500 to-blue-700'
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Card Header */}
      <div className="flex items-center gap-4 mb-6">
        <motion.div 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="p-3 bg-blue-50 rounded-lg"
        >
          <Icon className="w-6 h-6 text-blue-600" />
        </motion.div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>

      {/* Skills List */}
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-gray-800">{skill.name}</h4>
              {skill.proficiency && (
                <span className="text-sm text-gray-500 capitalize">
                  {skill.proficiency}
                </span>
              )}
            </div>

            {/* Proficiency Bar */}
            {skill.proficiency && (
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ 
                    width: skill.proficiency === 'expert' ? '100%' :
                           skill.proficiency === 'advanced' ? '85%' :
                           skill.proficiency === 'intermediate' ? '70%' :
                           '50%'
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${proficiencyColors[skill.proficiency]}`}
                />
              </div>
            )}

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2">
              {skill.details.map((detail, detailIndex) => (
                <motion.span
                  key={detailIndex}
                  variants={tagVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  custom={detailIndex}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm 
                           hover:bg-blue-100 transition-colors cursor-default
                           transform hover:shadow-md"
                >
                  {detail}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated Border Effect */}
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-[-2px] bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-x" />
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-blue-400 opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300" />
    </motion.div>
  );
};

export default SkillCard;