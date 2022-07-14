import React from 'react'
import './index.css'
import Header from "./components/header/Header.jsx"
import Nav from "./components/nav/Nav.jsx"
import About from "./components/about/About.jsx"
import Services from "./components/services/Services.jsx"
import Experience from "./components/experience/Experience.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact.jsx"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <>
      <Header></Header>
      <Nav />
      <About />
      <Experience/>
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
      <Contact />
    </>
  )
}

export default App