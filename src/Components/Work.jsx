import React from 'react'
import pickmeals from '../assets/assests/pick-meals-image.png'
import delivery from '../assets/assests/delivery-image.png'
import choose  from '../assets/assests/choose-image.png'

const Work = () => { 
    const workInfoData = [
        {
            image: pickmeals,
            title: 'Pick Meals',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            image: delivery,
            title: 'Fast Delivery', 
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            image: choose,
            title: 'Choose Favorite', 
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        }
    ]
    
  return (
    <section className="work-section-container">


    </section>
  )
}

export default Work