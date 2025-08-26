import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Experience from './components/Experience'

function App() {

  return (
    <div className='bg-primary text-secondary'>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App
