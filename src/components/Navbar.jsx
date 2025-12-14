import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Courses', id: 'courses' },
    { name: 'Teachers', id: 'teachers' },
    { name: 'Results', id: 'results' },
    { name: 'Contact', id: 'contact' }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Top Announcement Bar */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-2 px-4 w-full"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <span className="animate-pulse">✨</span>
            <span>🎓 Admission Open for 2024-25 Batch</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Mon-Sat: 9AM-7PM
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 98765 43210
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'glass shadow-xl py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-70"></div>
                <div className="relative p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Edu<span className="gradient-text">Master</span></h1>
                <p className="text-xs text-gray-500 font-medium">Excellence in Education</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-xl transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-700"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass mt-4 rounded-2xl mx-4 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 hover:from-blue-100 hover:to-purple-100 transition-all"
                  >
                    {item.name}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg"
                >
                  Free Trial
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar