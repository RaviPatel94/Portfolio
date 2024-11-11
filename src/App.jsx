import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-primary text-secondary'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
