import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'




function App() {
 

  return (
   <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  )
}

export default App
