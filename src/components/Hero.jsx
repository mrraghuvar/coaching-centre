import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const parallaxX = (mousePosition.x / window.innerWidth - 0.5) * 20
  const parallaxY = (mousePosition.y / window.innerHeight - 0.5) * 20

  const scrollToContact = () => {
    const contact = document.getElementById('contact')
    if (contact) contact.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Floating Shapes */}
        <motion.div 
          animate={{ 
            x: parallaxX,
            y: parallaxY 
          }}
          className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: -parallaxX * 0.5,
            y: -parallaxY * 0.5 
          }}
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-green-400/10 to-cyan-400/10 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-8"
            >
              <span className="text-sm font-semibold text-blue-700">🏆 Ranked #1 Coaching Center Nationwide</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Where <span className="gradient-text">Excellence</span> Meets 
              <br />
              <span className="relative">
                Education
                <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 200 10">
                  <path 
                    d="M0,5 Q50,0 100,5 T200,5" 
                    stroke="url(#gradient)" 
                    strokeWidth="3" 
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#667eea" />
                      <stop offset="100%" stopColor="#764ba2" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              Join 25,000+ successful students who transformed their academic journey with our proven methodology, expert faculty, and cutting-edge technology.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-bold text-lg hover:border-blue-500 hover:text-blue-600 flex items-center justify-center gap-3"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                  <svg className="h-6 w-6 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Watch Demo
              </motion.button>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { value: '98%', label: 'Success Rate', color: 'from-green-500 to-emerald-500' },
                { value: '25K+', label: 'Students', color: 'from-blue-500 to-cyan-500' },
                { value: '200+', label: 'Expert Faculty', color: 'from-purple-500 to-pink-500' },
                { value: '15+', label: 'Years Excellence', color: 'from-orange-500 to-red-500' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Content - 3D Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 transform-gpu">
              {/* Card Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-20"></div>
              
              {/* Card Content */}
              <div className="relative bg-white rounded-2xl p-6">
                {/* Live Class Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Live Class Dashboard</h3>
                    <p className="text-gray-500">Real-time learning experience</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-bold">LIVE</span>
                  </div>
                </div>
                
                {/* Live Classes List */}
                <div className="space-y-4 mb-8">
                  {[
                    { subject: 'Physics - Modern Physics', time: 'Now', teacher: 'Dr. Sharma', progress: 60 },
                    { subject: 'Chemistry - Organic', time: '10:30 AM', teacher: 'Prof. Gupta', progress: 45 },
                    { subject: 'Mathematics - Calculus', time: '2:00 PM', teacher: 'Ms. Patel', progress: 30 }
                  ].map((cls, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ x: 10 }}
                      className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-gray-900 group-hover:text-blue-600">{cls.subject}</h4>
                          <p className="text-sm text-gray-500">{cls.teacher}</p>
                        </div>
                        <span className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium shadow">
                          {cls.time}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${cls.progress}%` }}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Batch Progress */}
                <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-gray-900">Next Batch Starting</h4>
                      <p className="text-blue-600 font-bold">15th January 2024</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">74%</div>
                      <p className="text-sm text-gray-500">Seats Filled</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full w-3/4 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-5 w-5 bg-white rounded-full border-2 border-emerald-500"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">Hurry! Limited seats available</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -left-6 h-24 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl -rotate-12 shadow-xl"
            />
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -right-6 h-24 w-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl rotate-12 shadow-xl"
            />
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
          <div className="h-10 w-6 rounded-full border-2 border-gray-300 flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero