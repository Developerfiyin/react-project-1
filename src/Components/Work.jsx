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
            image: choose ,
            title: 'Choose How Often', 
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        }
    ]

  return (
    <section className="work-section-wrapper">
       <div className="work-section-top"> 
        <p className='primary-subheading'> Work</p>
        <h2 className="primary-subheading">How It Works</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta at obcaecati rerum? Eos, saepe reiciendis ipsum unde 
            voluptatum aliquam maiores quibusdam sapiente at ducimus odit eum ex, tempore quidem. Necessitatibus!</p>
       </div>

<div className="work-section-bottom">
    {workInfoData.map((data) => (
        <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
                <img src={data.image} alt={data.title} />
            </div>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
        </div>
    ))}

</div>

    </section>
  )
}

export default Work