import React from 'react'
import "./portfolio.css"
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'

const data = [
  {
    id:1,
    image: img1,
    title:  'Crypto currency Dashboard & financail visualization',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:2,
    image: img2,
    title:  'Crypto currency Dashboard & financail visualization',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:3,
    image: img3,
    title:  'Crypto currency Dashboard & financail visualization',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:4,
    image: img4,
    title:  'Crypto currency Dashboard & financail visualization',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:5,
    image: img5,
    title:  'Crypto currency Dashboard & financail visualization',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:6,
    image: img6,
    title:  'Crypto currency Dashboard & financail visualization',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
          {
            data.map(({id,image,title,github,demo})=>{
              return(
                <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt="" />
                </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                  <a href={github} className="btn">GitHub</a>
                  <a href={demo} className="btn btn-primary">Live Demo</a>
                  </div>
            </article> 
              )
            })
          }       
      </div>
    </section>
  )
}

export default Portfolio