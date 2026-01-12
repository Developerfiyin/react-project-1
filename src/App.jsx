import { useState } from 'react'
import './App.css'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <Home />
        <About/>
       

      </div>
     
    </>
  )
}

export default App
