import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/avatars/av1.jpeg'
import avatar3 from '../../assets/avatars/doddy.jpeg'
import avatar2 from '../../assets/avatars/av2.jpeg'
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: avatar1,
    name: 'Naruto Uzumaki',
    review: " djslfhdj jdshfj jsdhjfhdjsfjksd jdksjdksjd  jsdkdjksjds jksdjskjdskd'kdjflsjlfjdskfjksldfjlsdfjkdfkdslfkdsflsdfkdlfjljsdfkljfsdjfksdjfkljslkfjskd"
  }, 
  {
    avatar: avatar1,
    name: 'Naruto Uzumaki',
    review: " djslfhdj jdshfj jsdhjfhdjsfjksd jdksjdksjd  jsdkdjksjds jksdjskjdskd'kdjflsjlfjdskfjksldfjlsdfjkdfkdslfkdsflsdfkdlfjljsdfkljfsdjfksdjfkljslkfjskd"
  }, 
  {
    avatar: avatar1,
    name: 'Naruto Uzumaki',
    review: " djslfhdj jdshfj jsdhjfhdjsfjksd jdksjdksjd  jsdkdjksjds jksdjskjdskd'kdjflsjlfjdskfjksldfjlsdfjkdfkdslfkdsflsdfkdlfjljsdfkljfsdjfksdjfkljslkfjskd"
  }, 
  {
    avatar: avatar1,
    name: 'Naruto Uzumaki',
    review: " djslfhdj jdshfj jsdhjfhdjsfjksd jdksjdksjd  jsdkdjksjds jksdjskjdskd'kdjflsjlfjdskfjksldfjlsdfjkdfkdslfkdsflsdfkdlfjljsdfkljfsdjfksdjfkljslkfjskd"
  }, 
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper 
            className='container testimonials__container'
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
              >
        {
          data.map(({avatar,name,review}, index)=>{
            return(

              <SwiperSlide key={index} className='testimonial'>
            <div className='client-avatar'>
                <img src={avatar} alt="avatar one" />
            </div>
                <h5>{name}</h5>
                <small className='client__review'> {review}</small>
           </SwiperSlide>
                )
              })
            }
        </Swiper>
    </section>
  )
}

export default Testimonials