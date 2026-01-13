import { useState } from 'react'
import './App.css'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Work from './Components/Work.jsx'
import Testimonials from './Components/Testimonials.jsx'
import Contact from './Components/Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App"> 
        <Home />
        <About/>
       <Work/>
       <Testimonials/>
        <Contact/>
      </div>
     
    </>
  )
}

export default App
