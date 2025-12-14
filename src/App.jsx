import { useState } from 'react'
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
  return (
    <div >
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Teachers />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App