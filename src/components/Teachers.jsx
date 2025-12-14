import React, { useState } from 'react';

const Teachers = () => {
  const [teachers] = useState([
    {
      id: 1,
      name: 'Dr. Rajesh Sharma',
      subject: 'Physics (IIT-JEE)',
      experience: '15+ years',
      rating: 4.9,
      students: 2500
    },
    {
      id: 2,
      name: 'Prof. Anjali Gupta',
      subject: 'Chemistry (NEET)',
      experience: '12+ years',
      rating: 4.8,
      students: 2000
    },
    {
      id: 3,
      name: 'Mr. Vikram Patel',
      subject: 'Mathematics',
      experience: '10+ years',
      rating: 4.9,
      students: 1800
    }
  ]);

  return (
    <section id="teachers" className="py-12 md:py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Expert</span> Faculty
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from the best minds with proven track records of producing top rankers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div 
              key={teacher.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-32 w-32 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-bold">{teacher.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{teacher.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{teacher.subject}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">{teacher.experience} Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 3.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
                    </svg>
                    <span className="text-sm">{teacher.students.toLocaleString()} Students</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;