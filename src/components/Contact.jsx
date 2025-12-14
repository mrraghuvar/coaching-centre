import { useState, useEffect } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  const [activeContact, setActiveContact] = useState(0)

  const contactMethods = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone Support',
      details: ['+91 98765 43210', '+91 98765 43211'],
      description: 'Mon-Sat, 9AM-7PM',
      color: 'from-blue-500 to-cyan-500',
      action: 'tel:+919876543210'
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Support',
      details: ['info@edumaster.com', 'admissions@edumaster.com'],
      description: 'Response within 2 hours',
      color: 'from-green-500 to-emerald-500',
      action: 'mailto:info@edumaster.com'
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Campus',
      details: ['123 Education Street', 'Knowledge City, Delhi'],
      description: 'Mon-Sat, 10AM-6PM',
      color: 'from-purple-500 to-pink-500',
      action: 'https://maps.google.com'
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Working Hours',
      details: ['Monday - Saturday: 9AM - 7PM', 'Sunday: 10AM - 2PM'],
      description: 'Admissions office',
      color: 'from-orange-500 to-red-500',
      action: null
    }
  ]

  const courses = [
    'Select a course',
    'JEE Mains & Advanced',
    'NEET UG 2024',
    'Class 12 Boards',
    'Class 10 Boards',
    'Foundation Course',
    'Crash Course',
    'Other'
  ]

  const faqs = [
    {
      question: 'What is the admission process?',
      answer: 'Visit our campus or apply online, attend a counseling session, take a diagnostic test, and complete the admission formalities.'
    },
    {
      question: 'Do you provide study material?',
      answer: 'Yes, we provide comprehensive study material including textbooks, practice sheets, test series, and digital content.'
    },
    {
      question: 'Can I attend demo classes?',
      answer: 'Absolutely! We offer free demo classes for all courses. Schedule a demo session through our contact form or call us.'
    },
    {
      question: 'What is the batch size?',
      answer: 'We maintain small batch sizes of 20-25 students to ensure personalized attention and better learning outcomes.'
    }
  ]

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = 'Name is required'
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Enter a valid email address'
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required'
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Enter a valid 10-digit phone number'
    }
    if (!formData.course || formData.course === 'Select a course') errors.course = 'Please select a course'
    if (!formData.message.trim()) errors.message = 'Message is required'
    return errors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validateForm()
    
    if (Object.keys(errors).length === 0) {
      setLoading(true)
      // Simulate API call
      setTimeout(() => {
        setLoading(false)
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
          message: ''
        })
        setFormErrors({})
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      }, 1500)
    } else {
      setFormErrors(errors)
      // Scroll to first error
      const firstError = Object.keys(errors)[0]
      document.querySelector(`[name="${firstError}"]`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveContact((prev) => (prev + 1) % contactMethods.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="contact" className="py-12 md:py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 mb-4">
            <span className="text-sm font-semibold text-blue-600">📞 Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of these channels.
          </p>
        </div>

        {/* Contact Methods - Mobile Carousel */}
        <div className="md:hidden mb-8">
          <div className="relative bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Quick Contact</h3>
              <div className="flex gap-2">
                {contactMethods.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveContact(index)}
                    className={`h-2 rounded-full transition-all ${index === activeContact ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${contactMethods[activeContact].color} mb-4`}>
                <div className="text-white">
                  {contactMethods[activeContact].icon}
                </div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{contactMethods[activeContact].title}</h4>
              {contactMethods[activeContact].details.map((detail, i) => (
                <p key={i} className="text-gray-600 mb-1">{detail}</p>
              ))}
              <p className="text-sm text-gray-500 mt-2">{contactMethods[activeContact].description}</p>
              
              {contactMethods[activeContact].action && (
                <a 
                  href={contactMethods[activeContact].action}
                  className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Connect Now
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Methods Grid - Desktop */}
            <div className="hidden md:grid grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${method.color} mb-4`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">{method.title}</h4>
                  {method.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm mb-1">{detail}</p>
                  ))}
                  <p className="text-xs text-gray-500 mt-3">{method.description}</p>
                  
                  {method.action && (
                    <a 
                      href={method.action}
                      className="mt-4 inline-block text-sm text-blue-600 font-medium hover:text-blue-700"
                    >
                      Contact →
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-lg font-bold">Quick Response Time</h4>
              </div>
              <p className="text-sm opacity-90">
                We typically respond within <span className="font-bold">2 hours</span> during working days. 
                For urgent queries, please call us directly.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <p className="text-xs opacity-80">WhatsApp Support</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2 hrs</div>
                  <p className="text-xs opacity-80">Email Response</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Instant</div>
                  <p className="text-xs opacity-80">Call Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
                <p className="text-gray-600">Fill the form below and we'll get back to you soon</p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Message Sent Successfully!</h4>
                <p className="text-gray-600 mb-8">
                  Thank you for contacting EduMaster. Our admissions team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.name ? 'border-red-300' : 'border-gray-300'}`}
                        placeholder="John Doe"
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.email ? 'border-red-300' : 'border-gray-300'}`}
                        placeholder="john@example.com"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Phone & Course */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        +91
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full pl-14 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.phone ? 'border-red-300' : 'border-gray-300'}`}
                        placeholder="98765 43210"
                        maxLength="10"
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interested Course <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none ${formErrors.course ? 'border-red-300' : 'border-gray-300'}`}
                      >
                        {courses.map((course, index) => (
                          <option key={index} value={course}>{course}</option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      {formErrors.course && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.course}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${formErrors.message ? 'border-red-300' : 'border-gray-300'}`}
                      placeholder="Tell us about your requirements, preferred batch timing, or any specific questions..."
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">
                      Minimum 20 characters
                    </span>
                    <span className={`text-xs ${formData.message.length < 20 ? 'text-red-500' : 'text-green-500'}`}>
                      {formData.message.length}/500
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-center text-sm text-gray-500">
                  By submitting, you agree to our{' '}
                  <a href="#" className="text-blue-600 hover:underline">privacy policy</a> and{' '}
                  <a href="#" className="text-blue-600 hover:underline">terms of service</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact