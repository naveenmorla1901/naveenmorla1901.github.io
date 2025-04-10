'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar,
  MapPin,
  Brain,
  Database,
  Code,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const experiences = [
  {
    period: "Feb 2024 - Present",
    company: "THK Manufacturing of America",
    role: "Data Scientist & Software Engineer",
    location: "Columbus, Ohio",
    description: "Leading data science initiatives to optimize manufacturing processes through advanced ML solutions.",
    achievements: [
      "Engineered high-performance APIs using FastAPI with advanced caching for seamless data ingestion, processing, and retrieval of machine and inventory datasets, and developed and fine-tuned predictive models with PyTorch and TensorFlow to enhance lead time forecasting and optimizing inventory management.",
      "Executed comprehensive data preprocessing, feature engineering, and data wrangling to improve model accuracy and robustness, leveraged Polars and PySpark for accelerated data processing, ensuring efficient handling of large datasets.",
      "Architected and managed containerized microservices with Kubernetes and Docker for scalable big data processing pipelines, implementing MLOps practices to streamline the deployment and monitoring of machine learning models. ",
      "Created dynamic data visualizations using Tableau for data-driven decision-making and developed responsive frontend interfaces with React and JavaScript to enhance user experience and data visualization.",
      "Utilized SQL for complex backend data management and querying, implemented Git version control, and established CI/CD pipelines for streamlined code management, automated testing, and continuous deployment. "
    ],
    focus: {
      ai: ["PyTorch", "TensorFlow", "NLP Models"],
      engineering: ["FastAPI", "Kubernetes", "PostgreSQL"],
      analytics: ["Real-time Dashboards", "Predictive Analytics"]
    }
  },
  {
    period: "May 2019 - April 2021",
    company: "PAGO Analytics",
    role: "Data Scientist",
    location: "India",
    description: "Led AI-powered solutions for talent acquisition and data analysis.",
    achievements: [
      "Utilized Python, and deep learning libraries to design resume parsing techniques to build a Talent Acquisition Management System (TAMS). Developed advanced AI features with 30% more efficiency in the hiring process. ",
      "Engineered an automated hiring process and facilitated its deployment using AWS Sagemaker. Collect 10,000+ resumes and label them atomically and manually for the training data, using libraries like NLTK, NLP, and Spacy to analyze data.",
      "Normalizing SQL databases, improving data handling and system performance by 2X. Coordinated with cross-functional teams throughout the development and deployment process, following Agile methodologies. ",
      "Applied strong analytical skills and creativity in data mining and defining essential KPIs/metrics. Communicated complex data points in a comprehensible manner to stakeholders using Power BI. Fostered lasting relationships, ensuring smooth project execution, stakeholder satisfaction, and participation in code review."
    ],
    focus: {
      ai: ["NLP", "BERT Models", "Deep Learning"],
      engineering: ["AWS", "SQL", "Python"],
      analytics: ["Power BI", "Statistical Analysis"]
    }
  },
  {
    period: "March 2018 - February 2019",
    company: "Knowledge Matrix",
    role: "Data Analyst",
    location: "India",
    description: "Focused on data analysis and visualization to drive business insights.",
    achievements: [
      "Applied a structured data analysis workflow and built an ETL pipeline using tools like Python and SQL to gather, clean, and transform data, uncovering valuable insights for informed decision-making and saving 5+ hours for 10 million records. ",
      "Utilized popular tools like Tableau and PowerBI to create visually appealing dashboards and reports, effectively presenting key findings to stakeholders and supporting strategic planning. ",
      "Applied statistical techniques and data visualization to identify patterns, correlations, and anomalies, providing actionable insights and recommendations for process improvement and business growth."
    ],
    focus: {
      ai: ["Statistical Models", "Predictive Analytics"],
      engineering: ["ETL Pipelines", "SQL", "Python"],
      analytics: ["Tableau", "Business Intelligence"]
    }
  }
];

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [useFallback, setUseFallback] = useState(false);

  // Use useRef to track if component is mounted
  const isMounted = useRef(true);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Handle errors gracefully
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.error && event.error.message && event.error.message.includes('message channel closed')) {
        event.preventDefault();
        if (isMounted.current) {
          setError('An error occurred with the carousel. Please refresh the page.');
          setIsAnimating(false);
        }
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  const rotateExperiences = (direction: 'left' | 'right') => {
    if (isAnimating) return;

    try {
      setIsAnimating(true);
      const newIndex = direction === 'left'
        ? (activeIndex - 1 + experiences.length) % experiences.length
        : (activeIndex + 1) % experiences.length;

      setActiveIndex(newIndex);

      // Only update state if component is still mounted
      const timer = setTimeout(() => {
        if (isMounted.current) {
          setIsAnimating(false);
        }
      }, 500);

      // Clear timeout if component unmounts
      return () => clearTimeout(timer);
    } catch (err) {
      console.error('Error in carousel navigation:', err);
      if (isMounted.current) {
        setIsAnimating(false);
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          <p>{error}</p>
          <div className="flex space-x-2 mt-2">
            <button
              onClick={() => {
                setError(null);
                setActiveIndex(0);
                setIsAnimating(false);
              }}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
            >
              Reset
            </button>
            <button
              onClick={() => {
                setError(null);
                setUseFallback(true);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm"
            >
              Use Simple View
            </button>
          </div>
        </div>
      )}

      {useFallback ? (
        // Fallback simple view without animations
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{exp.description}</p>
              <div className="mb-4">
                <h4 className="text-md font-semibold mb-2">Key Achievements</h4>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2" />
                      <p className="text-gray-700 text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative min-h-[600px] flex items-center">
        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.preventDefault();
            rotateExperiences('left');
          }}
          className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
          disabled={isAnimating}
          aria-label="Previous experience"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            rotateExperiences('right');
          }}
          className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
          disabled={isAnimating}
          aria-label="Next experience"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Experience Cards */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            onTransitionEnd={() => {
              if (isMounted.current && isAnimating) {
                setIsAnimating(false);
              }
            }}>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 px-4 transition-all duration-500
                  ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}
              >
                <div className="bg-white rounded-xl shadow-xl p-8">
                  {/* Company and Role Info */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{exp.description}</p>

                  {/* Key Achievements */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                          <p className="text-gray-700">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Brain className="w-5 h-5 text-blue-600 mr-2" />
                        <h5 className="font-medium">AI/ML</h5>
                      </div>
                      <div className="space-y-1">
                        {exp.focus.ai.map((item, i) => (
                          <p key={i} className="text-sm text-gray-600">{item}</p>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Code className="w-5 h-5 text-purple-600 mr-2" />
                        <h5 className="font-medium">Engineering</h5>
                      </div>
                      <div className="space-y-1">
                        {exp.focus.engineering.map((item, i) => (
                          <p key={i} className="text-sm text-gray-600">{item}</p>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Database className="w-5 h-5 text-green-600 mr-2" />
                        <h5 className="font-medium">Analytics</h5>
                      </div>
                      <div className="space-y-1">
                        {exp.focus.analytics.map((item, i) => (
                          <p key={i} className="text-sm text-gray-600">{item}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>)}

      {!useFallback && (
        <div className="flex justify-center space-x-2 mt-8">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                if (!isAnimating) setActiveIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to experience ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>
      )}

      {useFallback && (
        <div className="text-center mt-4">
          <button
            onClick={() => setUseFallback(false)}
            className="text-blue-600 hover:text-blue-800 underline text-sm"
          >
            Try Interactive View
          </button>
        </div>
      )}
    </div>
  );
};

export default ExperienceCarousel;