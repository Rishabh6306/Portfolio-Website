import { } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      {/* Add Navbar  */}
      <Navbar/>

      {/* Add Home Page  */}
      <Home />

      {/* Add About Page  */}
      <About/>

      {/* Add Projects Page  */}
      <Projects/>

      {/* Add Contact Page  */}
      <Contact/>

      {/* Add Footer  */}
      <Footer/>


    </>
  )
}

export default App