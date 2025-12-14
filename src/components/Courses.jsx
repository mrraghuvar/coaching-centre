import React from 'react';

const Courses = () => {
  const courses = [
    {
      title: 'JEE Mains & Advanced',
      description: 'Complete preparation with 1000+ practice problems',
      duration: '12 Months',
      students: '1500',
      rating: '4.9',
      price: '₹45,000'
    },
    {
      title: 'NEET UG 2024',
      description: 'Biology focused coaching with mock tests',
      duration: '10 Months',
      students: '1200',
      rating: '4.8',
      price: '₹40,000'
    },
    {
      title: 'Class 12 Boards',
      description: 'Comprehensive syllabus coverage',
      duration: '9 Months',
      students: '1800',
      rating: '4.7',
      price: '₹35,000'
    }
  ];

  return (
    <section id="courses" className="py-12 md:py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Courses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our range of expertly designed courses for academic excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Popular</span>
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-bold">{course.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 3.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
                    </svg>
                    <span className="text-sm">{course.students} Students</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;