import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Components/Navbar.jsx'
import Newsboard from './Components/Newsboard.jsx'
import Newsitem from './Components/Newsitem.jsx'
import './App.css'

function App() {
  const [category,setCategory]=useState("general");


  return (
    <>
     <Navbar setCategory={setCategory}/>
     <Newsboard category={category}/>
     <Newsitem/>
    </>
  )
}

export default App
