'use client';

import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Code, Brain, Database, BookOpen } from 'lucide-react';

// Comprehensive experience data structure including achievements and technologies
const experiences = [
  {
    title: "Data Scientist",
    company: "THK Manufacturing of America",
    location: "Columbus, Ohio",
    period: "February 2024 - Present",
    type: "Full-time",
    description: "Leading data science initiatives to optimize manufacturing processes and improve operational efficiency through advanced ML solutions.",
    achievements: [
      {
        title: "API Development",
        description: "Engineered high-performance APIs using FastAPI with advanced caching for seamless data ingestion, processing, and retrieval of sensor and inventory datasets",
        icon: Code
      },
      {
        title: "Predictive Modeling",
        description: "Developed predictive models utilizing scikit-learn and TensorFlow, enhancing lead time forecasting and optimizing inventory management",
        icon: Brain
      },
      {
        title: "Data Infrastructure",
        description: "Architected and managed containerized microservices with Kubernetes and Docker, ensuring scalable and efficient big data processing pipelines",
        icon: Database
      }
    ],
    technologies: [
      "FastAPI", "PyTorch", "TensorFlow", "Kubernetes", "Docker", "PostgreSQL", "React", "Python", "Polars", "PySpark"
    ]
  },
  {
    title: "Data Scientist",
    company: "PAGO Analytics",
    location: "India",
    period: "May 2019 - April 2021",
    type: "Full-time",
    description: "Led the development of AI-powered solutions for talent acquisition and data analysis, significantly improving hiring processes.",
    achievements: [
      {
        title: "Resume Parsing System",
        description: "Developed a system using Python, deep learning, and Spark for the Talent Acquisition Management System, enhancing hiring efficiency by 30%",
        icon: Brain
      },
      {
        title: "Database Optimization",
        description: "Spearheaded the normalization of SQL databases, resulting in 40% reduction in query response times and improved data handling",
        icon: Database
      },
      {
        title: "Data Collection & Labeling",
        description: "Orchestrated the collection and manual labeling of over 10,000 resumes, enhancing training dataset accuracy by 15%",
        icon: Code
      }
    ],
    technologies: [
      "Python", "AWS", "NLTK", "NLP", "Spacy", "SQL", "Spark", "Power BI", "AWS Quick Sight"
    ]
  },
  {
    title: "Data Analyst",
    company: "Knowledge Matrix",
    location: "India",
    period: "March 2018 - February 2019",
    type: "Full-time",
    description: "Focused on data analysis and visualization to drive business insights and improve decision-making processes.",
    achievements: [
      {
        title: "Analytics Dashboard Development",
        description: "Developed and launched dynamic analytics dashboards using Tableau, hosted on AWS, facilitating instant data-driven insights",
        icon: Code
      },
      {
        title: "ETL Pipeline Implementation",
        description: "Designed and implemented efficient ETL pipelines leveraging Python, SQL, and Spark, streamlining data flow and saving over 5 hours per 10 million records",
        icon: Database
      },
      {
        title: "A/B Testing & Analytics",
        description: "Spearheaded A/B testing and hypothesis evaluations on AWS to inform data-centric decisions, employing advanced machine learning techniques",
        icon: Brain
      }
    ],
    technologies: [
      "Python", "SQL", "Tableau", "ETL", "AWS", "Hadoop", "Machine Learning", "A/B Testing"
    ]
  }
];

