import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      year: '2025',
      description: 'Comprehensive study of cloud architecture, deployment models, and services.',
      color: 'bg-purple-100 border-purple-300'
    },
    {
      title: 'Data Structures & Algorithms',
      issuer: 'Board Infinity',
      year: '2024',
      description: 'Advanced algorithms, optimization techniques, and complex data structures.',
      color: 'bg-teal-100 border-teal-300'
    },
    {
      title: 'Generative AI',
      issuer: 'Coursera',
      year: '2024',
      description: 'Deep learning models, natural language processing, and AI content generation.',
      color: 'bg-rose-100 border-rose-300'
    },
    {
      title: 'Data Analysis',
      issuer: 'Coursera',
      year: '2024',
      description: 'Statistical methods, data visualization, and analytical techniques.',
      color: 'bg-amber-100 border-amber-300'
    },
    {
      title: 'Web Development',
      issuer: 'Govt. Institute',
      year: '2023',
      description: 'Front-end and back-end development with responsive design principles.',
      color: 'bg-indigo-100 border-indigo-300'
    },
    {
      title: 'Python',
      issuer: 'Udemy',
      year: '2022',
      description: 'Programming fundamentals, object-oriented concepts, and Python libraries.',
      color: 'bg-emerald-100 border-emerald-300'
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  const nextSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex + cardsToShow >= certifications.length ? 0 : prevIndex + cardsToShow
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex - cardsToShow < 0 ? Math.max(certifications.length - cardsToShow, 0) : prevIndex - cardsToShow
    );
  };

  return (
    <section id="certifications" className="section bg-gradient-to-br from-purple-50 to-teal-50">
      <div className="section-title">
        <h2>Certifications</h2>
      </div>
      <div className="relative">
        <div className="flex overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${startIndex * (100 / cardsToShow)}%)` }}
          >
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4"
              >
                <div className={`card h-full border-l-4 ${cert.color} hover:scale-105 transition-transform duration-300`}>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{cert.title}</h3>
                      <span className="bg-purple-600 text-white text-sm px-2 py-1 rounded">{cert.year}</span>
                    </div>
                    <p className="text-slate-600 mb-4">{cert.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">{cert.issuer}</span>
                      <a href="#" className="text-purple-600 hover:text-purple-800 flex items-center gap-1 text-sm">
                        <span>View</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-purple-600 hover:text-purple-800 hover:bg-purple-50 transition-colors z-10"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-purple-600 hover:text-purple-800 hover:bg-purple-50 transition-colors z-10"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="flex justify-center mt-6">
        {Array.from({ length: Math.ceil(certifications.length / cardsToShow) }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              Math.floor(startIndex / cardsToShow) === index ? 'bg-purple-600' : 'bg-purple-200'
            }`}
            onClick={() => setStartIndex(index * cardsToShow)}
          />
        ))}
      </div>
    </section>
  );
};

export default Certifications;