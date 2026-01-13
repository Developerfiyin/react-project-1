import React from 'react'
import john from '../assets/assests/john-doe-image.png'
const Testimonials = () => {
  return (
    <section className="testimonials-section-wrapper">
      <div className="testimonials-section-top">
        <p className='primary-subheading'>Testimonials</p>
        <h2 className="primary-heading">What are Our Customers Saying ? </h2>
          <p className=' primary-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veritatis deleniti, velit qui exercitationem illo nisi aspernatur 
            atque voluptatum, sed dolorem ullam quis dolores ipsa. Vel dicta fugiat exercitationem nesciunt.</p>
      </div>

      <div className="testimonials-section-bottom">
        <div className="testimonial-box">
          <img src={john} alt="John Doe" />
          <p className='primary-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veritatis deleniti, velit qui exercitationem illo nisi aspernatur 
            atque voluptatum, sed dolorem ullam quis dolores ipsa. Vel dicta fugiat exercitationem nesciunt.</p>
        </div>
      </div>

      
    </section>
  )
}

export default Testimonials