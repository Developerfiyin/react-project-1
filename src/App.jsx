import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Home />
       hello world, jrbfeh

      </div>
     
    </>
  )
}

export default App
