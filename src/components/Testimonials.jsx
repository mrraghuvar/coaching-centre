import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rahul Verma',
      score: '98.5%',
      rank: 'AIR 24',
      exam: 'JEE Advanced 2023',
      quote: 'EduMaster transformed my JEE preparation. The personalized attention and test series were game-changers.'
    },
    {
      name: 'Priya Sharma',
      score: '720/720',
      rank: 'AIR 12',
      exam: 'NEET UG 2023',
      quote: 'The biology faculty is exceptional! Regular mock tests and doubt sessions helped me achieve perfect score.'
    },
    {
      name: 'Arjun Patel',
      score: '99.2%',
      rank: 'AIR 8',
      exam: 'Class 12 Boards',
      quote: 'Concept clarity and regular revision sessions made all the difference. Thank you EduMaster team!'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="results" className="py-12 md:py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student <span className="text-blue-600">Success</span> Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our toppers who transformed their academic journey with us
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{currentTestimonial.name}</h3>
              <p className="text-blue-600">{currentTestimonial.exam}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 italic">"{currentTestimonial.quote}"</p>
          </div>
          
          <div className="flex items-center justify-between pt-8 border-t">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{currentTestimonial.score}</div>
                <p className="text-sm text-gray-600">Score</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{currentTestimonial.rank}</div>
                <p className="text-sm text-gray-600">Rank</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;