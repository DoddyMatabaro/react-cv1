import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'
import Typewriter from 'typewriter-effect';

const Header = () => {

  return (
   <header >
        <div className="container header__container">
        <Typewriter
        
              onInit={(typewriter) => {
                typewriter.typeString('<h5>Hello I\'m</h5>')
                .pauseFor(3000)
                 typewriter.typeString('<h1>Doddy MATABARO</h1>')                
                  .pauseFor(3500)
                 typewriter.typeString('<h5 class="text-light">Fullstack Developper</h5>')                
                  // .deleteAll()
                  .start();
                  
              }}
/>
            <CTA />
            <div className="me">
                  <img src={ME} alt=""/>
            </div>
            <HeaderSocials />
   
            <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
   </header>
  )
}

export default Header