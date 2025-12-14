import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Courses from './components/Courses'
import Teachers from './components/Teachers'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000)
    
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div 
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
        >
          <div className="text-center">
            <div className="relative">
              <div className="h-24 w-24 rounded-full border-4 border-white/20 border-t-white animate-spin mx-auto mb-8"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-white mb-4"
            >
              EduMaster
            </motion.h1>
            <p className="text-white/80">Loading excellence in education...</p>
          </div>
        </motion.div>
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50/30">
          {/* Animated Background Elements */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-r from-green-500/10 to-cyan-500/10 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-indigo-500/5 to-pink-500/5 blur-3xl"></div>
          </div>

          {/* Floating Particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 bg-blue-400/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * -100],
                x: [null, Math.random() * 50 - 25],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}

          <Navbar scrollY={scrollY} />
          <Hero />
          <Features />
          <Courses />
          <Teachers />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </AnimatePresence>
  )
}

export default App