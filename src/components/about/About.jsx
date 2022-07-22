import React from 'react'
import './about.css'
import ME from '../../assets/profile.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {

  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>
        <div className='container about__container'>
          <div className='about__me'>
              <div className='about__me-img'>
                <img src={ME} alt="About image" />
              </div>
          </div>
          <div className='about__content'>
              <div className='about__cards'>
                  <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <small>3+ Years working</small>
                  </article>
                  <article className='about__card'>
                    <FiUsers className='about__icon'/>
                    <h5>Clients</h5>
                    <small>200 Worldwide</small>
                  </article>
                  <article className='about__card'>
                    <VscFolderLibrary className='about__icon'/>
                    <h5>Projets</h5>
                    <small>200 Worldwide</small>
                  </article>
              </div>
              <p>idjskldjlskjlksjjklhajkhfjkdshfjklshadfjkasdhfjklashdfjklhsdjklfhkljsjdfkldshfjsafjsdhfklsdfcjshdskhf
                lsjkdhflsfhdljkhfdjkhfjksdhfk</p>
          </div>
        </div>
    </section>
  )
}

export default About