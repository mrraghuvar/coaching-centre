import { motion } from 'framer-motion'
import { useState } from 'react'

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const features = [
    {
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'AI-Powered Learning',
      description: 'Smart algorithms adapt to each student\'s learning pace',
      gradient: 'from-blue-500 to-cyan-500',
      stats: '40% faster learning'
    },
    {
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: '1:1 Mentorship',
      description: 'Personalized guidance from industry experts',
      gradient: 'from-purple-500 to-pink-500',
      stats: '24/7 support'
    },
    {
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Live Interactive',
      description: 'Real-time doubt solving & interactive sessions',
      gradient: 'from-green-500 to-emerald-500',
      stats: '500+ hours live'
    },
    {
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Analytics Dashboard',
      description: 'Track progress with detailed performance insights',
      gradient: 'from-orange-500 to-red-500',
      stats: '100+ metrics'
    },
    {
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Secure Platform',
      description: 'Enterprise-grade security for your data',
      gradient: 'from-indigo-500 to-blue-500',
      stats: '99.9% uptime'
    },
    {
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Career Guidance',
      description: 'Expert counseling for career opportunities',
      gradient: 'from-teal-500 to-green-500',
      stats: '500+ placements'
    }
  ]

  return (
    <section id="features" className="relative py-24 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-6">
            <span className="text-sm font-semibold text-blue-700">🌟 Why We're Different</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Experience <span className="gradient-text">Next-Gen</span> Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven teaching methodologies to deliver an unparalleled learning experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="h-full w-full bg-white rounded-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <motion.div 
                    animate={hoveredIndex === index ? { rotateY: 180 } : { rotateY: 0 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-8 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </motion.div>
                  
                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-bold">
                      {feature.stats}
                    </span>
                    <motion.div
                      animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                      className="text-blue-600 group-hover:text-purple-600 transition-colors"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Floating Element */}
                <motion.div
                  animate={hoveredIndex === index ? { scale: 1 } : { scale: 0 }}
                  className={`absolute -bottom-4 -right-4 h-20 w-20 bg-gradient-to-r ${feature.gradient} rounded-full blur-2xl opacity-20`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden"
        >
          <div className="relative">
            <div className="absolute -top-20 -right-20 h-40 w-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-40 w-40 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
              {[
                { value: '100K+', label: 'Practice Questions', icon: '📚' },
                { value: '5000+', label: 'Video Lectures', icon: '🎬' },
                { value: '24/7', label: 'Doubt Support', icon: '💬' },
                { value: '50+', label: 'Mock Tests', icon: '📝' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features