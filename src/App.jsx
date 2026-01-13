import { useState } from 'react'
import './App.css'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Work from './Components/Work.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App"> 
        <Home />
        <About/>
       <Work/>

      </div>
     
    </>
  )
}

export default App
