'use client';

import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Code, Brain, Database, BookOpen, BarChart } from 'lucide-react';

// Comprehensive experience data structure including achievements and technologies
const experiences = [
  {
    title: "Data Scientist, Business Intelligence",
    company: "The Lisinski Law Firm, LLC",
    location: "Remote",
    period: "June 2025 - Present",
    type: "Full-time",
    description: "Developing advanced analytics solutions to predict case growth, analyze immigration workflows, and drive data-driven decision-making across 50,000+ active cases.",
    achievements: [
      {
        title: "Forecasting & Case Analytics",
        description: "Developed predictive models using advanced ML techniques to forecast case growth and business development trends, enabling strategic planning",
        icon: Brain
      },
      {
        title: "Sentiment Analysis & Business Insights",
        description: "Conducted sentiment analysis on client and case data using LLM models to identify key themes and insights for business development",
        icon: Code
      },
      {
        title: "Power BI Dashboard Development",
        description: "Designed and maintained interactive Power BI dashboards visualizing KPIs, case metrics, and business performance for 15+ leadership stakeholders",
        icon: Database
      },
      {
        title: "FastAPI Backend & Azure Deployment",
        description: "Engineered high-performance FastAPI endpoints with optimized response times and deployed scalable data pipelines using Azure Functions",
        icon: Code
      },
      {
        title: "CI/CD Pipeline Implementation",
        description: "Designed end-to-end CI/CD pipelines for automated deployment of data science models and APIs to Azure, ensuring reliable deployments",
        icon: Database
      }
    ],
    technologies: [
      "FastAPI", "Azure Functions", "Power BI", "Python", "PostgreSQL", "LLMs", "Sentiment Analysis", "GitHub Actions", "CI/CD", "Machine Learning"
    ]
  },
  {
    title: "Data Scientist / Software Engineer",
    company: "THK Manufacturing of America",
    location: "Columbus, Ohio",
    period: "Jan 2024 - Jun 2025",
    type: "Full-time",
    description: "Led data science initiatives to optimize manufacturing processes and improve operational efficiency through advanced ML solutions handling 1TB+ daily data.",
    achievements: [
      {
        title: "API Development & Data Pipeline",
        description: "Engineered high-performance APIs using FastAPI with advanced caching for seamless data ingestion, processing, and retrieval of machine and inventory datasets",
        icon: Code
      },
      {
        title: "Predictive Modeling & Accuracy Improvement",
        description: "Developed predictive models with PyTorch and TensorFlow improving lead-time forecasting accuracy by 18% and optimizing inventory across 5,000+ SKUs",
        icon: Brain
      },
      {
        title: "Data Infrastructure & MLOps",
        description: "Architected containerized microservices with Kubernetes and Docker handling 1TB+ daily manufacturing data, implementing MLOps practices for model deployment",
        icon: Database
      },
      {
        title: "Data Processing & Feature Engineering",
        description: "Executed comprehensive data preprocessing and feature engineering using Polars and PySpark for accelerated large dataset processing",
        icon: Code
      },
      {
        title: "Data Visualization & Frontend Development",
        description: "Created dynamic Tableau visualizations and responsive React/JavaScript interfaces for enhanced user experience and data-driven insights",
        icon: Brain
      }
    ],
    technologies: [
      "FastAPI", "PyTorch", "TensorFlow", "Kubernetes", "Docker", "PostgreSQL", "React", "Python", "Polars", "PySpark", "Tableau", "JavaScript", "Git", "CI/CD"
    ]
  },
  {
    title: "Data Scientist",
    company: "PAGO Analytics",
    location: "India",
    period: "May 2019 - April 2021",
    type: "Full-time",
    description: "Led development of AI-powered talent acquisition solutions and data analysis platforms, achieving 30% improvement in hiring process efficiency.",
    achievements: [
      {
        title: "Resume Parsing System & Hiring Process",
        description: "Utilized Python, deep learning, and Spark to design Talent Acquisition Management System (TAMS) with 30% hiring efficiency improvement",
        icon: Brain
      },
      {
        title: "Dataset Creation & Labeling",
        description: "Collected and labeled 10,000+ resumes manually and automatically using NLTK, NLP, and Spacy for training data preparation",
        icon: Code
      },
      {
        title: "AWS SageMaker Deployment",
        description: "Engineered automated hiring process and facilitated deployment using AWS SageMaker for scalable model serving",
        icon: Database
      },
      {
        title: "Database Optimization",
        description: "Normalized SQL databases, improving data handling and system performance by 2X through optimized queries",
        icon: Database
      },
      {
        title: "Agile Team Collaboration",
        description: "Coordinated with cross-functional teams following Agile methodologies, participated in code reviews and ensured stakeholder satisfaction",
        icon: Code
      }
    ],
    technologies: [
      "Python", "AWS", "AWS SageMaker", "NLTK", "NLP", "Spacy", "SQL", "Spark", "Power BI", "AWS QuickSight", "Deep Learning"
    ]
  },
  {
    title: "Data Analyst",
    company: "Knowledge Matrix Pvt Ltd",
    location: "India",
    period: "March 2018 - February 2019",
    type: "Full-time",
    description: "Applied structured data analysis workflows and built ETL pipelines, uncovering valuable insights for decision-making and saving 5+ hours per 10 million records.",
    achievements: [
      {
        title: "ETL Pipeline Development",
        description: "Built ETL pipelines using Python and SQL to gather, clean, and transform data, saving 5+ hours for processing 10 million records",
        icon: Database
      },
      {
        title: "Analytics Dashboard Development",
        description: "Created visually appealing Tableau and PowerBI dashboards presenting key findings to stakeholders and supporting strategic planning",
        icon: Code
      },
      {
        title: "Statistical Analysis & Insights",
        description: "Applied statistical techniques and data visualization to identify patterns, correlations, and anomalies for process improvement",
        icon: Brain
      },
      {
        title: "Data Mining & Pattern Recognition",
        description: "Performed data mining and pattern recognition to uncover valuable insights and provide actionable recommendations for business growth",
        icon: Database
      }
    ],
    technologies: [
      "Python", "SQL", "Tableau", "Power BI", "ETL", "Data Analysis", "Statistical Analysis", "Data Mining"
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
    name: "Python and Machine Learning",
    issuer: "Coursera",
    date: "2023",
    description: "Comprehensive Python programming and machine learning fundamentals",
    icon: Brain
  },
  {
    name: "Introduction to Data Analytics",
    issuer: "Coursera",
    date: "2023",
    description: "Data analytics concepts, tools, and techniques",
    icon: Code
  },
  {
    name: "Tableau",
    issuer: "Udemy",
    date: "2023",
    description: "Advanced Tableau dashboard design and business intelligence",
    icon: BarChart
  },
  {
    name: "Power BI",
    issuer: "Udemy",
    date: "2023",
    description: "Power BI report creation, DAX, and data modeling",
    icon: BarChart
  },
  {
    name: "Django",
    issuer: "Udemy",
    date: "2022",
    description: "Django web framework and full-stack web development",
    icon: Code
  },
  {
    name: "Introduction to R Programming",
    issuer: "DataCamp",
    date: "2022",
    description: "R programming for statistical analysis and data science",
    icon: Brain
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
