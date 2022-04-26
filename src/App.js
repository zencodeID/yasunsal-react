import './App.css'
import './style.css'
import React from 'react'
import VanillaTilt from 'vanilla-tilt'
import Navbar from './component/navbar'
import Hero from './component/hero'
import About from './component/about'
import Lembaga from './component/lembaga'
import Fasilitas from './component/fasilitas'
import Blog from './component/blog'
import Media from './component/media'
import Galery from './component/galery'
import Footer from './component/footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Lembaga />
      <Fasilitas />
      <Media />
      <Blog />
      <Galery />
      <Footer />
    </>
  )
}

export default App
