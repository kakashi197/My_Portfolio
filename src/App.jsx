import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technology from './components/Technology'
import Exp from './components/Exp'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Hackathon from './components/Hackthon'



const App = () => {
  return (
    <div className='overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full '>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>


   

    <div className='container mx-auto px-8 pt-20'> {/* Fixed missing closing quote */}
        <Navbar />
        <Hero/>
        <About/>
        <Resume/>
        <Technology/>
        <Exp/>
        <Hackathon />
        <Projects/>

       

       <section id="contact">
        <Contact />
      </section>
        
        
      </div>
    </div>
  )
}

export default App
