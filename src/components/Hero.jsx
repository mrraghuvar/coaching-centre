import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 mb-6">
              <span className="text-sm font-semibold text-green-800">🏆 #1 Coaching Center in City</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your <span className="text-blue-600">Academic</span> Journey
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Join 10,000+ successful students with our proven teaching methodology, expert faculty, and personalized attention.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => {
                  const contact = document.getElementById('contact');
                  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 flex items-center justify-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-2xl font-bold text-gray-900">98%</span>
                </div>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 3.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
                  </svg>
                  <span className="text-2xl font-bold text-gray-900">10K+</span>
                </div>
                <p className="text-sm text-gray-600">Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-2xl font-bold text-gray-900">50+</span>
                </div>
                <p className="text-sm text-gray-600">Expert Faculty</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-2xl font-bold text-gray-900">15+</span>
                </div>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Live Class Demo</h3>
              <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">LIVE</span>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium">Physics - Class 12</span>
                <span className="text-xs text-gray-500">Now</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium">Chemistry - Class 11</span>
                <span className="text-xs text-gray-500">In 30 min</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="text-sm font-medium">Mathematics</span>
                <span className="text-xs text-gray-500">2:30 PM</span>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700 mb-2">🎯 Next Batch Starting: <span className="font-bold">15th January</span></p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">74% seats already filled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;