// Detailed education information with coursework and focus areas
const education = [
  {
    degree: "Master's in Data Science",
    school: "Bowling Green State University",
    location: "Ohio",
    period: "August 2021 - April 2023",
    description: "Advanced studies in machine learning, statistical analysis, and data engineering with focus on practical applications.",
    courses: [
      {
        name: "Advanced Machine Learning",
        description: "Deep learning architectures, neural networks, model optimization",
        icon: Brain
      },
      {
        name: "Statistical Analysis",
        description: "Probability theory, regression analysis, hypothesis testing",
        icon: Code
      },
      {
        name: "Data Mining",
        description: "Pattern recognition, clustering, association rules",
        icon: Database
      },
      {
        name: "Big Data Technologies",
        description: "Distributed computing, data processing at scale",
        icon: Code
      }
    ]
  },
  {
    degree: "B.Tech in Computer Science",
    school: "Gitam University",
    location: "Hyderabad, India",
    period: "2015 - 2019",
    description: "Built strong foundation in computer science fundamentals and programming concepts.",
    courses: [
      {
        name: "Data Structures & Algorithms",
        description: "Algorithm design, complexity analysis, optimization",
        icon: Code
      },
      {
        name: "Database Systems",
        description: "SQL, database design, query optimization",
        icon: Database
      },
      {
        name: "Software Engineering",
        description: "Development methodologies, system design patterns",
        icon: Brain
      },
      {
        name: "Computer Networks",
        description: "Network protocols, distributed systems",
        icon: Code
      }
    ]
  }
];

// Professional certifications and continuing education
const certifications = [
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    date: "2023",
    description: "Advanced analytics and data interpretation techniques",
    icon: BookOpen
  },
  {
    name: "Docker for Data Scientists",
    issuer: "Docker",
    date: "2023",
    description: "Container orchestration and ML workflow deployment",
    icon: Code
  },
  {
    name: "SQL for Data Analysis",
    issuer: "DataCamp",
    date: "2022",
    description: "Advanced SQL techniques for data analysis",
    icon: Database
  },
  {
    name: "Spark for Machine Learning & AI",
    issuer: "Databricks",
    date: "2023",
    description: "Large-scale data processing and ML implementations",
    icon: Brain
  },
  {
    name: "Data Science Bootcamp",
    issuer: "Udemy",
    date: "2022",
    description: "Comprehensive data science and ML training",
    icon: BookOpen
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="max-w-6xl mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
      
      {/* Publications Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-semibold mb-6">Research Projects</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="text-lg font-medium">Graph Neural Network-Based Anomaly Detection</h4>
            <p className="text-gray-600">Multivariate Time Series data analysis at Bowling Green State University</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="text-lg font-medium">Predicting MGMT in Glioblastomas From MRI Scans</h4>
            <p className="text-gray-600">Using Deep Convolutional Neural Networks at Bowling Green State University</p>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-8 flex items-center">
          <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
          Work Experience
        </h3>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-blue-200">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full" />
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                <div className="text-blue-600 font-medium mb-2">{exp.company}</div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {exp.location}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{exp.description}</p>
                
                <div className="space-y-4 mb-6">
                  {exp.achievements.map((achievement, aIndex) => (
                    <div key={aIndex} className="flex items-start p-3 bg-gray-50 rounded-lg">
                      {React.createElement(achievement.icon, { className: "w-5 h-5 mr-3 text-blue-600 mt-1" })}
                      <div>
                        <h5 className="font-medium text-gray-800">{achievement.title}</h5>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-gray-600 mb-2">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIndex) => (
                      <span 
                        key={tIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-8 flex items-center">
          <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
          Education
        </h3>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-blue-200">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full" />
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                <div className="text-blue-600 font-medium mb-2">{edu.school}</div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {edu.location}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{edu.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {edu.courses.map((course, cIndex) => (
                    <div key={cIndex} className="flex items-start p-3 bg-gray-50 rounded-lg">
                      {React.createElement(course.icon, { className: "w-5 h-5 mr-3 text-blue-600 mt-1" })}
                      <div>
                        <h5 className="font-medium text-gray-800">{course.name}</h5>
                        <p className="text-sm text-gray-600">{course.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-8 flex items-center">
          <Award className="w-6 h-6 mr-2 text-blue-600" />
          Certifications & Professional Development
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {React.createElement(cert.icon, { className: "w-8 h-8 text-blue-600 mb-4" })}
              <h4 className="font-semibold text-gray-800 mb-2">{cert.name}</h4>
              <div className="text-sm text-blue-600 mb-2">{cert.issuer} · {cert.date}</div>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
